import AnimatedSection from "@/components/AnimatedSection";
import founderPhoto from "@/assets/bijendra-saini.png";

const FounderSection = () => (
  <section className="gradient-section-alt section-padding">
    <div className="container-wide">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-2 max-w-sm mx-auto lg:mx-0">
            <img
              src={founderPhoto}
              alt="Bijendra Saini — Founder & CEO of GETWAY Technology"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal/10 text-teal-light border border-teal/20">
            Founder & Leadership
          </span>
          <h2 className="heading-md gradient-text-white mb-2">Bijendra Saini</h2>
          <p className="text-teal-light text-sm font-semibold mb-6">Founder & CEO</p>
          <div className="space-y-4 text-[hsl(200,20%,55%)] text-sm leading-relaxed">
            <p>
              Bijendra Saini is the Founder & CEO of GETWAY Technology and a business growth mentor focused on helping organizations scale using digital automation, AI tools, and unified communication platforms.
            </p>
            <p>
              His vision is to empower businesses with intelligent technology that simplifies operations and accelerates growth.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default FounderSection;
