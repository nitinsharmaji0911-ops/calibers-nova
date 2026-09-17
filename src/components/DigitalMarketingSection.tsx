import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2, TrendingUp, Laptop, Award } from 'lucide-react';

export const DigitalMarketingSection: React.FC = () => {
  const highlights = [
    {
      title: '100% Placement & Freelance Support',
      desc: 'Dedicated career cell providing placement assistance, resume building, and freelancing project guidance.',
      icon: TrendingUp,
      tag: 'Career Ready',
    },
    {
      title: '4-Month Commando Practical Training',
      desc: 'Zero boring theoretical lectures. 100% hands-on learning with live tools, ad dashboards, and real budgets.',
      icon: Laptop,
      tag: 'Practical First',
    },
    {
      title: 'Live Client Projects & Assignments',
      desc: 'Work on actual live accounts, manage ad budgets, perform SEO audits, and build a verified portfolio.',
      icon: Award,
      tag: 'Real Experience',
    },
    {
      title: 'Meta Ads, Google Ads & GenAI Tools',
      desc: 'Master full-funnel performance marketing, search advertising, copywriting, and AI-driven growth workflows.',
      icon: Sparkles,
      tag: 'High Income Skill',
    },
  ];

  return (
    <section id="digital-marketing" className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#280912] via-[#1c050c] to-[#120306] border border-white/10 p-6 sm:p-10 lg:p-12 text-left overflow-hidden shadow-2xl shadow-black/60">
        
        {/* Soft Ambient Accents */}
        <div className="absolute -top-24 -right-24 w-80 sm:w-96 h-80 sm:h-96 bg-[#2EA33A]/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 sm:w-80 h-72 sm:h-80 bg-[#FFD21F]/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 space-y-6 sm:space-y-8">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-white/[0.08] pb-5 sm:pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2EA33A]/15 border border-[#2EA33A]/30 text-[#4ADE80] text-[10px] sm:text-xs font-bold uppercase tracking-wider w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
              <span>Career Acceleration • Partner Platform</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
              <span>Upskilling Partner:</span>
              <span className="text-white font-bold tracking-wide flex items-center gap-1">
                WELURIK
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span>
              </span>
            </div>
          </div>

          {/* Main Headline & Context */}
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
              Master Digital Marketing & <br />
              AI Tools with <span className="text-[#4ADE80]">Welurik.</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
              Complement your college degree or board exams with high-demand, high-income practical skills. Learn performance advertising, SEO, social media marketing, and AI automation with Nagpur’s premier career school.
            </p>
          </div>

          {/* 4 Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#4ADE80]/40 transition-all duration-300 flex flex-col justify-between group hover:bg-white/[0.05]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-[#2EA33A]/15 border border-[#2EA33A]/30 flex items-center justify-center text-[#4ADE80] group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/10">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white group-hover:text-[#4ADE80] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400 group-hover:text-zinc-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>Included in Course</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Strip with Redirect Button */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <div className="space-y-0.5">
              <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <span>Want to see full syllabus, fees & batch dates?</span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">New Batch Starting</span>
              </div>
              <p className="text-xs text-zinc-400">
                Directly visit Welurik to explore the 4-month commando digital marketing training program.
              </p>
            </div>

            <a
              href="https://welurik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[#2EA33A] hover:bg-[#258B30] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-[#2EA33A]/25 active:scale-95 shrink-0"
            >
              <span>Explore on Welurik.com</span>
              <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
