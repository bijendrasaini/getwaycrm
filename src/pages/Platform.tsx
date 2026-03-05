import { Link } from "react-router-dom";
import { Brain, Phone, Bot, Workflow, PieChart, Server, Globe, Shield, Code, Zap, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const pillars = [
  { icon: Brain, title: "AI CRM Engine", desc: "Predictive lead scoring, intelligent pipeline management, and automated customer journey orchestration powered by machine learning." },
  { icon: Phone, title: "CPaaS Communication Infrastructure", desc: "Enterprise-grade communication APIs — SMS, RCS, WhatsApp Business, Voice, Email — all through a single unified API." },
  { icon: Bot, title: "AI Voice Systems", desc: "Deploy conversational AI voice agents for sales, support, and collections. Natural language processing with multi-language support." },
  { icon: Workflow, title: "Workflow Automation", desc: "Visual drag-and-drop workflow builder with conditional logic, triggers, webhooks, and multi-step automations across all channels." },
  { icon: PieChart, title: "Revenue Intelligence", desc: "Real-time analytics dashboards with AI-powered forecasting, attribution modeling, and pipeline health monitoring." },
  { icon: Server, title: "Cloud Infrastructure", desc: "Auto-scaling, globally distributed cloud infrastructure with 99.9% uptime SLA, built for enterprise workloads." },
];

const techFeatures = [
  { icon: Code, title: "API-First Architecture", desc: "RESTful APIs and webhooks for seamless integration with your existing tech stack." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant, end-to-end encryption, role-based access control, and audit logs." },
  { icon: Globe, title: "Global Scale", desc: "Multi-region deployment with CDN, auto-scaling, and edge computing capabilities." },
  { icon: Zap, title: "Real-Time Processing", desc: "Event-driven architecture for real-time data processing and instant workflow triggers." },
];

const Platform = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20">
      <div className="container-wide text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-electric/10 text-electric-glow border border-electric/20">Platform</span>
          <h1 className="heading-xl gradient-text-white mb-6">The Complete AI<br />Automation Platform</h1>
          <p className="text-[hsl(220,20%,60%)] text-body-lg max-w-2xl mx-auto mb-10">
            Six powerful pillars working together to automate every aspect of your business operations.
          </p>
          <Link to="/contact" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
            Request Demo <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <SectionHeader badge="Core Pillars" title="Platform Architecture" description="Built from the ground up for intelligent business automation at enterprise scale." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <div className="glass-card-hover rounded-2xl p-8 h-full">
                <div className="feature-icon-box mb-5"><p.icon size={24} className="text-electric-glow" /></div>
                <h3 className="font-display font-semibold text-primary-foreground text-lg mb-3">{p.title}</h3>
                <p className="text-[hsl(220,20%,55%)] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="gradient-section-alt section-padding">
      <div className="container-wide">
        <SectionHeader badge="Technology" title="Enterprise-Grade Architecture" description="Built on modern, scalable infrastructure designed for reliability and performance." />
        <div className="grid md:grid-cols-2 gap-6">
          {techFeatures.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="glass-card-hover rounded-2xl p-8 h-full flex gap-5">
                <div className="feature-icon-box shrink-0"><f.icon size={22} className="text-electric-glow" /></div>
                <div>
                  <h3 className="font-display font-semibold text-primary-foreground mb-2">{f.title}</h3>
                  <p className="text-[hsl(220,20%,55%)] text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Platform;
