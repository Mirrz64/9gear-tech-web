// Simple in-memory rate limiter, keyed by IP address.
// Good enough for launch. On serverless hosting (e.g. Vercel) each instance
// keeps its own counts, so for stronger protection move this to a shared
// store such as Upstash Redis later. Your Claude Console spend limit is the
// final safety net either way.

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 20; // messages per IP per window

const hits = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Keep the map from growing forever.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}
