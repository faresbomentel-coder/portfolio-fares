import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import TechCard from "./TechCard";
import { techStack } from "../../../data/techStack";

function TechStack() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-slate-950 transition-colors">
      <Container>
        <SectionTitle
          subtitle="Technologies"
          title="Stack Technique"
          description="Un aperçu rapide des principales technologies que j'utilise pour développer des applications web modernes."
        />

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <TechCard
              key={tech.id}
              icon={tech.icon}
              name={tech.name}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TechStack;
