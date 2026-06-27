import { motion } from "framer-motion";
import Card from "../../ui/Card";

function WhyChooseMeCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:scale-105 transition-transform duration-300">
        {/* Icon */}
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
          <Icon className="text-white" size={28} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
}

export default WhyChooseMeCard;
