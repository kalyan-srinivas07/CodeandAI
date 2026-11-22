"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const LandingInquiryForm = dynamic(() => import("@/components/LandingInquiryForm"), {
  ssr: false,
  loading: () => <FormPlaceholder />,
});

function FormPlaceholder() {
  return (
    <div className="landing-form" aria-busy="true">
      <div className="landing-form-grid">
        <label>
          <span>Full Name</span>
          <input disabled placeholder="Your name" />
        </label>
        <label>
          <span>Phone Number</span>
          <input disabled placeholder="8328670576" />
        </label>
        <label>
          <span>Email Address</span>
          <input disabled placeholder="you@company.com" />
        </label>
        <label>
          <span>Company Name (Optional)</span>
          <input disabled placeholder="Company name" />
        </label>
      </div>
      <label className="landing-form-full">
        <span>Type of Application</span>
        <select disabled>
          <option>Android App</option>
        </select>
      </label>
      <label className="landing-form-full">
        <span>Inquiry Description</span>
        <textarea disabled rows={5} placeholder="Tell us about your app idea, goals, and timeline" />
      </label>
      <button type="button" className="btn-learn-more" disabled>
        Loading form…
      </button>
    </div>
  );
}

export default function LandingInquiryFormLazy() {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || ready) return;

    let cancelled = false;
    const activate = () => {
      if (!cancelled) setReady(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          activate();
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(node);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [ready]);

  return <div ref={ref}>{ready ? <LandingInquiryForm /> : <FormPlaceholder />}</div>;
}
