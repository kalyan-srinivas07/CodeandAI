"use client";

import { useState } from "react";

const hotspots = [
  {
    id: 1,
    label: "Web",
    title: "Web applications",
    copy: "Business platforms and customer portals engineered for performance and scale.",
    x: "18%",
    y: "42%",
  },
  {
    id: 2,
    label: "Android",
    title: "Android apps",
    copy: "Secure mobile products that keep teams and customers connected on the go.",
    x: "58%",
    y: "28%",
  },
  {
    id: 3,
    label: "iPhone",
    title: "iPhone apps",
    copy: "Premium iOS experiences built for clarity, trust, and enterprise rollout.",
    x: "78%",
    y: "48%",
  },
  {
    id: 4,
    label: "Enterprise",
    title: "Enterprise solutions",
    copy: "Custom systems that modernize operations, workflows, and decision-making.",
    x: "38%",
    y: "68%",
  },
];

export default function FeatureHotspots() {
  const [active, setActive] = useState(1);
  const current = hotspots.find((item) => item.id === active) ?? hotspots[0];

  return (
    <div className="feature-hotspots" aria-label="Capability hotspots">
      <div className="feature-hotspots-stage">
        <div className="feature-hotspots-grid" aria-hidden="true" />

        {hotspots.map((spot) => {
          const isActive = spot.id === active;
          return (
            <button
              key={spot.id}
              type="button"
              className={`feature-pin ${isActive ? "feature-pin-active" : ""}`}
              style={{ left: spot.x, top: spot.y }}
              aria-pressed={isActive}
              aria-label={`${spot.id}. ${spot.title}`}
              onClick={() => setActive(spot.id)}
              onMouseEnter={() => setActive(spot.id)}
              onFocus={() => setActive(spot.id)}
            >
              <span className="feature-pin-dot">{spot.id}</span>
              <span className="feature-pin-label">{spot.label}</span>
            </button>
          );
        })}

        <div className="feature-callout" role="status">
          <p className="feature-callout-kicker">{current.label}</p>
          <p className="feature-callout-title">{current.title}</p>
          <p className="feature-callout-copy">{current.copy}</p>
        </div>
      </div>
    </div>
  );
}
