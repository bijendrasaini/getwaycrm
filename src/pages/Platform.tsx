import { Link } from "react-router-dom";
import { Phone, Bot, MessageSquare, Mail, Megaphone, Headphones, ArrowRight, Mic2, Radio } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const cpaasFeatures = [
  { icon: Bot, title: "AI Voice Agents", desc: "Automate inbound and outbound calls using intelligent AI voice agents for lead qualification, customer support, and appointment booking." },
  { icon: MessageSquare, title: "WhatsApp Business API", desc: "Engage customers directly on WhatsApp with automated notifications, campaigns, and CRM-integrated conversations." },
  { icon: Mail, title: "RCS Messaging", desc: "Send rich interactive messages with images, buttons, and branded communication experiences to improve engagement." },
  { icon: Megaphone, title: "Bulk SMS Service", desc: "Launch large-scale SMS campaigns, OTP alerts, and transactional messages with reliable enterprise delivery." },
  { icon: Radio, title: "Voice Broadcasting", desc: "Deliver automated voice campaigns for announcements, promotions, reminders, and alerts to thousands of customers instantly." },
  { icon: Headphones, title: "IVR Calling System & Smart Routing", desc: "Create intelligent IVR call flows that automatically route customer calls to the right department or agent." },
];

const Platform = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">CPaaS Platform</span>
          <h1 className="heading-xl gradient-text-white mb-6">CPaaS Automation<br />Platform</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-3xl mx-auto mb-10">
            GETWAY's CPaaS platform enables businesses to manage customer communication across SMS, WhatsApp, voice, and rich messaging channels from one intelligent dashboard. Fully integrated with GETWAY AI-CRM, it powers automated engagement, marketing communication, and customer support at scale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/ai-crm" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
              Explore Platform <ArrowRight size={18} />
            </Link>
            <Link to="/demo" className="outline-button-hero px-8 py-3.5 rounded-xl font-semibold">
              Book Demo
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <SectionHeader badge="Communication Infrastructure" title="Enterprise Communication Suite" description="GETWAY provides a CPaaS Automation Platform fully integrated with GETWAY AI-CRM, enabling businesses to automate communication, customer engagement, and sales interactions across multiple channels from a single platform." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cpaasFeatures.map((f, i) => (
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

    {/* CTA */}
    <section className="gradient-hero section-padding relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide relative z-10 text-center">
        <AnimatedSection>
          <h2 className="heading-lg gradient-text-white mb-6">Power Your Business Communication</h2>
          <p className="text-[hsl(200,20%,50%)] text-body-lg max-w-2xl mx-auto mb-10">
            Power your business communication with GETWAY CPaaS and AI-CRM automation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/ai-crm" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
              Explore Platform <ArrowRight size={18} />
            </Link>
            <Link to="/demo" className="outline-button-hero px-8 py-3.5 rounded-xl font-semibold">
              Book Demo
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Platform;
