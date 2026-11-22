import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What clients say about working with CodeandAI on web, mobile, and enterprise software.",
};

const testimonials: {
  quote: string;
  name: string;
  role: string;
  href?: string;
}[] = [
  {
    quote:
      "Our clinic management system changed how we run day to day — patients, billing, inventory, and reports in one place. The team understood dental operations and delivered software we actually use.",
    name: "Clinic Leadership",
    role: "Galaxy Dental Care",
    href: "https://galaxydentalcare.in/",
  },
  {
    quote:
      "JusticeHome gave our advocates a clear way to manage cases, documents, internal communication, and the senior diary. We can see assignments and events without chasing files across desks.",
    name: "Practice Team",
    role: "JusticeHome",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="testimonials-page min-h-full pt-[4.25rem]">
      <PageBanner
        tone="sky"
        eyebrow="Testimonials"
        title="What partners say when the software ships."
        copy="Feedback from teams who trusted us with their web apps, clinic systems, and legal practice software."
        cta={{ href: "/contact", label: "Contact us" }}
        secondaryCta={{ href: "/clients", label: "Customer stories" }}
      />

      <section className="pb-24 pt-14 md:pb-32 md:pt-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ul className="space-y-6">
            {testimonials.map((item, index) => (
              <li
                key={item.quote}
                className="testimonial-card grid gap-6 p-7 md:grid-cols-[auto_1.4fr_0.6fr] md:gap-10 md:p-9"
              >
                <span className="font-mono text-sm tracking-[0.16em] text-[#2f6fed]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <blockquote className="text-lg leading-relaxed text-fog md:text-xl md:leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer className="md:text-right">
                  <p className="font-display text-base font-semibold tracking-tight text-fog">
                    {item.name}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[#2a5f8a]/75">
                    {item.role}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline mt-3 inline-block text-sm text-[#2a5f8a] hover:text-ink"
                    >
                      {item.href.replace(/^https?:\/\//, "").replace(/\/$/, "")} →
                    </a>
                  ) : null}
                </footer>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-learn-more">
              Start a project
            </Link>
            <Link href="/clients" className="btn-ghost">
              View clients
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
