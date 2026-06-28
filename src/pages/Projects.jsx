import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/sections/projects/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div className="py-12 md:py-16 bg-slate-50 min-h-screen">
      <Container>
        <SectionTitle
          subtitle="Portfolio"
          title="Tous Mes Projets"
          description="Découvrez l'ensemble de mes réalisations en développement web, incluant des applications de gestion complètes avec Laravel et React."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">
              Aucun projet disponible pour le moment.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Projects;
