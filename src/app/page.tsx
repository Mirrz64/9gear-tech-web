import Navbar from "@/components/Navbar";
import PulseSpotlight from "@/components/PulseSpotlight";
import TechStack from "@/components/TechStack";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { ArrowRight, Cpu } from "lucide-react";

const accentClass = {
  cyan: "text-cyan-400",
  indigo: "text-indigo-400",
} as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
            <Cpu className="w-3.5 h-3.5" aria-hidden="true" /> Data, web and delivery under one roof
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Data pipelines, dashboards and websites,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              built properly
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            9GEAR TECH builds the data infrastructure, analytics and web platforms growing businesses run on, and
            manages the delivery from first brief to handover.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              Start a project <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50 text-slate-300 font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              See our services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-100">What we do</h2>
          <p className="mt-3 text-slate-400">
            Hire us for one service, or combine them, from building a data pipeline to launching the website that
            presents its results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, accent, title, description, tags }) => (
            <div
              key={title}
              className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-6">
                  <Icon className={`w-6 h-6 ${accentClass[accent]}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">{title}</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9Gear Pulse Product Spotlight */}
      <PulseSpotlight />

      {/* Tech Stack Toolkit Section */}
      <TechStack />

      {/* Consultation & Contact Form */}
      <ContactForm />

      <Footer />
    </main>
  );
}
