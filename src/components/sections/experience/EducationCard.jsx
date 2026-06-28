import { motion } from "framer-motion";
import Card from "../../ui/Card";
import Badge from "../../ui/Badge";
import { HiAcademicCap, HiCalendar, HiCheckCircle, HiClock } from "react-icons/hi";

function EducationCard({ education, index }) {
  const { diploma, institution, period, status, description, skills } =
    education;

  const isCompleted = status === "Obtenu";
  const statusColor = isCompleted ? "text-green-600" : "text-orange-600";
  const statusBg = isCompleted ? "bg-green-50" : "bg-orange-50";
  const statusIcon = isCompleted ? HiCheckCircle : HiClock;
  const StatusIcon = statusIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Card className="border-l-4 border-l-cyan-500 hover:shadow-xl transition-shadow">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <HiAcademicCap className="text-white" size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{diploma}</h3>
            <p className="text-cyan-600 font-semibold mb-2">{institution}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <HiCalendar className="flex-shrink-0" />
                <span>{period}</span>
              </div>
              <div className={`flex items-center gap-2 ${statusColor}`}>
                <StatusIcon className="flex-shrink-0" size={18} />
                <span className="font-semibold">{status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className={`${statusBg} rounded-lg p-3 mb-4`}>
          <p className={`text-sm ${statusColor} font-medium`}>
            {isCompleted
              ? "✓ Diplôme obtenu avec succès"
              : "⏳ Formation complétée - En attente de délivrance officielle du diplôme"}
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-700 leading-relaxed mb-4">{description}</p>

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
              Compétences Acquises
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <Badge key={idx} className="text-xs bg-blue-50 text-blue-700">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
}

export default EducationCard;
