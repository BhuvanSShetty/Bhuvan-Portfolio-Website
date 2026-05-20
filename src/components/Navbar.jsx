import React from 'react';

const Navbar = () => {



  return (
    <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1440px] mx-auto">
        <div className="text-xl font-bold tracking-tighter text-primary font-headline">
          Bhuvan S Shetty
        </div>

        <div className="hidden md:flex gap-10 items-center">
          <a href="#home" className="text-primary font-semibold border-b-2 border-primary pb-1 font-headline tracking-tight">Home</a>
          <a href="#projects" className="text-primary-container hover:text-primary transition-colors font-headline tracking-tight">Projects</a>
          <a href="#about" className="text-primary-container hover:text-primary transition-colors font-headline tracking-tight">About</a>
          <a href="mailto:Bhuvansshetty90@gmail.com" className="text-primary-container hover:text-primary transition-colors font-headline tracking-tight">Contact</a>
        </div>



        <button
          onClick={() => window.open('https://drive.google.com/file/d/18uc5hLDToqjfwLJ3vZ3ZN2K---m1N-db/view?usp=drive_link', '_blank')}
          className="btn-primary-gradient px-6 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-primary/10"
        >
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
