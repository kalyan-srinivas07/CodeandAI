import Link from "next/link";
import CodeEvolution from "@/components/CodeEvolution";

const chapters = [
  {
    id: "about",
    chapter: "Chapter 1",
    kicker: "( About / Concept )",
    title: "Intelligence is the energy of modern products.",
    lines: [
      "When teams build, decide, and ship,",
      "they draw on a continuous current of clarity.",
      "Code is the structure.",
      "Intelligence is what keeps that structure alive.",
    ],
  },
  {
    id: "shift",
    chapter: "Chapter 2",
    kicker: "( About / The Gap )",
    title: "Craft without intelligence stalls. Intelligence without craft breaks.",
    lines: [
      "Demos impress. Fragile systems disappoint.",
      "The gap between a clever prototype and a dependable product",
      "is where most AI initiatives lose momentum.",
      "We work in that gap — until the useful version ships.",
    ],
  },
  {
    id: "technology",
    chapter: "Chapter 3",
    kicker: "( Technology )",
    title: "Applied AI with architecture, evaluation, and restraint.",
    lines: [
      "Models are powerful. Systems are what make them trustworthy.",
      "We design retrieval, agents, and automation",
      "with clear interfaces, measurable quality,",
      "and human oversight where it matters.",
    ],
  },
  {
    id: "product",
    chapter: "Chapter 4",
    kicker: "( Product )",
    title: "CodeandAI turns intent into products people rely on.",
    lines: [
      "From platforms and internal tools to customer-facing apps,",
      "we unite product engineering, experience design,",
      "and applied intelligence into one delivery practice.",
      "Not a slide deck. A system that ships.",
    ],
  },
  {
    id: "voices",
    chapter: "Chapter 5",
    kicker: "( Voices )",
    title: "Builders at the frontier choose partners who can finish.",
    lines: [
      "Founders, operators, and product leaders",
      "come to CodeandAI when the next step",
      "needs sharper software — and smarter automation.",
      "Clarity first. Then velocity.",
    ],
  },
];

const buildScenes = [
  { title: "For Launch", copy: "Turn a validated idea into a production-ready first release." },
  { title: "For Platforms", copy: "Architect multi-sided systems that stay coherent as they grow." },
  { title: "For Internal Tools", copy: "Replace spreadsheet friction with calm, fast workflows." },
  { title: "For Product Teams", copy: "Extend an existing roadmap with engineering that keeps pace." },
];

const scaleScenes = [
  { title: "For Automation", copy: "Remove repetitive work with agents that know their limits." },
  { title: "For Intelligence", copy: "Add retrieval, copilots, and decision support where it pays off." },
  { title: "For Reliability", copy: "Harden what already works — observability, quality, recovery." },
  { title: "For Growth", copy: "Refactor and scale without throwing away what you have." },
];

const voices = [
  {
    role: "Founder",
    name: "Aria Chen",
    quote: "They didn’t sell us an AI story. They shipped the product our users actually needed.",
  },
  {
    role: "Head of Product",
    name: "Marcus Cole",
    quote: "The intelligence layer felt invisible — in the best way. Just faster, clearer workflows.",
  },
  {
    role: "CTO",
    name: "Priya Nair",
    quote: "Architecture first, models second. That’s why the system still holds six months later.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-28 pt-28 md:pb-36">
        <div className="animate-rise max-w-xl text-center">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-fog sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            Awaken Code,
            <br />
            Drive Intelligence.
          </h1>
          <p className="animate-rise-1 mt-4 text-sm tracking-wide text-mist md:text-base">
            Your product&apos;s next capability — starting today.
          </p>
        </div>

        <div className="animate-rise-2 mt-8 w-full max-w-md border border-ink/20 bg-ink px-4 py-3 text-left">
          <p className="font-mono text-[10px] tracking-[0.16em] text-[#d49293]/70">
            main.py · start here
          </p>
          <pre className="mt-2 overflow-x-auto font-mono text-[12px] leading-6 text-[#d49293]/90">
            <code>{`def greet(name):
    print(f"Hello, {name}")

greet("world")`}</code>
          </pre>
        </div>

        <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/clients" className="btn-primary">
            Our Valued Clients
          </Link>
          <Link href="/#evolution" className="btn-ghost">
            Watch code evolve
          </Link>
        </div>

        <p className="animate-brand pointer-events-none absolute bottom-0 left-1/2 w-[160%] -translate-x-1/2 translate-y-[18%] text-center font-display text-[22vw] font-extrabold leading-none tracking-tighter text-ink/[0.08] md:text-[14vw] md:translate-y-[22%]">
          CodeandAI
        </p>
      </section>

      <CodeEvolution />

      {/* Philosophy bridge */}
      <section className="border-t border-ink/10 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal-soft">
            Active Product Intelligence
          </p>
          <p className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight text-fog md:text-3xl">
            Awakening what your product
            <br className="hidden sm:block" /> already has the potential to do.
          </p>
          <div className="poem mx-auto mt-10 max-w-lg text-center">
            <span>CodeandAI focuses on the current that powers modern products —</span>
            <span>clean engineering, deliberate experience,</span>
            <span>and applied AI that earns its place in production.</span>
            <span className="mt-4 text-fog">Not spectacle. Leverage you can feel every day.</span>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Start a project
            </Link>
            <Link href="/clients" className="btn-ghost">
              Our Valued Clients
            </Link>
          </div>
        </div>
      </section>

      {/* Chapters */}
      {chapters.map((item, index) => {
        const light = index % 2 === 1;
        return (
          <section
            key={item.id}
            id={item.id}
            className={`chapter scroll-mt-24 ${light ? "light-band" : "border-t border-ink/10"}`}
          >
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:items-start">
              <div>
                <p className="chapter-kicker">{item.kicker}</p>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl md:leading-tight">
                  {item.title}
                </h2>
                <div className="poem mt-8">
                  {item.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Use scenes — BUILD / SCALE like ON / OFF */}
      <section className="border-t border-ink/10 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-fog md:text-4xl">
            For every mode of building —
            <br />
            create, then compound.
          </h2>

          <div className="mt-14 grid gap-16 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs tracking-[0.24em] text-ink">BUILD</p>
              <ul className="mt-6 divide-y divide-white/10 border-y border-ink/10">
                {buildScenes.map((scene) => (
                  <li key={scene.title} className="py-5">
                    <p className="font-display text-lg font-semibold text-fog">{scene.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-mute">{scene.copy}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.24em] text-ink">SCALE</p>
              <ul className="mt-6 divide-y divide-white/10 border-y border-ink/10">
                {scaleScenes.map((scene) => (
                  <li key={scene.title} className="py-5">
                    <p className="font-display text-lg font-semibold text-fog">{scene.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-mute">{scene.copy}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="light-band chapter">
        <div className="mx-auto max-w-6xl">
          <p className="chapter-label">Voices</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight md:text-4xl">
            What partners notice when the work lands.
          </h2>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {voices.map((voice) => (
              <li key={voice.name} className="border-t border-black/10 pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/40">
                  / {voice.role}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink/75">&ldquo;{voice.quote}&rdquo;</p>
                <p className="mt-5 font-display text-sm font-semibold tracking-wide">{voice.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal-soft">
            Next step
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-fog md:text-5xl md:leading-tight">
            When you want to build —
            <br />
            and when you want systems that think with you.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-mist">
            CodeandAI is the studio for products that need serious engineering
            and practical intelligence in the same delivery.
          </p>
          <Link href="/contact" className="btn-primary mt-10 inline-flex">
            Talk to CodeandAI
          </Link>
        </div>
      </section>
    </>
  );
}
