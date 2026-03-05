import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="overflow-hidden">
      <section className="gradient-hero pt-32 pb-20 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-wide text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Contact</span>
            <h1 className="heading-xl gradient-text-white mb-6">Let's Talk</h1>
            <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
              Ready to automate your business? Get in touch for a personalized demo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="gradient-section-dark section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="heading-md gradient-text-white mb-6">Get in Touch</h2>
              <p className="text-[hsl(200,20%,50%)] text-sm leading-relaxed mb-8">
                Whether you're looking for a demo, exploring partnership opportunities, or have questions about our platform, we're here to help.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@getway.com" },
                  { icon: Phone, label: "Phone", value: "+1 (800) GETWAY" },
                  { icon: MapPin, label: "Offices", value: "Global — India, UAE, USA" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="feature-icon-box"><item.icon size={20} className="text-teal-light" /></div>
                    <div>
                      <div className="text-[hsl(200,20%,45%)] text-xs uppercase tracking-wider">{item.label}</div>
                      <div className="text-primary-foreground text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                {[
                  { key: "name", label: "Full Name", type: "text" },
                  { key: "email", label: "Work Email", type: "email" },
                  { key: "company", label: "Company", type: "text" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-[hsl(200,20%,60%)] text-sm mb-1.5 block">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[hsl(200,30%,8%)] border border-[hsl(200,25%,16%)] text-primary-foreground text-sm focus:outline-none focus:border-teal/50 transition-colors placeholder:text-[hsl(200,20%,30%)]"
                      placeholder={field.label}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-[hsl(200,20%,60%)] text-sm mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[hsl(200,30%,8%)] border border-[hsl(200,25%,16%)] text-primary-foreground text-sm focus:outline-none focus:border-teal/50 transition-colors placeholder:text-[hsl(200,20%,30%)] resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <button type="submit" className="glow-button w-full py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center justify-center gap-2">
                  Send Message <Send size={16} />
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
