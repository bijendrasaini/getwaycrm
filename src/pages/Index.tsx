import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import LiveAiVoiceDemoSection from "@/components/LiveAiVoiceDemoSection";
import BuiltForBharat from "@/components/BuiltForBharat";
import PromoBannerCard from "@/components/PromoBannerCard";
import PlatformDiagram from "@/components/PlatformDiagram";
import ComparisonSection from "@/components/ComparisonSection";
import FounderSection from "@/components/FounderSection";
import promoBanner from "@/assets/getway-ai-voice-banner-primary.png.asset.json";
import neverMissBanner from "@/assets/getway-ai-voice-banner-never-miss-lead.png.asset.json";

const stats = [
  { number: "20,000+", label: "Businesses Served" },
  { number: "150+", label: "White-Label Partners" },
  { number: "550+", label: "Institutions Powered" },
  { number: "20+", label: "Years of Innovation" },
];

const platformLabels = [
  "AI CRM",
  "AI Voice Calling Agent",
  "CPaaS",
  "IVR",
  "WhatsApp API",
  "Workflow Automation",
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      <section className="gradient-hero relative flex min-h-screen items-center pt-20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container-wide relative z-10 py-16 md:py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.08em] text-[hsl(200,20%,62%)] md:text-sm"
            >
              {platformLabels.map((label, index) => (
                <span key={label} className="inline-flex items-center gap-3">
                  <span>{label}</span>
                  {index < platformLabels.length - 1 && <span className="text-teal-light">|</span>}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl mb-4"
            >
              <span className="gradient-text-white">GETWAY AI PLATFORM</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="gradient-text mb-5 text-2xl font-semibold md:text-3xl"
            >
              AI-Powered Business Automation
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 max-w-3xl text-base leading-relaxed text-[hsl(200,20%,55%)] md:text-lg"
            >
              One unified platform to automate communication, manage leads, streamline workflows, and scale business growth with AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35 }}
              className="mb-8"
            >
              <BuiltForBharat centered />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link to="/demo" className="glow-button inline-flex min-w-[180px] items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-primary-foreground">
                Book Demo <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/919255522544"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button-hero inline-flex min-w-[220px] items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold"
              >
                <MessageSquare size={18} /> Experience GETWAY AI
              </a>
              <Link to="/platform" className="outline-button-hero inline-flex min-w-[180px] items-center justify-center rounded-xl px-8 py-3.5 text-base font-semibold">
                Explore Platform
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="gradient-section-dark py-12 md:py-14">
        <div className="container-wide mx-auto max-w-6xl">
          <AnimatedSection>
            <PromoBannerCard src={promoBanner.url} alt="GETWAY AI Voice Calling Agent banner" />
          </AnimatedSection>
        </div>
      </section>

      <LiveAiVoiceDemoSection />

      <section className="gradient-section-dark py-16 border-y border-[hsl(200,25%,10%)]">
        <div className="container-wide">
          <AnimatedSection className="mb-10 text-center">
            <h2 className="heading-md gradient-text-white">Trusted by Growing Businesses</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.08} className="text-center">
                <div className="stat-number gradient-text mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-[hsl(200,20%,50%)]">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-hero relative section-padding">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <h2 className="heading-lg gradient-text-white mb-6">Build Your Next Growth System with GETWAY AI</h2>
            <p className="text-body-lg mx-auto mb-10 max-w-2xl text-[hsl(200,20%,50%)]">
              Launch AI-driven communication, workflow automation, and lead management from one premium platform.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/demo" className="glow-button inline-flex items-center gap-2 rounded-xl px-8 py-3.5 font-semibold text-primary-foreground">
                Book Demo <ArrowRight size={18} />
              </Link>
              <Link to="/platform" className="outline-button-hero rounded-xl px-8 py-3.5 font-semibold">
                Explore Platform
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
