import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import resume from "../assets/Resume.pdf";

const navLinks = [
  { title: 'Home', to: 'hero' },
  { title: 'About', to: 'about' },
  { title: 'Skills', to: 'skills' },
  { title: 'Projects', to: 'projects' },
  { title: 'Milestones', to: 'achievements' },
  { title: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="hero" smooth={true} duration={800} className="cursor-pointer group">
          <span className="text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-70">
            Yashaswi.
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.to}
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-white font-medium"
              className="text-sm tracking-widest uppercase text-muted hover:text-white cursor-pointer transition-colors relative group"
            >
              {link.title}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href= {resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-sm font-medium tracking-widest uppercase text-black bg-white hover:bg-gray-200 transition-colors duration-300 ml-4"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-gray-300 transition-colors">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-0 left-0 w-full h-full bg-background z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.to}
                smooth={true}
                duration={800}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-widest text-muted hover:text-white cursor-pointer transition-colors uppercase"
              >
                {link.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
