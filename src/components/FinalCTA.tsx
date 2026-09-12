import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenCounselling: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenCounselling }) => {
  return (
    <section className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Off-white Admissions Open Rounded Banner matching mobile mockup */}
      <div
        onClick={onOpenCounselling}
        className="group cursor-pointer relative rounded-[28px] sm:rounded-[36px] bg-[#FAF9F5] text-black overflow-hidden p-6 sm:p-10 shadow-2xl transition-all duration-300 transform active:scale-98"
      >
        <div className="grid grid-cols-12 items-center gap-4">
          
          {/* Left Side: Typography & Button */}
          <div className="col-span-7 sm:col-span-8 flex flex-col justify-center text-left space-y-2 sm:space-y-4">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-600">
              ADMISSIONS OPEN
            </span>

            <h3 className="text-2xl sm:text-5xl font-black text-black tracking-tight leading-[1.08]">
              Let's Build <br />
              Your <span className="text-[#FFC400]">Next Chapter.</span>
            </h3>

            <div className="pt-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFD21F] text-black flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md shadow-[#FFD21F]/30">
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Right Side: Smiling Student with Backpack */}
          <div className="col-span-5 sm:col-span-4 flex justify-end items-end">
            <div className="relative w-full max-w-[170px] sm:max-w-[220px]">
              <img
                src="/assets/hero-student.png"
                alt="Admissions Open student"
                className="w-full max-h-[170px] sm:max-h-[220px] object-contain object-bottom drop-shadow-md"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
