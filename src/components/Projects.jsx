import React from 'react';
import gtaImg from "../assets/Images/GTA6.png";
import portfolioImg from "../assets/Images/Portfolio.png";
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'JARVIS - AI Voice Assistant',
    description: 'A browser-based AI voice assistant featuring a dynamic dashboard. Processes voice commands and manages state efficiently to respond via a conversational UI. Built with a focus on seamless interaction and performant DOM updates.',
    techStack: ['Python'],
    github: 'https://github.com/yashasgul2109',
    live: '#',
    image: '/images/jarvis.png' // <-- add your image here
  },
  {
    title: 'GTA 6 Interactive Fan Hub',
    description: 'A content-heavy community landing page highlighting component-based architecture. Implemented responsive grid layouts using Tailwind to manage high-resolution media efficiently across devices.',
    techStack: ['React', 'HTML5', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yashasgul2109',
    live: 'https://gta-6-three-eta.vercel.app/',
    image: gtaImg
  },
  {
    title: 'Modular Developer Portfolio',
    description: 'A high-performance personal site engineered for scale. Leveraged Tailwind utility classes for rapid development and Framer Motion for scroll-linked animations. Ensures cross-browser accessibility.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/yashasgul2109',
    live: '#',
    image: portfolioImg
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-5xl mx-auto border-t border-surfaceBorder">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 tracking-tight">
          Featured Work.
        </h2>

        <div className="space-y-32">
          {projectsData.map((project, idx) => (
            <div key={project.title} className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* IMAGE SECTION */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 group relative cursor-pointer"
              >
                <div className="w-full h-64 md:h-[400px] bg-surface border border-surfaceBorder flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-white">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                </div>
                <div className="absolute top-4 -right-4 w-full h-full border border-surfaceBorder -z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"></div>
              </motion.div>

              {/* TEXT SECTION */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`w-full md:w-1/2 flex flex-col z-20 md:items-start text-left`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-wide">
                  {project.title}
                </h3>
                
                <div className="bg-surface/50 p-6 md:p-8 border border-white/5 mb-8 text-muted shadow-xl backdrop-blur-md">
                  <p className="leading-relaxed font-light">{project.description}</p>
                </div>

                <ul className="flex flex-wrap gap-4 text-xs font-mono text-muted mb-8 uppercase tracking-widest">
                  {project.techStack.map(tech => (
                    <li key={tech} className="border-b border-white/20 pb-1">{tech}</li>
                  ))}
                </ul>

                <div className="flex gap-6 text-muted">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer group flex items-center gap-2">
                    <Github size={20} /> <span className="text-sm border-b border-transparent group-hover:border-white transition-all">Source</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors cursor-pointer group flex items-center gap-2">
                    <ExternalLink size={20} /> <span className="text-sm border-b border-transparent group-hover:border-white transition-all">Live</span>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
