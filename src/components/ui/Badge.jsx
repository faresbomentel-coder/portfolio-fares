function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
