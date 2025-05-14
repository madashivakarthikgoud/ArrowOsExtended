import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 pb-6 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top grid: Logo/desc + resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & description */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="w-8 h-8 flex-shrink-0">
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

              <span className="text-xl font-semibold">
                ArrowOS<span className="text-primary-500">-Extended</span>
              </span>
            </Link>
            <p className="text-dark-300 max-w-md">
              ArrowOS-Extended is a custom Android ROM that focuses on performance,
              stability, and a clean user experience with minimal customization options.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/ArrowOS-Ext/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-300 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-3 text-dark-300">
              {[
                { label: 'GitHub', href: 'https://github.com/ArrowOS-Ext/' },
                { label: 'Telegram', href: 'https://t.me/arrowosextended_updates' },
                { label: 'SourceForge', href: 'https://sourceforge.net/projects/arata-labs/files/ArrowOS-Extended/' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <span>{item.label}</span>
                    <ExternalLink size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-dark-800 text-dark-400 text-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <a
            href="https://github.com/madashivakarthikgoud"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-dark-300 hover:text-white transition-colors"
          >
            <Github size={20} /> Website crafted by Shiva Karthik
          </a>
          <p className="flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> by the ArrowOS
            team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
