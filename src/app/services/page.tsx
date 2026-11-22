import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software solutions from CodeandAI — web apps, Android, iPhone, and enterprise digital systems.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    id: "web",
    title: "Web applications",
    body: "Custom web platforms for customers, partners, and internal teams — designed to perform and scale.",
    points: [
      "Business portals & dashboards",
      "Customer-facing web products",
      "APIs, auth, and integrations",
    ],
  },
  {
    id: "android",
    title: "Android applications",
    body: "Android apps for consumers and field teams — engineered for clarity, reliability, and Play Store readiness.",
    points: [
      "Native-feeling mobile UX",
      "Offline-friendly workflows",
      "Play Store launch support",
    ],
  },
  {
    id: "iphone",
    title: "iPhone applications",
    body: "iOS apps with polished interfaces and a clear path from prototype to App Store — including enterprise distribution.",
    points: [
      "iPhone-first product design",
      "Secure account & data flows",
      "App Store & enterprise rollout",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise software solutions",
    body: "End-to-end digital systems for operations, automation, and growth — built for enterprise demands.",
    points: [
      "Custom business software",
      "Workflow & operations systems",
      "Integrations, security & support",
    ],
  },
  {
    id: "digital",
    title: "All digital needs",
    body: "From a first MVP to a multi-product roadmap — develop, modernize, and maintain your digital stack.",
    points: [
      "Product strategy & UX",
      "Modernization of legacy tools",
      "Ongoing development & support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-[4.25rem]">
      <PageBanner
        tone="navy"
        eyebrow="What we do"
        title="Cutting-edge solutions to power up your business."
        copy="Web applications, Android and iPhone apps, and enterprise digital systems — engineered to help organizations transform and scale."
        cta={{ href: "/contact", label: "Learn more" }}
        secondaryCta={{ href: "/clients", label: "Customer stories" }}
      />

      <section className="pb-24 pt-16 md:pb-32 md:pt-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="service-feature-card scroll-mt-28"
              >
                <span className="font-mono text-xs tracking-[0.16em] text-[#2f6fed]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-fog md:text-[1.75rem]">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">{service.body}</p>
                <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5 text-sm text-mute">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-[#2f6fed]" aria-hidden="true">
                        →
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Discuss your solution
            </Link>
            <Link href="/clients" className="btn-ghost">
              See client work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
