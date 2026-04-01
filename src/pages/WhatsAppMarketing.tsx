import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight, CheckCircle2, Users, Zap, BarChart3, Globe, Target, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const features = [
  { icon: MessageSquare, title: "Official WhatsApp Business API", desc: "Send bulk campaigns, transactional alerts, and automated replies through the official WhatsApp Business API with verified green tick." },
  { icon: Users, title: "Broadcast & Campaigns", desc: "Send personalized bulk messages to thousands of customers with media-rich templates, buttons, and quick replies." },
  { icon: Zap, title: "Automation Workflows", desc: "Trigger WhatsApp messages based on CRM events — new lead, follow-up due, payment reminder, appointment confirmation." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Track delivery rates, read receipts, click-through rates, and campaign performance in real-time dashboards." },
  { icon: Globe, title: "Multi-Agent Inbox", desc: "Multiple team members can handle WhatsApp conversations from a shared inbox with assignment rules and SLA tracking." },
  { icon: Target, title: "CRM Integration", desc: "Every WhatsApp conversation is logged in GETWAY CRM with full contact history, tags, and pipeline tracking." },
];

const useCases = [
  "Lead nurturing & follow-ups", "Appointment reminders", "Payment collection alerts",
  "Order confirmations & shipping updates", "Customer support automation", "Promotional campaigns & offers",
  "Feedback & survey collection", "Re-engagement campaigns",
];

const WhatsAppMarketing = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">WhatsApp Business API</span>
          <h1 className="heading-xl gradient-text-white mb-6">WhatsApp Marketing<br />& Automation</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto mb-10">
            Engage customers on the world's most popular messaging platform with official WhatsApp Business API, automated campaigns, and CRM-integrated conversations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">Book Demo <ArrowRight size={18} /></Link>
            <Link to="/platform" className="outline-button-hero px-8 py-3.5 rounded-xl font-semibold">Explore CPaaS</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <SectionHeader badge="Features" title="WhatsApp Business API Features" description="Everything you need to run powerful WhatsApp marketing campaigns at scale." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.08}>
              <div className="glass-card-hover rounded-2xl p-8 h-full">
                <div className="feature-icon-box mb-5"><f.icon size={24} className="text-teal-light" /></div>
                <h3 className="font-display font-semibold text-primary-foreground text-lg mb-3">{f.title}</h3>
                <p className="text-[hsl(200,20%,50%)] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="gradient-section-alt section-padding">
      <div className="container-wide max-w-4xl mx-auto">
        <SectionHeader badge="Use Cases" title="WhatsApp Marketing Use Cases" description="Drive engagement and conversions with targeted WhatsApp campaigns." />
        <div className="grid sm:grid-cols-2 gap-4">
          {useCases.map((uc, i) => (
            <AnimatedSection key={uc} delay={i * 0.05}>
              <div className="flex items-center gap-3 glass-card rounded-xl px-5 py-4">
                <CheckCircle2 size={18} className="text-teal shrink-0" />
                <span className="text-[hsl(200,20%,70%)] text-sm">{uc}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="gradient-hero section-padding relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide relative z-10 text-center">
        <AnimatedSection>
          <h2 className="heading-lg gradient-text-white mb-6">Start WhatsApp Marketing Today</h2>
          <p className="text-[hsl(200,20%,50%)] text-body-lg max-w-2xl mx-auto mb-10">Get the official WhatsApp Business API with GETWAY and automate your customer engagement.</p>
          <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">Book Demo <ArrowRight size={18} /></Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default WhatsAppMarketing;
