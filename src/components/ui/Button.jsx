function Button({ children, variant = "primary", className = "", ...props }) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    secondary:
      "bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
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
