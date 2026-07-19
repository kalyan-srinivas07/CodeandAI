"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primary = [
  { href: "/", label: "Home" },
  { href: "/robots", label: "Robots" },
  { href: "/contact", label: "Contact Us" },
  { href: "/clients", label: "Our Valued Clients" },
];

const more = [
  { href: "/technology", label: "Technology" },
  { href: "/agents", label: "Agents" },
  { href: "/systems", label: "Systems" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-ink/10"
      style={{
        backgroundColor: "#b4b9ab",
        backgroundImage:
          "linear-gradient(to right, rgba(180,185,171,0.45) 0%, rgba(180,185,171,0.45) 50%, rgba(212,146,147,0.45) 50%, rgba(212,146,147,0.45) 100%), url('/wall-bg.jpg')",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="shrink-0 font-display text-[1.15rem] font-extrabold tracking-tight text-ink"
        >
          Code<span className="font-medium text-ink/60">and</span>AI
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-7">
          {primary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline whitespace-nowrap text-[13px] font-medium tracking-[0.04em] text-ink/70 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
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
        className={`overflow-hidden border-t border-ink/15 transition-all duration-300 md:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          backgroundColor: "#b4b9ab",
          backgroundImage:
            "linear-gradient(to right, rgba(180,185,171,0.45) 0%, rgba(180,185,171,0.45) 50%, rgba(212,146,147,0.45) 50%, rgba(212,146,147,0.45) 100%), url('/wall-bg.jpg')",
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
        }}
      >
        <nav className="flex flex-col gap-1 px-5 py-5">
          {primary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2.5 text-base font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="my-2 border-t border-ink/15" />
          {more.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-sm text-ink/70"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
