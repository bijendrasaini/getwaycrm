import { Link } from "react-router-dom";
import { ArrowRight, Star, Building2, GraduationCap, ShoppingCart, Stethoscope } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  { name: "Rajesh Sharma", role: "CEO, EduTech Solutions", quote: "GETWAY transformed our student enrollment process. We went from 3 days to 3 hours for complete onboarding.", industry: "Education" },
  { name: "Sarah Chen", role: "VP Sales, CloudRetail", quote: "Our conversion rates jumped 47% in the first quarter after implementing GETWAY's AI CRM and voice agents.", industry: "E-Commerce" },
  { name: "Dr. Amit Patel", role: "Director, HealthFirst Network", quote: "Patient engagement improved dramatically. Automated appointment reminders reduced no-shows by 60%.", industry: "Healthcare" },
  { name: "Michael Torres", role: "COO, FinanceHub", quote: "The workflow automation alone saved us 200+ hours per month. GETWAY is the backbone of our operations.", industry: "Finance" },
  { name: "Priya Nair", role: "Founder, GrowthAcademy", quote: "From course creation to payment processing, GETWAY handles everything. It's like having an entire tech team.", industry: "Education" },
  { name: "James Wilson", role: "CTO, ScaleOps Inc.", quote: "Enterprise-grade reliability with startup-level agility. GETWAY's API-first approach made integration seamless.", industry: "Enterprise" },
];

const stats = [
  { value: "20,000+", label: "Businesses Trust GETWAY" },
  { value: "150+", label: "Global Partners" },
  { value: "47%", label: "Avg. Conversion Lift" },
  { value: "99.9%", label: "Platform Uptime" },
];

const industries = [
  { icon: GraduationCap, label: "Education", count: "550+" },
  { icon: ShoppingCart, label: "E-Commerce", count: "3,200+" },
  { icon: Stethoscope, label: "Healthcare", count: "1,800+" },
  { icon: Building2, label: "Enterprise", count: "5,000+" },
];

const Customers = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Customers</span>
          <h1 className="heading-xl gradient-text-white mb-6">Trusted by 20,000+<br />Businesses Worldwide</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            From startups to enterprise organizations, businesses trust GETWAY to power their growth.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark py-16 border-y border-[hsl(200,25%,10%)]">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
              <div className="stat-number gradient-text mb-2">{s.value}</div>
              <div className="text-[hsl(200,20%,50%)] text-sm font-medium">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="gradient-section-alt section-padding">
      <div className="container-wide">
        <SectionHeader badge="Industries" title="Customers Across Industries" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.label} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="feature-icon-box mx-auto mb-4"><ind.icon size={22} className="text-teal-light" /></div>
                <div className="font-display font-bold text-primary-foreground text-2xl mb-1">{ind.count}</div>
                <div className="text-[hsl(200,20%,50%)] text-sm">{ind.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <SectionHeader badge="Testimonials" title="What Our Customers Say" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <div className="glass-card-hover rounded-2xl p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-teal fill-teal" />)}
                </div>
                <p className="text-[hsl(200,20%,65%)] text-sm leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                <div>
                  <div className="text-primary-foreground text-sm font-semibold">{t.name}</div>
                  <div className="text-[hsl(200,20%,45%)] text-xs">{t.role}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="gradient-hero section-padding relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container-wide relative z-10 text-center">
        <AnimatedSection>
          <h2 className="heading-lg gradient-text-white mb-6">Join 20,000+ Growing Businesses</h2>
          <p className="text-[hsl(200,20%,50%)] text-body-lg max-w-xl mx-auto mb-10">See how GETWAY can transform your business operations.</p>
          <Link to="/contact" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
            Request Demo <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Customers;
