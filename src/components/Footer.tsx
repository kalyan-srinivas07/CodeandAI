import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-[#d49293]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10 md:px-8">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">
            Code<span className="font-medium text-[#d49293]/75">and</span>AI
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#d49293]/65">
            Software solutions for every digital need — web, mobile, and
            enterprise systems built to ship.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center bg-[#d49293] px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[#e0b0b1]"
          >
            Start a project
          </Link>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#d49293]/4">
            Navigate
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-[#d49293]/75">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline hover:text-[#d49293]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#d49293]/4">
            Connect
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href="tel:+918328670576"
                className="link-underline text-[#d49293]/75 hover:text-[#d49293]"
              >
                8328670576
              </a>
            </li>
            <li>
              <a
                href="mailto:kalyansrinivas.it@gmail.com"
                className="link-underline break-all text-[#d49293]/75 hover:text-[#d49293]"
              >
                kalyansrinivas.it@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#d49293]/12">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-[#d49293]/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} CodeandAI. All rights reserved.</p>
          <p className="font-mono tracking-wide">Web · Mobile · Enterprise</p>
        </div>
      </div>
    </footer>
  );
}
