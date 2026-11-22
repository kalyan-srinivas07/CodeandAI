"use client";

import { useState } from "react";
import { landingFaqs } from "@/data/landing-faqs";

export default function LandingFaq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="landing-faq">
      {landingFaqs.map((item, index) => {
        const active = open === index;
        const panelId = `faq-panel-${index}`;
        const triggerId = `faq-trigger-${index}`;
        return (
          <div key={item.q} className={`landing-faq-item ${active ? "is-open" : ""}`}>
            <button
              type="button"
              id={triggerId}
              className="landing-faq-trigger"
              aria-expanded={active}
              aria-controls={panelId}
              onClick={() => setOpen(active ? -1 : index)}
            >
              <span>{item.q}</span>
              <span aria-hidden="true">{active ? "−" : "+"}</span>
            </button>
            <p
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="landing-faq-answer"
              hidden={!active}
            >
              {item.a}
            </p>
          </div>
        );
      })}
    </div>
  );
}
