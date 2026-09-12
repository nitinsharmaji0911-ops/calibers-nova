import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, Sparkles, Send, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CounsellingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export const CounsellingModal: React.FC<CounsellingModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState(preselectedProgram || 'Class 10th');
  const [slot, setSlot] = useState('Evening (4 PM - 7 PM)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD21F', '#FFC400', '#FFFFFF', '#0B0B0B'],
      });
    } catch {
      // ignore
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Caliber's Nova! I would like to book an academic counselling session for ${name} (${grade}). Preferred slot: ${slot}. Phone: ${phone}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#1c060e] border border-white/15 rounded-[28px] p-6 sm:p-8 shadow-2xl shadow-black text-left text-white overflow-hidden">
        
        {/* Subtle yellow ambient corner glow */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#FFD21F]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white flex items-center justify-center transition-colors border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-[#FFD21F] text-xs font-mono uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 fill-[#FFD21F]" />
              <span>Personalized Academic Guidance</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Book a Free <span className="text-[#FFD21F]">Counselling</span>.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 mt-1 mb-6">
              Discuss concept roadmaps, career options, and batch timings with our senior mentors.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Student or Parent Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aryan Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-[#280a12] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FFD21F] focus:ring-1 focus:ring-[#FFD21F] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Mobile Number (WhatsApp)
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-[#280a12] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FFD21F] focus:ring-1 focus:ring-[#FFD21F] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Grade / Program
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#280a12] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FFD21F] transition-all"
                  >
                    <option value="Class 8th Foundation">Class 8th Foundation</option>
                    <option value="Class 9th Foundation">Class 9th Foundation</option>
                    <option value="Class 10th Foundation">Class 10th Foundation</option>
                    <option value="Class 11th Science">Class 11th Science</option>
                    <option value="Class 11th Commerce">Class 11th Commerce</option>
                    <option value="Class 12th Science">Class 12th Science</option>
                    <option value="Class 12th Commerce">Class 12th Commerce</option>
                    <option value="Entrance Prep (CAT/CET/JEE/NEET)">Entrance Prep (CAT/CET/JEE)</option>
                    <option value="Graduation (B.Com/BBA/BCA/MBA)">Graduation (B.Com/BBA/BCA)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Preferred Timing
                  </label>
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#280a12] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FFD21F] transition-all"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#FFD21F] hover:bg-[#FFC400] text-black font-extrabold text-sm py-3.5 rounded-xl transition-all duration-200 transform active:scale-95 shadow-lg shadow-[#FFD21F]/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Counselling Slot</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <span className="text-[11px] text-zinc-400">
                  Or reach us directly via{' '}
                  <a
                    href="tel:+919595253778"
                    className="text-[#FFD21F] hover:underline font-semibold"
                  >
                    +91 95952 53778
                  </a>
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FFD21F]/20 text-[#FFD21F] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">Counselling Slot Requested!</h3>
            <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-white font-bold">{name}</span>. Our senior mentor will connect with you on{' '}
              <span className="text-[#FFD21F] font-bold">{phone}</span> to confirm your session for {grade}.
            </p>

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/919595253778?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect via WhatsApp Directly</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2 text-xs font-semibold text-zinc-400 hover:text-white"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
