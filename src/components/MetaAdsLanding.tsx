import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
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
      alert('Please enter your name and mobile number.');
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
          colors: ['#E5B53A', '#ffffff'],
        });
      } catch (err) {
        console.error(err);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0c090a] text-zinc-100 font-sans selection:bg-[#E5B53A] selection:text-black flex flex-col justify-between">
      {/* 1. Header (No WhatsApp) */}
      <header className="px-4 sm:px-6 py-4 border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/logo-white.png"
              alt="Caliber's Nova"
              className="w-8 h-8 object-contain"
            />
            <span className="font-extrabold tracking-tight text-white text-base">
              CALIBER’S <span className="text-[#E5B53A]">NOVA</span>
            </span>
          </div>

          <a
            href="tel:+919595253778"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#E5B53A]" />
            <span>+91 95952 53778</span>
          </a>
        </div>
      </header>

      {/* 2. Main Content: Ultra Minimal & Centered */}
      <main className="flex-1 max-w-md mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 flex flex-col justify-center">
        {/* Direct Title */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-block text-[11px] font-semibold text-[#E5B53A] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E5B53A]/10 border border-[#E5B53A]/20">
            RTMNU AT/KT Fast-Track
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Clear Your AT/KT on Next Attempt
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            BBA • B.Com • BCCA • Mentored by Pankaj Agrawal Sir
          </p>
        </div>

        {/* Minimal Form Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#141113] border border-white/[0.08] shadow-2xl">
          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 bg-[#E5B53A]/10 border border-[#E5B53A]/30 rounded-full flex items-center justify-center mx-auto text-[#E5B53A]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Callback Requested!</h3>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                Our academic desk will call you at <strong className="text-white">{phone}</strong> shortly with batch timings and exam roadmap.
              </p>
              <a
                href="tel:+919595253778"
                className="inline-flex items-center gap-2 text-xs font-bold text-black bg-[#E5B53A] px-4 py-2 rounded-lg mt-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us Directly</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs sm:text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#E5B53A]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs sm:text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#E5B53A]"
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
                          ? 'bg-[#E5B53A] text-black border-[#E5B53A]'
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
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/[0.08] text-white text-xs focus:outline-none focus:border-[#E5B53A]"
                >
                  <option value="Financial Accounts" className="bg-[#141113]">Financial Accounts</option>
                  <option value="Cost Accounting" className="bg-[#141113]">Cost Accounting</option>
                  <option value="Corporate Accounts" className="bg-[#141113]">Corporate Accounts</option>
                  <option value="Business Statistics / Maths" className="bg-[#141113]">Business Stats / Maths</option>
                  <option value="Income Tax" className="bg-[#141113]">Income Tax</option>
                  <option value="Multiple Backlogs" className="bg-[#141113]">Multiple Subjects</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-400 mb-1">
                  Preferred Campus
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
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-lg bg-[#E5B53A] hover:bg-[#d8a62c] text-black font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 active:scale-95 disabled:opacity-50 mt-2"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Get Fast-Track Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Minimal Footer Info */}
        <div className="mt-6 text-center text-[11px] text-zinc-500 space-y-1">
          <p>📍 Mahal: Natraj Tower • Sadar: Residency Road</p>
          <p>Direct Faculty Assistance • 100% Confidential</p>
        </div>
      </main>

      {/* 3. Footer */}
      <footer className="py-4 border-t border-white/[0.06] text-center text-xs text-zinc-600">
        <p>© 2026 Caliber’s Nova • Nagpur</p>
      </footer>
    </div>
  );
};
