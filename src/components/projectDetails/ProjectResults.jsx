import Container from "../ui/Container";
import Card from "../ui/Card";
import { HiTrendingUp } from "react-icons/hi";

function ProjectResults({ project }) {
  const { results } = project;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Résultats & Impact
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Les résultats concrets et l'impact du projet sur l'entreprise.
          </p>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <HiTrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Bénéfices Mesurables
              </h3>
            </div>

            <ul className="space-y-4">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-slate-700 leading-relaxed flex-1">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default ProjectResults;
