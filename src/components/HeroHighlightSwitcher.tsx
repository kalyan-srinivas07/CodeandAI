"use client";

import { useEffect, useId, useState, type KeyboardEvent } from "react";

const highlights = [
  {
    id: "web",
    label: "Web",
    title: "Web applications",
    copy: "Enterprise portals and customer platforms engineered for performance and scale.",
  },
  {
    id: "android",
    label: "Android",
    title: "Android apps",
    copy: "Secure mobile products that keep teams and customers connected in the field.",
  },
  {
    id: "iphone",
    label: "iPhone",
    title: "iPhone apps",
    copy: "Premium iOS experiences built for clarity, trust, and enterprise rollout.",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    title: "Enterprise solutions",
    copy: "Custom systems that modernize operations, workflows, and decision-making.",
  },
];

export default function HeroHighlightSwitcher() {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = highlights[active];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % highlights.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [paused]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActive((prev) => (prev + 1) % highlights.length);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActive((prev) => (prev - 1 + highlights.length) % highlights.length);
    }
  }

  return (
    <div
      className="hero-switcher"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        role="tablist"
        aria-label="Featured highlights"
        className="hero-switcher-tabs"
        onKeyDown={onKeyDown}
      >
        {highlights.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id}
              id={`${baseId}-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              className={`hero-switcher-tab ${selected ? "is-active" : ""}`}
              onClick={() => setActive(index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${current.id}`}
        className="hero-switcher-panel"
      >
        <p className="hero-switcher-kicker">
          {String(active + 1).padStart(2, "0")} / {String(highlights.length).padStart(2, "0")}
        </p>
        <h2 className="hero-switcher-title">{current.title}</h2>
        <p className="hero-switcher-copy">{current.copy}</p>
      </div>
    </div>
  );
}
