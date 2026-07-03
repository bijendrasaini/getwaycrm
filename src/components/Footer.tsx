import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const footerSections = [
  {
    title: "Platform & Products",
    links: [
      { label: "AI CRM Platform", path: "/ai-crm" },
      { label: "CPaaS Platform", path: "/platform" },
      { label: "AI Voice Agent", path: "/ai-call-automation" },
      { label: "School ERP", path: "/schoolerp" },
      { label: "Community & LMS", path: "/community" },
    ],
  },
  {
    title: "Marketing & Automation",
    links: [
      { label: "WhatsApp Marketing", path: "/whatsapp-marketing" },
      { label: "SMS / RCS Messaging", path: "/sms-rcs-messaging" },
      { label: "Voice Broadcasting", path: "/voice-broadcasting" },
      { label: "Email Marketing", path: "/email-marketing" },
      { label: "IVR System", path: "/ivr-system" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Founder", path: "/founder" },
      { label: "Channel Partner", path: "/channelpartner" },
      { label: "Contact", path: "/contact" },
      { label: "Presentation", path: "/presentation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Solutions", path: "/solutions" },
      { label: "Integrations", path: "/integrations" },
      { label: "FAQ", path: "/faq" },
      { label: "Demo", path: "/demo" },
      { label: "Security", path: "/security" },
    ],
  },
];

const Footer = () => (
  <footer className="footer-dark section-padding">
    <div className="container-wide">
      <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <Link to="/" className="mb-4 inline-block">
            <BrandLogo className="h-11 w-auto object-contain" />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-[hsl(200,20%,45%)]">
            AI-powered business automation for lead management, communication, workflow orchestration, and growth.
          </p>
          <p className="mt-4 text-xs text-[hsl(200,20%,35%)]">Digital Way to Grow</p>
          <div className="mt-4 flex flex-col gap-2">
            <a href="https://login.getwaycrm.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-light hover:underline">
              Client Login <ExternalLink size={13} />
            </a>
          </div>
        </div>
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">{section.title}</h4>
            <ul className="space-y-2.5">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-[hsl(200,20%,45%)] transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between gap-4 border-t border-[hsl(200,25%,10%)] pt-8 md:flex-row">
        <p className="text-sm text-[hsl(200,20%,35%)]">© 2006–{new Date().getFullYear()} GETWAY AI. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-6">
          <Link to="/privacy" className="text-sm text-[hsl(200,20%,35%)] transition-colors hover:text-primary-foreground">Privacy Policy</Link>
          <Link to="/terms" className="text-sm text-[hsl(200,20%,35%)] transition-colors hover:text-primary-foreground">Terms of Service</Link>
          <Link to="/refund-policy" className="text-sm text-[hsl(200,20%,35%)] transition-colors hover:text-primary-foreground">Refund Policy</Link>
          <Link to="/compliance-policy" className="text-sm text-[hsl(200,20%,35%)] transition-colors hover:text-primary-foreground">Compliance</Link>
          <Link to="/security" className="text-sm text-[hsl(200,20%,35%)] transition-colors hover:text-primary-foreground">Security</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
