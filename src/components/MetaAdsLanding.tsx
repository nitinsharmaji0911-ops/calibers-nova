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
  MapPin,
  Clock,
  Star,
  Check,
  Zap,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MetaAdsLandingProps {
  onNavigateHome?: () => void;
}

export const MetaAdsLanding: React.FC<MetaAdsLandingProps> = ({ onNavigateHome }) => {
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('Book Keeping & Accountancy (BK)');
  const [selectedLevel, setSelectedLevel] = useState('Class 12th HSC Board Re-Exam');
  const [selectedCampus, setSelectedCampus] = useState('Mahal (Natraj Tower)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subjectList = [
    'Book Keeping & Accountancy (BK)',
    'Economics',
    'Secretarial Practice (SP)',
    'Organisation of Commerce (OCM)',
    'Mathematics & Statistics',
    'B.Com Financial / Cost Accounts',
    'Multiple Subjects',
  ];

  const levelList = [
    'Class 12th HSC Board Re-Exam',
    'Class 11th Commerce Supplementary',
    'B.Com (RTMNU) Backlog',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phone.trim()) {
      alert('Please enter your name and WhatsApp number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FFD21F', '#ffffff', '#ef4444'],
        });
      } catch (err) {
        console.error(err);
      }

      const msg = `Hello Caliber’s Nova AT/KT Cell! 👋\n\nI need urgent guidance to clear my Commerce AT/KT:\n\n• Name: ${studentName.trim()}\n• Class: ${selectedLevel}\n• Backlog Subject: ${selectedSubject}\n• Campus: ${selectedCampus}\n• Mobile: ${phone.trim()}\n\nPlease review my marksheet and share the fast-track re-exam batch schedule.`;
      const whatsappUrl = `https://wa.me/919595253778?text=${encodeURIComponent(msg)}`;
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
    }, 600);
  };

  const scrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0205] text-zinc-100 font-sans selection:bg-[#FFD21F] selection:text-black relative overflow-x-hidden">
      {/* Dynamic Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#640c21]/30 via-[#3a0612]/20 to-transparent rounded-full blur-[140px] opacity-80" />
        <div className="absolute top-[50%] -left-[120px] w-[500px] h-[500px] bg-[#420a16]/25 rounded-full blur-[130px] opacity-60" />
      </div>

      {/* 1. Ultra-Clean Header */}
      <header className="sticky top-0 z-50 px-4 sm:px-6 py-3 backdrop-blur-xl bg-[#0d0205]/90 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
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
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300 px-2 py-0.5 rounded-full bg-rose-950/60 border border-rose-500/30">
                  AT/KT CELL
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium hidden sm:block">
                Commerce Re-Exam Fast-Track Batch • Nagpur
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20have%20an%20AT%2FKT%20in%20Commerce.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-emerald-200 px-3.5 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/50 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">WhatsApp Marksheet</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-1.5 bg-[#FFD21F] hover:bg-[#ffe053] text-black font-black text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-[#FFD21F]/25 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clear Backlog</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* 2. Focused Hero with Inline Form (Zero Bloat) */}
        <section className="pt-8 sm:pt-12 pb-10 sm:pb-14 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Urgent Problem & Fast Solution */}
            <div className="lg:col-span-7 text-left space-y-4">
              {/* Emergency Alert Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/40 backdrop-blur-md">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span className="text-xs font-bold tracking-wide text-rose-200 uppercase">
                  Supplementary Re-Exams Are Near • Save Your Year
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl xl:text-5xl font-black tracking-tight text-white leading-[1.1]">
                Got an <span className="text-rose-400 underline decoration-rose-500/40 decoration-4">AT/KT</span> in Commerce?
                <br />
                <span className="text-[#FFD21F] drop-shadow-[0_4px_20px_rgba(255,210,31,0.25)]">
                  Clear It on Your Next Attempt.
                </span>
              </h1>

              {/* Direct Subtitle */}
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                Stuck in <strong className="text-white font-semibold">Accounts (BK), Economics, or SP</strong> by a few marks? You don’t need to re-read entire textbooks. Master the step-marking techniques, balance sheet adjustment shortcuts, and predicted questions directly under founder <strong className="text-white font-semibold">Pankaj Agrawal Sir</strong>.
              </p>

              {/* 3 Value Pillars */}
              <div className="space-y-2 pt-1">
                {[
                  'Score passing marks in Accounts even if balance sheet doesn’t tally (Step-Marking).',
                  'Solved 5-year past re-exam papers & predicted high-weightage questions.',
                  'Direct guidance by Pankaj Agrawal Sir (18+ Yrs Nagpur Commerce Mentor).',
                  'Batches running at Mahal (Natraj Tower) & Sadar Hubs.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD21F] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Instant WhatsApp Help Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20have%20an%20AT%2FKT%20in%20Commerce.%20Can%20you%20review%20my%20marksheet%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/40 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Your Marksheet on WhatsApp for Free Review</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean Lead Form */}
            <div id="lead-form" className="lg:col-span-5 scroll-mt-20">
              <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#220710] to-[#120307] border-2 border-[#FFD21F]/35 shadow-2xl relative text-left">
                <div className="absolute -top-3 right-5 bg-[#FFD21F] text-black text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md">
                  LIMITED RE-EXAM SEATS
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-black text-white tracking-tight">
                    Book Free AT/KT Diagnosis
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    We will review your marksheet & build your 30-day passing roadmap.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-black text-white">Strategy Call Confirmed!</h4>
                    <p className="text-xs text-zinc-300">
                      Opening WhatsApp to connect directly with Pankaj Sir’s desk.
                    </p>
                    <a
                      href={`https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20am%20${encodeURIComponent(studentName)}.%20I%20have%20an%20AT%2FKT%20in%20${encodeURIComponent(selectedSubject)}.%20Please%20guide%20me.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-black bg-[#FFD21F] px-4 py-2 rounded-full shadow"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
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
                        className="w-full px-3 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-[#FFD21F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile number"
                        className="w-full px-3 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-[#FFD21F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">
                        Backlog Subject
                      </label>
                      <select
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FFD21F]"
                      >
                        {subjectList.map((subj, i) => (
                          <option key={i} value={subj} className="bg-[#1a040b] text-white">
                            {subj}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">
                        Current Level / Exam
                      </label>
                      <select
                        value={selectedLevel}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FFD21F]"
                      >
                        {levelList.map((lvl, i) => (
                          <option key={i} value={lvl} className="bg-[#1a040b] text-white">
                            {lvl}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">
                        Preferred Campus
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Mahal (Natraj Tower)', 'Sadar Hub'].map((camp) => (
                          <button
                            type="button"
                            key={camp}
                            onClick={() => setSelectedCampus(camp)}
                            className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all text-center ${
                              selectedCampus === camp
                                ? 'bg-[#FFD21F]/15 border-[#FFD21F] text-[#FFD21F]'
                                : 'bg-black/30 border-white/10 text-zinc-400'
                            }`}
                          >
                            {camp.split(' ')[0]}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#FFD21F] hover:bg-[#ffe053] text-black font-black text-sm tracking-wide transition-all shadow-xl shadow-[#FFD21F]/25 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 mt-1"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Claim Free Strategy Session</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-zinc-500">
                      🔒 100% Confidential. Direct faculty guidance.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Subjects We Clear (Compact Grid) */}
        <section className="py-10 border-y border-white/[0.08] bg-[#140307]/70 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFD21F]">
                COMPLETE SYLLABUS COVERAGE
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
                Subjects Handled in Re-Exam Batches
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { name: 'Accounts (BK)', tag: 'HSC / 12th' },
                { name: 'Economics', tag: 'HSC / 12th' },
                { name: 'Secretarial Practice', tag: 'HSC / 12th' },
                { name: 'OCM', tag: 'HSC / 12th' },
                { name: 'Maths & Stats', tag: 'Commerce' },
                { name: 'B.Com Accounts', tag: 'RTMNU Backlog' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={scrollToForm}
                  className="p-3.5 rounded-2xl bg-[#1d050f] border border-white/10 hover:border-[#FFD21F]/50 text-center cursor-pointer transition-all hover:-translate-y-0.5 shadow-md"
                >
                  <div className="text-[10px] font-bold text-rose-300 uppercase mb-1">
                    {item.tag}
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Real Results: Students Who Cleared Their AT/KT */}
        <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              REAL NAGPUR STUDENTS
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white mt-1">
              From Backlog to Passing with High Marks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {[
              {
                name: 'Rohan Meshram',
                exam: '12th HSC Commerce Re-Exam',
                before: 'Failed Accounts by 7 Marks',
                after: '74 / 100 in Re-Exam',
                quote:
                  'Pankaj Sir checked my answer sheet, identified that I lost 22 marks on step-marking, and drilled partnership final accounts till it was second nature.',
              },
              {
                name: 'Pooja Agrawal',
                exam: 'Class 12th Board Re-Exam',
                before: 'AT/KT in Accounts & SP',
                after: 'Cleared Both with 68%',
                quote:
                  'College teachers never had time for doubts. Here, we solved past 6 years board papers. I saved an entire academic year!',
              },
              {
                name: 'Sameer Sheikh',
                exam: 'B.Com 1st Year (RTMNU)',
                before: 'Backlog in Financial Accounts',
                after: 'Scored 65% in Re-Test',
                quote:
                  'The shortcut derivations and nightly doubt sessions made difficult ledger adjustments so simple. Pankaj Sir’s method works.',
              },
            ].map((story, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#1e050e] to-[#120307] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase text-rose-300 px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800/40">
                      {story.before}
                    </span>
                    <span className="text-xs font-black text-emerald-400">
                      → {story.after}
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold text-white">{story.name}</h4>
                  <div className="text-[11px] text-zinc-400 mb-2">{story.exam}</div>
                  <p className="text-xs text-zinc-300 italic leading-relaxed">
                    “{story.quote}”
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center gap-1 text-[#FFD21F] text-xs">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3 h-3 fill-[#FFD21F]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Direct Action Banner */}
        <section className="py-10 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#250713] to-[#120307] border-2 border-[#FFD21F]/30 shadow-2xl">
            <h3 className="text-xl sm:text-3xl font-black text-white">
              Don’t Let an AT/KT Delay Your Career.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-2 max-w-lg mx-auto">
              Walk in to our Mahal (Natraj Tower) or Sadar campus, or WhatsApp your marksheet directly to Founder Pankaj Agrawal Sir.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FFD21F] hover:bg-[#ffe053] text-black font-black text-xs sm:text-sm shadow-lg shadow-[#FFD21F]/25 active:scale-95"
              >
                Claim Free Marksheet Review
              </button>
              <a
                href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20want%20to%20send%20my%20Commerce%20marksheet%20for%20review."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Marksheet</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Simple Clean Footer */}
      <footer className="py-6 border-t border-white/[0.08] text-center text-xs text-zinc-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-300">Caliber’s Nova Commerce AT/KT Cell</span>
            <span>•</span>
            <span>Mahal (Natraj Tower) & Sadar, Nagpur</span>
          </div>
          <div>
            Helpline: <a href="tel:+919595253778" className="text-[#FFD21F] font-bold">+91 95952 53778</a>
          </div>
        </div>
      </footer>

      {/* 7. Sticky Bottom Mobile Bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-2.5 bg-[#0d0205]/95 backdrop-blur-xl border-t border-white/10 sm:hidden">
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20have%20an%20AT%2FKT%20in%20Commerce.%20Please%20guide%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-2 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Marksheet</span>
          </a>

          <button
            onClick={scrollToForm}
            className="flex-1 py-3 px-2 rounded-xl bg-[#FFD21F] text-black font-black text-xs flex items-center justify-center gap-1.5 shadow"
          >
            <Sparkles className="w-4 h-4" />
            <span>Clear Backlog</span>
          </button>
        </div>
      </div>
    </div>
  );
};
