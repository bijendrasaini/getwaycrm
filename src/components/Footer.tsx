import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import getwayLogo from "@/assets/getway-logo.jpg";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "AI CRM", path: "/ai-crm" },
      { label: "CPaaS", path: "/platform" },
      { label: "Integrations", path: "/integrations" },
      { label: "Pricing", path: "/pricing" },
      { label: "Live Demo", path: "/live-demo" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Education", path: "/solutions" },
      { label: "Healthcare", path: "/solutions" },
      { label: "Finance", path: "/solutions" },
      { label: "E-Commerce", path: "/solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "GETWAY Profile", path: "/profile" },
      { label: "Careers", path: "/career" },
      { label: "Partners", path: "/partners" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Security", path: "/security" },
      { label: "FAQ", path: "/faq" },
      { label: "Demo", path: "/demo" },
      { label: "Presentation", path: "/presentation" },
      { label: "Blog", path: "#" },
      { label: "Documentation", path: "#" },
      { label: "API", path: "#" },
      { label: "Help Center", path: "#" },
    ],
  },
];

const Footer = () => (
  <footer className="footer-dark section-padding">
    <div className="container-wide">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <Link to="/" className="inline-block mb-4">
            <img src={getwayLogo} alt="GETWAY" className="h-10 w-auto object-contain brightness-110" />
          </Link>
          <p className="text-[hsl(200,20%,45%)] text-sm leading-relaxed max-w-xs">
            AI-Powered Business Automation Platform. Unify your CRM, communications, and workflows into one intelligent system.
          </p>
          <p className="text-[hsl(200,20%,35%)] text-xs mt-4">Digital Way to Grow</p>
          <div className="mt-4 flex flex-col gap-2">
            <a href="https://login.getwaycrm.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-teal-light text-sm font-medium hover:underline">
              Client Login <ExternalLink size={13} />
            </a>
          </div>
        </div>
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold text-primary-foreground text-sm mb-4">{section.title}</h4>
            <ul className="space-y-2.5">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-[hsl(200,20%,45%)] hover:text-primary-foreground text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[hsl(200,25%,10%)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[hsl(200,20%,35%)] text-sm">© 2006–{new Date().getFullYear()} Getways Wellness & Technology. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="text-[hsl(200,20%,35%)] hover:text-primary-foreground text-sm transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-[hsl(200,20%,35%)] hover:text-primary-foreground text-sm transition-colors">Terms of Service</Link>
          <Link to="/security" className="text-[hsl(200,20%,35%)] hover:text-primary-foreground text-sm transition-colors">Security</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
