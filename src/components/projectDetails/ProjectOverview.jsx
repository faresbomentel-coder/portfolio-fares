import Container from "../ui/Container";
import { FaExclamationTriangle, FaCheck } from "react-icons/fa";
import Card from "../ui/Card";

function ProjectOverview({ project }) {
  const { overview, problem, solution } = project;

  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900 transition-colors">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Vue d'Ensemble
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              {overview}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <Card className="bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500 dark:bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaExclamationTriangle className="text-white text-2xl" />{" "}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                    Problématique
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {problem}
                  </p>
                </div>
              </div>
            </Card>

            {/* Solution */}
            <Card className="bg-green-50 dark:bg-green-950/30 border-green-100 dark:border-green-900/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 dark:bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-white text-2xl" />{" "}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                    Solution Apportée
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {solution}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectOverview;
