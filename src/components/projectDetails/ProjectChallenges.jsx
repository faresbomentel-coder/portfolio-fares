import Container from "../ui/Container";
import Card from "../ui/Card";

function ProjectChallenges({ project }) {
  const { challenges } = project;

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Défis Techniques
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Les principaux défis rencontrés et les solutions mises en œuvre.
          </p>

          {/* Challenges List */}
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-orange-500 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-orange-600">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {challenge.title}
                    </h3>

                    {/* Description */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                        Défi
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <h4 className="text-sm font-semibold text-green-700 mb-2 uppercase tracking-wide flex items-center gap-2">
                        <span>✓</span>
                        Solution
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {challenge.solution}
                      </p>
                    </div>
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
