import Container from "../ui/Container";
import Card from "../ui/Card";

function ProjectArchitecture({ project }) {
  const architecture = project.architecture || [];

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
            {Array.isArray(architecture) ? (
              <div className="flex flex-col items-center gap-3">
                {architecture.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center w-full"
                  >
                    <div className="w-full max-w-md px-6 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-semibold text-center">
                      {item}
                    </div>

                    {index < architecture.length - 1 && (
                      <span className="text-cyan-500 dark:text-cyan-400 text-2xl my-1">
                        ↓
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                {architecture}
              </p>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default ProjectArchitecture;
