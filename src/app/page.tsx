import Link from "next/link";
import LandingInquiryForm from "@/components/LandingInquiryForm";
import LandingFaq from "@/components/LandingFaq";

const valueCards = [
  {
    title: "Custom Solutions",
    copy: "Tailored mobile app development shaped around your workflows, users, and business goals.",
  },
  {
    title: "Modern Technologies",
    copy: "Built with current frameworks and cloud services so your product stays fast and maintainable.",
  },
  {
    title: "Client-Focused Development",
    copy: "Transparent communication, honest estimates, and delivery you can track at every milestone.",
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

const heroChecks = [
  "Custom Android & iOS Applications",
  "UI/UX Design",
  "Scalable App Architecture",
  "Business Efficiency Solutions",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="landing-hero">
        <div className="landing-shell landing-hero-grid">
          <div>
            <p className="landing-kicker">CodeAI Cloud · Hyderabad</p>
            <h1>Custom Mobile App Development Company in Hyderabad</h1>
            <p className="landing-lead">
              Transform your business ideas into powerful mobile applications with custom app
              design and development solutions tailored to your business goals.
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
      <section className="landing-section">
        <div className="landing-shell">
          <ul className="landing-value-grid">
            {valueCards.map((card) => (
              <li key={card.title} className="landing-value-card">
                <h2>{card.title}</h2>
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
            {work.map((item) => (
              <li key={item.name} className="landing-work-card">
                <p className="landing-kicker">{item.label}</p>
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
                  className="landing-work-link"
                >
                  {item.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} →
                </a>
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
      <section id="about" className="landing-section landing-section-muted scroll-mt-24">
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
              Share your requirements and we&apos;ll help you plan the right Android, iOS, or
              cross-platform product for your business.
            </p>
            <div className="landing-contact-meta">
              <a href="tel:+918328670576">8328670576</a>
              <a href="mailto:kalyansrinivas.it@gmail.com">kalyansrinivas.it@gmail.com</a>
              <p>Chat with our team · Hyderabad</p>
            </div>
          </div>
          <LandingInquiryForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="landing-section">
        <div className="landing-shell landing-faq-layout">
          <div className="landing-section-head">
            <p className="landing-kicker">FAQ</p>
            <h2>Answers before you start building.</h2>
          </div>
          <LandingFaq />
        </div>
      </section>

      {/* Final CTA */}
      <section className="landing-final-cta">
        <div className="landing-shell">
          <h2>Ready to Build Your Mobile Application?</h2>
          <p>Get a free consultation and a clear path from idea to launch.</p>
          <div className="landing-cta-row">
            <Link href="#contact" className="btn-learn-more">
              Get Free Consultation
            </Link>
            <a href="tel:+918328670576" className="btn-ghost">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
