import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
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
  <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E8CCD2] hover:border-[#7A1526]/40 text-left transition-all duration-300 shadow-md shadow-[#3B0B16]/[0.04] group flex flex-col justify-between">
    <p className="text-[11px] sm:text-xs text-[#4A202A] leading-relaxed font-normal mb-2.5">
      “{review.text}”
    </p>

    <div className="pt-2 border-t border-[#F0D8DD] flex items-center justify-between gap-1">
      <div className="min-w-0 flex-1">
        <div className="text-xs font-bold text-[#2E070F] group-hover:text-[#7A1526] transition-colors truncate">
          {review.name}
        </div>
        <div className="text-[9.5px] text-[#7A4B56] font-medium truncate">
          {review.degree}
        </div>
        <div className="text-[10px] text-[#059669] font-bold truncate mt-0.5">
          {review.result}
        </div>
      </div>
      <div className="shrink-0 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[9px] font-mono text-emerald-700">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
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
          colors: ['#7A1526', '#FFD21F', '#2EA33A'],
        });
      } catch (err) {
        console.error(err);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FAF2F4] text-[#2E070F] font-sans selection:bg-[#7A1526] selection:text-white flex flex-col justify-between relative overflow-x-hidden">
      {/* Subtle Light Maroon Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-[#E8CBD1]/40 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] right-[-10%] w-[500px] h-[400px] bg-[#F0D5DA]/35 rounded-full blur-[140px]" />
      </div>

      {/* 1. Floating Pill Header (Signature Dark Maroon/Burgundy Pill matching main website) */}
      <header className="sticky top-3 sm:top-4 z-50 px-3 sm:px-4 max-w-lg mx-auto w-full relative">
        <div className="w-full bg-[#180409]/95 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between shadow-2xl shadow-[#2E070F]/20">
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
      <main className="flex-1 max-w-lg mx-auto w-full px-4 sm:px-6 py-6 sm:py-10 space-y-7 relative z-10">
        {/* Title & Moving Subtitle */}
        <div className="text-center space-y-2">
          <div className="inline-block text-[10px] sm:text-[11px] font-bold text-[#7A1526] uppercase tracking-wider px-3 py-1 rounded-full bg-[#7A1526]/10 border border-[#7A1526]/20">
            RTMNU • Commerce Backlog Cell
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#2E070F] tracking-tight leading-tight">
            Clear Your AT/KT on Next Attempt
          </h1>
          {/* Continuous Moving Line */}
          <div className="relative w-full overflow-hidden mask-marquee-horizontal py-1 select-none">
            <div className="flex gap-4 w-max animate-marquee-left whitespace-nowrap text-xs sm:text-sm text-[#6E424D] font-medium">
              {[0, 1].map((groupIdx) => (
                <div key={groupIdx} className="flex items-center gap-4 shrink-0">
                  <span>
                    BBA • B.Com • BCCA • Mentored by Founder&nbsp;&nbsp;<span className="text-[#2E070F] font-bold">Pankaj Agrawal Sir</span>
                  </span>
                  <span className="text-[#7A1526] text-xs">✦</span>
                  <span>
                    BBA • B.Com • BCCA • Mentored by Founder&nbsp;&nbsp;<span className="text-[#2E070F] font-bold">Pankaj Agrawal Sir</span>
                  </span>
                  <span className="text-[#7A1526] text-xs">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lead Capture Form Card (Light Maroon Theme) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white/95 border border-[#EACCD2] shadow-xl shadow-[#3B0B16]/[0.06]">
          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 bg-[#7A1526]/10 border border-[#7A1526]/30 rounded-full flex items-center justify-center mx-auto text-[#7A1526]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#2E070F]">Application Received!</h3>
              <p className="text-xs text-[#5A2D37] max-w-xs mx-auto leading-relaxed">
                Thank you, <strong className="text-[#2E070F]">{studentName}</strong>! Our academic desk will call you at <strong className="text-[#2E070F]">{phone}</strong> and send your passing roadmap to <strong className="text-[#2E070F]">{email}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-left">
              <div>
                <label className="block text-[11px] font-semibold text-[#4A202A] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 rounded-lg bg-[#FAF3F5] border border-[#DFC0C7] text-[#2E070F] text-xs sm:text-sm placeholder:text-[#9C757F] focus:outline-none focus:border-[#7A1526] focus:ring-1 focus:ring-[#7A1526] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#4A202A] mb-1">
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
                  className="w-full px-3 py-2 rounded-lg bg-[#FAF3F5] border border-[#DFC0C7] text-[#2E070F] text-xs sm:text-sm placeholder:text-[#9C757F] focus:outline-none focus:border-[#7A1526] focus:ring-1 focus:ring-[#7A1526] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#4A202A] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-[#FAF3F5] border border-[#DFC0C7] text-[#2E070F] text-xs sm:text-sm placeholder:text-[#9C757F] focus:outline-none focus:border-[#7A1526] focus:ring-1 focus:ring-[#7A1526] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#4A202A] mb-1">
                  Course
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {['B.Com', 'BBA', 'BCCA', '12th'].map((deg) => (
                    <button
                      type="button"
                      key={deg}
                      onClick={() => setDegree(deg)}
                      className={`py-1.5 rounded-md text-xs font-bold border transition-all ${
                        degree === deg
                          ? 'bg-[#7A1526] text-white border-[#7A1526] shadow-sm'
                          : 'bg-[#FAF3F5] text-[#5A2D37] border-[#DFBEC5] hover:border-[#7A1526]/40'
                      }`}
                    >
                      {deg}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#4A202A] mb-1">
                  Backlog Subject
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#FAF3F5] border border-[#DFC0C7] text-[#2E070F] text-xs focus:outline-none focus:border-[#7A1526] focus:ring-1 focus:ring-[#7A1526]"
                >
                  <option value="Financial Accounts">Financial Accounts</option>
                  <option value="Cost Accounting">Cost Accounting</option>
                  <option value="Corporate Accounts">Corporate Accounts</option>
                  <option value="Business Statistics / Maths">Business Stats / Maths</option>
                  <option value="Income Tax">Income Tax</option>
                  <option value="Multiple Backlogs">Multiple Subjects</option>
                </select>
              </div>

              {/* Form submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-lg bg-[#FFD21F] hover:bg-[#E8BC0C] text-black font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 active:scale-95 disabled:opacity-50 mt-2 shadow-md shadow-[#FFD21F]/30"
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

        {/* 3. Welurik Digital Marketing Upskilling Section */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EACCD2] shadow-xl shadow-[#3B0B16]/[0.06] text-left relative overflow-hidden group">
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#2EA33A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-3.5">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#1E7528] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#2EA33A]/10 border border-[#2EA33A]/25">
                <Sparkles className="w-3 h-3 text-[#2EA33A]" />
                <span>Career Acceleration • Partner Platform</span>
              </div>
              <span className="text-[11px] font-bold text-[#7A1526]">
                Powered by Welurik
              </span>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#2E070F] tracking-tight leading-tight">
                Want High-Paying Career Skills Along With Your Degree?
              </h2>
              <p className="text-xs sm:text-sm text-[#5A2D37] mt-1 leading-relaxed">
                Master digital marketing, performance ads, and AI tools with Nagpur’s premier career school, <strong className="text-[#2E070F]">Welurik</strong>.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-[#4A202A]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2EA33A] shrink-0" />
                <span>100% Placement & Freelance Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2EA33A] shrink-0" />
                <span>4-Month Commando Level Practical Training</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2EA33A] shrink-0" />
                <span>Google Ads, Meta Ads & SEO Mastery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2EA33A] shrink-0" />
                <span>Live Client Projects & Assignments</span>
              </div>
            </div>

            {/* External Redirect Button to welurik.com */}
            <div className="pt-2">
              <a
                href="https://welurik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#2EA33A] hover:bg-[#258B30] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#2EA33A]/25 active:scale-95"
              >
                <span>Explore Digital Marketing at Welurik.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 4. Verified Student Reviews (2-Column Vertical Marquee on Light Maroon) */}
        <div className="pt-2">
          <div className="text-center mb-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#7A1526]">
              VERIFIED AT/KT TURNAROUNDS
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[#2E070F] mt-0.5">
              Students Who Cleared Backlogs
            </h3>
          </div>

          {/* 2-Column Marquee */}
          <div className="relative h-[340px] sm:h-[380px] overflow-hidden mask-marquee-vertical rounded-xl">
            {/* Top & Bottom Fade Overlays */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#FAF2F4] via-[#FAF2F4]/80 to-transparent z-20" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#FAF2F4] via-[#FAF2F4]/80 to-transparent z-20" />

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

      {/* 5. Footer (Light Maroon) */}
      <footer className="py-4 border-t border-[#E8CCD2] text-center text-xs text-[#6E424D] relative z-10">
        <p className="font-semibold text-[#4A202A]">© 2026 Caliber’s Nova</p>
        <p className="mt-0.5">
          Email: <a href="mailto:info@calibernova.in" className="text-[#7A1526] hover:underline font-medium">info@calibernova.in</a>
        </p>
      </footer>
    </div>
  );
};
