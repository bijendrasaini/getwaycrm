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
            Founder & CEO
          </span>
          <h2 className="heading-md gradient-text-white mb-2">Bijendra Saini</h2>
          <p className="text-teal-light text-sm font-semibold mb-6">
            Visionary Entrepreneur | AI Automation Strategist | Business Growth Trainer
          </p>
          <div className="space-y-4 text-[hsl(200,20%,55%)] text-sm leading-relaxed">
            <p>
              Bijendra Saini is the Founder & CEO of GETWAY Technology, a next-generation AI-powered business automation platform designed to help businesses simplify operations, automate workflows, and accelerate growth.
            </p>
            <p>
              With over 20 years of experience in technology, communication platforms, and digital business solutions, Bijendra has helped organizations leverage CRM systems, automation tools, and AI-driven communication platforms to scale faster and operate more efficiently.
            </p>
            <p>
              Alongside his technology leadership, Bijendra Saini is also a highly respected Manifestation Mentor and Business Growth Trainer who has inspired thousands of entrepreneurs and professionals to unlock their true potential and build successful businesses.
            </p>
            <p>
              Known for his ability to simplify complex concepts and turn vision into practical action, he empowers people to create businesses and lives filled with abundance, success, and purpose.
            </p>
            <p>
              His vision with GETWAY AI CRM is to build an intelligent platform that replaces multiple business tools with one powerful AI automation system.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default FounderSection;
