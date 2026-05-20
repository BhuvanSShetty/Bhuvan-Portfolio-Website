import React from 'react';
import portrait from '../assets/bhuvan.png';

const Hero = ({ isVisible }) => {
  return (
    <section id="home" className="min-h-screen flex items-center px-8 lg:px-24 max-w-[1600px] mx-auto pt-32 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 w-full relative z-10">

        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">

          {/* Backend Engineer Tag */}
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-md'}`}
            style={{ transitionDelay: '500ms' }}
          >


          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl md:text-[5.5rem] lg:text-[7rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#f8f9fa] to-[#5f6c73] leading-[0.9] mb-8 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-12 blur-xl scale-105'}`}
            style={{ transitionDelay: '700ms' }}
          >
            Architecting <br /> the Core.
          </h1>

          {/* Paragraph */}
          <p
            className={`text-[#c2c7cb] text-lg md:text-xl font-medium tracking-wide max-w-xl leading-relaxed mb-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-md'}`}
            style={{ transitionDelay: '900ms' }}
          >
            Building scalable systems and high-performance APIs. Focusing on reliability, clean architecture, and efficient data handling. Currently pursuing a Bachelor’s degree in Computer Science at RV Institute of Technology and Management , Bengaluru.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-md'}`}
            style={{ transitionDelay: '1100ms' }}
          >
            <a href="#projects" className="group flex items-center gap-2 bg-[#cdd5da] hover:bg-white text-[#131313] px-8 py-4 rounded-full font-bold text-[15px] transition-all duration-300 shadow-[0_0_30px_rgba(187,201,208,0.1)] hover:shadow-[0_0_40px_rgba(187,201,208,0.2)] hover:scale-105">
              Explore Projects
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>

            <a href="#academics" className="flex items-center gap-2 text-[#bbc9d0] hover:text-white px-6 py-4 rounded-full font-semibold transition-colors">
              Academics
            </a>
          </div>

          {/* Social Links */}
          <div
            className={`flex items-center gap-6 pl-4 border-l-2 border-[#bbc9d0]/10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-md'}`}
            style={{ transitionDelay: '1300ms' }}
          >
            <a href="https://github.com/BhuvanSShetty" target="_blank" rel="noreferrer" className="text-[#c2c7cb] hover:text-[#bbc9d0] transition-colors hover:scale-110 transform duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/bhuvansshetty" target="_blank" rel="noreferrer" className="text-[#c2c7cb] hover:text-[#bbc9d0] transition-colors hover:scale-110 transform duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:bhuvansshetty90@gmail.com" className="text-[#c2c7cb] hover:text-[#bbc9d0] transition-colors hover:scale-110 transform duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        {/* Decorative Portrait Column */}
        <div
          className={`lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-x-0 blur-none scale-100' : 'opacity-0 translate-x-12 blur-xl scale-95'}`}
          style={{ transitionDelay: '900ms' }}
        >
          <div className="absolute inset-0 bg-[#bbc9d0]/5 blur-[120px] rounded-full animate-pulse z-0"></div>

          {/* Glass Image Container */}
          <div className="relative w-full max-w-sm md:max-w-md aspect-[4/5] rounded-[2.5rem] border border-[#bbc9d0]/10 bg-[#1b1b1b]/30 p-2 backdrop-blur-md overflow-hidden group z-10 shadow-2xl shadow-black/40">
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-[#bbc9d0]/5">
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/20 to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40"></div>

              <img
                src={portrait}
                alt="Bhuvan S Shetty"
                className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-105 brightness-90 group-hover:brightness-100"
              />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
