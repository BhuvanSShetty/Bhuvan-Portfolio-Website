import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-4 md:top-8 left-0 right-0 flex justify-between items-center px-4 md:px-12 z-[110] w-full max-w-[1600px] mx-auto pointer-events-none">

      {/* Logo Pill */}
      <div className="flex-1 flex justify-start pointer-events-auto">
        <a href="#home" className="flex items-center px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border border-[#bbc9d0]/10 bg-[#1b1b1b]/70 backdrop-blur-xl hover:bg-[#1b1b1b]/90 transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <span className="font-bold text-[15px] sm:text-lg whitespace-nowrap tracking-wide text-[#e5e2e1]">
            Bhuvan S Shetty
          </span>
        </a>
      </div>

      {/* Center Nav Pill */}
      <div className="hidden md:flex flex-none items-center gap-8 px-8 py-3 rounded-full border border-[#bbc9d0]/10 bg-[#1b1b1b]/70 backdrop-blur-xl text-[13px] font-bold tracking-wide pointer-events-auto shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <a href="#home" className="text-[#c2c7cb] hover:text-[#bbc9d0] transition-colors uppercase">Home</a>
        <a href="#tech-core" className="text-[#c2c7cb] hover:text-[#bbc9d0] transition-colors uppercase">Skills</a>
        <a href="#projects" className="text-[#c2c7cb] hover:text-[#bbc9d0] transition-colors uppercase">Projects</a>
        <a href="#academics" className="text-[#c2c7cb] hover:text-[#bbc9d0] transition-colors uppercase">Academics</a>
        <a href="#achievements" className="text-[#c2c7cb] hover:text-[#bbc9d0] transition-colors uppercase">Achievements</a>
      </div>

      {/* Right Resume Pill */}
      <div className="flex-1 flex justify-end pointer-events-auto">
        <a href="https://drive.google.com/file/d/1a0NutcE-vfQQA8pacj0hI3O4YNDUkZgg/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border border-[#bbc9d0]/20 bg-[#bbc9d0]/10 hover:bg-[#bbc9d0]/20 backdrop-blur-xl text-[#bbc9d0] text-[13px] sm:text-sm font-bold transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          Resume <span className="material-symbols-outlined text-[15px] sm:text-base">download</span>
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
