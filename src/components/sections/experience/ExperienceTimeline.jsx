import ExperienceCard from "./ExperienceCard";
import Badge from "../../ui/Badge";

function ExperienceTimeline({ experiences, otherExperiences }) {
  return (
    <div>
      {/* Professional Experiences */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          Expérience Professionnelle Textile
        </h3>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Other Experiences */}
      {otherExperiences && otherExperiences.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Autres Expériences
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
            Expériences complémentaires acquises dans d'autres domaines
            professionnels.
          </p>
          <div className="flex flex-wrap gap-3">
            {otherExperiences.map((exp) => (
              <Badge
                key={exp.id}
                className="text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2"
              >
                {exp.name}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperienceTimeline;
