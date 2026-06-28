import Container from "../ui/Container";
import Card from "../ui/Card";

function ProjectGallery({ project }) {
  const { gallery } = project;

  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900 transition-colors">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
            Captures d'Écran
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Aperçu visuel des différentes interfaces de l'application.
          </p>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Placeholder Image */}
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 aspect-video flex items-center justify-center border-b border-slate-200 dark:border-slate-800">
                  <div className="text-center p-6">
                    <svg
                      className="w-16 h-16 mx-auto text-slate-400 dark:text-slate-500 mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">
                      Screenshots à venir
                    </p>
                  </div>
                </div>

                {/* Image Caption */}
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectGallery;
