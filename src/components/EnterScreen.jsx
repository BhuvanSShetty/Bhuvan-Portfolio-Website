import React, { useState, useEffect } from 'react';

const EnterScreen = ({ onEnter, hasEntered }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [hasEntered]);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-[1200ms] ease-in-out ${hasEntered ? 'opacity-0 scale-[1.2] blur-[15px] pointer-events-none' : 'opacity-100 scale-100 blur-none'}`}
    >
      {/* Main Center Content */}
      <div className="flex flex-col items-center justify-center z-20 w-full max-w-4xl px-4">

        {/* Portfolio Tag */}
        <div
          className={`px-6 py-2 mb-6 md:mb-8 rounded-full border border-[#bbc9d0]/20 bg-transparent text-xs font-semibold tracking-[0.2em] text-[#c2c7cb] uppercase transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-md'}`}
          style={{ transitionDelay: '100ms' }}
        >
          Portfolio 2026
        </div>

        {/* Massive Name Typography */}
        <h1
          className={`text-4xl sm:text-6xl md:text-[5.5rem] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#f8f9fa] to-[#5f6c73] leading-tight text-center mb-6 md:mb-8 transition-all duration-[1200ms] ease-out ${isMounted ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-12 blur-lg scale-105'}`}
          style={{ transitionDelay: '300ms' }}
        >
          Bhuvan S Shetty
        </h1>

        {/* Subheadline Pill */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-2 md:gap-3 px-6 md:px-8 py-3.5 rounded-3xl sm:rounded-full border border-[#bbc9d0]/10 bg-transparent backdrop-blur-sm text-center transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-md'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <span className="text-[#c2c7cb] text-[13px] sm:text-sm md:text-base font-medium tracking-wide">
            Turning ideas into digital experiences that inspire and solve real problems.
          </span>
        </div>

        {/* Action Area */}
        <div
          className={`flex flex-col items-center mt-20 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-md'}`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="flex items-center gap-2 text-[#c2c7cb]/70 text-sm mb-6 animate-pulse font-medium">
            <span className="material-symbols-outlined text-lg">Laptop</span>
            <span>Experience best on PC</span>
          </div>

          <button
            onClick={onEnter}
            className="group flex items-center gap-2 bg-[#cdd5da] hover:bg-white text-[#131313] px-8 py-3.5 rounded-full font-bold text-[15px] transition-all duration-300 shadow-[0_0_30px_rgba(187,201,208,0.15)] hover:shadow-[0_0_40px_rgba(187,201,208,0.25)] hover:scale-105"
          >
            Show Portfolio
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default EnterScreen;
