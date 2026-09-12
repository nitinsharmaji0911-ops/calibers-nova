import React, { useState, useRef, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Star,
  MapPin,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  Award,
  Ticket,
  Check,
  Flame,
  Users,
  Brain,
  Layers,
  GraduationCap,
  TrendingUp,
  Clock,
  Send,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MetaAdsLandingProps {
  onNavigateHome?: () => void;
}

// Real Nagpur Toppers from Caliber's Nova Campus
const toppers = [
  {
    name: 'Akshada Bhose',
    score: '97.17%',
    stream: 'Class 12 Boards',
    badge: 'Nagpur High Merit',
    quote:
      'The conceptual depth taught at Caliber’s Nova made even complex subjects effortless. Every doubt was solved the same day.',
  },
  {
    name: 'Satwik Deshmukh',
    score: '98.40%',
    stream: 'Class 10 CBSE',
    badge: '100 in Mathematics',
    quote:
      'I was an average student memorizing formulas. Joining Nova completely transformed my thinking and analytical speed.',
  },
  {
    name: 'Sakshi Pathrabe',
    score: '95.80%',
    stream: 'Class 12 Science',
    badge: 'Merit List Ranker',
    quote:
      'You are never treated like an anonymous roll number here. Pankaj Sir and the mentors personally review your test performance.',
  },
  {
    name: 'Prem Khade',
    score: '94.33%',
    stream: 'Science & CET',
    badge: 'Top Percentile',
    quote:
      'The shortcut derivations and weekly mock assessments mirrored the actual entrance exams so accurately.',
  },
];

// Life @ Nova GMB Highlights - Authentic Nagpur Campus Cards
const highlights = [
  {
    id: 1,
    title: 'Flagship Mahal Campus',
    subtitle: 'Natraj Tower • Central Nagpur Hub',
    tag: 'CAMPUS',
    img: '/assets/gmb_photo_2.jpg',
    detail: 'Centrally located on Mahal main road, fully air-conditioned acoustic classrooms with modern smart boards.',
  },
  {
    id: 2,
    title: 'High-Attention Classroom',
    subtitle: 'Under "जीत की ज़िद" Pedagogy',
    tag: 'CLASSROOM',
    img: '/assets/gmb_photo_1.jpg',
    detail: 'Every student in direct eye-contact with mentors. Concept derivations over passive rote memorization.',
  },
  {
    id: 3,
    title: 'VYAAPAR Business Convention',
    subtitle: 'City’s Premier Career Summit',
    tag: 'SEMINAR',
    img: '/assets/gmb_event_vyaapar.jpg',
    detail: 'Connecting high-school & college aspirants with real-world industry leaders, founders, and career mentors.',
  },
  {
    id: 4,
    title: 'Annual Student Felicitation',
    subtitle: 'Community, Culture & Merit',
    tag: 'CELEBRATION',
    img: '/assets/gmb_photo_3.jpg',
    detail: 'Honoring board toppers, entrance achievers, and academic breakthroughs with the entire Nova family.',
  },
  {
    id: 5,
    title: 'Daily 1-on-1 Doubt Desk',
    subtitle: 'Zero Hesitation Guarantee',
    tag: 'ACADEMICS',
    img: '/assets/student-writing.jpg',
    detail: 'Personal doubt clearance every evening after classes until all concepts and numericals are cemented.',
  },
  {
    id: 6,
    title: 'Faculty Honors & Legacy',
    subtitle: '18+ Years Pedagogy in Nagpur',
    tag: 'MENTORSHIP',
    img: '/assets/gmb_event_teachers.jpg',
    detail: 'Senior educators dedicated exclusively to concept mastery, personalized feedback, and student growth.',
  },
  {
    id: 7,
    title: 'Academic Discipline & Rigor',
    subtitle: 'Consistent Daily Practice Sheets',
    tag: 'METHODOLOGY',
    img: '/assets/discipline-wall.jpg',
    detail: 'Daily attendance tracking, prompt feedback loops, and individual parent progress reviews.',
  },
];

const faqItems = [
  {
    q: 'What exactly is the Free 2-Day Classroom Pass?',
    a: 'The 2-Day Pass grants you complete access to attend 2 live syllabus lectures with our regular cohort. You experience the actual teaching pedagogy, participate in classroom problem-solving, meet our senior faculty, and receive an individualized 1-on-1 Concept Diagnostic Roadmap. There is zero financial commitment.',
  },
  {
    q: 'How does Caliber’s Nova differ from mass coaching institutes?',
    a: 'Mass coaching factories pack 100+ students into auditorium halls where students hesitate to voice doubts. At Caliber’s Nova, we maintain focused, disciplined cohorts where every single student is in direct eye-contact with faculty, homework is personally checked, and doubts are cleared every single evening.',
  },
  {
    q: 'Who will actually teach the classes?',
    a: 'Founder Pankaj Agrawal Sir and our veteran senior faculty personally lead every batch. We never outsource your child’s crucial academic years to inexperienced junior faculty or part-time contract tutors.',
  },
  {
    q: 'Where are your campuses in Nagpur?',
    a: 'We operate two premier campuses: our Flagship Academic Hub in Mahal (Near Tilak Putla, Opp. Raymond Showroom) and our Central Campus in Sadar (Opp. Haldiram’s / Katol Road). Both feature air-conditioned, acoustically treated classrooms and dedicated study desks.',
  },
];

export const MetaAdsLanding: React.FC<MetaAdsLandingProps> = ({ onNavigateHome }) => {
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('Class 10th Foundation');
  const [selectedCampus, setSelectedCampus] = useState('Mahal Flagship Hub');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Continuous Auto-Scrolling Card Reel State & Controls
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [scrollSpeed, setScrollSpeed] = useState<'normal' | 'fast'>('normal');
  const [scrollDirection, setScrollDirection] = useState<'forward' | 'reverse'>('forward');

  const getAnimationClass = () => {
    if (!isAutoScrolling) return 'pause-animation';
    if (scrollDirection === 'reverse') return 'animate-marquee-cards-reverse';
    if (scrollSpeed === 'fast') return 'animate-marquee-cards-fast';
    return 'animate-marquee-cards';
  };

  const gradeOptions = [
    { label: 'Class 8th–10th Foundation', sub: 'CBSE & State Board Mastery' },
    { label: 'Class 11th–12th Science', sub: 'Physics, Chemistry, Math/Bio + CET/JEE' },
    { label: 'Class 11th–12th Commerce', sub: 'Elite Accounts & Economics' },
    { label: 'CAT / CET / MBA Entrance', sub: 'Quantitative Aptitude & Logic' },
  ];

  const handlePassSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phone.trim()) {
      alert('Please provide your name and WhatsApp number to claim your pass.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#FFD21F', '#ffffff', '#e11d48'],
        });
      } catch (err) {
        console.error(err);
      }

      const msg = `Hello Caliber’s Nova! 👋\n\nI want to confirm my Free 2-Day Classroom Pass for:\n\n• Name: ${studentName.trim()}\n• Program: ${selectedGrade}\n• Campus: ${selectedCampus}\n• Mobile: ${phone.trim()}\n\nPlease share the batch schedule and diagnostic test slot.`;
      const whatsappUrl = `https://wa.me/919595253778?text=${encodeURIComponent(msg)}`;
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
    }, 600);
  };

  const scrollToForm = () => {
    const el = document.getElementById('claim-pass');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0205] text-zinc-100 font-sans selection:bg-[#FFD21F] selection:text-black relative overflow-x-hidden">
      {/* Dynamic Atmospheric Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#640c21]/30 via-[#3a0612]/20 to-transparent rounded-full blur-[140px] opacity-80" />
        <div className="absolute top-[40%] -left-[150px] w-[600px] h-[600px] bg-[#420a16]/25 rounded-full blur-[130px] opacity-60" />
        <div className="absolute top-[75%] -right-[150px] w-[600px] h-[600px] bg-[#FFD21F]/8 rounded-full blur-[140px] opacity-50" />
      </div>

      {/* 1. Sleek Floating Header */}
      <header className="sticky top-0 z-50 px-4 sm:px-6 py-3 backdrop-blur-xl bg-[#0d0205]/85 border-b border-white/[0.08]">
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
                <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest text-[#FFD21F] px-2 py-0.5 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/25">
                  EST. 2007 • NAGPUR
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium hidden md:block">
                Nagpur’s Premier Academic Institute
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919595253778"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-zinc-200 hover:text-white px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] hover:border-white/20 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span>+91 95952 53778</span>
            </a>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-[#FFD21F] hover:bg-[#ffe053] text-black font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-[#FFD21F]/25 active:scale-95"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Claim Free 2-Day Pass</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* 2. Hero Section: High-Impact Editorial Swagger */}
        <section className="pt-6 sm:pt-16 pb-10 sm:pb-14 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            {/* Left: Bold Authority Typography */}
            <div className="lg:col-span-7 text-left space-y-4 sm:space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/30 backdrop-blur-md">
                <Flame className="w-3.5 h-3.5 text-[#FFD21F]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wide text-[#FFD21F] uppercase">
                  Admissions Open 2026–27 • Limited Cohorts
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] sm:leading-[1.04]">
                Where Nagpur’s <span className="text-[#FFD21F] drop-shadow-[0_4px_20px_rgba(255,210,31,0.25)]">Top 1%</span> Minds Are Built.
              </h1>

              {/* Sub-headline - Compact on mobile */}
              <p className="text-sm sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl">
                <span className="sm:hidden">
                  Nagpur’s benchmark for Board & Entrance ranks. Mentored personally by founder <strong className="text-white font-semibold">Pankaj Agrawal</strong> in focused cohorts with daily doubt solving.
                </span>
                <span className="hidden sm:inline">
                  Tired of massive 100-student coaching halls where nobody knows your name? Learn directly
                  from founder <strong className="text-white font-semibold">Pankaj Agrawal</strong> and senior
                  faculty with concept-first derivations, daily doubt clearance, and proven board & entrance ranks.
                </span>
              </p>

              {/* CTAs - Single Primary on Mobile */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FFD21F] hover:bg-[#ffe053] text-black font-extrabold text-sm sm:text-base px-6 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all duration-200 shadow-xl shadow-[#FFD21F]/25 hover:shadow-[#FFD21F]/40 active:scale-95 group"
                >
                  <span>Claim Free 2-Day Trial Pass</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="https://wa.me/919595253778?text=Hello%20Caliber’s%20Nova,%20I%20am%20interested%20in%20the%20Free%202-Day%20Classroom%20Trial%20Pass."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center justify-center gap-2.5 bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-full border border-white/[0.12] transition-all backdrop-blur-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Mentors</span>
                </a>
              </div>

              {/* Proof Strip - Compact on mobile */}
              <div className="pt-3 sm:pt-6 border-t border-white/[0.08] flex items-center justify-between sm:grid sm:grid-cols-3 gap-2 sm:gap-4">
                <div className="flex items-baseline gap-1.5 sm:block">
                  <div className="text-xl sm:text-3xl font-black text-white">19+ Yrs</div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 font-medium">Nagpur Legacy</div>
                </div>
                <div className="flex items-baseline gap-1.5 sm:block">
                  <div className="text-xl sm:text-3xl font-black text-[#FFD21F]">4.9 ★</div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 font-medium">900+ Reviews</div>
                </div>
                <div className="flex items-baseline gap-1.5 sm:block">
                  <div className="text-xl sm:text-3xl font-black text-white">15k+</div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 font-medium">Alumni</div>
                </div>
              </div>
            </div>

            {/* Right: Authentic GMB Photo Feature Card with Handwritten Annotation */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              {/* Handwritten Floating Annotation */}
              <div className="absolute -top-5 -right-1 sm:-top-6 sm:-right-6 z-20 pointer-events-none select-none text-right">
                <div className="handwriting text-xl sm:text-3xl text-zinc-100 font-bold rotate-[5deg] drop-shadow-lg">
                  Real Classrooms. <br />
                  <span className="text-[#FFD21F]">Real Ranks.</span>
                </div>
                <svg
                  className="w-10 h-7 sm:w-12 sm:h-9 text-[#FFD21F] ml-auto mr-3 sm:mr-4"
                  viewBox="0 0 60 45"
                  fill="none"
                >
                  <path
                    d="M45,8 C35,28 18,30 8,16"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <polyline
                    points="17,14 8,16 10,26"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Main Photo Card */}
              <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden border-2 border-white/[0.12] bg-[#1a050d] shadow-2xl shadow-black/90 group">
                <img
                  src="/assets/gmb_photo_1.jpg"
                  alt="Real Caliber's Nova Classroom with Students"
                  className="w-full h-[260px] sm:h-[460px] object-cover object-center filter contrast-105 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120306] via-transparent to-black/30 pointer-events-none" />

                {/* Overlaid Card Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#1c060f]/90 backdrop-blur-md border border-white/10 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD21F] px-2 py-0.5 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                      LIVE CLASSROOM • MAHAL
                    </span>
                    <span className="text-[11px] sm:text-xs text-zinc-400">जीत की ज़िद</span>
                  </div>
                  <p className="text-[11px] sm:text-sm text-zinc-200 font-medium">
                    Focused lecture under personal mentor oversight. No backbenchers, zero hesitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Continuous Auto-Scrolling Reel of Cards: Real Life @ Nova */}
        <section id="campus-archives" className="py-12 border-y border-white/[0.08] bg-[#130307]/70 backdrop-blur-md relative overflow-hidden group">
          {/* Header with Auto-Scroll Controls */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#FFD21F] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#FFD21F]">
                  LIFE @ CALIBER’S NOVA • REAL GMB ARCHIVES
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Campus Archives & Classroom Reality
              </h3>
            </div>

            {/* Interactive Auto-Scroll Controls Bar */}
            <div className="flex items-center gap-2.5 self-start sm:self-auto">
              {/* Live Status Pill */}
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold transition-all ${
                  isAutoScrolling
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-zinc-800/80 border-zinc-700 text-zinc-400'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isAutoScrolling ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-500'
                  }`}
                />
                <span className="text-[11px] uppercase tracking-wider">
                  {isAutoScrolling ? 'Auto-Scrolling' : 'Paused'}
                </span>
              </div>

              {/* Pause / Play Toggle Button */}
              <button
                type="button"
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-[#FFD21F] text-zinc-200 hover:text-black border border-white/10 hover:border-[#FFD21F] transition-all duration-200 active:scale-95 shadow-md"
                title={isAutoScrolling ? 'Pause Auto-Scroll' : 'Resume Auto-Scroll'}
              >
                {isAutoScrolling ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Play</span>
                  </>
                )}
              </button>

              {/* Speed Toggle */}
              <button
                type="button"
                onClick={() => setScrollSpeed(scrollSpeed === 'normal' ? 'fast' : 'normal')}
                className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 border border-white/10 transition-all active:scale-95"
                title="Toggle Speed"
              >
                <span>{scrollSpeed === 'normal' ? '1x' : '2x Speed'}</span>
              </button>

              {/* Direction Toggle */}
              <button
                type="button"
                onClick={() =>
                  setScrollDirection(scrollDirection === 'forward' ? 'reverse' : 'forward')
                }
                className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 border border-white/10 flex items-center justify-center transition-all active:scale-95"
                title="Reverse Direction"
              >
                <RotateCcw
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    scrollDirection === 'reverse' ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Two-Track Mathematically Seamless Infinite Auto-Scroll Reel */}
          <div className="flex overflow-hidden w-full mask-marquee-horizontal py-2 select-none">
            {/* Track 1 */}
            <div
              className={`flex shrink-0 gap-6 pr-6 ${getAnimationClass()} hover:[animation-play-state:paused]`}
            >
              {highlights.map((item, idx) => (
                <div
                  key={`track1-${item.id || idx}`}
                  className="w-[290px] sm:w-[350px] md:w-[380px] shrink-0 rounded-3xl overflow-hidden border border-white/[0.1] bg-gradient-to-b from-[#1f0510] to-[#120308] group/card relative shadow-2xl transition-all duration-300 hover:border-[#FFD21F]/70 hover:-translate-y-1 hover:shadow-[#FFD21F]/15"
                >
                  {/* Image Container */}
                  <div className="h-48 sm:h-56 overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120308] via-transparent to-black/30 pointer-events-none" />

                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider text-black bg-[#FFD21F] px-2.5 py-1 rounded-full shadow-lg">
                      {item.tag}
                    </span>

                    {/* Card Index Badge */}
                    <span className="absolute top-3 right-3 text-[10px] font-bold text-zinc-300 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 text-left flex flex-col justify-between h-[160px]">
                    <div>
                      <h4 className="font-extrabold text-white text-base sm:text-lg group-hover/card:text-[#FFD21F] transition-colors line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#FFD21F]/90 font-semibold mt-0.5">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed font-normal">
                        {item.detail}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-500 font-medium">
                      <span>Caliber’s Nova Archives</span>
                      <span className="text-[#FFD21F] font-bold flex items-center gap-1 group-hover/card:translate-x-1 transition-transform">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Track 2 (Clone for infinite seamless loop) */}
            <div
              className={`flex shrink-0 gap-6 pr-6 ${getAnimationClass()} hover:[animation-play-state:paused]`}
              aria-hidden="true"
            >
              {highlights.map((item, idx) => (
                <div
                  key={`track2-${item.id || idx}`}
                  className="w-[290px] sm:w-[350px] md:w-[380px] shrink-0 rounded-3xl overflow-hidden border border-white/[0.1] bg-gradient-to-b from-[#1f0510] to-[#120308] group/card relative shadow-2xl transition-all duration-300 hover:border-[#FFD21F]/70 hover:-translate-y-1 hover:shadow-[#FFD21F]/15"
                >
                  {/* Image Container */}
                  <div className="h-48 sm:h-56 overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120308] via-transparent to-black/30 pointer-events-none" />

                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider text-black bg-[#FFD21F] px-2.5 py-1 rounded-full shadow-lg">
                      {item.tag}
                    </span>

                    {/* Card Index Badge */}
                    <span className="absolute top-3 right-3 text-[10px] font-bold text-zinc-300 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 text-left flex flex-col justify-between h-[160px]">
                    <div>
                      <h4 className="font-extrabold text-white text-base sm:text-lg group-hover/card:text-[#FFD21F] transition-colors line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#FFD21F]/90 font-semibold mt-0.5">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed font-normal">
                        {item.detail}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-500 font-medium">
                      <span>Caliber’s Nova Archives</span>
                      <span className="text-[#FFD21F] font-bold flex items-center gap-1 group-hover/card:translate-x-1 transition-transform">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Helper caption */}
          <div className="text-center mt-3">
            <span className="text-[11px] text-zinc-500 font-medium flex items-center justify-center gap-1.5">
              <span>💡</span>
              <span>Cards auto-scroll continuously • Hover over any card to pause and inspect</span>
            </span>
          </div>
        </section>

        {/* 4. Real Nagpur Toppers Wall */}
        <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD21F]">
              AUTHENTIC NAGPUR MERIT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Proven Results. Real Rankers.
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Directly from our Natraj Tower building toppers billboard. Real Nagpur students whose academic
              paths were transformed at Nova.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {toppers.map((top, i) => (
              <div
                key={i}
                className="rounded-3xl p-6 bg-gradient-to-b from-[#220710] to-[#120306] border border-white/[0.08] hover:border-[#FFD21F]/40 transition-all flex flex-col justify-between text-left group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD21F] px-2.5 py-0.5 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                      {top.badge}
                    </span>
                    <Award className="w-4 h-4 text-[#FFD21F]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-[#FFD21F] transition-colors">
                    {top.score}
                  </div>
                  <div className="text-xs text-zinc-400 font-semibold mb-4">{top.stream}</div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal mb-4">
                    “{top.quote}”
                  </p>
                </div>

                <div className="border-t border-white/[0.06] pt-3">
                  <div className="font-bold text-white text-sm">{top.name}</div>
                  <div className="text-[11px] text-zinc-500">Caliber’s Nova Alum</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. The Core Distinction: Why Students Excel Here */}
        <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD21F]">
              THE PEDAGOGICAL DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Why We Refuse Mass Commercial Coaching.
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Every single lecture, doubt desk, and assessment at Caliber’s Nova is structured around
              student comprehension.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl p-7 bg-[#1c050d] border border-white/[0.08] text-left hover:border-[#FFD21F]/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD21F]/10 border border-[#FFD21F]/25 flex items-center justify-center mb-5">
                <Brain className="w-6 h-6 text-[#FFD21F]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">First Principles Mastery</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Formulae are derived from scratch on the board. When students understand the fundamental
                mechanics of a problem, exam anxiety disappears completely.
              </p>
            </div>

            <div className="rounded-3xl p-7 bg-[#1c050d] border border-white/[0.08] text-left hover:border-[#FFD21F]/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD21F]/10 border border-[#FFD21F]/25 flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-[#FFD21F]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zero Backbenchers</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Our disciplined, focused cohort architecture ensures continuous eye-contact, weekly notebook
                audits, and personal accountability for every individual.
              </p>
            </div>

            <div className="rounded-3xl p-7 bg-[#1c050d] border border-white/[0.08] text-left hover:border-[#FFD21F]/30 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD21F]/10 border border-[#FFD21F]/25 flex items-center justify-center mb-5">
                <Award className="w-6 h-6 text-[#FFD21F]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Daily Evening Doubt Desk</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Never take an unresolved question home. Our senior faculty is available every single evening
                for 1-on-1 question breakdown until concept clarity is 100%.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Programs of Distinction */}
        <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD21F]">
              ACADEMIC DIVISIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Programs Built for Ambition.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Program 1 */}
            <div className="rounded-3xl p-7 bg-[#17040a] border border-white/[0.08] flex flex-col justify-between text-left hover:border-[#FFD21F]/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD21F] px-3 py-1 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                    Classes 8th, 9th & 10th
                  </span>
                  <span className="text-xs text-zinc-400">CBSE & State Board</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Foundation Academy</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  Builds mathematical intuition and deep scientific inquiry. Eliminates exam dread early and
                  turns average students into confident 95%+ board toppers.
                </p>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-[#FFD21F] hover:text-black text-white font-semibold text-xs tracking-wide transition-all border border-white/[0.08] flex items-center justify-center gap-2"
              >
                <span>Claim Free Pass for Foundation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Program 2 */}
            <div className="rounded-3xl p-7 bg-[#17040a] border border-white/[0.08] flex flex-col justify-between text-left hover:border-[#FFD21F]/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD21F] px-3 py-1 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                    Classes 11th & 12th
                  </span>
                  <span className="text-xs text-zinc-400">PCM / PCB + CET / JEE</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Science & Competitive Wing</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  Rigorous dual preparation for Maharashtra State Board / CBSE combined with speed-accuracy
                  shortcuts for MHT-CET and JEE Main.
                </p>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-[#FFD21F] hover:text-black text-white font-semibold text-xs tracking-wide transition-all border border-white/[0.08] flex items-center justify-center gap-2"
              >
                <span>Claim Free Pass for Science</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Program 3 */}
            <div className="rounded-3xl p-7 bg-[#17040a] border border-white/[0.08] flex flex-col justify-between text-left hover:border-[#FFD21F]/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD21F] px-3 py-1 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                    Classes 11th & 12th
                  </span>
                  <span className="text-xs text-zinc-400">Accounts & Economics</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Commerce & Elite Accounts</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  Nagpur’s highest reputation for Accountancy, Economics, and Business Mathematics. Taught with
                  real balance-sheet clarity for guaranteed distinctions.
                </p>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-[#FFD21F] hover:text-black text-white font-semibold text-xs tracking-wide transition-all border border-white/[0.08] flex items-center justify-center gap-2"
              >
                <span>Claim Free Pass for Commerce</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Program 4 */}
            <div className="rounded-3xl p-7 bg-[#17040a] border border-white/[0.08] flex flex-col justify-between text-left hover:border-[#FFD21F]/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD21F] px-3 py-1 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                    Undergrad & Postgrad
                  </span>
                  <span className="text-xs text-zinc-400">Entrance Wing</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">CAT / MBA CET / Entrance</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  High-speed mental quantitative frameworks, logical reasoning, and verbal interpretation
                  engineered to crack top IIMs and premier B-schools.
                </p>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-[#FFD21F] hover:text-black text-white font-semibold text-xs tracking-wide transition-all border border-white/[0.08] flex items-center justify-center gap-2"
              >
                <span>Claim Free Pass for Entrance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* 7. The Golden VIP Admission Pass (Conversion Epicenter) */}
        <section id="claim-pass" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-24">
          <div className="relative rounded-[36px] bg-gradient-to-b from-[#2e0915] via-[#1a040b] to-[#0d0104] border-2 border-[#FFD21F]/40 p-6 sm:p-12 shadow-2xl shadow-black/90 overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute -top-28 -right-28 w-80 h-80 bg-[#FFD21F]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-28 -left-28 w-80 h-80 bg-[#FFD21F]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center max-w-xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/30 text-[#FFD21F] text-xs font-bold uppercase tracking-wider mb-4">
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Complimentary Academic Access</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Claim Your Free <br />
                  <span className="text-[#FFD21F] drop-shadow">2-Day Classroom Pass.</span>
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 mt-3.5 leading-relaxed">
                  Experience the rigor, personal attention, and clarity of Nagpur’s premier coaching institute
                  for 2 full days before making any financial commitment.
                </p>
              </div>

              {/* What You Receive */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-10 bg-black/50 rounded-2xl p-4 border border-white/[0.08]">
                <div className="flex items-start gap-2.5 text-left">
                  <Check className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">
                    <strong className="text-white block">2 Real Lectures</strong> Full cohort immersion
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-left">
                  <Check className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">
                    <strong className="text-white block">Diagnostic Report</strong> 1-on-1 concept analysis
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-left">
                  <Check className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">
                    <strong className="text-white block">Zero Risk</strong> 100% complimentary
                  </span>
                </div>
              </div>

              {isSuccess ? (
                <div className="text-center py-10 px-6 rounded-2xl bg-[#1d050c] border border-[#FFD21F]/40 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FFD21F]/20 text-[#FFD21F] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">VIP Classroom Pass Confirmed!</h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto">
                    Welcome aboard, <strong className="text-white">{studentName}</strong>. Our admissions team
                    is connecting with you on WhatsApp with batch timing details for {selectedCampus}.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/919595253778?text=${encodeURIComponent(
                        `Hi Caliber’s Nova! I just registered my 2-Day Pass for ${studentName} (${selectedGrade}) at ${selectedCampus}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-black font-extrabold text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp Directly</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handlePassSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Student or Parent Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Aryan Sharma"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] focus:border-[#FFD21F] focus:outline-none focus:ring-1 focus:ring-[#FFD21F] text-white text-sm placeholder:text-zinc-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        WhatsApp Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] focus:border-[#FFD21F] focus:outline-none focus:ring-1 focus:ring-[#FFD21F] text-white text-sm placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2.5">
                      Select Target Program *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {gradeOptions.map((opt) => (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => setSelectedGrade(opt.label)}
                          className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                            selectedGrade === opt.label
                              ? 'bg-[#FFD21F] text-black border-[#FFD21F] font-bold shadow-md'
                              : 'bg-black/40 text-zinc-300 border-white/[0.1] hover:border-white/20'
                          }`}
                        >
                          <div className="text-xs font-bold flex items-center justify-between">
                            <span>{opt.label}</span>
                            {selectedGrade === opt.label && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <span
                            className={`text-[11px] mt-1 ${
                              selectedGrade === opt.label ? 'text-black/80 font-medium' : 'text-zinc-500'
                            }`}
                          >
                            {opt.sub}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2.5">
                      Preferred Nagpur Campus *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Mahal Flagship Hub', 'Sadar Campus'].map((campus) => (
                        <button
                          key={campus}
                          type="button"
                          onClick={() => setSelectedCampus(campus)}
                          className={`py-3 px-4 rounded-xl border text-xs font-bold tracking-wide transition-all ${
                            selectedCampus === campus
                              ? 'bg-[#FFD21F] text-black border-[#FFD21F]'
                              : 'bg-black/40 text-zinc-300 border-white/[0.1] hover:border-white/20'
                          }`}
                        >
                          📍 {campus}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#FFD21F] via-[#FFE053] to-[#FFD21F] hover:brightness-105 text-black font-black text-sm sm:text-base tracking-wide transition-all shadow-xl shadow-[#FFD21F]/30 active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Reserving Your Seat...</span>
                    ) : (
                      <>
                        <Ticket className="w-4 h-4" />
                        <span>Confirm 2-Day Trial Pass Reservation</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-zinc-500 flex items-center justify-center gap-4 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                      Zero spam policy
                    </span>
                    <span>•</span>
                    <span>100% Free Trial</span>
                    <span>•</span>
                    <span>Direct WhatsApp confirmation</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* 8. Institutional Authority Featuring Official Logo */}
        <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
          <div className="rounded-3xl bg-gradient-to-r from-[#220710] to-[#120306] border border-[#FFD21F]/30 p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-[#170308] flex items-center justify-center p-7 border-2 border-[#FFD21F]/40 shadow-2xl shadow-black/90 group">
                <img
                  src="/assets/logo-white.png"
                  alt="Caliber's Nova Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(255,210,31,0.25)] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-4 text-left">
              <div className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#FFD21F] px-3 py-1 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                ACADEMIC LEADERSHIP
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Pankaj Agrawal & Academic Mentors
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                “When you enroll at Caliber’s Nova, you aren’t being handed over to an outsourced tutor.
                Founder Pankaj Agrawal personally oversees the academic curriculum, conducts weekly evaluations,
                and ensures every student achieves conceptual mastery.”
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-zinc-400">
                <div>
                  <span className="text-white font-bold block text-sm">19+ Years</span>
                  <span>Teaching Legacy</span>
                </div>
                <div>
                  <span className="text-white font-bold block text-sm">15,000+</span>
                  <span>Students Guided</span>
                </div>
                <div>
                  <span className="text-white font-bold block text-sm">Nagpur, MH</span>
                  <span>Two Campuses</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQs */}
        <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/[0.06]">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1.5">
              Everything you need to know before attending your 2-Day Trial Pass.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#17040a] border border-white/[0.08] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FFD21F] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/[0.04] pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 10. Nagpur Campuses */}
        <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD21F]">
              TWO CONVENIENT LOCATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5">
              Visit Our Nagpur Campuses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl p-6 bg-[#17040a] border border-white/[0.08] text-left">
              <div className="text-xs font-bold text-[#FFD21F] uppercase tracking-wider mb-1">
                FLAGSHIP HUB
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mahal Campus</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                Near Tilak Putla, Opp. Raymond Showroom, Mahal, Nagpur, Maharashtra 440032.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="tel:+919595253778"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/[0.08] hover:bg-white/[0.15] px-4 py-2 rounded-full transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#FFD21F]" />
                  <span>Call Mahal Desk</span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl p-6 bg-[#17040a] border border-white/[0.08] text-left">
              <div className="text-xs font-bold text-[#FFD21F] uppercase tracking-wider mb-1">
                CENTRAL NAGPUR
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sadar Campus</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                Opp. Haldiram’s / Katol Road, Sadar, Nagpur, Maharashtra 440001.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="tel:+919822464455"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/[0.08] hover:bg-white/[0.15] px-4 py-2 rounded-full transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#FFD21F]" />
                  <span>Call Sadar Desk</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 11. Minimalist Footer */}
      <footer className="py-8 px-4 border-t border-white/[0.06] text-center text-xs text-zinc-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Caliber’s Nova Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            {onNavigateHome && (
              <button onClick={onNavigateHome} className="hover:text-white transition-colors">
                Back to Website
              </button>
            )}
            <a href="tel:+919595253778" className="hover:text-white transition-colors">
              +91 95952 53778
            </a>
          </div>
        </div>
      </footer>

      {/* 12. Mobile Sticky Bottom Action Dock */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0d0205]/95 backdrop-blur-xl border-t border-white/[0.1] shadow-2xl">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="https://wa.me/919595253778?text=Hello%20Caliber’s%20Nova,%20I%20want%20to%20know%20about%20the%20Free%202-Day%20Trial%20Pass."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-black font-black text-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={scrollToForm}
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FFD21F] text-black font-black text-xs shadow-lg shadow-[#FFD21F]/25"
          >
            <Ticket className="w-4 h-4" />
            <span>Free 2-Day Pass</span>
          </button>
        </div>
      </div>
    </div>
  );
};
