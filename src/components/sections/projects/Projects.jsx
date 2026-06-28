import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import Button from "../../ui/Button";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projects";

function Projects() {
  // Show only first 2 projects on home page
  const featuredProjects = projects.slice(0, 2);

  return (
    <section id="projects" className="py-16 md:py-20 bg-white dark:bg-slate-950 transition-colors">
      <Container>
        <SectionTitle
          subtitle="Réalisations"
          title="Projets Réalisés"
          description="Découvrez mes projets de développement web avec Laravel et React, incluant des applications de gestion complètes."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        {projects.length > 2 && (
          <div className="text-center">
            <Link to="/projects">
              <Button>Voir Tous les Projets</Button>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Projects;
