import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight, CheckCircle2, Zap, BarChart3, Shield, Globe, Smartphone, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const features = [
  { icon: Send, title: "Bulk SMS Campaigns", desc: "Send promotional, transactional, and OTP messages to millions of contacts with high delivery rates and DND compliance." },
  { icon: Smartphone, title: "RCS Messaging", desc: "Send rich interactive messages with images, carousels, buttons, and branded sender IDs for 10x higher engagement." },
  { icon: Zap, title: "API Integration", desc: "Integrate SMS/RCS into your applications with simple REST APIs. Trigger messages from any workflow or system." },
  { icon: BarChart3, title: "Delivery Analytics", desc: "Real-time delivery reports, click tracking, conversion attribution, and campaign performance dashboards." },
  { icon: Shield, title: "DND & TRAI Compliance", desc: "Full compliance with TRAI regulations, DND registry, and TCCCPR. Automatic scrubbing and opt-out management." },
  { icon: Globe, title: "Multi-Route Infrastructure", desc: "Enterprise-grade delivery with multiple operator routes, automatic failover, and priority routing for critical messages." },
];

const useCases = [
  "OTP & verification messages", "Promotional SMS campaigns", "Transactional alerts & notifications",
  "RCS rich media campaigns", "Appointment reminders", "Order & shipping updates",
  "Payment & EMI reminders", "Customer re-engagement",
];

const SmsRcsMessaging = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">SMS & RCS</span>
          <h1 className="heading-xl gradient-text-white mb-6">SMS & RCS<br />Messaging Platform</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto mb-10">
            Enterprise-grade SMS and RCS messaging platform with bulk campaigns, API integration, and TRAI-compliant delivery infrastructure.
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
        <SectionHeader badge="Features" title="SMS & RCS Features" description="Complete messaging infrastructure for businesses of all sizes." />
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
        <SectionHeader badge="Use Cases" title="SMS & RCS Use Cases" />
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
          <h2 className="heading-lg gradient-text-white mb-6">Start SMS & RCS Messaging</h2>
          <p className="text-[hsl(200,20%,50%)] text-body-lg max-w-2xl mx-auto mb-10">Launch enterprise messaging campaigns with GETWAY's communication platform.</p>
          <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">Book Demo <ArrowRight size={18} /></Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default SmsRcsMessaging;
