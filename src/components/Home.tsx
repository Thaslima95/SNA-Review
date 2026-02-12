import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Brain, FileText, ChevronRight, Sparkles, Globe, User, Clock } from 'lucide-react';
import { Hero } from './Hero';
import posterImage from '@/assets/Poster1_SNA Symposium 2026-v7r.jpg';

export const Home = () => {
  return (
    <div className="flex flex-col">
       <Hero />
       
       {/* About Summary */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center">
             <h2 className="text-3xl font-bold text-slate-900 mb-6">About the Association</h2>
             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               The Singapore Neuroscience Association (SNA) is dedicated to fostering neuroscientific research and education. We bring together researchers, clinicians, and students to unravel the mysteries of the brain.
             </p>
             <Link to="/history" className="inline-flex items-center font-semibold text-[#991b1b] hover:underline">
               Read our History <ArrowRight size={16} className="ml-2" />
             </Link>
           </div>
         </div>
       </section>

       {/* NEW: Symposium 2026 Section */}
       <section className="py-20 bg-slate-50 border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
               <div className="inline-flex items-center space-x-2 bg-red-100 text-[#991b1b] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                 <Calendar className="w-4 h-4" />
                 <span>June 30 – July 1, 2026</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 leading-tight">Neuroscience across the Lifespan</h2>
               <h3 className="text-xl md:text-2xl text-slate-600 font-serif italic mb-6 border-l-4 border-[#991b1b] pl-4">
                 Neurodevelopment, Longevity and Mental Health Symposium
               </h3>
               <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                 Join us for the SNA Symposium 2026. This year's theme focuses on the critical intersection of neurodevelopment, longevity, and mental health, bringing together world-renowned experts.
               </p>
               <div className="flex gap-4">
                 <Link to="/symposium-2026" className="inline-flex items-center bg-[#991b1b] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#7f1d1d] transition-colors shadow-lg shadow-red-900/10">
                   View Full Details
                 </Link>
               </div>
             </div>
             <div className="order-1 md:order-2">
               <div className="bg-white p-4 rounded-xl shadow-xl border border-slate-100 h-[500px] flex items-center justify-center">
                  <img 
                    src={posterImage} 
                    alt="Neuroscience across the Lifespan Poster" 
                    className="w-full h-full object-contain" 
                  />
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Research Preview */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-3xl font-bold text-slate-900">Research Highlights</h2>
                <Link to="/" className="text-[#991b1b] font-semibold flex items-center hover:underline">
                    View All Research <ChevronRight size={16} />
                </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-md transition-all">
                    <FileText className="text-blue-500 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Free Radical Biology & Ageing</h3>
                    <p className="text-slate-600 mb-4">
                        Prof Barry Halliwell’s pioneering work in free radical biology has driven key Life Sciences and ageing research initiatives at NUS.
                    </p>
                     <a href="#halliwell-interview" className="text-sm font-bold text-slate-400 group-hover:text-[#991b1b] transition-colors">Read More</a>
                </div>
                 {/* Card 2 */}
                <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-md transition-all">
                    <Brain className="text-purple-500 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Global Impact & Recognition</h3>
                    <p className="text-slate-600 mb-4">
                        Ranked #1 worldwide in Free Radical Research citations and honoured with the Lifetime Achievement Award by the SFRBM (USA).
                    </p>
                    <a href="#halliwell-interview" className="text-sm font-bold text-slate-400 group-hover:text-[#991b1b] transition-colors">Read More</a>
                </div>
            </div>
         </div>
       </section>

       {/* News & Announcements (Archived Content) */}
       <section id="halliwell-interview" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-bold text-slate-900 mb-10">News & Announcements</h2>
             <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Feature: Barry Halliwell Interview */}
                <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                   <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Spotlight Interview</span>
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-4">Professor Barry Halliwell – A radical reformist of NUS Research landscape</h3>
                   <div className="prose prose-slate text-slate-600 leading-relaxed text-sm mb-6">
                     <p className="mb-4">
                       Professor Barry Halliwell is a man who constantly transforms the research landscape at the National University of Singapore where he is rightly placed in the University Hall as the Deputy President for Research & Technology and as the Tan Chin Tuan Centennial Professor of Biochemistry. He has garnered international attention for his work in the field of Free Radical Biology in the 90s and at the right time, was spotted on the radar of NUS which has always been eyeing for top international talents.
                     </p>
                     <p className="mb-4">
                       NUS's decision was right as he has already helped drive the development of the Life Sciences/Translational Medicine initiatives at NUS over the past ten years and is now driving initiatives in ageing research. In fact, Prof Halliwell started his journey with free radicals research in 1970s and published a number of articles in internationally reputed journals.
                     </p>
                     <p>
                       Recently, he was honoured with the "Lifetime Achievement Award" by the Society for Free Radical Biology and Medicine in the USA for overall sustained excellence in the field. His laboratory is also ranked number as 1 worldwide with the highest citation score in Free Radical Research. Despite his busy schedule, he readily accepted to meet us when approached him for this interview. Read on to know the story of a boy from a "working class" background, who went on to become the number 1 scientist in free radical research.
                     </p>
                   </div>
                </div>

                {/* Side Column */}
                <div className="space-y-6">
                   {/* Lifetime Achievement */}
                   <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                       <div className="flex items-center space-x-2 mb-3">
                         <Sparkles className="w-4 h-4 text-amber-500" />
                         <span className="text-amber-700 font-bold text-xs uppercase tracking-wider">Award News</span>
                       </div>
                       <h3 className="text-lg font-bold text-slate-900 mb-2">SNA Lifetime Achievement Award</h3>
                       <p className="text-slate-600 mb-3 text-sm">Barry Halliwell receives SNA Lifetime Achievement Award.</p>
                       <span className="text-xs text-slate-400 italic font-medium">(Courtesy: NUS Newshub)</span>
                   </div>

                   {/* Travel Award */}
                   <div className="bg-[#991b1b] p-8 rounded-xl text-white shadow-lg relative overflow-hidden group">
                       <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                          <Globe size={100} />
                       </div>
                       <div className="relative z-10">
                          <h3 className="text-xl font-bold mb-3 flex items-center">
                             <Globe className="w-5 h-5 mr-2" /> SNA Travel Award
                          </h3>
                          <p className="text-red-100 mb-6 text-sm leading-relaxed">
                             SNA has set aside funds to support its members traveling to and presenting at international neuroscience conferences.
                          </p>
                          <button className="bg-white text-[#991b1b] px-4 py-2 rounded-lg font-bold text-sm hover:bg-red-50 transition-colors w-full">
                             Apply for Award
                          </button>
                       </div>
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* Upcoming Events & Seminars */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-3xl font-bold text-slate-900">Upcoming Events & Seminars</h2>
                <Link to="/seminars" className="text-[#991b1b] font-semibold flex items-center hover:underline">
                    View All <ChevronRight size={16} />
                </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                
                {/* Event 1: Brain Bee */}
                <Link to="/brain-bee" className="block p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-200 hover:bg-red-50/30 transition-all group">
                    <div className="text-xs font-bold text-[#991b1b] uppercase tracking-wider mb-2">Competition</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#991b1b]">Singapore National Brain Bee 2026</h3>
                    <div className="flex items-center text-slate-500 text-sm">
                        <Calendar size={14} className="mr-2" /> May 2026
                    </div>
                </Link>

                {/* Event 2: Symposium */}
                <Link to="/symposium" className="block p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-200 hover:bg-red-50/30 transition-all group">
                    <div className="text-xs font-bold text-[#991b1b] uppercase tracking-wider mb-2">Symposium</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#991b1b]">Neuroscience across the Lifespan</h3>
                    <div className="flex items-center text-slate-500 text-sm">
                        <Calendar size={14} className="mr-2" /> June 30 – July 1, 2026
                    </div>
                </Link>

                {/* Event 3: Seminar Placeholder */}
                <Link to="/seminars" className="block p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-200 hover:bg-red-50/30 transition-all group flex flex-col justify-center text-center">
                    <div className="mb-2 mx-auto w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-red-100 group-hover:text-[#991b1b] transition-colors">
                        <Clock size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-400 mb-1 group-hover:text-[#991b1b]">Next Seminar</h3>
                    <div className="text-slate-400 text-sm italic">
                        Details to be announced
                    </div>
                </Link>

            </div>
         </div>
       </section>

       {/* Brain Bee Teaser */}
       <section className="py-20 bg-[#991b1b] text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/4">
            <Brain size={400} />
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Singapore Brain Bee Challenge</h2>
                <p className="text-red-100 text-lg mb-8">
                    Are you a high school student fascinated by the human brain? Join our annual competition and represent Singapore on the global stage.
                </p>
                <Link to="/brain-bee" className="bg-white text-[#991b1b] px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors inline-flex items-center">
                    Learn More & Register <ArrowRight size={18} className="ml-2" />
                </Link>
            </div>
         </div>
       </section>

       {/* Contact CTA */}
       <section className="py-24 bg-slate-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Join the Community</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Whether you're a researcher, student, or industry partner, there's a place for you at the Singapore Neuroscience Association.
            </p>
            <div className="flex justify-center gap-4">
                <Link to="/contact" className="bg-[#991b1b] text-white px-8 py-3 rounded-full font-bold hover:bg-[#7f1d1d] transition-colors">
                    Contact Us
                </Link>
                <Link to="/executives" className="border border-slate-600 px-8 py-3 rounded-full font-medium hover:bg-white hover:text-slate-900 transition-colors">
                    Meet the Team
                </Link>
            </div>
         </div>
       </section>
    </div>
  );
};
