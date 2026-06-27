import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import WhyChooseMeCard from "./WhyChooseMeCard";
import { whyChooseMe } from "../../../data/whyChooseMe";

function WhyChooseMe() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <Container>
        <SectionTitle
          subtitle="Mes Atouts"
          title="Pourquoi Me Choisir ?"
          description="Des compétences techniques solides et une approche professionnelle pour vos projets web."
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseMe.map((item, index) => (
            <WhyChooseMeCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseMe;
