import React from 'react';

const SocialSidebar = () => {
  return (
    <div className="hidden md:flex fixed left-8 lg:left-12 top-1/2 -translate-y-1/2 flex-col gap-8 p-4 rounded-[2rem] border border-[#bbc9d0]/10 bg-[#1b1b1b]/50 backdrop-blur-md z-[110] shadow-xl shadow-black/20">
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
  );
};

export default SocialSidebar;
