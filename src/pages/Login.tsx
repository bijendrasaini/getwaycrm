import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import getwayLogo from "@/assets/getway-logo.jpg";

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
      {/* Left */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="gradient-orb gradient-orb-teal w-[400px] h-[400px] absolute top-1/3 left-1/4" />
        </div>
        <div className="relative z-10 max-w-md">
          <Link to="/">
            <img src={getwayLogo} alt="GETWAY" className="h-10 w-auto object-contain brightness-110 mb-10" />
          </Link>
          <h1 className="heading-lg gradient-text-white mb-6">Access the GETWAY Automation Platform</h1>
          <p className="text-[hsl(200,20%,50%)] text-base leading-relaxed">
            Manage your leads, automation systems and communication infrastructure from one intelligent dashboard.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden mb-8">
            <Link to="/">
              <img src={getwayLogo} alt="GETWAY" className="h-9 w-auto object-contain brightness-110 mb-4" />
            </Link>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h2 className="heading-md gradient-text-white mb-2">Welcome back</h2>
            <p className="text-[hsl(200,20%,50%)] text-sm mb-8">Sign in to your GETWAY account</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-[hsl(200,20%,60%)] text-sm mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[hsl(200,30%,8%)] border border-[hsl(200,25%,16%)] text-primary-foreground text-sm focus:outline-none focus:border-teal/50 transition-colors placeholder:text-[hsl(200,20%,30%)]"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-[hsl(200,20%,60%)] text-sm mb-1.5 block">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[hsl(200,30%,8%)] border border-[hsl(200,25%,16%)] text-primary-foreground text-sm focus:outline-none focus:border-teal/50 transition-colors placeholder:text-[hsl(200,20%,30%)] pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(200,20%,40%)] hover:text-primary-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button type="button" className="text-teal-light text-sm hover:underline">Forgot Password?</button>
              </div>

              <button type="submit" className="glow-button w-full py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center justify-center gap-2">
                Login <ArrowRight size={16} />
              </button>
            </form>

            <p className="text-[hsl(200,20%,45%)] text-sm text-center mt-6">
              Don't have an account?{" "}
              <Link to="/demo" className="text-teal-light hover:underline">Request Access</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
