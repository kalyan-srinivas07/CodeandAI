import Link from "next/link";
import {
  SITE_EMAIL,
  SITE_LOCALITY,
  SITE_PHONE,
  SITE_PHONE_DISPLAY,
} from "@/lib/site";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#work", label: "Our Work" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#industries", label: "Industries" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#0f766e]/40 bg-[#041c22] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10 md:px-8">
        <div>
          <Link href="/" className="font-display text-2xl font-extrabold tracking-tight text-white">
            CodeAI <span className="text-[#5eead4]">Cloud</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Custom mobile app development company in Hyderabad — Android, iOS, cross-platform,
            UI/UX, and business applications built to ship.
          </p>
          <Link
            href="/#contact"
            className="mt-7 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-[#0f766e] to-[#0e7490] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Get Free Consultation
          </Link>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`tel:${SITE_PHONE}`} className="text-white/75 hover:text-white">
                {SITE_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE_EMAIL}`} className="break-all text-white/75 hover:text-white">
                {SITE_EMAIL}
              </a>
            </li>
            <li className="text-white/55">{SITE_LOCALITY}, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} CodeAI Cloud. All rights reserved.</p>
          <p className="font-mono tracking-wide">Android · iOS · Cross-Platform</p>
        </div>
      </div>
    </footer>
  );
}
