import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product",
  description: "What CodeandAI builds — product engineering, applied AI, and experience systems.",
};

const services = [
  {
    title: "Custom product development",
    body: "End-to-end builds for web platforms, internal tools, and customer-facing apps.",
    points: ["Modern app stacks", "APIs and data models", "Auth, billing, integrations"],
  },
  {
    title: "AI feature integration",
    body: "Bring models into your product where they create measurable leverage.",
    points: ["RAG & knowledge systems", "Agents and automation", "Evaluation pipelines"],
  },
  {
    title: "Modernization & performance",
    body: "Refactor, harden, and prepare systems for growth without a rewrite circus.",
    points: ["Architecture reviews", "Delivery pipelines", "Observability"],
  },
  {
    title: "Design for complex products",
    body: "Information architecture and interfaces that keep powerful tools legible.",
    points: ["Product UX flows", "Design systems", "Prototype to production"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28">
      <section className="chapter !pb-10">
        <div className="mx-auto max-w-6xl">
          <p className="chapter-label">Product</p>
          <p className="chapter-kicker">( Capabilities )</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold tracking-tight text-fog md:text-5xl">
            Capabilities for teams that need to ship.
          </h1>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ul className="divide-y divide-white/10 border-y border-ink/10">
            {services.map((service, index) => (
              <li key={service.title} className="grid gap-6 py-10 md:grid-cols-[1fr_1.1fr] md:gap-12">
                <div>
                  <span className="font-mono text-xs text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-fog">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-mist">{service.body}</p>
                </div>
                <ul className="space-y-3 self-center border-l border-ink/10 pl-6 text-sm text-mute md:text-base">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Discuss your scope
            </Link>
            <Link href="/about" className="btn-ghost">
              About the studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
