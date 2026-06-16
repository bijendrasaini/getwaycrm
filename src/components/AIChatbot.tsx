import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat`;
const fallbackReply = "Thank you! Our team has received your request and will contact you shortly.";

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi 👋 Welcome to GETWAY AI Platform. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    const trimmed = (input || "").trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: "user", content: trimmed };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    let assistantContent = "";

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!resp.ok || !resp.body) {
        throw new Error("Failed to get response");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || (line || "").trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant" && prev.length > newMessages.length) {
                  return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantContent } : m));
                }
                return [...prev, { role: "assistant", content: assistantContent }];
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [...prev, { role: "assistant", content: fallbackReply }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(!open)} className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full glow-button shadow-lg transition-transform hover:scale-110" aria-label="AI Chat">
        {open ? <X size={24} className="text-primary-foreground" /> : <Bot size={26} className="text-primary-foreground" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="fixed bottom-[5.5rem] right-6 z-50 flex max-h-[450px] w-[340px] flex-col overflow-hidden rounded-2xl glass-card shadow-2xl">
            <div className="flex items-center gap-2 border-b border-[hsl(200,25%,18%)] px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full glow-button"><Bot size={16} className="text-primary-foreground" /></div>
              <div>
                <div className="text-sm font-semibold text-primary-foreground">GETWAY AI</div>
                <div className="text-xs text-[hsl(200,20%,50%)]">AI Assistant</div>
              </div>
            </div>

            <div className="min-h-[200px] max-h-[300px] flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-xl px-3 py-2 text-sm leading-relaxed ${msg.role === "user" ? "bg-teal/20 text-primary-foreground" : "bg-[hsl(200,30%,12%)] text-[hsl(200,20%,70%)]"}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="rounded-xl bg-[hsl(200,30%,12%)] px-3 py-2 text-sm text-[hsl(200,20%,50%)]">
                    <Loader2 size={16} className="animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center gap-2 border-t border-[hsl(200,25%,18%)] px-3 py-3">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Type a message..." className="flex-1 rounded-xl border border-[hsl(200,25%,16%)] bg-[hsl(200,30%,8%)] px-3 py-2 text-sm text-primary-foreground placeholder:text-[hsl(200,20%,30%)] focus:border-teal/50 focus:outline-none" disabled={isLoading} />
              <button onClick={send} disabled={isLoading} className="glow-button flex h-9 w-9 shrink-0 items-center justify-center rounded-xl disabled:opacity-50">
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
