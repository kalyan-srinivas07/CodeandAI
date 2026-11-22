import { landingFaqs } from "@/data/landing-faqs";

export default function LandingFaq() {
  return (
    <div className="landing-faq">
      {landingFaqs.map((item, index) => (
        <details key={item.q} className="landing-faq-item" open={index === 0}>
          <summary className="landing-faq-trigger">
            <span>{item.q}</span>
            <span className="landing-faq-icon" aria-hidden="true" />
          </summary>
          <p className="landing-faq-answer">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
