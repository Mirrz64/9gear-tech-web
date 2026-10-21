import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from "@/lib/chat/systemPrompt";
import { isRateLimited } from "@/lib/chat/rateLimit";

export const runtime = "nodejs";

const MODEL = "claude-haiku-5-5";
const MAX_OUTPUT_TOKENS = 500;
const MAX_HISTORY = 12; // most recent messages sent to the model
const MAX_MESSAGE_CHARS = 1000; // per visitor message

type ChatMessage = { role: "user" | "assistant"; content: string };

const anthropic = new Anthropic(); // reads ANTHROPIC_API_KEY from the environment

function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

function parseMessages(body: unknown): ChatMessage[] | null {
  if (!body || typeof body !== "object" || !Array.isArray((body as { messages?: unknown }).messages)) {
    return null;
  }

  const raw = (body as { messages: unknown[] }).messages;
  const messages: ChatMessage[] = [];

  for (const m of raw) {
    if (!m || typeof m !== "object") return null;
    const { role, content } = m as { role?: unknown; content?: unknown };
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") return null;
    const trimmed = content.trim();
    if (!trimmed) continue;
    messages.push({ role, content: trimmed.slice(0, MAX_MESSAGE_CHARS) });
  }

  // Keep only recent history, and make sure it starts with a visitor message.
  const recent = messages.slice(-MAX_HISTORY);
  while (recent.length && recent[0].role !== "user") recent.shift();

  if (!recent.length || recent[recent.length - 1].role !== "user") return null;
  return recent;
}

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY is not set");
    return jsonError("The assistant isn't configured yet.", 500);
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return jsonError("You've sent a lot of messages. Wait a few minutes, or use the contact form instead.", 429);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid request.", 400);
  }

  const messages = parseMessages(body);
  if (!messages) return jsonError("Invalid request.", 400);

  try {
    const stream = await anthropic.messages.create({
      model: MODEL,
      max_tokens: MAX_OUTPUT_TOKENS,
      system: SYSTEM_PROMPT,
      messages,
      stream: true,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          controller.close();
        } catch (err) {
          console.error("Chat stream error:", err);
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Chat request failed:", err);
    return jsonError("The assistant is unavailable right now. Please use the contact form instead.", 502);
  }
}
