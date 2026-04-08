import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false),2000);
  },[]);

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-background">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1 , repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 border border-white bg-white/10 mb-8"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-xs font-mono text-muted tracking-[0.3em] uppercase"
        >
          Loading Elements
        </motion.p>
      </div>
    );
  }

  return (
    <div className="bg-background text-primary min-h-screen font-sans selection:bg-white selection:text-black relative overflow-hidden">
      {/* Minimal grid background noise */}
      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
