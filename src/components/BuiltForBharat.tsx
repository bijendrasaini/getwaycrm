import clsx from "clsx";

type BuiltForBharatProps = {
  className?: string;
  centered?: boolean;
};

const BuiltForBharat = ({ className, centered = false }: BuiltForBharatProps) => (
  <div className={clsx("flex", centered && "justify-center", className)}>
    <div className="inline-flex items-center rounded-full border border-[hsl(200,25%,18%)] bg-[hsl(200,30%,10%)] px-4 py-2 shadow-[0_0_30px_hsl(var(--teal)/0.08)]">
      <span
        className="font-display text-sm font-semibold tracking-[0.08em] uppercase"
        style={{
          backgroundImage: "linear-gradient(90deg, #FF9933 0%, #F5F7FA 48%, #138808 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Built for Bharat
      </span>
    </div>
  </div>
);

export default BuiltForBharat;
