"use client";

import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-100">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                        <Terminal className="w-5 h-5" />
                    </div>
                    <span>9GEAR <span className="text-cyan-400">TECH</span></span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <Link href="#services" className="hover:text-cyan-400 transition-colors">Services</Link>
                    <Link href="#capabilities" className="hover:text-cyan-400 transition-colors">Capabilities</Link>
                    <Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link>
                    <Link
                        href="#contact"
                        className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-sm shadow-cyan-500/20"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-400 hover:text-slate-100"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-6 space-y-3">
                    <Link href="#services" onClick={() => setIsOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">Services</Link>
                    <Link href="#capabilities" onClick={() => setIsOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">Capabilities</Link>
                    <Link href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400">About</Link>
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