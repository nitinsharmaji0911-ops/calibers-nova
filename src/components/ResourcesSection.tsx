import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ResourcesSectionProps {
  onOpenCounselling: () => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ onOpenCounselling }) => {
  return (
    <section id="resources" className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#1d060b] border border-white/[0.08] p-5 sm:p-10 lg:p-12 text-left">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <div className="text-[10px] sm:text-xs font-semibold text-zinc-400 mb-1">
              Resources
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Stay <span className="text-[#FFD21F]">Ahead.</span>
            </h2>
          </div>

          <button
            onClick={onOpenCounselling}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-white/5 hover:bg-[#FFD21F] text-white hover:text-black flex items-center justify-center transition-all duration-300"
            aria-label="View all resources"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Column Cards: Study Tips & Exam Updates */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          
          {/* Card 1: Study Tips */}
          <div
            onClick={onOpenCounselling}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden relative aspect-[4/3] border border-white/[0.08] shadow-lg"
          >
            <img
              src="/assets/student-writing.jpg"
              alt="Study Tips"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140407]/90 via-black/30 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 text-left">
              <span className="text-xs sm:text-base font-extrabold text-white">
                Study Tips
              </span>
            </div>
          </div>

          {/* Card 2: Exam Updates */}
          <div
            onClick={onOpenCounselling}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden relative aspect-[4/3] border border-white/[0.08] shadow-lg"
          >
            <img
              src="/assets/classroom.jpg"
              alt="Exam Updates"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140407]/90 via-black/30 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 text-left">
              <span className="text-xs sm:text-base font-extrabold text-white">
                Exam Updates
              </span>
            </div>
          </div>

        </div>

        {/* Full-width Card Below: Career Guidance with stacked books */}
        <div
          onClick={onOpenCounselling}
          className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden relative aspect-[16/9] sm:aspect-[21/9] border border-white/[0.08] shadow-xl"
        >
          <img
            src="/assets/career-books.jpg"
            alt="Career Guidance Books - Discipline, Skills, Opportunity, Freedom"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140407]/90 via-black/25 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="text-xs sm:text-base font-extrabold text-white">
              Career Guidance
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
