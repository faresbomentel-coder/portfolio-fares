import Container from "../ui/Container";
import Card from "../ui/Card";
import { HiCheckCircle } from "react-icons/hi";

function ProjectFeatures({ project }) {
  const features = project.features || [];

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
            Fonctionnalités Principales
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Les principales fonctionnalités développées pour répondre aux
            besoins du projet.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const title =
                typeof feature === "string" ? feature : feature.title;
              const description =
                typeof feature === "string" ? "" : feature.description;

              return (
                <Card key={index} className="h-full">
                  <div className="flex items-start gap-3">
                    <HiCheckCircle
                      className="text-green-500 dark:text-green-400 flex-shrink-0 mt-1"
                      size={24}
                    />

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                        {title}
                      </h3>

                      {description && (
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {description}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectFeatures;
