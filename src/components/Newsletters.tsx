import React from 'react';
import { Mail } from 'lucide-react';

export const Newsletters = () => {
  return (
    <section id="newsletters" className="py-24 bg-white scroll-mt-20 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block p-3 bg-red-50 rounded-full text-[#991b1b] mb-6">
            <Mail size={32} />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">SNA Newsletters</h2>
        <p className="text-lg text-slate-600 mb-10">
            Stay updated with the latest community news, grant opportunities, and member achievements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-[#991b1b] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#7f1d1d] transition-colors">
                Subscribe Now
            </button>
            <button className="border border-slate-200 text-slate-700 px-8 py-3 rounded-lg font-medium hover:border-[#991b1b] hover:text-[#991b1b] transition-colors">
                View Archive
            </button>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-6 text-left">
            {['January 2026', 'December 2025', 'November 2025'].map((month, idx) => (
                <div key={idx} className="p-4 border border-slate-100 rounded-lg hover:border-red-200 transition-colors cursor-pointer group">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Issue</span>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#991b1b]">{month}</h4>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
