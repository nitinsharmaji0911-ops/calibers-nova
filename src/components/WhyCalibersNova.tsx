import React from 'react';
import { Users, Lightbulb, UserCheck, Target, ArrowRight } from 'lucide-react';

interface WhyCalibersNovaProps {
  onOpenCounselling: () => void;
}

export const WhyCalibersNova: React.FC<WhyCalibersNovaProps> = ({ onOpenCounselling }) => {
  const cards = [
    {
      title: 'Expert Faculty',
      icon: Users,
    },
    {
      title: 'Concept-First Learning',
      icon: Lightbulb,
    },
    {
      title: 'Personal Attention',
      icon: UserCheck,
    },
    {
      title: 'Career Guidance',
      icon: Target,
    },
  ];

  return (
    <section className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#64152D] via-[#521124] to-[#400B1A] border border-white/15 p-5 sm:p-10 lg:p-12 text-left shadow-2xl">
        
        {/* Section Header with Arrow */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <div className="text-[10px] sm:text-xs font-semibold text-zinc-300 mb-1">
              Why Caliber's Nova?
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Built for <br />
              What's <span className="text-[#FFD21F]">Next.</span>
            </h2>
          </div>

          <button
            onClick={onOpenCounselling}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-white/5 hover:bg-[#FFD21F] text-white hover:text-black flex items-center justify-center transition-all duration-300"
            aria-label="Learn why Caliber's Nova"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* 2x2 Grid of Cards with Yellow Icons */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#6C1832]/80 border border-white/12 hover:border-[#FFD21F]/40 transition-all duration-200 flex flex-col justify-between aspect-[4/3] sm:aspect-auto shadow-md"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FFD21F]/15 flex items-center justify-center text-[#FFD21F] mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-base font-bold text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Photographic Card with Handwritten Annotation */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] aspect-[4/3] sm:aspect-[16/9] group shadow-xl mb-4 sm:mb-6">
          <img
            src="/assets/student-writing.jpg"
            alt="Student studying with focus"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140407]/85 via-transparent to-transparent pointer-events-none" />

          {/* Handwritten note: "Good Concepts. Brighter Futures." */}
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-[#1c060e]/90 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl border border-white/15 text-left shadow-xl max-w-[140px] sm:max-w-none">
            <span className="handwriting text-base sm:text-2xl font-bold text-zinc-200 block leading-tight">
              Good Concepts. <br />
              <span className="text-[#FFD21F]">Brighter Futures.</span>
            </span>
          </div>
        </div>

        {/* Mini CTA Card: "Your Next Step Starts Here." */}
        <div
          onClick={onOpenCounselling}
          className="group cursor-pointer rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#300e18] to-[#1c060e] border border-white/10 p-5 sm:p-6 flex items-center justify-between transition-all hover:border-[#FFD21F]/40 active:scale-98"
        >
          <div>
            <div className="text-base sm:text-2xl font-extrabold text-white">
              Your Next Step
            </div>
            <div className="text-base sm:text-2xl font-extrabold text-[#FFD21F]">
              Starts Here.
            </div>
          </div>

          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFD21F] text-black flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md shadow-[#FFD21F]/20">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>

        {/* Handwritten annotation below mini CTA: "Let's figure out what comes next." */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <svg className="w-8 h-8 text-[#FFD21F]" viewBox="0 0 40 40" fill="none">
            <path
              d="M10,8 C22,25 28,25 32,14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <polyline
              points="24,14 32,14 30,22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="handwriting text-xl sm:text-2xl text-zinc-300 font-semibold">
            Let's figure out what comes next.
          </span>
        </div>

      </div>
    </section>
  );
};
