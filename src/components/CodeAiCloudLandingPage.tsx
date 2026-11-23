import Link from "next/link";
import LandingInquiryFormLazy from "@/components/LandingInquiryFormLazy";
import LandingFaq from "@/components/LandingFaq";
import { landingFaqs } from "@/data/landing-faqs";
import {
  SITE_EMAIL,
  SITE_LOCALITY,
  SITE_NAME,
  SITE_PHONE,
  SITE_PHONE_DISPLAY,
  SITE_REGION,
  SITE_COUNTRY,
  SITE_URL,
} from "@/lib/site";

const valueCards = [
  {
    title: "Custom Solutions",
    copy: "Tailored mobile app development shaped around your workflows, users, and business goals.",
  },
  {
    title: "Affordable Applications",
    copy: "Clear pricing and scoped delivery so you get an affordable mobile application without cutting quality.",
  },
  {
    title: "Modern Technologies",
    copy: "Built with current frameworks and cloud services so your product stays fast and maintainable.",
  },
  {
    title: "Scalable Architecture",
    copy: "Future-ready foundations that grow with new features, users, and integrations.",
  },
];

const services = [
  {
    title: "Android App Development",
    copy: "Native and hybrid Android apps engineered for performance, security, and Play Store readiness.",
  },
  {
    title: "iOS App Development",
    copy: "Premium experiences for iPhone and iPad with polished interfaces and store-ready release support.",
  },
  {
    title: "Cross-Platform App Development",
    copy: "Build once and run across platforms with Flutter or React Native when shared delivery fits.",
  },
  {
    title: "UI/UX Design",
    copy: "User-centric flows and visually clear interfaces that make complex products easy to use.",
  },
  {
    title: "Custom Business Applications",
    copy: "Internal operations, workflow systems, and customer platforms built for real teams.",
  },
  {
    title: "App Maintenance & Support",
    copy: "Updates, monitoring, and ongoing improvements that keep your app secure and reliable.",
  },
];

const processSteps = [
  { step: "01", title: "Discovery & Planning", copy: "Clarify goals, users, scope, and success metrics." },
  { step: "02", title: "UI/UX Design", copy: "Wireframes, prototypes, and visual systems ready to build." },
  { step: "03", title: "App Development", copy: "Clean architecture, APIs, and feature delivery in sprints." },
  { step: "04", title: "Testing & QA", copy: "Functional, device, and release checks before launch." },
  { step: "05", title: "Launch", copy: "Store submission, rollout support, and go-live readiness." },
  { step: "06", title: "Support & Improvements", copy: "Iterate with analytics, feedback, and roadmap updates." },
];

const work = [
  {
    name: "Galaxy Dental Care",
    label: "Custom Dental Clinic Management System",
    detail: "Advances clinic operations with a unified management platform.",
    url: "https://galaxydentalcare.in/",
  },
  {
    name: "JusticeHome",
    label: "Custom Web Application",
    detail: "Reimagines casework with secure documents, communication, and advocate diary.",
    url: "https://justicehome.in/",
    theme: "india" as const,
  },
];

const techGroups = [
  {
    title: "Mobile Development",
    items: ["Flutter", "React Native", "Kotlin", "Swift"],
  },
  {
    title: "Frontend & Backend",
    items: ["Next.js", "Node.js", "React", "PostgreSQL"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["AWS", "Google Cloud", "Firebase", "Docker"],
  },
  {
    title: "APIs & Integrations",
    items: ["REST & GraphQL", "Payment Gateways", "Maps & SMS", "Third-party APIs"],
  },
];

const industries = [
  "Startups",
  "Healthcare",
  "E-commerce",
  "Education",
  "Real Estate",
  "Finance",
  "Logistics",
  "Service Businesses",
];

const testimonials = [
  {
    quote:
      "Our clinic management system changed how we run day to day — patients, billing, inventory, and reports in one place. The team understood dental operations and delivered software we actually use.",
    name: "Clinic Leadership",
    role: "Galaxy Dental Care",
    href: "https://galaxydentalcare.in/",
  },
  {
    quote:
      "JusticeHome gave our advocates a clear way to manage cases, documents, internal communication, and the senior diary. We can see assignments and events without chasing files across desks.",
    name: "Practice Team",
    role: "JusticeHome",
    href: "https://justicehome.in/",
  },
];

const heroChecks = [
  "Custom Android & iOS Applications",
  "Affordable Mobile Applications",
  "UI/UX Design",
  "Scalable App Architecture",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      email: SITE_EMAIL,
      telephone: SITE_PHONE,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_LOCALITY,
        addressRegion: SITE_REGION,
        addressCountry: SITE_COUNTRY,
      },
      areaServed: {
        "@type": "City",
        name: SITE_LOCALITY,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      telephone: SITE_PHONE,
      email: SITE_EMAIL,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE_LOCALITY,
        addressRegion: SITE_REGION,
        addressCountry: SITE_COUNTRY,
      },
      description:
        "Custom mobile app development company in Hyderabad specializing in Android, iOS, cross-platform, UI/UX, and business applications.",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: landingFaqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ],
};

export default function CodeAiCloudLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="landing-hero">
        <div className="landing-shell landing-hero-grid">
          <div>
            <p className="landing-kicker">CodeAI Cloud · Hyderabad</p>
            <h1>
              <span className="landing-hero-line">Custom Mobile App Development Company</span>
              <span className="landing-hero-line landing-hero-line-loc">in Hyderabad</span>
            </h1>
            <p className="landing-lead">
              Transform your business ideas into powerful, affordable mobile applications with
              custom app design and development solutions tailored to your business goals.
            </p>
            <ul className="landing-checks">
              {heroChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="landing-cta-row">
              <Link href="#contact" className="btn-learn-more">
                Get Free Consultation
              </Link>
              <Link href="#contact" className="btn-ghost">
                Discuss Your App Idea
              </Link>
            </div>
          </div>

          <div className="landing-hero-panel" aria-hidden="true">
            <div className="landing-phone landing-phone-one">
              <div className="landing-phone-screen">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="landing-phone landing-phone-two">
              <div className="landing-phone-screen landing-phone-screen-alt">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value cards */}
      <section className="landing-section" aria-labelledby="why-heading">
        <div className="landing-shell">
          <div className="landing-section-head">
            <p className="landing-kicker">Why CodeAI Cloud</p>
            <h2 id="why-heading">Built for businesses that need software that ships.</h2>
          </div>
          <ul className="landing-value-grid">
            {valueCards.map((card) => (
              <li key={card.title} className="landing-value-card">
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="landing-section landing-section-muted scroll-mt-24">
        <div className="landing-shell">
          <div className="landing-section-head">
            <p className="landing-kicker">Services</p>
            <h2>Cutting-edge mobile app services to power up your business.</h2>
          </div>
          <ul className="landing-service-grid">
            {services.map((service) => (
              <li key={service.title} className="landing-service-card">
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Built with focus */}
      <section className="landing-focus">
        <div className="landing-shell">
          <p className="landing-kicker landing-kicker-on-dark">Our approach</p>
          <h2>Built with focus, speed, and craft — so every project creates real value.</h2>
          <ul className="landing-focus-grid">
            <li>
              <strong>Scalable Application Architecture</strong>
              <span>Clean foundations that support growth without rewrites.</span>
            </li>
            <li>
              <strong>Modern Development Technologies</strong>
              <span>Proven stacks for mobile, web, APIs, and cloud delivery.</span>
            </li>
            <li>
              <strong>Dedicated Project Communication</strong>
              <span>Clear updates, demos, and ownership from kickoff to launch.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="landing-section scroll-mt-24">
        <div className="landing-shell">
          <div className="landing-section-head">
            <p className="landing-kicker">Process</p>
            <h2>From idea to App Store launch in six structured steps.</h2>
          </div>
          <ol className="landing-process-grid">
            {processSteps.map((item) => (
              <li key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Our Work */}
      <section id="work" className="landing-section landing-section-muted scroll-mt-24">
        <div className="landing-shell">
          <div className="landing-section-head">
            <p className="landing-kicker">Our Work</p>
            <h2>Real software in production.</h2>
          </div>
          <ul className="landing-work-grid">
            {work.map((item) => {
              const india = "theme" in item && item.theme === "india";
              return (
                <li
                  key={item.name}
                  className={`landing-work-card ${india ? "landing-work-card-india client-card-india" : ""}`}
                >
                  {india ? (
                    <svg className="ashoka-chakra" viewBox="0 0 100 100" aria-hidden="true">
                      <g className="ashoka-chakra-spin">
                        <circle
                          cx="50"
                          cy="50"
                          r="46"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        />
                        <circle cx="50" cy="50" r="5" fill="currentColor" />
                        {Array.from({ length: 24 }).map((_, i) => {
                          const angle = (i * 15 * Math.PI) / 180;
                          return (
                            <line
                              key={i}
                              x1="50"
                              y1="50"
                              x2={50 + Math.cos(angle) * 42}
                              y2={50 + Math.sin(angle) * 42}
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                          );
                        })}
                        {Array.from({ length: 24 }).map((_, i) => {
                          const angle = (i * 15 * Math.PI) / 180;
                          return (
                            <circle
                              key={`tip-${i}`}
                              cx={50 + Math.cos(angle) * 42}
                              cy={50 + Math.sin(angle) * 42}
                              r="1.8"
                              fill="currentColor"
                            />
                          );
                        })}
                      </g>
                    </svg>
                  ) : null}
                  <div className={india ? "relative z-10" : undefined}>
                    <p className={`landing-kicker ${india ? "landing-kicker-india" : ""}`}>
                      {item.label}
                    </p>
                    <h3>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.name}
                      </a>
                    </h3>
                    <p>{item.detail}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`landing-work-link ${india ? "landing-work-link-india" : ""}`}
                    >
                      {item.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} →
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="landing-section scroll-mt-24">
        <div className="landing-shell">
          <div className="landing-section-head">
            <p className="landing-kicker">Testimonials</p>
            <h2>What partners say when the software ships.</h2>
          </div>
          <ul className="landing-testimonial-grid">
            {testimonials.map((item, index) => (
              <li key={item.role} className="landing-testimonial-card">
                <span className="landing-testimonial-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                <footer>
                  <p className="landing-testimonial-name">{item.name}</p>
                  <p className="landing-testimonial-role">{item.role}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="landing-work-link"
                    >
                      {item.href.replace(/^https?:\/\//, "").replace(/\/$/, "")} →
                    </a>
                  ) : null}
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech stack */}
      <section className="landing-section">
        <div className="landing-shell">
          <div className="landing-section-head">
            <p className="landing-kicker">Technology</p>
            <h2>Modern stack for mobile, web, and cloud products.</h2>
          </div>
          <ul className="landing-tech-grid">
            {techGroups.map((group) => (
              <li key={group.title}>
                <h3>{group.title}</h3>
                <div className="landing-tech-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="landing-section landing-section-muted scroll-mt-24">
        <div className="landing-shell">
          <div className="landing-section-head">
            <p className="landing-kicker">Industries</p>
            <h2>Built for teams across growing verticals.</h2>
          </div>
          <ul className="landing-industry-grid">
            {industries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact / Inquiry */}
      <section id="contact" className="landing-contact scroll-mt-24">
        <div className="landing-shell landing-contact-grid">
          <div>
            <p className="landing-kicker landing-kicker-on-dark">Inquiry</p>
            <h2>Have an App Idea? Let&apos;s Build It Together.</h2>
            <p>
              Share your requirements and we&apos;ll help you plan an affordable application —
              Android, iOS, or cross-platform — built for your business.
            </p>
            <div className="landing-contact-meta">
              <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>
              <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
              <p>Chat with our team · Hyderabad</p>
            </div>
          </div>
          <LandingInquiryFormLazy />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="landing-section scroll-mt-24" aria-labelledby="faq-heading">
        <div className="landing-shell landing-faq-layout">
          <div className="landing-section-head">
            <p className="landing-kicker">FAQ</p>
            <h2 id="faq-heading">Answers before you start building.</h2>
          </div>
          <LandingFaq />
        </div>
      </section>

      {/* Final CTA */}
      <section className="landing-final-cta">
        <div className="landing-shell">
          <h2>Ready to Build Your Mobile Application?</h2>
          <p>
            Get a free consultation and a clear path to an affordable mobile application —
            from idea to launch.
          </p>
          <div className="landing-cta-row">
            <Link href="#contact" className="btn-learn-more">
              Get Free Consultation
            </Link>
            <a href={`tel:${SITE_PHONE}`} className="btn-ghost">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
