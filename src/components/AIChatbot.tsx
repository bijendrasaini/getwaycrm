import { useState } from "react";
import { Bot, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqResponses: Record<string, string> = {
  "pricing": "GETWAY offers flexible plans starting from ₹999/month. Visit our Pricing page for details or book a free demo!",
  "demo": "You can book a free demo at getway.in/demo — our team will walk you through the platform.",
  "crm": "GETWAY AI CRM is an all-in-one platform for lead management, sales automation, WhatsApp API, voice calling, and more.",
  "whatsapp": "Yes! GETWAY provides official WhatsApp Business API integration for automated messaging, campaigns, and CRM-linked conversations.",
  "partner": "Join 150+ partners building businesses on GETWAY. Visit getway.in/partners to apply for our White-Label Partner Program.",
  "contact": "Reach us at connect@getway.in or call +91 92555-22544. We're happy to help!",
  "sms": "GETWAY supports Bulk SMS, Transactional SMS, OTP, and RCS messaging through our CPaaS platform.",
  "voice": "Our AI Voice Agents automate inbound and outbound calls for sales, support, and lead qualification.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(faqResponses)) {
    if (lower.includes(key)) return value;
  }
  return "Thanks for your message! For detailed assistance, please contact us at connect@getway.in or book a demo at getway.in/demo.";
}

type Message = { role: "user" | "assistant"; content: string };

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi 👋 Welcome to GETWAY AI CRM. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    const reply: Message = { role: "assistant", content: getResponse(input.trim()) };
    setMessages((prev) => [...prev, userMsg, reply]);
    setInput("");
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full glow-button flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        aria-label="AI Chat"
      >
        {open ? <X size={24} className="text-primary-foreground" /> : <Bot size={26} className="text-primary-foreground" />}
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-[10.5rem] right-6 z-50 w-[340px] max-h-[450px] rounded-2xl glass-card flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-[hsl(200,25%,18%)] flex items-center gap-2">
              <div className="w-8 h-8 rounded-full glow-button flex items-center justify-center"><Bot size={16} className="text-primary-foreground" /></div>
              <div>
                <div className="text-primary-foreground text-sm font-semibold">GETWAY AI</div>
                <div className="text-[hsl(200,20%,50%)] text-xs">Ask me anything</div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[300px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-teal/20 text-primary-foreground"
                      : "bg-[hsl(200,30%,12%)] text-[hsl(200,20%,70%)]"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-[hsl(200,25%,18%)] flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 rounded-xl bg-[hsl(200,30%,8%)] border border-[hsl(200,25%,16%)] text-primary-foreground text-sm focus:outline-none focus:border-teal/50 placeholder:text-[hsl(200,20%,30%)]"
              />
              <button onClick={send} className="w-9 h-9 rounded-xl glow-button flex items-center justify-center shrink-0">
                <Send size={14} className="text-primary-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
