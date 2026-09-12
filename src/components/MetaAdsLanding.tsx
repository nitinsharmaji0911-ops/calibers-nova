import React, { useState } from 'react';
import {
  MessageCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  MapPin,
  FileText,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MetaAdsLandingProps {
  onNavigateHome?: () => void;
}

export const MetaAdsLanding: React.FC<MetaAdsLandingProps> = ({ onNavigateHome }) => {
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [degree, setDegree] = useState('B.Com');
  const [subject, setSubject] = useState('Financial Accounts');
  const [campus, setCampus] = useState('Mahal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phone.trim()) {
      alert('Please fill in your name and WhatsApp number.');
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
          colors: ['#E5B53A', '#ffffff', '#10b981'],
        });
      } catch (err) {
        console.error(err);
      }

      const msg = `Hi Pankaj Sir! 👋\n\nI want to clear my university backlog:\n• Name: ${studentName.trim()}\n• Degree: ${degree}\n• Subject: ${subject}\n• Campus: ${campus}\n• Phone: ${phone.trim()}\n\nPlease share the fast-track crash batch details & review my marksheet.`;
      const whatsappUrl = `https://wa.me/919595253778?text=${encodeURIComponent(msg)}`;
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
    }, 500);
  };

  const scrollToForm = () => {
    document.getElementById('fast-track-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0c090a] text-zinc-100 font-sans selection:bg-[#E5B53A] selection:text-black">
      {/* 1. Ultra-Clean Navbar */}
      <header className="sticky top-0 z-50 px-4 sm:px-6 py-3 backdrop-blur-xl bg-[#0c090a]/90 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 p-1 flex items-center justify-center">
              <img
                src="/assets/logo-white.png"
                alt="Caliber's Nova"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-white text-base">
                CALIBER’S <span className="text-[#E5B53A]">NOVA</span>
              </span>
              <span className="ml-2 text-[10px] font-semibold text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                AT/KT CELL
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20have%20an%20AT%2FKT%20backlog%20in%20B.Com%2FBBA%2FBCCA.%20Please%20guide%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/50 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Review</span>
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-12">
        {/* 2. Hero + Form Grid (Minimal & Direct) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sharp Hook & What We Do */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#E5B53A] animate-pulse" />
              BBA • B.COM • BCCA • 12th HSC
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-[1.15]">
              Clear Your AT/KT on Your Next Attempt.
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
              Don’t let university backlogs hold back your degree or placements. Master RTMNU step-marking, repeated adjustments, and high-scoring question patterns directly under Founder <span className="text-white font-semibold">Pankaj Agrawal Sir</span>.
            </p>

            {/* 3 Quick Bullets Only */}
            <div className="space-y-2 pt-1 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5B53A] shrink-0" />
                <span><strong className="text-white">Step-Marking Focus:</strong> Score passing marks even without tallying balance sheets.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5B53A] shrink-0" />
                <span><strong className="text-white">Past 5-Year Papers:</strong> Solved university papers & repeated question patterns.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5B53A] shrink-0" />
                <span><strong className="text-white">Mahal & Sadar:</strong> Flexible fast-track morning and evening batches.</span>
              </div>
            </div>

            {/* Quick WhatsApp Marksheet Link */}
            <div className="pt-2">
              <a
                href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20am%20sending%20my%20marksheet%20for%20a%20quick%20AT%2FKT%20review."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-300 hover:text-emerald-200"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span className="underline decoration-emerald-500/40 underline-offset-4">
                  Send your marksheet on WhatsApp for a free review →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Super Simple 3-Field Lead Form */}
          <div id="fast-track-form" className="lg:col-span-5 scroll-mt-20">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#141113] border border-white/[0.08] shadow-xl">
              <h3 className="text-base font-bold text-white mb-1">
                Fast-Track Backlog Admission
              </h3>
              <p className="text-xs text-zinc-400 mb-4">
                Get your custom passing plan & batch timings.
              </p>

              {isSuccess ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Details Received!</h4>
                  <p className="text-xs text-zinc-400">
                    Redirecting to WhatsApp to speak with Pankaj Sir.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-left">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs sm:text-sm placeholder:text-zinc-500 focus:outline-none focus:border-[#E5B53A]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="WhatsApp Mobile Number"
                      className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs sm:text-sm placeholder:text-zinc-500 focus:outline-none focus:border-[#E5B53A]"
                    />
                  </div>

                  {/* Course Pills */}
                  <div>
                    <label className="block text-[11px] font-medium text-zinc-400 mb-1.5">
                      Your Course
                    </label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {['B.Com', 'BBA', 'BCCA', '12th'].map((deg) => (
                        <button
                          type="button"
                          key={deg}
                          onClick={() => setDegree(deg)}
                          className={`py-1.5 px-2 rounded-md text-xs font-semibold border transition-all text-center ${
                            degree === deg
                              ? 'bg-[#E5B53A] text-black border-[#E5B53A]'
                              : 'bg-black/20 text-zinc-400 border-white/[0.08] hover:border-white/20'
                          }`}
                        >
                          {deg}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Backlog Subject */}
                  <div>
                    <label className="block text-[11px] font-medium text-zinc-400 mb-1">
                      Backlog Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#E5B53A]"
                    >
                      <option value="Financial Accounts" className="bg-[#141113]">Financial Accounts</option>
                      <option value="Cost Accounting" className="bg-[#141113]">Cost & Management Accounts</option>
                      <option value="Corporate Accounts" className="bg-[#141113]">Corporate Accounting</option>
                      <option value="Business Statistics / Maths" className="bg-[#141113]">Business Stats / Maths</option>
                      <option value="Income Tax & Taxation" className="bg-[#141113]">Income Tax & Taxation</option>
                      <option value="Multiple Backlogs" className="bg-[#141113]">Multiple Subjects</option>
                    </select>
                  </div>

                  {/* Campus Choice */}
                  <div>
                    <label className="block text-[11px] font-medium text-zinc-400 mb-1">
                      Campus
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Mahal', 'Sadar'].map((c) => (
                        <button
                          type="button"
                          key={c}
                          onClick={() => setCampus(c)}
                          className={`py-1.5 rounded-md text-xs font-semibold border transition-all ${
                            campus === c
                              ? 'bg-white/10 text-white border-white/30'
                              : 'bg-black/20 text-zinc-400 border-white/[0.08]'
                          }`}
                        >
                          {c} Campus
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 rounded-lg bg-[#E5B53A] hover:bg-[#d8a62c] text-black font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 active:scale-95 disabled:opacity-50 mt-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Get Passing Roadmap</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 3. Three Short Proof Quotes (No Long Stories) */}
        <div>
          <div className="text-center mb-4">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
              Recent Nagpur Student Results
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                name: 'Aman V.',
                degree: 'B.Com Sem 2',
                result: 'Scored 68/80 in Accounts',
                note: 'Failed twice before joining. Cleared in 1 attempt.',
              },
              {
                name: 'Shruti D.',
                degree: 'BBA Sem 4',
                result: 'Scored 62/80 in Stats',
                note: 'Stuck in Business Stats. Solved past papers to clear.',
              },
              {
                name: 'Nikhil R.',
                degree: 'BCCA Sem 3',
                result: 'Cleared Cost Accounting',
                note: 'Cleared in fast-track batch and saved his final year.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#141113] border border-white/[0.06] text-left"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white">{card.name}</span>
                  <span className="text-[10px] text-zinc-400 bg-white/[0.04] px-1.5 py-0.5 rounded">
                    {card.degree}
                  </span>
                </div>
                <div className="text-xs font-semibold text-emerald-400 mb-1">
                  {card.result}
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  {card.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Campus Location & Direct Contacts */}
        <div className="p-5 rounded-2xl bg-[#141113] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-white">
              <MapPin className="w-3.5 h-3.5 text-[#E5B53A]" />
              <span>Two Central Campuses in Nagpur</span>
            </div>
            <p className="text-xs text-zinc-400">
              <strong className="text-zinc-200">Mahal:</strong> Natraj Tower, Near Tilak Statue &nbsp;|&nbsp;{' '}
              <strong className="text-zinc-200">Sadar:</strong> Residency Road Hub
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20have%20an%20AT%2FKT%20in%20B.Com%2FBBA%2FBCCA."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 text-xs font-semibold inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={scrollToForm}
              className="px-4 py-2 rounded-lg bg-[#E5B53A] text-black text-xs font-bold"
            >
              Apply Now
            </button>
          </div>
        </div>
      </main>

      {/* 5. Minimal Footer */}
      <footer className="py-6 border-t border-white/[0.06] text-center text-xs text-zinc-500">
        <p>© 2026 Caliber’s Nova • Pankaj Agrawal Sir • Nagpur</p>
        <p className="mt-1">
          Helpline: <a href="tel:+919595253778" className="text-zinc-300 hover:text-white">+91 95952 53778</a>
        </p>
      </footer>

      {/* 6. Sticky Mobile CTA Dock */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-2.5 bg-[#0c090a]/95 backdrop-blur-xl border-t border-white/[0.08] sm:hidden">
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919595253778?text=Hello%20Pankaj%20Sir%2C%20I%20have%20an%20AT%2FKT%20in%20B.Com%2FBBA%2FBCCA."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={scrollToForm}
            className="flex-1 py-2.5 rounded-lg bg-[#E5B53A] text-black font-bold text-xs flex items-center justify-center gap-1.5"
          >
            <span>Clear Backlog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
