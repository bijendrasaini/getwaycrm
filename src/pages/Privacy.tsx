import AnimatedSection from "@/components/AnimatedSection";

const sections = [
  {
    title: "Information We Collect",
    items: [
      "Name and contact details",
      "Email address and phone number",
      "Company and business information",
      "Communication records",
      "CRM data submitted by users",
      "Device and IP information",
    ],
  },
  {
    title: "How We Use Information",
    items: [
      "Provide AI CRM and automation services",
      "Respond to demo requests and inquiries",
      "Improve platform performance",
      "Provide onboarding and technical support",
      "Send important service notifications",
    ],
  },
  {
    title: "Communication Consent",
    content:
      "By submitting forms on our website you agree that GETWAY may contact you through SMS, WhatsApp, RCS Messaging, Email, Phone Calls, and other digital communication channels.",
  },
  {
    title: "Data Security",
    items: [
      "Secure cloud infrastructure",
      "Encrypted storage",
      "Role-based access control",
      "Secure API integrations",
    ],
    intro: "GETWAY implements enterprise-level security including:",
  },
  {
    title: "Third-Party Integrations",
    content:
      "Our platform may integrate with payment gateways, communication APIs and analytics tools that operate under their own policies.",
  },
  {
    title: "Policy Updates",
    content: "GETWAY may update this Privacy Policy periodically. We encourage you to review this page regularly for any changes.",
  },
];

const Privacy = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <h1 className="heading-xl gradient-text-white mb-6">Privacy Policy</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            GETWAY Technology respects your privacy and is committed to protecting your personal data.
          </p>
        </AnimatedSection>
      </div>
    </section>
    <section className="gradient-section-dark section-padding">
      <div className="container-tight">
        <AnimatedSection>
          <p className="text-[hsl(200,20%,55%)] leading-relaxed mb-10">
            This Privacy Policy explains how GETWAY collects, uses and protects information when users interact with our website, platform and services.
          </p>
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="heading-md gradient-text-white mb-4">{s.title}</h2>
                {s.intro && <p className="text-[hsl(200,20%,55%)] leading-relaxed mb-3">{s.intro}</p>}
                {s.content && <p className="text-[hsl(200,20%,55%)] leading-relaxed">{s.content}</p>}
                {s.items && (
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="text-[hsl(200,20%,55%)] text-sm flex items-start gap-2">
                        <span className="text-teal mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Privacy;
