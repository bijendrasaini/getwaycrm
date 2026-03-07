import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const businessProfiles = [
  "Business Owner",
  "IT Company",
  "Digital Marketing Agency",
  "Consultant / Freelancer",
  "Startup Founder",
  "Other",
];

const interestAreas = [
  "GETWAY AI CRM Demo",
  "CPaaS Communication Platform",
  "WhatsApp Business API",
  "Channel Partner Program",
  "White-Label Reseller Program",
];

const BookDemo = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    mobile: "",
    email: "",
    city: "",
    businessProfile: "",
    interests: [] as string[],
    notes: "",
  });

  const toggleInterest = (area: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(area)
        ? prev.interests.filter((i) => i !== area)
        : [...prev.interests, area],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build mailto link as a lightweight email approach
    const subject = encodeURIComponent("New Demo / Partner Request from " + form.fullName);
    const body = encodeURIComponent(
      `Full Name: ${form.fullName}\nCompany: ${form.company}\nMobile: ${form.mobile}\nEmail: ${form.email}\nCity: ${form.city}\nBusiness Profile: ${form.businessProfile}\nInterest Areas: ${form.interests.join(", ")}\nNotes: ${form.notes}`
    );
    window.open(`mailto:ceo@getwaygroup.com?subject=${subject}&body=${body}`, "_self");

    setSubmitted(true);
    toast({ title: "Request submitted!", description: "Our team will contact you shortly." });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[hsl(var(--teal)/0.08)] rounded-full blur-[120px]" />
        <div className="container-wide text-center relative z-10 max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">
              Book a Demo
            </span>
            <h1 className="heading-xl gradient-text-white mb-4">
              GETWAY AI CRM – Demo &amp; Partner Program
            </h1>
            <p className="text-[hsl(200,20%,55%)] text-lg leading-relaxed mb-2">
              Get a Free AI CRM Demo + Partner Opportunity
            </p>
            <p className="text-[hsl(200,20%,45%)] text-sm leading-relaxed max-w-2xl mx-auto">
              Book a demo to explore the power of GETWAY AI CRM, CPaaS communication platform, and AI-powered automation tools. You can also apply for our Channel Partner and White-Label Reseller Program.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="gradient-section-dark section-padding">
        <div className="container-wide max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-teal-light" />
                </div>
                <h2 className="heading-md gradient-text-white mb-3">Thank you!</h2>
                <p className="text-[hsl(200,20%,55%)] text-sm">
                  Our team will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8 md:p-10 space-y-6"
              >
                {/* Text fields */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name *" value={form.fullName} onChange={(v) => setForm({ ...form, fullName: v })} required />
                  <Field label="Company Name" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                  <Field label="Mobile Number *" value={form.mobile} onChange={(v) => setForm({ ...form, mobile: v })} type="tel" required />
                  <Field label="Email Address *" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" required />
                  <Field label="City / Location" value={form.city} onChange={(v) => setForm({ ...form, city: v })} className="sm:col-span-2" />
                </div>

                {/* Business Profile */}
                <div>
                  <label className="text-[hsl(200,20%,60%)] text-sm font-medium mb-3 block">Business Profile</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {businessProfiles.map((bp) => (
                      <button
                        type="button"
                        key={bp}
                        onClick={() => setForm({ ...form, businessProfile: bp })}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium border transition-all ${
                          form.businessProfile === bp
                            ? "border-teal/60 bg-teal/10 text-teal-light"
                            : "border-[hsl(200,25%,16%)] bg-[hsl(200,30%,8%)] text-[hsl(200,20%,55%)] hover:border-[hsl(200,25%,22%)]"
                        }`}
                      >
                        {bp}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interest Areas */}
                <div>
                  <label className="text-[hsl(200,20%,60%)] text-sm font-medium mb-3 block">Interest Areas</label>
                  <div className="flex flex-wrap gap-2">
                    {interestAreas.map((area) => {
                      const selected = form.interests.includes(area);
                      return (
                        <button
                          type="button"
                          key={area}
                          onClick={() => toggleInterest(area)}
                          className={`px-4 py-2.5 rounded-xl text-xs font-medium border transition-all ${
                            selected
                              ? "border-teal/60 bg-teal/10 text-teal-light"
                              : "border-[hsl(200,25%,16%)] bg-[hsl(200,30%,8%)] text-[hsl(200,20%,55%)] hover:border-[hsl(200,25%,22%)]"
                          }`}
                        >
                          {selected && "✓ "}{area}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-[hsl(200,20%,60%)] text-sm font-medium mb-1.5 block">Notes / Additional Requirements</label>
                  <textarea
                    rows={4}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[hsl(200,30%,8%)] border border-[hsl(200,25%,16%)] text-primary-foreground text-sm focus:outline-none focus:border-teal/50 transition-colors placeholder:text-[hsl(200,20%,30%)] resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="glow-button w-full py-4 rounded-xl text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 text-base"
                >
                  Book Demo / Apply for Partnership <Send size={18} />
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
  label,
  value,
  onChange,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
}) => (
  <div className={className}>
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

export default BookDemo;
