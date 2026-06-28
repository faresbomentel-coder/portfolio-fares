import { motion } from "framer-motion";
import { socialLinks } from "../../../data/socialLinks";

function HeroSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="flex flex-wrap gap-4 mt-8"
    >
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        const isExternal =
          social.url.startsWith("http") || social.url.startsWith("https");

        return (
          <motion.a
            key={social.name}
            href={social.url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + index * 0.1 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md hover:border-blue-600 dark:hover:border-cyan-400 transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400"
            aria-label={social.name}
          >
            <Icon size={20} />
          </motion.a>
        );
      })}
    </motion.div>
  );
}

export default HeroSocials;
