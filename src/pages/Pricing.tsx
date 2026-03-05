import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  {
    name: "Growth",
    desc: "For growing businesses ready to automate.",
    price: "Custom",
    features: ["AI CRM with lead management", "Email & SMS campaigns", "Workflow automation", "Appointment booking", "Basic analytics", "5 team members", "Email support"],
    cta: "Request Demo",
    highlight: false,
  },
  {
    name: "Professional",
    desc: "For scaling teams needing full-stack automation.",
    price: "Custom",
    features: ["Everything in Growth", "AI Voice Agents", "WhatsApp & RCS marketing", "Advanced pipeline automation", "Revenue intelligence", "Unlimited team members", "Priority support", "API access"],
    cta: "Request Demo",
    highlight: true,
  },
  {
    name: "Enterprise",
    desc: "For large organizations needing custom solutions.",
    price: "Custom",
    features: ["Everything in Professional", "White-label options", "Custom AI model training", "Dedicated infrastructure", "SLA guarantee (99.9%)", "Custom integrations", "Dedicated success manager", "On-premise deployment option"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Pricing</span>
          <h1 className="heading-xl gradient-text-white mb-6">Plans That Scale<br />With You</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            Flexible pricing designed for businesses of every size. Get a custom quote tailored to your needs.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <div className={`rounded-2xl p-8 h-full flex flex-col ${
                plan.highlight
                  ? "glass-card border-teal/40 shadow-[0_0_40px_hsl(187,100%,38%,0.12)]"
                  : "glass-card"
              }`}>
                {plan.highlight && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal/20 text-teal-light border border-teal/30 mb-4 self-start">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-bold text-primary-foreground text-2xl mb-2">{plan.name}</h3>
                <p className="text-[hsl(200,20%,50%)] text-sm mb-6">{plan.desc}</p>
                <div className="mb-6">
                  <span className="font-display font-bold text-primary-foreground text-3xl">{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="text-[hsl(200,20%,60%)] text-sm flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-xl font-semibold text-center text-sm inline-block ${
                    plan.highlight ? "glow-button text-primary-foreground" : "outline-button-hero"
                  }`}
                >
                  {plan.cta} <ArrowRight size={16} className="inline ml-1" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Pricing;
