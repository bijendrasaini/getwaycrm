import { Link } from "react-router-dom";
import { Mail, ArrowRight, CheckCircle2, Users, Zap, BarChart3, Target, Layers, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const features = [
  { icon: Mail, title: "Campaign Builder", desc: "Create beautiful email campaigns with drag-and-drop builder, pre-built templates, and dynamic content personalization." },
  { icon: Zap, title: "Drip Sequences", desc: "Set up automated email sequences triggered by CRM events — new lead, abandoned cart, post-purchase, re-engagement." },
  { icon: Target, title: "Smart Segmentation", desc: "Segment your audience based on behavior, demographics, purchase history, and CRM data for hyper-targeted campaigns." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Track open rates, click rates, bounce rates, conversions, and revenue attribution with detailed analytics." },
  { icon: Sparkles, title: "AI Content Generation", desc: "Generate compelling email copy, subject lines, and CTAs using AI. A/B test variations automatically for optimal results." },
  { icon: Layers, title: "CRM Integration", desc: "Every email interaction is tracked in GETWAY CRM — opens, clicks, replies — for complete customer journey visibility." },
];

const useCases = [
  "Welcome & onboarding sequences", "Product launch announcements", "Newsletter campaigns",
  "Cart abandonment recovery", "Re-engagement campaigns", "Event invitations",
  "Monthly reports & updates", "Customer feedback surveys",
];

const EmailMarketing = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Email Marketing</span>
          <h1 className="heading-xl gradient-text-white mb-6">Email Marketing<br />Automation</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto mb-10">
            Create, automate, and optimize email campaigns with AI-powered tools, CRM integration, and advanced analytics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">Book Demo <ArrowRight size={18} /></Link>
            <Link to="/platform" className="outline-button-hero px-8 py-3.5 rounded-xl font-semibold">Explore Platform</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <SectionHeader badge="Features" title="Email Marketing Features" description="Everything you need for effective email marketing at scale." />
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
        <SectionHeader badge="Use Cases" title="Email Marketing Use Cases" />
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
          <h2 className="heading-lg gradient-text-white mb-6">Start Email Marketing Today</h2>
          <p className="text-[hsl(200,20%,50%)] text-body-lg max-w-2xl mx-auto mb-10">Launch AI-powered email campaigns with GETWAY's marketing automation platform.</p>
          <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">Book Demo <ArrowRight size={18} /></Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default EmailMarketing;
