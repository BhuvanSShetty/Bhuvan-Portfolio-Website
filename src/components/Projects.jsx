import React from 'react';
import projectImage from '../assets/image.png';
import splitbillImage from '../assets/Splitbill.png';

const Projects = () => {
  const projects = [
    {
      title: 'SplitReceipt',
      category: 'MERN / AI',
      period: 'May 2026',
      description: 'AI-powered receipt splitting web app that turns restaurant bill images into structured line items, taxes, and totals, then calculates what each person owes with editable item assignment.',
      bullets: [
        'Integrated OCR.space with Groq LLM parsing to convert messy receipt text into structured JSON.',
        'Implemented proportional tax and tip splitting with per-person item edits.',
        'Built a scalable REST API with JWT auth, refresh token rotation, and HttpOnly cookies.'
      ],
      image: splitbillImage,
      link: 'https://github.com/BhuvanSShetty',
      deploymentlink: 'https://split.bhuvans.in',
      delay: ''
    },
    {
      title: 'AXIOS System',
      category: 'Distributed Systems / Backend',
      period: 'Jan 2026 – Feb 2026',
      description: 'A tamper-proof Land Record Management System using blockchain principles. Engineered with Merkle trees for integrity and an RSA-2048 Witness consensus service for decentralized validation.',
      bullets: [
        'Merkle tree engine (SHA-256) for field-level tampering detection.',
        '3-node RSA-2048 Witness consensus service (majority quorum).',
        'Built a public portal with multi-language support (EN, HI, KN).',
        'Full containerization with Docker and Docker Compose.'
      ],
      image: projectImage,
      link: 'https://github.com/BhuvanSShetty',
      deploymentlink: 'https://axios.bhuvans.in/',
      delay: 'md:mt-32'
    }
  ];

  const getDomain = (url) => {
    try {
      return new URL(url).hostname;
    } catch {
      return 'Deployment';
    }
  };

  return (
    <section id="projects" className="py-32 px-8 lg:px-24 max-w-[1600px] mx-auto relative z-10">
      <div className="px-5 py-2 mb-6 inline-block rounded-full border border-[#bbc9d0]/20 bg-transparent text-[#bbc9d0] text-xs font-bold tracking-[0.2em] uppercase">
        Case Studies
      </div>
      <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#e5e2e1] mb-24">Selected Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col gap-10 ${project.delay}`}>
            
            {/* Image Container */}
            <div className="group relative aspect-[4/3] bg-[#1b1b1b]/50 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-[#bbc9d0]/10 shadow-2xl shadow-black/30 p-2 transition-all duration-500 hover:border-[#bbc9d0]/30">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-[#bbc9d0]/5">
                <img
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="bg-[#1b1b1b]/80 backdrop-blur-md text-[#bbc9d0] px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-[#bbc9d0]/20 shadow-lg">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-6 right-6 z-20">
                  <span className="text-xs text-[#c2c7cb] font-semibold bg-[#131313]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#bbc9d0]/10">
                    {project.period}
                  </span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="px-2">
              <h3 className="text-4xl font-extrabold mb-6 text-[#e5e2e1] tracking-tight">{project.title}</h3>
              <p className="text-[#c2c7cb] text-lg leading-relaxed mb-8 font-medium">
                {project.description}
              </p>

              <ul className="mb-10 space-y-3">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-4 text-[15px] font-medium text-[#c2c7cb]">
                    <span className="text-[#bbc9d0] mt-1.5 min-w-[12px] h-[12px] opacity-70">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#bbc9d0]/20 text-[#bbc9d0] font-bold hover:bg-[#bbc9d0]/10 transition-all text-sm"
                >
                  View Code <span className="material-symbols-outlined text-lg">north_east</span>
                </a>
                
                {project.deploymentlink && (
                  <a
                    href={project.deploymentlink}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#bbc9d0] text-[#131313] font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(187,201,208,0.15)] text-sm"
                  >
                    {getDomain(project.deploymentlink)} <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
