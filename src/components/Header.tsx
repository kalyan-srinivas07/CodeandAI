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
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ease-out ${
        transparent
          ? "border-white/10 bg-transparent"
          : "site-header border-ink/8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link
          href="/"
          className={`brand-mark shrink-0 ${transparent ? "brand-mark-on-dark" : ""}`}
        >
          Code<span className="brand-mark-and">and</span>
          <span className="brand-mark-ai">AI</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {primary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${transparent ? "nav-link-dark" : ""} ${
                isActive(link.href) ? (transparent ? "nav-link-dark-active" : "nav-link-active") : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className={
              transparent
                ? "btn-learn-more !px-4 !py-2.5 text-[13px]"
                : "btn-primary !px-4 !py-2.5 text-[13px]"
            }
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center md:hidden ${
            transparent ? "text-white" : "text-ink"
          }`}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0"
        } ${
          transparent
            ? "border-white/10 bg-[#0b1c2c]/95 backdrop-blur-md"
            : "site-header-panel border-ink/10"
        }`}
      >
        <nav className="flex min-h-[70dvh] flex-col gap-1 px-5 py-6" aria-label="Mobile">
          {[...primary, { href: "/contact", label: "Contact" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-none py-3 text-lg font-medium tracking-tight transition-opacity duration-200 ${
                transparent
                  ? isActive(link.href)
                    ? "text-white"
                    : "text-white/60"
                  : isActive(link.href)
                    ? "text-ink"
                    : "text-ink/55"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`mt-6 w-full ${transparent ? "btn-learn-more" : "btn-primary"}`}
            onClick={() => setOpen(false)}
          >
            Start a project
          </Link>
        </nav>
      </div>
    </header>
  );
}
