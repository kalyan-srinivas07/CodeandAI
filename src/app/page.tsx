import Link from "next/link";
import AmbientHeroBackground from "@/components/AmbientHeroBackground";
import HeroHighlightSwitcher from "@/components/HeroHighlightSwitcher";
import AmbitionBanner from "@/components/AmbitionBanner";
import EnterpriseLayers from "@/components/EnterpriseLayers";
import TransformationPillars from "@/components/TransformationPillars";

const cards = [
  {
    title: "Web applications",
    copy: "Portals, dashboards, and customer platforms engineered for performance and scale.",
    href: "/services#web",
  },
  {
    title: "Android apps",
    copy: "Secure mobile products that keep teams and customers connected in the field.",
    href: "/services#android",
  },
  {
    title: "iPhone apps",
    copy: "Premium iOS experiences designed for clarity, trust, and store-ready launch.",
    href: "/services#iphone",
  },
  {
    title: "Enterprise solutions",
    copy: "Custom systems that modernize operations, workflows, and decision-making.",
    href: "/services#enterprise",
  },
];

const stories = [
  {
    name: "Galaxy Dental Care",
    detail: "Advances clinic operations with a unified management platform.",
    url: "https://galaxydentalcare.in/",
  },
  {
    name: "JusticeHome",
    detail: "Reimagines casework with secure documents, communication, and advocate diary.",
    url: "https://justicehome.in/",
  },
];

export default function Home() {
  return (
    <>
      {/* Full-bleed enterprise hero — cool light slate (not cream/white) */}
      <section className="home-hero relative isolate min-h-[100svh] overflow-hidden text-ink">
        <AmbientHeroBackground />

        <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-5 pb-16 pt-28 md:px-8 md:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="max-w-xl">
            <p className="animate-rise font-mono text-[11px] uppercase tracking-[0.2em] text-[#4a5d73]">
              Enterprise software
            </p>
            <h1 className="animate-rise-1 mt-4 font-display text-[clamp(2.4rem,5.8vw,4.1rem)] font-semibold leading-[1.05] tracking-tight text-[#0f1a26]">
              Idea to
              <br />
              application.
            </h1>
            <p className="animate-rise-2 mt-5 max-w-md text-base leading-relaxed text-[#3d4f63] md:text-lg">
              We develop web, Android, and iPhone applications that help
              organizations transform and scale with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-learn-more">
                Start a project
              </Link>
              <Link href="#solutions" className="btn-ghost">
                Explore solutions
              </Link>
            </div>
          </div>

          <HeroHighlightSwitcher />
        </div>
      </section>

      {/* Structured cards below the fold */}
      <section id="solutions" className="scroll-mt-24 border-t border-ink/8 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="eyebrow">Solutions</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-fog md:text-[2.75rem] md:leading-tight">
              Cutting-edge solutions to power up your business.
            </h2>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <li key={card.title}>
                <Link href={card.href} className="enterprise-card group">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-fog">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{card.copy}</p>
                  <span className="mt-6 inline-flex text-sm font-medium text-[#2f6fed] transition-transform duration-300 ease-out group-hover:translate-x-1">
                    Learn more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AmbitionBanner />

      <section id="enterprise-stack" className="enterprise-stack-band scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-white/65">Enterprise transformation</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-white md:text-[2.75rem] md:leading-tight">
            Full-stack digital delivery across five integrated layers.
          </h2>
          <div className="mt-12">
            <EnterpriseLayers />
          </div>
        </div>
      </section>

      <section className="pillars-band px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-white/65">Five pillars of transformation</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-[2.75rem] md:leading-tight">
              The backbone of lasting digital change.
            </h2>
            <Link href="/contact" className="btn-learn-more mt-8 inline-flex">
              Reach out to us
            </Link>
          </div>
          <TransformationPillars />
        </div>
      </section>

      <section className="border-y border-ink/8 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-fog md:text-[2.75rem]">
              Customer stories
            </h2>
            <Link href="/clients" className="link-underline text-sm font-medium text-ink/70 hover:text-ink">
              View all
            </Link>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {stories.map((story) => (
              <li key={story.name} className="tcs-story-card">
                <p className="font-display text-2xl font-semibold tracking-tight text-fog">
                  {story.url ? (
                    <a href={story.url} target="_blank" rel="noopener noreferrer" className="link-underline">
                      {story.name}
                    </a>
                  ) : (
                    story.name
                  )}
                </p>
                <p className="mt-4 text-base leading-relaxed text-mist">{story.detail}</p>
                <Link href="/clients" className="link-underline mt-6 inline-block text-sm font-medium text-ink/70 hover:text-ink">
                  Read more
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-band px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Unlock digital growth</p>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-fog md:text-5xl md:leading-[1.1]">
            Reimagine your enterprise with software at the core.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-learn-more">
              Reach out to us
            </Link>
            <Link href="/services" className="btn-ghost">
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
