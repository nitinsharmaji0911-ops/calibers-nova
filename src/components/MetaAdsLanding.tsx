import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MetaAdsLandingProps {
  onNavigateHome?: () => void;
}

interface ReviewItem {
  id: string;
  name: string;
  degree: string;
  result: string;
  text: string;
}

const reviewsCol1: ReviewItem[] = [
  {
    id: 'r1',
    name: 'Aman Verma',
    degree: 'B.Com Sem 2 • RTMNU',
    result: 'Scored 68/80 in Accounts',
    text: 'Financial Accounts was stuck for two attempts. Pankaj Sir drilled ledger adjustments and university step-marking. Cleared comfortably on my next attempt.',
  },
  {
    id: 'r2',
    name: 'Shruti Deshpande',
    degree: 'BBA Sem 4',
    result: 'Scored 62/80 in Stats',
    text: 'Business Statistics was blocking my degree promotion. The shortcut formulas and past 5-year question banks made stats so easy to pass.',
  },
  {
    id: 'r3',
    name: 'Akash Joshi',
    degree: 'B.Com Final Year',
    result: 'Cleared Cost & Tax Backlogs',
    text: 'Had 2 backlogs in Cost Accounts and Income Tax. Cleared both in the supplementary exam. Best commerce guidance.',
  },
];

const reviewsCol2: ReviewItem[] = [
  {
    id: 'r4',
    name: 'Nikhil Raut',
    degree: 'BCCA Sem 3',
    result: 'Cleared Cost Accounting',
    text: 'Was afraid I would lose campus placement eligibility. Pankaj Sir’s targeted unit-wise questions saved my entire final year.',
  },
  {
    id: 'r5',
    name: 'Pooja Agarwal',
    degree: 'Class 12th HSC Commerce',
    result: 'Cleared Accounts with 72/100',
    text: 'Failed Accountancy re-exam previously. Pankaj Sir personally guided my journal entries and balance sheet format. Cleared with ease.',
  },
  {
    id: 'r6',
    name: 'Kunal Mehta',
    degree: 'BBA Sem 2 • RTMNU',
    result: 'Passed on First Attempt',
    text: 'Strictly focused on what comes in university exams and how evaluators award step marks. Highly recommended to any student with backlogs.',
  },
];

const ReviewCard: React.FC<{ review: ReviewItem }> = ({ review }) => (
  <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-[#1c080d] via-[#140407] to-[#0c090a] border border-white/[0.08] hover:border-[#FFD21F]/30 text-left transition-all duration-300 shadow-lg group flex flex-col justify-between">
    <p className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed font-normal mb-2.5">
      “{review.text}”
    </p>

    <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between gap-1">
      <div className="min-w-0 flex-1">
        <div className="text-xs font-bold text-white group-hover:text-[#FFD21F] transition-colors truncate">
          {review.name}
        </div>
        <div className="text-[9.5px] text-zinc-400 font-medium truncate">
          {review.degree}
        </div>
        <div className="text-[10px] text-emerald-400 font-semibold truncate mt-0.5">
          {review.result}
        </div>
      </div>
      <div className="shrink-0 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[9px] font-mono text-zinc-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
        <span>Verified</span>
      </div>
    </div>
  </div>
);

export const MetaAdsLanding: React.FC<MetaAdsLandingProps> = ({ onNavigateHome }) => {
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [degree, setDegree] = useState('B.Com');
  const [subject, setSubject] = useState('Financial Accounts');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(digitsOnly);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, '');
    if (!studentName.trim()) {
      alert('Please fill in your name.');
      return;
    }
    if (cleanPhone.length !== 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#FFD21F', '#ffffff'],
        });
      } catch (err) {
        console.error(err);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0c090a] text-zinc-100 font-sans selection:bg-[#FFD21F] selection:text-black flex flex-col justify-between">
      {/* 1. Floating Pill Header matching main website (non-clickable hamburger) */}
      <header className="sticky top-3 sm:top-4 z-50 px-3 sm:px-4 max-w-lg mx-auto w-full">
        <div className="w-full bg-[#180409]/90 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between shadow-2xl shadow-black/80">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden border border-white/20 shrink-0">
              <img
                src="/assets/logo.png"
                alt="Caliber's Nova Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-extrabold text-sm sm:text-base tracking-tight leading-tight whitespace-nowrap">
              CALIBER’S <span className="text-[#FFD21F]">NOVA</span>
            </span>
          </div>

          {/* Decorative Hamburger (Non-clickable as requested) */}
          <div className="p-1 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
            <div className="space-y-1 w-5 flex flex-col justify-center items-end py-0.5">
              <span className="block w-5 h-0.5 bg-white rounded-full"></span>
              <span className="block w-3.5 h-0.5 bg-[#FFD21F] rounded-full"></span>
              <span className="block w-5 h-0.5 bg-white rounded-full"></span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Main Body */}
      <main className="flex-1 max-w-lg mx-auto w-full px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        {/* Title */}
        <div className="text-center space-y-2">
          <div className="inline-block text-[10px] sm:text-[11px] font-semibold text-[#FFD21F] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
            RTMNU • Commerce Backlog Cell
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            Clear Your AT/KT on Next Attempt
          </h1>
          {/* Continuous Moving Line */}
          <div className="relative w-full overflow-hidden mask-marquee-horizontal py-1 select-none">
            <div className="flex gap-4 w-max animate-marquee-left whitespace-nowrap text-xs sm:text-sm text-zinc-400 font-medium">
              {[0, 1].map((groupIdx) => (
                <div key={groupIdx} className="flex items-center gap-4 shrink-0">
                  <span>
                    BBA • B.Com • BCCA • Mentored by Founder&nbsp;&nbsp;<span className="text-white font-semibold">Pankaj Agrawal Sir</span>
                  </span>
                  <span className="text-[#FFD21F] text-xs">✦</span>
                  <span>
                    BBA • B.Com • BCCA • Mentored by Founder&nbsp;&nbsp;<span className="text-white font-semibold">Pankaj Agrawal Sir</span>
                  </span>
                  <span className="text-[#FFD21F] text-xs">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lead Capture Form Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#141113] border border-white/[0.08] shadow-2xl">
          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 bg-[#FFD21F]/10 border border-[#FFD21F]/30 rounded-full flex items-center justify-center mx-auto text-[#FFD21F]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Application Received!</h3>
              <p className="text-xs text-zinc-300 max-w-xs mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{studentName}</strong>! Our academic desk will call you at <strong className="text-white">{phone}</strong> and send your passing roadmap to <strong className="text-white">{email}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-left">
              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs sm:text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#FFD21F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="10-digit mobile number"
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs sm:text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#FFD21F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs sm:text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#FFD21F]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">
                  Course
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {['B.Com', 'BBA', 'BCCA', '12th'].map((deg) => (
                    <button
                      type="button"
                      key={deg}
                      onClick={() => setDegree(deg)}
                      className={`py-1.5 rounded-md text-xs font-semibold border transition-all ${
                        degree === deg
                          ? 'bg-[#FFD21F] text-black border-[#FFD21F]'
                          : 'bg-black/20 text-zinc-400 border-white/[0.08] hover:border-white/20'
                      }`}
                    >
                      {deg}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">
                  Backlog Subject
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#FFD21F]"
                >
                  <option value="Financial Accounts" className="bg-[#141113]">Financial Accounts</option>
                  <option value="Cost Accounting" className="bg-[#141113]">Cost Accounting</option>
                  <option value="Corporate Accounts" className="bg-[#141113]">Corporate Accounts</option>
                  <option value="Business Statistics / Maths" className="bg-[#141113]">Business Stats / Maths</option>
                  <option value="Income Tax" className="bg-[#141113]">Income Tax</option>
                  <option value="Multiple Backlogs" className="bg-[#141113]">Multiple Subjects</option>
                </select>
              </div>

              {/* Form submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-lg bg-[#FFD21F] hover:bg-[#e6bd1b] text-black font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 active:scale-95 disabled:opacity-50 mt-2 shadow-md shadow-black/40"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Clear My Backlog</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* 3. Verified Student Reviews (Infinite 2-Column Vertical Marquee Effect from Real Website) */}
        <div className="pt-2">
          <div className="text-center mb-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD21F]">
              VERIFIED AT/KT TURNAROUNDS
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
              Students Who Cleared Backlogs
            </h3>
          </div>

          {/* 2-Column Marquee matching TestimonialsSection.tsx */}
          <div className="relative h-[340px] sm:h-[380px] overflow-hidden mask-marquee-vertical rounded-xl">
            {/* Top & Bottom Fade Overlays */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#0c090a] via-[#0c090a]/80 to-transparent z-20" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0c090a] via-[#0c090a]/80 to-transparent z-20" />

            <div className="grid grid-cols-2 gap-2.5 h-full items-start">
              {/* Column 1 - Moving Up */}
              <div className="animate-marquee-up-slow pause-hover flex flex-col gap-2.5">
                {[...reviewsCol1, ...reviewsCol1].map((rev, idx) => (
                  <ReviewCard key={`col1-${rev.id}-${idx}`} review={rev} />
                ))}
              </div>

              {/* Column 2 - Moving Down */}
              <div className="animate-marquee-down-slow pause-hover flex flex-col gap-2.5">
                {[...reviewsCol2, ...reviewsCol2].map((rev, idx) => (
                  <ReviewCard key={`col2-${rev.id}-${idx}`} review={rev} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 4. Footer (No Mahal Nagpur) */}
      <footer className="py-4 border-t border-white/[0.06] text-center text-xs text-zinc-500">
        <p>© 2026 Caliber’s Nova</p>
        <p className="mt-0.5 text-zinc-400">
          Email: <a href="mailto:info@calibernova.in" className="text-zinc-200 hover:text-white">info@calibernova.in</a>
        </p>
      </footer>
    </div>
  );
};
