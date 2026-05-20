import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCore from './components/TechCore';
import Projects from './components/Projects';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import ShootingStars from './components/ShootingStars';
import EnterScreen from './components/EnterScreen';

function App() {
  const [isMounted, setIsMounted] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="min-h-dynamic font-sans overflow-x-hidden bg-[#131313] text-[#e5e2e1] relative">
      
      {/* Global Background Grid (Dots) & Cinematic Noise Overlay */}
      <div className="fixed -top-[50vh] left-0 w-full h-[200vh] z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(187, 201, 208, 0.25) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="fixed -top-[50vh] left-0 w-full h-[200vh] z-0 opacity-[0.15] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {/* Unpredictable Ambient Deep Space Effect */}
      <div className="fixed top-0 left-0 w-full h-dynamic z-0 pointer-events-none overflow-hidden">
        
        {/* Realistic Deep Space Nebula / Aurora Clouds (Monochromatic) */}
        <div className="absolute inset-0 opacity-100 mix-blend-screen">
           {/* Dark Gray/Silver Upper Gas Cloud */}
           <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[50vw] min-w-[600px] rounded-[100%] bg-[radial-gradient(ellipse_at_center,_rgba(200,200,200,0.12)_0%,_transparent_70%)] blur-[80px] animate-float-1" style={{ transform: 'rotate(-15deg)' }}></div>
           
           {/* Bright White/Silver Core Cloud */}
           <div className="absolute top-[20%] right-[-20%] w-[90vw] h-[60vw] min-w-[700px] rounded-[100%] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_60%)] blur-[100px] animate-float-2" style={{ transform: 'rotate(25deg)' }}></div>
           
           {/* Deep Charcoal/Gray Underglow Cloud */}
           <div className="absolute bottom-[-20%] left-[10%] w-[100vw] h-[60vw] min-w-[800px] rounded-[100%] bg-[radial-gradient(ellipse_at_center,_rgba(150,150,150,0.1)_0%,_transparent_70%)] blur-[90px] animate-float-3"></div>
        </div>
      </div>
      
      <ShootingStars />

      <div className={`transition-opacity duration-1000 delay-1000 ${hasEntered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Navbar />
      </div>
      <EnterScreen onEnter={() => setHasEntered(true)} hasEntered={hasEntered} />
      <AudioPlayer isVisible={hasEntered} />
      
      <div className={`transition-opacity duration-1000 relative z-10 ${hasEntered ? 'opacity-100 delay-300' : 'opacity-0 pointer-events-none'}`}>
        <main>
          <Hero isVisible={hasEntered} />
          <TechCore />
          <Projects />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;