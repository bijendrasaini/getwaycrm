import { Link } from "react-router-dom";
import { Users, Share2, Building2, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const partnerTypes = [
  { icon: Users, title: "Channel Partners", desc: "Resell GETWAY solutions to your existing customer base with full sales and marketing support.", benefits: ["Competitive margins", "Sales enablement", "Co-marketing support", "Dedicated partner manager"] },
  { icon: Share2, title: "Referral & Affiliate Partners", desc: "Earn recurring commissions by referring businesses to the GETWAY platform.", benefits: ["Recurring commissions", "Tracking dashboard", "Marketing materials", "No minimum commitment"] },
  { icon: Building2, title: "White-Label Partners", desc: "Launch your own branded AI automation platform powered by GETWAY's infrastructure.", benefits: ["Full white-labeling", "Custom branding", "Your own pricing", "Technical support"] },
  { icon: Briefcase, title: "Implementation Partners", desc: "Help businesses implement and optimize GETWAY across specific industries and use cases.", benefits: ["Certified training", "Lead sharing", "Implementation tools", "Priority support"] },
];

const Partners = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Partner Network</span>
          <h1 className="heading-xl gradient-text-white mb-6">Grow Together<br />with GETWAY</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto mb-10">
            Join 150+ partners worldwide building businesses on GETWAY's AI automation infrastructure.
          </p>
          <Link to="/contact" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
            Become a Partner <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <SectionHeader badge="Partner Programs" title="Choose Your Path" description="Multiple partnership models designed to fit your business and growth goals." />
        <div className="grid md:grid-cols-2 gap-8">
          {partnerTypes.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="glass-card-hover rounded-2xl p-8 h-full">
                <div className="feature-icon-box mb-5"><p.icon size={24} className="text-teal-light" /></div>
                <h3 className="font-display font-semibold text-primary-foreground text-xl mb-3">{p.title}</h3>
                <p className="text-[hsl(200,20%,50%)] text-sm leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2">
                  {p.benefits.map((b) => (
                    <li key={b} className="text-[hsl(200,20%,60%)] text-sm flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-teal shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Partners;
