import Link from "next/link";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Our Work" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#dbe4f0] bg-[#0b1c2c] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10 md:px-8">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">
            CodeAI <span className="text-[#6ea8ff]">Cloud</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            Custom mobile app development company in Hyderabad — Android, iOS, cross-platform,
            UI/UX, and business applications built to ship.
          </p>
          <Link
            href="/#contact"
            className="mt-7 inline-flex items-center justify-center bg-[#2f6fed] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3b7cf0]"
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
              <a href="tel:+918328670576" className="text-white/75 hover:text-white">
                8328670576
              </a>
            </li>
            <li>
              <a
                href="mailto:kalyansrinivas.it@gmail.com"
                className="break-all text-white/75 hover:text-white"
              >
                kalyansrinivas.it@gmail.com
              </a>
            </li>
            <li className="text-white/55">Hyderabad, India</li>
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
