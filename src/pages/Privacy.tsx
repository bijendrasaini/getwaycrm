import AnimatedSection from "@/components/AnimatedSection";

const Privacy = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <h1 className="heading-xl gradient-text-white mb-6">Privacy Policy</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">Last updated: March 2026</p>
        </AnimatedSection>
      </div>
    </section>
    <section className="gradient-section-dark section-padding">
      <div className="container-tight">
        <AnimatedSection>
          <div className="prose prose-invert max-w-none space-y-8">
            {[
              { title: "Information We Collect", content: "We collect information you provide directly, such as your name, email address, company name, and phone number when you create an account, request a demo, or contact us. We also collect usage data, device information, and cookies to improve your experience." },
              { title: "How We Use Your Information", content: "We use your information to provide and maintain our services, communicate with you, improve our platform, ensure security, and comply with legal obligations. We may also use your data to personalize your experience and send relevant updates." },
              { title: "Data Sharing", content: "We do not sell your personal information. We may share data with trusted service providers who assist in operating our platform, subject to strict confidentiality agreements. We may also share data when required by law." },
              { title: "Data Security", content: "We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your data. All data is encrypted at rest and in transit." },
              { title: "Your Rights", content: "You have the right to access, correct, delete, or export your personal data. You may also opt out of marketing communications at any time. Contact us at privacy@getway.com to exercise these rights." },
              { title: "Contact Us", content: "For privacy-related questions, contact our Data Protection team at privacy@getway.com or write to us at our registered office." },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="heading-md gradient-text-white mb-4">{section.title}</h2>
                <p className="text-[hsl(200,20%,55%)] leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Privacy;
