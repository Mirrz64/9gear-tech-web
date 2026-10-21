"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Message = {
  role: "assistant",
  content: "Hi! I can answer questions about 9GEAR TECH's services and our product, 9Gear Pulse. What are you working on?",
};

const SUGGESTIONS = ["What services do you offer?", "Tell me about 9Gear Pulse", "How do I start a project?"];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Keep the newest message in view.
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, error]);

  // Focus the input when opening; close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Cancel any in-flight reply if the component unmounts.
  useEffect(() => () => abortRef.current?.abort(), []);

  async function send(text: string) {
    const content = text.trim();
    if (!content || isSending) return;

    const history: Message[] = [...messages, { role: "user", content }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setError(null);
    setIsSending(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // The greeting lives only in the browser; the server drops it.
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: reply }]);
      }

      if (!reply.trim()) throw new Error("No reply came back. Please try again.");
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setMessages(history); // remove the empty reply bubble
      setError((err as Error).message || "Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
      abortRef.current = null;
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  const showSuggestions = messages.length === 1 && !isSending;

  return (
    <div
      className="fixed z-50 right-4 sm:right-6"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
    >
      {isOpen && (
        <div
          id="chat-panel"
          role="dialog"
          aria-label="Chat with 9GEAR TECH"
          className="mb-4 flex flex-col w-[calc(100vw-2rem)] sm:w-96 h-[min(32rem,calc(100dvh-7rem))] rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl shadow-black/50 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-800 bg-slate-900/60">
            <div className="flex items-center gap-2.5">
              <Image src="/9gear-mark.png" alt="" width={32} height={32} />
              <div>
                <p className="text-sm font-semibold text-slate-100">9GEAR TECH assistant</p>
                <p className="text-xs text-slate-400">Answers about our services and products</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={listRef} aria-live="polite" className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-sm bg-cyan-500 text-slate-950 px-3.5 py-2.5 text-sm whitespace-pre-wrap"
                      : "max-w-[85%] rounded-2xl rounded-bl-sm bg-slate-900 border border-slate-800 text-slate-200 px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap"
                  }
                >
                  {m.content || <span className="text-slate-500">Typing…</span>}
                </div>
              </div>
            ))}

            {showSuggestions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="px-3 py-1.5 rounded-full border border-slate-700 text-xs text-slate-300 hover:border-cyan-500/60 hover:text-cyan-300 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {error && (
              <p role="alert" className="text-sm text-rose-300 bg-rose-500/10 border border-rose-500/30 rounded-lg px-3 py-2">
                {error}
              </p>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-slate-800 p-3">
            <div className="flex items-end gap-2">
              <label htmlFor="chat-input" className="sr-only">
                Type your message
              </label>
              <textarea
                id="chat-input"
                ref={inputRef}
                rows={1}
                value={input}
                maxLength={1000}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask a question…"
                className="flex-1 resize-none max-h-28 rounded-xl bg-slate-900 border border-slate-800 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60"
              />
              <button
                type="button"
                onClick={() => send(input)}
                disabled={isSending || !input.trim()}
                aria-label="Send message"
                className="p-2.5 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="mt-2 text-[11px] text-slate-500">
              AI assistant. It can make mistakes, so confirm important details through the contact form.
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close chat" : "Open chat"}
          aria-expanded={isOpen}
          aria-controls="chat-panel"
          className="w-14 h-14 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/30 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
