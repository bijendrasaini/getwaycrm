import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Download, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const totalSlides = 9;

const Presentation = () => {
  const [current, setCurrent] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, totalSlides)), []);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 1)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape") document.exitFullscreen?.();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c >= totalSlides ? 1 : c + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const enterFullscreen = () => {
    document.documentElement.requestFullscreen?.();
  };

  // Touch swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
    setTouchStart(null);
  };

  return (
    <div className="overflow-hidden">
      <section className="gradient-hero pt-32 pb-10 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-wide text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">Product Presentation</span>
            <h1 className="heading-lg gradient-text-white mb-4">GETWAY AI CRM<br />Presentation</h1>
            <p className="text-[hsl(200,20%,55%)] text-sm mb-6">Use arrow keys, swipe, or click arrows to navigate slides.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="gradient-section-dark py-8">
        <div className="container-wide max-w-6xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden border border-[hsl(200,25%,14%)] shadow-2xl bg-[hsl(200,30%,6%)]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="aspect-[16/9] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={`/presentation/slide${current}.jpg`}
                  alt={`Slide ${current} of ${totalSlides}`}
                  className="w-full h-full object-contain absolute inset-0"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  loading="eager"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                    const parent = img.parentElement;
                    if (parent && !parent.querySelector(".slide-fallback")) {
                      const fallback = document.createElement("div");
                      fallback.className = "slide-fallback absolute inset-0 flex items-center justify-center text-[hsl(200,20%,50%)] text-lg";
                      fallback.textContent = "Presentation loading...";
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <button onClick={prev} disabled={current === 1} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary-foreground disabled:opacity-30 hover:bg-teal/20 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => setAutoPlay(!autoPlay)} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary-foreground hover:bg-teal/20 transition-colors">
                {autoPlay ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <span className="text-primary-foreground text-sm font-medium min-w-[80px] text-center">
                {current} / {totalSlides}
              </span>
              <button onClick={next} disabled={current === totalSlides} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary-foreground disabled:opacity-30 hover:bg-teal/20 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Fullscreen */}
            <button onClick={enterFullscreen} className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary-foreground hover:bg-teal/20 transition-colors">
              <Maximize2 size={18} />
            </button>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button onClick={enterFullscreen} className="glow-button px-8 py-3.5 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2">
              <Maximize2 size={18} /> Start Fullscreen Presentation
            </button>
            <a href="/presentation/crm-presentation-getway.pdf" download className="outline-button-hero px-8 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2">
              <Download size={18} /> Download Presentation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
