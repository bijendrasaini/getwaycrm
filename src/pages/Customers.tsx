import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  { name: "Rajesh Sharma", role: "CEO, EduTech Solutions", quote: "GETWAY transformed our student enrollment process. We went from 3 days to 3 hours for complete onboarding." },
  { name: "Sarah Chen", role: "VP Sales, CloudRetail", quote: "Our conversion rates jumped 47% in the first quarter after implementing GETWAY's AI CRM and voice agents." },
  { name: "Dr. Amit Patel", role: "Director, HealthFirst Network", quote: "Patient engagement improved dramatically. Automated appointment reminders reduced no-shows by 60%." },
  { name: "Michael Torres", role: "COO, FinanceHub", quote: "The workflow automation alone saved us 200+ hours per month. GETWAY is the backbone of our operations." },
  { name: "Priya Nair", role: "Founder, GrowthAcademy", quote: "From course creation to payment processing, GETWAY handles everything. It's like having an entire tech team." },
  { name: "James Wilson", role: "CTO, ScaleOps Inc.", quote: "Enterprise-grade reliability with startup-level agility. GETWAY's API-first approach made integration seamless." },
];

const Customers = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Customers</span>
          <h1 className="heading-xl gradient-text-white mb-6">Trusted by Businesses<br />Worldwide</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            From startups to enterprise organizations, businesses trust GETWAY to power their growth.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-alt section-padding">
      <div className="container-wide">
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
          <h2 className="heading-lg gradient-text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-[hsl(200,20%,50%)] text-body-lg max-w-xl mx-auto mb-10">See how GETWAY can automate and scale your operations.</p>
          <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
            Book Demo <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Customers;
