import { Rocket, Heart, Globe, Zap, Download } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const perks = [
  { icon: Rocket, title: "AI Automation Platforms", desc: "Work on advanced AI-powered automation systems used by thousands of businesses." },
  { icon: Heart, title: "Enterprise SaaS", desc: "Exposure to enterprise SaaS infrastructure and global-scale technology." },
  { icon: Globe, title: "Leadership Growth", desc: "Leadership growth opportunities working with entrepreneurs and global organizations." },
  { icon: Zap, title: "Make an Impact", desc: "Work at the intersection of technology, automation and business transformation." },
];

const openings = [
  {
    title: "Job Opportunity",
    location: "Gurugram",
    type: "Full Time",
    jd: "Business Development Manager",
    file: "/jd/business-development-manager.pdf",
  },
  {
    title: "Job Opportunity",
    location: "Gurugram",
    type: "Full Time",
    jd: "CRM & Technical Support Executive",
    file: "/jd/crm-technical-support-executive.pdf",
  },
];

const Career = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Careers</span>
          <h1 className="heading-xl gradient-text-white mb-6">Build the Future of<br />AI Automation</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            GETWAY is building next-generation AI-powered business automation systems. We are looking for talented professionals who want to work at the intersection of technology, automation and business transformation.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <SectionHeader badge="Why GETWAY" title="Why Join GETWAY" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {perks.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="glass-card-hover rounded-2xl p-6 h-full text-center">
                <div className="feature-icon-box mx-auto mb-4"><p.icon size={22} className="text-teal-light" /></div>
                <h3 className="font-display font-semibold text-primary-foreground mb-2">{p.title}</h3>
                <p className="text-[hsl(200,20%,50%)] text-sm">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <SectionHeader badge="Open Positions" title="Current Openings" />
        <div className="max-w-3xl mx-auto space-y-4">
          {openings.map((job, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="glass-card-hover rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-semibold text-primary-foreground mb-1">{job.title}</h3>
                  <div className="text-[hsl(200,20%,50%)] text-sm">
                    Location: {job.location} · {job.type}
                  </div>
                </div>
                <a
                  href={job.file}
                  download
                  className="glow-button px-5 py-2 rounded-lg text-primary-foreground text-sm font-medium inline-flex items-center gap-1.5 shrink-0"
                >
                  <Download size={14} /> Download Job Description
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Career;
