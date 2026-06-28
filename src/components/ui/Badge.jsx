function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-cyan-300 px-3 py-1 text-sm font-medium ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
