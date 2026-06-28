import Container from "../ui/Container";
import Card from "../ui/Card";
import { HiCheckCircle } from "react-icons/hi";

function ProjectFeatures({ project }) {
  const { features } = project;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Fonctionnalités Principales
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Les principales fonctionnalités développées pour répondre aux
            besoins du projet.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <div className="flex items-start gap-3 mb-3">
                  <HiCheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <h3 className="text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectFeatures;
