import AnimatedSection from "@/components/AnimatedSection";

const Terms = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <h1 className="heading-xl gradient-text-white mb-6">Terms of Service</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">Last updated: March 2026</p>
        </AnimatedSection>
      </div>
    </section>
    <section className="gradient-section-dark section-padding">
      <div className="container-tight">
        <AnimatedSection>
          <div className="prose prose-invert max-w-none space-y-8">
            {[
              { title: "Acceptance of Terms", content: "By accessing or using GETWAY's platform and services, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services." },
              { title: "Use of Services", content: "You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the security of your account credentials." },
              { title: "Intellectual Property", content: "All content, features, and functionality of the GETWAY platform are owned by GETWAY and are protected by copyright, trademark, and other intellectual property laws." },
              { title: "Data & Privacy", content: "Your use of our services is also governed by our Privacy Policy. By using GETWAY, you consent to the collection and use of data as described in our Privacy Policy." },
              { title: "Service Availability", content: "We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. We may perform maintenance or updates that temporarily affect availability." },
              { title: "Limitation of Liability", content: "GETWAY shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services, to the maximum extent permitted by law." },
              { title: "Contact", content: "For questions about these Terms, contact us at legal@getway.com." },
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

export default Terms;
