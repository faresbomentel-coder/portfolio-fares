import Hero from "../components/sections/hero/Hero";
import WhyChooseMe from "../components/sections/whyChooseMe/WhyChooseMe";
import TechStack from "../components/sections/tech-stack/TechStack";
import About from "../components/sections/about/About";
import Skills from "../components/sections/skills/Skills";

function Home() {
  return (
    <>
      <Hero />
      <WhyChooseMe />
      <TechStack />
      <About />
      <Skills />
    </>
  );
}

export default Home;
