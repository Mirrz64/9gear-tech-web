// Flip ATELIER_LIVE to true once 9gearatelier.com is up,
// so the button links to the site instead of the waitlist.
const ATELIER_LIVE = false;
const ATELIER_URL = "https://9gearatelier.com";

const styles = ["Modern", "Traditional British", "Modern Viking", "Roman", "Simple remodel"];

const features = [
  {
    title: "Start from what you have",
    description: "Upload photos, measurements or a floor plan of the room or venue.",
  },
  {
    title: "See it in different styles",
    description: "Get AI-generated design concepts for the same space, so clients can compare looks side by side.",
  },
  {
    title: "Walk through it",
    description: "Turn a design into images, 3D visualisations and walkthroughs to present before any work starts.",
  },
  {
    title: "Built for the trade",
    description: "For interior designers, decorators and stylists, event decorators and residential architects.",
  },
];

const focusRing = "focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white";

export default function AtelierSpotlight() {
  return (
    <div id="atelier" className="scroll-mt-24 rounded-[2rem] bg-royal p-8 sm:p-14 text-white">
      <div className="flex flex-wrap items-center gap-10">
        <div className="min-w-0 flex-[999_1_30rem]">
          <p className="mb-3 font-semibold text-sky">For interiors and events, in development</p>
          <h3 className="font-display font-extrabold tracking-[-0.03em] leading-[0.95] text-[clamp(2.5rem,5vw,4.5rem)]">
            9Gear Atelier
          </h3>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sky">
            Show Atelier a space and it shows you what it could become. Upload a room or venue and get design concepts,
            images and walkthroughs in the style your client wants.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Example styles">
            {styles.map((s) => (
              <li key={s} className="rounded-full border-2 border-white/70 px-4 py-1.5 text-sm font-semibold">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-[1_1_17rem] flex-col gap-3">
          {ATELIER_LIVE ? (
            <a
              href={ATELIER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full bg-cream px-7 py-4 text-center text-lg font-semibold text-ink transition-colors hover:bg-tangerine ${focusRing}`}
            >
              Visit 9gearatelier.com
            </a>
          ) : (
            <a
              href="#contact"
              className={`rounded-full bg-cream px-7 py-4 text-center text-lg font-semibold text-ink transition-colors hover:bg-tangerine ${focusRing}`}
            >
              Join the waitlist
            </a>
          )}
          <p className="text-center text-sm text-sky">
            {ATELIER_LIVE ? "Now live" : "Launching at 9gearatelier.com"}
          </p>
        </div>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {features.map((f) => (
          <li key={f.title} className="rounded-2xl bg-cream p-6 text-ink">
            <h4 className="font-display text-xl font-bold">{f.title}</h4>
            <p className="mt-2 leading-relaxed text-ink-soft">{f.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
