import { motion } from "framer-motion";
import Card from "../../ui/Card";
import { about } from "../../../data/about";

function AboutInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
      {about.quickInfo.map((info, index) => (
        <motion.div
          key={info.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="flex items-start gap-3 hover:shadow-lg transition-shadow duration-300 min-h-[80px]">
            {/* Icon */}
            <span className="text-3xl flex-shrink-0">{info.icon}</span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">
                {info.label}
              </p>
              <p className="text-slate-900 dark:text-slate-100 font-semibold break-words">
                {info.value}
              </p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default AboutInfo;
