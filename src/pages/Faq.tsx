import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is GETWAY AI CRM?",
    a: "GETWAY AI CRM is an all-in-one AI-powered business automation platform that integrates CRM, CPaaS, WhatsApp API, AI Voice Agents, marketing automation, LMS, and workflow automation into a single unified system. It replaces 10+ software tools with one intelligent platform.",
  },
  {
    q: "How is GETWAY different from other CRM platforms?",
    a: "Unlike traditional CRMs, GETWAY combines CRM with built-in communication infrastructure (SMS, WhatsApp, Voice, Email), AI-powered automation, funnel builders, LMS, and payment processing — all in one platform. You don't need multiple subscriptions or complex integrations.",
  },
  {
    q: "Is GETWAY secure?",
    a: "Absolutely. GETWAY uses enterprise-grade security with end-to-end encryption (AES-256 at rest, TLS 1.3 in transit), role-based access control, comprehensive audit logging, and secure cloud infrastructure with 99.9% uptime SLA.",
  },
  {
    q: "Where is customer data stored?",
    a: "Customer data is stored on secure, enterprise-grade cloud infrastructure with data residency controls. We maintain strict data governance policies including retention policies and right-to-deletion to comply with global regulations like GDPR.",
  },
  {
    q: "Can GETWAY replace multiple tools?",
    a: "Yes! GETWAY is designed to replace 10+ separate software tools including your CRM, email marketing, WhatsApp tools, funnel builders, course platforms, booking systems, invoicing tools, and more — all unified under one AI-powered platform.",
  },
  {
    q: "Is there a partner program?",
    a: "Yes, GETWAY offers both a Channel Partner Program and a White-Label Reseller Program. Partners can resell the platform under their own brand and earn recurring revenue. Visit our Partners page to learn more and apply.",
  },
  {
    q: "Do you offer white-label CRM?",
    a: "Yes, our White-Label Reseller Program allows you to offer GETWAY AI CRM under your own brand. You get full customization, your own domain, branded login, and dedicated support — perfect for agencies and IT companies.",
  },
];

const Faq = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">FAQ</span>
          <h1 className="heading-xl gradient-text-white mb-6">Frequently Asked<br />Questions</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            Everything you need to know about GETWAY AI CRM and our platform.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide max-w-3xl mx-auto">
        <AnimatedSection>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-2xl px-6 border-none">
                <AccordionTrigger className="text-primary-foreground text-left font-semibold text-base py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(200,20%,55%)] text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Faq;
