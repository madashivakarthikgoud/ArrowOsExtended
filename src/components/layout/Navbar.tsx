import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Github, Download } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Downloads', path: '/downloads' },
  { name: 'Changelog', path: '/changelog' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className={`rounded-full flex items-center justify-between backdrop-blur-md transition-all duration-300 ${
            scrolled 
              ? 'bg-dark-900/90 shadow-lg border border-dark-800' 
              : 'bg-dark-900/70 border border-dark-800/50'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        >
          <NavLink 
            to="/" 
            className="flex items-center px-4 py-2"
          >
            <motion.div
              className="mr-2 text-primary-500"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 9L12 16L21 9L12 2Z" className="fill-primary-500" />
                <path d="M3 9V17L7 20V12L3 9Z" className="fill-primary-400" />
                <path d="M21 9V17L17 20V12L21 9Z" className="fill-primary-600" />
                <path d="M12 16V22L3 17V9L12 16Z" className="fill-primary-400 opacity-70" />
                <path d="M12 16V22L21 17V9L12 16Z" className="fill-primary-600 opacity-70" />
              </svg>
            </motion.div>
            <span className="text-xl font-semibold">ArrowOS<span className="text-primary-500">-Extended</span></span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 px-3">
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `nav-item ${isActive ? 'nav-item-active' : ''}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
            
            <div className="pl-3 flex items-center space-x-2 border-l border-dark-700 ml-2">
              <a 
                href="https://github.com/ArrowOS-Extended"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-dark-100 hover:text-white hover:bg-dark-800 transition-colors"
              >
                <Github size={20} />
              </a>
              <NavLink 
                to="/downloads" 
                className="btn btn-primary"
              >
                <Download size={18} />
                Download
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 mr-2 rounded-lg text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-2 rounded-xl glass shadow-lg border border-dark-800 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col p-3 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                      `nav-item py-2 ${isActive ? 'nav-item-active' : ''}`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <div className="border-t border-dark-700 my-2 pt-2">
                  <a 
                    href="https://github.com/ArrowOS-Extended"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="nav-item py-2 flex items-center"
                  >
                    <Github size={18} className="mr-2" />
                    GitHub
                  </a>
                  <NavLink 
                    to="/downloads" 
                    className="btn btn-primary w-full mt-2 justify-center"
                  >
                    <Download size={18} />
                    Download Now
                  </NavLink>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;