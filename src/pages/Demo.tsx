import { useState } from "react";
import { Send, CheckCircle, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const Demo = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Demo request submitted!", description: "Our team will contact you shortly." });
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
              Book a Free Demo
            </span>
            <h1 className="heading-xl gradient-text-white mb-4">
              GETWAY AI CRM
            </h1>
            <p className="text-teal-light text-xl font-semibold mb-4">
              Run Your Business on AI Autopilot
            </p>
            <p className="text-[hsl(200,20%,55%)] text-base leading-relaxed max-w-2xl mx-auto">
              GETWAY AI CRM is a powerful all-in-one business automation platform that replaces multiple software tools with one intelligent system. Capture leads, automate sales, manage communication, and scale your business using AI automation.
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
                <p className="text-[hsl(200,20%,55%)] text-sm mb-8">
                  Our team will contact you shortly.
                </p>
                <a
                  href="https://wa.me/919355522544?text=Hello%20GETWAY%20Team,%20I%20am%20interested%20in%20GETWAY%20AI%20CRM%20Demo"
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
                  <Field label="City" value={form.city} onChange={(v) => setForm({ ...form, city: v })} />
                  <Field label="State" value={form.state} onChange={(v) => setForm({ ...form, state: v })} />
                </div>

                <div>
                  <label className="text-[hsl(200,20%,60%)] text-sm font-medium mb-1.5 block">Notes / Comments</label>
                  <textarea
                    rows={4}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[hsl(200,30%,8%)] border border-[hsl(200,25%,16%)] text-primary-foreground text-sm focus:outline-none focus:border-teal/50 transition-colors placeholder:text-[hsl(200,20%,30%)] resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="glow-button w-full py-4 rounded-xl text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 text-base"
                >
                  Book Free Demo <Send size={18} />
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
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
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

export default Demo;
