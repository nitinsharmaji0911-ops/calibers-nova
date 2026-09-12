import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Award,
  Flame,
  BookOpen,
  Calendar,
  ChevronDown,
  Clock,
  Send,
  HelpCircle,
  FileText,
  Target,
  FileCheck,
  Check,
  Star,
  MapPin,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MetaAdsLandingProps {
  onNavigateHome?: () => void;
}

// Commerce AT/KT Hurdle Subjects
const subjectsCovered = [
  {
    code: 'BK-12',
    name: 'Book Keeping & Accountancy',
    tag: 'Highest Failure Rate',
    desc: 'Partnership Final Accounts, NPO, Dissolution, Issue of Shares, and Computerized Accounting.',
    strategy: 'Step-marking masterclass + guaranteed 12-mark adjustment shortcuts.',
  },
  {
    code: 'ECO-12',
    name: 'Economics',
    tag: 'Diagrams & Concepts',
    desc: 'Micro & Macro Concepts, Elasticity of Demand, National Income, and Public Finance.',
    strategy: 'Pre-formatted 8-mark answer blueprints + curve drawing drills.',
  },
  {
    code: 'SP-12',
    name: 'Secretarial Practice (SP)',
    tag: 'Letter Formats & Procedures',
    desc: 'Letter drafting to debenture holders, share allotment procedures, and dividend warrants.',
    strategy: 'Zero-error official board format templates with guaranteed scoring marks.',
  },
  {
    code: 'OCM-12',
    name: 'Organisation of Commerce (OCM)',
    tag: 'Case Studies & Distinctions',
    desc: 'Principles of Management, Business Services, Consumer Protection, and Marketing.',
    strategy: 'Distinction table hacks + precise point-to-point case study answering.',
  },
  {
    code: 'BCOM-ACC',
    name: 'B.Com / University Accounts',
    tag: 'RTMNU Nagpur Backlogs',
    desc: 'Financial Accounting, Cost Accounting, Corporate Accounting, and Business Mathematics.',
    strategy: 'Targeted syllabus pruning: master the 4 core units guaranteed to pass.',
  },
];

// Real Nagpur Students who turned AT/KT into High Ranks
const clearanceStories = [
  {
    name: 'Rohan Meshram',
    exam: '12th HSC Commerce Re-Exam',
    before: 'Failed by 7 Marks (Accounts)',
    after: '74 / 100 in Re-Exam',
    quote:
      'I was completely devastated after failing Accounts. Pankaj Sir personally checked my past answer sheet, pointed out that I lost 22 marks in simple step-marking, and drilled final accounts adjustments until I could solve them in 20 minutes.',
  },
  {
    name: 'Pooja Agrawal',
    exam: 'Class 12th Board Re-Exam',
    before: 'AT/KT in Accounts & SP',
    after: 'Cleared Both with 68%',
    quote:
      'College teachers never had time to explain why balance sheets didn’t tally. At Nova’s AT/KT batch, we solved past 6 years board papers question by question. I saved an entire academic year!',
  },
  {
    name: 'Sameer Sheikh',
    exam: 'B.Com 1st Year (RTMNU)',
    before: 'Backlog in Financial Accounting',
    after: 'Scored 65% in Summer Re-Test',
    quote:
      'The shortcut derivations and nightly doubt sessions made complicated ledger adjustments so logical. Pankaj Sir’s guidance is pure gold for anyone stuck in commerce backlogs.',
  },
];

const faqs = [
  {
    q: 'How long does the AT/KT Fast-Track Batch take?',
    a: 'Our fast-track program runs for 30 to 45 days leading directly up to the board / university supplementary re-exam date. Classes are conducted daily with dedicated numerical problem sessions and evening doubt clearance.',
  },
  {
    q: 'What is the Free Marksheet Diagnostic Session?',
    a: 'Bring or WhatsApp your recent marksheet and exam paper. Founder Pankaj Agrawal Sir personally reviews your performance, pinpoints the exact scoring leaks (step-marking loss, wrong adjustment treatment, or time mismanagement), and hands you a custom passing blueprint.',
  },
  {
    q: 'Will Pankaj Agrawal Sir personally take the Accounts classes?',
    a: 'Yes. Founder Pankaj Agrawal Sir personally conducts the core Accounts and numerical lecture batches. We do not hand over crucial backlog preparation to novice tutors.',
  },
  {
    q: 'Where are the batches conducted in Nagpur?',
    a: 'Batches run at both our premier Nagpur campuses: Flagship Academic Hub in Mahal (Natraj Tower, Opp. Raymond Showroom) and our Central Campus in Sadar (Opp. Haldiram’s). Both feature air-conditioned, focused classrooms.',
  },
];

export const MetaAdsLanding: React.FC<MetaAdsLandingProps> = ({ onNavigateHome }) => {
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('Book Keeping & Accountancy (BK)');
  const [selectedLevel, setSelectedLevel] = useState('12th HSC Commerce Re-Exam');
  const [selectedCampus, setSelectedCampus] = useState('Mahal Flagship Hub');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subjectOptions = [
    'Book Keeping & Accountancy (BK)',
    'Economics',
    'Secretarial Practice (SP)',
    'Organisation of Commerce (OCM)',
    'Mathematics & Statistics',
    'B.Com Financial / Cost Accounting',
    'Multiple Subjects (Full Re-Exam Pack)',
  ];

  const levelOptions = [
    '12th HSC Commerce Re-Exam',
    '11th Commerce Annual Supplementary',
    'B.Com Sem 1 / Sem 2 Backlog',
    'B.Com Sem 3 / Sem 4 Backlog',
    'B.Com Sem 5 / Sem 6 Final Clearance',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phone.trim()) {
      alert('Please enter your name and WhatsApp number to book your strategy session.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FFD21F', '#ffffff', '#ef4444'],
        });
      } catch (err) {
        console.error(err);
      }

      const msg = `Hello Caliber’s Nova AT/KT Cell! 👋\n\nI need urgent guidance to clear my Commerce AT/KT / Re-Exam:\n\n• Name: ${studentName.trim()}\n• Level: ${selectedLevel}\n• Backlog Subject: ${selectedSubject}\n• Campus: ${selectedCampus}\n• Mobile: ${phone.trim()}\n\nPlease review my marksheet and share the fast-track re-exam batch details.`;
      const whatsappUrl = `https://wa.me/919595253778?text=${encodeURIComponent(msg)}`;
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
    }, 600);
  };

  const scrollToForm = () => {
    const el = document.getElementById('atkt-lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0205] text-zinc-100 font-sans selection:bg-[#FFD21F] selection:text-black relative overflow-x-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#640c21]/35 via-[#3a0612]/20 to-transparent rounded-full blur-[140px] opacity-80" />
        <div className="absolute top-[45%] -left-[120px] w-[500px] h-[500px] bg-[#420a16]/30 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-[80%] -right-[120px] w-[500px] h-[500px] bg-[#FFD21F]/10 rounded-full blur-[130px] opacity-50" />
      </div>

      {/* 1. Header with Urgent AT/KT Cell Hotline */}
      <header className="sticky top-0 z-50 px-4 sm:px-6 py-3 backdrop-blur-xl bg-[#0d0205]/90 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD21F] to-[#E6B800] p-[1.5px] flex items-center justify-center shadow-lg shadow-[#FFD21F]/20">
              <div className="w-full h-full bg-[#170308] rounded-[10px] flex items-center justify-center p-1">
                <img
                  src="/assets/logo-white.png"
                  alt="Caliber's Nova Logo"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-white text-base">
                  CALIBER’S <span className="text-[#FFD21F]">NOVA</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300 px-2 py-0.5 rounded-full bg-rose-900/40 border border-rose-500/30">
                  AT/KT CELL • COMMERCE
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium hidden sm:block">
                Nagpur’s #1 Commerce Re-Exam & Backlog Clearance Cell
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20have%20an%20AT%2FKT%20in%20Commerce.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-emerald-200 px-3.5 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/50 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Marksheet</span>
            </a>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-[#FFD21F] hover:bg-[#ffe053] text-black font-black text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-[#FFD21F]/25 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clear My AT/KT</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* 2. Urgent Hero: Problem, Urgency & Instant Form */}
        <section className="pt-8 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: High-Urgency Hook & Solution */}
            <div className="lg:col-span-7 text-left space-y-5">
              {/* Alert Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 backdrop-blur-md">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span className="text-xs font-bold tracking-wide text-rose-300 uppercase">
                  Re-Exam Admissions Open • Save Your Academic Year
                </span>
              </div>

              {/* Main Punchy Headline */}
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.08]">
                Stuck with an <span className="text-rose-400 underline decoration-rose-500/40 decoration-4">AT/KT</span> in Commerce?
                <br />
                <span className="text-[#FFD21F] drop-shadow-[0_4px_20px_rgba(255,210,31,0.25)]">
                  Don’t Waste Your Year.
                </span>
              </h1>

              {/* Clarifying Subheading */}
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-xl">
                Failed by just 4 to 12 marks in <strong className="text-white font-semibold">Accounts, Economics, or SP</strong>? You don’t need to re-read the entire textbook. Master the exact step-marking techniques, balance sheet adjustment shortcuts, and predicted paper patterns under founder <strong className="text-white font-semibold">Pankaj Agrawal Sir</strong>.
              </p>

              {/* 3 Quick Value Bullets */}
              <div className="space-y-2.5 pt-1">
                {[
                  '1-on-1 Marksheet Diagnostic: Pinpoint exactly where you lost marks.',
                  'Step-Marking Mastery: Score 70%+ even if your final balance sheet doesn’t tally.',
                  'Solved 5-Year Past Re-Exam Papers & Predicted Board Questions.',
                  'Morning & Evening Batches at Mahal (Natraj Tower) and Sadar.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Mentorship Micro-Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#240610] to-[#160308] border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#FFD21F]/40 shrink-0 bg-[#FFD21F]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#FFD21F]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FFD21F]">
                    Direct Mentor Supervision
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    Led Personally by Pankaj Agrawal Sir
                  </div>
                  <div className="text-xs text-zinc-400">
                    18+ Years Experience in Nagpur Commerce & HSC State Board
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Converting Lead Capture Box */}
            <div id="atkt-lead-form" className="lg:col-span-5 scroll-mt-24">
              <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#220710] to-[#120307] border-2 border-[#FFD21F]/30 shadow-2xl shadow-black/80 relative">
                <div className="absolute -top-3 right-6 bg-[#FFD21F] text-black text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md">
                  FREE 1-ON-1 STRATEGY
                </div>

                <div className="text-left mb-5">
                  <h3 className="text-xl font-black text-white tracking-tight">
                    Book Free AT/KT Diagnosis
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Get your marksheet checked & receive a customized 30-day clearance plan.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                      <Check className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-black text-white">Consultation Booked!</h4>
                    <p className="text-xs text-zinc-300 max-w-xs mx-auto">
                      Opening WhatsApp to connect you directly with Pankaj Sir’s academic desk.
                    </p>
                    <a
                      href={`https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20am%20${encodeURIComponent(studentName)}.%20I%20have%20an%20AT%2FKT%20in%20${encodeURIComponent(selectedSubject)}.%20Please%20guide%20me.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-black bg-[#FFD21F] px-5 py-2.5 rounded-full shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp Now</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Aryan Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-[#FFD21F] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">
                        WhatsApp Number (for Schedule & Paper Analysis) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile number"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-[#FFD21F] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">
                        Which Subject Do You Have AT/KT in?
                      </label>
                      <select
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FFD21F]"
                      >
                        {subjectOptions.map((subj, i) => (
                          <option key={i} value={subj} className="bg-[#180309] text-white">
                            {subj}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">
                        Current Exam Level
                      </label>
                      <select
                        value={selectedLevel}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FFD21F]"
                      >
                        {levelOptions.map((lvl, i) => (
                          <option key={i} value={lvl} className="bg-[#180309] text-white">
                            {lvl}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">
                        Preferred Campus Hub
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Mahal Flagship Hub', 'Sadar Central Hub'].map((camp) => (
                          <button
                            type="button"
                            key={camp}
                            onClick={() => setSelectedCampus(camp)}
                            className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all text-center ${
                              selectedCampus === camp
                                ? 'bg-[#FFD21F]/15 border-[#FFD21F] text-[#FFD21F]'
                                : 'bg-black/30 border-white/10 text-zinc-400 hover:border-white/20'
                            }`}
                          >
                            {camp.replace(' Hub', '')}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#FFD21F] hover:bg-[#ffe053] text-black font-black text-sm tracking-wide transition-all shadow-xl shadow-[#FFD21F]/25 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 mt-2"
                    >
                      {isSubmitting ? (
                        <span>Processing Diagnostic...</span>
                      ) : (
                        <>
                          <span>Claim Free Strategy Session</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-zinc-500">
                      🔒 100% Confidential. No spam. Direct faculty consultation.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Reality Check: Why Students Get AT/KT & How Nova Fixes It */}
        <section className="py-14 border-y border-white/[0.08] bg-[#140307]/70 backdrop-blur-md px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
                THE 3 BIGGEST HURDLES IN COMMERCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1.5">
                Why Students Fail & How We Make You Pass
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                Most students who get AT/KT aren’t weak—they just prepare with the wrong college strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-6 rounded-3xl bg-gradient-to-b from-[#210610] to-[#120307] border border-white/[0.08] hover:border-rose-500/40 transition-all text-left">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 mb-4 font-black">
                  01
                </div>
                <h3 className="text-base font-extrabold text-white mb-2">
                  "My Balance Sheet Didn't Tally"
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  <strong className="text-rose-300">The Trap:</strong> Spending 25 minutes trying to find a ₹200 difference and leaving the rest of the paper blank.
                </p>
                <p className="text-xs text-[#FFD21F] font-semibold mt-3 pt-3 border-t border-white/[0.08]">
                  ✓ Nova Fix: Step-marking derivations. Even without a tallied balance sheet, our students score 12 out of 15 marks.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-gradient-to-b from-[#210610] to-[#120307] border border-white/[0.08] hover:border-[#FFD21F]/40 transition-all text-left">
                <div className="w-10 h-10 rounded-2xl bg-[#FFD21F]/10 border border-[#FFD21F]/25 flex items-center justify-center text-[#FFD21F] mb-4 font-black">
                  02
                </div>
                <h3 className="text-base font-extrabold text-white mb-2">
                  Rote Memorizing Adjustments
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  <strong className="text-rose-300">The Trap:</strong> Rote memorizing textbook questions. When the board introduces an unrecorded purchase or hidden interest adjustment, students blank out.
                </p>
                <p className="text-xs text-[#FFD21F] font-semibold mt-3 pt-3 border-t border-white/[0.08]">
                  ✓ Nova Fix: Concept-first logic. You understand the "Why" behind debit/credit effects, making adjustments automatic.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-gradient-to-b from-[#210610] to-[#120307] border border-white/[0.08] hover:border-emerald-500/40 transition-all text-left">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-4 font-black">
                  03
                </div>
                <h3 className="text-base font-extrabold text-white mb-2">
                  Poor Board Presentation
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  <strong className="text-rose-300">The Trap:</strong> Messy working notes, missing journal narrations, and unformatted ledger columns that trigger severe examiner deductions.
                </p>
                <p className="text-xs text-[#FFD21F] font-semibold mt-3 pt-3 border-t border-white/[0.08]">
                  ✓ Nova Fix: Strict board presentation protocols & official model answer sheet formatting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Subject Coverage: Targeted AT/KT Fast-Track Modules */}
        <section className="py-14 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFD21F]">
                SPECIALIZED COMMERCE FACULTY
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                Subjects Covered in Fast-Track Re-Exam Batches
              </h2>
            </div>
            <button
              onClick={scrollToForm}
              className="text-xs font-bold text-[#FFD21F] hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              Enroll in Subject Batch <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {subjectsCovered.map((sub, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#1c050e] to-[#120307] border border-white/10 hover:border-[#FFD21F]/50 transition-all flex flex-col justify-between text-left group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-black bg-[#FFD21F] px-2.5 py-0.5 rounded-full">
                      {sub.code}
                    </span>
                    <span className="text-[11px] font-semibold text-rose-300">
                      {sub.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white group-hover:text-[#FFD21F] transition-colors">
                    {sub.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {sub.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.08]">
                  <div className="text-[11px] text-emerald-400 font-medium">
                    ⚡ {sub.strategy}
                  </div>
                </div>
              </div>
            ))}

            {/* Complete Re-Exam Clearance Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#3b0816] via-[#240610] to-[#140308] border-2 border-[#FFD21F]/40 flex flex-col justify-between text-left shadow-xl">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-black bg-rose-400 px-2.5 py-0.5 rounded-full">
                  ALL-IN-ONE
                </span>
                <h3 className="text-lg font-black text-white mt-3">
                  Full Commerce Re-Exam Crash Pass
                </h3>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                  Have backlogs in 2 or more subjects? Get complete multi-subject preparation with synchronized timings so classes never clash.
                </p>
              </div>

              <button
                onClick={scrollToForm}
                className="w-full mt-4 py-2.5 rounded-xl bg-[#FFD21F] text-black font-extrabold text-xs shadow hover:bg-[#ffe053] transition-colors"
              >
                Get Custom Subject Package
              </button>
            </div>
          </div>
        </section>

        {/* 5. The 30-Day Clearance Roadmap */}
        <section className="py-14 border-y border-white/[0.08] bg-[#140307]/80 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFD21F]">
                SYSTEMATIC CLEARANCE FORMULA
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1.5">
                Your 4-Week Passing Blueprint
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                We remove guesswork. Every single week has a measurable target to guarantee you clear.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {[
                {
                  week: 'WEEK 01',
                  title: 'Marksheet Audit & Core Topics',
                  points: [
                    'Personal answer-sheet review',
                    'High-weightage chapter pruning',
                    'Fundamental journal entry rules',
                  ],
                },
                {
                  week: 'WEEK 02',
                  title: 'High-Yield Numerical Drills',
                  points: [
                    'Partnership & Balance Sheet adjustments',
                    'Step-marking extraction tricks',
                    'Daily timed problem sheets',
                  ],
                },
                {
                  week: 'WEEK 03',
                  title: 'Past 5-Year Board Hackathon',
                  points: [
                    'Solve 5 full previous re-exam papers',
                    'Official examiner answer styling',
                    'Objective & 8-mark question mastery',
                  ],
                },
                {
                  week: 'WEEK 04',
                  title: 'Full-Length Timed Mocks',
                  points: [
                    '3 full-dress simulation re-exams',
                    '1-on-1 correction with Pankaj Sir',
                    'Confidence & stress elimination',
                  ],
                },
              ].map((phase, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-b from-[#200610] to-[#120307] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-black tracking-widest text-[#FFD21F] px-2.5 py-0.5 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                      {phase.week}
                    </span>
                    <h4 className="text-base font-extrabold text-white mt-3 mb-3">
                      {phase.title}
                    </h4>
                    <ul className="space-y-2 text-xs text-zinc-300">
                      {phase.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#FFD21F] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Real Nagpur Clearance Proof */}
        <section className="py-14 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              PROOF OF RESULTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1.5">
              Students Who Saved Their Year at Nova
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              From failing by single digits to securing distinction in the re-exam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {clearanceStories.map((story, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-gradient-to-b from-[#1e050e] to-[#120307] border border-white/[0.08] hover:border-[#FFD21F]/40 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase text-rose-300 px-2 py-0.5 rounded-md bg-rose-950/60 border border-rose-800/40">
                      {story.before}
                    </span>
                    <span className="text-[11px] font-black text-emerald-400 flex items-center gap-1">
                      → {story.after}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-white">{story.name}</h4>
                  <div className="text-xs text-zinc-400 mb-3">{story.exam}</div>
                  <p className="text-xs text-zinc-300 leading-relaxed italic">
                    “{story.quote}”
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1 text-[#FFD21F] text-xs">
                  <Star className="w-3.5 h-3.5 fill-[#FFD21F]" />
                  <Star className="w-3.5 h-3.5 fill-[#FFD21F]" />
                  <Star className="w-3.5 h-3.5 fill-[#FFD21F]" />
                  <Star className="w-3.5 h-3.5 fill-[#FFD21F]" />
                  <Star className="w-3.5 h-3.5 fill-[#FFD21F]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FAQ Section */}
        <section className="py-14 border-t border-white/[0.08] bg-[#120307]/70 px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD21F]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1.5">
              Got Doubts About AT/KT Admissions?
            </h2>
          </div>

          <div className="space-y-3 text-left">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#1d050f] border border-white/[0.08] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-white text-sm hover:text-[#FFD21F] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#FFD21F] transition-transform duration-300 shrink-0 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-white/[0.04] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 8. Final Urgent Call to Action */}
        <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#2a0715] to-[#120308] border-2 border-[#FFD21F]/40 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#FFD21F] px-3 py-1 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/30">
                SUPPLEMENTARY EXAMS ARE FAST APPROACHING
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Don’t Let One Subject Hold You Back.
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Walk in to our Mahal or Sadar branch with your marksheet, or WhatsApp it directly to founder Pankaj Agrawal Sir for instant evaluation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFD21F] hover:bg-[#ffe053] text-black font-black text-sm transition-all shadow-xl shadow-[#FFD21F]/25 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Claim Free Strategy Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20want%20to%20send%20my%20Commerce%20marksheet%20for%20AT%2FKT%20review."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Marksheet on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Minimal Footer */}
      <footer className="py-8 border-t border-white/[0.08] text-center text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-300">Caliber’s Nova Commerce AT/KT Cell</span>
            <span>•</span>
            <span>Mahal & Sadar, Nagpur</span>
          </div>
          <div>
            Admissions Helpline:{' '}
            <a href="tel:+919595253778" className="text-[#FFD21F] font-bold hover:underline">
              +91 95952 53778
            </a>
          </div>
        </div>
      </footer>

      {/* 10. Sticky Bottom Mobile Conversion Dock */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-3 bg-[#0d0205]/95 backdrop-blur-xl border-t border-white/10 sm:hidden">
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20have%20an%20AT%2FKT%20in%20Commerce.%20Please%20guide%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-900/40"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Marksheet</span>
          </a>

          <button
            onClick={scrollToForm}
            className="flex-1 py-3 px-3 rounded-xl bg-[#FFD21F] active:bg-[#e6bd17] text-black font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-[#FFD21F]/30"
          >
            <Sparkles className="w-4 h-4" />
            <span>Clear My AT/KT</span>
          </button>
        </div>
      </div>
    </div>
  );
};
