import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import { personalInfo } from "../../../data/personalInfo";
import Button from "../../ui/Button";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-blue-600 dark:text-cyan-400 font-semibold text-lg">
          👋 Bonjour, je suis
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white"
      >
        {personalInfo.fullName}
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200"
      >
        {personalInfo.title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-cyan-600 dark:text-cyan-400 font-medium"
      >
        {personalInfo.subtitle}
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl"
      >
        {personalInfo.description}
      </motion.p>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
      >
        <HiLocationMarker className="text-blue-600 dark:text-cyan-400" size={20} />
        <span>{personalInfo.location}</span>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-4 pt-4"
      >
        <a href={personalInfo.cvPath} download>
          <Button variant="primary">Télécharger CV</Button>
        </a>
        <Link to="/contact">
          <Button variant="outline">Me Contacter</Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
