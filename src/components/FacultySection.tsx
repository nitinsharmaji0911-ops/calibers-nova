import React from 'react';
import { ArrowRight, Play, Quote } from 'lucide-react';

interface FacultySectionProps {
  onOpenCounselling: () => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ onOpenCounselling }) => {
  return (
    <section id="faculty" className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#1d060b] border border-white/[0.08] p-5 sm:p-10 lg:p-12 text-left">
        
        {/* Section Header with Arrow */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <div className="text-[10px] sm:text-xs font-semibold text-zinc-400 mb-1">
              Our Faculty
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              More Than <br />
              <span className="text-[#FFD21F]">Teachers.</span>
            </h2>
          </div>

          <button
            onClick={onOpenCounselling}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-white/5 hover:bg-[#FFD21F] text-white hover:text-black flex items-center justify-center transition-all duration-300"
            aria-label="Meet our mentors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Large Faculty Mentor Photograph with Play Button & Handwritten Annotation */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] aspect-[4/3] sm:aspect-[16/9] group shadow-2xl mb-4 sm:mb-6">
          <img
            src="/assets/faculty.jpg"
            alt="Faculty mentor teaching"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140407]/85 via-transparent to-transparent pointer-events-none" />

          {/* Center Translucent Play Button matching mobile mockup */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white ml-1" />
            </div>
          </div>

          {/* Handwritten Annotation: "Guiding What's Next." */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#1c060e]/85 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15 text-left shadow-xl">
            <span className="handwriting text-xl sm:text-2xl font-bold text-zinc-200 block leading-tight">
              Guiding <br />
              What's <span className="text-[#FFD21F]">Next.</span>
            </span>
          </div>
        </div>

        {/* Golden Gradient Quote Card matching mobile mockup */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#3b121c] via-[#240810] to-[#160408] border border-[#FFD21F]/30 p-6 sm:p-8 text-left shadow-xl">
          <Quote className="w-7 h-7 text-[#FFD21F] fill-[#FFD21F] mb-3" />
          
          <blockquote className="text-lg sm:text-2xl font-extrabold text-white leading-snug tracking-tight">
            Better Students <br />
            Create Brighter <br />
            Futures.
          </blockquote>

          <div className="mt-4 flex items-center gap-2">
            <div className="w-6 h-0.5 bg-[#FFD21F]" />
            <span className="text-xs font-semibold text-zinc-300">
              Pankaj Agrawal • Founder & Academic Mentor (Est. 2007)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
