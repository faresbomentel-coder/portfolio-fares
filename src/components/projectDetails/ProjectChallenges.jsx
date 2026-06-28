import Container from "../ui/Container";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

function ProjectChallenges({ project }) {
  const challenges = project.challenges || [];

  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900 transition-colors">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
            Défis Techniques
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Les principaux défis rencontrés et les solutions mises en œuvre.
          </p>

          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-orange-500 dark:border-l-orange-400"
              >
                <div className="space-y-4">
                  <Badge>Défi {index + 1}</Badge>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {challenge.title}
                  </h3>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                      Problème
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4 border border-green-100 dark:border-green-900/50">
                    <h4 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2 uppercase tracking-wide">
                      Solution
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectChallenges;
