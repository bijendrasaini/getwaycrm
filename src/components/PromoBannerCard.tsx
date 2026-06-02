import { motion } from "framer-motion";
import clsx from "clsx";

type PromoBannerCardProps = {
  src: string;
  alt: string;
  className?: string;
};

const PromoBannerCard = ({ src, alt, className }: PromoBannerCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45 }}
    className={clsx("overflow-hidden rounded-2xl border border-[hsl(200,25%,16%)] bg-[hsl(200,30%,8%)] shadow-[0_20px_80px_hsl(var(--teal)/0.10)]", className)}
  >
    <img src={src} alt={alt} className="h-auto w-full object-cover" loading="lazy" decoding="async" />
  </motion.div>
);

export default PromoBannerCard;
