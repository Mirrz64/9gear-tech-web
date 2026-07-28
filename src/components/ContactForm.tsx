"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Data Engineering",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("https://formspree.io/f/xvzelabq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", service: "Data Engineering", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-800/60">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-100">Let's Build Together</h2>
                <p className="mt-3 text-slate-400">
                    Have a project in mind or need tailored engineering and web services? Drop a message below to schedule a technical consultation.
                </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-xl backdrop-blur-sm">
                {status === "success" ? (
                    <div className="text-center py-12 space-y-4">
                        <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center mx-auto border border-cyan-500/30">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-100">Message Received!</h3>
                        <p className="text-slate-400 max-w-md mx-auto text-sm">
                            Thank you for reaching out to 9GEAR TECH. We'll review your project requirements and respond within 24 hours.
                        </p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="mt-4 px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all"
                        >
                            Send Another Message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {status === "error" && (
                            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <span>Something went wrong submitting your request. Please try again.</span>
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Alex Morgan"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="alex@company.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                                Primary Service Required
                            </label>
                            <select
                                value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                            >
                                <option value="Data Engineering">Data Engineering & Pipelines</option>
                                <option value="Data Analysis & BI">Data Analysis & BI Dashboards</option>
                                <option value="Website Design & Development">Website Design & Development</option>
                                <option value="Business Analysis">Business Analysis & Process Mapping</option>
                                <option value="Project Management">Technical Project Management</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                                Project Overview & Objectives
                            </label>
                            <textarea
                                required
                                rows={4}
                                placeholder="Briefly describe your goals, current setup, and target timeline..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                        >
                            {status === "submitting" ? (
                                "Sending Details..."
                            ) : (
                                <>
                                    Submit Request <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}