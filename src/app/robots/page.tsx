import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sitePages } from "@/lib/sitePages";

const page = sitePages.find((p) => p.href === "/robots")!;

export const metadata: Metadata = {
  title: page.label,
  description: page.lead,
};

export default function RobotsPage() {
  return (
    <div className="pt-28">
      <section className="chapter !pb-8">
        <div className="mx-auto max-w-6xl">
          <p className="chapter-label">{page.kicker}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-fog md:text-5xl md:leading-tight">
            {page.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{page.lead}</p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8">
        <div className="relative mx-auto aspect-[16/8] max-w-6xl overflow-hidden border border-ink/10">
          <Image
            src="/robots.jpg"
            alt="CodeandAI robots and autonomous agents"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/30" />
          <p className="absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#d49293] md:bottom-8 md:left-8">
            End state of the home scroll · Agents &amp; Robots
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ul className="divide-y divide-white/10 border-y border-ink/10">
            {page.blocks.map((block) => (
              <li key={block.heading} className="py-10">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-fog">
                  {block.heading}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-mist">
                  {block.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/contact" className="btn-ghost">
              Build with us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
