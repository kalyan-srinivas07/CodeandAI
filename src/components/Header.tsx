"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primary = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Our Work" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="landing-header fixed inset-x-0 top-0 z-50 border-b border-[#dbe4f0] bg-white/95 shadow-[0_8px_30px_rgba(15,40,80,0.06)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link href="/" className="landing-brand shrink-0" aria-label="CodeAI Cloud home">
          <span className="landing-brand-mark" aria-hidden="true" />
          <span>
            CodeAI <strong>Cloud</strong>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {primary.map((link) => (
            <Link key={link.href} href={link.href} className="landing-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/#contact" className="btn-learn-more !px-4 !py-2.5 text-[13px]">
            Get Free Consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-[#0f1a26] md:hidden"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#dbe4f0] bg-white transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex min-h-[70dvh] flex-col gap-1 px-5 py-6" aria-label="Mobile">
          {primary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-lg font-medium tracking-tight text-[#0f1a26]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn-learn-more mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            Get Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
