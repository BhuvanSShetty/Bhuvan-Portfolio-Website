import React from 'react';

const TechCore = () => {
  const skills = {
    languages: ['C++', 'C', 'Python (Basic)', 'Java (Basic)', 'Javascript'],
    tools: ['Git/GitHub', 'VS Code', 'Postman', 'GCC', 'Browser DevTools'],
    frameworks: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
    storage: ['MongoDB', 'MySQL', 'SQL', 'PostgreSQL', 'Redis'],
    devops: ['Docker', 'Docker Compose', 'Vercel', 'AWS']
  };

  return (
    <section id="skills" className="py-12 md:py-16 px-8 lg:px-24 max-w-[1600px] mx-auto relative z-10">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <div className="px-5 py-2 mb-6 inline-block rounded-full border border-[#bbc9d0]/20 bg-transparent text-[#bbc9d0] text-xs font-bold tracking-[0.2em] uppercase">
            Stack & Expertise
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#e5e2e1]">The Technical Core</h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="text-[#c2c7cb] text-lg font-medium leading-relaxed">
            Equipped with a diverse stack for building reliable, distributed, and high-performance systems.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Languages */}
        <div className="md:col-span-2 bg-[#1b1b1b]/50 backdrop-blur-xl p-12 rounded-[2.5rem] flex flex-col justify-between group hover:bg-[#1b1b1b]/80 transition-all duration-500 border border-[#bbc9d0]/10 hover:border-[#bbc9d0]/30 shadow-2xl shadow-black/20">
          <div>
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-5xl text-[#bbc9d0]">terminal</span>
              <span className="text-[0.65rem] bg-[#bbc9d0]/10 text-[#bbc9d0] px-4 py-1.5 rounded-full font-bold uppercase tracking-[0.2em] border border-[#bbc9d0]/20">Mastery</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-[#e5e2e1]">Languages</h3>
            <p className="text-[#c2c7cb] mb-10 text-base font-medium">Foundational logic and systems programming across various paradigms.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.languages.map((lang) => (
              <span key={lang} className="bg-transparent px-5 py-2 rounded-full text-sm font-semibold text-[#bbc9d0] border border-[#bbc9d0]/20 group-hover:bg-[#bbc9d0]/5 transition-colors">
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Infrastructure & DevOps */}
        <div className="bg-[#1b1b1b]/50 backdrop-blur-xl p-10 rounded-[2.5rem] group hover:bg-[#1b1b1b]/80 transition-all duration-500 border border-[#bbc9d0]/10 hover:border-[#bbc9d0]/30 shadow-2xl shadow-black/20 flex flex-col">
          <div className="mb-10">
            <span className="material-symbols-outlined text-4xl text-[#bbc9d0]">cloud_done</span>
          </div>
          <h3 className="text-2xl font-bold mb-6 text-[#e5e2e1]">Infra & DevOps</h3>
          <div className="space-y-4 mt-auto">
            {skills.devops.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#bbc9d0] rounded-full opacity-50"></div>
                <span className="text-[15px] font-semibold text-[#c2c7cb] group-hover:text-[#bbc9d0] transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Databases / Storage */}
        <div className="bg-[#1b1b1b]/50 backdrop-blur-xl p-10 rounded-[2.5rem] group hover:bg-[#1b1b1b]/80 transition-all duration-500 border border-[#bbc9d0]/10 hover:border-[#bbc9d0]/30 shadow-2xl shadow-black/20 flex flex-col">
          <div className="mb-10">
            <span className="material-symbols-outlined text-4xl text-[#bbc9d0]">database</span>
          </div>
          <h3 className="text-2xl font-bold mb-6 text-[#e5e2e1]">Storage</h3>
          <div className="space-y-4 mt-auto">
            {skills.storage.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#bbc9d0] rounded-full opacity-50"></div>
                <span className="text-[15px] font-semibold text-[#c2c7cb] group-hover:text-[#bbc9d0] transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Tools */}
        <div className="md:col-span-2 bg-[#1b1b1b]/50 backdrop-blur-xl p-12 rounded-[2.5rem] group hover:bg-[#1b1b1b]/80 transition-all duration-500 border border-[#bbc9d0]/10 hover:border-[#bbc9d0]/30 shadow-2xl shadow-black/20">
          <div className="mb-8">
            <span className="material-symbols-outlined text-4xl text-[#bbc9d0]">build_circle</span>
          </div>
          <h3 className="text-3xl font-bold mb-8 text-[#e5e2e1]">Developer Tools</h3>
          <div className="flex flex-wrap gap-4">
            {skills.tools.map((tool) => (
              <div key={tool} className="flex items-center gap-2 bg-transparent px-5 py-2.5 rounded-full border border-[#bbc9d0]/10 group-hover:border-[#bbc9d0]/30 transition-colors">
                <div className="w-1.5 h-1.5 bg-[#bbc9d0] rounded-full opacity-50"></div>
                <span className="text-sm font-semibold text-[#c2c7cb] group-hover:text-white">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="md:col-span-2 bg-[#1b1b1b]/50 backdrop-blur-xl p-12 rounded-[2.5rem] group hover:bg-[#1b1b1b]/80 transition-all duration-500 border border-[#bbc9d0]/10 hover:border-[#bbc9d0]/30 shadow-2xl shadow-black/20">
          <div className="mb-8">
            <span className="material-symbols-outlined text-4xl text-[#bbc9d0]">layers</span>
          </div>
          <h3 className="text-3xl font-bold mb-8 text-[#e5e2e1]">Frameworks</h3>
          <div className="flex flex-wrap gap-3">
            {skills.frameworks.map((framework) => (
              <span key={framework} className="bg-[#bbc9d0]/10 px-6 py-2.5 rounded-full text-sm font-bold text-[#bbc9d0] border border-[#bbc9d0]/20">
                {framework}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCore;
