import Image from "next/image";
import Navbar from "@/components/Navbar";
import PulseSpotlight from "@/components/PulseSpotlight";
import AtelierSpotlight from "@/components/AtelierSpotlight";
import TechStack from "@/components/TechStack";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { services } from "@/data/services";
import { bricolage, instrument } from "@/lib/fonts";

const focusRing =
  "focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-royal";

export default function Home() {
  return (
    <main
      className={`${bricolage.variable} ${instrument.variable} font-sans min-h-screen bg-cream text-ink selection:bg-tangerine selection:text-ink`}
    >
      <Navbar />

      {/* Hero */}
      <section id="top" className="mx-auto max-w-7xl px-6 sm:px-8 pt-36 pb-24 md:pt-44 flex flex-wrap items-end gap-12">
        <div className="min-w-0 flex-[999_1_38rem]">
          <p className="mb-6 font-semibold text-tangerine-text">Data engineering, analytics and web development</p>
          <h1 className="font-display font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(3rem,7vw,6.5rem)]">
            We build the systems your business{" "}
            <span className="whitespace-nowrap rounded-xl bg-tangerine px-3 box-decoration-clone">runs on.</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink-soft">
            Pipelines that move your data, dashboards that explain it and websites that bring in customers, delivered
            from first brief to handover.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className={`rounded-full bg-royal px-7 py-4 text-lg font-semibold text-white transition-colors hover:bg-royal-dark ${focusRing}`}
            >
              Start a project
            </a>
            <a
              href="#services"
              className={`rounded-full border-2 border-ink px-7 py-4 text-lg font-semibold transition-colors hover:bg-ink hover:text-cream ${focusRing}`}
            >
              See what we do
            </a>
          </div>
        </div>

        <div className="min-w-0 flex-[1_1_18rem] rounded-[2rem] bg-royal p-8 text-white flex flex-col gap-5">
          <Image
            src="/9gear-mark.png"
            alt=""
            width={120}
            height={120}
            className="rounded-3xl bg-cream p-3"
          />
          <p className="font-display text-3xl font-bold leading-tight">
            Six services. One team. One point of contact.
          </p>
          <p className="leading-relaxed text-sky">
            Hire us for one piece of work, or combine them into a single project.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-ink text-cream px-6 sm:px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display font-extrabold tracking-[-0.03em] leading-none text-[clamp(2.25rem,5vw,4rem)]">
              What we do
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-sand">
              From the pipeline behind the numbers to the website that presents them.
            </p>
          </div>

          <div className="grid gap-0.5 overflow-hidden rounded-3xl bg-umber md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.title} className="bg-ink p-9 flex flex-col gap-3.5">
                <span className="font-display text-xl font-extrabold text-peach">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.75rem] font-bold leading-tight">{s.title}</h3>
                <p className="leading-relaxed text-sand">{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-6 sm:px-8 py-24">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display font-extrabold tracking-[-0.03em] leading-none text-[clamp(2.25rem,5vw,4rem)]">
            Our products
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-ink-soft">
            Software we build and run ourselves, shaped by the same work we do for clients.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <PulseSpotlight />
          <AtelierSpotlight />
        </div>
      </section>

      <TechStack />

      <ContactForm />

      <Footer />

      <ChatWidget />
    </main>
  );
}
