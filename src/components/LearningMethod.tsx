import React from 'react';
import { BookOpen, Edit3, BarChart2, TrendingUp } from 'lucide-react';

export const LearningMethod: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      icon: BookOpen,
    },
    {
      num: '02',
      title: 'Practice',
      icon: Edit3,
    },
    {
      num: '03',
      title: 'Assess',
      icon: BarChart2,
    },
    {
      num: '04',
      title: 'Improve',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="method" className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#1d060b] border border-white/[0.08] p-5 sm:p-10 lg:p-12 text-left">
        
        {/* Eyebrow & Headline with curved arrow */}
        <div className="flex items-start justify-between mb-6 sm:mb-8">
          <div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
              THE CALIBER’S NOVA METHOD
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
              Learn. <br />
              Practice. <br />
              Improve. <br />
              <span className="text-[#FFD21F]">Repeat.</span>
            </h2>
          </div>

          {/* Curved yellow arrow beside headline */}
          <div className="pt-8 sm:pt-12 pr-2">
            <svg
              className="w-10 h-16 sm:w-12 sm:h-20 text-[#FFD21F]"
              viewBox="0 0 50 80"
              fill="none"
            >
              <path
                d="M10,5 C35,15 45,45 25,65"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <polyline
                points="18,55 25,65 35,60"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* 4 Dark Horizontal Rounded Pill Cards with Yellow Numbers & Icons */}
        <div className="space-y-3 mb-6 sm:mb-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-[#280a12] border border-white/[0.06] hover:border-[#FFD21F]/30 transition-all duration-200"
              >
                <span className="text-xs font-mono font-bold text-[#FFD21F] w-6">
                  {step.num}
                </span>
                <Icon className="w-5 h-5 text-[#FFD21F]" />
                <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Classroom Collaboration Photograph with Handwritten Annotation */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] aspect-[4/3] group shadow-xl">
          <img
            src="/assets/classroom.jpg"
            alt="Students in classroom"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140407]/85 via-transparent to-transparent pointer-events-none" />

          {/* Handwritten Annotation: "Progress Looks Good On You." */}
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-[#1c060e]/90 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl border border-white/15 text-left shadow-xl max-w-[130px] sm:max-w-none">
            <span className="handwriting text-base sm:text-2xl font-bold text-zinc-200 block leading-tight">
              Progress <br />
              <span className="text-[#FFD21F]">Looks Good</span> <br />
              On You.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
