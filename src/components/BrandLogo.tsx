import logoAsset from "@/assets/getway-ai-logo.png.asset.json";

type BrandLogoProps = {
  alt?: string;
  className?: string;
  priority?: boolean;
};

const BrandLogo = ({
  alt = "GETWAY AI Platform",
  className = "h-10 w-auto object-contain",
  priority = false,
}: BrandLogoProps) => (
  <img
    src={logoAsset.url}
    alt={alt}
    className={className}
    loading={priority ? "eager" : "lazy"}
    decoding="async"
  />
);

export default BrandLogo;
