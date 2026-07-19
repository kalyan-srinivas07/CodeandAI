"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-28">
      <section className="chapter">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.05fr] md:gap-20">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-fog md:text-5xl">
              Tell us what you&apos;re building.
            </h1>
            <div className="poem mt-8 max-w-md">
              <span>Share goals, timeline, and where intelligence</span>
              <span>or engineering help matters most.</span>
              <span className="mt-3 text-mute">We typically reply within two business days.</span>
            </div>
            <div className="mt-10 space-y-5">
              <p>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
                  Phone
                </span>
                <br />
                <a
                  href="tel:+918308670576"
                  className="link-underline mt-2 inline-block text-base text-fog"
                >
                  8308670576
                </a>
              </p>
              <p>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
                  Email
                </span>
                <br />
                <a
                  href="mailto:kalyansrinivas.it@gmail.com"
                  className="link-underline mt-2 inline-block text-base text-fog"
                >
                  kalyansrinivas.it@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="border border-ink/12 bg-white/45 p-6 md:p-8">
            {submitted ? (
              <div className="flex min-h-[320px] flex-col justify-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                  Message received
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-fog">
                  Thanks — we&apos;ll be in touch.
                </h2>
                <p className="mt-3 text-base leading-relaxed text-mist">
                  Your note is ready on this device. Connect the form to your inbox
                  when you go live.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-mist">
                    Company
                  </label>
                  <input id="company" name="company" className="field" placeholder="Optional" />
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
                    placeholder="What are you building, and how can CodeandAI help?"
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
