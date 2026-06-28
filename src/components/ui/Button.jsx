function Button({ children, variant = "primary", className = "", ...props }) {
  const variants = {
    primary:
      "bg-blue-600 dark:bg-cyan-600 text-white hover:bg-blue-700 dark:hover:bg-cyan-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:ring-offset-2 dark:focus:ring-offset-slate-950",
    secondary:
      "bg-cyan-500 dark:bg-cyan-600 text-white hover:bg-cyan-600 dark:hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 dark:focus:ring-offset-slate-950",
    outline:
      "border border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 hover:bg-blue-600 dark:hover:bg-cyan-600 hover:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 focus:ring-offset-2 dark:focus:ring-offset-slate-950",
  };

  return (
    <button
      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
