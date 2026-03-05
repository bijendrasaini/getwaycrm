import { Link } from "react-router-dom";
import { GraduationCap, Stethoscope, DollarSign, ShoppingCart, Building2, Briefcase, Calculator, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const industries = [
  { icon: GraduationCap, title: "Education", desc: "Automate student enrollment, parent communication, fee collection, and learning management for schools, colleges, and edtech platforms.", features: ["Student enrollment automation", "Parent-teacher communication", "Fee & payment management", "LMS integration"] },
  { icon: Stethoscope, title: "Healthcare", desc: "Streamline patient engagement, appointment scheduling, reminders, and compliance workflows for clinics, hospitals, and health networks.", features: ["Patient engagement", "Appointment scheduling", "Compliant messaging", "Health records integration"] },
  { icon: DollarSign, title: "Finance & Banking", desc: "Automate client onboarding, document management, KYC workflows, and regulatory communication for financial institutions.", features: ["Client onboarding", "KYC automation", "Document management", "Compliance workflows"] },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Drive sales with automated customer journeys, cart recovery, personalized marketing, and post-purchase engagement.", features: ["Cart recovery automation", "Personalized campaigns", "Order tracking", "Review automation"] },
  { icon: Building2, title: "Enterprise Services", desc: "End-to-end process automation for consulting firms, IT services, and professional service organizations.", features: ["Project management", "Client communication", "Resource planning", "Invoice automation"] },
  { icon: Calculator, title: "Chartered Accountants", desc: "Streamline client management, compliance tracking, document collection, and billing for accounting practices.", features: ["Client portal", "Document collection", "Compliance tracking", "Billing automation"] },
  { icon: Briefcase, title: "Coaches & Trainers", desc: "Build, market, and deliver courses with integrated client management, community tools, and payment processing.", features: ["Course creation & delivery", "Client management", "Community building", "Payment processing"] },
];

const Solutions = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Solutions</span>
          <h1 className="heading-xl gradient-text-white mb-6">Solutions for<br />Every Industry</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            Purpose-built automation workflows designed for the unique challenges of your industry.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.title} delay={i * 0.08}>
              <div className="glass-card-hover rounded-2xl p-8 h-full">
                <div className="feature-icon-box mb-5"><ind.icon size={24} className="text-teal-light" /></div>
                <h3 className="font-display font-semibold text-primary-foreground text-xl mb-3">{ind.title}</h3>
                <p className="text-[hsl(200,20%,50%)] text-sm leading-relaxed mb-5">{ind.desc}</p>
                <ul className="space-y-2">
                  {ind.features.map((f) => (
                    <li key={f} className="text-[hsl(200,20%,60%)] text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-12">
          <Link to="/contact" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
            Discuss Your Industry <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Solutions;
