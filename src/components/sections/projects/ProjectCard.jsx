import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Card from "../../ui/Card";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

function ProjectCard({ project, index }) {
  const {
    slug,
    title,
    company,
    shortDescription,
    technologies,
    githubUrl,
    liveUrl,
  } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-sm text-blue-600 font-semibold">{company}</p>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
          {shortDescription}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 6).map((tech, idx) => (
              <Badge key={idx} className="text-xs">
                {tech.name}
              </Badge>
            ))}
            {technologies.length > 6 && (
              <Badge className="text-xs bg-slate-100 text-slate-600">
                +{technologies.length - 6}
              </Badge>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          {/* View Details Button */}
          <Link to={`/projects/${slug}`} className="flex-1">
            <Button className="w-full">Voir Détails</Button>
          </Link>

          {/* GitHub Link */}
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Button variant="outline" className="w-full sm:w-auto">
                <FaGithub className="mr-2" />
                GitHub
              </Button>
            </a>
          ) : (
            <Button
              variant="outline"
              className="w-full sm:w-auto opacity-50 cursor-not-allowed"
              disabled
            >
              <FaGithub className="mr-2" />
              Privé
            </Button>
          )}

          {/* Live Demo Link */}
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Button variant="outline" className="w-full sm:w-auto">
                <FaExternalLinkAlt className="mr-2" />
                Demo
              </Button>
            </a>
          ) : (
            <Button
              variant="outline"
              className="w-full sm:w-auto opacity-50 cursor-not-allowed hidden sm:flex"
              disabled
            >
              <FaExternalLinkAlt className="mr-2" />
              Bientôt
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
