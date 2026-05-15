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
    <section id="projects" className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
      <p className="text-primary-container tracking-[0.1em] uppercase text-[0.75rem] font-bold mb-4">Case Studies</p>
      <h2 className="text-[3.5rem] font-bold tracking-tight text-on-surface mb-20">Selected Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col gap-8 ${project.delay}`}>
            <div className="group relative aspect-[4/3] bg-surface-container rounded-xl overflow-hidden border border-outline-variant/10 shadow-2xl">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-[#334d58]/60 backdrop-blur-md text-on-secondary-container px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-outline-variant/20">
                  {project.category}
                </span>
              </div>
              <div className="absolute top-6 right-6">
                <span className="text-[10px] text-primary/60 font-medium bg-background/50 backdrop-blur px-3 py-1 rounded-full">{project.period}</span>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold mb-4 text-on-surface">{project.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6 max-w-lg">
                {project.description}
              </p>

              <ul className="mb-8 space-y-2">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm text-on-surface-variant">
                    <span className="text-primary mt-1 min-w-[12px] h-[12px]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-x-8 gap-y-2">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                >
                  View GitHub <span className="material-symbols-outlined text-xl">north_east</span>
                </a>
                
                {project.deploymentlink && (
                  <a
                    href={project.deploymentlink}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    {getDomain(project.deploymentlink)} <span className="material-symbols-outlined text-xl">north_east</span>
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
