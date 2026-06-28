import Container from "../ui/Container";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

function ProjectDatabase({ project }) {
  const { database } = project;

  if (!database) return null;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Base de Données
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Structure et organisation de la base de données relationnelle.
          </p>

          {/* Description */}
          <Card className="mb-8 bg-blue-50 border-blue-100">
            <p className="text-slate-700 leading-relaxed text-lg">
              {database.description}
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Models */}
            <Card>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-blue-600">📊</span>
                Modèles (Tables)
              </h3>
              <div className="flex flex-wrap gap-2">
                {database.models.map((model, idx) => (
                  <Badge key={idx} className="bg-blue-100 text-blue-700">
                    {model}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Relations */}
            <Card>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-cyan-600">🔗</span>
                Relations Principales
              </h3>
              <ul className="space-y-3">
                {database.relations.slice(0, 5).map((relation, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-700 leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-cyan-500 font-bold mt-0.5">→</span>
                    <span>{relation}</span>
                  </li>
                ))}
                {database.relations.length > 5 && (
                  <li className="text-sm text-slate-500 italic">
                    + {database.relations.length - 5} autres relations...
                  </li>
                )}
              </ul>
            </Card>
          </div>

          {/* All Relations (if more than 5) */}
          {database.relations.length > 5 && (
            <Card className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Toutes les Relations
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {database.relations.map((relation, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-700 leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-blue-500 font-bold mt-0.5">•</span>
                    <span>{relation}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </Container>
    </section>
  );
}

export default ProjectDatabase;
