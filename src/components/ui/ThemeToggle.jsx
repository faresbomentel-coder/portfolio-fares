import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <HiMoon className="text-xl" />
      ) : (
        <HiSun className="text-xl" />
      )}
    </motion.button>
  );
}

export default ThemeToggle;
