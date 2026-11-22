import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "CodeandAI is a software company building digital solutions for startups, businesses, and enterprise teams.",
};

const values = [
  {
    title: "Engineering excellence",
    copy: "Clean architecture, reliable delivery, and software teams can trust in production.",
  },
  {
    title: "Business outcomes",
    copy: "Every build is tied to real workflows — clinics, practices, and enterprise operations.",
  },
  {
    title: "Long-term partnership",
    copy: "From first release to continuous improvement, we stay with you after launch.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-[4.25rem]">
      <PageBanner
        tone="ink"
        eyebrow="Who we are"
        title="Building greater futures through technology."
        copy="A technology partner for organizations that need dependable digital products — web applications, Android and iPhone apps, and enterprise systems."
        cta={{ href: "/contact", label: "Work with us" }}
        secondaryCta={{ href: "/services", label: "Learn more" }}
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="max-w-xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
            <p>
              Our focus is long-term value: clear consulting, strong engineering,
              and software that helps teams transform how they work and serve
              customers.
            </p>
            <p className="text-fog">
              From first release to continuous improvement — a partnership built
              to last.
            </p>
          </div>

          <aside className="tcs-feature-panel !pb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">
              What we deliver
            </p>
            <ul className="mt-5 space-y-3 text-sm text-mist md:text-base">
              <li>Web & mobile product development</li>
              <li>Enterprise software solutions</li>
              <li>Custom digital systems & integrations</li>
              <li>Ongoing development & support</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="band-soft border-y border-ink/8 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-fog md:text-4xl">
            Our foundations
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((item, index) => (
              <li key={item.title} className="pillar-card-light">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2f6fed]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-fog">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{item.copy}</p>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-learn-more mt-10 inline-flex">
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
