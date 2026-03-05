import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Careers", path: "#" },
      { label: "Blog", path: "#" },
      { label: "Press", path: "#" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "AI CRM", path: "/ai-crm" },
      { label: "CPaaS", path: "/platform" },
      { label: "AI Voice", path: "/platform" },
      { label: "Automation", path: "/platform" },
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
    title: "Partners",
    links: [
      { label: "Channel Partners", path: "/partners" },
      { label: "White Label", path: "/partners" },
      { label: "Referral Program", path: "/partners" },
      { label: "Become a Partner", path: "/partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", path: "#" },
      { label: "API Reference", path: "#" },
      { label: "Help Center", path: "#" },
      { label: "Status", path: "#" },
    ],
  },
];

const Footer = () => (
  <footer className="footer-dark section-padding">
    <div className="container-wide">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg glow-button flex items-center justify-center font-display font-bold text-primary-foreground text-sm">G</div>
            <span className="font-display font-bold text-xl text-primary-foreground tracking-tight">GETWAY</span>
          </div>
          <p className="text-[hsl(220,20%,50%)] text-sm leading-relaxed">
            AI-Powered Business Automation Platform for the modern enterprise.
          </p>
        </div>
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold text-primary-foreground text-sm mb-4">{section.title}</h4>
            <ul className="space-y-2.5">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-[hsl(220,20%,50%)] hover:text-primary-foreground text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[hsl(225,30%,12%)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[hsl(220,20%,40%)] text-sm">© {new Date().getFullYear()} GETWAY. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link to="#" className="text-[hsl(220,20%,40%)] hover:text-primary-foreground text-sm transition-colors">Privacy</Link>
          <Link to="#" className="text-[hsl(220,20%,40%)] hover:text-primary-foreground text-sm transition-colors">Terms</Link>
          <Link to="#" className="text-[hsl(220,20%,40%)] hover:text-primary-foreground text-sm transition-colors">Security</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
