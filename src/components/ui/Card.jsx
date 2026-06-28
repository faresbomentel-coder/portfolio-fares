function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm dark:shadow-slate-900/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-slate-900/50 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
