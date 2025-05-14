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
          className={`rounded-full flex items-center justify-between backdrop-blur-md transition-all duration-300 ${scrolled
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="w-8 h-8">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A90E2" />
                    <stop offset="100%" stopColor="#9013FE" />
                  </linearGradient>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#000" floodOpacity="0.3" />
                  </filter>
                  <clipPath id="circleClip">
                    <circle cx="512" cy="512" r="500" />
                  </clipPath>
                </defs>

                <circle cx="512" cy="512" r="500" fill="url(#grad1)" filter="url(#shadow)" />

                <g clipPath="url(#circleClip)">
                  <g transform="translate(210,360) scale(1.2)">
                    <path d="M256 0 L512 512 L256 640 L0 512 Z" fill="#FFF" />
                    <path d="M256 128 L448 512 L256 608 L64 512 Z" fill="#4A90E2" />
                  </g>
                </g>
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
                href="https://github.com/HinohArata"
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
                    href="https://github.com/HinohArata"
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