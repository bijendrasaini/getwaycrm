import { MessageCircle, Smartphone, Mail, CreditCard, Code, Webhook, Bot, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const categories = [
  { icon: MessageCircle, title: "WhatsApp Business API", desc: "Official WhatsApp Business API integration for automated messaging, chatbots, and broadcast campaigns.", features: ["Message templates", "Chatbot automation", "Broadcast messaging", "Media sharing"] },
  { icon: Smartphone, title: "SMS & RCS Messaging", desc: "Enterprise SMS and RCS integration for transactional alerts, OTP, and marketing campaigns.", features: ["Transactional SMS", "OTP delivery", "RCS rich messaging", "DLT compliance"] },
  { icon: Mail, title: "Email Systems", desc: "Seamless email integration for marketing automation, transactional emails, and campaign tracking.", features: ["SMTP integration", "Email templates", "Campaign analytics", "Auto-responders"] },
  { icon: CreditCard, title: "Payment Gateways", desc: "Integrated payment processing with popular Indian and international payment gateways.", features: ["Razorpay", "Stripe", "PayU", "Invoice automation"] },
  { icon: Code, title: "CRM API", desc: "Comprehensive REST API for custom integrations, data sync, and third-party connections.", features: ["RESTful endpoints", "Webhook callbacks", "OAuth 2.0", "Rate limiting"] },
  { icon: Webhook, title: "Webhooks", desc: "Real-time event-driven webhooks to connect GETWAY with any external system or automation.", features: ["Custom triggers", "Event filtering", "Retry logic", "Payload templates"] },
  { icon: Bot, title: "AI Voice Agents", desc: "AI-powered voice calling agents for sales, support, and collections with natural language understanding.", features: ["Outbound calls", "IVR automation", "Call recording", "Sentiment analysis"] },
  { icon: Megaphone, title: "Marketing Automation", desc: "Connect GETWAY with popular marketing tools for omnichannel campaign orchestration.", features: ["Facebook Ads", "Google Ads", "Landing pages", "Lead scoring"] },
];

const Integrations = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Integrations</span>
          <h1 className="heading-xl gradient-text-white mb-6">GETWAY<br />Integrations</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            Connect GETWAY AI CRM with the tools you already use. One platform, infinite possibilities.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <SectionHeader badge="Categories" title="Integration Ecosystem" description="Enterprise-grade integrations across communication, payments, and AI." />
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.08}>
              <div className="glass-card-hover rounded-2xl p-8 h-full">
                <div className="feature-icon-box mb-5"><cat.icon size={24} className="text-teal-light" /></div>
                <h3 className="font-display font-semibold text-primary-foreground text-xl mb-3">{cat.title}</h3>
                <p className="text-[hsl(200,20%,50%)] text-sm leading-relaxed mb-5">{cat.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {cat.features.map((f) => (
                    <span key={f} className="text-[hsl(200,20%,60%)] text-xs flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-teal shrink-0" /> {f}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-section-alt section-padding">
      <div className="container-wide text-center">
        <AnimatedSection>
          <h2 className="heading-md gradient-text-white mb-4">Need a Custom Integration?</h2>
          <p className="text-[hsl(200,20%,55%)] text-sm mb-8 max-w-lg mx-auto">Our API-first platform supports any integration. Talk to our team to build your custom workflow.</p>
          <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
            Book a Demo <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Integrations;
