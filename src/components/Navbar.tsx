import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import logo from 'figma:asset/a26696331a487d33d3d5f0bcc659a70f025a70c5.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'History', path: '/history' },
  { name: 'Executives', path: '/executives' },
  // { name: 'Seminars', path: '/seminars' },
  { name: 'Symposium', path: '/symposium-2026' },
  // { name: 'Photo Gallery', path: '/gallery' },
  { name: 'Research Highlights', path: '/research' },
  // { name: 'Newsletters', path: '/newsletters' },
  // { name: 'IBRO-APRC', path: '/ibro-aprc' },
  { name: 'Brain Bee', path: '/brain-bee' },
  { name: 'Contact Us', path: '/contact' }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Singapore Neuroscience Association" className="h-16 w-auto object-contain" />
            </Link>
          </div>
          
          <div className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors font-medium text-sm whitespace-nowrap ${
                  isActive(item.path) 
                    ? 'text-[#991b1b]' 
                    : 'text-slate-600 hover:text-[#991b1b]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="xl:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-[#991b1b]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md font-medium ${
                    isActive(item.path)
                      ? 'bg-red-50 text-[#991b1b]'
                      : 'text-slate-600 hover:bg-red-50 hover:text-[#991b1b]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
