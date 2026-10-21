const links = [
  { label: "Services", href: "#services" },
  { label: "9Gear Pulse", href: "#pulse" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="text-lg font-bold text-slate-100">9GEAR TECH</p>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Data engineering, analytics, web development and technical delivery for growing businesses.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-400 hover:text-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://9gearpulse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded"
              >
                9gearpulse.com
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-800/60 text-sm text-slate-500">
        <p>© {year} 9GEAR TECH. All rights reserved.</p>
      </div>
    </footer>
  );
}
