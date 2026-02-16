import React, { useState } from 'react';
import { Linkedin, Mail, Copy } from 'lucide-react';

import thameem from '@/assets/executives/thameem.jpg';
import gavin from '@/assets/executives/gavin.jpg';
import sara from '@/assets/executives/sara.jpg';
import deepika from '@/assets/executives/deepika.jpg';
import ong from '@/assets/executives/ong.jpg';
import dinesh from '@/assets/executives/dinesh-2.png';
import jai from '@/assets/executives/jai-2.png';
import satish from '@/assets/executives/satish.jpg';
import jayabharathi from '@/assets/executives/jayabharathi.jpg';
import kevin from '@/assets/executives/kevin-2.png';

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
    affiliation: 'YLL School of Medicine',
    img: sara,
    email: 'antskr@nus.edu.sg',
    linkedin: ''
  },
  {
    name: 'Dr. Deepika Kandilya',
    role: 'Treasurer',
    affiliation: 'YLL School of Medicine',
    img: deepika,
    email: 'antdk@nus.edu.sg',
    linkedin: ''
  },

  // Council Members
  {
    name: 'Prof. Ong Wei Yi',
    role: 'Council Member',
    affiliation: 'YLL School of Medicine',
    img: ong,
    email: 'antongwy@nus.edu.sg',
    linkedin: ''
  },
  {
    name: 'Assoc. Prof. Dinesh Kumar Srinivasan',
    role: 'Council Member',
    affiliation: 'YLL School of Medicine',
    img: dinesh,
    email: 'antdine@nus.edu.sg',
    linkedin: ''
  },
  {
    name: 'Dr. Jai Polepalli',
    role: 'Council Member',
    affiliation: 'YLL School of Medicine',
    img: jai,
    email: 'antjsp@nus.edu.sg',
    linkedin: ''
  },
  {
    name: 'Dr. Satish R. L.',
    role: 'Council Member',
    affiliation: 'YLL School of Medicine',
    img: satish,
    email: 'antslr@nus.edu.sg',
    linkedin: ''
  },

  // Auditors
  {
    name: 'Dr. K. Jayabharathi',
    role: 'Auditor',
    affiliation: 'YLL School of Medicine',
    img: jayabharathi,
    email: 'antkj@nus.edu.sg',
    linkedin: ''
  },
  {
    name: 'Dr. Kevin Jayaraj',
    role: 'Auditor',
    affiliation: 'YLL School of Medicine',
    img: kevin,
    email: 'kevinjayaraj@nus.edu.sg',
    linkedin: ''
  }
];


export const Executives = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* 1. Page Banner */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-[0.08] mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzAzNjEwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) contrast(120%)",
          }}
        ></div>

        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Executive Committee
          </h1>
          <div className="w-24 h-1 bg-[#991b1b] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            The dedicated scientists and clinicians guiding the strategic direction of the Singapore Neuroscience Association.
          </p>
        </div>
      </div>
<section id="executives" className="py-24 bg-slate-50 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        {/* <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Executive Committee</h2>
          <div className="w-24 h-1 bg-[#991b1b] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            The dedicated scientists and clinicians guiding the strategic direction of the Singapore Neuroscience Association.
          </p>
        </div> */}

        {/* Executives Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
  {executives.map((exec, idx) => (
    <div
      key={idx}
      className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
      hover:shadow-xl transition-all duration-300 border border-slate-100
      flex flex-col items-center p-8 h-full"
    >

      {/* ================= IMAGE ================= */}
      <div className="mb-6 flex justify-center">
        <div className="w-48 h-56 overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 shadow-sm flex items-center justify-center">
          <img
            src={exec.img}
            alt={exec.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* ================= INFO SECTION ================= */}
      <div className="flex flex-col items-center w-full text-center flex-grow">

        {/* NAME WRAPPER — FIXED HEIGHT TO NORMALISE ALL CARDS */}
        <div className="h-20 flex items-start justify-center overflow-hidden">
  <h3 className="text-2xl font-serif font-bold text-slate-900 tracking-tight leading-tight text-center">
    {exec.name}
  </h3>
</div>

        {/* ROLE — WILL NOW ALIGN ACROSS ALL CARDS */}
        <p className="text-[#991b1b] font-semibold text-sm uppercase tracking-wide mt-2">
          {exec.role}
        </p>

        {/* AFFILIATION — WILL NOW ALIGN ACROSS ALL CARDS */}
        {exec.affiliation && (
          <p className="text-slate-600 text-sm font-medium mt-3 leading-relaxed">
            {exec.affiliation}
          </p>
        )}

        {/* PUSH BOTTOM CONTENT DOWN */}
        <div className="mt-auto pt-6 w-full">

          {(exec.email || exec.linkedin) && (
            <>
              {/* Divider */}
              <div className="w-16 h-px bg-slate-200 mx-auto mb-6"></div>

              <div className="flex justify-center space-x-6">

                {exec.email?.trim() && (
                  <div className="relative flex items-center space-x-3 text-sm text-slate-600">

                    {/* Mail Icon */}
                    <a
                      href={`mailto:${exec.email.trim()}`}
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

                    {/* Copy Button */}
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

                      {copiedEmail === exec.email && (
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap">
                          Copied
                        </span>
                      )}
                    </button>

                  </div>
                )}

                {exec.linkedin && (
                  <a
                    href={exec.linkedin}
                    className="text-slate-400 hover:text-[#0077b5] transition-colors"
                    aria-label={`LinkedIn profile of ${exec.name}`}
                  >
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                )}

              </div>
            </>
          )}

        </div>
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
    </div>
  );
};
