import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ExternalLink, Brain, Phone as PhoneIcon, Bot, Globe, GraduationCap, Megaphone, MessageSquare, Radio, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import getwayLogo from "@/assets/getway-logo.jpg";

const productsMenu = [
  { icon: Brain, label: "AI CRM", path: "/ai-crm", desc: "Intelligent customer management" },
  { icon: PhoneIcon, label: "CPaaS", path: "/platform", desc: "Communication platform" },
  { icon: Bot, label: "AI Agents", path: "/platform", desc: "Conversational AI voice agents" },
  { icon: Globe, label: "AI Websites", path: "/solutions", desc: "Smart funnels & websites" },
  { icon: GraduationCap, label: "AI School ERP", path: "/solutions", desc: "Education management" },
];

const marketingMenu = [
  { icon: PhoneIcon, label: "AI Call Automation", path: "/platform", desc: "Automated outbound calling" },
  { icon: MessageSquare, label: "WhatsApp Business API", path: "/platform", desc: "WhatsApp engagement" },
  { icon: Radio, label: "SMS/RCS Messaging", path: "/platform", desc: "Rich messaging campaigns" },
  { icon: Headphones, label: "IVR Calling System", path: "/platform", desc: "Smart call routing" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [marketingOpen, setMarketingOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [mobileMarketing, setMobileMarketing] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const marketingRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); setProductsOpen(false); setMarketingOpen(false); }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) setProductsOpen(false);
      if (marketingRef.current && !marketingRef.current.contains(e.target as Node)) setMarketingOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const DropdownMenu = ({ items }: { items: typeof productsMenu }) => (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
      className="absolute top-full left-0 mt-2 w-72 rounded-xl glass-card p-2 shadow-2xl z-50">
      {items.map((r) => (
        <Link key={r.label} to={r.path} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[hsl(200,25%,13%)] transition-colors group">
          <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center shrink-0"><r.icon size={16} className="text-teal-light" /></div>
          <div>
            <div className="text-primary-foreground text-sm font-medium">{r.label}</div>
            <div className="text-[hsl(200,20%,50%)] text-xs">{r.desc}</div>
          </div>
        </Link>
      ))}
    </motion.div>
  );

  return (
    <nav className="nav-dark fixed top-0 left-0 right-0 z-50">
      <div className="container-wide flex items-center justify-between h-16 md:h-[68px]">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={getwayLogo} alt="GETWAY" className="h-9 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-0.5">
          <div ref={productsRef} className="relative">
            <button onClick={() => { setProductsOpen(!productsOpen); setMarketingOpen(false); }}
              className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors inline-flex items-center gap-1 ${productsOpen ? "text-primary-foreground bg-teal/10" : "text-[hsl(200,20%,65%)] hover:text-primary-foreground hover:bg-[hsl(200,25%,13%)]"}`}>
              Products <ChevronDown size={14} className={`transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>{productsOpen && <DropdownMenu items={productsMenu} />}</AnimatePresence>
          </div>

          <div ref={marketingRef} className="relative">
            <button onClick={() => { setMarketingOpen(!marketingOpen); setProductsOpen(false); }}
              className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors inline-flex items-center gap-1 ${marketingOpen ? "text-primary-foreground bg-teal/10" : "text-[hsl(200,20%,65%)] hover:text-primary-foreground hover:bg-[hsl(200,25%,13%)]"}`}>
              Marketing & Automation <ChevronDown size={14} className={`transition-transform ${marketingOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>{marketingOpen && <DropdownMenu items={marketingMenu} />}</AnimatePresence>
          </div>

          <Link to="/demo" className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${location.pathname === "/demo" ? "text-primary-foreground bg-teal/10" : "text-[hsl(200,20%,65%)] hover:text-primary-foreground hover:bg-[hsl(200,25%,13%)]"}`}>Demo</Link>
          <Link to="/partners" className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${location.pathname === "/partners" ? "text-primary-foreground bg-teal/10" : "text-[hsl(200,20%,65%)] hover:text-primary-foreground hover:bg-[hsl(200,25%,13%)]"}`}>Partners</Link>
          <Link to="/pricing" className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${location.pathname === "/pricing" ? "text-primary-foreground bg-teal/10" : "text-[hsl(200,20%,65%)] hover:text-primary-foreground hover:bg-[hsl(200,25%,13%)]"}`}>Pricing</Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden xl:flex items-center gap-3">
          <a href="https://login.getwaycrm.com" target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-medium text-[hsl(200,20%,65%)] hover:text-primary-foreground hover:bg-[hsl(200,25%,13%)] transition-colors inline-flex items-center gap-1.5">
            Login <ExternalLink size={13} />
          </a>
          <Link to="/demo" className="glow-button px-4 py-2 rounded-lg text-sm font-medium text-primary-foreground">Book Demo</Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden text-primary-foreground p-2">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="xl:hidden gradient-section-dark border-t border-[hsl(200,25%,14%)] max-h-[80vh] overflow-y-auto">
            <div className="container-wide py-4 flex flex-col gap-1">
              {/* Products collapsible */}
              <button onClick={() => setMobileProducts(!mobileProducts)} className="px-4 py-3 rounded-lg text-[hsl(200,20%,65%)] hover:text-primary-foreground text-sm font-medium transition-colors flex items-center justify-between">
                Products <ChevronDown size={14} className={`transition-transform ${mobileProducts ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileProducts && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4">
                    {productsMenu.map((r) => (
                      <Link key={r.label} to={r.path} className="px-4 py-2.5 rounded-lg text-[hsl(200,20%,55%)] hover:text-primary-foreground text-sm transition-colors flex items-center gap-2">
                        <r.icon size={14} /> {r.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Marketing collapsible */}
              <button onClick={() => setMobileMarketing(!mobileMarketing)} className="px-4 py-3 rounded-lg text-[hsl(200,20%,65%)] hover:text-primary-foreground text-sm font-medium transition-colors flex items-center justify-between">
                Marketing & Automation <ChevronDown size={14} className={`transition-transform ${mobileMarketing ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileMarketing && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4">
                    {marketingMenu.map((r) => (
                      <Link key={r.label} to={r.path} className="px-4 py-2.5 rounded-lg text-[hsl(200,20%,55%)] hover:text-primary-foreground text-sm transition-colors flex items-center gap-2">
                        <r.icon size={14} /> {r.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link to="/demo" className="px-4 py-3 rounded-lg text-[hsl(200,20%,65%)] hover:text-primary-foreground text-sm font-medium transition-colors">Demo</Link>
              <Link to="/partners" className="px-4 py-3 rounded-lg text-[hsl(200,20%,65%)] hover:text-primary-foreground text-sm font-medium transition-colors">Partners</Link>
              <Link to="/pricing" className="px-4 py-3 rounded-lg text-[hsl(200,20%,65%)] hover:text-primary-foreground text-sm font-medium transition-colors">Pricing</Link>

              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[hsl(200,25%,14%)]">
                <a href="https://login.getwaycrm.com" target="_blank" rel="noopener noreferrer" className="outline-button-hero px-4 py-3 rounded-lg text-sm font-medium text-center inline-flex items-center justify-center gap-1.5">
                  Client Login <ExternalLink size={13} />
                </a>
                <Link to="/demo" className="glow-button px-4 py-3 rounded-lg text-sm font-medium text-primary-foreground text-center">Book Demo</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
