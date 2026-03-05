import AnimatedSection from "./AnimatedSection";

interface Props {
  badge?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeader = ({ badge, title, description, light }: Props) => (
  <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
    {badge && (
      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 ${
        light
          ? "bg-electric/10 text-electric border border-electric/20"
          : "bg-electric/10 text-electric-glow border border-electric/20"
      }`}>
        {badge}
      </span>
    )}
    <h2 className={`heading-lg mb-4 ${light ? "text-foreground" : "gradient-text-white"}`}>{title}</h2>
    {description && (
      <p className={`text-body-lg ${light ? "text-muted-foreground" : "text-[hsl(220,20%,60%)]"}`}>{description}</p>
    )}
  </AnimatedSection>
);

export default SectionHeader;
