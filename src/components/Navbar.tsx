"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "9Gear Pulse", href: "#pulse" },
    { label: "Capabilities", href: "#capabilities" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-100">
                    <Image src="/9gear-mark.png" alt="" width={40} height={40} priority />
                    <span>9GEAR <span className="text-blue-500">TECH</span></span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-cyan-400 transition-colors">
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-sm shadow-cyan-500/20"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    className="md:hidden p-2 text-slate-400 hover:text-slate-100"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div id="mobile-menu" className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-6 space-y-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-slate-300 hover:text-cyan-400"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-center py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold"
                    >
                        Get in Touch
                    </Link>
                </div>
            )}
        </nav>
    );
}
