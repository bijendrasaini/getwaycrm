import { Link } from "react-router-dom";
import {
  BarChart3, Users, MessageSquare, Phone, Bot, Headphones, Zap, TrendingUp,
  UserCheck, Globe, Database, Share2, Megaphone, Calendar, Video,
  GraduationCap, CreditCard, Smartphone, ArrowRight
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const features = [
  { icon: BarChart3, title: "Smart Dashboard", desc: "All leads, deals, and activities in one intelligent dashboard with AI-powered insights." },
  { icon: Users, title: "Unlimited Lead Management", desc: "Capture, score, and nurture unlimited leads with automated segmentation." },
  { icon: MessageSquare, title: "Omnichannel Marketing", desc: "SMS, RCS, WhatsApp, and Email campaigns from a single interface." },
  { icon: Phone, title: "Voice Broadcasting", desc: "Automated voice campaigns and broadcasting to reach thousands instantly." },
  { icon: Bot, title: "AI Voice Agent", desc: "Deploy AI-powered voice calling for sales, support, and collections." },
  { icon: Headphones, title: "IVR & Call Routing", desc: "Intelligent call routing with multi-level IVR and skill-based distribution." },
  { icon: Zap, title: "Auto Follow-ups", desc: "Never miss a lead with automated multi-channel follow-up sequences." },
  { icon: TrendingUp, title: "Sales Pipeline", desc: "Visual pipeline management with AI-powered deal scoring and forecasting." },
  { icon: UserCheck, title: "Performance Tracking", desc: "Real-time staff performance analytics with KPI tracking and leaderboards." },
  { icon: Globe, title: "Websites & Funnels", desc: "Build high-converting websites, landing pages, and sales funnels." },
  { icon: Database, title: "Cloud Vault", desc: "Secure cloud storage for documents, contracts, and business files." },
  { icon: Share2, title: "Social Automation", desc: "Schedule, publish, and analyze social media content across platforms." },
  { icon: Megaphone, title: "Ad Launcher", desc: "Create and optimize ad campaigns with AI-powered targeting and budgeting." },
  { icon: Calendar, title: "Appointment Booking", desc: "Automated scheduling with calendar sync, reminders, and no-show prevention." },
  { icon: Video, title: "Events & Webinars", desc: "Host, manage, and automate event marketing and webinar funnels." },
  { icon: GraduationCap, title: "LMS & Courses", desc: "Create and sell courses with built-in learning management tools." },
  { icon: CreditCard, title: "Payments & Billing", desc: "Integrated invoicing, payment processing, and subscription management." },
  { icon: Smartphone, title: "API & Mobile App", desc: "APIs and mobile access for managing your business on the go." },
];

const AiCrm = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero relative pb-20 pt-32">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide relative z-10 text-center">
        <AnimatedSection>
          <span className="mb-6 inline-block rounded-full border border-teal/20 bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-light">AI CRM Platform</span>
          <h1 className="heading-xl gradient-text-white mb-6">GETWAY AI CRM Platform</h1>
          <p className="mx-auto mb-8 max-w-2xl text-body-lg text-[hsl(200,20%,55%)]">
            Manage leads, automate communication, streamline workflows, and grow revenue from one unified AI-powered CRM system.
          </p>
          <Link to="/demo" className="glow-button inline-flex items-center gap-2 rounded-xl px-8 py-3.5 font-semibold text-primary-foreground">
            Book Demo <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <SectionHeader badge="Features" title="Everything You Need to Grow" description="Powerful modules working together as one business automation platform." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.04}>
              <div className="glass-card-hover h-full rounded-2xl p-6">
                <div className="feature-icon-box mb-4"><feature.icon size={22} className="text-teal-light" /></div>
                <h3 className="mb-2 font-display font-semibold text-primary-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-[hsl(200,20%,50%)]">{feature.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AiCrm;
