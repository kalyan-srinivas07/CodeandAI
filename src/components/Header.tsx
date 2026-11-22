import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { primaryNav } from "@/data/nav";

export default function Header() {
  return (
    <header className="landing-header fixed inset-x-0 top-0 z-50 border-b border-[#9fd4cb]/55 bg-[#eaf7f4]/92 shadow-[0_10px_36px_rgba(4,28,34,0.08)] backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link href="/" className="landing-brand shrink-0" aria-label="CodeAI Cloud home">
          <span className="landing-brand-mark" aria-hidden="true" />
          <span>
            CodeAI <strong>Cloud</strong>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((link) => (
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

        <MobileNav />
      </div>
    </header>
  );
}
