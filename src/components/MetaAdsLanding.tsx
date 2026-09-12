import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Star,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Award,
  Ticket,
  Check,
  Users,
  Brain,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MetaAdsLandingProps {
  onNavigateHome?: () => void;
}

interface Testimonial {
  name: string;
  badge: string;
  achievement: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Satwik Deshmukh',
    badge: 'Class 10 CBSE Topper',
    achievement: '98.4% Aggregate (100 in Math)',
    quote:
      'Before Caliber’s Nova, I was memorizing textbook steps without really understanding the derivation. Joining in Class 9 changed my entire mental framework. The teachers explain until the fundamental logic is crystal clear. You simply cannot get this level of mentorship anywhere else in Nagpur.',
  },
  {
    name: 'Akash Verma',
    badge: 'Class 12 Commerce & Accounts',
    achievement: '96.2% Board Ranker • Foundation Cleared',
    quote:
      'Pankaj Sir and the senior faculty make even the most intricate accounts and economics principles intuitive. Because cohorts are kept focused and disciplined, every test paper is analyzed line-by-line with you. My conceptual confidence skyrocketed within the first two months.',
  },
  {
    name: 'Prachi Kulkarni',
    badge: 'Class 12 Science (PCM)',
    achievement: '95.8% Boards • 99+ Percentile CET',
    quote:
      'What sets Nova apart from massive 150-student commercial coaching halls is accountability. You are never an anonymous roll number here. The daily evening doubt desk and rigorous weekend testing culture are second to none in the city.',
  },
];

const faqItems = [
  {
    q: 'What exactly is the 2-Day Free Classroom Pass?',
    a: 'The 2-Day Pass gives you complete, unrestricted access to 2 live syllabus lectures with our regular batch. You experience our actual teaching methodology, participate in the classroom, meet the founders, and receive a complimentary 1-on-1 Academic Diagnostic Roadmap. There is zero financial commitment or obligation.',
  },
  {
    q: 'Why does Caliber’s Nova maintain focused, limited cohorts?',
    a: 'In massive 100+ student coaching halls, over 70% of students hesitate to ask doubts and quietly fall behind. We intentionally keep our cohorts small and focused so our founders can personally track every student’s homework, conceptual accuracy, and test progression every single week.',
  },
  {
    q: 'Who will actually be teaching my child?',
    a: 'Founder Pankaj Agrawal Sir and our senior academic faculty personally teach the batches. We do not outsource your child’s critical academic years to inexperienced junior faculty or part-time tutors.',
  },
  {
    q: 'Where are your campuses located in Nagpur?',
    a: 'We have two centrally accessible campuses in Nagpur: our Flagship Academic Hub at Mahal (Near Tilak Putla, Opp. Raymond Showroom) and our Central Campus at Sadar (Opp. Haldiram’s / Katol Road). Both campuses offer state-of-the-art air-conditioned lecture rooms and quiet self-study libraries.',
  },
];

export const MetaAdsLanding: React.FC<MetaAdsLandingProps> = ({ onNavigateHome }) => {
  // Form State
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('Class 8th–10th Foundation');
  const [selectedCampus, setSelectedCampus] = useState('Mahal Flagship Hub');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const gradeOptions = [
    { label: 'Class 8th–10th Foundation', sub: 'CBSE & State Board Excellence' },
    { label: 'Class 11th–12th Science', sub: 'Physics, Chem, Math/Bio + CET/JEE' },
    { label: 'Class 11th–12th Commerce', sub: 'Premier Accounts & Economics' },
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

      // Confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FFD21F', '#ffffff', '#e11d48'],
        });
      } catch (err) {
        console.error(err);
      }

      // WhatsApp redirection
      const msg = `Hello Caliber’s Nova! 👋\n\nI want to confirm my Free 2-Day Classroom Pass for:\n\n• Name: ${studentName.trim()}\n• Program: ${selectedGrade}\n• Campus: ${selectedCampus}\n• Contact: ${phone.trim()}\n\nPlease share the batch timing and diagnostic session slot.`;
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
    <div className="min-h-screen bg-[#070103] text-zinc-100 font-sans selection:bg-[#FFD21F] selection:text-black relative overflow-x-hidden">
      {/* Background Ambient Glows - Ultra-subtle Apple/Linear style */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#4a0a18]/25 to-transparent rounded-full blur-[140px] opacity-70" />
        <div className="absolute top-[30%] -left-[100px] w-[500px] h-[500px] bg-[#320811]/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-[65%] -right-[100px] w-[500px] h-[500px] bg-[#FFD21F]/5 rounded-full blur-[130px] opacity-40" />
      </div>

      {/* 1. Minimalist Floating Header */}
      <header className="sticky top-0 z-50 px-4 sm:px-6 pt-3 pb-3 backdrop-blur-xl bg-[#070103]/80 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD21F] to-[#E6B800] p-[1.5px] flex items-center justify-center shadow-lg shadow-[#FFD21F]/15">
              <div className="w-full h-full bg-[#120306] rounded-[10px] flex items-center justify-center p-1">
                <img src="/assets/logo-white.png" alt="Caliber's Nova Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-white text-base">
                  CALIBER’S <span className="text-[#FFD21F]">NOVA</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest text-[#FFD21F] px-2 py-0.5 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                  EST. 2007 • NAGPUR
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium hidden md:block">
                The Standard of Academic Excellence in Nagpur
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919595253778"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white px-3.5 py-2 rounded-full border border-white/[0.08] hover:border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span>+91 95952 53778</span>
            </a>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-[#FFD21F] hover:bg-[#ffe053] text-black font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-[#FFD21F]/20 active:scale-95"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Claim Free 2-Day Pass</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* 2. Hero Section: Linear / Apple Style Authority Statement */}
        <section className="pt-14 sm:pt-20 pb-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
          {/* Subtle Linear Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-8 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#FFD21F] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-zinc-300 uppercase">
              Admissions Open 2026–27 • Limited Cohort Admissions
            </span>
          </div>

          {/* Prestige Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto">
            The Standard of <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Academic Excellence
            </span>{' '}
            in <span className="text-[#FFD21F]">Nagpur.</span>
          </h1>

          {/* Refined Sub-headline */}
          <p className="mt-6 text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Where deep conceptual mastery replaces rote memorization. Mentored personally by founder{' '}
            <strong className="text-white font-semibold">Pankaj Agrawal</strong> &{' '}
            <strong className="text-white font-semibold">senior faculty</strong> with{' '}
            <span className="text-[#FFD21F] font-semibold">individualized mentor attention</span>.
          </p>

          {/* High-Impact Actions */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FFD21F] hover:bg-[#ffe053] text-black font-extrabold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-[#FFD21F]/25 hover:shadow-[#FFD21F]/40 active:scale-95 group"
            >
              <span>Experience Nagpur’s Best Classroom Free</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="https://wa.me/919595253778?text=Hello%20Caliber’s%20Nova,%20I%20would%20like%20to%20know%20more%20about%20admissions%20and%20batches."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-full border border-white/[0.12] transition-all duration-200 backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chat Directly with Mentors</span>
            </a>
          </div>

          {/* Trust Row */}
          <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">19+ Years</div>
              <div className="text-xs text-zinc-400 font-medium">Nagpur Academic Legacy (Est. 2007)</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-[#FFD21F] tracking-tight">Focused</div>
              <div className="text-xs text-zinc-400 font-medium">Personal Mentorship & Attention</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">100%</div>
              <div className="text-xs text-zinc-400 font-medium">Founders-Taught (Zero Outsourcing)</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-[#FFD21F] tracking-tight">4.9 ★</div>
              <div className="text-xs text-zinc-400 font-medium">900+ Verified Google Reviews</div>
            </div>
          </div>
        </section>

        {/* 3. The Distinction: Why Students Truly Get The Best Education Here */}
        <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD21F]">
              THE ARCHITECTURE OF MASTERY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2.5">
              Why Nagpur’s Most Ambitious Students Choose Nova.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-3.5">
              Mass coaching institutes have turned education into factory conveyor belts. At Caliber’s Nova,
              every single detail is engineered for intellectual transformation.
            </p>
          </div>

          {/* Linear Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Focused Learning Environment */}
            <div className="relative rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-[#18040a] via-[#100206] to-[#0a0104] border border-white/[0.08] hover:border-[#FFD21F]/30 transition-all duration-300 group overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD21F]/10 border border-[#FFD21F]/20 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#FFD21F]" />
              </div>
              <div className="text-xs font-bold text-[#FFD21F] uppercase tracking-wider mb-2">
                01 / INTELLECTUAL SANCTUARY
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                High-Attention Cohorts
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                In massive commercial coaching halls, over 70% of students sit silently, unable to voice doubts. We
                maintain focused, disciplined cohorts that guarantee continuous eye-contact, weekly notebook verification, and
                genuine 1-on-1 access to senior faculty.
              </p>
            </div>

            {/* Card 2: Concept-First Pedagogical Model */}
            <div className="relative rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-[#18040a] via-[#100206] to-[#0a0104] border border-white/[0.08] hover:border-[#FFD21F]/30 transition-all duration-300 group overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD21F]/10 border border-[#FFD21F]/20 flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-[#FFD21F]" />
              </div>
              <div className="text-xs font-bold text-[#FFD21F] uppercase tracking-wider mb-2">
                02 / FIRST PRINCIPLES
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Derivation Over Memorization
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Formulae are not handed out to be memorized—they are derived from scratch on the board.
                When students grasp <em className="text-zinc-200">why</em> a formula works, they can solve
                any unforeseen question in Boards, MHT-CET, JEE, or CAT with absolute composure.
              </p>
            </div>

            {/* Card 3: Founders-Taught */}
            <div className="relative rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-[#18040a] via-[#100206] to-[#0a0104] border border-white/[0.08] hover:border-[#FFD21F]/30 transition-all duration-300 group overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#FFD21F]/10 border border-[#FFD21F]/20 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-[#FFD21F]" />
              </div>
              <div className="text-xs font-bold text-[#FFD21F] uppercase tracking-wider mb-2">
                03 / SENIOR LEADERSHIP
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Mentored by the Founders
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                No inexperienced interns or rotating guest lecturers. Founder Pankaj Agrawal Sir and
                senior faculty bring 19+ years of pedagogical mastery directly to your child every single day,
                setting an uncompromising academic bar.
              </p>
            </div>
          </div>

          {/* Side-by-Side Comparison: Commercial Coaching vs Caliber's Nova */}
          <div className="mt-12 rounded-3xl bg-[#110307]/90 border border-white/[0.08] p-6 sm:p-10 backdrop-blur-md">
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-8">
              The Reality of Coaching in Nagpur: A Clear Distinction
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
              {/* Other Coaching */}
              <div className="space-y-4 pr-0 md:pr-6 pt-4 md:pt-0">
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Commercial Coaching Factories
                </div>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>100–150 students crammed into auditorium-style rooms</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Junior teachers hired on contract without proven pedagogy</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Doubts queued in crowded lobbies or left completely unanswered</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Heavy upfront fees with no trial of classroom quality</span>
                  </li>
                </ul>
              </div>

              {/* Caliber's Nova */}
              <div className="space-y-4 pl-0 md:pl-8 pt-6 md:pt-0">
                <div className="flex items-center gap-2 text-[#FFD21F] font-bold text-sm tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#FFD21F]" />
                  Caliber’s Nova Experience
                </div>
                <ul className="space-y-3 text-sm text-zinc-200">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                    <span>Focused, non-crowded cohorts—every student is in direct view of the faculty</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                    <span>100% core instruction by founder Pankaj Agrawal Sir & senior faculty</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                    <span>Daily evening 1-on-1 dedicated doubt resolution desk</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                    <span>Free 2-Day Classroom Pass to experience the excellence firsthand</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Academic Programs: Clean, Linear-Inspired Cards */}
        <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD21F]">
              ACADEMIC PATHWAYS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Programs Tailored for High Achievers.
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Rigorous, syllabus-aligned cohorts engineered for Nagpur’s board and entrance exams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Program 1: Foundation */}
            <div className="rounded-3xl p-7 bg-white/[0.02] border border-white/[0.08] hover:border-[#FFD21F]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD21F] px-3 py-1 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                    Classes 8th, 9th & 10th
                  </span>
                  <span className="text-xs text-zinc-400">CBSE & State Board</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Foundation Academy</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Builds rock-solid mathematical logic, scientific inquiry, and language skills before high school.
                  Transforms average students into confident 95%+ board toppers.
                </p>
                <div className="space-y-2 border-t border-white/[0.06] pt-4 mb-6 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD21F]" />
                    <span>Daily problem-solving drills & weekly topic tests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD21F]" />
                    <span>Individual focus on high-weightage chapters</span>
                  </div>
                </div>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.06] hover:bg-[#FFD21F] hover:text-black text-white font-semibold text-xs tracking-wide transition-all border border-white/[0.08]"
              >
                <span>Claim Trial Pass for Foundation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Program 2: Science 11th-12th */}
            <div className="rounded-3xl p-7 bg-white/[0.02] border border-white/[0.08] hover:border-[#FFD21F]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD21F] px-3 py-1 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                    Classes 11th & 12th
                  </span>
                  <span className="text-xs text-zinc-400">PCM / PCB</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Science & Competitive Wing</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Rigorous dual preparation for Maharashtra State Board / CBSE coupled with high-yield shortcut
                  methodologies for MHT-CET and JEE Main.
                </p>
                <div className="space-y-2 border-t border-white/[0.06] pt-4 mb-6 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD21F]" />
                    <span>Concept-first physics numericals and organic chemistry mechanisms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD21F]" />
                    <span>Time-management strategies under actual exam pressure</span>
                  </div>
                </div>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.06] hover:bg-[#FFD21F] hover:text-black text-white font-semibold text-xs tracking-wide transition-all border border-white/[0.08]"
              >
                <span>Claim Trial Pass for Science</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Program 3: Commerce & Accounts */}
            <div className="rounded-3xl p-7 bg-white/[0.02] border border-white/[0.08] hover:border-[#FFD21F]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD21F] px-3 py-1 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                    Classes 11th & 12th
                  </span>
                  <span className="text-xs text-zinc-400">Commerce & Finance</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Commerce & Elite Accounts</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Nagpur’s benchmark for Accountancy, Economics, and Business Mathematics. Taught with practical
                  balance-sheet intuition that guarantees board distinctions.
                </p>
                <div className="space-y-2 border-t border-white/[0.06] pt-4 mb-6 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD21F]" />
                    <span>Step-by-step account balance sheet precision</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD21F]" />
                    <span>Foundation preparation for CA, CS & IPMAT</span>
                  </div>
                </div>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.06] hover:bg-[#FFD21F] hover:text-black text-white font-semibold text-xs tracking-wide transition-all border border-white/[0.08]"
              >
                <span>Claim Trial Pass for Commerce</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Program 4: Competitive Entrance */}
            <div className="rounded-3xl p-7 bg-white/[0.02] border border-white/[0.08] hover:border-[#FFD21F]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFD21F] px-3 py-1 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/20">
                    Undergrad & Postgrad
                  </span>
                  <span className="text-xs text-zinc-400">Entrance Wing</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">CAT / MBA CET / Entrance</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  High-speed mental math, data interpretation frameworks, and critical verbal reasoning designed
                  to secure top percentiles for premier management institutes.
                </p>
                <div className="space-y-2 border-t border-white/[0.06] pt-4 mb-6 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD21F]" />
                    <span>Speed-accuracy optimization matrices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD21F]" />
                    <span>Full-length computer-based simulated test series</span>
                  </div>
                </div>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.06] hover:bg-[#FFD21F] hover:text-black text-white font-semibold text-xs tracking-wide transition-all border border-white/[0.08]"
              >
                <span>Claim Trial Pass for Entrance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* 5. Nagpur Results & Student Voices */}
        <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFD21F]">
              PROVEN RESULTS IN NAGPUR
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Authentic Student Transformations.
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Real rankers from Nagpur whose academic trajectories were redefined at Caliber’s Nova.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-3xl p-7 bg-[#120306]/90 border border-white/[0.08] hover:border-[#FFD21F]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#FFD21F] mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                    “{t.quote}”
                  </p>
                </div>
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="font-bold text-white text-base">{t.name}</div>
                  <div className="text-xs text-[#FFD21F] font-semibold">{t.badge}</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">{t.achievement}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. The Core Conversion Pass Card (Apple Style Luxury Pass) */}
        <section id="claim-pass" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-24">
          <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#22070f] via-[#140408] to-[#0b0104] border border-[#FFD21F]/30 p-6 sm:p-12 shadow-2xl shadow-black/90 overflow-hidden">
            {/* Ambient Gold Radial Flare */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#FFD21F]/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FFD21F]/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center max-w-xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFD21F]/10 border border-[#FFD21F]/30 text-[#FFD21F] text-xs font-bold uppercase tracking-wider mb-4">
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Complimentary Academic Access</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Claim Your Free <br />
                  <span className="text-[#FFD21F]">2-Day Classroom Pass.</span>
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 mt-3.5 leading-relaxed">
                  Experience the rigor, personal attention, and clarity of Nagpur’s premier coaching institute
                  for 2 full days before making any financial commitment.
                </p>
              </div>

              {/* What You Receive in the 2-Day Trial */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-10 bg-black/40 rounded-2xl p-4 border border-white/[0.06]">
                <div className="flex items-start gap-2.5 text-left">
                  <Check className="w-4 h-4 text-[#FFD21F] shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">
                    <strong className="text-white block">2 Real Lectures</strong> Sit in the live cohort
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
                    <strong className="text-white block">Zero Obligation</strong> 100% free trial
                  </span>
                </div>
              </div>

              {isSuccess ? (
                <div className="text-center py-10 px-6 rounded-2xl bg-[#1a050b] border border-[#FFD21F]/40 space-y-4">
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
                  {/* Name and Mobile Input Grid */}
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
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] focus:border-[#FFD21F] focus:outline-none focus:ring-1 focus:ring-[#FFD21F] text-white text-sm transition-colors placeholder:text-zinc-600"
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
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/[0.12] focus:border-[#FFD21F] focus:outline-none focus:ring-1 focus:ring-[#FFD21F] text-white text-sm transition-colors placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  {/* Course Selection */}
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

                  {/* Campus Selection */}
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

                  {/* Submit Button */}
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

        {/* 7. Institutional Authority & Leadership */}
        <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
          <div className="rounded-3xl bg-white/[0.02] border border-white/[0.08] p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-gradient-to-br from-[#240810] to-[#120306] flex items-center justify-center p-7 border-2 border-[#FFD21F]/40 shadow-2xl shadow-black/90 group">
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
                Founder Pankaj Agrawal personally guides the academic direction, reviews weekly assessments, and mentors every student
                until their true potential is fully unlocked.”
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

        {/* 8. FAQs: Crisp & Reassuring */}
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
                  className="rounded-2xl bg-white/[0.02] border border-white/[0.08] overflow-hidden transition-colors"
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

        {/* 9. Nagpur Campuses */}
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
            {/* Campus 1 */}
            <div className="rounded-3xl p-6 bg-white/[0.02] border border-white/[0.08] text-left">
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

            {/* Campus 2 */}
            <div className="rounded-3xl p-6 bg-white/[0.02] border border-white/[0.08] text-left">
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

      {/* 10. Minimalist Footer */}
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

      {/* 11. Mobile Sticky Bottom Action Dock */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#070103]/95 backdrop-blur-xl border-t border-white/[0.1] shadow-2xl">
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
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FFD21F] text-black font-black text-xs shadow-lg shadow-[#FFD21F]/20"
          >
            <Ticket className="w-4 h-4" />
            <span>Free 2-Day Pass</span>
          </button>
        </div>
      </div>
    </div>
  );
};
