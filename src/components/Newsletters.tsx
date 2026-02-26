import React from 'react';
import { FileText, Download, Quote, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

// Define the structure for newsletter items
interface NewsletterItem {
  id: string;
  title: string;
  year: string;
  type: 'newsletter' | 'testimonial';
  downloadUrl: string; // Placeholder for now
}

const newsletterData: NewsletterItem[] = [
  {
    id: '1',
    title: 'Newsletter – Issue 1',
    type: 'newsletter',
    downloadUrl: "/pdfs/issue1.pdf",
  },
  {
    id: '2',
    title: 'Newsletter – Issue 2',
    type: 'newsletter',
    downloadUrl: "/pdfs/issue2.pdf",
  },
  // {
  //   id: '3',
  //   title: 'Newsletter – Issue 3',
  //   type: 'newsletter',
  //   downloadUrl: "#",
  // },
  // {
  //   id: '4',
  //   title: 'Newsletter – Issue 4',
  //   type: 'newsletter',
  //   downloadUrl: "#",
  // },
  // {
  //   id: 'testimonial',
  //   title: "Professor Ling Eng Ang's Testimonial",
  //   year: 'Special Feature',
  //   type: 'testimonial',
  //   downloadUrl: "#",
  // },
];

const Newsletters = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      
      {/* 1. Page Banner - Consistent with Seminars/Inner Pages */}
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
            Newsletters
          </h1>
          <div className="w-24 h-1 bg-[#991b1b] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Download Our Archived Newsletter Issues
          </p>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Intro Text */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-slate-700 font-serif leading-relaxed max-w-3xl mx-auto">
            All issues of our newsletters are available for download here.
          </p>
        </div>

        {/* Newsletter List */}
        <div className="grid gap-6">
          {newsletterData.map((item) => (
            <NewsletterCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

// --- Reusable Newsletter Card Component ---
const NewsletterCard = ({ item }: { item: NewsletterItem }) => {
  const isTestimonial = item.type === 'testimonial';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`
        group relative flex flex-col sm:flex-row items-start sm:items-center justify-between 
        p-6 md:p-8 bg-white rounded-xl border transition-all duration-300
        ${isTestimonial 
          ? 'border-l-[6px] border-l-[#991b1b] border-t-slate-200 border-r-slate-200 border-b-slate-200 shadow-sm hover:shadow-md' 
          : 'border-slate-200 hover:border-red-100 hover:shadow-md hover:bg-slate-50/50'
        }
      `}
    >
      <div className="flex items-start gap-5 mb-6 sm:mb-0">
        <div className={`
          p-4 rounded-lg shrink-0 transition-colors duration-300
          ${isTestimonial ? 'bg-red-50 text-[#991b1b]' : 'bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-[#991b1b]'}
        `}>
          {isTestimonial ? <Quote className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-2">
             {isTestimonial && (
               <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#991b1b] text-white uppercase tracking-wider">
                 Special Feature
               </span>
             )}
             {!isTestimonial && (
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                 {item.year}
               </span>
             )}
          </div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#991b1b] transition-colors duration-200">
            {item.title}
          </h3>
        </div>
      </div>

      <a 
  href={item.downloadUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300
    bg-white border border-slate-200 text-slate-700 shadow-sm
    hover:border-[#991b1b] hover:text-[#991b1b] hover:bg-red-50
    focus:ring-2 focus:ring-offset-2 focus:ring-[#991b1b]
  "
>
  <Download className="w-4 h-4" />
  <span>View PDF</span>
</a>

    </motion.div>
  );
};

export default Newsletters;
