"use client";

import { useState } from "react";

const layers = [
  {
    id: 1,
    title: "Foundation & cloud",
    subtitle: "Layer 01",
    copy: "Secure hosting, APIs, and infrastructure that give every product a reliable backbone — ready to scale with your business.",
  },
  {
    id: 2,
    title: "Data & systems",
    subtitle: "Layer 02",
    copy: "Structured data models, integrations, and workflows that turn operations into a single source of truth across teams.",
  },
  {
    id: 3,
    title: "Frameworks & tools",
    subtitle: "Layer 03",
    copy: "Modern engineering frameworks, design systems, and delivery tooling that keep builds fast, consistent, and maintainable.",
  },
  {
    id: 4,
    title: "Applications",
    subtitle: "Layer 04",
    copy: "Web applications, Android apps, and iPhone apps that embed your business processes into products people use every day.",
  },
  {
    id: 5,
    title: "Outcomes in action",
    subtitle: "Layer 05",
    copy: "The final layer connects software to real results — launches, adoption, reporting, and continuous improvement after go-live.",
  },
];

export default function EnterpriseLayers() {
  const [active, setActive] = useState(0);
  const current = layers[active];

  function go(delta: number) {
    setActive((prev) => (prev + delta + layers.length) % layers.length);
  }

  return (
    <div className="enterprise-layers">
      <div className="enterprise-layers-visual" aria-hidden="true">
        {layers.map((layer, index) => (
          <button
            key={layer.id}
            type="button"
            className={`enterprise-layer-bar ${index === active ? "is-active" : ""}`}
            style={{ zIndex: index + 1 }}
            onClick={() => setActive(index)}
            aria-label={`${layer.subtitle}: ${layer.title}`}
          >
            <span>{String(layer.id).padStart(2, "0")}</span>
            <strong>{layer.title}</strong>
          </button>
        ))}
      </div>

      <div className="enterprise-layers-detail">
        <div className="enterprise-layers-nav">
          <button type="button" onClick={() => go(-1)} aria-label="Previous layer">
            ←
          </button>
          <p>
            {active + 1} / {layers.length}
          </p>
          <button type="button" onClick={() => go(1)} aria-label="Next layer">
            →
          </button>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#f5c542]">
          {current.subtitle}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">
          {current.title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">{current.copy}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {layers.map((layer, index) => (
            <button
              key={layer.id}
              type="button"
              className={`enterprise-layer-dot ${index === active ? "is-active" : ""}`}
              onClick={() => setActive(index)}
              aria-label={`Go to layer ${layer.id}`}
            >
              {layer.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
