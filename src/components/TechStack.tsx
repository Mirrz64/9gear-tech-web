import type { LucideIcon } from "lucide-react";
import { Database, Code2, Cloud, Workflow, Container, BarChart, Layout, Layers, Paintbrush } from "lucide-react";

type Tool = {
    name: string;
    category: string;
    icon: LucideIcon;
    accent: "cyan" | "indigo";
};

const accentClass = {
    cyan: "text-cyan-400",
    indigo: "text-indigo-400",
} as const;

const tools: Tool[] = [
    { name: "Python", category: "Languages & Analytics", icon: Code2, accent: "cyan" },
    { name: "SQL (PostgreSQL / T-SQL)", category: "Databases", icon: Database, accent: "indigo" },
    { name: "Microsoft Azure", category: "Cloud & Infrastructure", icon: Cloud, accent: "cyan" },
    { name: "dbt (data build tool)", category: "Transformation", icon: Layers, accent: "indigo" },
    { name: "Apache Airflow", category: "Orchestration", icon: Workflow, accent: "cyan" },
    { name: "Docker", category: "Containerization", icon: Container, accent: "indigo" },
    { name: "Power BI", category: "Business Intelligence", icon: BarChart, accent: "cyan" },
    { name: "Next.js & React", category: "Web Development", icon: Layout, accent: "indigo" },
    { name: "Tailwind CSS", category: "Frontend & Styling", icon: Paintbrush, accent: "cyan" },
];

export default function TechStack() {
    return (
        <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-slate-100">Tools we build with</h2>
                <p className="mt-3 text-slate-400">
                    The languages, platforms and frameworks behind our data pipelines, dashboards and websites.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.map(({ name, category, icon: Icon, accent }) => (
                    <div
                        key={name}
                        className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-200 flex items-center gap-4 group"
                    >
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
                            <Icon className={`w-5 h-5 ${accentClass[accent]}`} aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                                {name}
                            </h3>
                            <p className="text-xs text-slate-500 font-mono mt-0.5">{category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
