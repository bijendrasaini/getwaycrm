import { Link } from "react-router-dom";
import {
  BarChart3, Users, MessageSquare, Phone, Bot, Headphones, Zap, TrendingUp,
  UserCheck, Globe, Database, Share2, Megaphone, Calendar, Video,
  GraduationCap, CreditCard, Smartphone, ArrowRight, CheckCircle2
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const features = [
  { icon: BarChart3, title: "Smart Dashboard", desc: "All leads, deals, and activities in one intelligent dashboard with AI-powered insights." },
  { icon: Users, title: "Unlimited Lead Management", desc: "Capture, score, and nurture unlimited leads with automated segmentation." },
  { icon: MessageSquare, title: "Omnichannel Marketing", desc: "SMS, RCS, WhatsApp, and Email campaigns from a single interface." },
  { icon: Phone, title: "Voice Broadcasting", desc: "Automated voice campaigns and broadcasting to reach thousands instantly." },
  { icon: Bot, title: "AI Voice Agents", desc: "Deploy AI-powered voice agents for sales calls, support, and collections." },
  { icon: Headphones, title: "IVR & Call Routing", desc: "Intelligent call routing with multi-level IVR and skill-based distribution." },
  { icon: Zap, title: "Auto Follow-ups", desc: "Never miss a lead with automated multi-channel follow-up sequences." },
  { icon: TrendingUp, title: "Sales Pipeline", desc: "Visual pipeline management with AI-powered deal scoring and forecasting." },
  { icon: UserCheck, title: "Performance Tracking", desc: "Real-time staff performance analytics with KPI tracking and leaderboards." },
  { icon: Globe, title: "AI Websites & Funnels", desc: "Build high-converting websites, landing pages, and sales funnels with AI." },
  { icon: Database, title: "Cloud Vault", desc: "Secure cloud storage for documents, contracts, and business files." },
  { icon: Share2, title: "Social Automation", desc: "Schedule, publish, and analyze social media content across platforms." },
  { icon: Megaphone, title: "AI Ad Launcher", desc: "Create and optimize ad campaigns with AI-powered targeting and budgeting." },
  { icon: Calendar, title: "Appointment Booking", desc: "Automated scheduling with calendar sync, reminders, and no-show prevention." },
  { icon: Video, title: "Events & Webinars", desc: "Host, manage, and automate event marketing and webinar funnels." },
  { icon: GraduationCap, title: "LMS & Courses", desc: "Create and sell courses with built-in learning management system." },
  { icon: CreditCard, title: "Payments & Billing", desc: "Integrated invoicing, payment processing, and subscription management." },
  { icon: Smartphone, title: "API & Mobile App", desc: "RESTful APIs and native mobile app for managing your business on the go." },
];

const benefits = [
  "Eliminate 10+ disconnected tools",
  "3X faster lead response time",
  "50% higher conversion rates",
  "70% reduction in manual work",
  "Predictable revenue growth",
  "360° customer visibility",
];

const AiCrm = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20">
      <div className="container-wide text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-electric/10 text-electric-glow border border-electric/20">Flagship Product</span>
          <h1 className="heading-xl gradient-text-white mb-6">GETWAY AI-Powered CRM</h1>
          <p className="text-[hsl(220,20%,60%)] text-body-lg max-w-2xl mx-auto mb-8">
            Your central growth operating system. Manage every customer interaction, automate every workflow, and scale revenue with AI.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {benefits.map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-electric/10 text-electric-glow border border-electric/20">
                <CheckCircle2 size={14} /> {b}
              </span>
            ))}
          </div>
          <Link to="/contact" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
            Request Demo <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <SectionHeader badge="Features" title="Everything You Need to Grow" description="18 powerful modules working together as your unified growth operating system." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.04}>
              <div className="glass-card-hover rounded-2xl p-6 h-full">
                <div className="feature-icon-box mb-4"><f.icon size={22} className="text-electric-glow" /></div>
                <h3 className="font-display font-semibold text-primary-foreground mb-2">{f.title}</h3>
                <p className="text-[hsl(220,20%,55%)] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AiCrm;
