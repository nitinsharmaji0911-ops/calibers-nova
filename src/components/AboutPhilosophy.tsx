import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AboutPhilosophyProps {
  onOpenCounselling: () => void;
}

export const AboutPhilosophy: React.FC<AboutPhilosophyProps> = ({ onOpenCounselling }) => {
  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#1d060b] border border-white/[0.08] overflow-hidden p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Short Headline & Concise Copy */}
          <div className="lg:col-span-5 flex flex-col space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD21F]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFD21F]">
                THE CALIBER’S NOVA APPROACH
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Education <br />
              That Goes <span className="text-[#FFD21F]">Further</span>.
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
              Learning isn't just about finishing a syllabus. It's about building the confidence and clarity to take on what's next.
            </p>

            {/* Concise value highlights */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FFD21F] shrink-0" />
                <span>Concept mastery before rote memorization</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FFD21F] shrink-0" />
                <span>Small batch mentorship for every individual student</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FFD21F] shrink-0" />
                <span>Continuous analytical feedback & doubt resolution</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenCounselling}
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#FFD21F] transition-colors"
              >
                <span>Learn About Our Methodology</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Large Vibrant Classroom Student Photograph (Full Color) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 group aspect-[4/3] shadow-2xl">
              <img
                src="/assets/classroom.jpg"
                alt="Students collaborating and studying actively in Caliber's Nova classroom"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140407]/85 via-[#140407]/20 to-transparent pointer-events-none" />

              {/* Minimalist Floating Badge on Image */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 right-5 sm:right-auto flex items-center gap-3 bg-[#1c060e]/85 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFD21F] animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide">
                  Nagpur Institute Campus • Daily Doubt Solving
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
