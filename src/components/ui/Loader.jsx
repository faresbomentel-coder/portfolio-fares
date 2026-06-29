import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.img
          src="/loader-logo.png"
          alt="Fares Loading"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.35)]"
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="mt-8 w-64 h-2 bg-slate-800 rounded-full overflow-hidden"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Loader;
