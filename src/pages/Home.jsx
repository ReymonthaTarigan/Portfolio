import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
};

export default Home;
