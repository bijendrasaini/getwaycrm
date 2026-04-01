import { Link } from "react-router-dom";
import { Headphones, ArrowRight, CheckCircle2, Phone, Zap, BarChart3, Users, Settings, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const features = [
  { icon: Headphones, title: "Smart IVR Builder", desc: "Create intelligent IVR call flows with drag-and-drop builder. Multi-level menus, conditional routing, and time-based rules." },
  { icon: Phone, title: "Click-to-Call", desc: "Add click-to-call buttons on your website. Visitors connect to your sales team instantly — no dialing needed." },
  { icon: Users, title: "Intelligent Call Routing", desc: "Route calls to the right agent based on skills, availability, language, location, or CRM data. Reduce wait times by 80%." },
  { icon: BarChart3, title: "Call Analytics", desc: "Track call volumes, wait times, agent performance, customer satisfaction, and conversion metrics in real-time." },
  { icon: Zap, title: "CRM Integration", desc: "Every call is logged in GETWAY CRM with recordings, transcripts, and automated follow-up task creation." },
  { icon: Shield, title: "Enterprise Reliability", desc: "99.9% uptime SLA with redundant infrastructure, DND compliance, and TRAI-approved calling infrastructure." },
];

const useCases = [
  "Customer support hotlines", "Sales inquiry routing", "Appointment booking via phone",
  "Payment collection calls", "Order status inquiries", "Emergency helplines",
  "Feedback & survey calls", "Multi-department routing",
];

const IvrSystem = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">IVR & Click-to-Call</span>
          <h1 className="heading-xl gradient-text-white mb-6">IVR Calling System<br />& Click-to-Call</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto mb-10">
            Build intelligent IVR call flows, enable click-to-call on your website, and route calls intelligently with AI-powered call management.
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
        <SectionHeader badge="Features" title="IVR & Calling Features" description="Enterprise-grade IVR and call management for modern businesses." />
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
        <SectionHeader badge="Use Cases" title="IVR & Calling Use Cases" />
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
          <h2 className="heading-lg gradient-text-white mb-6">Set Up Your IVR System Today</h2>
          <p className="text-[hsl(200,20%,50%)] text-body-lg max-w-2xl mx-auto mb-10">Get enterprise-grade IVR and call management with GETWAY's communication platform.</p>
          <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">Book Demo <ArrowRight size={18} /></Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default IvrSystem;
