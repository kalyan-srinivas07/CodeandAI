import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Featured clients of CodeandAI — Galaxy Dental Care and JusticeHome.",
  alternates: {
    canonical: "/clients",
  },
};

const featuredClients: {
  name: string;
  product: string;
  url?: string;
  features: string[];
  theme?: "purple" | "india";
}[] = [
  {
    name: "Galaxy Dental Care",
    product: "Custom Dental Clinic Management System",
    url: "https://galaxydentalcare.in/",
    theme: "purple",
    features: [
      "Patient Management",
      "Billing & Consultation",
      "Treatment Tracking",
      "Multi-Branch Management",
      "Inventory Management",
      "Custom Reports",
      "CRM",
    ],
  },
  {
    name: "JusticeHome",
    product: "Custom Web Application",
    url: "https://justicehome.in/",
    theme: "india",
    features: [
      "Secure Case & Document Management",
      "User-Friendly Interface",
      "Responsive Design",
      "Internal Communication",
      "Advocate Diary — seniors can view all events and cases assigned to lawyers",
    ],
  },
];

function cardClass(theme?: "purple" | "india") {
  if (theme === "purple") return "client-card-purple border border-[#5b3d8f]/35 p-7 md:p-8";
  if (theme === "india") return "client-card-india border border-black/10 p-7 md:p-8";
  return "proof-row !p-0";
}

export default function ClientsPage() {
  return (
    <div className="min-h-full pt-[4.25rem] text-ink">
      <PageBanner
        tone="rose"
        eyebrow="Customer stories"
        title="Outcomes that power real businesses."
        copy="Software solutions we have shipped — custom systems for clinics, casework, and everyday business operations."
        cta={{ href: "/contact", label: "Start a project" }}
        secondaryCta={{ href: "/testimonials", label: "Testimonials" }}
      />

      <section className="px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <ul className="grid gap-8 md:grid-cols-2 md:gap-10">
            {featuredClients.map((client) => {
              const purple = client.theme === "purple";
              const india = client.theme === "india";
              const themed = purple || india;

              return (
                <li key={client.name} className={cardClass(client.theme)}>
                  {india ? (
                    <svg
                      className="ashoka-chakra"
                      viewBox="0 0 100 100"
                      aria-hidden="true"
                    >
                      <g className="ashoka-chakra-spin">
                        <circle
                          cx="50"
                          cy="50"
                          r="46"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        />
                        <circle cx="50" cy="50" r="5" fill="currentColor" />
                        {Array.from({ length: 24 }).map((_, i) => {
                          const angle = (i * 15 * Math.PI) / 180;
                          const x2 = 50 + Math.cos(angle) * 42;
                          const y2 = 50 + Math.sin(angle) * 42;
                          return (
                            <line
                              key={i}
                              x1="50"
                              y1="50"
                              x2={x2}
                              y2={y2}
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                          );
                        })}
                        {Array.from({ length: 24 }).map((_, i) => {
                          const angle = (i * 15 * Math.PI) / 180;
                          const cx = 50 + Math.cos(angle) * 42;
                          const cy = 50 + Math.sin(angle) * 42;
                          return (
                            <circle
                              key={`tip-${i}`}
                              cx={cx}
                              cy={cy}
                              r="1.8"
                              fill="currentColor"
                            />
                          );
                        })}
                      </g>
                    </svg>
                  ) : null}
                  <div className={themed ? "relative z-10" : "border-t border-ink/15 pt-8"}>
                    <h2
                      className={`font-display text-2xl font-bold tracking-tight md:text-3xl ${
                        purple ? "text-white" : india ? "text-[#0b1a4a]" : ""
                      }`}
                    >
                      {client.url ? (
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`link-underline ${
                            purple
                              ? "text-white hover:text-white/85"
                              : india
                                ? "text-[#0b1a4a] hover:text-[#0b1a4a]/80"
                                : "hover:text-ink/80"
                          }`}
                        >
                          {client.name}
                        </a>
                      ) : (
                        client.name
                      )}
                    </h2>
                    <p
                      className={`mt-3 font-mono text-xs uppercase tracking-[0.14em] ${
                        purple
                          ? "text-white/65"
                          : india
                            ? "text-[#0b1a4a]/65"
                            : "text-ink/45"
                      }`}
                    >
                      {client.product}
                    </p>
                    {client.url ? (
                      <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`link-underline mt-3 inline-block text-sm ${
                          purple
                            ? "text-white/80 hover:text-white"
                            : india
                              ? "text-[#0b1a4a]/75 hover:text-[#0b1a4a]"
                              : "text-ink/65 hover:text-ink"
                        }`}
                      >
                        {client.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} →
                      </a>
                    ) : null}
                    <ul
                      className={`mt-6 space-y-3 border-l pl-5 ${
                        purple
                          ? "border-white/30"
                          : india
                            ? "border-[#0b1a4a]/25"
                            : "border-ink/15"
                      }`}
                    >
                      {client.features.map((feature) => (
                        <li
                          key={feature}
                          className={`text-sm leading-relaxed md:text-base ${
                            purple
                              ? "text-white/88"
                              : india
                                ? "text-[#0b1a4a]/88"
                                : "text-ink/75"
                          }`}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/testimonials"
                      className={`link-underline mt-6 inline-block text-sm font-medium ${
                        purple ? "text-white/85 hover:text-white" : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      Read more
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-14 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Start a project
            </Link>
            <Link href="/services" className="btn-ghost">
              View services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
