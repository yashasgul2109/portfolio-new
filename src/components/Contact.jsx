import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-5xl mx-auto border-t border-surfaceBorder mb-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase">
          Contact.
        </h2>
        
        <p className="text-muted max-w-xl mx-auto mb-16 text-lg leading-relaxed font-light">
          I am currently open for new opportunities. Whether you have a question or just want to connect, my inbox is always open.
        </p>

        <a 
          href="mailto:yashaswigulati2005@gmail.com" 
          className="inline-block px-12 py-5 bg-white text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 mb-32"
        >
          Send an Email
        </a>

        {/* Minimal Footer */}
        <div className="w-full pt-10 border-t border-surfaceBorder flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-xs text-muted uppercase tracking-widest">
            © 2026 Yashaswi Gulati
          </p>
          <div className="flex space-x-8 text-muted font-mono text-sm uppercase tracking-widest">
            <a href="https://github.com/yashasgul2109" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yashaswi-gulati" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="tel:+919389256645" className="hover:text-white transition-colors">
              Call Me
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
