import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ResultsSectionProps {
  onOpenCounselling: () => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenCounselling }) => {
  return (
    <section id="results" className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#2A0611] via-[#22050E] to-[#1A030A] border border-white/10 p-5 sm:p-10 lg:p-12 text-left shadow-2xl">
        
        {/* Section Header with Arrow Button */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Results <br />
              <span className="text-[#FFD21F]">Real Stories.</span>
            </h2>
          </div>

          <button
            onClick={onOpenCounselling}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-white/5 hover:bg-[#FFD21F] text-white hover:text-black flex items-center justify-center transition-all duration-300"
            aria-label="View verified results"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Top Large Card: Academic Performance */}
        <div
          onClick={onOpenCounselling}
          className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden relative aspect-[16/10] sm:aspect-[21/9] border border-white/[0.08] mb-3 sm:mb-4 shadow-xl"
        >
          <img
            src="/assets/student-grad.jpg"
            alt="Academic Performance"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A030A]/95 via-black/30 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-xs sm:text-base font-extrabold text-white tracking-wider uppercase">
              ACADEMIC PERFORMANCE
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-[#FFD21F] text-white group-hover:text-black flex items-center justify-center transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* 2-Column Cards Below: Competitive Exams & Student Achievements */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          
          {/* Left Card: Competitive Exams */}
          <div
            onClick={onOpenCounselling}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden relative aspect-[3/4] border border-white/[0.08] shadow-lg"
          >
            <img
              src="/assets/student-writing.jpg"
              alt="Competitive Exams"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A030A]/95 via-black/30 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
              <span className="text-[10px] sm:text-sm font-extrabold text-white tracking-wider uppercase leading-tight">
                COMPETITIVE <br /> EXAMS
              </span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 group-hover:bg-[#FFD21F] text-white group-hover:text-black flex items-center justify-center transition-colors shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Right Card: Student Achievements */}
          <div
            onClick={onOpenCounselling}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden relative aspect-[3/4] border border-white/[0.08] shadow-lg"
          >
            <img
              src="/assets/student-science.jpg"
              alt="Student Achievements"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A030A]/95 via-black/30 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
              <span className="text-[10px] sm:text-sm font-extrabold text-white tracking-wider uppercase leading-tight">
                STUDENT <br /> ACHIEVEMENTS
              </span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 group-hover:bg-[#FFD21F] text-white group-hover:text-black flex items-center justify-center transition-colors shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
