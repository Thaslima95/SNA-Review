import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Plus, Search, X, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Types ---
type Category = 'All' | 'AGM' | 'Conferences' | 'Seminars' | 'Brain Bee';

interface GalleryItem {
  id: number;
  imageUrl: string;
  eventName: string; // Small label
  date: string;      // Month & Year
  caption: string;   // Main caption
  category: Exclude<Category, 'All'>;
}

// --- Data ---
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb3NjaWVuY2UlMjBjb25mZXJlbmNlJTIwcmVzZWFyY2glMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzcxNzMyMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    eventName: 'SNA Symposium',
    date: 'March 2025',
    caption: 'Keynote presentation on neuroplasticity advancements',
    category: 'Conferences',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1705727210721-961cc64a6895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwd29ya3Nob3AlMjBsYWJvcmF0b3J5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcxNzMyMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    eventName: 'Brain Bee Workshop',
    date: 'February 2025',
    caption: 'Students engaging in hands-on brain mapping activities',
    category: 'Brain Bee',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1747674148491-51f8a5c723db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3ltcG9zaXVtJTIwYXVkaWVuY2UlMjBsZWN0dXJlfGVufDF8fHx8MTc3MTczMjI1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    eventName: 'Annual General Meeting',
    date: 'January 2025',
    caption: 'Members gathering for the annual strategic review',
    category: 'AGM',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1707944745900-ae9f750f2c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Njb3BlJTIwbGFiJTIwcmVzZWFyY2glMjBzY2llbnRpc3R8ZW58MXx8fHwxNzcxNzMyMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    eventName: 'Research Seminar',
    date: 'November 2024',
    caption: 'Advanced microscopy techniques demonstration',
    category: 'Seminars',
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1770028919882-017b31ad6d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGF3YXJkJTIwY2VyZW1vbnklMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3MTczMjI1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    eventName: 'SNA Awards Night',
    date: 'October 2024',
    caption: 'Honoring the Young Neuroscientist of the Year',
    category: 'AGM',
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb3NjaWVuY2UlMjBicmFpbiUyMHBvc3RlciUyMHNlc3Npb258ZW58MXx8fHwxNzcxNzMyMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    eventName: 'International Conference',
    date: 'September 2024',
    caption: 'Poster session highlights and networking',
    category: 'Conferences',
  },
  {
    id: 7,
    imageUrl: 'https://images.unsplash.com/photo-1757833155170-211a15494193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMG9mJTIwc2NpZW50aXN0cyUyMGRpc2N1c3Npb24lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MTczMjI1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    eventName: 'Regional Seminar',
    date: 'August 2024',
    caption: 'Collaborative discussions with ASEAN partners',
    category: 'Seminars',
  },
  {
    id: 8,
    imageUrl: 'https://images.unsplash.com/photo-1759823420520-546e46818322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbW9kZXJuJTIwYnVpbGRpbmclMjBzaW5nYXBvcmV8ZW58MXx8fHwxNzcxNzMyMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    eventName: 'Brain Bee Finals',
    date: 'July 2024',
    caption: 'Finalists gathering at NUS Medicine Campus',
    category: 'Brain Bee',
  },
];

export const PhotoGallery = () => {
  const [activeTab, setActiveTab] = useState<Category>('All');
  const [visibleCount, setVisibleCount] = useState(8);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: Category[] = ['All', 'AGM', 'Conferences', 'Seminars', 'Brain Bee'];

  const filteredItems = galleryItems.filter(
    (item) => activeTab === 'All' || item.category === activeTab
  );

  const displayedItems = filteredItems.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  // Lightbox Handlers
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < displayedItems.length - 1 ? prev + 1 : 0));
  }, [lightboxIndex, displayedItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : displayedItems.length - 1));
  }, [lightboxIndex, displayedItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      
      {/* 1. Page Banner */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div
          className="absolute inset-0 z-0 opacity-[0.08] mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzAzNjEwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) contrast(120%)",
          }}
        ></div>

        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center text-sm text-slate-500 mb-6 space-x-2"
          >
            <Link to="/" className="hover:text-[#991b1b] transition-colors font-medium">Home</Link>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-slate-900 font-bold">Gallery</span>
          </motion.nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Gallery
          </h1>
          <div className="w-24 h-1 bg-[#991b1b] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Highlights from Conferences, Research & Events
          </p>
        </div>
      </div>

      {/* 2. Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveTab(category);
                setVisibleCount(8);
              }}
              className={`px-6 py-2.5 rounded-full text-sm md:text-base font-bold transition-all duration-300 shadow-sm border ${
                activeTab === category
                  ? 'bg-[#991b1b] text-white border-[#991b1b] shadow-md shadow-red-900/20'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-[#991b1b] hover:text-[#991b1b]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12" // Increased vertical gap for captions
        >
          <AnimatePresence mode='popLayout'>
            {displayedItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Card Container */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:border-red-50 transition-all duration-300 relative transform-gpu">
                  
                  {/* Image Area */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <div
                      className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block text-[#991b1b] bg-white/90 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded mb-2">
                          {item.date.split(' ')[1]} {/* Year only */}
                        </span>
                        <h3 className="text-white font-bold text-sm leading-snug line-clamp-2">
                          {item.caption}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Structured Caption (Below Card) */}
                <div className="mt-4 px-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-[#991b1b] uppercase tracking-widest bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                      {item.eventName}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-slate-800 font-bold text-sm leading-tight group-hover:text-[#991b1b] transition-colors duration-200">
                    {item.caption}
                  </h3>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {displayedItems.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-500">No photos found</h3>
            <p className="text-slate-400">Try selecting a different category.</p>
          </div>
        )}

        {/* Load More Button */}
        {displayedItems.length < filteredItems.length && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center justify-center bg-[#991b1b] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#7f1d1d] transition-colors shadow-sm group"
            >
              <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
              Load More Photos
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && displayedItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all z-50"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            <button 
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-3 rounded-full transition-all z-50 hidden md:block"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-3 rounded-full transition-all z-50 hidden md:block"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Content */}
            <div 
              className="w-full max-w-5xl max-h-screen flex flex-col items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                key={displayedItems[lightboxIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative w-full"
              >
                <img 
                  src={displayedItems[lightboxIndex].imageUrl} 
                  alt={displayedItems[lightboxIndex].caption}
                  className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-2xl"
                />
                
                {/* Caption Bar in Modal */}
                <div className="mt-6 text-center text-white max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-2 opacity-80 text-sm tracking-wide">
                    <span className="font-bold text-red-400 uppercase">{displayedItems[lightboxIndex].eventName}</span>
                    <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                    <span>{displayedItems[lightboxIndex].date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-normal">
                    {displayedItems[lightboxIndex].caption}
                  </h3>
                </div>
              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
