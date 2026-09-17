import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenCounselling: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCounselling }) => {
  return (
    <section className="hero-safe-pt pb-4 sm:pb-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Large Hero Container (Balanced Regal Maroon) */}
      <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#2E0712] via-[#24050E] to-[#190309] border border-white/10 overflow-hidden shadow-2xl shadow-black/60 w-full">
        
        {/* Subtle Golden Glow behind the student */}
        <div className="absolute top-1/4 right-0 sm:right-10 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-[#FFD21F]/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#FFC400]/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Hero Content Grid */}
        <div className="relative z-10 px-4 sm:px-8 lg:px-12 pt-4 sm:pt-8 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 lg:gap-8">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-4 sm:space-y-6 z-20 max-w-2xl pb-2 lg:pb-16">
              
              {/* Eyebrow */}
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-400">
                <span>DISCIPLINE</span>
                <span className="text-[#FFD21F]">•</span>
                <span>CLARITY</span>
                <span className="text-[#FFD21F]">•</span>
                <span>PROGRESS</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-[40px] sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.04]">
                Better <br />
                Students. <br />
                <span className="text-[#FFD21F]">Brighter</span> <br />
                Futures.
              </h1>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-md hidden sm:block">
                Academic coaching that builds strong concepts, confidence, and futures.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2 w-full sm:w-auto max-w-xs sm:max-w-none">
                <a
                  href="#programs"
                  className="group inline-flex items-center justify-center gap-2 bg-[#FFD21F] hover:bg-[#FFC400] text-black font-extrabold text-sm px-6 py-3.5 sm:px-7 sm:py-4 rounded-full transition-all duration-200 transform active:scale-98 shadow-lg shadow-[#FFD21F]/20 text-center"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <button
                  onClick={onOpenCounselling}
                  className="inline-flex items-center justify-center gap-2 bg-[#2d0d17] hover:bg-white/10 text-white font-semibold text-sm px-6 py-3.5 sm:py-4 rounded-full border border-white/15 transition-all duration-200 backdrop-blur-sm text-center"
                >
                  <span>Book a Counselling</span>
                </button>
              </div>

            </div>

            {/* Right Column: Prominent Large Student Model */}
            <div className="lg:col-span-5 relative mt-2 sm:mt-0 flex items-end justify-between lg:justify-end w-full min-h-[300px] sm:min-h-[420px] lg:min-h-[540px]">
              
              {/* Handwritten Annotation: "Same Students. Bigger Possibilities." */}
              <div className="flex-1 lg:flex-initial lg:absolute lg:left-0 xl:-left-10 lg:bottom-48 z-30 pointer-events-none select-none text-left pb-6 lg:pb-0 pl-1 sm:pl-2 lg:pl-0">
                <div className="handwriting text-2xl sm:text-3xl lg:text-4xl text-zinc-100 font-bold leading-tight rotate-[-4deg] drop-shadow-lg">
                  Same <br />
                  Students. <br />
                  <span className="text-[#FFD21F]">Bigger</span> <br />
                  Possibilities.
                </div>
                {/* Thin curved yellow arrow pointing toward student */}
                <svg
                  className="w-12 h-9 sm:w-16 sm:h-12 text-[#FFD21F] mt-1 ml-2"
                  viewBox="0 0 60 45"
                  fill="none"
                >
                  <path
                    d="M8,8 C18,28 35,30 45,16"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <polyline
                    points="36,14 45,16 43,26"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* The Student Image - Prominent, Large, Commanding */}
              <div className="flex-1 lg:flex-initial relative z-20 flex justify-end items-end w-full lg:w-auto">
                <img
                  src="/assets/hero-student.png"
                  alt="Caliber's Nova student"
                  className="h-[310px] sm:h-[430px] lg:h-[550px] xl:h-[610px] w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] filter contrast-105"
                  loading="eager"
                />
              </div>

            </div>

          </div>
        </div>

        {/* Integrated Stats Strip right below hero model */}
        <div className="border-t border-white/10 bg-[#20040C]/95 backdrop-blur-md px-2 sm:px-8 py-3.5 sm:py-5 relative z-20">
          <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
            
            {/* Col 1: 2007 Since */}
            <div className="flex flex-col items-center justify-center px-1">
              <span className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                2007
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-0.5">
                Since
              </span>
            </div>

            {/* Col 2: 19+ Years */}
            <div className="flex flex-col items-center justify-center px-1">
              <span className="text-xl sm:text-3xl lg:text-4xl font-black text-[#FFD21F] tracking-tight">
                19+
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-0.5">
                Years
              </span>
            </div>

            {/* Col 3: 100% Student Focus */}
            <div className="flex flex-col items-center justify-center px-1">
              <span className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                100%
              </span>
              <span className="text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-0.5 whitespace-nowrap">
                Student Focus
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
