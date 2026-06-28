import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../ui/Button";
import { HiHome, HiFolder } from "react-icons/hi";

function NotFoundContent() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const circleVariants = {
    animate: (i) => ({
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4 + i,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="relative min-h-[calc(100vh-200px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <motion.div
          custom={0}
          variants={circleVariants}
          animate="animate"
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 dark:bg-cyan-500/20 rounded-full blur-2xl"
        />
        <motion.div
          custom={1}
          variants={circleVariants}
          animate="animate"
          className="absolute top-40 right-20 w-48 h-48 bg-cyan-200/30 dark:bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          custom={2}
          variants={circleVariants}
          animate="animate"
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-300/20 dark:bg-cyan-600/20 rounded-full blur-2xl"
        />
        <motion.div
          custom={3}
          variants={circleVariants}
          animate="animate"
          className="absolute bottom-40 right-1/3 w-56 h-56 bg-cyan-300/20 dark:bg-blue-600/20 rounded-full blur-3xl"
        />

        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-2xl mx-auto"
      >
        {/* 404 Number with Floating Animation */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="mb-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-9xl md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-500 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400 leading-none select-none"
          >
            404
          </motion.h1>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
        >
          Page introuvable
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto"
        >
          La page que vous recherchez n'existe pas ou a peut-être été déplacée.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="flex items-center gap-2 min-w-[200px] justify-center">
                <HiHome className="text-xl" />
                <span>Retour à l'accueil</span>
              </Button>
            </motion.div>
          </Link>

          <Link to="/projects">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="flex items-center gap-2 min-w-[200px] justify-center px-6 py-3 border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">
                <HiFolder className="text-xl" />
                <span>Voir les projets</span>
              </button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center gap-2"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="w-2 h-2 bg-blue-600 dark:bg-cyan-400 rounded-full"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default NotFoundContent;
