import AnimatedSection from "@/components/AnimatedSection";

const RefundPolicy = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Legal</span>
          <h1 className="heading-xl gradient-text-white mb-6">Refund Policy</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">Effective Date: January 1, 2024</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8 text-[hsl(200,20%,60%)] text-sm leading-relaxed">
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">1. Overview</h2>
              <p>GETWAY Technology ("GETWAY," "we," "us") provides SaaS-based business automation solutions. This Refund Policy outlines the terms and conditions under which refunds may be issued for our services.</p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">2. Subscription Plans</h2>
              <p>All subscription plans are billed in advance on a monthly or annual basis. By subscribing to a GETWAY plan, you agree to pay the applicable fees for the selected billing cycle.</p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">3. Refund Eligibility</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Refund requests must be submitted within 7 days of the initial purchase date.</li>
                <li>Refunds are only available for first-time purchases of new subscriptions.</li>
                <li>Renewals, upgrades, and add-ons are non-refundable.</li>
                <li>If you have used the platform extensively during the refund period, the request may be denied.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">4. Non-Refundable Items</h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Setup fees, onboarding charges, and customization costs</li>
                <li>SMS, WhatsApp, Voice, and RCS messaging credits consumed</li>
                <li>Third-party integration fees</li>
                <li>Domain registration and SSL certificates</li>
                <li>White-label setup and branding fees</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">5. How to Request a Refund</h2>
              <p>To request a refund, please contact our support team at <span className="text-teal-light">connect@getway.in</span> with your account details and reason for the request. Our team will review and respond within 5–7 business days.</p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">6. Processing</h2>
              <p>Approved refunds will be processed to the original payment method within 10–15 business days. Partial refunds may be issued at GETWAY's sole discretion based on usage.</p>
            </div>
            <div>
              <h2 className="font-display font-semibold text-primary-foreground text-xl mb-3">7. Contact</h2>
              <p>For questions about this policy, contact us at <span className="text-teal-light">connect@getway.in</span> or call <span className="text-teal-light">+91 92555-22544</span>.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default RefundPolicy;
