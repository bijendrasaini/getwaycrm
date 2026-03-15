import { useState } from "react";
import { Link } from "react-router-dom";
import { BarChart3, MessageSquare, Bot, Users, TrendingUp, ArrowRight, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const tabs = [
  { id: "leads", icon: Users, label: "Lead Capture" },
  { id: "pipeline", icon: TrendingUp, label: "Sales Pipeline" },
  { id: "whatsapp", icon: MessageSquare, label: "WhatsApp Automation" },
  { id: "chatbot", icon: Bot, label: "AI Chatbot" },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
];

const pipelineStages = [
  { stage: "New Lead", count: 24, color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { stage: "Contacted", count: 18, color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  { stage: "Qualified", count: 12, color: "bg-teal/20 text-teal-light border-teal/30" },
  { stage: "Proposal", count: 8, color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  { stage: "Won", count: 5, color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
];

const chatMessages = [
  { from: "user", text: "Hi, I want to know about GETWAY CRM pricing" },
  { from: "bot", text: "Hello! GETWAY AI CRM offers flexible plans starting from ₹999/month. Would you like a personalized demo?" },
  { from: "user", text: "Yes, please schedule a demo" },
  { from: "bot", text: "Great! I've scheduled a demo for you. Our team will contact you shortly. 🎯" },
];

const LiveDemo = () => {
  const [activeTab, setActiveTab] = useState("leads");
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  return (
    <div className="overflow-hidden">
      <section className="gradient-hero pt-32 pb-20 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-wide text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Interactive Demo</span>
            <h1 className="heading-xl gradient-text-white mb-6">AI CRM Live Demo</h1>
            <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
              Experience the power of GETWAY AI CRM with this interactive simulator.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="gradient-section-dark section-padding">
        <div className="container-wide max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium inline-flex items-center gap-2 transition-all border ${
                  activeTab === tab.id
                    ? "bg-teal/20 border-teal/50 text-teal-light"
                    : "bg-[hsl(200,30%,8%)] border-[hsl(200,25%,16%)] text-[hsl(200,20%,55%)] hover:border-teal/30"
                }`}
              >
                <tab.icon size={16} /> {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6 md:p-10 min-h-[400px]"
            >
              {activeTab === "leads" && (
                <div className="max-w-md mx-auto">
                  <h3 className="font-display font-semibold text-primary-foreground text-xl mb-2 text-center">Lead Capture Form</h3>
                  <p className="text-[hsl(200,20%,50%)] text-sm mb-6 text-center">Capture leads directly into your CRM pipeline.</p>
                  {leadSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle2 size={48} className="text-teal-light mx-auto mb-4" />
                      <p className="text-primary-foreground font-semibold mb-2">Lead Captured Successfully!</p>
                      <p className="text-[hsl(200,20%,50%)] text-sm">Auto-assigned to sales pipeline → WhatsApp follow-up triggered</p>
                      <button onClick={() => { setLeadSubmitted(false); setLeadForm({ name: "", email: "", phone: "" }); }} className="text-teal-light text-sm mt-4 underline">Try Again</button>
                    </div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); setLeadSubmitted(true); }} className="space-y-4">
                      {[
                        { label: "Full Name", key: "name" as const },
                        { label: "Email", key: "email" as const },
                        { label: "Phone", key: "phone" as const },
                      ].map((field) => (
                        <div key={field.key}>
                          <label className="text-[hsl(200,20%,60%)] text-sm mb-1.5 block">{field.label}</label>
                          <input
                            value={leadForm[field.key]}
                            onChange={(e) => setLeadForm({ ...leadForm, [field.key]: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[hsl(200,30%,8%)] border border-[hsl(200,25%,16%)] text-primary-foreground text-sm focus:outline-none focus:border-teal/50"
                            placeholder={field.label}
                          />
                        </div>
                      ))}
                      <button type="submit" className="glow-button w-full py-3 rounded-xl text-primary-foreground font-semibold inline-flex items-center justify-center gap-2">
                        <Send size={16} /> Capture Lead
                      </button>
                    </form>
                  )}
                </div>
              )}

              {activeTab === "pipeline" && (
                <div>
                  <h3 className="font-display font-semibold text-primary-foreground text-xl mb-6 text-center">Sales Pipeline Board</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {pipelineStages.map((s) => (
                      <div key={s.stage} className={`rounded-xl border p-4 text-center ${s.color}`}>
                        <div className="text-2xl font-bold font-display mb-1">{s.count}</div>
                        <div className="text-xs font-medium">{s.stage}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[hsl(200,20%,40%)] text-xs text-center mt-6 italic">Simulated pipeline data for demonstration purposes.</p>
                </div>
              )}

              {activeTab === "whatsapp" && (
                <div className="max-w-md mx-auto">
                  <h3 className="font-display font-semibold text-primary-foreground text-xl mb-6 text-center">WhatsApp Automation Preview</h3>
                  <div className="bg-[hsl(200,30%,6%)] rounded-2xl p-4 space-y-3">
                    {[
                      { type: "Welcome Message", status: "Sent", time: "10:00 AM" },
                      { type: "Follow-up Reminder", status: "Scheduled", time: "2:00 PM" },
                      { type: "Demo Confirmation", status: "Delivered", time: "11:30 AM" },
                      { type: "Payment Link", status: "Queued", time: "3:00 PM" },
                    ].map((msg) => (
                      <div key={msg.type} className="flex items-center justify-between p-3 rounded-xl border border-[hsl(200,25%,14%)]">
                        <div>
                          <div className="text-primary-foreground text-sm font-medium">{msg.type}</div>
                          <div className="text-[hsl(200,20%,40%)] text-xs">{msg.time}</div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${msg.status === "Sent" ? "bg-emerald-500/20 text-emerald-400" : msg.status === "Delivered" ? "bg-blue-500/20 text-blue-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                          {msg.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "chatbot" && (
                <div className="max-w-md mx-auto">
                  <h3 className="font-display font-semibold text-primary-foreground text-xl mb-6 text-center">AI Chatbot Interaction</h3>
                  <div className="bg-[hsl(200,30%,6%)] rounded-2xl p-4 space-y-3">
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                          msg.from === "user"
                            ? "bg-teal/20 text-teal-light rounded-br-md"
                            : "bg-[hsl(200,25%,12%)] text-[hsl(200,20%,65%)] rounded-bl-md"
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "analytics" && (
                <div>
                  <h3 className="font-display font-semibold text-primary-foreground text-xl mb-6 text-center">Analytics Dashboard</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: "Total Leads", value: "2,847" },
                      { label: "Conversion Rate", value: "34.2%" },
                      { label: "Revenue", value: "₹48.5L" },
                      { label: "Active Campaigns", value: "12" },
                    ].map((m) => (
                      <div key={m.label} className="bg-[hsl(200,30%,8%)] rounded-xl p-4 text-center border border-[hsl(200,25%,14%)]">
                        <div className="text-xl font-bold font-display gradient-text mb-1">{m.value}</div>
                        <div className="text-[hsl(200,20%,45%)] text-xs">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[hsl(200,20%,40%)] text-xs text-center italic">Simulated analytics for demonstration purposes.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-10">
            <Link to="/demo" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
              Request Full Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveDemo;
