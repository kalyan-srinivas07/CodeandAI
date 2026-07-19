import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Valued Clients",
  description:
    "Featured clients of CodeandAI — Galaxy Dental Care and JusticeHome.",
};

const featuredClients = [
  {
    name: "Galaxy Dental Care",
    product: "Custom Dental Clinic Management System",
    features: [
      "Patient Management",
      "Billing & Consultation",
      "Treatment Tracking",
      "Multi-Branch Management",
    ],
  },
  {
    name: "JusticeHome",
    product: "Custom Web Application",
    features: [
      "Secure Case & Document Management",
      "User-Friendly Interface",
      "Responsive Design",
    ],
  },
];

export default function ClientsPage() {
  return (
    <div
      className="min-h-full pt-28 text-ink"
      style={{
        backgroundColor: "#b4b9ab",
        backgroundImage:
          "linear-gradient(to right, rgba(180,185,171,0.45) 0%, rgba(180,185,171,0.45) 50%, rgba(212,146,147,0.45) 50%, rgba(212,146,147,0.45) 100%), url('/wall-bg.jpg')",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundAttachment: "fixed, fixed",
      }}
    >
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            Our Valued Clients
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Featured Clients
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
            Real products shipped with CodeandAI — built for clinics, casework,
            and everyday operations.
          </p>

          <ul className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
            {featuredClients.map((client) => (
              <li key={client.name} className="border-t border-ink/20 pt-8">
                <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {client.name}
                </h2>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-ink/55">
                  {client.product}
                </p>
                <ul className="mt-6 space-y-3 border-l border-ink/25 pl-5">
                  {client.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-base leading-relaxed text-ink/80"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Start a project
            </Link>
            <Link href="/" className="btn-ghost">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
