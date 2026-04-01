import AnimatedSection from "@/components/AnimatedSection";

const CompliancePolicy = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Legal</span>
          <h1 className="heading-xl gradient-text-white mb-6">Compliance Policy</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">Effective Date: January 1, 2024</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 text-[hsl(200,20%,60%)] text-sm leading-relaxed">
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">1. Commitment to Compliance</h2>
              <p>GETWAY Technology is committed to maintaining the highest standards of regulatory and legal compliance in all business operations. We adhere to applicable Indian and international data protection laws, telecommunications regulations, and industry standards.</p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">2. Data Protection</h2>
              <p>We comply with the Information Technology Act, 2000 and its amendments, as well as the Digital Personal Data Protection Act (DPDPA). All personal data is collected, stored, processed, and shared in accordance with applicable data protection regulations.</p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">3. Telecom Compliance</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>TRAI (Telecom Regulatory Authority of India) regulations for SMS, voice, and messaging services</li>
                <li>DND (Do Not Disturb) registry compliance</li>
                <li>TCCCPR (Telecom Commercial Communications Customer Preference Regulations) compliance</li>
                <li>WhatsApp Business API terms and Meta Business policies</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">4. Security Standards</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>End-to-end encryption for data at rest and in transit</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Role-based access control (RBAC) for all platform users</li>
                <li>SOC 2 Type II compliance roadmap</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">5. Anti-Spam Policy</h2>
              <p>GETWAY enforces strict anti-spam policies. Users are prohibited from sending unsolicited messages, using purchased contact lists, or engaging in any form of spam through our platform. Violations may result in immediate account suspension.</p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">6. User Obligations</h2>
              <p>Users of the GETWAY platform are responsible for ensuring their own compliance with applicable laws when using our communication and automation tools, including obtaining proper consent from recipients before sending messages.</p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">7. Reporting</h2>
              <p>To report a compliance concern or violation, contact our compliance team at <span className="text-teal-light">connect@getway.in</span>.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default CompliancePolicy;
