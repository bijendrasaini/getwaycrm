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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Demo request submitted!", description: "Our team has received your request and will contact you shortly." });

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      await supabase.functions.invoke("handle-form-submission", {
        body: {
          name: form.fullName,
          company: form.company,
          mobile: form.mobile,
          email: form.email,
          city: form.city,
          state: form.state,
          message: form.notes,
          source: "Website Demo",
        },
      });
    } catch (err) {
      console.error("Form submission error:", err);
    }
  };

  return (
    <div className="overflow-hidden">
      <section className="gradient-hero relative pb-16 pt-32">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute left-1/4 top-20 h-[400px] w-[400px] rounded-full bg-[hsl(var(--teal)/0.08)] blur-[120px]" />
        <div className="container-wide relative z-10 mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <span className="mb-6 inline-block rounded-full border border-teal/20 bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-light">
              Book Demo
            </span>
            <h1 className="heading-xl gradient-text-white mb-4">GETWAY AI PLATFORM</h1>
            <p className="mb-4 text-xl font-semibold text-teal-light">AI-Powered Business Automation</p>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[hsl(200,20%,55%)]">
              Book a guided demo to explore AI CRM, AI Voice Calling Agent, CPaaS, IVR, WhatsApp automation, and workflow orchestration in one platform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="gradient-section-dark section-padding">
        <div className="container-wide mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal/20">
                  <CheckCircle size={32} className="text-teal-light" />
                </div>
                <h2 className="heading-md gradient-text-white mb-3">Thank you!</h2>
                <p className="mb-8 text-sm text-[hsl(200,20%,55%)]">Our team has received your request and will contact you shortly.</p>
                <a href="https://wa.me/919255522544?text=Hello%20GETWAY%20Team,%20I%20am%20interested%20in%20a%20GETWAY%20AI%20demo" target="_blank" rel="noopener noreferrer" className="glow-button inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-primary-foreground">
                  <MessageCircle size={20} /> Experience GETWAY AI
                </a>
              </motion.div>
            ) : (
              <motion.form key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6 md:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name *" value={form.fullName} onChange={(v) => setForm({ ...form, fullName: v })} required />
                  <Field label="Company Name" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                  <Field label="Mobile Number *" value={form.mobile} onChange={(v) => setForm({ ...form, mobile: v })} type="tel" required />
                  <Field label="Email Address *" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" required />
                  <Field label="City" value={form.city} onChange={(v) => setForm({ ...form, city: v })} />
                  <Field label="State" value={form.state} onChange={(v) => setForm({ ...form, state: v })} />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[hsl(200,20%,60%)]">Notes / Comments</label>
                  <textarea rows={4} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full resize-none rounded-xl border border-[hsl(200,25%,16%)] bg-[hsl(200,30%,8%)] px-4 py-3 text-sm text-primary-foreground placeholder:text-[hsl(200,20%,30%)] transition-colors focus:border-teal/50 focus:outline-none" placeholder="Tell us about your requirements..." />
                </div>

                <button type="submit" className="glow-button inline-flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-primary-foreground">
                  Book Demo <Send size={18} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

const Field = ({ label, value, onChange, type = "text", required = false }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) => (
  <div>
    <label className="mb-1.5 block text-sm font-medium text-[hsl(200,20%,60%)]">{label}</label>
    <input type={type} required={required} value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-[hsl(200,25%,16%)] bg-[hsl(200,30%,8%)] px-4 py-3 text-sm text-primary-foreground placeholder:text-[hsl(200,20%,30%)] transition-colors focus:border-teal/50 focus:outline-none" placeholder={label.replace(" *", "")} />
  </div>
);

export default Demo;
