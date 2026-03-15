import { X, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const oldTools = [
  "Zoho CRM / HubSpot / Salesforce / Odoo",
  "WATI / AiSensy",
  "WordPress / ClickFunnels / FlexiFunnels",
  "Shopify / WooCommerce",
  "MailChimp / ConvertKit / ActiveCampaign",
  "Zapier / Pabbly",
  "Exly / Graphy / Classplus",
  "Buffer / Hootsuite",
  "Calendly",
  "Google Ads / Meta Ads",
  "Razorpay / Cashfree / Stripe / PayU",
];

const getwayFeatures = [
  "AI-CRM & Lead Management",
  "CPaaS Communication Platform",
  "WhatsApp Marketing & Automation",
  "SMS, RCS & Voice Broadcasting",
  "AI Virtual Employee (24×7)",
  "AI Voice Agents & Call Automation",
  "IVR Calling System & Smart Routing",
  "AI Website Builder, Funnels & Landing Pages",
  "Online Shop / Store / eCommerce",
  "Marketing Campaign Automation",
  "Sales Pipeline Management",
  "Workflow Automation & Integrations",
  "Automatic Follow-ups & Reminders",
  "AI Ad Launcher & AI Chatbot",
  "Event, Webinar & Appointment Booking",
  "LMS / Online Course / Community Platforms",
  "Social Media Management & Auto Posting",
  "One Unified Inbox for All Chats & Comments",
  "Secure Cloud Storage & Data Management",
  "Payment, Billing & Finance Management",
  "Analytics, Tracking & Mobile App Access",
  "and many more powerful automation tools",
];

const hindiLines = [
  "सब कुछ एक ही Dashboard पर!",
  "अब एक भी Lead Miss नहीं होती!",
  "Sales & Staff को Track करना आसान!",
  "पूरा Business आपके Control में रहता है।",
];

const ComparisonSection = () => (
  <section className="gradient-section-alt section-padding">
    <div className="container-wide">
      <SectionHeader
        badge="Why GETWAY"
        title="Replace 10+ Tools with One AI Platform"
      />
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Old tools */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 h-full border-red-500/20">
            <h3 className="font-display font-bold text-primary-foreground text-lg mb-6 text-center">Multiple Tools – Multiple Problems</h3>
            <ul className="space-y-2.5">
              {oldTools.map((tool) => (
                <li key={tool} className="flex items-center gap-3 text-[hsl(200,20%,50%)] text-sm">
                  <X size={16} className="text-red-400 shrink-0" /> {tool}
                </li>
              ))}
            </ul>
            <p className="text-[hsl(200,20%,40%)] text-xs mt-6 text-center italic">
              Managing multiple disconnected tools increases cost, complexity, and operational inefficiency.
            </p>
          </div>
        </AnimatedSection>

        {/* GETWAY */}
        <AnimatedSection delay={0.15}>
          <div className="glass-card rounded-2xl p-8 h-full border-teal/40 shadow-[0_0_40px_hsl(187,100%,38%,0.1)]">
            <h3 className="font-display font-bold text-primary-foreground text-lg mb-6 text-center">
              One Platform – Infinite Possibilities
            </h3>
            <ul className="space-y-2">
              {getwayFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[hsl(200,20%,65%)] text-sm">
                  <CheckCircle2 size={16} className="text-teal shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>

      {/* Closing text */}
      <AnimatedSection className="text-center mt-12 max-w-3xl mx-auto">
        <p className="text-[hsl(200,20%,55%)] text-body-lg mb-8">
          GETWAY unifies CRM, communication, automation, and growth infrastructure into one intelligent AI-powered platform.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {hindiLines.map((line) => (
            <div key={line} className="glass-card rounded-xl px-5 py-3 text-teal-light text-sm font-medium">
              {line}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ComparisonSection;
