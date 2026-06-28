import { motion } from "framer-motion";
import Card from "../../ui/Card";
import Badge from "../../ui/Badge";

function SkillCard({ skill, index }) {
  const { icon: Icon, name, level, description, concepts, usedIn } = skill;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="h-full flex flex-col">
        {/* Header: Icon + Name */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="text-white" size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-slate-900 mb-1">{name}</h3>
            <Badge className="text-xs">{level}</Badge>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Concepts */}
        {concepts && concepts.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
              Concepts Clés
            </h4>
            <div className="flex flex-wrap gap-2">
              {concepts.map((concept, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Used In */}
        {usedIn && usedIn.length > 0 && (
          <div className="mt-auto pt-4 border-t border-slate-100">
            <h4 className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
              Utilisé Dans
            </h4>
            <p className="text-xs text-slate-600">{usedIn.join(" • ")}</p>
          </div>
        )}
      </Card>
    </motion.div>
  );
}

export default SkillCard;
