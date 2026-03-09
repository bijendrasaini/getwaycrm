import { X, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const oldTools = [
  "Zoom", "Zoho CRM", "WordPress", "WhatsApp Tools",
  "Email Marketing Tools", "Funnels Tools", "Course Platforms", "Booking Systems",
];

const getwayFeatures = [
  "Funnel Builder", "Landing Pages", "CRM & Lead Management",
  "WhatsApp Automation", "Email Marketing", "AI Chatbot",
  "AI Voice Agents", "Appointment Booking", "Invoicing & Automation", "LMS Platform",
];

const ComparisonSection = () => (
  <section className="gradient-section-alt section-padding">
    <div className="container-wide">
      <SectionHeader
        badge="Why GETWAY"
        title="Replace 10+ Tools with One AI Platform"
      />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Old tools */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 h-full border-red-500/20">
            <h3 className="font-display font-bold text-primary-foreground text-lg mb-6 text-center">Multiple Tools – Multiple Problems</h3>
            <ul className="space-y-3">
              {oldTools.map((tool) => (
                <li key={tool} className="flex items-center gap-3 text-[hsl(200,20%,50%)] text-sm">
                  <X size={16} className="text-red-400 shrink-0" /> {tool}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* GETWAY */}
        <AnimatedSection delay={0.15}>
          <div className="glass-card rounded-2xl p-8 h-full border-teal/40 shadow-[0_0_40px_hsl(187,100%,38%,0.1)]">
            <h3 className="font-display font-bold text-primary-foreground text-lg mb-6 text-center">
              All-in-One AI Automation Platform
            </h3>
            <ul className="space-y-3">
              {getwayFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[hsl(200,20%,65%)] text-sm">
                  <CheckCircle2 size={16} className="text-teal shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
