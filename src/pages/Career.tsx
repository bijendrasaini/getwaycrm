import { Link } from "react-router-dom";
import { Rocket, Heart, Globe, Zap, Users, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const perks = [
  { icon: Rocket, title: "Build the Future", desc: "Work on cutting-edge AI and automation technology used by 20,000+ businesses." },
  { icon: Heart, title: "Culture First", desc: "We value ownership, transparency, and growth. Your ideas shape our product." },
  { icon: Globe, title: "Remote Friendly", desc: "Work from anywhere. Our team spans India, UAE, USA, and beyond." },
  { icon: Zap, title: "Move Fast", desc: "Ship quickly, learn constantly, and make a real impact from day one." },
];

const openings = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Remote / India" },
  { title: "AI/ML Engineer", team: "AI Platform", location: "Remote" },
  { title: "Product Designer", team: "Design", location: "Remote / India" },
  { title: "Enterprise Account Executive", team: "Sales", location: "USA / UAE" },
  { title: "DevOps Engineer", team: "Infrastructure", location: "Remote" },
  { title: "Customer Success Manager", team: "Customer Success", location: "India / UAE" },
];

const Career = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Careers</span>
          <h1 className="heading-xl gradient-text-white mb-6">Build the Future<br />of Automation</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            Join a passionate team building AI-powered infrastructure that transforms how businesses operate.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <SectionHeader badge="Why GETWAY" title="Why You'll Love Working Here" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {perks.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="glass-card-hover rounded-2xl p-6 h-full text-center">
                <div className="feature-icon-box mx-auto mb-4"><p.icon size={22} className="text-teal-light" /></div>
                <h3 className="font-display font-semibold text-primary-foreground mb-2">{p.title}</h3>
                <p className="text-[hsl(200,20%,50%)] text-sm">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <SectionHeader badge="Open Positions" title="Current Openings" description="We're growing fast and looking for exceptional talent to join our mission." />
        <div className="max-w-3xl mx-auto space-y-4">
          {openings.map((job, i) => (
            <AnimatedSection key={job.title} delay={i * 0.06}>
              <div className="glass-card-hover rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-semibold text-primary-foreground mb-1">{job.title}</h3>
                  <div className="text-[hsl(200,20%,50%)] text-sm">{job.team} · {job.location}</div>
                </div>
                <Link to="/contact" className="glow-button px-5 py-2 rounded-lg text-primary-foreground text-sm font-medium inline-flex items-center gap-1.5 shrink-0">
                  Apply <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Career;
