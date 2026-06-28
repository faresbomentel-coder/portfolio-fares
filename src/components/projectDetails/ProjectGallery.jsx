import Container from "../ui/Container";
import Card from "../ui/Card";

function ProjectGallery({ project }) {
  const gallery = project.gallery || [];

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

          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((item, index) => {
              const image = typeof item === "string" ? item : item.image;
              const title =
                typeof item === "string" ? `Capture ${index + 1}` : item.title;

              const description =
                typeof item === "string" ? "" : item.description;

              return (
                <Card
                  key={index}
                  className="overflow-hidden p-0 hover:shadow-xl transition-shadow"
                >
                  <img
                    src={image}
                    alt={`${project.title} - ${title}`}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                      {title}
                    </h3>

                    {description && (
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {description}
                      </p>
                    )}
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

export default ProjectGallery;
