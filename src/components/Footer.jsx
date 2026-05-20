import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full pt-16 pb-10 px-6 md:px-12 bg-[#1b1b1b]/40 backdrop-blur-xl border-t border-[#bbc9d0]/10 mt-20">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-[#e5e2e1] font-bold text-xl tracking-tight">Bhuvan S Shetty</span>
            <span className="text-[#bbc9d0]/60 text-sm font-medium">Software Engineer</span>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-4">
            <a href="https://github.com/BhuvanSShetty" target="_blank" rel="noopener noreferrer" className="text-[#c2c7cb] hover:text-white transition-colors text-sm font-bold tracking-wide">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bhuvansshetty/" target="_blank" rel="noopener noreferrer" className="text-[#c2c7cb] hover:text-white transition-colors text-sm font-bold tracking-wide">
              LinkedIn
            </a>
            <a href="mailto:bhuvansshetty90@gmail.com" className="text-[#c2c7cb] hover:text-white transition-colors text-sm font-bold tracking-wide">
              Email
            </a>
          </div>
          
        </div>
        
        <div className="mt-12 flex justify-center items-center text-[#bbc9d0]/40 text-xs gap-4">
          <p>© 2026 Bhuvan S Shetty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
