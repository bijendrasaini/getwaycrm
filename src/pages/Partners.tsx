import { useState } from "react";
import { Users, Share2, Building2, Briefcase, CheckCircle2, Send, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { useToast } from "@/hooks/use-toast";

const partnerTypes = [
  { icon: Users, title: "Channel Partners", desc: "Resell GETWAY solutions to your existing customer base with full sales and marketing support.", benefits: ["Competitive margins", "Sales enablement", "Co-marketing support", "Dedicated partner manager"] },
  { icon: Share2, title: "Referral & Affiliate Partners", desc: "Earn recurring commissions by referring businesses to the GETWAY platform.", benefits: ["Recurring commissions", "Tracking dashboard", "Marketing materials", "No minimum commitment"] },
  { icon: Building2, title: "White-Label Partners", desc: "Launch your own branded AI automation platform powered by GETWAY's infrastructure.", benefits: ["Full white-labeling", "Custom branding", "Your own pricing", "Technical support"] },
  { icon: Briefcase, title: "Implementation Partners", desc: "Help businesses implement and optimize GETWAY across specific industries and use cases.", benefits: ["Certified training", "Lead sharing", "Implementation tools", "Priority support"] },
];

const businessProfiles = [
  "Business Owner",
  "IT Company",
  "Digital Marketing Agency",
  "Consultant / Freelancer",
  "Startup Founder",
  "Other",
];

const interestAreas = [
  "Channel Partner Program",
  "White-Label Reseller Program",
  "Affiliate & Referral Program",
  "GETWAY AI CRM Demo",
  "CPaaS Communication Platform",
];

const Partners = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    mobile: "",
    email: "",
    city: "",
    businessProfile: "",
    interestArea: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Application submitted!", description: "Our team will contact you shortly." });
  };

  return (
    <div className="overflow-hidden">
      <section className="gradient-hero pt-32 pb-20 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-wide text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Partner Network</span>
            <h1 className="heading-xl gradient-text-white mb-6">Grow Together<br />with GETWAY</h1>
            <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
              Join 150+ partners worldwide building businesses on GETWAY's AI automation infrastructure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partner Types */}
      <section className="gradient-section-dark section-padding">
        <div className="container-wide">
          <SectionHeader badge="Partner Programs" title="Choose Your Path" description="Multiple partnership models designed to fit your business and growth goals." />
          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="glass-card-hover rounded-2xl p-8 h-full">
                  <div className="feature-icon-box mb-5"><p.icon size={24} className="text-teal-light" /></div>
                  <h3 className="font-display font-semibold text-primary-foreground text-xl mb-3">{p.title}</h3>
                  <p className="text-[hsl(200,20%,50%)] text-sm leading-relaxed mb-5">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.benefits.map((b) => (
                      <li key={b} className="text-[hsl(200,20%,60%)] text-sm flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-teal shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section className="gradient-section-alt section-padding">
        <div className="container-wide max-w-2xl mx-auto">
          <SectionHeader
            badge="Apply Now"
            title="GETWAY AI CRM Partner Program"
            description="Build Your Own SaaS Business with GETWAY"
          />
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} className="text-teal-light" />
                </div>
                <h2 className="heading-md gradient-text-white mb-3">Thank You!</h2>
                <p className="text-[hsl(200,20%,55%)] text-sm mb-8">
                  Thank you for applying to the GETWAY Partner Program. Our team will contact you soon.
                </p>
                <a
                  href="https://wa.me/919355522544?text=Hello%20GETWAY%20Team,%20I%20am%20interested%20in%20GETWAY%20Partner%20Program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2 text-base"
                  style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                >
                  <MessageCircle size={20} /> Connect on WhatsApp
                </a>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8 md:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name *" value={form.fullName} onChange={(v) => setForm({ ...form, fullName: v })} required />
                  <Field label="Company Name" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                  <Field label="Mobile Number *" value={form.mobile} onChange={(v) => setForm({ ...form, mobile: v })} type="tel" required />
                  <Field label="Email Address *" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" required />
                  <Field label="City / Location" value={form.city} onChange={(v) => setForm({ ...form, city: v })} />
                </div>

                {/* Business Profile */}
                <div>
                  <label className="text-[hsl(200,20%,60%)] text-sm font-medium mb-2 block">Business Profile *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {businessProfiles.map((bp) => (
                      <button
                        key={bp}
                        type="button"
                        onClick={() => setForm({ ...form, businessProfile: bp })}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors ${
                          form.businessProfile === bp
                            ? "bg-teal/20 border-teal/50 text-teal-light"
                            : "bg-[hsl(200,30%,8%)] border-[hsl(200,25%,16%)] text-[hsl(200,20%,55%)] hover:border-teal/30"
                        }`}
                      >
                        {bp}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interest Area */}
                <div>
                  <label className="text-[hsl(200,20%,60%)] text-sm font-medium mb-2 block">Interest Area *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {interestAreas.map((ia) => (
                      <button
                        key={ia}
                        type="button"
                        onClick={() => setForm({ ...form, interestArea: ia })}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors text-left ${
                          form.interestArea === ia
                            ? "bg-teal/20 border-teal/50 text-teal-light"
                            : "bg-[hsl(200,30%,8%)] border-[hsl(200,25%,16%)] text-[hsl(200,20%,55%)] hover:border-teal/30"
                        }`}
                      >
                        {ia}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[hsl(200,20%,60%)] text-sm font-medium mb-1.5 block">Notes / Comments</label>
                  <textarea
                    rows={4}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[hsl(200,30%,8%)] border border-[hsl(200,25%,16%)] text-primary-foreground text-sm focus:outline-none focus:border-teal/50 transition-colors placeholder:text-[hsl(200,20%,30%)] resize-none"
                    placeholder="Tell us about your business..."
                  />
                </div>

                <button
                  type="submit"
                  className="glow-button w-full py-4 rounded-xl text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 text-base"
                >
                  Apply for Partnership <Send size={18} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

const Field = ({
  label, value, onChange, type = "text", required = false,
}: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
}) => (
  <div>
    <label className="text-[hsl(200,20%,60%)] text-sm font-medium mb-1.5 block">{label}</label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-xl bg-[hsl(200,30%,8%)] border border-[hsl(200,25%,16%)] text-primary-foreground text-sm focus:outline-none focus:border-teal/50 transition-colors placeholder:text-[hsl(200,20%,30%)]"
      placeholder={label.replace(" *", "")}
    />
  </div>
);

export default Partners;
