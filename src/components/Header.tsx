"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primary = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
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

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="site-header-dark fixed inset-x-0 top-0 z-50 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link href="/" className="brand-mark brand-mark-on-dark shrink-0">
          Code<span className="brand-mark-and">and</span>
          <span className="brand-mark-ai">AI</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {primary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link nav-link-dark ${isActive(link.href) ? "nav-link-dark-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="btn-learn-more !px-4 !py-2.5 text-[13px]">
            Start a project
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="header-menu-icon flex h-10 w-10 items-center justify-center text-white md:hidden"
          style={{ color: "#ffffff" }}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ffffff"
            strokeWidth={1.75}
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0b1c2c]/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex min-h-[70dvh] flex-col gap-1 px-5 py-6" aria-label="Mobile">
          {[...primary, { href: "/contact", label: "Contact" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-none py-3 text-lg font-medium tracking-tight text-white transition-opacity duration-200 ${
                isActive(link.href) ? "opacity-100" : "opacity-70"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-learn-more mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            Start a project
          </Link>
        </nav>
      </div>
    </header>
  );
}
