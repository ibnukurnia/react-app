import React from "react";
import NavigationBar from "./components/navbar/NavigationBar";
import HomeSection from "./components/home-section/HomeSection";
import AboutSection from "./components/about-section/AboutSection";
import SkillsSection from "./components/skills-section/SkillsSection";

const App = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <section className="py-3 home_section">
        <HomeSection />
      </section>
      <section className="py-3">
        <AboutSection />
      </section>

      <section className="py-3">
        <SkillsSection />
      </section>
    </>
  );
};

export default App;
