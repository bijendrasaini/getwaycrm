import AnimatedSection from "@/components/AnimatedSection";

const sections = [
  {
    title: "Platform Usage",
    intro: "GETWAY provides technology systems including:",
    items: ["AI CRM", "Marketing Automation", "Communication Automation", "Workflow Automation", "Business Intelligence Tools"],
  },
  {
    title: "User Responsibilities",
    intro: "Users must:",
    items: ["Provide accurate information", "Avoid spam or illegal communication", "Maintain account security"],
  },
  {
    title: "Intellectual Property",
    content: "All GETWAY software, technology and branding remain the intellectual property of GETWAY Technology.",
  },
  {
    title: "Service Availability",
    content: "GETWAY continuously improves services but does not guarantee uninterrupted availability.",
  },
  {
    title: "Limitation of Liability",
    content: "GETWAY shall not be liable for indirect damages, misuse of services or operational interruptions.",
  },
  {
    title: "Updates",
    content: "Terms may be updated periodically. Continued use of the platform constitutes acceptance of the updated terms.",
  },
];

const Terms = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <h1 className="heading-xl gradient-text-white mb-6">Terms of Service</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            Welcome to GETWAY Technology.
          </p>
        </AnimatedSection>
      </div>
    </section>
    <section className="gradient-section-dark section-padding">
      <div className="container-tight">
        <AnimatedSection>
          <p className="text-[hsl(200,20%,55%)] leading-relaxed mb-10">
            By accessing or using the GETWAY platform you agree to these terms.
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

export default Terms;
