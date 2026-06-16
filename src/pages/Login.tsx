import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://login.getwaycrm.com", "_blank");
  };

  return (
    <div className="min-h-screen gradient-hero flex">
      <div className="relative hidden items-center justify-center p-16 lg:flex lg:w-1/2">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="gradient-orb gradient-orb-teal absolute left-1/4 top-1/3 h-[400px] w-[400px]" />
        </div>
        <div className="relative z-10 max-w-md">
          <Link to="/">
            <BrandLogo className="mb-10 h-12 w-auto object-contain" priority />
          </Link>
          <h1 className="heading-lg gradient-text-white mb-6">Access the GETWAY AI Platform</h1>
          <p className="text-base leading-relaxed text-[hsl(200,20%,50%)]">
            Manage your leads, communication systems, and automation workflows from one intelligent dashboard.
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Link to="/">
              <BrandLogo className="mb-4 h-10 w-auto object-contain" priority />
            </Link>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h2 className="heading-md gradient-text-white mb-2">Welcome back</h2>
            <p className="mb-8 text-sm text-[hsl(200,20%,50%)]">Sign in to your GETWAY account</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm text-[hsl(200,20%,60%)]">Email</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-[hsl(200,25%,16%)] bg-[hsl(200,30%,8%)] px-4 py-3 text-sm text-primary-foreground placeholder:text-[hsl(200,20%,30%)] transition-colors focus:border-teal/50 focus:outline-none" placeholder="you@company.com" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm text-[hsl(200,20%,60%)]">Password</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-[hsl(200,25%,16%)] bg-[hsl(200,30%,8%)] px-4 py-3 pr-12 text-sm text-primary-foreground placeholder:text-[hsl(200,20%,30%)] transition-colors focus:border-teal/50 focus:outline-none" placeholder="••••••••" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(200,20%,40%)] transition-colors hover:text-primary-foreground">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button type="button" className="text-sm text-teal-light hover:underline">Forgot Password?</button>
              </div>

              <button type="submit" className="glow-button inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-semibold text-primary-foreground">
                Login <ArrowRight size={16} />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[hsl(200,20%,45%)]">
              Don&apos;t have an account? <Link to="/demo" className="text-teal-light hover:underline">Request Access</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
