import { motion } from "framer-motion";
import Card from "../../ui/Card";
import Badge from "../../ui/Badge";
import { about } from "../../../data/about";

function AboutAvailability() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-900/50 min-h-[140px] flex flex-col justify-center">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <Badge className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 px-4 py-2">
            ✓ {about.availability.status}
          </Badge>
        </div>

        {/* Message */}
        <p className="text-slate-700 dark:text-slate-300 text-center leading-relaxed px-2">
          {about.availability.message}
        </p>
      </Card>
    </motion.div>
  );
}

export default AboutAvailability;
