"use client";

import { useState } from "react";

const pillars = [
  {
    id: "01",
    title: "Product-first culture",
    kicker: "Internal excellence",
    copy: "We build with the same standards we recommend to clients — clear architecture, measurable quality, and shipping discipline on every engagement.",
  },
  {
    id: "02",
    title: "Redefining delivery",
    kicker: "End-to-end services",
    copy: "From discovery to launch, we transform ideas into web, Android, and iPhone products with one integrated delivery model.",
  },
  {
    id: "03",
    title: "Future-ready craft",
    kicker: "Talent & capability",
    copy: "Modern stacks, thoughtful UX, and engineering practices that keep your product adaptable as your business grows.",
  },
  {
    id: "04",
    title: "Making digital real",
    kicker: "Client outcomes",
    copy: "We focus on software that goes live and creates impact — clinic systems, legal platforms, and enterprise workflows in production.",
  },
  {
    id: "05",
    title: "Partner ecosystem",
    kicker: "Build. Integrate. Scale.",
    copy: "APIs, cloud platforms, store releases, and third-party integrations — assembled into a digital ecosystem that compounds over time.",
  },
];

export default function TransformationPillars() {
  const [open, setOpen] = useState("01");

  return (
    <ul className="transformation-pillars">
      {pillars.map((pillar) => {
        const isOpen = open === pillar.id;
        return (
          <li key={pillar.id} className={`transformation-pillar ${isOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="transformation-pillar-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? "" : pillar.id)}
            >
              <span className="font-mono text-sm tracking-[0.14em] text-[#f5c542]">
                {pillar.id}
              </span>
              <span className="transformation-pillar-title">{pillar.title}</span>
              <span className="transformation-pillar-icon" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className="transformation-pillar-panel"
              hidden={!isOpen}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                {pillar.kicker}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
                {pillar.copy}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
