"use client";

import {
    Database,
    Code2,
    Cloud,
    Terminal,
    Workflow,
    Container,
    BarChart,
    Layout,
    Layers
} from "lucide-react";

export default function TechStack() {
    const tools = [
        { name: "Python", category: "Languages & Analytics", icon: <Code2 className="w-5 h-5 text-cyan-400" /> },
        { name: "SQL (PostgreSQL / T-SQL)", category: "Databases", icon: <Database className="w-5 h-5 text-indigo-400" /> },
        { name: "Microsoft Azure", category: "Cloud & Infrastructure", icon: <Cloud className="w-5 h-5 text-cyan-400" /> },
        { name: "dbt (data build tool)", category: "Transformation", icon: <Layers className="w-5 h-5 text-indigo-400" /> },
        { name: "Apache Airflow", category: "Orchestration", icon: <Workflow className="w-5 h-5 text-cyan-400" /> },
        { name: "Docker", category: "Containerization", icon: <Container className="w-5 h-5 text-indigo-400" /> },
        { name: "Power BI", category: "Business Intelligence", icon: <BarChart className="w-5 h-5 text-cyan-400" /> },
        { name: "Next.js & React", category: "Web Development", icon: <Layout className="w-5 h-5 text-indigo-400" /> },
        { name: "Tailwind CSS", category: "Frontend & Styling", icon: <Terminal className="w-5 h-5 text-cyan-400" /> },
    ];

    return (
        <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-slate-100">Enterprise Technology Toolkit</h2>
                <p className="mt-3 text-slate-400">
                    Battle-tested tools and frameworks powering our data pipelines, analytical dashboards, and modern web architectures.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {tools.map((tool, idx) => (
                    <div
                        key={idx}
                        className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-200 flex items-center gap-4 group"
                    >
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
                            {tool.icon}
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                                {tool.name}
                            </h3>
                            <p className="text-xs text-slate-500 font-mono mt-0.5">{tool.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}