"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GitBranch, ShieldCheck, Plug, Activity } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "AI architecture review",
    description:
      "Describe your source schema and goal. Pulse proposes a pipeline plan, and nothing is generated until you approve it.",
  },
  {
    icon: GitBranch,
    title: "Stage-by-stage code generation",
    description:
      "Each pipeline stage is generated as its own file, so every part can be tested and reviewed on its own.",
  },
  {
    icon: Plug,
    title: "Connect your sources",
    description:
      "Pull from REST APIs, databases such as Azure SQL, or upload several CSV and JSON files at once.",
  },
  {
    icon: Activity,
    title: "Self-healing runs",
    description:
      "In development: when a pipeline breaks, Pulse diagnoses the failure and proposes a fix for you to approve.",
  },
];

function PulseMark() {
  return (
    <svg viewBox="0 0 64 64" className="w-14 h-14" aria-hidden="true">
      <defs>
        <linearGradient id="pulse-mark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <polyline
        points="4,34 18,34 24,20 32,48 40,12 46,34 60,34"
        fill="none"
        stroke="url(#pulse-mark)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PulseSpotlight() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="pulse"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 md:p-12"
      >
        <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-violet-500/10 blur-[100px]" />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <div className="flex items-center gap-4">
              <PulseMark />
              <div>
                <p className="text-sm text-slate-400">Our product</p>
                <h2 className="text-3xl font-bold text-slate-100">9Gear Pulse</h2>
              </div>
            </div>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              An AI-assisted pipeline builder. You describe the data you have and what you need from it, and Pulse
              designs, writes and runs the ETL pipeline, with you approving each step.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              It grew out of our own data engineering work, and now runs as a product in its own right.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://9gearpulse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-slate-950 font-semibold transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Visit 9gearpulse.com <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50 text-slate-300 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Request early access
              </a>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, description }) => (
              <li key={title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <Icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-slate-100">{title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
