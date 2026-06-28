import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

function ProjectHero({ project }) {
  const { title, subtitle, company, technologies, githubUrl, liveUrl } =
    project;

  return (
    <section className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Retour aux Projets
        </Link>

        {/* Company */}
        <p className="text-cyan-100 font-semibold mb-3 uppercase tracking-wider text-sm">
          {company}
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>

        {/* Subtitle */}
        <p className="text-xl text-cyan-50 mb-8 max-w-3xl">{subtitle}</p>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-cyan-100 mb-3 uppercase tracking-wider">
            Technologies Utilisées
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <Badge
                key={idx}
                className="bg-white/20 text-white border-white/30"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-blue-600 hover:bg-cyan-50">
                <FaGithub className="mr-2" size={18} />
                Voir sur GitHub
              </Button>
            </a>
          ) : (
            <Button
              className="bg-white/20 text-white cursor-not-allowed opacity-50"
              disabled
            >
              <FaGithub className="mr-2" size={18} />
              Projet Privé
            </Button>
          )}

          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <FaExternalLinkAlt className="mr-2" />
                Démo Live
              </Button>
            </a>
          ) : (
            <Button
              variant="outline"
              className="border-white/30 text-white/50 cursor-not-allowed"
              disabled
            >
              <FaExternalLinkAlt className="mr-2" />
              Bientôt Disponible
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectHero;
