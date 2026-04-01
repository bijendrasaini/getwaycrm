import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919255522544"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
    style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="text-white" />
  </a>
);

export default WhatsAppButton;
