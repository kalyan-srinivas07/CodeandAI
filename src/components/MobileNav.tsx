"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { primaryNav } from "@/data/nav";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center text-[#062a32]"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <div
        id={menuId}
        className={`fixed inset-x-0 top-[3.65rem] z-40 overflow-hidden border-t border-[#9fd4cb]/55 bg-[#eaf7f4] transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex min-h-[70dvh] flex-col gap-1 px-5 py-6" aria-label="Mobile">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-lg font-medium tracking-tight text-[#062a32]"
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
    </div>
  );
}
