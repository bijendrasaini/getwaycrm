import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AIChatbot from "@/components/AIChatbot";
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import AiCrm from "./pages/AiCrm";
import Solutions from "./pages/Solutions";
import Partners from "./pages/Partners";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Customers from "./pages/Customers";
import Security from "./pages/Security";
import Career from "./pages/Career";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Demo from "./pages/Demo";
import Faq from "./pages/Faq";
import Integrations from "./pages/Integrations";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Presentation from "./pages/Presentation";
import LiveDemo from "./pages/LiveDemo";
import RefundPolicy from "./pages/RefundPolicy";
import CompliancePolicy from "./pages/CompliancePolicy";
import AiCallAutomation from "./pages/AiCallAutomation";
import WhatsAppMarketing from "./pages/WhatsAppMarketing";
import SmsRcsMessaging from "./pages/SmsRcsMessaging";
import VoiceBroadcasting from "./pages/VoiceBroadcasting";
import EmailMarketing from "./pages/EmailMarketing";
import IvrSystem from "./pages/IvrSystem";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const AppLayout = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/login";

  return (
    <>
      <ScrollToTop />
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/ai-crm" element={<AiCrm />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/security" element={<Security />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/live-demo" element={<LiveDemo />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/compliance-policy" element={<CompliancePolicy />} />
        <Route path="/ai-call-automation" element={<AiCallAutomation />} />
        <Route path="/whatsapp-marketing" element={<WhatsAppMarketing />} />
        <Route path="/sms-rcs-messaging" element={<SmsRcsMessaging />} />
        <Route path="/voice-broadcasting" element={<VoiceBroadcasting />} />
        <Route path="/email-marketing" element={<EmailMarketing />} />
        <Route path="/ivr-system" element={<IvrSystem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isLoginPage && <Footer />}
      {!isLoginPage && <WhatsAppButton />}
      {!isLoginPage && <AIChatbot />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
