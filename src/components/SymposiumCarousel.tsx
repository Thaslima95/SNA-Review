import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Speaker } from "./types/symposium";

interface SymposiumCarouselProps {
  posterUrl: string;
  speakers: Speaker[];
  year: string;
  title: string;
  subtitle: string;
  registrationLink?: string;
}

// Featured speaker images (subset of speakers with images)
const speakerImages: { [key: string]: string } = {
  "Prof Long-Jun Wu":
    "https://images.unsplash.com/photo-1701187260663-dc1ab7a67f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzY2llbnRpc3QlMjBtYWxlJTIwcmVzZWFyY2hlcnxlbnwxfHx8fDE3NzIwMDA0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "A/Prof Priya Rajasethupathy":
    "https://images.unsplash.com/photo-1706565029539-d09af5896340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBuZXVyb3NjaWVudGlzdCUyMHJlc2VhcmNoZXJ8ZW58MXx8fHwxNzcyMDAwNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "Prof Kazunori Nakajima":
    "https://images.unsplash.com/photo-1725408118511-5d7bbcd866ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbGUlMjBwcm9mZXNzb3IlMjBhY2FkZW1pY3xlbnwxfHx8fDE3NzIwMDA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "A/Prof Helen Zhou":
    "https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNjaWVudGlzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjAwMDQ4MHww&ixlib=rb-4.1.0&q=80&w=1080",
  "Prof Marie-Eve Tremblay":
    "https://images.unsplash.com/photo-1771050889377-b68415885c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBtYWxlJTIwcmVzZWFyY2hlciUyMGFjYWRlbWljfGVufDF8fHx8MTc3MjAwMDQ4MHww&ixlib=rb-4.1.0&q=80&w=1080",
  "Dr Leena Ali Ibrahim":
    "https://images.unsplash.com/photo-1765833468912-56ca0afa0c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwZmVtYWxlJTIwc2NpZW50aXN0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjAwMDQ4MXww&ixlib=rb-4.1.0&q=80&w=1080",
};

export const SymposiumCarousel: React.FC<SymposiumCarouselProps> = ({
  posterUrl,
  speakers,
  year,
  title,
  subtitle,
  registrationLink,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Get featured speakers (those with images)
  const featuredSpeakers = speakers.filter(
    (speaker) => speakerImages[speaker.name]
  );

  const activeContent = activeIndex === 0
    ? {
        type: 'poster' as const,
        image: posterUrl,
        title: title,
        subtitle: subtitle,
      }
    : {
        type: 'speaker' as const,
        image: speakerImages[featuredSpeakers[activeIndex - 1].name],
        speaker: featuredSpeakers[activeIndex - 1],
      };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 py-16 md:py-20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Layout */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* LEFT: Featured Image */}
            <div className="relative bg-gradient-to-br from-slate-100 to-slate-50 p-8 md:p-12 flex items-center justify-center">
              <div className="w-full max-w-md">
                {activeContent.type === 'poster' ? (
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#991b1b]/5 rounded-3xl blur-2xl transform scale-95" />
                    <img
                      src={activeContent.image}
                      alt={`${year} Symposium Poster`}
                      className="relative w-full h-auto object-contain rounded-2xl shadow-2xl border-4 border-white"
                    />
                  </div>
                ) : (
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#991b1b]/10 rounded-full blur-3xl transform scale-90" />
                    <img
                      src={activeContent.image}
                      alt={activeContent.speaker.name}
                      className="relative w-full aspect-square object-cover rounded-full shadow-2xl border-8 border-white"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: Event Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-red-50 text-[#991b1b] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider w-fit">
                  <span>{year} Symposium</span>
                </div>

                {/* Content */}
                {activeContent.type === 'poster' ? (
                  <>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                      {activeContent.title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 font-light italic font-serif border-l-4 border-[#991b1b] pl-6 leading-relaxed">
                      {activeContent.subtitle}
                    </p>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-3">
                        {activeContent.speaker.name}
                      </h3>
                      <p className="text-lg md:text-xl text-slate-600 font-medium mb-2">
                        {activeContent.speaker.institution}
                      </p>
                      <p className="text-base text-[#991b1b] font-bold uppercase tracking-wide">
                        {activeContent.speaker.country}
                      </p>
                    </div>
                    <p className="text-slate-500 font-light">
                      Featured speaker at the {year} Singapore Neuroscience Association Symposium
                    </p>
                  </>
                )}

                {/* CTA Button */}
                {activeContent.type === 'poster' && registrationLink && (
                  <div className="pt-4">
                    <a
                      href={registrationLink}
                      className="inline-flex items-center justify-center bg-[#991b1b] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#7f1d1d] transition-all duration-300 shadow-sm hover:shadow-md group"
                    >
                      Register Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}

                {activeContent.type === 'speaker' && (
                  <div className="pt-4">
                    <a
                      href="#speakers"
                      className="inline-flex items-center text-[#991b1b] font-semibold hover:underline group"
                    >
                      View All Speakers
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-6">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {/* Poster Thumbnail */}
              <button
                onClick={() => setActiveIndex(0)}
                className={`group relative transition-all duration-300 ${
                  activeIndex === 0 
                    ? 'ring-2 ring-[#991b1b] ring-offset-2' 
                    : 'ring-1 ring-slate-200 hover:ring-slate-300'
                } rounded-lg overflow-hidden`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white">
                  <img
                    src={posterUrl}
                    alt="Symposium"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                {activeIndex === 0 && (
                  <div className="absolute inset-0 bg-[#991b1b]/10" />
                )}
              </button>

              {/* Speaker Thumbnails */}
              {featuredSpeakers.map((speaker, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx + 1)}
                  className={`group relative transition-all duration-300 ${
                    activeIndex === idx + 1
                      ? 'ring-2 ring-[#991b1b] ring-offset-2'
                      : 'ring-1 ring-slate-200 hover:ring-slate-300'
                  } rounded-full overflow-hidden`}
                  title={speaker.name}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-100">
                    <img
                      src={speakerImages[speaker.name]}
                      alt={speaker.name}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  {activeIndex === idx + 1 && (
                    <div className="absolute inset-0 bg-[#991b1b]/10" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};