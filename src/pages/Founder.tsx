import { Link } from "react-router-dom";
import { ArrowRight, Award, BookOpen, Building2, Globe, Linkedin, Instagram, Facebook, PlayCircle, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import BuiltForBharat from "@/components/BuiltForBharat";
import founderHero from "@/assets/bijendra-saini-founder-hero.jpg.asset.json";
import founderGalleryOne from "@/assets/bijendra-saini-gallery-collage-1.jpg.asset.json";
import founderGalleryTwo from "@/assets/bijendra-saini-gallery-collage-2.jpg.asset.json";

const achievements = [
  "JCI India Trainer since 2009",
  "India’s Leading Manifestation Trainer",
  "7+ Years of Experience in Manifestation & Mindset Training",
  "Learned from 50+ Renowned Trainers & Mentors",
  "Honored with 150+ Awards & Recognitions",
  "250+ Training Programs, Workshops & Seminars Conducted",
  "1,00,000+ People Inspired & Motivated",
  "Mission to Inspire Millions of Lives",
];

const programs = [
  "Manifestation Training Program",
  "Manifestation Mentorship Program",
  "Corporate Training Programs",
  "School & College Training Programs",
  "“गुरु बने – टीचर नहीं” Program",
  "Mindfulness & Meditation Programs",
];

const ecosystem = [
  "AI CRM Platform",
  "AI Voice Calling Agents",
  "WhatsApp API & Automation",
  "IVR Calling Systems",
  "Bulk SMS & RCS Messaging",
  "Omni-Channel Communication Solutions",
  "Sales & Workflow Automation",
  "Lead Management Systems",
  "CPaaS Communication Infrastructure",
];

const videos = [
  { title: "A Little Bit About Bijendra Saini", url: "https://youtu.be/ZyU8phG7PE4" },
  { title: "Training Video – Day 1", url: "https://youtu.be/xMC_98ex-aM" },
  { title: "Training Video – Day 2", url: "https://youtu.be/j_Cc7tDLF08" },
  { title: "Testimonials", url: "https://youtu.be/cZ6FW5thO1M" },
  { title: "Podcast", url: "https://youtu.be/NK_UE5kCIp4" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bijendrasaini", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/share/1XPwapJfkM/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/bijendrasaini_trainer", icon: Instagram },
  { label: "Official Website", href: "https://www.bijendrasaini.com", icon: Globe },
];

const Founder = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Founder & CEO</span>
            <h1 className="heading-xl gradient-text-white mb-4">Bijendra Saini</h1>
            <p className="text-teal-light text-xl font-semibold mb-4">Founder & CEO – GETWAY Technology</p>
            <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mb-6">India’s Leading Manifestation Mentor | Business Growth Trainer</p>
            <BuiltForBharat className="mb-6" />
            <p className="text-[hsl(200,20%,60%)] text-sm leading-relaxed mb-8 max-w-2xl">
              Bijendra Saini is a renowned Manifestation Mentor, Business Growth Trainer and the visionary Founder & CEO, GETWAY Technology. With a powerful combination of mindset transformation, business growth strategies, and AI-driven automation systems, he has inspired and empowered thousands of individuals, entrepreneurs, professionals, educators, and business leaders to achieve extraordinary growth in life and business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://youtu.be/ZyU8phG7PE4" target="_blank" rel="noopener noreferrer" className="glow-button px-6 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center justify-center gap-2"><PlayCircle size={18} /> Watch Introduction Video</a>
              <Link to="/demo" className="outline-button-hero px-6 py-3.5 rounded-xl font-semibold inline-flex items-center justify-center gap-2">Book Demo <ArrowRight size={18} /></Link>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass-card rounded-2xl p-2">
              <img src={founderHero.url} alt="Bijendra Saini speaking at a business event" className="w-full rounded-xl object-cover" loading="eager" decoding="async" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="heading-md gradient-text-white mb-5">About Bijendra Saini</h2>
            <div className="space-y-4 text-[hsl(200,20%,60%)] text-sm leading-relaxed">
              <p>Known for his transformational training sessions, practical business insights, and result-oriented mentorship, Bijendra helps people unlock their true potential by combining the power of manifestation, right mindset, and modern technology systems.</p>
              <p>His core belief is:</p>
              <p className="text-primary-foreground font-semibold text-lg">“ब्रह्मांड आपकी सोच और ऊर्जा का प्रतिबिंब है — जैसा सोचोगे, वैसा ही पाओगे!”</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-alt section-padding">
      <div className="container-wide">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => (
            <AnimatedSection key={item} delay={index * 0.04}>
              <div className="glass-card-hover rounded-2xl p-6 h-full">
                <div className="feature-icon-box mb-4"><Award size={20} className="text-teal-light" /></div>
                <p className="text-[hsl(200,20%,68%)] text-sm leading-relaxed">{item}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide grid gap-10 lg:grid-cols-2">
        <AnimatedSection>
          <h2 className="heading-md gradient-text-white mb-6">Vision & Mission</h2>
          <div className="space-y-3 text-[hsl(200,20%,68%)] text-sm">
            {[
              "To inspire millions of people",
              "To empower entrepreneurs with modern AI-powered business systems",
              "To help individuals manifest success, abundance, and purpose-driven lives",
              "To create transformational leaders who positively impact society",
            ].map((item) => (
              <div key={item} className="glass-card rounded-xl px-5 py-4">{item}</div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="heading-md gradient-text-white mb-6">Programs & Offerings</h2>
          <div className="space-y-3 text-[hsl(200,20%,68%)] text-sm">
            {programs.map((item) => (
              <div key={item} className="glass-card rounded-xl px-5 py-4 flex items-center gap-3"><BookOpen size={18} className="text-teal-light shrink-0" /> {item}</div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-alt section-padding">
      <div className="container-wide max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="heading-md gradient-text-white mb-6 text-center">GETWAY AI — AI-Powered Business Automation Ecosystem</h2>
        </AnimatedSection>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((item, index) => (
            <AnimatedSection key={item} delay={index * 0.04}>
              <div className="glass-card rounded-xl px-5 py-4 text-[hsl(200,20%,68%)] text-sm flex items-center gap-3"><Sparkles size={16} className="text-teal-light shrink-0" /> {item}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="heading-md gradient-text-white mb-6 text-center">Training Gallery</h2>
        </AnimatedSection>
        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedSection><div className="glass-card rounded-2xl p-2"><img src={founderGalleryOne.url} alt="Bijendra Saini training and workshop moments" className="w-full rounded-xl object-cover" loading="lazy" decoding="async" /></div></AnimatedSection>
          <AnimatedSection delay={0.1}><div className="glass-card rounded-2xl p-2"><img src={founderGalleryTwo.url} alt="Bijendra Saini awards, media and leadership moments" className="w-full rounded-xl object-cover" loading="lazy" decoding="async" /></div></AnimatedSection>
        </div>
      </div>
    </section>

    <section className="gradient-section-alt section-padding">
      <div className="container-wide max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="heading-md gradient-text-white mb-6 text-center">Media & Social Links</h2>
        </AnimatedSection>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mb-8">
          {videos.map((video, index) => (
            <AnimatedSection key={video.title} delay={index * 0.04}>
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="glass-card-hover rounded-2xl p-6 block h-full">
                <div className="feature-icon-box mb-4"><PlayCircle size={20} className="text-teal-light" /></div>
                <div className="text-primary-foreground font-semibold mb-2">{video.title}</div>
                <div className="text-[hsl(200,20%,52%)] text-sm">Watch on YouTube</div>
              </a>
            </AnimatedSection>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((social, index) => (
            <AnimatedSection key={social.label} delay={index * 0.05}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl px-5 py-4 flex items-center gap-3 text-[hsl(200,20%,68%)] text-sm hover:border-teal/30 transition-colors">
                <social.icon size={18} className="text-teal-light shrink-0" /> {social.label}
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="gradient-hero section-padding relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide relative z-10 text-center">
        <AnimatedSection>
          <h2 className="heading-lg gradient-text-white mb-6">Vision for GETWAY AI</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Never Miss a Lead",
              "Automate Customer Communication",
              "Improve Sales Efficiency",
              "Scale Faster with AI",
              "Build Smarter Customer Experiences",
            ].map((item) => (
              <span key={item} className="inline-flex items-center rounded-full border border-teal/20 bg-teal/10 px-4 py-2 text-sm font-medium text-teal-light">{item}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/CRM" className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2"><Building2 size={18} /> Explore GETWAY AI</Link>
            <a href="https://www.linkedin.com/in/bijendrasaini" target="_blank" rel="noopener noreferrer" className="outline-button-hero px-8 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2"><Linkedin size={18} /> Connect on LinkedIn</a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Founder;
