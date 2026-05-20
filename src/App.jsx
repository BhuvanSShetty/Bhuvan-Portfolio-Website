import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCore from './components/TechCore';
import Projects from './components/Projects';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AudioPlayer />
      <main>
        <Hero />
        <TechCore />
        <Projects />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;