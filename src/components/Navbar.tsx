import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Platform", path: "/platform" },
  { label: "AI CRM", path: "/ai-crm" },
  { label: "Solutions", path: "/solutions" },
  { label: "Partners", path: "/partners" },
  { label: "About", path: "/about" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="nav-dark fixed top-0 left-0 right-0 z-50">
      <div className="container-wide flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg glow-button flex items-center justify-center font-display font-bold text-primary-foreground text-sm">G</div>
          <span className="font-display font-bold text-xl text-primary-foreground tracking-tight">GETWAY</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary-foreground bg-electric/10"
                  : "text-[hsl(220,20%,70%)] hover:text-primary-foreground hover:bg-[hsl(225,30%,15%)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="outline-button-hero px-4 py-2 rounded-lg text-sm font-medium">
            Request Demo
          </Link>
          <Link to="/pricing" className="glow-button px-4 py-2 rounded-lg text-sm font-medium text-primary-foreground">
            Get Started
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-primary-foreground p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden gradient-section-dark border-t border-[hsl(225,30%,15%)]"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-[hsl(220,20%,70%)] hover:text-primary-foreground hover:bg-[hsl(225,30%,15%)] text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[hsl(225,30%,15%)]">
                <Link to="/contact" onClick={() => setOpen(false)} className="outline-button-hero px-4 py-3 rounded-lg text-sm font-medium text-center">
                  Request Demo
                </Link>
                <Link to="/pricing" onClick={() => setOpen(false)} className="glow-button px-4 py-3 rounded-lg text-sm font-medium text-primary-foreground text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
