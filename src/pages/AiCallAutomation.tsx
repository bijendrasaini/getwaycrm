import { Link } from "react-router-dom";
import { Bot, ArrowRight, CheckCircle2, Phone, Zap, BarChart3, Users, Brain, Headphones } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const features = [
  { icon: Bot, title: "AI Voice Agents", desc: "Deploy intelligent AI voice agents that qualify leads, make follow-up calls, book appointments, and close deals — 24/7 without human intervention." },
  { icon: Phone, title: "Automated Outbound Calling", desc: "AI-powered outbound calling system that contacts leads, qualifies prospects, books meetings, and updates CRM automatically." },
  { icon: Headphones, title: "Inbound Call Handling", desc: "AI agents handle inbound customer calls — answer queries, route to departments, schedule callbacks, and resolve issues." },
  { icon: Brain, title: "Natural Language Processing", desc: "Advanced NLP enables natural, human-like conversations. Multi-language support for Hindi, English, and regional languages." },
  { icon: BarChart3, title: "Call Analytics & Recording", desc: "Every call is recorded, transcribed, and analyzed. Track sentiment, conversion rates, and agent performance." },
  { icon: Zap, title: "CRM Auto-Update", desc: "Call outcomes automatically update CRM records — lead status, notes, follow-up tasks, and pipeline stages." },
];

const benefits = [
  "Handle 1000+ simultaneous calls", "24/7 automated calling — no breaks, no holidays",
  "Reduce call center costs by 70%", "3X faster lead qualification",
  "Multi-language AI conversations", "Instant CRM integration & logging",
  "TRAI & DND compliant infrastructure", "Real-time call monitoring & analytics",
];

const AiCallAutomation = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">AI Call Automation</span>
          <h1 className="heading-xl gradient-text-white mb-6">AI Call Automation<br />& Voice Agents</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto mb-4">
            AI Voice Agents can handle your entire calling system automatically — sales calls, support, follow-ups, and lead qualification.
          </p>
          <p className="text-teal-light text-lg font-semibold mb-10">AI-Powered Agents That Qualify Leads, Make Calls & Close Deals 24/7</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">Book Demo <ArrowRight size={18} /></Link>
            <Link to="/platform" className="outline-button-hero px-8 py-3.5 rounded-xl font-semibold">Explore CPaaS</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <SectionHeader badge="Features" title="AI Calling Features" description="Enterprise-grade AI calling automation for sales, support, and engagement." />
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
        <SectionHeader badge="Benefits" title="Why AI Call Automation?" />
        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <AnimatedSection key={b} delay={i * 0.05}>
              <div className="flex items-center gap-3 glass-card rounded-xl px-5 py-4">
                <CheckCircle2 size={18} className="text-teal shrink-0" />
                <span className="text-[hsl(200,20%,70%)] text-sm">{b}</span>
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
          <h2 className="heading-lg gradient-text-white mb-6">Automate Your Calling Today</h2>
          <p className="text-[hsl(200,20%,50%)] text-body-lg max-w-2xl mx-auto mb-10">Deploy AI voice agents and transform your sales and support operations.</p>
          <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">Book Demo <ArrowRight size={18} /></Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default AiCallAutomation;
