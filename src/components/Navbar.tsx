import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ExternalLink, Brain, Phone as PhoneIcon, Bot, GraduationCap, BookOpen, MessageSquare, Radio, Headphones, Mail, Megaphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

const productsMenu = [
  { icon: Brain, label: "AI CRM Platform", path: "/ai-crm", desc: "Lead management and automation" },
  { icon: PhoneIcon, label: "CPaaS Platform", path: "/platform", desc: "Communication infrastructure" },
  { icon: Bot, label: "AI Voice Agent", path: "/ai-call-automation", desc: "Automated calling workflows" },
  { icon: GraduationCap, label: "School ERP", path: "/schoolerp", desc: "Education operations platform" },
  { icon: BookOpen, label: "Community & LMS", path: "/community", desc: "Courses and member communities" },
];

const marketingMenu = [
  { icon: MessageSquare, label: "WhatsApp Marketing", path: "/whatsapp-marketing", desc: "WhatsApp engagement" },
  { icon: Radio, label: "SMS / RCS Messaging", path: "/sms-rcs-messaging", desc: "Rich messaging campaigns" },
  { icon: Megaphone, label: "Voice Broadcasting", path: "/voice-broadcasting", desc: "Mass voice campaigns" },
  { icon: Mail, label: "Email Marketing", path: "/email-marketing", desc: "Email automation" },
  { icon: Headphones, label: "IVR System", path: "/ivr-system", desc: "Smart call routing" },
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

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    setMarketingOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) setProductsOpen(false);
      if (marketingRef.current && !marketingRef.current.contains(e.target as Node)) setMarketingOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const linkClass = (path: string) =>
    `px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${location.pathname === path ? "text-primary-foreground bg-teal/10" : "text-[hsl(200,20%,65%)] hover:text-primary-foreground hover:bg-[hsl(200,25%,13%)]"}`;

  const DropdownMenu = ({ items }: { items: typeof productsMenu }) => (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute left-0 top-full z-50 mt-2 w-72 rounded-xl glass-card p-2 shadow-2xl"
    >
      {items.map((item) => (
        <Link key={item.label} to={item.path} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[hsl(200,25%,13%)]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal/10"><item.icon size={16} className="text-teal-light" /></div>
          <div>
            <div className="text-sm font-medium text-primary-foreground">{item.label}</div>
            <div className="text-xs text-[hsl(200,20%,50%)]">{item.desc}</div>
          </div>
        </Link>
      ))}
    </motion.div>
  );

  return (
    <nav className="nav-dark fixed left-0 right-0 top-0 z-50">
      <div className="container-wide flex h-16 items-center justify-between md:h-[72px]">
        <Link to="/" className="flex shrink-0 items-center py-2">
          <BrandLogo className="h-10 w-auto object-contain md:h-11" priority />
        </Link>

        <div className="hidden xl:flex items-center gap-0.5">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/about" className={linkClass("/about")}>About Us</Link>

          <div ref={productsRef} className="relative">
            <button onClick={() => { setProductsOpen(!productsOpen); setMarketingOpen(false); }} className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${productsOpen ? "bg-teal/10 text-primary-foreground" : "text-[hsl(200,20%,65%)] hover:bg-[hsl(200,25%,13%)] hover:text-primary-foreground"}`}>
              Platform & Products <ChevronDown size={14} className={`transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>{productsOpen && <DropdownMenu items={productsMenu} />}</AnimatePresence>
          </div>

          <div ref={marketingRef} className="relative">
            <button onClick={() => { setMarketingOpen(!marketingOpen); setProductsOpen(false); }} className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${marketingOpen ? "bg-teal/10 text-primary-foreground" : "text-[hsl(200,20%,65%)] hover:bg-[hsl(200,25%,13%)] hover:text-primary-foreground"}`}>
              Marketing & Automation <ChevronDown size={14} className={`transition-transform ${marketingOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>{marketingOpen && <DropdownMenu items={marketingMenu} />}</AnimatePresence>
          </div>

          <Link to="/founder" className={linkClass("/founder")}>Founder</Link>
          <Link to="/channelpartner" className={linkClass("/channelpartner")}>Channel Partner</Link>
          <Link to="/demo" className={linkClass("/demo")}>Demo</Link>
          <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
        </div>

        <div className="hidden xl:flex items-center gap-3">
          <a href="https://login.getwaycrm.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-[hsl(200,20%,65%)] transition-colors hover:bg-[hsl(200,25%,13%)] hover:text-primary-foreground">
            Login <ExternalLink size={13} />
          </a>
          <Link to="/demo" className="glow-button rounded-lg px-4 py-2 text-sm font-medium text-primary-foreground">Book Demo</Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden p-2 text-primary-foreground" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="xl:hidden max-h-[80vh] overflow-y-auto border-t border-[hsl(200,25%,14%)] gradient-section-dark">
            <div className="container-wide flex flex-col gap-1 py-4">
              <Link to="/" className="rounded-lg px-4 py-3 text-sm font-medium text-[hsl(200,20%,65%)] transition-colors hover:text-primary-foreground">Home</Link>
              <Link to="/about" className="rounded-lg px-4 py-3 text-sm font-medium text-[hsl(200,20%,65%)] transition-colors hover:text-primary-foreground">About Us</Link>

              <button onClick={() => setMobileProducts(!mobileProducts)} className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[hsl(200,20%,65%)] transition-colors hover:text-primary-foreground">
                Platform & Products <ChevronDown size={14} className={`transition-transform ${mobileProducts ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileProducts && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4">
                    {productsMenu.map((item) => (
                      <Link key={item.label} to={item.path} className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-[hsl(200,20%,55%)] transition-colors hover:text-primary-foreground">
                        <item.icon size={14} /> {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <button onClick={() => setMobileMarketing(!mobileMarketing)} className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[hsl(200,20%,65%)] transition-colors hover:text-primary-foreground">
                Marketing & Automation <ChevronDown size={14} className={`transition-transform ${mobileMarketing ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileMarketing && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4">
                    {marketingMenu.map((item) => (
                      <Link key={item.label} to={item.path} className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-[hsl(200,20%,55%)] transition-colors hover:text-primary-foreground">
                        <item.icon size={14} /> {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link to="/founder" className="rounded-lg px-4 py-3 text-sm font-medium text-[hsl(200,20%,65%)] transition-colors hover:text-primary-foreground">Founder</Link>
              <Link to="/channelpartner" className="rounded-lg px-4 py-3 text-sm font-medium text-[hsl(200,20%,65%)] transition-colors hover:text-primary-foreground">Channel Partner</Link>
              <Link to="/demo" className="rounded-lg px-4 py-3 text-sm font-medium text-[hsl(200,20%,65%)] transition-colors hover:text-primary-foreground">Demo</Link>
              <Link to="/contact" className="rounded-lg px-4 py-3 text-sm font-medium text-[hsl(200,20%,65%)] transition-colors hover:text-primary-foreground">Contact</Link>

              <div className="mt-4 flex flex-col gap-2 border-t border-[hsl(200,25%,14%)] pt-4">
                <a href="https://login.getwaycrm.com" target="_blank" rel="noopener noreferrer" className="outline-button-hero inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-3 text-center text-sm font-medium">
                  Client Login <ExternalLink size={13} />
                </a>
                <Link to="/demo" className="glow-button rounded-lg px-4 py-3 text-center text-sm font-medium text-primary-foreground">Book Demo</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
