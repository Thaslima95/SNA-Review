import React, { useState } from 'react';
import { Linkedin, Mail, Copy } from 'lucide-react';

import thameem from '@/assets/executives/thameem.jpg';
import gavin from '@/assets/executives/gavin.jpg';
import sara from '@/assets/executives/sara.jpg';
import deepika from '@/assets/executives/deepika.jpg';
import ong from '@/assets/executives/ong.jpg';
import dinesh from '@/assets/executives/dinesh.jpg';
import jai from '@/assets/executives/jai.jpg';
import satish from '@/assets/executives/satish.jpg';
import jayabharathi from '@/assets/executives/jayabharathi.jpg';
import kevin from '@/assets/executives/kevin.jpg';

interface Executive {
  name: string;
  role: string;
  affiliation: string;
  research?: string;
  img: string;
  email?: string;
  linkedin?: string;
}

export const executives: Executive[] = [
  {
    name: 'Prof. S. Thameem Dheen',
    role: 'President',
    affiliation: 'YLL School of Medicine',
    img: thameem,
    email: 'antstd@nus.edu.sg',
    linkedin: ''
  },
  {
    name: 'Assoc. Prof. Gavin Dawe',
    role: 'Vice President',
    affiliation: 'YLL School of Medicine',
    img: gavin,
    email: 'phchead@nus.edu.sg',
    linkedin: ''
  },
  {
    name: 'Dr. Sara Kashkouli Rahmanzadeh',
    role: 'Secretary',
    affiliation: '',
    img: sara,
    email: 'antskr@nus.edu.sg',
    linkedin: ''
  },
  {
    name: 'Dr. Deepika Kandilya',
    role: 'Treasurer',
    affiliation: '',
    img: deepika,
    email: 'antdk@nus.edu.sg',
    linkedin: ''
  },

  // Council Members
  {
    name: 'Prof. Ong Wei Yi',
    role: 'Council Member',
    affiliation: '',
    img: ong,
    email: 'antongwy@nus.edu.sg',
    linkedin: ''
  },
  {
    name: 'Assoc. Prof. Dinesh Kumar Srinivasan',
    role: 'Council Member',
    affiliation: '',
    img: dinesh,
    email: 'antdine@nus.edu.sg',
    linkedin: ''
  },
  {
    name: 'Dr. Jai Polepalli',
    role: 'Council Member',
    affiliation: '',
    img: jai,
    email: 'antjsp@nus.edu.sg',
    linkedin: ''
  },
  {
    name: 'Dr. Satish R. L.',
    role: 'Council Member',
    affiliation: '',
    img: satish,
    email: 'antslr@nus.edu.sg',
    linkedin: ''
  },

  // Auditors
  {
    name: 'Dr. K. Jayabharathi',
    role: 'Auditor',
    affiliation: '',
    img: jayabharathi,
    email: 'antkj@nus.edu.sg',
    linkedin: ''
  },
  {
    name: 'Dr. Kevin Jayaraj',
    role: 'Auditor',
    affiliation: '',
    img: kevin,
    email: 'kevinjayaraj@nus.edu.sg',
    linkedin: ''
  }
];


export const Executives = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  return (
    <section id="executives" className="py-24 bg-slate-50 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Executive Committee</h2>
          <div className="w-24 h-1 bg-[#991b1b] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            The dedicated scientists and clinicians guiding the strategic direction of the Singapore Neuroscience Association.
          </p>
        </div>

        {/* Executives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {executives.map((exec, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center p-8 h-full"
            >
              {/* Profile Image - Rectangular with rounded corners */}
              <div className="mb-6 flex justify-center">
                <div className="w-48 h-56 overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 shadow-sm flex items-center justify-center">
                  <img
                    src={exec.img}
                    alt={exec.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Name - Serif & Bold like image */}
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2 text-center tracking-tight leading-tight">
                {exec.name}
              </h3>
              
              {/* Role - Red & Sans-serif like image */}
              <p className="text-[#991b1b] font-semibold text-sm uppercase tracking-wide mb-6 text-center">
                {exec.role}
              </p>

              {/* Affiliation - Clean Sans-serif */}
              {exec.affiliation && (
                <p className="text-slate-600 text-sm font-medium mb-6 text-center leading-relaxed">
                  {exec.affiliation}
                </p>
              )}
              
              {/* Research Interest (Only if available) */}
              {exec.research && (
                 <p className="text-slate-500 text-sm font-serif italic text-center mb-8">
                  {exec.research}
                </p>
              )}

              {/* Icons (Only if available) */}
              {(exec.email || exec.linkedin) && (
                <>
                  {/* Divider Line */}
                  <div className="w-16 h-px bg-slate-200 mb-6 mt-auto"></div>
                  <div className="flex justify-center space-x-6">
        {exec.email?.trim() && (
  <div className="relative flex items-center space-x-3 text-sm text-slate-600">

    {/* Mail Icon */}
    <a
      href={`mailto:${exec.email.trim()}`}
     
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-[#991b1b] transition-colors"
      aria-label={`Email ${exec.name}`}
    >
      <Mail size={18} strokeWidth={1.5} />
    </a>

    {/* Email Text */}
    <a
      href={`mailto:${exec.email.trim()}`}
      className="hover:text-[#991b1b] transition-colors"
    >
      {exec.email}
    </a>

    {/* Copy Icon */}
    <button
      onClick={() => {
        navigator.clipboard.writeText(exec.email!);
        setCopiedEmail(exec.email!);
        setTimeout(() => setCopiedEmail(null), 2000);
      }}
      className="text-slate-400 hover:text-[#991b1b] transition-colors relative"
      aria-label={`Copy email of ${exec.name}`}
    >
      <Copy size={18} strokeWidth={1.5} />

      {/* Tooltip */}
      {copiedEmail === exec.email && (
  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-md shadow-lg opacity-0 animate-fadeIn whitespace-nowrap">
    Copied
    <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></span>
  </span>
)}

    </button>

  </div>
)}



                    {exec.linkedin && (
                      <a href={exec.linkedin} className="text-slate-400 hover:text-[#0077b5] transition-colors" aria-label={`LinkedIn profile of ${exec.name}`}>
                        <Linkedin size={20} strokeWidth={1.5} />
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
