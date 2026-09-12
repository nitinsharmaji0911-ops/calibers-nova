import React from 'react';
import { Compass, GraduationCap, Users, Award } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-2 mb-12 sm:mb-16">
      <div className="rounded-[24px] sm:rounded-[30px] bg-[#1d060b] border border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-xl shadow-black/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          
          {/* Stat 1: 2007 Established */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-3 sm:pt-0 sm:px-4 first:pl-0">
            <div className="flex items-center gap-2 mb-1 text-[#FFD21F]">
              <Compass className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Founding Year
              </span>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              2007
            </div>
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-300 mt-1">
              ESTABLISHED
            </div>
          </div>

          {/* Stat 2: 19+ Years of Guidance */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-4 sm:pt-0 sm:px-6">
            <div className="flex items-center gap-2 mb-1 text-[#FFD21F]">
              <Award className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Track Record
              </span>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFD21F] tracking-tight">
              19+
            </div>
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-300 mt-1">
              YEARS OF GUIDANCE
            </div>
          </div>

          {/* Stat 3: Multiple Academic Pathways */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-4 sm:pt-0 sm:px-6">
            <div className="flex items-center gap-2 mb-1 text-[#FFD21F]">
              <GraduationCap className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Curriculum Scope
              </span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              MULTIPLE
            </div>
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-300 mt-1">
              ACADEMIC PATHWAYS
            </div>
          </div>

          {/* Stat 4: Student Focused & Mentor-Led */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-4 sm:pt-0 sm:px-6 last:pr-0">
            <div className="flex items-center gap-2 mb-1 text-[#FFD21F]">
              <Users className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Methodology
              </span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              STUDENT
            </div>
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-300 mt-1">
              FOCUSED & MENTOR-LED
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
