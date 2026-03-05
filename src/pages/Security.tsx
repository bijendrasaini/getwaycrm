import { Shield, Lock, Eye, Server, CheckCircle2, Globe, FileCheck, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const securityFeatures = [
  { icon: Lock, title: "End-to-End Encryption", desc: "All data encrypted at rest using AES-256 and in transit using TLS 1.3. Your data is protected at every layer." },
  { icon: Shield, title: "Access Control", desc: "Role-based access control with fine-grained permissions, multi-factor authentication, and SSO integration." },
  { icon: Eye, title: "Audit Logging", desc: "Comprehensive audit trails for every action. Full visibility into who accessed what and when." },
  { icon: Server, title: "Infrastructure Security", desc: "Enterprise-grade cloud infrastructure with network isolation, DDoS protection, and automated threat detection." },
  { icon: Globe, title: "Global Compliance", desc: "Built to meet global compliance standards including GDPR, SOC 2, and industry-specific regulations." },
  { icon: FileCheck, title: "Data Governance", desc: "Complete data lifecycle management with retention policies, data residency controls, and right-to-deletion." },
  { icon: Users, title: "Identity Management", desc: "Enterprise SSO, SCIM provisioning, and centralized identity management for large organizations." },
  { icon: CheckCircle2, title: "99.9% Uptime SLA", desc: "Guaranteed availability with multi-region redundancy, automatic failover, and real-time monitoring." },
];

const Security = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Security</span>
          <h1 className="heading-xl gradient-text-white mb-6">Enterprise-Grade<br />Security</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            Your data security is our top priority. Built with enterprise-grade protection at every layer.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="gradient-section-dark section-padding">
      <div className="container-wide">
        <SectionHeader badge="Protection" title="Security at Every Layer" description="Comprehensive security controls to protect your data, users, and business operations." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.08}>
              <div className="glass-card-hover rounded-2xl p-6 h-full">
                <div className="feature-icon-box mb-4"><f.icon size={22} className="text-teal-light" /></div>
                <h3 className="font-display font-semibold text-primary-foreground mb-2">{f.title}</h3>
                <p className="text-[hsl(200,20%,50%)] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Security;
