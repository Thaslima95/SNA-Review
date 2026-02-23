import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex items-center pb-20 overflow-hidden bg-slate-50">
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-red-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-red-100 mb-8">
              <Sparkles className="w-4 h-4 text-[#991b1b]" />
              <span className="text-sm font-medium text-slate-600">The Heart of Neuroscience in Singapore</span>
            </div>
            
            <div className="mb-8">
                <h1 className="leading-tight">
                    <span className="block text-xl md:text-2xl font-medium tracking-[0.2em] text-slate-500 mb-2">SINGAPORE</span>
                    <span className="block text-5xl md:text-6xl font-extrabold tracking-tight">
                        <span className="text-[#991b1b]">NEURO</span>
                        <span className="text-slate-700">SCIENCE</span>
                    </span>
                    <span className="block text-2xl md:text-3xl font-medium tracking-[0.3em] text-[#991b1b] mt-3">ASSOCIATION</span>
                </h1>
            </div>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              We are a community of researchers, educators, and students dedicated to advancing neuroscience research, education, and collaboration in Singapore.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/research" className="flex items-center space-x-2 bg-[#991b1b] text-white px-8 py-4 rounded-xl hover:bg-[#7f1d1d] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-900/20 font-medium">
                <span>Explore Research</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/seminars" className="px-8 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-red-200 hover:bg-red-50 transition-all font-medium flex items-center justify-center">
                Seminars
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <ImageWithFallback
  src="https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb3NjaWVuY2UlMjBhYnN0cmFjdCUyMGJyYWluJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMG5ldHdvcmt8ZW58MXx8fHwxNzcwMDMzODE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  alt="Abstract Neural Network"
  className="w-full h-[600px] object-cover"
  priority
/>
               <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent mix-blend-overlay" />
            </div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs"
            >
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Active Members</span>
              </div>
              <div className="text-3xl font-bold text-slate-800">1,200+</div>
              <p className="text-slate-500 text-sm">Researchers connected across Singapore</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
