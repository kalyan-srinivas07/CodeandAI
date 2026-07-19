import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/15 bg-ink text-[#d49293]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">
            Code<span className="font-medium text-[#d49293]/90">and</span>AI
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#d49293]/70">
            Build intelligent products with CodeandAI — from craft to systems
            that ship.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center bg-[#d49293] px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[#e0b0b1]"
          >
            Start a project
          </Link>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#d49293]/45">
            Navigate
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#d49293]/80">
            <li>
              <Link href="/" className="link-underline hover:text-[#d49293]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-underline hover:text-[#d49293]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/clients" className="link-underline hover:text-[#d49293]">
                Our Valued Clients
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#d49293]/45">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="tel:+918308670576"
                className="link-underline text-[#d49293]/80 hover:text-[#d49293]"
              >
                8308670576
              </a>
            </li>
            <li>
              <a
                href="mailto:kalyansrinivas.it@gmail.com"
                className="link-underline break-all text-[#d49293]/80 hover:text-[#d49293]"
              >
                kalyansrinivas.it@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#d49293]/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-[#d49293]/55 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} CodeandAI. All rights reserved.</p>
          <p className="font-mono tracking-wide">
            <a href="tel:+918308670576" className="hover:text-[#d49293]">
              8308670576
            </a>
            {" · "}
            <a href="mailto:kalyansrinivas.it@gmail.com" className="hover:text-[#d49293]">
              kalyansrinivas.it@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
