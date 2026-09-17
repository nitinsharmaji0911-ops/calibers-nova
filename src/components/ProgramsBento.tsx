import React from 'react';
import { ArrowUpRight, Sparkles, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { CategoryType } from './Navbar';

interface ProgramsBentoProps {
  selectedCategory: CategoryType;
  onSelectProgram: (programName: string) => void;
  onOpenCounselling: () => void;
}

export const ProgramsBento: React.FC<ProgramsBentoProps> = ({
  selectedCategory,
  onSelectProgram,
  onOpenCounselling,
}) => {
  const cards = [
    {
      id: 'foundation',
      title: 'Classes',
      subtitle: '8th – 10th',
      image: '/assets/student-foundation.jpg',
      category: ['Class 9th', 'Class 10th'],
    },
    {
      id: 'science-commerce',
      title: 'Classes',
      subtitle: '11th – 12th',
      image: '/assets/student-science.jpg',
      category: ['Class 11th', 'Class 12th'],
    },
    {
      id: 'graduation',
      title: 'Graduation',
      subtitle: 'B.Com • BBA • BCA',
      image: '/assets/student-grad.jpg',
      category: ['All'],
    },
    {
      id: 'entrance',
      title: 'Entrance Prep',
      subtitle: 'CAT • JEE • NEET',
      image: '/assets/student-writing.jpg',
      category: ['Class 11th', 'Class 12th'],
    },
  ];

  return (
    <section id="programs" className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header with Arrow Circle */}
      <div className="flex items-center justify-between mb-5 sm:mb-8 text-left px-1">
        <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your <br />
            <span className="text-[#FFD21F]">Next Chapter.</span>
          </h2>
        </div>
        <button
          onClick={onOpenCounselling}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-white/5 hover:bg-[#FFD21F] text-white hover:text-black flex items-center justify-center transition-all duration-300"
          aria-label="View all programs"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* 2x2 Grid of Cards on mobile, expanding to 4-cols or bento on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mb-3 sm:mb-5">
        {cards.map((card) => {
          const isRelevant =
            selectedCategory === 'All' ||
            card.category.includes(selectedCategory);

          return (
            <div
              key={card.id}
              onClick={() => {
                onSelectProgram(`${card.title} ${card.subtitle}`);
                onOpenCounselling();
              }}
              className={`group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-[#28060F] border transition-all duration-300 flex flex-col justify-between relative aspect-[3/4] ${
                isRelevant
                  ? 'border-white/10 hover:border-[#FFD21F]/50 shadow-lg'
                  : 'opacity-40 grayscale border-white/5'
              }`}
            >
              {/* Card Photo */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A030A] via-[#1A030A]/60 to-transparent" />

              {/* Bottom Card Meta matching mockup */}
              <div className="relative z-10 p-3.5 sm:p-5 mt-auto flex items-end justify-between w-full text-left">
                <div>
                  <div className="text-xs sm:text-base font-extrabold text-white leading-tight">
                    {card.title}
                  </div>
                  <div className="text-[11px] sm:text-xs text-zinc-300 font-medium mt-0.5">
                    {card.subtitle}
                  </div>
                </div>

                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-[#FFD21F] text-white group-hover:text-black flex items-center justify-center transition-colors shrink-0 ml-2">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bento Row: Yellow Card + Discipline Creates Freedom Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        
        {/* Yellow Bento Card: "MORE THAN CLASSES: A Brighter You." */}
        <div
          onClick={onOpenCounselling}
          className="group cursor-pointer rounded-2xl sm:rounded-3xl bg-[#FFD21F] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 transform active:scale-98 shadow-xl shadow-[#FFD21F]/20 text-black text-left min-h-[160px] sm:min-h-[200px]"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-black/80">
              MORE THAN <br className="sm:hidden" /> CLASSES
            </span>
            <Sparkles className="w-5 h-5 text-black" />
          </div>

          <div className="my-4">
            <h3 className="text-2xl sm:text-4xl font-black text-black leading-none">
              A Brighter <br className="hidden sm:inline" />
              You.
            </h3>
          </div>

          <div className="flex justify-end">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-black/30 flex items-center justify-center group-hover:bg-black group-hover:text-[#FFD21F] transition-colors">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>

        {/* Caliber's Nova Event Highlights Card with Modern Scrolling Effect (Real GMB Photos) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#28060F] p-4 sm:p-5 flex flex-col justify-between shadow-xl min-h-[220px] sm:min-h-[260px] group text-left">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-2 sm:mb-3 z-10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD21F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD21F]"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#FFD21F]">
                Life @ Nova • Events & Highlights
              </span>
            </div>
            <span className="text-[10px] text-zinc-500 font-medium hidden sm:inline">
              Auto-scrolls • Pause on hover
            </span>
          </div>

          {/* Modern Horizontal Scrolling Reel with Edge Fade Masks */}
          <div className="relative w-full overflow-hidden mask-marquee-horizontal py-1">
            <div className="flex gap-3 w-max animate-marquee-left pause-hover">
              {[
                {
                  id: 'h-vyaapar',
                  tag: 'MBA SUMMIT',
                  title: 'Vyaapar: The Big MBA Summit',
                  subtitle: "Caliber's Nova presents Nagpur's premier business event",
                  image: '/assets/gmb_event_vyaapar.jpg',
                },
                {
                  id: 'h-gathering',
                  tag: 'ANNUAL MEET',
                  title: 'Nova Student Meet & Socials',
                  subtitle: 'Student community, peer networks & celebrations',
                  image: '/assets/gmb_photo_3.jpg',
                },
                {
                  id: 'h-lecture',
                  tag: 'LIVE LECTURE',
                  title: 'Commerce & Accounts Mastery',
                  subtitle: 'In-depth interactive whiteboard sessions by senior faculty',
                  image: '/assets/gmb_photo_4.jpg',
                },
                {
                  id: 'h-study',
                  tag: 'DOUBT SESSIONS',
                  title: 'Classroom Doubt-Solving',
                  subtitle: 'Focused self-study under the "जीत की ज़िद" philosophy',
                  image: '/assets/gmb_photo_1.jpg',
                },
                {
                  id: 'h-campus',
                  tag: 'CENTRAL CAMPUS',
                  title: 'Natraj Tower, Mahal Hub',
                  subtitle: 'Flagship academic center at Zenda Square, Nagpur',
                  image: '/assets/gmb_photo_2.jpg',
                },
                {
                  id: 'h-vyaapar-dup',
                  tag: 'MBA SUMMIT',
                  title: 'Vyaapar: The Big MBA Summit',
                  subtitle: "Caliber's Nova presents Nagpur's premier business event",
                  image: '/assets/gmb_event_vyaapar.jpg',
                },
                {
                  id: 'h-gathering-dup',
                  tag: 'ANNUAL MEET',
                  title: 'Nova Student Meet & Socials',
                  subtitle: 'Student community, peer networks & celebrations',
                  image: '/assets/gmb_photo_3.jpg',
                },
                {
                  id: 'h-lecture-dup',
                  tag: 'LIVE LECTURE',
                  title: 'Commerce & Accounts Mastery',
                  subtitle: 'In-depth interactive whiteboard sessions by senior faculty',
                  image: '/assets/gmb_photo_4.jpg',
                },
                {
                  id: 'h-study-dup',
                  tag: 'DOUBT SESSIONS',
                  title: 'Classroom Doubt-Solving',
                  subtitle: 'Focused self-study under the "जीत की ज़िद" philosophy',
                  image: '/assets/gmb_photo_1.jpg',
                },
                {
                  id: 'h-campus-dup',
                  tag: 'CENTRAL CAMPUS',
                  title: 'Natraj Tower, Mahal Hub',
                  subtitle: 'Flagship academic center at Zenda Square, Nagpur',
                  image: '/assets/gmb_photo_2.jpg',
                },
              ].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={onOpenCounselling}
                  className="cursor-pointer relative w-48 sm:w-56 h-36 sm:h-40 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shrink-0 group/item bg-[#300713] transition-all duration-300 hover:border-[#FFD21F]/40 hover:scale-[1.02]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F040B]/95 via-[#1F040B]/40 to-transparent" />
                  
                  {/* Event Content Overlay */}
                  <div className="absolute inset-0 p-3 flex flex-col justify-between text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#FFD21F] text-black shadow-sm">
                        {item.tag}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-white leading-snug line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-zinc-300 line-clamp-1 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Subtext */}
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[11px] text-zinc-400">
            <span>Moments from Caliber's Nova GMB</span>
            <button
              onClick={onOpenCounselling}
              className="text-[#FFD21F] hover:underline font-semibold inline-flex items-center gap-1"
            >
              <span>Join Next Batch</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>

      {/* ─── SKILLS & CAREER ACCELERATION SECTION ─── */}
      <div id="skills-section" className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/10 text-left space-y-5 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 px-1">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2EA33A]/15 border border-[#2EA33A]/30 text-[#4ADE80] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span>CAREER SKILLS • FUTURE PROOF</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Skills for the <span className="text-[#4ADE80]">Real World.</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-normal mt-1 max-w-xl leading-relaxed">
              Don't wait for your degree to complete. Build in-demand, high-income practical skills alongside your academic studies.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400 font-semibold">
            <span>Official Skills Partner:</span>
            <span className="text-white font-bold tracking-wide flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              WELURIK
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span>
            </span>
          </div>
        </div>

        {/* Digital Marketing Course Card */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#2E0713] via-[#24050E] to-[#180309] border border-white/12 p-5 sm:p-8 lg:p-10 overflow-hidden shadow-2xl group">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#2EA33A]/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#FFD21F]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 space-y-5 sm:space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#2EA33A]/20 text-[#4ADE80] text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase border border-[#2EA33A]/30">
                RECOMMENDED CAREER PROGRAM
              </span>
              <span className="text-[11px] sm:text-xs text-zinc-400 font-medium">
                4 Months Practical • Classroom & Live Online
              </span>
            </div>

            <div className="max-w-2xl space-y-2">
              <h4 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Advanced Digital Marketing & AI Tools Program
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Complement your commerce degree or competitive exams with practical mastery in Performance Advertising, Search Engine Optimization (SEO), Social Media, and AI Automation with Welurik.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {[
                { title: '100% Placement Support', desc: 'Job interviews & freelance guidance' },
                { title: '4-Month Commando Training', desc: '100% hands-on live tools' },
                { title: 'Meta & Google Ads Mastery', desc: 'Learn performance marketing' },
                { title: 'Live Client Projects', desc: 'Real ad budgets & verified portfolio' },
              ].map((feat) => (
                <div key={feat.title} className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#4ADE80]/40 transition-all flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">{feat.title}</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">{feat.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10">
              <div className="text-xs text-zinc-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                <span>Next training batch starts soon • Limited student intake</span>
              </div>
              <a
                href="https://welurik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2EA33A] hover:bg-[#258B30] text-white font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-[#2EA33A]/25 active:scale-95 shrink-0"
              >
                <span>Explore Digital Marketing at Welurik.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
