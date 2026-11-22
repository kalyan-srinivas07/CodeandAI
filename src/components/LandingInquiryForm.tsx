"use client";

import { FormEvent, useState } from "react";
import { SITE_EMAIL } from "@/lib/site";

const appTypes = [
  "Android App",
  "iOS App",
  "Cross-Platform App",
  "Custom Business Application",
  "UI/UX Design",
  "Not sure yet",
] as const;

const MAIL_TO = SITE_EMAIL;

export default function LandingInquiryForm() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [appType, setAppType] = useState<(typeof appTypes)[number]>("Android App");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSending(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim() || "—";
    const company = String(data.get("company") || "").trim() || "—";
    const message = String(data.get("message") || "").trim();
    const subject = "inquiry";
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company: ${company}`,
      `Type of Application: ${appType}`,
      "",
      message,
    ].join("\n");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${MAIL_TO}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          appType,
          message,
          _subject: subject,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        success?: string | boolean;
        message?: string;
      };

      const needsActivation =
        typeof result.message === "string" &&
        result.message.toLowerCase().includes("activation");
      const ok = result.success === true || result.success === "true";

      if (needsActivation || !response.ok || !ok) {
        window.location.href = `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines)}`;
        throw new Error(
          needsActivation
            ? "Check Gmail/Spam for FormSubmit Activate Form, then retry. A backup draft was opened."
            : "A backup email draft was opened — press Send in your mail app."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your message.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="landing-form-success">
        <p className="landing-kicker">Inquiry sent</p>
        <h3>Thanks — we&apos;ll be in touch.</h3>
        <p>Your inquiry was emailed to {MAIL_TO}.</p>
        <button type="button" className="btn-learn-more mt-6" onClick={() => setSubmitted(false)}>
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="landing-form" onSubmit={handleSubmit}>
      <div className="landing-form-grid">
        <label>
          <span>Full Name</span>
          <input name="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Phone Number</span>
          <input name="phone" type="tel" required placeholder="8328670576" />
        </label>
        <label>
          <span>Email Address</span>
          <input name="email" type="email" required placeholder="you@company.com" />
        </label>
        <label>
          <span>Company Name (Optional)</span>
          <input name="company" placeholder="Company name" />
        </label>
      </div>

      <label className="landing-form-full">
        <span>Type of Application</span>
        <select
          name="appType"
          value={appType}
          onChange={(e) => setAppType(e.target.value as (typeof appTypes)[number])}
        >
          {appTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="landing-form-full">
        <span>Inquiry Description</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your app idea, goals, and timeline"
        />
      </label>

      {error ? (
        <p className="landing-form-error" role="alert">
          {error}
        </p>
      ) : null}

      <button type="submit" className="btn-learn-more" disabled={sending}>
        {sending ? "Sending…" : "Submit Inquiry"}
      </button>
    </form>
  );
}
