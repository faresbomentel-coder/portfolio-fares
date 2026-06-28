import { motion } from "framer-motion";
import { about } from "../../../data/about";

function AboutContent() {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          À Propos de Moi
        </h3>
        <p className="text-slate-700 text-lg leading-relaxed">
          {about.introduction}
        </p>
      </motion.div>

      {/* Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Mon Parcours</h3>
        <p className="text-slate-700 text-lg leading-relaxed">{about.story}</p>
      </motion.div>
    </div>
  );
}

export default AboutContent;
