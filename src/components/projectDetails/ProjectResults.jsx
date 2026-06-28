import Container from "../ui/Container";
import Card from "../ui/Card";
import { HiTrendingUp } from "react-icons/hi";

function ProjectResults({ project }) {
  const { results } = project;

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
            Résultats & Impact
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Les résultats concrets et l'impact du projet sur l'entreprise.
          </p>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-100 dark:border-green-900/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 dark:bg-green-600 rounded-lg flex items-center justify-center">
                <HiTrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Bénéfices Mesurables
              </h3>
            </div>

            <ul className="space-y-4">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 dark:bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed flex-1">
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
