import { motion } from "framer-motion";
import Card from "../../ui/Card";
import { HiBriefcase, HiCalendar } from "react-icons/hi";

function ExperienceCard({ experience, index }) {
  const { company, role, period, description } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <HiBriefcase className="text-white" size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-slate-900 mb-1">{role}</h3>
            <p className="text-blue-600 font-semibold mb-2">{company}</p>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <HiCalendar className="flex-shrink-0" />
              <span>{period}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-700 leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
}

export default ExperienceCard;
