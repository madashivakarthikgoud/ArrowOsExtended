import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 pb-6 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                <path d="M12 2L3 9L12 16L21 9L12 2Z" className="fill-primary-500" />
                <path d="M3 9V17L7 20V12L3 9Z" className="fill-primary-400" />
                <path d="M21 9V17L17 20V12L21 9Z" className="fill-primary-600" />
                <path d="M12 16V22L3 17V9L12 16Z" className="fill-primary-400 opacity-70" />
                <path d="M12 16V22L21 17V9L12 16Z" className="fill-primary-600 opacity-70" />
              </svg>
              <span className="text-xl font-semibold">ArrowOS<span className="text-primary-500">-Extended</span></span>
            </Link>
            <p className="text-dark-300 mb-4 max-w-md">
              ArrowOS-Extended is a custom Android ROM that focuses on performance, stability, and a clean user experience with minimal customization options.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/ArrowOS-Ext/OTA" target="_blank" rel="noopener noreferrer" 
                className="text-dark-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                className="text-dark-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Navigation</h3>
            <ul className="space-y-2 text-dark-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
              <li><Link to="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2 text-dark-300">
              <li>
                <a href="https://github.com/ArrowOS-Ext/OTA" target="_blank" rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center">
                  GitHub <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="https://t.me/arrowosextended_updates" target="_blank" rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center">
                  Telegram <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center">
                  XDA Forums <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="https://github.com/ArrowOS-Ext/OTA" target="_blank" rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center">
                  SourceForge <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-dark-800 text-dark-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <a
  href="https://github.com/madashivakarthikgoud"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-dark-300 hover:text-white transition-colors"
>
  <Github size={20} />Website crafted Shiva Karthik.
</a>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> by the ArrowOS team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;