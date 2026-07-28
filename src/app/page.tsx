import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import ContactForm from "@/components/ContactForm";
import { Database, BarChart3, Binary, Briefcase, Layout, ArrowRight, Cpu } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      title: "Data Engineering",
      description: "Robust ETL/ELT pipelines, cloud data warehousing, database administration, and orchestration built for enterprise reliability.",
      tags: ["Python", "SQL", "Azure", "PostgreSQL", "dbt", "Airflow", "Docker"],
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
      title: "Data Analysis & BI",
      description: "Transforming raw analytical datasets into actionable business intelligence with automated executive dashboards and metrics.",
      tags: ["Power BI", "SQL Analytics", "Data Modeling", "KPI Tracking"],
    },
    {
      icon: <Layout className="w-6 h-6 text-cyan-400" />,
      title: "Website Design & Development",
      description: "Building responsive, modern, high-performance web applications and analytics portals optimized for speed, user experience, and visual polish.",
      tags: ["Next.js", "React", "Tailwind CSS", "UI/UX Design", "TypeScript", "Responsive Web"],
    },
    {
      icon: <Binary className="w-6 h-6 text-indigo-400" />,
      title: "Business Analysis",
      description: "Bridging complex technical architectures and business goals through functional specs, data flow mapping, and process optimization.",
      tags: ["Requirements Gathering", "Process Mapping", "Data Flows"],
    },
    {
      icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
      title: "Project Management",
      description: "Agile, end-to-end technical project execution ensuring seamless cross-functional team delivery and stakeholder alignment.",
      tags: ["Agile/Scrum", "Delivery Roadmaps", "Stakeholder Alignment"],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Cpu className="w-3.5 h-3.5" /> High-Performance Technical Solutions
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Data Infrastructure, Web Design & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Strategic Execution</span>
          </h1>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            9GEAR TECH delivers enterprise-grade data engineering, BI analytics, custom web design, business analysis, and technical project management.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50 text-slate-300 font-semibold transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-100">Core Capability Pillars</h2>
          <p className="mt-3 text-slate-400">Modular technical services tailored for scaling businesses, web applications, and modern cloud infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100">{s.title}</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">{s.description}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                {s.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Toolkit Section */}
      <TechStack />

      {/* Consultation & Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 px-4 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} 9GEAR TECH. All rights reserved.</p>
      </footer>
    </main>
  );
}