"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "9Gear Pulse", href: "#pulse" },
  { label: "Tools", href: "#tools" },
];

const focusRing = "focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-royal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        <Link href="/" className={`flex items-center gap-3 rounded-lg ${focusRing}`}>
          <Image src="/9gear-mark.png" alt="" width={44} height={44} priority />
          <span className="font-display text-[1.375rem] font-extrabold tracking-tight">
            9GEAR <span className="text-royal">TECH</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded transition-colors hover:text-royal ${focusRing}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className={`rounded-full bg-ink px-5 py-3 font-semibold text-cream transition-colors hover:bg-royal ${focusRing}`}
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className={`rounded-lg p-2.5 md:hidden ${focusRing}`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="space-y-1 border-t border-ink/10 bg-cream px-6 pb-6 pt-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded py-3 text-lg font-medium ${focusRing}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`mt-3 block rounded-full bg-ink py-3.5 text-center font-semibold text-cream ${focusRing}`}
          >
            Get in touch
          </Link>
        </div>
      )}
    </nav>
  );
}
