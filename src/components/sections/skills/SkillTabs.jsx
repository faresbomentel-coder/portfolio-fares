import { motion } from "framer-motion";

function SkillTabs({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="mb-12">
      {/* Tabs Container - Horizontal scroll on mobile */}
      <div className="relative">
        <div className="overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
          <div className="flex gap-3 min-w-max md:min-w-0 md:flex-wrap md:justify-center  bg-blue-100 rounded-2xl p-3 dark:bg-slate-800 transition-colors">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <motion.button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`relative px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "text-white"
                      : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-slate-800"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}

                  <span className="relative z-10">{category}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="md:hidden flex justify-center mt-2">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            ← Faites défiler pour voir plus →
          </span>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Sélectionnez une catégorie pour voir les compétences
        </p>
      </div>
    </div>
  );
}

export default SkillTabs;
