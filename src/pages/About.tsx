import { Rocket, Globe, Shield, Users, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import FounderSection from "@/components/FounderSection";

const values = [
  { icon: Rocket, title: "Innovation", desc: "Pushing the boundaries of AI and automation technology." },
  { icon: Globe, title: "Scalability", desc: "Building infrastructure that grows with our customers." },
  { icon: Shield, title: "Reliability", desc: "Enterprise-grade uptime and security standards." },
  { icon: Users, title: "Partner Growth", desc: "Success through ecosystem-driven collaboration." },
  { icon: TrendingUp, title: "Data-Driven", desc: "Every decision backed by intelligent analytics." },
];

const About = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">About GETWAY</span>
          <h1 className="heading-xl gradient-text-white mb-6">Powering Intelligent<br />Business Automation</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            GETWAY builds the infrastructure that powers intelligent business automation for enterprises worldwide.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Our Story</span>
            <h2 className="heading-md gradient-text-white mb-6">Building the Future of Business Automation</h2>
            <div className="space-y-4 text-[hsl(200,20%,55%)] text-sm leading-relaxed">
              <p>GETWAY was founded with a clear mission: to simplify how businesses communicate with and serve their customers. What began as a communication infrastructure company has evolved into a comprehensive AI-powered business automation platform.</p>
              <p>Today, GETWAY serves businesses across industries, powering educational institutions and supporting white-label partners worldwide. Our platform integrates CRM, CPaaS, AI voice systems, workflow automation, and revenue intelligence into one unified solution.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="gradient-section-alt section-padding">
      <div className="container-wide">
        <SectionHeader badge="Values" title="What Drives Us" />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.08}>
              <div className="glass-card-hover rounded-2xl p-6 h-full text-center">
                <div className="feature-icon-box mx-auto mb-4"><v.icon size={22} className="text-teal-light" /></div>
                <h3 className="font-display font-semibold text-primary-foreground text-sm mb-2">{v.title}</h3>
                <p className="text-[hsl(200,20%,50%)] text-xs leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide text-center">
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-12 max-w-3xl mx-auto">
            <h2 className="heading-md gradient-text mb-4">Our Vision</h2>
            <p className="text-[hsl(200,20%,60%)] text-lg mb-8">Build global AI automation infrastructure that empowers every business to operate intelligently.</p>
            <h2 className="heading-md gradient-text mb-4">Our Mission</h2>
            <p className="text-[hsl(200,20%,60%)] text-lg">Simplify business operations through intelligent automation, enabling growth at any scale.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
    <FounderSection />
  </div>
);

export default About;
