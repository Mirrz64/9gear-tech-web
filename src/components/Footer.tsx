import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "9Gear Pulse", href: "#pulse" },
  { label: "9Gear Atelier", href: "#atelier" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

const focusRing = "focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-peach";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-6 sm:px-8 py-16 text-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <Image src="/9gear-mark.png" alt="" width={44} height={44} className="rounded-xl bg-cream p-1" />
            <p className="font-display text-xl font-extrabold">9GEAR TECH</p>
          </div>
          <p className="mt-4 leading-relaxed text-sand">
            Data engineering, analytics, web development and technical delivery for growing businesses.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={`rounded text-sand transition-colors hover:text-cream ${focusRing}`}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://9gearpulse.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded text-sand transition-colors hover:text-cream ${focusRing}`}
              >
                9gearpulse.com
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <p className="mx-auto mt-12 max-w-7xl border-t border-umber pt-6 text-sm text-sand">
        © {year} 9GEAR TECH. All rights reserved.
      </p>
    </footer>
  );
}
