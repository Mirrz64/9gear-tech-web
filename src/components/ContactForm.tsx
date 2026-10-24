"use client";

import { useEffect, useRef, useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/xvzelabq";

const topics = [
    "Data Engineering",
    "Data Analysis & BI",
    "Website Design & Development",
    "Business Analysis",
    "Project Management",
    "Remote Office Setup",
    "9Gear Pulse early access",
    "9Gear Atelier waitlist",
    "Something else",
];

const emptyForm = { name: "", email: "", service: topics[0], message: "" };

const fieldClass =
    "w-full rounded-xl border-2 border-ink/20 bg-white px-4 py-3.5 text-ink placeholder:text-ink-soft/70 transition-colors focus:border-royal focus:outline-none";
const labelClass = "mb-2 block font-semibold";
const focusRing = "focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-royal";

export default function ContactForm() {
    const [formData, setFormData] = useState(emptyForm);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const successRef = useRef<HTMLHeadingElement>(null);

    // Move focus to the confirmation so keyboard and screen reader users know it worked.
    useEffect(() => {
        if (status === "success") successRef.current?.focus();
    }, [status]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        // Formspree's honeypot: bots fill hidden fields, people don't.
        const gotcha = new FormData(e.currentTarget).get("_gotcha");

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New enquiry: ${formData.service}`,
                    _gotcha: gotcha ?? "",
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData(emptyForm);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="mx-auto max-w-7xl px-6 sm:px-8 pb-24">
            <div className="flex flex-wrap gap-12">
                <div className="min-w-0 flex-[1_1_20rem]">
                    <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.95] text-[clamp(2.5rem,5vw,4.5rem)]">
                        Have a project in mind?
                    </h2>
                    <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                        Tell us what you're working on, what you have now and when you need it. We'll reply within 24
                        hours to arrange a consultation.
                    </p>
                    <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
                        Interested in 9Gear Pulse or 9Gear Atelier? Choose it from the list and we'll be in touch about
                        access.
                    </p>
                </div>

                <div className="min-w-0 flex-[999_1_32rem] rounded-[2rem] border-2 border-ink bg-cream p-7 sm:p-10 shadow-[8px_8px_0_0_#16130f]">
                    {status === "success" ? (
                        <div className="py-10 text-center" role="status">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tangerine">
                                <CheckCircle2 className="h-7 w-7 text-ink" aria-hidden="true" />
                            </div>
                            <h3
                                ref={successRef}
                                tabIndex={-1}
                                className="mt-6 font-display text-3xl font-bold focus:outline-none"
                            >
                                Message sent
                            </h3>
                            <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-soft">
                                Thanks for getting in touch with 9GEAR TECH. We'll read your message and reply within 24
                                hours.
                            </p>
                            <button
                                type="button"
                                onClick={() => setStatus("idle")}
                                className={`mt-8 rounded-full border-2 border-ink px-6 py-3 font-semibold transition-colors hover:bg-ink hover:text-cream ${focusRing}`}
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {status === "error" && (
                                <div
                                    role="alert"
                                    className="flex items-start gap-3 rounded-xl border-2 border-[#c0392b] bg-[#ffe3df] p-4 text-[#7a1a12]"
                                >
                                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                    <span>
                                        Your message didn't send. Check your connection and try again. Your details are
                                        still filled in.
                                    </span>
                                </div>
                            )}

                            {/* Honeypot: hidden from people, left empty */}
                            <div className="hidden" aria-hidden="true">
                                <label htmlFor="contact-gotcha">Leave this empty</label>
                                <input id="contact-gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="contact-name" className={labelClass}>
                                        Your name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        placeholder="e.g. Alex Morgan"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={fieldClass}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-email" className={labelClass}>
                                        Email
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        placeholder="alex@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={fieldClass}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contact-service" className={labelClass}>
                                    What can we help with?
                                </label>
                                <select
                                    id="contact-service"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className={fieldClass}
                                >
                                    {topics.map((t) => (
                                        <option key={t} value={t}>
                                            {t}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="contact-message" className={labelClass}>
                                    About your project
                                </label>
                                <textarea
                                    id="contact-message"
                                    required
                                    rows={5}
                                    placeholder="Your goals, what you have in place now, and when you'd like it done"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className={`${fieldClass} resize-y`}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className={`flex w-full items-center justify-center gap-2 rounded-full bg-royal py-4 text-lg font-semibold text-white transition-colors hover:bg-royal-dark disabled:cursor-not-allowed disabled:opacity-60 ${focusRing}`}
                            >
                                {status === "submitting" ? (
                                    "Sending…"
                                ) : (
                                    <>
                                        Send message <Send className="h-4 w-4" aria-hidden="true" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
