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
          ? "bg-teal/10 text-teal border border-teal/20"
          : "bg-teal/10 text-teal-light border border-teal/20"
      }`}>
        {badge}
      </span>
    )}
    <h2 className={`heading-lg mb-4 ${light ? "text-foreground" : "gradient-text-white"}`}>{title}</h2>
    {description && (
      <p className={`text-body-lg ${light ? "text-muted-foreground" : "text-[hsl(200,20%,55%)]"}`}>{description}</p>
    )}
  </AnimatedSection>
);

export default SectionHeader;
