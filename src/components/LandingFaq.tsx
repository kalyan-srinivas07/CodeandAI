"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does custom mobile app development cost?",
    a: "Cost depends on features, platforms, design depth, and integrations. After a short discovery call we share a clear estimate aligned to your goals and timeline.",
  },
  {
    q: "How long does it take to build a mobile app?",
    a: "Most MVPs ship in 8–16 weeks. Larger multi-platform products take longer. We map milestones during Discovery & Planning so you always know what’s next.",
  },
  {
    q: "Do you build both Android and iOS apps?",
    a: "Yes. We deliver native Android and iOS apps, plus cross-platform builds with Flutter or React Native when a shared codebase is the right fit.",
  },
  {
    q: "Can you build internal business applications?",
    a: "Absolutely. We build custom business apps for operations, workflows, field teams, clinics, and legal practices — including systems like Galaxy Dental Care and JusticeHome.",
  },
  {
    q: "Do you provide UI/UX design services?",
    a: "Yes. UI/UX is part of our process — from wireframes and prototypes to polished interfaces ready for development and store release.",
  },
];

export default function LandingFaq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="landing-faq">
      {faqs.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.q} className={`landing-faq-item ${active ? "is-open" : ""}`}>
            <button
              type="button"
              className="landing-faq-trigger"
              aria-expanded={active}
              onClick={() => setOpen(active ? -1 : index)}
            >
              <span>{item.q}</span>
              <span aria-hidden="true">{active ? "−" : "+"}</span>
            </button>
            {active ? <p className="landing-faq-answer">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
