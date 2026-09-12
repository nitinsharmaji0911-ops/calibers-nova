import React, { useState } from 'react';
import {
  MessageCircle,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
  Check,
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
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#E5B53A', '#ffffff', '#22c55e'],
        });
      } catch (err) {
        console.error(err);
      }

      const msg = `Hello Caliber’s Nova AT/KT Cell! 👋\n\nI need guidance to clear my Commerce AT/KT:\n\n• Name: ${studentName.trim()}\n• Class: ${selectedLevel}\n• Backlog Subject: ${selectedSubject}\n• Campus: ${selectedCampus}\n• Mobile: ${phone.trim()}\n\nPlease review my marksheet and share the re-exam batch schedule.`;
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
    <div className="min-h-screen bg-[#0c090a] text-zinc-100 font-sans selection:bg-[#E5B53A] selection:text-black relative overflow-x-hidden">
      {/* Subtle Minimalist Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#380b16]/15 rounded-full blur-[140px]" />
      </div>

      {/* 1. Minimalist Refined Header */}
      <header className="sticky top-0 z-50 px-4 sm:px-6 py-3.5 backdrop-blur-xl bg-[#0c090a]/90 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 p-1 flex items-center justify-center">
              <img
                src="/assets/logo-white.png"
                alt="Caliber's Nova Logo"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-white text-base">
                  CALIBER’S <span className="text-[#E5B53A]">NOVA</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-300 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08]">
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
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-emerald-200 px-3.5 py-2 rounded-full bg-emerald-950/30 border border-emerald-500/25 hover:border-emerald-500/40 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">WhatsApp Marksheet</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-1.5 bg-[#E5B53A] hover:bg-[#d8a62c] text-black font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-md active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clear Backlog</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* 2. Focused Minimal Hero with Inline Form */}
        <section className="pt-8 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Problem, Urgency & Method */}
            <div className="lg:col-span-7 text-left space-y-4">
              {/* Minimalist Subdued Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <span className="w-2 h-2 rounded-full bg-[#E5B53A] animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-zinc-300">
                  Supplementary Re-Exams 2026 • Save Your Academic Year
                </span>
              </div>

              {/* Main Clean Headline */}
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.12]">
                Got an AT/KT in Commerce?
                <br />
                <span className="text-[#E5B53A]">
                  Clear It on Your Next Attempt.
                </span>
              </h1>

              {/* Clarifying Subtitle */}
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                Stuck in <strong className="text-white font-medium">Accounts (BK), Economics, or SP</strong> by a few marks? You don’t need to re-read entire textbooks. Master the step-marking techniques, adjustment shortcuts, and predicted questions directly under founder <strong className="text-white font-medium">Pankaj Agrawal Sir</strong>.
              </p>

              {/* 4 Clean Value Points */}
              <div className="space-y-2.5 pt-1">
                {[
                  'Score passing marks in Accounts even if balance sheet doesn’t tally (Step-Marking).',
                  'Solved 5-year past re-exam papers & predicted high-weightage questions.',
                  'Direct guidance by Pankaj Agrawal Sir (18+ Yrs Nagpur Commerce Mentor).',
                  'Batches running at Mahal (Natraj Tower) & Sadar Hubs.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#E5B53A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Minimalist Subdued WhatsApp Action */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20have%20an%20AT%2FKT%20in%20Commerce.%20Can%20you%20review%20my%20marksheet%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-300 px-4 py-2.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Send Your Marksheet on WhatsApp for Free Review</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean Minimalist Lead Form */}
            <div id="lead-form" className="lg:col-span-5 scroll-mt-20">
              <div className="rounded-2xl p-6 sm:p-7 bg-[#141113] border border-white/[0.08] shadow-xl relative text-left">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-extrabold text-white tracking-tight">
                      Free AT/KT Diagnosis
                    </h3>
                    <span className="text-[10px] font-semibold text-[#E5B53A] px-2 py-0.5 rounded bg-[#E5B53A]/10 border border-[#E5B53A]/20">
                      Re-Exam Seats
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    We will review your marksheet & share your custom passing roadmap.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">Strategy Call Confirmed</h4>
                    <p className="text-xs text-zinc-400">
                      Opening WhatsApp to connect directly with Pankaj Sir’s desk.
                    </p>
                    <a
                      href={`https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20am%20${encodeURIComponent(studentName)}.%20I%20have%20an%20AT%2FKT%20in%20${encodeURIComponent(selectedSubject)}.%20Please%20guide%20me.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-black bg-[#E5B53A] px-4 py-2 rounded-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Aryan Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.08] text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-[#E5B53A]/70 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile number"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.08] text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-[#E5B53A]/70 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Backlog Subject
                      </label>
                      <select
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-[#E5B53A]/70"
                      >
                        {subjectList.map((subj, i) => (
                          <option key={i} value={subj} className="bg-[#141113] text-white">
                            {subj}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Current Level / Exam
                      </label>
                      <select
                        value={selectedLevel}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-[#E5B53A]/70"
                      >
                        {levelList.map((lvl, i) => (
                          <option key={i} value={lvl} className="bg-[#141113] text-white">
                            {lvl}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Preferred Campus
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Mahal (Natraj Tower)', 'Sadar Hub'].map((camp) => (
                          <button
                            type="button"
                            key={camp}
                            onClick={() => setSelectedCampus(camp)}
                            className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all text-center ${
                              selectedCampus === camp
                                ? 'bg-[#E5B53A]/10 border-[#E5B53A] text-[#E5B53A]'
                                : 'bg-black/20 border-white/[0.08] text-zinc-400 hover:border-white/20'
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
                      className="w-full py-3 rounded-lg bg-[#E5B53A] hover:bg-[#d8a62c] text-black font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 mt-1"
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
                      Direct faculty consultation • 100% Confidential
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Subjects We Clear (Minimalist Badges) */}
        <section className="py-8 border-y border-white/[0.06] bg-white/[0.01] px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                Subjects Handled in Re-Exam Batches
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
              {[
                { name: 'Accounts (BK)', tag: 'Class 12th' },
                { name: 'Economics', tag: 'Class 12th' },
                { name: 'Secretarial Practice', tag: 'Class 12th' },
                { name: 'OCM', tag: 'Class 12th' },
                { name: 'Maths & Stats', tag: 'Commerce' },
                { name: 'B.Com Accounts', tag: 'RTMNU' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={scrollToForm}
                  className="p-3 rounded-xl bg-[#141113] border border-white/[0.06] hover:border-white/20 text-center cursor-pointer transition-all hover:-translate-y-0.5"
                >
                  <div className="text-[10px] font-medium text-zinc-500 uppercase mb-0.5">
                    {item.tag}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Real Results: Verified Nagpur Students */}
        <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-7">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
              Verified Student Turnarounds
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              From Backlog to Passing with High Marks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left">
            {[
              {
                name: 'Rohan Meshram',
                exam: '12th HSC Commerce Re-Exam',
                before: 'Failed Accounts by 7 Marks',
                after: '74 / 100 in Re-Exam',
                quote:
                  'Pankaj Sir checked my answer sheet, pointed out that I lost 22 marks on step-marking, and drilled partnership adjustments till it was second nature.',
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
                className="p-5 rounded-xl bg-[#141113] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium text-zinc-400 px-2 py-0.5 rounded bg-white/[0.04]">
                      {story.before}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      → {story.after}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{story.name}</h4>
                  <div className="text-[11px] text-zinc-500 mb-2">{story.exam}</div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    “{story.quote}”
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center gap-1 text-[#E5B53A]/80 text-xs">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Minimal Direct Action Banner */}
        <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <div className="rounded-2xl p-6 sm:p-8 bg-[#141113] border border-white/[0.08]">
            <h3 className="text-lg sm:text-2xl font-bold text-white">
              Don’t Let an AT/KT Delay Your Academic Year.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 max-w-lg mx-auto">
              Walk in to our Mahal (Natraj Tower) or Sadar campus, or WhatsApp your marksheet directly to Founder Pankaj Agrawal Sir.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#E5B53A] hover:bg-[#d8a62c] text-black font-bold text-xs sm:text-sm active:scale-95 transition-all"
              >
                Claim Free Marksheet Review
              </button>
              <a
                href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20want%20to%20send%20my%20Commerce%20marksheet%20for%20review."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-950/60 text-emerald-300 border border-emerald-500/25 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Marksheet</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Clean Minimal Footer */}
      <footer className="py-6 border-t border-white/[0.06] text-center text-xs text-zinc-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-400">Caliber’s Nova Commerce AT/KT Cell</span>
            <span>•</span>
            <span>Mahal (Natraj Tower) & Sadar, Nagpur</span>
          </div>
          <div>
            Helpline: <a href="tel:+919595253778" className="text-zinc-300 font-medium hover:text-white">+91 95952 53778</a>
          </div>
        </div>
      </footer>

      {/* 7. Minimalist Sticky Bottom Mobile Bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-2.5 bg-[#0c090a]/95 backdrop-blur-xl border-t border-white/[0.08] sm:hidden">
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20have%20an%20AT%2FKT%20in%20Commerce.%20Please%20guide%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-2 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={scrollToForm}
            className="flex-1 py-2.5 px-2 rounded-lg bg-[#E5B53A] text-black font-bold text-xs flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Clear Backlog</span>
          </button>
        </div>
      </div>
    </div>
  );
};
