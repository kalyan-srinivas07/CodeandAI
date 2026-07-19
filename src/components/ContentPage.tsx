import Link from "next/link";

type Block = {
  heading: string;
  body: string;
};

type ContentPageProps = {
  kicker: string;
  title: string;
  lead: string;
  blocks: Block[];
  nextHref?: string;
  nextLabel?: string;
};

export default function ContentPage({
  kicker,
  title,
  lead,
  blocks,
  nextHref = "/contact",
  nextLabel = "Start a project",
}: ContentPageProps) {
  return (
    <div className="pt-28">
      <section className="chapter !pb-8">
        <div className="mx-auto max-w-6xl">
          <p className="chapter-label">{kicker}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-fog md:text-5xl md:leading-tight">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{lead}</p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ul className="divide-y divide-white/10 border-y border-ink/10">
            {blocks.map((block) => (
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
            <Link href={nextHref} className="btn-primary">
              {nextLabel}
            </Link>
            <Link href="/" className="btn-ghost">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
