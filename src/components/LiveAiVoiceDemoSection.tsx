import { Link } from "react-router-dom";
import { Bot, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const demoNumberDisplay = "+91 8065489190";
const demoNumberHref = "tel:+918065489190";
const whatsappHref = "https://wa.me/919255522544";

const tags = ["Lead Qualification", "Hindi", "AI Voice Calling"];

type LiveAiVoiceDemoSectionProps = {
  badge?: string;
  className?: string;
};

const LiveAiVoiceDemoSection = ({
  badge = "Live AI Voice Demo",
  className = "gradient-section-alt section-padding",
}: LiveAiVoiceDemoSectionProps) => (
  <section className={className}>
    <div className="container-wide max-w-5xl mx-auto">
      <AnimatedSection>
        <div className="glass-card-hover rounded-2xl p-8 md:p-10">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-3 text-center md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-light">
              <Sparkles size={14} /> {badge}
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <h2 className="heading-md gradient-text-white mb-4">Experience Live AI Voice Calling</h2>
              <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-4">Talk to GETWAY AI</h3>
              <p className="text-[hsl(200,20%,55%)] text-sm md:text-base leading-relaxed mb-6">
                Test our AI Voice Calling Agent live and experience human-like AI conversations for lead qualification, customer interaction, and automated business communication.
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full border border-[hsl(200,25%,18%)] bg-[hsl(200,30%,9%)] px-3 py-1.5 text-xs font-medium text-[hsl(200,20%,72%)]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl border border-[hsl(200,25%,16%)] bg-[hsl(200,30%,8%)] p-5 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="feature-icon-box"><Bot size={20} className="text-teal-light" /></div>
                  <div>
                    <div className="text-primary-foreground text-sm font-semibold">Lead Qualification AI Agent</div>
                    <div className="text-[hsl(200,20%,48%)] text-xs">Live demo available for lead qualification, customer engagement, and automated calling workflows.</div>
                  </div>
                </div>
                <p className="text-[hsl(200,20%,60%)] text-sm leading-relaxed">
                  Automatically calls and qualifies leads, answers common questions, introduces your business professionally, and helps businesses improve lead conversion using AI-powered voice automation.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-teal/20 bg-[linear-gradient(180deg,hsl(var(--navy-light)),hsl(var(--navy)))] p-6 shadow-[0_0_40px_hsl(var(--teal)/0.12)]">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-light">
                <PhoneCall size={14} /> Try Live AI Voice Demo
              </div>
              <a href={demoNumberHref} className="glow-button mb-4 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-center font-semibold text-primary-foreground">
                <PhoneCall size={18} /> {demoNumberDisplay}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[hsl(200,25%,18%)] bg-[hsl(200,30%,9%)] px-5 py-4 text-center font-semibold text-primary-foreground transition-all hover:border-teal/40 hover:bg-teal/10"
              >
                <MessageCircle size={18} className="text-teal-light" /> Experience GETWAY AI
              </a>
              <p className="text-center text-xs leading-relaxed text-[hsl(200,20%,48%)] mb-4">
                Experience how GETWAY AI Voice Agent handles real business conversations using advanced AI automation.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/demo" className="outline-button-hero flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold">
                  Book Free Demo
                </Link>
                <Link to="/aivoiceagent" className="outline-button-hero flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold">
                  Explore AI Voice Agent
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default LiveAiVoiceDemoSection;
