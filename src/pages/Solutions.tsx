import { Link } from "react-router-dom";
import { GraduationCap, Stethoscope, DollarSign, ShoppingCart, Building2, Briefcase, Calculator, ArrowRight, Home, Car, Heart, Shield, BookOpen, Dumbbell, UtensilsCrossed, Plane, Scale, Monitor, Landmark, Factory, Gem, Truck, Palette, Scissors, Leaf, Sun, Users } from "lucide-react";
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

const industryTags = [
  { icon: Home, label: "Real Estate" },
  { icon: Car, label: "Automobile" },
  { icon: Heart, label: "Healthcare" },
  { icon: Shield, label: "Insurance" },
  { icon: BookOpen, label: "Education" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: Dumbbell, label: "Gym & Fitness" },
  { icon: UtensilsCrossed, label: "Restaurant" },
  { icon: Plane, label: "Travel" },
  { icon: Scale, label: "Legal" },
  { icon: Monitor, label: "IT / SaaS" },
  { icon: Landmark, label: "Banking" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Gem, label: "Jewelry" },
  { icon: Truck, label: "Logistics" },
  { icon: Palette, label: "Interior Design" },
  { icon: Scissors, label: "Beauty & Salon" },
  { icon: Leaf, label: "Agriculture" },
  { icon: Sun, label: "Solar Energy" },
  { icon: Users, label: "Staffing" },
];

const Solutions = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Industries</span>
          <h1 className="heading-xl gradient-text-white mb-6">AI Voice Agents & CRM<br />for Every Industry</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            Pre-configured AI calling bots and CRM templates with industry-specific deal stages, lead sources, and sales automation for Indian businesses.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Solutions Image */}
    <section className="gradient-section-dark py-12">
      <div className="container-wide">
        <AnimatedSection>
          <div className="rounded-2xl overflow-hidden border border-[hsl(200,25%,14%)] shadow-2xl max-w-5xl mx-auto">
            <img
              src="/images/SolutionsforIndustries.jpg"
              alt="AI Voice Agents & CRM for Every Industry"
              className="w-full h-auto"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Industry Tags Grid */}
    <section className="gradient-section-alt section-padding">
      <div className="container-wide max-w-4xl mx-auto">
        <SectionHeader badge="Industries" title="Solutions for Every Industry" description="AI Voice Agents & CRM solutions tailored for every industry to automate communication, sales, and growth." />
        <div className="flex flex-wrap justify-center gap-3">
          {industryTags.map((tag, i) => (
            <AnimatedSection key={tag.label} delay={i * 0.03}>
              <div className="glass-card-hover rounded-xl px-5 py-3 flex items-center gap-2.5 text-sm">
                <tag.icon size={16} className="text-teal-light" />
                <span className="text-[hsl(200,20%,70%)] font-medium">{tag.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Detailed Industries */}
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
          <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
            Book Demo <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Solutions;
