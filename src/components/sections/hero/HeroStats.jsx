import { motion } from "framer-motion";
import { stats } from "../../../data/stats";

function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + index * 0.1 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-md dark:hover:shadow-slate-900/50 transition-shadow duration-300"
        >
          <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
            {stat.value}
          </div>
          <div className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default HeroStats;
