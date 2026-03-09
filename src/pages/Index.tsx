import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap, Users, TrendingUp, Shield, Bot, Phone, Mail, BarChart3,
  Workflow, Globe, MessageSquare, Calendar, ShoppingCart, Database,
  Headphones, GraduationCap, Building2, Stethoscope, DollarSign,
  Briefcase, UserCheck, Layers, Lock, Server, Code, Rocket,
  Target, PieChart, Megaphone, Video, CreditCard, Smartphone,
  Share2, Brain, Sparkles, ArrowRight, CheckCircle2, Star
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const stats = [
  { number: "20,000+", label: "Businesses Served" },
  { number: "150+", label: "White-Label Partners" },
  { number: "550+", label: "Institutions Powered" },
  { number: "20+", label: "Years of Innovation" },
];

const problems = [
  { icon: Layers, title: "Disconnected Tools", desc: "Juggling 10+ platforms that don't communicate, creating data silos and operational drag." },
  { icon: Target, title: "Missed Follow-ups", desc: "Leads slip through the cracks when there's no automated nurture system in place." },
  { icon: Workflow, title: "Manual Workflows", desc: "Hours wasted on repetitive tasks that intelligent automation can handle instantly." },
  { icon: Database, title: "Scattered Data", desc: "Customer data spread across tools, making a unified view impossible." },
];

const crmFeatures = [
  { icon: BarChart3, label: "Lead Management" },
  { icon: MessageSquare, label: "WhatsApp & SMS Automation" },
  { icon: Bot, label: "AI Voice Calling" },
  { icon: TrendingUp, label: "Sales Pipeline Automation" },
  { icon: Workflow, label: "Workflow Automation" },
  { icon: Megaphone, label: "Marketing Automation" },
  { icon: Globe, label: "Funnels & Websites" },
  { icon: GraduationCap, label: "LMS Platform" },
  { icon: CreditCard, label: "Payment & Billing" },
  { icon: Smartphone, label: "API Integrations" },
];

const platformPillars = [
  { icon: Brain, title: "AI CRM Engine", desc: "Intelligent customer relationship management with predictive analytics and automated workflows." },
  { icon: Phone, title: "CPaaS Infrastructure", desc: "Enterprise communication — SMS, RCS, WhatsApp, Voice, and Email through a unified API." },
  { icon: Bot, title: "AI Voice Agents", desc: "Conversational AI voice agents for sales, support, and collections at enterprise scale." },
  { icon: Workflow, title: "Workflow Automation", desc: "Visual workflow builder with conditional logic, triggers, and multi-step automations." },
  { icon: Megaphone, title: "Marketing Automation", desc: "Omnichannel campaign orchestration with AI-powered segmentation and personalization." },
  { icon: PieChart, title: "Revenue Intelligence", desc: "AI-powered analytics with pipeline forecasting, attribution, and performance insights." },
  { icon: Server, title: "Cloud Infrastructure", desc: "Enterprise-grade cloud with 99.9% uptime, global CDN, and auto-scaling." },
];

const industries = [
  { icon: GraduationCap, title: "Education", desc: "Enrollment, communication, and learning management automation." },
  { icon: Stethoscope, title: "Healthcare", desc: "Patient engagement, scheduling, and compliance workflows." },
  { icon: DollarSign, title: "Finance", desc: "Client onboarding, KYC, and regulatory communications." },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Customer journeys, cart recovery, and campaign automation." },
  { icon: Building2, title: "Enterprise", desc: "End-to-end business process automation at scale." },
  { icon: Briefcase, title: "Coaches & Trainers", desc: "Course delivery, client management, and community tools." },
];

const impacts = [
  { value: "3X", label: "Faster Lead Response" },
  { value: "50%", label: "Higher Conversion" },
  { value: "70%", label: "Less Manual Work" },
  { value: "2X", label: "Customer Retention" },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="gradient-hero min-h-screen flex items-center pt-20 relative">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="gradient-orb gradient-orb-teal w-[500px] h-[500px] absolute top-1/4 left-1/4" />
          <div className="gradient-orb gradient-orb-cyan w-[400px] h-[400px] absolute bottom-1/4 right-1/4" style={{ animationDelay: "3s" }} />
        </div>
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-8 bg-teal/10 text-teal-light border border-teal/20">
                AI-Powered Business Automation Platform
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl mb-6"
            >
              <span className="gradient-text-white">Run Your Business on</span>
              <br />
              <span className="gradient-text">Intelligent Autopilot</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[hsl(200,20%,55%)] text-lg md:text-xl mb-4 max-w-2xl mx-auto"
            >
              AI CRM • CPaaS • IVR • RCS • AI Voice Agents • WhatsApp API • Workflow Automation
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-[hsl(200,20%,45%)] text-base md:text-lg mb-10 max-w-xl mx-auto"
            >
              One unified platform to acquire, engage, convert, and retain customers at scale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold text-base inline-flex items-center gap-2">
                Book Demo <ArrowRight size={18} />
              </Link>
              <Link to="/platform" className="outline-button-hero px-8 py-3.5 rounded-xl font-semibold text-base">
                Explore Platform
              </Link>
              <Link to="/partners" className="outline-button-hero px-8 py-3.5 rounded-xl font-semibold text-base">
                Become a Partner
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="gradient-section-dark py-16 border-y border-[hsl(200,25%,10%)]">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
                <div className="stat-number gradient-text mb-2">{s.number}</div>
                <div className="text-[hsl(200,20%,50%)] text-sm font-medium">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="gradient-section-alt section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="The Problem"
            title="Your Growth Stack is Broken"
            description="Most businesses run on disconnected tools that create friction, waste time, and lose revenue."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="glass-card-hover rounded-2xl p-6 h-full">
                  <div className="feature-icon-box mb-4"><p.icon size={22} className="text-teal-light" /></div>
                  <h3 className="font-display font-semibold text-primary-foreground mb-2">{p.title}</h3>
                  <p className="text-[hsl(200,20%,50%)] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship CRM */}
      <section className="gradient-section-dark section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="Flagship Product"
            title="GETWAY AI-Powered CRM"
            description="Your central growth operating system. Manage leads, automate outreach, close deals, and scale revenue — all powered by AI."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {crmFeatures.map((f, i) => (
              <AnimatedSection key={f.label} delay={i * 0.04}>
                <div className="glass-card-hover rounded-2xl p-6 h-full text-center flex flex-col items-center gap-4">
                  <div className="feature-icon-box">
                    <f.icon size={22} className="text-teal-light" />
                  </div>
                  <span className="text-[hsl(200,20%,70%)] text-sm font-medium leading-tight">{f.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Link to="/ai-crm" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
              Explore AI CRM <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Platform Infrastructure */}
      <section className="gradient-section-alt section-padding">
        <div className="container-wide">
          <SectionHeader
            badge="Platform"
            title="One Platform. Total Intelligence."
            description="GETWAY unifies CRM, communication, AI automation, and analytics into a single intelligent platform."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformPillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div className="glass-card-hover rounded-2xl p-8 h-full">
                  <div className="feature-icon-box mb-5"><p.icon size={24} className="text-teal-light" /></div>
                  <h3 className="font-display font-semibold text-primary-foreground text-lg mb-3">{p.title}</h3>
                  <p className="text-[hsl(200,20%,50%)] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="gradient-section-dark section-padding">
        <div className="container-wide">
          <SectionHeader badge="Industries" title="Built for Every Industry" description="Purpose-built automation for the industries that need it most." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.title} delay={i * 0.08}>
                <div className="glass-card-hover rounded-2xl p-8 h-full">
                  <div className="feature-icon-box mb-5"><ind.icon size={24} className="text-teal-light" /></div>
                  <h3 className="font-display font-semibold text-primary-foreground text-lg mb-2">{ind.title}</h3>
                  <p className="text-[hsl(200,20%,50%)] text-sm leading-relaxed">{ind.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="gradient-section-alt section-padding">
        <div className="container-wide">
          <SectionHeader badge="Impact" title="Measurable Business Impact" description="GETWAY customers see transformative results across their entire revenue operation." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((imp, i) => (
              <AnimatedSection key={imp.label} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="stat-number gradient-text mb-3">{imp.value}</div>
                  <div className="text-[hsl(200,20%,55%)] text-sm font-medium">{imp.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="gradient-section-dark section-padding">
        <div className="container-wide">
          <SectionHeader badge="Security" title="Enterprise-Grade Security" description="Your data is protected by industry-leading security standards and infrastructure." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Secure Cloud", desc: "Enterprise-grade cloud infrastructure with compliance standards." },
              { icon: Lock, title: "Data Encryption", desc: "End-to-end encryption for data at rest and in transit." },
              { icon: UserCheck, title: "Role-Based Access", desc: "Granular permissions and role-based access control." },
              { icon: Server, title: "High Availability", desc: "99.9% uptime SLA with global redundancy and failover." },
            ].map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="glass-card-hover rounded-2xl p-6 h-full text-center">
                  <div className="feature-icon-box mx-auto mb-4"><s.icon size={22} className="text-teal-light" /></div>
                  <h3 className="font-display font-semibold text-primary-foreground mb-2">{s.title}</h3>
                  <p className="text-[hsl(200,20%,50%)] text-sm">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-hero section-padding relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="gradient-orb gradient-orb-teal w-[500px] h-[500px] absolute top-1/3 right-1/4" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <h2 className="heading-lg gradient-text-white mb-6">Build Your Intelligent<br />Growth Infrastructure</h2>
            <p className="text-[hsl(200,20%,50%)] text-body-lg max-w-2xl mx-auto mb-10">
              Join 20,000+ businesses running on GETWAY's AI-powered automation platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
                Request Demo <ArrowRight size={18} />
              </Link>
              <Link to="/partners" className="outline-button-hero px-8 py-3.5 rounded-xl font-semibold">
                Become a Partner
              </Link>
              <Link to="/contact" className="outline-button-hero px-8 py-3.5 rounded-xl font-semibold">
                Contact Sales
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
