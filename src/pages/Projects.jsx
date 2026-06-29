import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/sections/projects/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 py-16 md:py-24 transition-colors">
      <Container>
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="Portfolio"
            title="Tous Mes Projets"
            description="Découvrez l'ensemble de mes réalisations en développement web, incluant des applications de gestion complètes avec Laravel et React."
          />

          <div className="mt-12 grid grid-cols-1 xl:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                Aucun projet disponible pour le moment.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
