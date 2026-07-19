import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "The CodeandAI philosophy — software craft and applied intelligence as one practice.",
};

export default function AboutPage() {
  return (
    <div className="pt-28">
      <section className="chapter">
        <div className="mx-auto max-w-6xl">
          <p className="chapter-label">About</p>
          <p className="chapter-kicker">( Concept )</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-fog md:text-5xl md:leading-tight">
            Built where craftsmanship and intelligence meet.
          </h1>
          <div className="mt-12 grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
            <div className="poem max-w-xl">
              <span>CodeandAI is a product studio for teams who need software</span>
              <span>that is carefully engineered and intelligently adaptive.</span>
              <span className="mt-4">Too many AI projects stop at the prototype.</span>
              <span>Too many product builds ignore the leverage intelligence unlocks.</span>
              <span className="mt-4 text-fog">We work in the space between — and we ship.</span>
            </div>
            <aside className="border-l border-ink/15 pl-6 md:pl-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">Focus</p>
              <ul className="mt-5 space-y-3 text-sm text-mist">
                <li>Product engineering</li>
                <li>Applied AI & automation</li>
                <li>Platforms and internal tools</li>
                <li>Design for complex workflows</li>
              </ul>
              <Link href="/contact" className="btn-primary mt-10 inline-flex">
                Work with us
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
