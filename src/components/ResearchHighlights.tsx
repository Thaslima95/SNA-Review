import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

export const ResearchHighlights = () => {
  return (
    <section id="research-highlights" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-12 text-center">Research Highlights</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                    <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                        <FileText size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Mapping the Connectome: A New Approach</h3>
                    <p className="text-slate-600 mb-6 flex-1">
                        Recent studies by the SNA collaborative group have revealed novel pathways in the prefrontal cortex, published in Nature Neuroscience.
                    </p>
                    <a href="#" className="inline-flex items-center text-[#991b1b] font-semibold hover:underline">
                        Read Publication <ExternalLink size={16} className="ml-2" />
                    </a>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
