import { motion } from "framer-motion";
import Card from "../../ui/Card";

function TechCard({ icon: Icon, name, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="flex flex-col items-center justify-center p-6 h-full hover:scale-110 hover:shadow-xl transition-all duration-300">
        {/* Icon */}
        <Icon className="text-blue-600 dark:text-cyan-400 mb-3" size={48} />

        {/* Name */}
        <p className="text-slate-900 dark:text-slate-100 font-semibold text-center">{name}</p>
      </Card>
    </motion.div>
  );
}

export default TechCard;
