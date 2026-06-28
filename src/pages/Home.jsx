import Hero from "../components/sections/hero/Hero";
import WhyChooseMe from "../components/sections/whyChooseMe/WhyChooseMe";
import TechStack from "../components/sections/tech-stack/TechStack";
import About from "../components/sections/about/About";
import Skills from "../components/sections/skills/Skills";
import Projects from "../components/sections/projects/Projects";
import Experience from "../components/sections/experience/Experience";

function Home() {
  return (
    <>
      <Hero />
      <WhyChooseMe />
      <TechStack />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </>
  );
}

export default Home;
