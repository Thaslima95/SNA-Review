import React from 'react';
import { motion } from 'motion/react';

const photos = [
  'https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb3NjaWVuY2UlMjBwb3N0ZXIlMjBzZXNzaW9uJTIwc2NpZW50aWZpYyUyMGV2ZW50fGVufDF8fHx8MTc3MDE4NDc2OXww&ixlib=rb-4.1.0&q=80&w=600',
  'https://images.unsplash.com/photo-1765059818293-2eb9b7be15e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc2VtaW5hciUyMHByZXNlbnRhdGlvbiUyMGF1ZGllbmNlfGVufDF8fHx8MTc3MDE4NDc2OXww&ixlib=rb-4.1.0&q=80&w=600',
  'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3MDAzMzgxNHww&ixlib=rb-4.1.0&q=80&w=600',
  'https://images.unsplash.com/photo-1758685733633-a12889098460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwc2NpZW5jZSUyMG1vZGVybnxlbnwxfHx8fDE3NzAwMzM4MTR8MA&ixlib=rb-4.1.0&q=80&w=600',
];

export const PhotoGallery = () => {
  return (
    <section id="photo-gallery" className="py-24 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">Gallery</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((src, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className={`rounded-xl overflow-hidden shadow-lg ${idx === 0 ? 'col-span-2 row-span-2' : 'col-span-1 h-48'}`}
            >
              <img src={src} alt="Event" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
             <button className="border border-slate-600 text-slate-300 px-6 py-2 rounded-full hover:bg-white hover:text-slate-900 transition-colors">View All Photos</button>
        </div>
      </div>
    </section>
  );
};
