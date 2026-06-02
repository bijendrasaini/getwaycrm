import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, BookOpen, Video, Users, Award, Smartphone, ClipboardList, Bot, CreditCard, BarChart3, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const features = [
  { icon: BookOpen, title: "Unlimited Courses" },
  { icon: Video, title: "Video Lessons" },
  { icon: Video, title: "Webinar Integration" },
  { icon: Users, title: "Community Groups" },
  { icon: Award, title: "Certificates" },
  { icon: Smartphone, title: "Mobile Learning" },
  { icon: ClipboardList, title: "Quiz & Assignments" },
  { icon: Bot, title: "AI Student Support" },
  { icon: CreditCard, title: "Payment Integration" },
  { icon: BarChart3, title: "Analytics Dashboard" },
];

const benefits = ["Sell Courses", "Build Communities", "Scale Coaching Business", "Generate Recurring Revenue"];

const Community = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Courses & Communities</span>
          <h1 className="heading-xl gradient-text-white mb-6">Community & LMS Platform</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-3xl mx-auto mb-10">
            Launch courses, host webinars, build private communities, automate student journeys, and grow recurring revenue from one unified platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">Book Demo <ArrowRight size={18} /></Link>
            <Link to="/founder" className="outline-button-hero px-8 py-3.5 rounded-xl font-semibold">Explore Leadership</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <SectionHeader badge="Features" title="Everything Needed to Teach, Scale & Retain" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.04}>
              <div className="glass-card-hover rounded-2xl p-6 h-full">
                <div className="feature-icon-box mb-4"><feature.icon size={22} className="text-teal-light" /></div>
                <h3 className="font-display font-semibold text-primary-foreground mb-2">{feature.title}</h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="gradient-section-alt section-padding">
      <div className="container-wide max-w-4xl mx-auto">
        <SectionHeader badge="Benefits" title="Designed for Coaches, Educators & Communities" />
        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit} delay={index * 0.05}>
              <div className="glass-card rounded-xl px-5 py-4 flex items-center gap-3">
                <CheckCircle2 size={18} className="text-teal shrink-0" />
                <span className="text-[hsl(200,20%,70%)] text-sm">{benefit}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Community;
