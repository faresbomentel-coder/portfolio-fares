import { useState } from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import SkillTabs from "./SkillTabs";
import SkillGrid from "./SkillGrid";
import { skills, getCategories, getSkillsByCategory } from "../../../data/skills";

function Skills() {
  const categories = getCategories();
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredSkills = getSkillsByCategory(activeCategory);

  return (
    <section id="skills" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <Container>
        <SectionTitle
          subtitle="Compétences"
          title="Mon Expertise Technique"
          description="Un aperçu détaillé de mes compétences techniques, outils, concepts et soft skills acquis tout au long de mon parcours."
        />

        {/* Tabs Navigation */}
        <SkillTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Skills Grid */}
        <SkillGrid skills={filteredSkills} />
      </Container>
    </section>
  );
}

export default Skills;
