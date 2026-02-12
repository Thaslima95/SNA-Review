import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from 'figma:asset/a26696331a487d33d3d5f0bcc659a70f025a70c5.png';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
               <div className="bg-white p-2 rounded-lg inline-block">
                  <img src={logo} alt="SNA Logo" className="h-10 w-auto" />
               </div>
              <span className="text-xl font-bold ml-2">Singapore Neuroscience Association</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Accelerating the understanding of the human brain through interdisciplinary collaboration, innovation, and open science in Singapore and beyond.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#991b1b] transition-colors text-slate-300 hover:text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/history" className="hover:text-[#991b1b] transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-[#991b1b] transition-colors">Research Projects</Link></li>
              <li><Link to="/seminars" className="hover:text-[#991b1b] transition-colors">Events & Conferences</Link></li>
              <li><Link to="/contact" className="hover:text-[#991b1b] transition-colors">Membership</Link></li>
              <li><Link to="/contact" className="hover:text-[#991b1b] transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/" className="hover:text-[#991b1b] transition-colors">Journal Publications</Link></li>
              <li><Link to="/" className="hover:text-[#991b1b] transition-colors">Student Grants</Link></li>
              <li><Link to="/" className="hover:text-[#991b1b] transition-colors">Open Data Sets</Link></li>
              <li><Link to="/" className="hover:text-[#991b1b] transition-colors">Newsletters</Link></li>
              <li><Link to="/contact" className="hover:text-[#991b1b] transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2026 Singapore Neuroscience Association. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
