import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Puzzle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import getwayLogo from "@/assets/getway-logo.jpg";

const mainLinks = [
  { label: "Home", path: "/" },
  { label: "Platform", path: "/platform" },
  { label: "Products", path: "/ai-crm" },
  { label: "Solutions", path: "/solutions" },
  { label: "Pricing", path: "/pricing" },
  { label: "Partners", path: "/partners" },
  { label: "Customers", path: "/customers" },
  { label: "About", path: "/about" },
];

const resourceLinks = [
  { icon: Puzzle, label: "Integrations", path: "/integrations", desc: "Connect your tools" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setResourcesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="nav-dark fixed top-0 left-0 right-0 z-50">
      <div className="container-wide flex items-center justify-between h-16 md:h-[68px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={getwayLogo} alt="GETWAY" className="h-9 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-0.5">
          {mainLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary-foreground bg-teal/10"
                  : "text-[hsl(200,20%,65%)] hover:text-primary-foreground hover:bg-[hsl(200,25%,13%)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Resources dropdown */}
          <div ref={resourcesRef} className="relative">
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors inline-flex items-center gap-1 ${
                resourcesOpen
                  ? "text-primary-foreground bg-teal/10"
                  : "text-[hsl(200,20%,65%)] hover:text-primary-foreground hover:bg-[hsl(200,25%,13%)]"
              }`}
            >
              Resources <ChevronDown size={14} className={`transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-64 rounded-xl glass-card p-2 shadow-2xl"
                >
                  {resourceLinks.map((r) => (
                    <Link
                      key={r.label}
                      to={r.path}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[hsl(200,25%,13%)] transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                        <r.icon size={16} className="text-teal-light" />
                      </div>
                      <div>
                        <div className="text-primary-foreground text-sm font-medium">{r.label}</div>
                        <div className="text-[hsl(200,20%,50%)] text-xs">{r.desc}</div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden xl:flex items-center gap-3">
          <Link to="/contact" className="outline-button-hero px-4 py-2 rounded-lg text-sm font-medium">
            Contact Sales
          </Link>
          <Link to="/book-demo" className="glow-button px-4 py-2 rounded-lg text-sm font-medium text-primary-foreground">
            Request Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden text-primary-foreground p-2">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden gradient-section-dark border-t border-[hsl(200,25%,14%)] max-h-[80vh] overflow-y-auto"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {mainLinks.map((link) => (
                <Link key={link.path} to={link.path} className="px-4 py-3 rounded-lg text-[hsl(200,20%,65%)] hover:text-primary-foreground hover:bg-[hsl(200,25%,13%)] text-sm font-medium transition-colors">
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2 text-[hsl(200,20%,40%)] text-xs font-semibold uppercase tracking-wider mt-2">Resources</div>
              {resourceLinks.map((r) => (
                <Link key={r.label} to={r.path} className="px-4 py-3 rounded-lg text-[hsl(200,20%,65%)] hover:text-primary-foreground hover:bg-[hsl(200,25%,13%)] text-sm font-medium transition-colors flex items-center gap-2">
                  <r.icon size={16} /> {r.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[hsl(200,25%,14%)]">
                <Link to="/contact" className="outline-button-hero px-4 py-3 rounded-lg text-sm font-medium text-center">Contact Sales</Link>
                <Link to="/book-demo" className="glow-button px-4 py-3 rounded-lg text-sm font-medium text-primary-foreground text-center">Request Demo</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
