import Container from "../ui/Container";
import Card from "../ui/Card";

function ProjectArchitecture({ project }) {
  const { architecture } = project;

  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900 transition-colors">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
            Architecture Technique
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Structure et organisation technique du projet.
          </p>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 border-blue-100 dark:border-slate-700">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-6">
                {architecture}
              </p>

              {/* Architecture Diagram Placeholder */}
              <div className="bg-white dark:bg-slate-950 rounded-lg p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 text-center">
                <div className="text-slate-400 dark:text-slate-500 mb-4">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  Diagramme d'architecture à venir
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default ProjectArchitecture;
