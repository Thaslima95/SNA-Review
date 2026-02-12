import React from 'react';
import { Globe } from 'lucide-react';

export const IBRO_APRC = () => {
  return (
    <section id="ibro-aprc" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <div className="flex items-center space-x-2 text-[#991b1b] font-bold mb-4">
                    <Globe size={24} />
                    <span>Global Partnership</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">IBRO-APRC Membership</h2>
                <p className="text-lg text-slate-600 mb-6">
                    We are proud members of the International Brain Research Organization (IBRO) Asia-Pacific Regional Committee (APRC).
                </p>
                <p className="text-slate-600 mb-8">
                    This partnership enables our members to access international travel grants, exchange programs, and attend global neuroscience schools.
                </p>
                <button className="text-[#991b1b] font-bold hover:underline">Learn about IBRO Grants &rarr;</button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                    src="https://images.unsplash.com/photo-1594492691731-3d7974140624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwY29vcGVyYXRpb24lMjBnbG9iZSUyMG5ldHdvcmtpbmd8ZW58MXx8fHwxNzcwMTg0NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="International Collaboration" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </div>
    </section>
  );
};
