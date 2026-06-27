function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="text-center mb-12">
      {subtitle && (
        <span className="text-blue-600 font-semibold uppercase tracking-wider">
          {subtitle}
        </span>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
        {title}
      </h2>

      {description && (
        <p className="text-slate-600 max-w-2xl mx-auto mt-4">{description}</p>
      )}
    </div>
  );
}

export default SectionTitle;
