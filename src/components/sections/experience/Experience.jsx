import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import ExperienceTimeline from "./ExperienceTimeline";
import EducationCard from "./EducationCard";
import JourneyTimeline from "./JourneyTimeline";
import {
  professionalExperiences,
  otherExperiences,
  education,
  journey,
  getTextileExperience,
} from "../../../data/experience";

function Experience() {
  const yearsOfExperience = getTextileExperience();

  return (
    <section id="experience" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <Container>
        <SectionTitle
          subtitle="Parcours"
          title="Expérience & Formation"
          description={`${yearsOfExperience} ans d'expérience dans le secteur textile, complétés par une formation en développement web Full Stack.`}
        />

        {/* Professional Experience */}
        <div className="mb-16">
          <ExperienceTimeline
            experiences={professionalExperiences}
            otherExperiences={otherExperiences}
          />
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center">
            Formation Académique
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <EducationCard key={edu.id} education={edu} index={index} />
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto">
          <JourneyTimeline journey={journey} />
        </div>
      </Container>
    </section>
  );
}

export default Experience;
