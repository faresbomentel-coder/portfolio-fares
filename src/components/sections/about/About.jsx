import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import AboutContent from "./AboutContent";
import AboutInfo from "./AboutInfo";
import AboutAvailability from "./AboutAvailability";

function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <Container>
        <SectionTitle
          subtitle="Qui Suis-Je"
          title="À Propos"
          description="Découvrez mon parcours, mes compétences et ma motivation à rejoindre votre équipe."
        />

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-10">
          {/* Left Column: Content */}
          <div className="xl:col-span-2">
            <AboutContent />
          </div>

          {/* Right Column: Info & Availability */}
          <div className="space-y-6">
            <AboutInfo />
            <AboutAvailability />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
