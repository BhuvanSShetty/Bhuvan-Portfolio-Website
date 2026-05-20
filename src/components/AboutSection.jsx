import React from 'react';
import csAbstract from '../assets/cs_abstract.png';
import aikyamRunnerUp from '../assets/aikyam_runner_up.JPG';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
      {/* Engineering Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 items-center">
        <div className="md:col-span-8">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-bold">Engineering Philosophy</p>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-on-surface leading-tight">
            Reliability and <span className="text-primary-container">Performance </span> in Every Line of Code.
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            I approach software engineering with a focus on system reliability, scalability, and performance, ensuring that applications handle increasing load while maintaining low latency and clean architecture.
          </p>
        </div>
        <div className="md:col-span-4 flex items-end">
          <div className="w-full aspect-square bg-surface-container rounded-lg overflow-hidden relative border border-outline-variant/10 shadow-2xl">
            <img
              className="w-full h-full object-cover transition-all duration-700 brightness-75 hover:brightness-100"
              src={csAbstract}
              alt="Structural Engineering Core"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-background/80 backdrop-blur-md p-4 rounded-lg border border-outline-variant/20">
                <p className="text-xs font-bold text-primary uppercase mb-1">Current Membership</p>
                <p className="text-sm font-semibold">Pegasus Club (Web Development)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Foundation Stats */}
      <div id="academics" className="mb-32 scroll-mt-32">
        <h2 className="text-xs uppercase tracking-[0.2em] text-primary mb-12 font-bold">Academic Foundation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 flex flex-col justify-between min-h-[240px] hover:border-primary/20 transition-all">
            <div>
              <span className="material-symbols-outlined text-primary-container mb-4 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
              <h3 className="text-2xl font-bold text-on-surface">RV Institute of Technology (RVITM)</h3>
              <p className="text-on-surface-variant text-sm mt-2">B.E. in Computer Science & Engineering (2027)</p>
            </div>
            <div className="mt-8">
              <p className="text-4xl font-extrabold text-primary">8.62 <span className="text-sm font-normal text-on-surface-variant">CGPA</span></p>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 flex flex-col justify-between min-h-[240px] hover:border-primary/20 transition-all">
            <div>
              <span className="material-symbols-outlined text-primary-container mb-4 text-3xl">school</span>
              <h3 className="text-2xl font-bold text-on-surface">Karkala Jnanasudha PU</h3>
              <p className="text-on-surface-variant text-sm mt-2">Class of 2023</p>
            </div>
            <div className="mt-8">
              <p className="text-4xl font-extrabold text-primary">94.14% <span className="text-sm font-normal text-on-surface-variant">Aggregate</span></p>
            </div>
          </div>

          <div className="bg-surface-container p-8 rounded-lg border border-outline-variant/10 flex flex-col justify-between min-h-[240px] hover:border-primary/20 transition-all">
            <div>
              <span className="material-symbols-outlined text-primary-container mb-4 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              <h3 className="text-2xl font-bold text-on-surface">Silicon City Academy</h3>
              <p className="text-on-surface-variant text-sm mt-2">Secondary Education (2021)</p>
            </div>
            <div className="mt-8">
              <p className="text-4xl font-extrabold text-primary">83.2% <span className="text-sm font-normal text-on-surface-variant">Aggregate</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Bento Section */}
      <div id="achievements" className="mb-32 scroll-mt-32">
        <h2 className="text-xs uppercase tracking-[0.2em] text-primary mb-12 font-bold">Key Achievements</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { tag: 'ACADEMIC', title: '100/100 in Computer Science (PUC)', icon: 'terminal' },
            { tag: 'ACADEMIC', title: '100/100 in ADA Lab & Web Developement  (RVITM)', icon: 'code' },
            { tag: 'COMPETITION', title: '1st Place Winner - Science Fest 2019', icon: 'military_tech' },
            { tag: 'GAT HACKATHON', title: '7th Place in GAT Hackathon 2026', icon: 'military_tech' },
            { tag: 'KSSEM HACKATHON', title: 'Placed with in top 10 in KSSEM Hackathon 2025', icon: 'military_tech' }
          ].map((item, idx) => (
            <div key={idx} className="bg-surface-container-highest/40 border border-outline-variant/20 p-6 rounded-xl flex items-center gap-6 flex-1 min-w-[300px]">
              <div className="bg-primary/10 p-4 rounded-full">
                <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
              </div>
              <div>
                <p className="text-[10px] font-black text-primary-container tracking-widest uppercase mb-1">{item.tag}</p>
                <p className="text-lg font-bold text-on-surface">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Aikyam 2026 Featured Achievement */}
        <div className="mt-8 bg-surface-container-highest/40 border border-primary/20 rounded-xl overflow-hidden">
          <div className="p-6 flex items-center gap-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <span className="material-symbols-outlined text-primary text-3xl">military_tech</span>
            </div>
            <div>
              <p className="text-[10px] font-black text-primary-container tracking-widest uppercase mb-1">AIKYAM 2026</p>
              <p className="text-lg font-bold text-on-surface">Runner up in AIKYAM 2026 RVITM</p>
            </div>
          </div>
          <div className="px-5 pb-5 flex justify-center">
            <div className="rounded-lg overflow-hidden border border-outline-variant/10 w-fit">
              <img
                src={aikyamRunnerUp}
                alt="Runner up at AIKYAM 2026 RVITM"
                className="max-h-[400px] block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Work */}
      <div className="mt-32 relative bg-[#1b1b1b]/40 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] border border-[#bbc9d0]/10 overflow-hidden shadow-2xl group transition-all hover:bg-[#1b1b1b]/60 hover:border-[#bbc9d0]/20">
        
        {/* Subtle Background Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_rgba(187,201,208,0.05)_0%,_transparent_70%)] rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-[radial-gradient(ellipse_at_center,_rgba(187,201,208,0.1)_0%,_transparent_70%)]"></div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 relative z-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full border border-[#bbc9d0]/20 bg-transparent text-[#bbc9d0] text-[10px] font-bold tracking-[0.2em] uppercase">
                Social Impact
              </span>
              <div className="h-[1px] w-12 bg-[#bbc9d0]/20"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#f8f9fa] tracking-tight mb-6 leading-tight">
              Empowering via <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bbc9d0] to-[#5f6c73]">U&I</span>
            </h2>
            
            <p className="text-[#c2c7cb] text-lg leading-relaxed font-medium">
              Applying principles of structure and growth to community impact as a Teaching Volunteer, mentoring students to reach their full potential.
            </p>
          </div>
          
          <div className="flex flex-row items-center gap-6 md:gap-8 pl-0 lg:pl-12 lg:border-l-2 border-[#bbc9d0]/10">
            <div className="text-left lg:text-center">
              <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#f8f9fa] to-[#5f6c73]">Volunteer</p>
              <p className="text-[#c2c7cb] text-[11px] uppercase tracking-[0.2em] mt-3 font-semibold">Teaching & Mentorship</p>
            </div>
            
            <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full border border-[#bbc9d0]/20 bg-[#131313]/50 shadow-[0_0_20px_rgba(187,201,208,0.05)]">
              <span className="material-symbols-outlined text-3xl text-[#bbc9d0]" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
