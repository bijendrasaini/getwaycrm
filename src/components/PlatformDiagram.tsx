import { motion } from "framer-motion";
import {
  MessageCircle, Mail, Phone, TrendingUp, Globe, Share2,
  Headphones, Bot, GraduationCap, CreditCard
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const orbitItems = [
  { icon: MessageCircle, label: "WhatsApp", angle: 0 },
  { icon: Mail, label: "Email", angle: 36 },
  { icon: Phone, label: "SMS", angle: 72 },
  { icon: TrendingUp, label: "Sales Funnel", angle: 108 },
  { icon: Globe, label: "Website", angle: 144 },
  { icon: Share2, label: "Social Media", angle: 180 },
  { icon: Headphones, label: "IVR Calling", angle: 216 },
  { icon: Bot, label: "AI Voice Agent", angle: 252 },
  { icon: GraduationCap, label: "LMS / Courses", angle: 288 },
  { icon: CreditCard, label: "Payments", angle: 324 },
];

const PlatformDiagram = () => (
  <section className="gradient-section-dark section-padding overflow-hidden">
    <div className="container-wide">
      <SectionHeader
        badge="Ecosystem"
        title="One Platform. Unlimited Possibilities."
        description="Replace 10+ software tools with one AI platform."
      />
      <AnimatedSection>
        <div className="relative w-full max-w-xl mx-auto aspect-square">
          {/* Orbit ring */}
          <div className="absolute inset-4 sm:inset-8 rounded-full border border-[hsl(200,25%,18%)]" />
          <div className="absolute inset-12 sm:inset-20 rounded-full border border-[hsl(200,25%,14%)]" />

          {/* Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ boxShadow: ["0 0 40px hsl(187 100% 38% / 0.3)", "0 0 60px hsl(187 100% 38% / 0.5)", "0 0 40px hsl(187 100% 38% / 0.3)"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-teal to-cyan flex items-center justify-center"
            >
              <span className="text-primary-foreground font-display font-bold text-xs sm:text-sm text-center leading-tight px-2">
                GETWAY<br />AI CRM
              </span>
            </motion.div>
          </div>

          {/* Orbit nodes */}
          {orbitItems.map((item, i) => {
            const rad = (item.angle * Math.PI) / 180;
            const r = 44; // percentage from center
            const x = 50 + r * Math.cos(rad);
            const y = 50 + r * Math.sin(rad);
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="absolute flex flex-col items-center gap-1"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
              >
                {/* Connecting line */}
                <div className="absolute w-px bg-gradient-to-b from-teal/40 to-transparent" style={{
                  height: `${r * 0.5}%`,
                  transform: `rotate(${item.angle + 180}deg)`,
                  transformOrigin: "center top",
                  top: "50%",
                  left: "50%",
                  opacity: 0.3,
                }} />
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[hsl(200,30%,10%)] border border-teal/30 flex items-center justify-center shadow-[0_0_15px_hsl(187,100%,38%,0.15)]">
                  <item.icon size={18} className="text-teal-light" />
                </div>
                <span className="text-[hsl(200,20%,55%)] text-[10px] sm:text-xs font-medium whitespace-nowrap">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PlatformDiagram;
