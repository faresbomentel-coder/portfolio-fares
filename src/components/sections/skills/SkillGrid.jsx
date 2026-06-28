import SkillCard from "./SkillCard";

function SkillGrid({ skills }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={skill.id} skill={skill} index={index} />
      ))}
    </div>
  );
}

export default SkillGrid;
