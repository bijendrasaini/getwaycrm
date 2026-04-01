import { Link } from "react-router-dom";
import { Radio, ArrowRight, CheckCircle2, Users, Zap, BarChart3, Phone, Megaphone, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const features = [
  { icon: Radio, title: "Mass Voice Campaigns", desc: "Deliver pre-recorded voice messages to thousands of contacts simultaneously for promotions, reminders, and announcements." },
  { icon: Phone, title: "AI Voice Agents", desc: "Use AI-powered voice agents that can have natural conversations, qualify leads, and book appointments automatically." },
  { icon: Users, title: "Targeted Audience Lists", desc: "Segment your contacts and send targeted voice campaigns based on CRM data, location, industry, or custom tags." },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Track call completion rates, duration, responses, and campaign ROI with detailed real-time dashboards." },
  { icon: Zap, title: "CRM Integration", desc: "Every voice interaction is logged in GETWAY CRM with call recordings, transcripts, and automated follow-up triggers." },
  { icon: Clock, title: "Scheduled Campaigns", desc: "Schedule voice broadcasts at optimal times for maximum reach. Set time-zone-aware delivery for nationwide campaigns." },
];

const useCases = [
  "Promotional announcements", "Payment & EMI reminders", "Event invitations & RSVP",
  "Survey & feedback collection", "Appointment confirmations", "Emergency notifications",
  "Political campaign outreach", "Service renewal reminders",
];

const VoiceBroadcasting = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Voice Broadcasting</span>
          <h1 className="heading-xl gradient-text-white mb-6">Voice Broadcasting<br />& AI Calling</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto mb-10">
            Reach thousands of customers instantly with automated voice broadcasts, AI calling agents, and intelligent IVR systems.
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
        <SectionHeader badge="Features" title="Voice Broadcasting Features" description="Enterprise-grade voice broadcasting with AI-powered calling automation." />
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
        <SectionHeader badge="Use Cases" title="Voice Broadcasting Use Cases" />
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
          <h2 className="heading-lg gradient-text-white mb-6">Start Voice Broadcasting Today</h2>
          <p className="text-[hsl(200,20%,50%)] text-body-lg max-w-2xl mx-auto mb-10">Launch AI-powered voice campaigns with GETWAY's enterprise calling infrastructure.</p>
          <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">Book Demo <ArrowRight size={18} /></Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default VoiceBroadcasting;
