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
      title: 'AXIOS Ledger',
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
    <section id="projects" className="py-12 md:py-16 px-8 lg:px-24 max-w-[1600px] mx-auto relative z-10">
      <div className="px-5 py-2 mb-6 inline-block rounded-full border border-[#bbc9d0]/20 bg-transparent text-[#bbc9d0] text-xs font-bold tracking-[0.2em] uppercase">
        Case Studies
      </div>
      <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#e5e2e1] mb-12">Selected Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col ${project.delay}`}>
            <div className="group relative bg-[#1b1b1b]/40 backdrop-blur-xl rounded-[3rem] p-3 md:p-4 border border-[#bbc9d0]/10 hover:border-[#bbc9d0]/30 transition-all duration-700 hover:bg-[#1b1b1b]/60 shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">

              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 border border-[#bbc9d0]/5 bg-[#131313]">
                <img
                  className="w-full h-full object-cover object-top transition-transform duration-[2000ms] group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#131313] via-[#131313]/50 to-transparent opacity-95 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>

                <div className="absolute bottom-6 left-6 z-20">
                  <span className="bg-[#1b1b1b]/80 backdrop-blur-md text-[#bbc9d0] px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-[#bbc9d0]/20 shadow-lg inline-block">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-6 right-6 z-20">
                  <span className="text-xs text-[#c2c7cb] font-bold tracking-wide bg-[#131313]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#bbc9d0]/10 flex items-center gap-2 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bbc9d0] animate-pulse"></span>
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-4 md:px-8 pb-8">
                <h3 className="text-3xl md:text-4xl font-black mb-4 text-[#f8f9fa] tracking-tight group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-[#c2c7cb] text-[15px] md:text-base leading-relaxed mb-8 font-medium">
                  {project.description}
                </p>

                {/* Indented Bullets */}
                <div className="space-y-4 mb-10 border-l-2 border-[#bbc9d0]/10 pl-6 py-2">
                  {project.bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-4 text-[14.5px] font-medium text-[#c2c7cb] leading-relaxed">
                      <span className="text-[#bbc9d0] mt-1 text-xs opacity-70">
                        ✦
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-x-6 gap-y-4 mt-auto">
                  {project.deploymentlink && (
                    <a
                      href={project.deploymentlink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-[#bbc9d0] text-[#131313] font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(187,201,208,0.15)] text-sm"
                    >
                      {getDomain(project.deploymentlink)} <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full border border-[#bbc9d0]/20 text-[#bbc9d0] font-bold hover:bg-[#bbc9d0]/10 transition-all text-sm"
                  >
                    View Code <span className="material-symbols-outlined text-lg">north_east</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
