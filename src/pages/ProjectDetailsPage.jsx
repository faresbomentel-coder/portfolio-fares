import { useParams, Link } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import ProjectDetails from "../components/projectDetails/ProjectDetails";
import Button from "../components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";

function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  // Project not found
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center px-6 max-w-md">
          <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🔍</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Projet Non Trouvé
          </h1>
          <p className="text-slate-600 mb-8">
            Le projet que vous recherchez n'existe pas ou a été supprimé.
          </p>
          <Link to="/projects">
            <Button>
              <FaArrowLeft className="mr-2" />
              Retour aux Projets
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectDetails project={project} />;
}

export default ProjectDetailsPage;
