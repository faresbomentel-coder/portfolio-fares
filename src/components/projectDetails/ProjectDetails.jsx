import ProjectHero from "./ProjectHero";
import ProjectOverview from "./ProjectOverview";
import ProjectFeatures from "./ProjectFeatures";
import ProjectArchitecture from "./ProjectArchitecture";
import ProjectDatabase from "./ProjectDatabase";
import ProjectChallenges from "./ProjectChallenges";
import ProjectResults from "./ProjectResults";
import ProjectGallery from "./ProjectGallery";

function ProjectDetails({ project }) {
  return (
    <div className="min-h-screen">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectFeatures project={project} />
      <ProjectArchitecture project={project} />
      <ProjectDatabase project={project} />
      <ProjectChallenges project={project} />
      <ProjectResults project={project} />
      <ProjectGallery project={project} />
    </div>
  );
}

export default ProjectDetails;
