import { Link } from "react-router-dom";
import { Building2, Globe, Briefcase, Users, GraduationCap, Cpu, Rocket, Download, ArrowRight, CheckCircle2, Brain, Phone, Bot, Megaphone, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const ecosystem = [
  { number: "150+", label: "Trusted White-Label Technology Partners" },
  { number: "550+", label: "Schools Powered by ERP & Automation" },
  { number: "20,000+", label: "Business Clients Served" },
  { number: "20+", label: "Years of Digital Innovation" },
];

const coreSolutions = [
  { icon: Brain, title: "AI-Powered CRM", desc: "Lead management, sales pipeline, automation, reporting, and team productivity monitoring." },
  { icon: Phone, title: "CPaaS Platform", desc: "Bulk SMS, RCS Messaging, WhatsApp API, Voice Broadcasting, and unified multi-channel dashboard." },
  { icon: Bot, title: "AI Voice Agents & Chatbots", desc: "Automated sales conversations, 24/7 customer engagement, AI-based lead qualification." },
  { icon: Globe, title: "AI Websites & Sales Funnels", desc: "High-conversion landing pages, funnel automation, CRM-integrated smart forms, payment gateways." },
  { icon: GraduationCap, title: "LMS & School ERP", desc: "Online course management, student lifecycle, fee & attendance management, academic planning." },
  { icon: Megaphone, title: "Marketing Automation", desc: "Campaign tracking, social media management, ad launcher, and omnichannel engagement." },
];

const partnerIdeal = [
  "Digital Marketing Agencies",
  "Business Consultants",
  "IT & Software Companies",
  "SaaS Entrepreneurs",
  "Telecom & CPaaS Providers",
  "Educational Institutions",
  "Growth-Focused Enterprises",
];

const Profile = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Corporate Profile</span>
          <h1 className="heading-xl gradient-text-white mb-6">GETWAY Technology</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-3xl mx-auto mb-8">
            AI-Powered Business Automation Platform — Expanding Multi-Industry Digital Infrastructure
          </p>
          <a href="/downloads/getway-corporate-profile.pdf" download className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
            <Download size={18} /> Download Corporate Profile
          </a>
        </AnimatedSection>
      </div>
    </section>

    {/* About */}
    <section className="gradient-section-dark section-padding">
      <div className="container-wide max-w-4xl mx-auto">
        <SectionHeader badge="About" title="About GETWAY Technology" />
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-5 text-[hsl(200,20%,55%)] text-sm leading-relaxed">
            <p>GETWAY is a next-generation IT & Digital Technology company powering organizations through a unified AI-Powered Business Automation Platform.</p>
            <p>We deliver intelligent Business Automation and Digital Communication Infrastructure designed to help modern enterprises scale faster, operate smarter, and engage customers more effectively.</p>
            <p>Founded in 2006, GETWAY brings over 20+ years of excellence in digital innovation, earning a strong reputation for reliability, scalability, and performance-driven systems across industries.</p>
            <p className="text-teal-light font-medium text-base italic">We don't just build software. We build long-term digital growth infrastructure.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Ecosystem */}
    <section className="gradient-section-alt section-padding">
      <div className="container-wide">
        <SectionHeader badge="Ecosystem" title="The GETWAY Ecosystem" description="A partner-driven ecosystem engineered for sustainable digital transformation." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ecosystem.map((e, i) => (
            <AnimatedSection key={e.label} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="stat-number gradient-text mb-2">{e.number}</div>
                <div className="text-[hsl(200,20%,50%)] text-sm">{e.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="gradient-section-dark section-padding">
      <div className="container-wide max-w-4xl mx-auto">
        <SectionHeader badge="Our Mission" title="What We Do" />
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <p className="text-[hsl(200,20%,55%)] text-sm leading-relaxed mb-6">
              Modern organizations face fragmented tools, disconnected communication channels, and manual workflows that limit growth. GETWAY eliminates complexity by integrating sales automation, marketing automation, digital communication platforms, AI-driven engagement engines, and operational workflow systems.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Intelligent End-to-End Automation", "Seamless Multi-Channel Communication", "Centralized Business Control", "Scalable Growth Infrastructure"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[hsl(200,20%,65%)] text-sm">
                  <CheckCircle2 size={16} className="text-teal shrink-0" /> {item}
                </div>
              ))}
            </div>
            <p className="text-teal-light font-medium text-sm mt-6 italic">We simplify complexity. We unify communication. We power scalable digital growth.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Core Solutions */}
    <section className="gradient-section-alt section-padding">
      <div className="container-wide">
        <SectionHeader badge="Solutions" title="Our Core Solutions" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSolutions.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="glass-card-hover rounded-2xl p-8 h-full">
                <div className="feature-icon-box mb-5"><s.icon size={24} className="text-teal-light" /></div>
                <h3 className="font-display font-semibold text-primary-foreground text-lg mb-3">{s.title}</h3>
                <p className="text-[hsl(200,20%,50%)] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Training Programs */}
    <section className="gradient-section-dark section-padding">
      <div className="container-wide max-w-4xl mx-auto">
        <SectionHeader badge="Training" title="Training & Business Growth Programs" description="GETWAY goes beyond technology by empowering leaders and organizations with structured growth frameworks." />
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <ul className="space-y-3">
              {["Manifestation Workshops & Mentorship Programs", "Corporate Training & Strategic Growth Programs", "Business Scaling & Revenue Acceleration Strategies", "Sales & Automation Implementation Training", "Entrepreneur & Leadership Development"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[hsl(200,20%,65%)] text-sm">
                  <CheckCircle2 size={16} className="text-teal shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-teal-light font-medium text-sm mt-6 italic">We combine mindset, strategy, and technology to drive transformational business success.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Partner Ecosystem */}
    <section className="gradient-section-alt section-padding">
      <div className="container-wide max-w-4xl mx-auto">
        <SectionHeader badge="Partners" title="Channel Partner Ecosystem" description="GETWAY operates through a rapidly expanding partner-driven distribution model." />
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h3 className="font-display font-semibold text-primary-foreground mb-4">Ideal For</h3>
            <ul className="space-y-2 mb-6">
              {partnerIdeal.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[hsl(200,20%,65%)] text-sm">
                  <CheckCircle2 size={16} className="text-teal shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-teal-light font-medium text-sm italic">If you serve businesses — GETWAY powers your backend.</p>
            <div className="mt-6">
              <Link to="/partners" className="glow-button px-6 py-3 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2 text-sm">
                Become a Partner <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Leadership */}
    <section className="gradient-section-dark section-padding">
      <div className="container-wide max-w-3xl mx-auto text-center">
        <SectionHeader badge="Leadership" title="Leadership" />
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h3 className="font-display font-bold text-primary-foreground text-xl mb-1">Bijendra Saini</h3>
            <p className="text-teal-light text-sm font-medium mb-4">CEO, GETWAY Technology</p>
            <p className="text-[hsl(200,20%,50%)] text-sm mb-2">Manifestation Mentor & Business Growth Trainer</p>
            <div className="flex flex-col items-center gap-1 text-[hsl(200,20%,55%)] text-sm mt-4">
              <span>📞 9255522544</span>
              <span>📧 ceo@getwaygroup.com</span>
              <span>🌐 www.getwaygroup.com</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Profile;
