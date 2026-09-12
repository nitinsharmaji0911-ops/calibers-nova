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
  const [selectedDegree, setSelectedDegree] = useState('B.Com (Bachelor of Commerce)');
  const [selectedSem, setSelectedSem] = useState('Semester 1 / 2 (1st Year Backlog)');
  const [selectedSubject, setSelectedSubject] = useState('Financial Accounting (Sem 1/2)');
  const [selectedCampus, setSelectedCampus] = useState('Mahal (Natraj Tower)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const degreeList = [
    'B.Com (Bachelor of Commerce)',
    'BBA (Bachelor of Business Administration)',
    'BCCA (B.Com in Computer Application)',
    'Class 12th HSC Commerce Re-Exam',
  ];

  const semList = [
    'Semester 1 / 2 (1st Year Backlog)',
    'Semester 3 / 4 (2nd Year Backlog)',
    'Semester 5 / 6 (Final Year Clearance • Degree Blocked)',
  ];

  const subjectList = [
    'Financial Accounting (Sem 1/2)',
    'Cost & Management Accounting (Sem 3/4)',
    'Corporate Accounting (Sem 3/4)',
    'Business Mathematics & Statistics',
    'Income Tax & Auditing (Sem 5/6)',
    'Business Economics & Financial Mgmt (BBA)',
    'Programming & Database Papers (BCCA)',
    'Multiple Backlogs (Full Degree Clearance Pack)',
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

      const msg = `Hello Caliber’s Nova AT/KT Cell! 👋\n\nI need guidance to clear my AT/KT backlog:\n\n• Name: ${studentName.trim()}\n• Degree: ${selectedDegree}\n• Semester: ${selectedSem}\n• Backlog Subject: ${selectedSubject}\n• Campus: ${selectedCampus}\n• Mobile: ${phone.trim()}\n\nPlease review my university marksheet and share the fast-track re-exam batch details.`;
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

      {/* 1. Header with Degree Badges */}
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
                  BBA • B.COM • BCCA
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium hidden sm:block">
                Nagpur University (RTMNU) AT/KT & Backlog Clearance Cell
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20have%20an%20AT%2FKT%20backlog%20in%20B.Com%2FBBA%2FBCCA.%20Please%20guide%20me."
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
        {/* 2. Hero Section: Direct Hook & Above-the-Fold Form */}
        <section className="pt-8 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Targeted Problem & Proven Solution */}
            <div className="lg:col-span-7 text-left space-y-4">
              {/* Emergency Alert Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <span className="w-2 h-2 rounded-full bg-[#E5B53A] animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-zinc-300">
                  RTMNU Backlog Exams Approaching • Save Your Degree
                </span>
              </div>

              {/* Main Targeted Headline */}
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.12]">
                Got an AT/KT in <span className="text-[#E5B53A]">BBA, B.Com, or BCCA</span>?
                <br />
                Clear It on Your Next Attempt.
              </h1>

              {/* Reassuring Subtitle */}
              <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                Stuck in <strong className="text-white font-medium">Financial Accounting, Cost Accounting, Corporate Accounts, or Business Stats</strong>? Don’t let a university backlog block your graduation, MBA admissions, or campus placements. Master RTMNU unit-wise scoring formats, step-marking, and past 5-year paper patterns directly under Founder <strong className="text-white font-medium">Pankaj Agrawal Sir</strong>.
              </p>

              {/* 4 Value Pillars */}
              <div className="space-y-2.5 pt-1">
                {[
                  'Master RTMNU step-marking: Score method marks even if final balance sheet doesn’t tally.',
                  'Targeted Unit Strategy: Focus on the guaranteed 16-mark high-scoring question types.',
                  'Solved 5-year past university question papers & repeated exam adjustments.',
                  'Morning & evening batches at Mahal (Natraj Tower) and Sadar Hubs.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#E5B53A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Instant WhatsApp Help Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20have%20an%20AT%2FKT%20in%20B.Com%2FBBA%2FBCCA.%20Can%20you%20review%20my%20marksheet%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-300 px-4 py-2.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Send Your Marksheet on WhatsApp for Free Review</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean Lead Form */}
            <div id="lead-form" className="lg:col-span-5 scroll-mt-20">
              <div className="rounded-2xl p-6 sm:p-7 bg-[#141113] border border-white/[0.08] shadow-xl relative text-left">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-extrabold text-white tracking-tight">
                      Free AT/KT Diagnosis
                    </h3>
                    <span className="text-[10px] font-semibold text-[#E5B53A] px-2 py-0.5 rounded bg-[#E5B53A]/10 border border-[#E5B53A]/20">
                      Limited Seats
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    We will review your university marksheet & share your custom passing roadmap.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">Strategy Call Confirmed</h4>
                    <p className="text-xs text-zinc-400">
                      Opening WhatsApp to connect directly with Pankaj Sir’s academic desk.
                    </p>
                    <a
                      href={`https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20am%20${encodeURIComponent(studentName)}.%20I%20have%20an%20AT%2FKT%20in%20${encodeURIComponent(selectedDegree)}%20(${encodeURIComponent(selectedSubject)}).%20Please%20guide%20me.`}
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
                        Degree Program
                      </label>
                      <select
                        value={selectedDegree}
                        onChange={(e) => setSelectedDegree(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-[#E5B53A]/70"
                      >
                        {degreeList.map((deg, i) => (
                          <option key={i} value={deg} className="bg-[#141113] text-white">
                            {deg}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Semester / Backlog Stage
                      </label>
                      <select
                        value={selectedSem}
                        onChange={(e) => setSelectedSem(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs sm:text-sm focus:outline-none focus:border-[#E5B53A]/70"
                      >
                        {semList.map((sem, i) => (
                          <option key={i} value={sem} className="bg-[#141113] text-white">
                            {sem}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Hurdle Backlog Subject
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

        {/* 3. Subjects We Clear for BBA, B.Com & BCCA */}
        <section className="py-8 border-y border-white/[0.06] bg-white/[0.01] px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                Programs & Subjects Handled
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
              {[
                { name: 'Financial Accounts', tag: 'B.Com / BCCA' },
                { name: 'Cost Accounting', tag: 'B.Com / BBA' },
                { name: 'Corporate Accounts', tag: 'B.Com Sem 3/4' },
                { name: 'Business Stats & Math', tag: 'BBA / B.Com' },
                { name: 'Financial Management', tag: 'BBA / B.Com' },
                { name: 'Income Tax & Law', tag: 'Degree Clearance' },
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

        {/* 4. Real Results: Verified BBA, B.Com & BCCA Students */}
        <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-7">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
              Verified University Turnarounds
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Students Who Cleared Backlogs & Saved Their Degree
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left">
            {[
              {
                name: 'Aman Verma',
                exam: 'B.Com Sem 2 (RTMNU)',
                before: 'Failed Financial Accounts 2x',
                after: 'Cleared with 68 / 80',
                quote:
                  'Financial Accounts was stuck for two semesters. Pankaj Sir personally drilled ledger adjustments and university step-marking. Cleared comfortably on my next attempt.',
              },
              {
                name: 'Shruti Deshpande',
                exam: 'BBA Sem 4 (University Backlog)',
                before: 'AT/KT in Business Statistics',
                after: 'Scored 62 / 80 Marks',
                quote:
                  'Business Statistics was blocking my promotion to final year. The shortcut formulas and past 5-year paper solving made stats so easy.',
              },
              {
                name: 'Nikhil Raut',
                exam: 'BCCA Sem 3 (Nagpur)',
                before: 'Backlog in Cost Accounting',
                after: 'Cleared in First Crash Batch',
                quote:
                  'I was afraid I would lose my campus placement eligibility. Pankaj Sir’s 30-day fast-track batch saved my entire final year.',
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
              Don’t Let an AT/KT Delay Your Degree or Placements.
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
                href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20want%20to%20send%20my%20B.Com%2FBBA%2FBCCA%20marksheet%20for%20review."
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
            <span className="font-semibold text-zinc-400">Caliber’s Nova BBA • B.Com • BCCA AT/KT Cell</span>
            <span>•</span>
            <span>Mahal & Sadar, Nagpur</span>
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
            href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20have%20an%20AT%2FKT%20in%20B.Com%2FBBA%2FBCCA.%20Please%20guide%20me."
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
