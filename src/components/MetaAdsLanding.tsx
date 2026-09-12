import React, { useState, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Star,
  Clock,
  Users,
  MapPin,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Award,
  BookOpen,
  Calendar,
  Send,
  XCircle,
  HelpCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MetaAdsLandingProps {
  onNavigateHome?: () => void;
}

export const MetaAdsLanding: React.FC<MetaAdsLandingProps> = ({ onNavigateHome }) => {
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('Class 10th Foundation (CBSE/State)');
  const [campus, setCampus] = useState('Mahal Campus (Natraj Tower)');
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (preselectCourse?: string) => {
    if (preselectCourse) {
      setCourse(preselectCourse);
    }
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setSubmitted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#FFD21F', '#FFC400', '#FFFFFF', '#9E1C38'],
      });
    } catch {
      // ignore
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Caliber's Nova! I saw your Meta Ad and want to claim my Free 2-Day Demo Class.\nName: ${name}\nPhone: ${phone}\nCourse: ${course}\nCampus: ${campus}`
  );

  const faqs = [
    {
      q: 'Can my child attend a free trial class before enrolling?',
      a: 'Yes, absolutely! We offer a 100% Free 2-Day Trial Class along with a personalized 1-on-1 Academic Diagnostic Session so the student can experience our teaching methodology firsthand before making any commitment.',
    },
    {
      q: 'What is the batch size at Caliber’s Nova?',
      a: 'We strictly maintain small batches of only 20 to 25 students. Unlike mega-coachings with 100+ students packed in an auditorium, our mentors know every single student by name and track their daily progress.',
    },
    {
      q: 'Who will be teaching my child?',
      a: 'Your child will be taught directly by senior faculty and our founders, Pankaj Agrawal & Rahul Rai, who bring over 19+ years of classroom experience. We never assign junior or unverified trainee tutors.',
    },
    {
      q: 'Where are your campuses located in Nagpur?',
      a: 'We have two prime centers in Nagpur: our Flagship Academic Hub at Natraj Tower, Zenda Chowk, Mahal, and our Sadar Campus for students residing in Central and North Nagpur.',
    },
    {
      q: 'How do you help students with doubt solving and test preparation?',
      a: 'We conduct daily dedicated doubt-clearing sessions after regular lecture hours. Additionally, we run weekly board-pattern tests and entrance mock series with detailed individual answer-sheet analysis shared directly with parents.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#140407] text-[#F5F3ED] selection:bg-[#FFD21F] selection:text-black antialiased relative pb-20 sm:pb-12">
      
      {/* 1. TOP URGENCY AD TICKER */}
      <div className="bg-gradient-to-r from-[#2e0b16] via-[#FFD21F] to-[#2e0b16] text-black text-center py-2 px-3 text-[11px] sm:text-xs font-black tracking-wide uppercase flex items-center justify-center gap-2 shadow-md">
        <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-ping" />
        <span>ADMISSIONS OPEN 2026–27 • STRICTLY 25 SEATS PER BATCH • FREE 2-DAY DEMO</span>
      </div>

      {/* 2. MINIMAL HIGH-CONVERSION HEADER */}
      <header className="sticky top-0 z-40 bg-[#180409]/95 backdrop-blur-md border-b border-white/[0.08] px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center p-0.5 border border-white/20">
              <img
                src="/assets/logo.png"
                alt="Caliber's Nova"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <div className="text-white font-black text-sm sm:text-base tracking-tight leading-none">
                CALIBER’S <span className="text-[#FFD21F]">NOVA</span>
              </div>
              <div className="text-[9px] text-zinc-400 font-semibold tracking-wider uppercase">
                Nagpur • Est. 2007
              </div>
            </div>
          </div>

          {/* Quick Contact & Switcher */}
          <div className="flex items-center gap-2 sm:gap-4">
            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="hidden md:inline-flex text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                Visit Main Website →
              </button>
            )}

            <a
              href="tel:+919595253778"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-xs font-bold text-white border border-white/15 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span>+91 95952 53778</span>
            </a>

            <a
              href="https://wa.me/919595253778?text=Hello%20Caliber%27s%20Nova%2C%20I%20want%20to%20know%20more%20about%20admissions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </header>

      {/* 3. HERO SECTION WITH DIRECT ABOVE-THE-FOLD LEAD CAPTURE FORM */}
      <section className="pt-6 sm:pt-12 pb-10 sm:pb-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: High-Impact Ad Messaging */}
          <div className="lg:col-span-7 text-left space-y-4 sm:space-y-6">
            
            {/* Offer Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD21F]/15 border border-[#FFD21F]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD21F] fill-[#FFD21F]" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FFD21F]">
                Free 2-Day Trial Class & Concept Diagnosis
              </span>
            </div>

            {/* Ad Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Score 95%+ in Boards & <br />
              Crack Top Entrances with <br />
              <span className="text-[#FFD21F]">Nagpur’s Trusted Mentors.</span>
            </h1>

            {/* Ad Value Proposition */}
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-xl">
              Stop struggling with overcrowded batches and generic videos. At Caliber’s Nova, our founders personally teach in 
              <strong className="text-white"> 25-student small batches</strong>, ensuring crystal-clear concept mastery, daily doubt solving, and proven board & entrance results since 2007.
            </p>

            {/* Trust Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#1d060b] border border-white/[0.08] p-3 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-1 text-[#FFD21F] font-black text-sm sm:text-base">
                  <Star className="w-4 h-4 fill-[#FFD21F]" />
                  <span>4.9 / 5</span>
                </div>
                <span className="text-[10px] text-zinc-400 font-semibold mt-0.5">900+ Google Reviews</span>
              </div>

              <div className="bg-[#1d060b] border border-white/[0.08] p-3 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="text-white font-black text-sm sm:text-base">
                  19+ <span className="text-[#FFD21F]">Years</span>
                </div>
                <span className="text-[10px] text-zinc-400 font-semibold mt-0.5">Nagpur Legacy (2007)</span>
              </div>

              <div className="bg-[#1d060b] border border-white/[0.08] p-3 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="text-white font-black text-sm sm:text-base">
                  25 <span className="text-[#FFD21F]">Max</span>
                </div>
                <span className="text-[10px] text-zinc-400 font-semibold mt-0.5">Students Per Batch</span>
              </div>

              <div className="bg-[#1d060b] border border-white/[0.08] p-3 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="text-[#FFD21F] font-black text-sm sm:text-base">
                  98.4%
                </div>
                <span className="text-[10px] text-zinc-400 font-semibold mt-0.5">Top Board Score</span>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FFD21F] shrink-0" />
                <span>Personal mentorship by Co-Founders Pankaj Agrawal & Rahul Rai</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FFD21F] shrink-0" />
                <span>Daily 1-on-1 doubt clearing & weekly board-pattern test series</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FFD21F] shrink-0" />
                <span>Two convenient campuses in Nagpur: Mahal Hub & Sadar</span>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Lead Generation Card */}
          <div className="lg:col-span-5" ref={formRef}>
            <div className="relative rounded-3xl bg-[#1d060b] border-2 border-[#FFD21F]/40 p-5 sm:p-7 shadow-2xl shadow-black text-left overflow-hidden">
              
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD21F]/15 rounded-full blur-3xl pointer-events-none" />

              {!submitted ? (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFD21F] text-black text-[10px] font-black uppercase tracking-wider">
                      LIMITED SEATS
                    </span>
                    <span className="text-[11px] text-[#FFD21F] font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 4 Seats Left in Batch
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    Book Free Demo Class & <br />
                    <span className="text-[#FFD21F]">1-on-1 Mentorship</span>
                  </h3>

                  <p className="text-xs text-zinc-400 mt-1 mb-5">
                    Experience our classroom for 2 days. Get a comprehensive study roadmap from senior faculty.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Aryan Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#280a12] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FFD21F] focus:ring-1 focus:ring-[#FFD21F] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                        WhatsApp Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#280a12] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FFD21F] focus:ring-1 focus:ring-[#FFD21F] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                        Select Course / Grade *
                      </label>
                      <select
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#280a12] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FFD21F] transition-all"
                      >
                        <option value="Class 8th Foundation (CBSE/State)">Class 8th Foundation (CBSE/State)</option>
                        <option value="Class 9th Foundation (CBSE/State)">Class 9th Foundation (CBSE/State)</option>
                        <option value="Class 10th Foundation (CBSE/State)">Class 10th Foundation (CBSE/State)</option>
                        <option value="Class 11th Science (PCM/PCB)">Class 11th Science (PCM/PCB)</option>
                        <option value="Class 11th Commerce & Accounts">Class 11th Commerce & Accounts</option>
                        <option value="Class 12th Science (Board + MHT-CET/JEE)">Class 12th Science (Board + CET/JEE)</option>
                        <option value="Class 12th Commerce & Accounts">Class 12th Commerce & Accounts</option>
                        <option value="CAT / MBA CET / Entrance Prep">CAT / MBA CET / Entrance Prep</option>
                        <option value="Graduation (B.Com / BBA / BCA)">Graduation (B.Com / BBA / BCA)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                        Preferred Campus in Nagpur *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setCampus('Mahal Campus (Natraj Tower)')}
                          className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all text-center ${
                            campus.includes('Mahal')
                              ? 'bg-[#FFD21F] text-black border-[#FFD21F]'
                              : 'bg-[#280a12] text-zinc-300 border-white/10 hover:border-white/20'
                          }`}
                        >
                          📍 Mahal Campus
                        </button>
                        <button
                          type="button"
                          onClick={() => setCampus('Sadar Campus')}
                          className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all text-center ${
                            campus.includes('Sadar')
                              ? 'bg-[#FFD21F] text-black border-[#FFD21F]'
                              : 'bg-[#280a12] text-zinc-300 border-white/10 hover:border-white/20'
                          }`}
                        >
                          📍 Sadar Campus
                        </button>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#FFD21F] hover:bg-[#FFC400] text-black font-black text-sm uppercase tracking-wide py-3.5 rounded-xl shadow-lg shadow-[#FFD21F]/20 transition-all duration-200 transform active:scale-98 flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Book My Free Demo Class</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-400 text-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>100% Free • No Obligation • Instant WhatsApp Confirmation</span>
                    </div>

                  </form>
                </div>
              ) : (
                /* Submission Confirmation */
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFD21F]/20 text-[#FFD21F] flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-black text-white">Free Demo Confirmed!</h3>

                  <p className="text-xs sm:text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-bold">{name}</span>! Our senior mentor will call you on{' '}
                    <span className="text-[#FFD21F] font-bold">{phone}</span> to schedule your 2-day trial for {course} at our {campus}.
                  </p>

                  <div className="pt-3 space-y-2">
                    <a
                      href={`https://wa.me/919595253778?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-black text-xs uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm Immediately on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-zinc-400 hover:text-white pt-2 font-semibold"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 4. REAL PHOTO BANNER & PROOF */}
      <section className="py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 group shadow-xl">
            <img
              src="/assets/classroom.jpg"
              alt="Interactive classroom in Nagpur"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left text-[11px] sm:text-xs font-bold text-white">
              Focused Small Batches
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 group shadow-xl">
            <img
              src="/assets/faculty.jpg"
              alt="Mentors teaching at whiteboard"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left text-[11px] sm:text-xs font-bold text-white">
              Founders Personally Teach
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 group shadow-xl">
            <img
              src="/assets/gmb_photo_1.jpg"
              alt="Doubt session under Jeet Ki Zid"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left text-[11px] sm:text-xs font-bold text-white">
              Daily 1-on-1 Doubt Solving
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 group shadow-xl">
            <img
              src="/assets/gmb_photo_2.jpg"
              alt="Natraj Tower central campus"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left text-[11px] sm:text-xs font-bold text-white">
              Mahal Central Flagship Hub
            </div>
          </div>

        </div>
      </section>

      {/* 5. COURSES TAILORED FOR AD TARGETING */}
      <section className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FFD21F]">
            CHOOSE YOUR GOAL
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1.5">
            Admissions Open for <span className="text-[#FFD21F]">2026–27 Batches</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            Click on any program to claim your 2-Day Free Demo Class and course syllabus breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Card 1: Classes 8th to 10th Foundation */}
          <div className="rounded-2xl bg-[#1d060b] border border-white/[0.08] hover:border-[#FFD21F]/40 p-5 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#FFD21F]/20 text-[#FFD21F]">
                  CLASSES 8TH – 10TH
                </span>
                <BookOpen className="w-4 h-4 text-zinc-400 group-hover:text-[#FFD21F] transition-colors" />
              </div>

              <h3 className="text-lg font-black text-white leading-snug">
                Foundation & Board Mastery
              </h3>
              <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                CBSE & State Board. Complete conceptual mastery in Science, Mathematics & English with zero rote learning.
              </p>

              <ul className="mt-4 space-y-1.5 text-[11px] text-zinc-400">
                <li className="flex items-center gap-1.5">
                  <span className="text-[#FFD21F]">✓</span> Weekly chapter-wise assessments
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#FFD21F]">✓</span> 10th Board topper track record (98.4%)
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#FFD21F]">✓</span> NTSE & Olympiad orientation
                </li>
              </ul>
            </div>

            <button
              onClick={() => scrollToForm('Class 10th Foundation (CBSE/State)')}
              className="mt-5 w-full py-2.5 rounded-xl bg-white/5 group-hover:bg-[#FFD21F] text-white group-hover:text-black font-extrabold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <span>Book Demo Class</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Classes 11th & 12th Science */}
          <div className="rounded-2xl bg-[#1d060b] border border-white/[0.08] hover:border-[#FFD21F]/40 p-5 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#FFD21F]/20 text-[#FFD21F]">
                  CLASSES 11TH & 12TH
                </span>
                <Award className="w-4 h-4 text-zinc-400 group-hover:text-[#FFD21F] transition-colors" />
              </div>

              <h3 className="text-lg font-black text-white leading-snug">
                Science (PCM / PCB)
              </h3>
              <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                Integrated Board + MHT-CET / JEE / NEET focus. Rigorous numerical problem solving and formula intuition.
              </p>

              <ul className="mt-4 space-y-1.5 text-[11px] text-zinc-400">
                <li className="flex items-center gap-1.5">
                  <span className="text-[#FFD21F]">✓</span> Intensive Physics & Chemistry problem sets
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#FFD21F]">✓</span> Past 10-year board paper deep dive
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#FFD21F]">✓</span> Individual performance tracking
                </li>
              </ul>
            </div>

            <button
              onClick={() => scrollToForm('Class 12th Science (Board + MHT-CET/JEE)')}
              className="mt-5 w-full py-2.5 rounded-xl bg-white/5 group-hover:bg-[#FFD21F] text-white group-hover:text-black font-extrabold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <span>Book Demo Class</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Classes 11th & 12th Commerce */}
          <div className="rounded-2xl bg-[#1d060b] border border-white/[0.08] hover:border-[#FFD21F]/40 p-5 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#FFD21F]/20 text-[#FFD21F]">
                  COMMERCE SPECIALTY
                </span>
                <Sparkles className="w-4 h-4 text-zinc-400 group-hover:text-[#FFD21F] transition-colors" />
              </div>

              <h3 className="text-lg font-black text-white leading-snug">
                Commerce & Accountancy
              </h3>
              <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                Nagpur's most reputed Commerce coaching. In-depth Accountancy, Economics, SP & Secretarial Practice.
              </p>

              <ul className="mt-4 space-y-1.5 text-[11px] text-zinc-400">
                <li className="flex items-center gap-1.5">
                  <span className="text-[#FFD21F]">✓</span> Step-by-step balance sheet & ledger clarity
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#FFD21F]">✓</span> 100/100 score strategy in Accounts
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#FFD21F]">✓</span> Foundation for CA/CS/CMA
                </li>
              </ul>
            </div>

            <button
              onClick={() => scrollToForm('Class 12th Commerce & Accounts')}
              className="mt-5 w-full py-2.5 rounded-xl bg-white/5 group-hover:bg-[#FFD21F] text-white group-hover:text-black font-extrabold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <span>Book Demo Class</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: Entrance & Higher Studies */}
          <div className="rounded-2xl bg-[#1d060b] border border-white/[0.08] hover:border-[#FFD21F]/40 p-5 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#FFD21F]/20 text-[#FFD21F]">
                  ENTRANCE & DEGREE
                </span>
                <Users className="w-4 h-4 text-zinc-400 group-hover:text-[#FFD21F] transition-colors" />
              </div>

              <h3 className="text-lg font-black text-white leading-snug">
                CAT / CET & Degree
              </h3>
              <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                Quantitative Aptitude, Logical Reasoning, DI, Verbal Ability, alongside B.Com, BBA & BCA semester coaching.
              </p>

              <ul className="mt-4 space-y-1.5 text-[11px] text-zinc-400">
                <li className="flex items-center gap-1.5">
                  <span className="text-[#FFD21F]">✓</span> High-speed calculation & shortcut tricks
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#FFD21F]">✓</span> Timed mock exams with ranking analysis
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#FFD21F]">✓</span> College semester exam preparation
                </li>
              </ul>
            </div>

            <button
              onClick={() => scrollToForm('CAT / MBA CET / Entrance Prep')}
              className="mt-5 w-full py-2.5 rounded-xl bg-white/5 group-hover:bg-[#FFD21F] text-white group-hover:text-black font-extrabold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <span>Book Demo Class</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 6. COMPARISON: CALIBER'S NOVA VS GENERIC MASS COACHINGS */}
      <section className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#1d060b] border border-white/[0.08] p-6 sm:p-10 lg:p-12">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FFD21F]">
              THE CRUCIAL DIFFERENCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1.5">
              Why Nagpur Parents Choose <span className="text-[#FFD21F]">Caliber’s Nova</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              See why high-scoring students thrive here rather than in crowded corporate coaching chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: Caliber's Nova (The Right Way) */}
            <div className="rounded-2xl bg-[#280a12] border-2 border-[#FFD21F]/40 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#FFD21F]/20">
                <div className="font-extrabold text-lg text-white">
                  Caliber’s <span className="text-[#FFD21F]">Nova</span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFD21F] text-black">
                  Recommended
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Strictly 20–25 Students per Batch:</strong> Every student gets direct eye contact, questions answered, and individual attention.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Founders Personally Teach:</strong> Senior educators Pankaj Agrawal & Rahul Rai conduct the core lectures themselves.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Daily 1-on-1 Doubt Sessions:</strong> Dedicated hours every evening to sit with teachers and clear doubts until 100% resolved.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Weekly Diagnostic Feedback:</strong> Evaluated answer papers returned with line-by-line improvement notes, keeping parents fully informed.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Generic Mega Institutes */}
            <div className="rounded-2xl bg-[#180409] border border-white/[0.06] p-6 space-y-4 opacity-80">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="font-extrabold text-lg text-zinc-300">
                  Generic Mega-Coachings
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-zinc-400">
                  The Reality
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-400">
                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-200">100+ Students Packed in Hall:</strong> Back-benchers get neglected; shy students never get to ask questions.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-200">Constantly Changing Trainee Tutors:</strong> Famous teachers only teach top 1% batches; average students get rookie teachers.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-200">No Real Doubt Resolution:</strong> Long queues or impersonal app tickets that leave conceptual gaps wide open.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-200">Rote Learning & Speed Rush:</strong> Syllabus rushed before exams without ensuring student grasp and understanding.
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => scrollToForm()}
              className="inline-flex items-center gap-2 bg-[#FFD21F] hover:bg-[#FFC400] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-200 transform active:scale-95 shadow-lg shadow-[#FFD21F]/20"
            >
              <span>Experience The Difference – Book Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 7. VERIFIED STUDENT REVIEWS */}
      <section className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FFD21F]">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1.5">
            What Our Students & <span className="text-[#FFD21F]">Parents Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex text-[#FFD21F]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFD21F]" />
              ))}
            </div>
            <span className="text-xs font-bold text-zinc-300">
              4.9★ Average Rating across 900+ Google Reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          <div className="rounded-2xl bg-[#1d060b] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-1 text-[#FFD21F] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFD21F]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                "I was struggling with Physics and Chemistry before joining Caliber’s Nova. The small batch size changed everything. Rahul Sir and Pankaj Sir make even the most complicated theorems easy to understand. I scored 96.2% in my 12th board exams!"
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] mt-4 flex items-center justify-between">
              <div>
                <div className="text-xs font-extrabold text-white">Harsh Vardhan</div>
                <div className="text-[10px] text-zinc-400">Class 12th Science — Merit List</div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">
                Verified
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-[#1d060b] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-1 text-[#FFD21F] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFD21F]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                "Best institute in Nagpur for Commerce and Accounts. The faculty gives personal attention and ensures every journal entry and balance sheet ledger is understood conceptually. I topped my school with 98% in Accounts!"
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] mt-4 flex items-center justify-between">
              <div>
                <div className="text-xs font-extrabold text-white">Sneha Gupta</div>
                <div className="text-[10px] text-zinc-400">Class 12th Commerce Topper</div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">
                Verified
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-[#1d060b] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-1 text-[#FFD21F] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFD21F]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                "As a parent, what impressed me most is their regular updates and student discipline. My son joined in Class 9 for Foundation and his academic confidence skyrocketed. His Class 10 board score was 98.4%."
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] mt-4 flex items-center justify-between">
              <div>
                <div className="text-xs font-extrabold text-white">Satwik Deshmukh & Parent</div>
                <div className="text-[10px] text-zinc-400">Class 10th CBSE 98.4%</div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">
                Verified
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 8. CAMPUSES & DIRECT ACTION CONTACT */}
      <section className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#1d060b] border border-white/[0.08] p-6 sm:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FFD21F]">
                VISIT US IN NAGPUR
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Two Prime Academic Campuses
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Feel free to visit our centers for a direct face-to-face consultation with our senior faculty. 
                We are open Monday to Saturday, 9:00 AM to 7:30 PM.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#280a12] border border-white/10">
                  <div className="flex items-center gap-2 font-bold text-white text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-[#FFD21F] shrink-0" />
                    <span>Central Flagship Campus — Mahal</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-400 pl-6 mt-1">
                    2nd Floor, Natraj Tower, Zenda Chowk, Natraj Talkies Road, Mahal, Nagpur - 440032
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#280a12] border border-white/10">
                  <div className="flex items-center gap-2 font-bold text-white text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-[#FFD21F] shrink-0" />
                    <span>Sadar Branch Campus — Nagpur</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-400 pl-6 mt-1">
                    Central Nagpur Hub, Sadar, Nagpur
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#280a12] rounded-3xl p-6 sm:p-8 border border-white/10 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FFD21F] text-black flex items-center justify-center mx-auto shadow-lg shadow-[#FFD21F]/20">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Need Immediate Information?
              </h3>
              <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                Speak directly with our academic coordinators to know current batch timings, fees, and seat availability.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href="tel:+919595253778"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FFD21F] hover:bg-[#FFC400] text-black font-extrabold text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 95952 53778</span>
                </a>

                <a
                  href="https://wa.me/919595253778?text=Hello%20Caliber%27s%20Nova%2C%20I%20saw%20your%20Meta%20Ad%20and%20want%20to%20inquire%20about%20admissions."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs uppercase tracking-wider transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Directly</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FFD21F]">
            GOT QUESTIONS?
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1.5">
            Frequently Asked <span className="text-[#FFD21F]">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#1d060b] border border-white/[0.08] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left text-xs sm:text-sm font-bold text-white hover:text-[#FFD21F] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#FFD21F] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-zinc-300 border-t border-white/[0.04] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. FINAL BOTTOM CTA BANNER */}
      <section className="py-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-[#380f1a] via-[#240810] to-[#140407] border-2 border-[#FFD21F]/30 p-8 sm:p-12 text-center space-y-4 shadow-2xl">
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD21F] text-black">
            LIMITED ADMISSION SLOTS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Give Your Child the <span className="text-[#FFD21F]">Caliber’s Nova Advantage</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
            Book your Free 2-Day Demo Class today and experience our disciplined, concept-first teaching firsthand.
          </p>

          <div className="pt-2">
            <button
              onClick={() => scrollToForm()}
              className="inline-flex items-center gap-2 bg-[#FFD21F] hover:bg-[#FFC400] text-black font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 transform active:scale-95 shadow-xl shadow-[#FFD21F]/20"
            >
              <span>Book Free Demo Class Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 11. MINIMAL FOOTER */}
      <footer className="py-6 border-t border-white/[0.08] text-center text-xs text-zinc-500">
        <p>© 2007–2026 Caliber’s Nova Academic Institute, Nagpur. All rights reserved.</p>
        <p className="mt-1 text-[11px] text-zinc-600">
          This page is an official admissions landing page for Caliber's Nova educational campaigns.
        </p>
      </footer>

      {/* 12. PERSISTENT MOBILE STICKY CONVERSION BAR */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-[#180409]/95 backdrop-blur-lg border-t border-white/15 px-3 py-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:+919595253778"
          className="flex-1 bg-white/10 hover:bg-white/15 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 border border-white/10"
        >
          <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
          <span>Call Now</span>
        </a>

        <a
          href="https://wa.me/919595253778?text=Hello%20Caliber%27s%20Nova%2C%20I%20saw%20your%20Meta%20Ad%20and%20want%20to%20claim%20the%20Free%20Demo%20Class."
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#25D366] text-black font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => scrollToForm()}
          className="flex-1 bg-[#FFD21F] text-black font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1 shadow-md shadow-[#FFD21F]/20"
        >
          <span>Free Demo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
