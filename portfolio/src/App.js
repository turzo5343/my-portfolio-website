import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkflowShowcase from './components/WorkflowShowcase';
import UseCases from './components/UseCases';
import VoiceAutomation from './components/VoiceAutomation';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';
import GradientBackground from './components/GradientBackground';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GradientBackground />
      <CursorTrail />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Services />
      <WorkflowShowcase />
      <UseCases />
      <VoiceAutomation />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;