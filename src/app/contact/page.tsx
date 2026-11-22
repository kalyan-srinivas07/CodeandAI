"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const platforms = [
  "Web app",
  "Android",
  "iPhone",
  "Enterprise software",
  "Full digital solution",
  "Not sure yet",
] as const;

const MAIL_TO = "kalyansrinivas.it@gmail.com";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [platform, setPlatform] = useState<(typeof platforms)[number]>("Web app");

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
      `Platform: ${platform}`,
      "",
      message,
    ].join("\n");

    try {
      // Must run in the browser — FormSubmit/Web3Forms reject Vercel server IPs on free plans.
      const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (web3Key) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject,
            from_name: "inquiry",
            name,
            email,
            phone,
            company,
            platform,
            message,
          }),
        });

        const result = (await response.json().catch(() => ({}))) as {
          success?: boolean;
          message?: string;
        };

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Could not deliver the message.");
        }

        setSubmitted(true);
        form.reset();
        return;
      }

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
          platform,
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

      if (needsActivation) {
        window.location.href = `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines)}`;
        throw new Error(
          "One-time setup: open Gmail (Inbox + Spam), find FormSubmit “Activate Form”, click it, then submit again. A backup email draft was opened."
        );
      }

      const ok = result.success === true || result.success === "true";
      if (!response.ok || !ok) {
        // Guaranteed backup so the inquiry is not lost
        window.location.href = `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines)}`;
        throw new Error(
          (result.message || "Delivery service blocked the request.") +
            " A backup email draft was opened — press Send in your mail app."
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

  return (
    <div className="pt-[4.25rem]">
      <section className="contact-split">
        <div className="contact-split-panel">
          <div className="contact-split-grid" aria-hidden="true" />
          <div className="relative z-10 mx-auto flex h-full max-w-xl flex-col justify-center px-5 py-16 md:px-10 md:py-24">
            <p className="page-banner-eyebrow">Contact</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl md:leading-tight">
              Tell us what you&apos;re building.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              Share your digital need — a web product, mobile app, enterprise
              system, or full software solution. We typically reply within two
              business days.
            </p>

            <div className="mt-10 space-y-6 border-t border-white/15 pt-8">
              <p>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                  Phone
                </span>
                <br />
                <a
                  href="tel:+918328670576"
                  className="link-underline mt-2 inline-block text-lg text-white"
                >
                  8328670576
                </a>
              </p>
              <p>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                  Email
                </span>
                <br />
                <a
                  href={`mailto:${MAIL_TO}`}
                  className="link-underline mt-2 inline-block break-all text-base text-white md:text-lg"
                >
                  {MAIL_TO}
                </a>
              </p>
            </div>

            <Link href="/services" className="btn-learn-more mt-10 inline-flex w-fit">
              Learn more
            </Link>
          </div>
        </div>

        <div className="contact-split-form">
          <div className="form-panel !border-0 !bg-transparent !p-0 !shadow-none">
            {submitted ? (
              <div className="flex min-h-[360px] flex-col justify-center">
                <p className="eyebrow">Message sent</p>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-fog md:text-3xl">
                  Thanks — we&apos;ll be in touch.
                </h2>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-mist">
                  Your {platform.toLowerCase()} inquiry was emailed to {MAIL_TO}.
                  We typically reply within two business days.
                </p>
                <button
                  type="button"
                  className="btn-learn-more mt-8 w-fit"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <fieldset>
                  <legend className="mb-3 text-sm font-medium text-mist">
                    What do you need?
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {platforms.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setPlatform(option)}
                        className={`choice-chip ${platform === option ? "choice-chip-active" : ""}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="platform" value={platform} />
                </fieldset>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-mist">
                      Name
                    </label>
                    <input id="name" name="name" required className="field" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-mist">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="field"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-mist">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="field"
                      placeholder="8328670576"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-mist">
                      Company <span className="text-mute">(optional)</span>
                    </label>
                    <input id="company" name="company" className="field" placeholder="Company name" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-mist">
                    Project brief
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="field"
                    placeholder="What should the app do? Any timeline or must-haves?"
                  />
                </div>

                {error ? (
                  <p className="text-sm leading-relaxed text-[#b85f62]" role="alert">
                    {error}
                  </p>
                ) : null}

                <button type="submit" className="btn-learn-more" disabled={sending}>
                  {sending ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
