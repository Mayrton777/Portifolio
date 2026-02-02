import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-green-500/30">
      <HeroSection />
      <About />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}