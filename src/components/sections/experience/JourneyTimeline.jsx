import { motion } from "framer-motion";
import {
  HiPlay,
  HiTrendingUp,
  HiBriefcase,
  HiAcademicCap,
  HiLightningBolt,
  HiCheckCircle,
} from "react-icons/hi";

function JourneyTimeline({ journey }) {
  const iconMap = {
    start: HiPlay,
    growth: HiTrendingUp,
    career: HiBriefcase,
    education: HiAcademicCap,
    training: HiLightningBolt,
    available: HiCheckCircle,
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
        Parcours Professionnel
      </h3>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-green-500 transform md:-translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {journey.map((item, index) => {
            const Icon = iconMap[item.icon] || HiCheckCircle;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  isEven
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Content Box */}
                <div
                  className={`flex-1 ${
                    isEven ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  } pl-12 md:pl-0`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <Icon className="text-white" size={24} />
                </div>

                {/* Spacer for even layout on desktop */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default JourneyTimeline;
