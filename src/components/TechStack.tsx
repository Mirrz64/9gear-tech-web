const tools = [
  { name: "Python", category: "Languages & analytics" },
  { name: "SQL (PostgreSQL / T-SQL)", category: "Databases" },
  { name: "Microsoft Azure", category: "Cloud" },
  { name: "dbt", category: "Transformation" },
  { name: "Apache Airflow", category: "Orchestration" },
  { name: "Docker", category: "Containers" },
  { name: "Power BI", category: "Business intelligence" },
  { name: "Next.js & React", category: "Web development" },
  { name: "Tailwind CSS", category: "Styling" },
];

export default function TechStack() {
  return (
    <section id="tools" className="mx-auto max-w-7xl px-6 sm:px-8 pb-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display font-extrabold tracking-[-0.03em] leading-none text-[clamp(2.25rem,5vw,4rem)]">
          Tools we build with
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-ink-soft">
          The languages, platforms and frameworks behind our pipelines, dashboards and websites.
        </p>
      </div>

      <ul className="flex flex-wrap gap-3">
        {tools.map((t) => (
          <li
            key={t.name}
            className="flex items-baseline gap-2.5 rounded-full border-2 border-ink px-5 py-3"
          >
            <span className="font-display text-lg font-bold">{t.name}</span>
            <span className="text-sm text-ink-soft">{t.category}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
