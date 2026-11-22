import Link from "next/link";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  copy: string;
  tone?: "navy" | "ink" | "rose" | "sky";
  cta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export default function PageBanner({
  eyebrow,
  title,
  copy,
  tone = "navy",
  cta,
  secondaryCta,
}: PageBannerProps) {
  return (
    <section className={`page-banner page-banner-${tone}`}>
      <div className="page-banner-grid" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="page-banner-eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl md:leading-tight">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed md:text-lg">{copy}</p>
        {(cta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {cta ? (
              <Link href={cta.href} className="btn-learn-more">
                {cta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link href={secondaryCta.href} className="btn-banner-ghost">
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
