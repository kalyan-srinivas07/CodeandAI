"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AmbitionBanner() {
  const [visible, setVisible] = useState(false);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 180);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      className={`ambition-banner ${running ? "is-running" : "is-paused"}`}
      aria-label="Running landing screen"
    >
      <div className="ambition-banner-grid" aria-hidden="true" />
      <div className="ambition-banner-horizon" aria-hidden="true" />
      <div className="ambition-banner-run ambition-banner-run-a" aria-hidden="true" />
      <div className="ambition-banner-run ambition-banner-run-b" aria-hidden="true" />

      <div className={`ambition-banner-content ${visible ? "is-visible" : ""}`}>
        <p className="ambition-banner-kicker">Our ambition</p>
        <h2 className="ambition-banner-title">
          We are growing, taking every opportunity,
          <br />
          and delivering the best output.
        </h2>
        <p className="ambition-banner-copy">
          Building web applications, Android apps, and iPhone apps with focus,
          speed, and craft — so every project creates real value.
        </p>
        <Link href="/contact" className="btn-learn-more mt-6 inline-flex">
          Reach out to us
        </Link>
      </div>

      <button
        type="button"
        className="ambition-banner-toggle"
        aria-pressed={!running}
        aria-label={running ? "Pause landing screen" : "Play landing screen"}
        onClick={() => setRunning((value) => !value)}
      >
        {running ? (
          <span aria-hidden="true">❚❚</span>
        ) : (
          <span aria-hidden="true">▶</span>
        )}
      </button>
    </section>
  );
}
