import { Shield, Lock, Eye, Server, CheckCircle2, Globe, FileCheck, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const securityFeatures = [
  { icon: Lock, title: "End-to-End Encryption", desc: "All data encrypted at rest using AES-256 and in transit using TLS 1.3. Your data is protected at every layer." },
  { icon: Shield, title: "Role-Based Access Control", desc: "Fine-grained permissions, multi-factor authentication, and SSO integration to control who accesses what." },
  { icon: Eye, title: "Audit Logging & Monitoring", desc: "Comprehensive audit trails for every action. Regular system monitoring with real-time threat detection." },
  { icon: Server, title: "Secure Cloud Infrastructure", desc: "Enterprise-grade cloud infrastructure with network isolation, DDoS protection, and automated threat detection." },
  { icon: Globe, title: "Global Compliance", desc: "Built to meet global compliance standards including GDPR, SOC 2, and industry-specific regulations." },
  { icon: FileCheck, title: "Data Governance & Protection", desc: "Complete data lifecycle management with retention policies, data residency controls, and right-to-deletion." },
  { icon: Users, title: "Secure API Integrations", desc: "All API integrations secured with OAuth 2.0, API key management, and request rate limiting." },
  { icon: CheckCircle2, title: "99.9% Uptime SLA", desc: "Guaranteed availability with multi-region redundancy, automatic failover, and real-time monitoring." },
];

const Security = () => (
  <div className="overflow-hidden">
    <section className="gradient-hero pt-32 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Security & Data Privacy</span>
          <h1 className="heading-xl gradient-text-white mb-6">Security &<br />Data Privacy</h1>
          <p className="text-[hsl(200,20%,55%)] text-body-lg max-w-2xl mx-auto">
            GETWAY prioritizes the security and privacy of customer data. Built with enterprise-grade protection at every layer.
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

    <section className="gradient-section-alt section-padding">
      <div className="container-wide max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-12">
            <Shield size={48} className="text-teal-light mx-auto mb-6" />
            <h2 className="heading-md gradient-text-white mb-4">Data Protection Best Practices</h2>
            <p className="text-[hsl(200,20%,55%)] text-sm leading-relaxed">
              GETWAY follows industry best practices for data protection including encrypted communication channels, regular security audits, penetration testing, and compliance with international data protection regulations. Our infrastructure is designed with security-first principles to ensure your business data remains safe and private.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Security;
