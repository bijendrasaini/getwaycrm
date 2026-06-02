import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Repeat, Bot, MessageSquare, Phone, Radio, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import PromoBannerCard from "@/components/PromoBannerCard";
import channelPartnerBanner from "@/assets/getway-channel-partner-banner.png.asset.json";

const benefits = [
  { icon: Repeat, title: "White-Label Opportunity" },
  { icon: BarChart3, title: "Recurring Income Model" },
  { icon: Bot, title: "AI CRM Business" },
  { icon: Phone, title: "AI Voice Agent Solutions" },
  { icon: MessageSquare, title: "WhatsApp Automation" },
  { icon: Radio, title: "CPaaS Platform" },
  { icon: ArrowRight, title: "Sales & Marketing Support" },
];

const ChannelPartner = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Partner Growth</span>
          <h1 className="heading-xl gradient-text-white mb-6">GETWAY AI Channel Partner Program</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-3xl mx-auto mb-10">
            Build a recurring AI software business with white-label solutions, enterprise support, and high-demand automation products.
          </p>
          <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">Book Demo <ArrowRight size={18} /></Link>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark py-12">
      <div className="container-wide max-w-5xl mx-auto">
        <PromoBannerCard src={channelPartnerBanner.url} alt="GETWAY AI channel partner program banner" />
      </div>
    </section>

    <section className="gradient-section-alt section-padding">
      <div className="container-wide">
        <SectionHeader badge="Benefits" title="Partner With High-Demand AI Solutions" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={index * 0.05}>
              <div className="glass-card-hover rounded-2xl p-6 h-full">
                <div className="feature-icon-box mb-4"><benefit.icon size={22} className="text-teal-light" /></div>
                <h3 className="font-display font-semibold text-primary-foreground mb-2">{benefit.title}</h3>
                <p className="text-[hsl(200,20%,55%)] text-sm leading-relaxed">Scale faster with GETWAY’s AI ecosystem and partner-first support infrastructure.</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-10">
          <Link to="/partners" className="outline-button-hero px-8 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2">
            Apply for Partnership <CheckCircle2 size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default ChannelPartner;
