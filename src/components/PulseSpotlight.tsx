const features = [
  {
    title: "You approve the plan",
    description: "Describe your source and goal. Pulse proposes a pipeline design, and nothing is built until you approve it.",
  },
  {
    title: "Code you can review",
    description: "Each pipeline stage is generated as its own file, so every part can be tested and checked separately.",
  },
  {
    title: "Your data sources",
    description: "Pull from REST APIs, databases such as Azure SQL, or several CSV and JSON files at once.",
  },
  {
    title: "Self-healing runs, in development",
    description: "When a run breaks, Pulse will diagnose the failure and propose a fix for you to approve.",
  },
];

const focusRing = "focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ink";

export default function PulseSpotlight() {
  return (
    <section id="pulse" className="mx-auto max-w-7xl px-6 sm:px-8 py-24">
      <div className="rounded-[2rem] bg-tangerine p-8 sm:p-14 text-ink">
        <div className="flex flex-wrap items-center gap-10">
          <div className="min-w-0 flex-[999_1_30rem]">
            <p className="mb-3 font-semibold">Our product, in early access</p>
            <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.95] text-[clamp(2.5rem,5vw,4.5rem)]">
              9Gear Pulse
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">
              Describe the data you have and what you need from it. Pulse designs, writes and runs the ETL pipeline,
              and you approve each step.
            </p>
          </div>
          <div className="flex flex-[1_1_17rem] flex-col gap-3">
            <a
              href="https://9gearpulse.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full bg-ink px-7 py-4 text-center text-lg font-semibold text-cream transition-colors hover:bg-royal ${focusRing}`}
            >
              Visit 9gearpulse.com
            </a>
            <a
              href="#contact"
              className={`rounded-full border-2 border-ink px-7 py-4 text-center text-lg font-semibold transition-colors hover:bg-ink hover:text-cream ${focusRing}`}
            >
              Request early access
            </a>
          </div>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f.title} className="rounded-2xl bg-cream p-6">
              <h3 className="font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{f.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
