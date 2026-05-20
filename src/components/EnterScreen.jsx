import React, { useState, useEffect } from 'react';

const EnterScreen = ({ onEnter, hasEntered }) => {
  const [step, setStep] = useState('loading'); // 'loading' -> 'greeting' -> 'ready'
  const [progress, setProgress] = useState(0);

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
    // 1. Loading sequence
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 20) + 10;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setStep('greeting'), 400); // Slight pause at 100%
      }
      setProgress(current);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // 2. Greeting to Ready sequence
    if (step === 'greeting') {
      const timer = setTimeout(() => setStep('ready'), 2200); // Hold greeting for 2.2s
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-[1200ms] ease-in-out ${hasEntered ? 'opacity-0 scale-[1.2] blur-[15px] pointer-events-none' : 'opacity-100 scale-100 blur-none'}`}
    >

      {/* 1. Loading Step */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${step === 'loading' ? 'opacity-100' : 'opacity-0 blur-md scale-105 pointer-events-none'}`}>
        <div className="text-[#bbc9d0] font-bold text-5xl md:text-7xl tracking-tighter tabular-nums mb-6">
          {progress}%
        </div>
        <div className="w-48 md:w-64 h-[2px] bg-[#bbc9d0]/10 rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-[#f8f9fa] transition-all duration-200 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* 2. Greeting Step */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-[1000ms] ${step === 'greeting' || step === 'ready' ? 'pointer-events-none' : 'pointer-events-none'}`}>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#f8f9fa] flex flex-wrap justify-center gap-x-3 gap-y-2 transition-all duration-[1000ms] ${step === 'greeting' ? 'scale-100' : (step === 'ready' ? 'scale-110 opacity-0 blur-xl' : 'scale-95')}`}>
          <span className={`transition-all duration-1000 ease-out ${step === 'greeting' ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-md'}`} style={{ transitionDelay: '100ms' }}>Hi,</span>
          <span className={`transition-all duration-1000 ease-out ${step === 'greeting' ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-md'}`} style={{ transitionDelay: '300ms' }}>I am</span>
          <span className={`text-transparent bg-clip-text bg-gradient-to-r from-[#bbc9d0] to-[#5f6c73] transition-all duration-1000 ease-out ${step === 'greeting' ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-md'}`} style={{ transitionDelay: '500ms' }}>Bhuvan S Shetty.</span>
        </h2>
      </div>

      {/* 3. Ready Step (Main Content) */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center z-20 w-full px-4 transition-all duration-1000 ${step === 'ready' ? 'opacity-100' : 'opacity-0 pointer-events-none delay-0'}`}>
        <div className="flex flex-col items-center justify-center w-full max-w-4xl">

          {/* Portfolio Tag */}
          <div
            className={`px-6 py-2 mb-6 md:mb-8 rounded-full border border-[#bbc9d0]/20 bg-[#1b1b1b]/50 backdrop-blur-md text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c2c7cb] uppercase transition-all duration-1000 ease-out ${step === 'ready' ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-md'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Bhuvan Sreenivasa Shetty
          </div>

          {/* Massive Role Typography */}
          <h1
            className={`text-6xl sm:text-8xl md:text-[7rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#f8f9fa] to-[#5f6c73] leading-none pb-4 text-center mb-4 transition-all duration-[1200ms] ease-out ${step === 'ready' ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-12 blur-lg scale-105'}`}
            style={{ transitionDelay: '300ms' }}
          >
            Software<br className="md:hidden" /> Engineer.
          </h1>

          {/* Subheadline Pill */}
          <div
            className={`max-w-2xl px-6 text-center transition-all duration-1000 ease-out ${step === 'ready' ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-md'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <p className="text-[#c2c7cb] text-base md:text-xl font-medium tracking-wide leading-relaxed">
              Specializing in scalable systems, clean architecture, and high-performance digital experiences and Turning ideas into digital experiences that inspire and solve real problems..
            </p>
          </div>

          {/* Action Area */}
          <div
            className={`flex flex-col items-center mt-16 transition-all duration-1000 ease-out ${step === 'ready' ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-md'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="flex items-center gap-2 text-[#c2c7cb]/60 text-xs sm:text-sm mb-6 animate-pulse font-medium uppercase tracking-widest">
              <span className="material-symbols-outlined text-base">Laptop</span>
              <span>Best Experience On PC</span>
            </div>

            <button
              onClick={onEnter}
              className="group flex items-center gap-2 bg-[#cdd5da] hover:bg-white text-[#131313] px-10 py-4 rounded-full font-extrabold text-[15px] transition-all duration-300 shadow-[0_0_40px_rgba(187,201,208,0.15)] hover:shadow-[0_0_60px_rgba(187,201,208,0.3)] hover:scale-105 hover:-translate-y-1"
            >
              Show Portfolio
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default EnterScreen;
