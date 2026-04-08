import React, { useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useSpring, useTransform } from 'framer-motion';
import resume from "../assets/resume.pdf";

const Hero = () => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20; 
    const y = (e.clientY - top - height / 2) / 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="text-center z-10 w-full max-w-5xl flex flex-col items-center">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-muted font-mono text-sm tracking-widest uppercase mb-6"
        >
          // Software Engineer
        </motion.p>

        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX: -mousePosition.y,
            rotateY: mousePosition.x,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          style={{ perspective: 1200 }}
          className="mb-6 cursor-default"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none mix-blend-difference"
            style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
          >
            Yashaswi
            <br />
            Gulati.
          </motion.h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-3xl font-medium text-muted mb-10 h-10"
        >
          <TypeAnimation
            sequence={[
              'Specializing in React.js',
              2000,
              'DSA & Logic Building',
              2000,
              'Scalable Web Architectures',
              2000,
              'Interactive UI Development',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-white"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
        >
          <a href="#projects" className="px-8 py-4 bg-white text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
            Explore Work
          </a>
          <a href= {resume} target="_blank" rel="noreferrer" className="px-8 py-4 bg-transparent text-white border border-surfaceBorder hover:border-white font-semibold tracking-wide hover:bg-white/5 transition-all w-full sm:w-auto">
            Résumé
          </a>
        </motion.div>
      </div>
      
      {/* Monochromatic minimal scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-muted font-mono text-xs uppercase tracking-widest mb-4">Scroll</span>
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-white"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
