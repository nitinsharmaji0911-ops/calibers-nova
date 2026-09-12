import React, { useState, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Star,
  Clock,
  MapPin,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Award,
  BookOpen,
  Send,
  Ticket,
  Check,
  Play,
  Quote,
  Flame,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface MetaAdsLandingProps {
  onNavigateHome?: () => void;
}

interface ReviewItem {
  id: string;
  name: string;
  batch: string;
  text: string;
}

const column1: ReviewItem[] = [
  {
    id: 'c1-1',
    name: 'Akash Verma',
    batch: 'Class 12 — Commerce & Entrance',
    text: 'Rahul Sir and Pankaj Sir at Caliber’s Nova made accounts and economics feel logical rather than stressful. My test scores jumped from 60s to 90s, and I scored 96.2% in my 12th boards while clearing my foundation entrance. The weekly test series and 1-on-1 doubt clearing genuinely changed everything for me. If you’re serious about your academics in Nagpur, this institute is unmatched!',
  },
  {
    id: 'c1-2',
    name: 'Rohan Agrawal',
    batch: 'Class 10 Foundation (CBSE)',
    text: 'Hello everyone, I am Rohan from Nagpur. I joined the foundation program at Caliber’s Nova when I was struggling with mathematics. The teachers here have endless patience—they will explain a concept four times until you understand it. The study material and question banks are top-tier. I scored a perfect 100 in Math in my 10th board exams, and I credit the entire team here for building my foundation.',
  },
  {
    id: 'c1-3',
    name: 'Harsh Vardhan',
    batch: 'Class 12 Science — Merit List',
    text: 'What sets Caliber’s Nova apart from huge corporate coaching centers in Nagpur is personal accountability. You aren’t just a roll number in a 200-student batch. In a batch of 25, the faculty notices when you are falling behind, checks your homework notes, and pushes you. That discipline helped me eliminate silly mistakes and rank among the top scorers in Nagpur.',
  },
];

const column2: ReviewItem[] = [
  {
    id: 'c2-1',
    name: 'Satwik Deshmukh',
    batch: 'Class 10 — Foundation Academy',
    text: 'Hey everyone, I am Satwik. Before joining Caliber’s Nova, I was just an average student memorizing textbook formulas with zero conceptual clarity. Joining the Foundation batch in Class 9 completely transformed the way I think. The faculty here doesn’t just lecture—they make sure every student in the room actually grasps the logic behind the problem. I topped my school in Class 10 with 98.4% in Science and Math. The mentors genuinely care about your growth.',
  },
  {
    id: 'c2-2',
    name: 'Ananya Sharma',
    batch: 'Class 12 Board Topper',
    text: 'Before joining Caliber’s Nova, I used to panic during exam seasons. The regular weekend assessments and full-syllabus mock tests simulated exam pressure so well that the final board exam felt like just another practice test. I scored 97% overall. The faculty’s dedication and the calm, focused atmosphere at the campus make all the difference.',
  },
  {
    id: 'c2-3',
    name: 'Padmesh Joshi',
    batch: 'Class 11–12 Commerce',
    text: 'Hey guys, I am Padmesh. I joined Caliber’s Nova in Class 11th for Commerce and State Board preparation. The teaching pedagogy here is so modern yet deeply grounded in conceptual clarity. The daily evening doubt desk meant I never went home with unsolved questions. Scored 94.8% in boards and secured admission to my dream college!',
  },
];

const column3: ReviewItem[] = [
  {
    id: 'c3-1',
    name: 'Prachi Kulkarni',
    batch: 'Class 12 Science & Competitive',
    text: 'Caliber’s Nova provided the exact balance of board exam precision and competitive exam depth that I needed. The teachers never rush through chapters; doubt-solving sessions go on until you’re 100% confident. That personal attention gave me the belief that I could excel. I scored 95.8% in boards and secured a top percentile in my entrance exams. It’s a decision you’ll look back on as the turning point of your student life.',
  },
  {
    id: 'c3-2',
    name: 'Tanvi Deshpande',
    batch: 'Class 10 Board High Scorer',
    text: 'Joining Caliber’s Nova at Mahal campus was the best decision for my high school years. Small batch sizes, interactive lectures, and constant encouragement from mentors made studying genuinely fun. I never felt hesitation in asking doubts. Scored 98% in Class 10th CBSE!',
  },
  {
    id: 'c3-3',
    name: 'Deepak Divakar',
    batch: 'Class 11–12 Science',
    text: 'Enrolling at Caliber’s Nova in Mahal was honestly the best decision of my academic life. In school, chemistry and physics felt like a chore, but here the concepts clicked instantly. The mock exams mirror actual board patterns, and the detailed feedback after every test shows you exactly where you lost marks and how to improve. I gained so much confidence in just 6 months.',
  },
];

const ReviewCard: React.FC<{ review: ReviewItem }> = ({ review }) => (
  <div className="rounded-2xl bg-gradient-to-b from-[#260910] via-[#1a050a] to-[#120306] border border-white/[0.09] hover:border-[#FFD21F]/40 p-4 sm:p-5 text-left transition-all duration-300 shadow-xl shadow-black/70 group flex flex-col justify-between">
    <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-normal mb-4 whitespace-pre-line">
      "{review.text}"
    </p>

    <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] gap-1">
      <div className="min-w-0 flex-1">
        <div className="text-xs sm:text-sm font-bold text-white leading-tight group-hover:text-[#FFD21F] transition-colors truncate">
          {review.name}
        </div>
        <div className="text-[10px] text-zinc-400 font-medium mt-0.5 truncate">
          {review.batch}
        </div>
      </div>
      <div className="shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[9.5px] font-mono text-zinc-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
        <span>Verified</span>
      </div>
    </div>
  </div>
);

export const MetaAdsLanding: React.FC<MetaAdsLandingProps> = ({ onNavigateHome }) => {
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('Class 10th Foundation (CBSE/State)');
  const [campus, setCampus] = useState('Mahal Flagship Campus');
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const passRef = useRef<HTMLDivElement>(null);

  const scrollToPass = (preselectCourse?: string) => {
    if (preselectCourse) {
      setCourse(preselectCourse);
    }
    if (passRef.current) {
      passRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FFD21F', '#FFC400', '#FFFFFF', '#9E1C38'],
      });
    } catch {
      // ignore
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Caliber's Nova! I want to claim my 2-Day VIP Academic Demo Pass.\nStudent: ${name}\nPhone: ${phone}\nGrade/Course: ${course}\nCampus: ${campus}`
  );

  const faqs = [
    {
      q: 'What is included in the Free 2-Day Demo Pass?',
      a: 'The Pass gives your child full, unrestricted access to 2 days of live classroom lectures, complete study material printouts, and a 1-on-1 Academic Diagnostic Session with Co-Founders Pankaj Agrawal or Rahul Rai.',
    },
    {
      q: 'Why do you strictly cap batches at 25 students?',
      a: 'Because learning is personal. In big coaching halls with 100+ students, 80% of children never ask doubts and fall behind. In 25-student batches, the teacher maintains eye contact with every student, monitors classroom work, and guarantees mastery.',
    },
    {
      q: 'Who will be teaching my child?',
      a: 'Your child is mentored directly by our senior leadership: Pankaj Agrawal & Rahul Rai, who bring over 19+ years of classroom teaching excellence in Nagpur. We never outsource core subjects to rookie trainee tutors.',
    },
    {
      q: 'Where are the two Nagpur campuses located?',
      a: 'Our Central Flagship Campus is located at 2nd Floor, Natraj Tower, Zenda Chowk, Mahal (Nagpur - 440032). We also operate our Sadar Campus for students residing across North and Central Nagpur.',
    },
    {
      q: 'How do you keep parents updated on student progress?',
      a: 'We conduct mandatory weekly board-pattern assessments. Evaluated answer sheets with constructive margin notes are returned to students, and parent updates are dispatched regularly along with 1-on-1 mentor calls.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#140407] text-[#F5F3ED] selection:bg-[#FFD21F] selection:text-black antialiased relative pb-20 sm:pb-8">
      
      {/* 1. FLOATING BRAND NAVBAR */}
      <header className="fixed top-2 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
        <nav className="w-full pointer-events-auto bg-[#180409]/90 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl shadow-black/80">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center p-0.5 border border-white/20">
              <img
                src="/assets/logo.png"
                alt="Caliber's Nova Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <div className="text-white font-black text-xs sm:text-sm tracking-tight leading-tight whitespace-nowrap">
                CALIBER’S <span className="text-[#FFD21F]">NOVA</span>
              </div>
              <div className="text-[9px] uppercase tracking-widest text-zinc-400 font-semibold whitespace-nowrap hidden sm:block">
                Admissions 2026–27 • Nagpur
              </div>
            </div>
          </div>

          {/* Center Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-300 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Admissions Open: Classes 8th–12th, CET/JEE & CAT</span>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="hidden lg:inline-flex text-xs font-semibold text-zinc-400 hover:text-white transition-colors mr-1"
              >
                Website Home
              </button>
            )}

            <a
              href="tel:+919595253778"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-xs font-bold text-white border border-white/15 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
              <span>+91 95952 53778</span>
            </a>

            <button
              onClick={() => scrollToPass()}
              className="inline-flex items-center gap-1.5 bg-[#FFD21F] hover:bg-[#FFC400] text-black font-extrabold text-xs uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all shadow-md shadow-[#FFD21F]/20 active:scale-95"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Claim VIP Pass</span>
            </button>
          </div>

        </nav>
      </header>

      {/* 2. MAGAZINE EDITORIAL HERO CONTAINER */}
      <section className="pt-20 sm:pt-24 pb-4 sm:pb-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#2e0b16] via-[#1f060d] to-[#140407] border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/80 w-full">
          
          {/* Subtle Golden Glow behind the student */}
          <div className="absolute top-1/4 right-0 sm:right-10 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-[#FFD21F]/15 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#FFC400]/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Hero Content Grid */}
          <div className="relative z-10 px-4 sm:px-8 lg:px-12 pt-6 sm:pt-10 pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 lg:gap-8">
              
              {/* Left Column: Typography & CTAs */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-4 sm:space-y-6 z-20 max-w-2xl pb-4 lg:pb-16">
                
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD21F]/15 border border-[#FFD21F]/30 w-fit">
                  <Flame className="w-3.5 h-3.5 text-[#FFD21F] fill-[#FFD21F]" />
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#FFD21F]">
                    NAGPUR’S #1 ACADEMIC MENTORSHIP • 19+ YEARS LEGACY
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-[38px] sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.04]">
                  Better Concepts. <br />
                  Better Students. <br />
                  <span className="text-[#FFD21F]">Brighter Ranks.</span>
                </h1>

                {/* Supporting Text */}
                <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-lg">
                  Stop struggling in crowded coaching halls. At Caliber’s Nova, our founders personally mentor students in 
                  <strong className="text-white"> 25-student small batches</strong>, ensuring crystal-clear concept mastery, daily doubt solving, and proven board & entrance ranks.
                </p>

                {/* Dual Action CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full sm:w-auto">
                  <button
                    onClick={() => scrollToPass()}
                    className="group inline-flex items-center justify-center gap-2 bg-[#FFD21F] hover:bg-[#FFC400] text-black font-extrabold text-sm px-7 py-4 rounded-full transition-all duration-200 transform active:scale-98 shadow-xl shadow-[#FFD21F]/20 text-center"
                  >
                    <span>Claim Free 2-Day VIP Pass</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <a
                    href="https://wa.me/919595253778?text=Hello%20Caliber%27s%20Nova%2C%20I%20want%20to%20know%20about%20admissions%20and%20claim%20the%20Free%20Demo%20Class."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm px-6 py-4 rounded-full transition-all duration-200 shadow-md text-center"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>WhatsApp Mentors</span>
                  </a>
                </div>

                {/* Quick Trust Badges Strip */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-semibold text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-[#FFD21F] fill-[#FFD21F]" />
                    <span>4.9★ on Google (900+ Reviews)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD21F]" />
                    <span>Strictly 25 Students per Batch</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#FFD21F]" />
                    <span>Mahal & Sadar, Nagpur</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Prominent Large Student Model */}
              <div className="lg:col-span-5 relative mt-4 sm:mt-0 flex items-end justify-between lg:justify-end w-full min-h-[310px] sm:min-h-[420px] lg:min-h-[520px]">
                
                {/* Handwritten Annotation: "Same Students. Bigger Possibilities." */}
                <div className="flex-1 lg:flex-initial lg:absolute lg:left-0 xl:-left-10 lg:bottom-48 z-30 pointer-events-none select-none text-left pb-6 lg:pb-0 pl-1 sm:pl-2 lg:pl-0">
                  <div className="handwriting text-2xl sm:text-3xl lg:text-4xl text-zinc-100 font-bold leading-tight rotate-[-4deg] drop-shadow-lg">
                    Same <br />
                    Students. <br />
                    <span className="text-[#FFD21F]">Bigger</span> <br />
                    Possibilities.
                  </div>
                  {/* Curved yellow arrow pointing toward student */}
                  <svg
                    className="w-12 h-9 sm:w-16 sm:h-12 text-[#FFD21F] mt-1 ml-2"
                    viewBox="0 0 60 45"
                    fill="none"
                  >
                    <path
                      d="M8,8 C18,28 35,30 45,16"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <polyline
                      points="36,14 45,16 43,26"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* The Student Image - Prominent, Large, Commanding */}
                <div className="flex-1 lg:flex-initial relative z-20 flex justify-end items-end w-full lg:w-auto">
                  <img
                    src="/assets/hero-student.png"
                    alt="Caliber's Nova student"
                    className="h-[310px] sm:h-[430px] lg:h-[530px] xl:h-[590px] w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] filter contrast-105"
                    loading="eager"
                  />
                </div>

              </div>

            </div>
          </div>

          {/* Integrated Stats Strip right below hero model */}
          <div className="border-t border-white/[0.08] bg-[#1c060d]/95 backdrop-blur-md px-2 sm:px-8 py-3.5 sm:py-5 relative z-20">
            <div className="grid grid-cols-3 divide-x divide-white/[0.08] text-center">
              
              <div className="flex flex-col items-center justify-center px-1">
                <span className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  2007
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-0.5">
                  Nagpur Legacy
                </span>
              </div>

              <div className="flex flex-col items-center justify-center px-1">
                <span className="text-xl sm:text-3xl lg:text-4xl font-black text-[#FFD21F] tracking-tight">
                  19+
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-0.5">
                  Years Mentoring
                </span>
              </div>

              <div className="flex flex-col items-center justify-center px-1">
                <span className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  25 Max
                </span>
                <span className="text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-0.5 whitespace-nowrap">
                  Students / Batch
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. THE "EXCLUSIVE ACADEMIC VIP PASS" (HIGH-CONVERTING INTERACTIVE LEAD CARD) */}
      <section className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={passRef}>
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#1d060b] border-2 border-[#FFD21F]/30 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD21F]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Pass Context & Live Pass Graphic */}
            <div className="lg:col-span-5 text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD21F]/15 border border-[#FFD21F]/30 text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#FFD21F]">
                <Ticket className="w-3.5 h-3.5" />
                <span>OFFICIAL ADMISSION PASS • CYCLE 2026–27</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Claim Your Free <br />
                <span className="text-[#FFD21F]">2-Day Academic Pass.</span>
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Experience our disciplined, concept-first classroom without any financial commitment. 
                Attend 2 days of real lectures and receive an individual diagnostic roadmap from senior faculty.
              </p>

              {/* Visual VIP Ticket Preview */}
              <div className="relative rounded-2xl bg-[#280a12] border border-[#FFD21F]/40 p-4 sm:p-5 shadow-xl text-left overflow-hidden mt-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFD21F] animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-wider text-white">
                      CALIBER’S NOVA VIP PASS
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">NO. NV-2026</span>
                </div>

                <div className="py-3 space-y-1.5">
                  <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">
                    PASS HOLDER
                  </div>
                  <div className="text-base sm:text-lg font-black text-[#FFD21F] truncate">
                    {name.trim() || 'YOUR NAME HERE'}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[11px]">
                  <div>
                    <span className="text-zinc-500 block text-[9px] uppercase font-bold">PROGRAM</span>
                    <span className="text-white font-bold truncate block">{course.split(' ')[0]} {course.split(' ')[1] || ''}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[9px] uppercase font-bold">CAMPUS</span>
                    <span className="text-white font-bold truncate block">{campus.includes('Mahal') ? 'Mahal Hub' : 'Sadar Campus'}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: The Interactive Pass Claim Form */}
            <div className="lg:col-span-7 bg-[#280a12] rounded-3xl p-6 sm:p-8 border border-white/10 text-left shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Step 1 of 1: Fill Pass Details
                    </span>
                    <span className="text-[11px] font-bold text-[#FFD21F] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 4 Seats Left
                    </span>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Student or Parent Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aryan Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-[#1d060b] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FFD21F] focus:ring-1 focus:ring-[#FFD21F] transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#1d060b] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FFD21F] focus:ring-1 focus:ring-[#FFD21F] transition-all"
                    />
                  </div>

                  {/* Grade / Course Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Target Course / Grade *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Class 10th Foundation (CBSE/State)',
                        'Class 11th–12th Science (Board + JEE/CET)',
                        'Class 11th–12th Commerce & Accounts',
                        'CAT / MBA CET / Entrance Prep',
                      ].map((item) => {
                        const isSelected = course === item;
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setCourse(item)}
                            className={`p-2.5 rounded-xl text-xs font-bold text-left border transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#FFD21F] text-black border-[#FFD21F]'
                                : 'bg-[#1d060b] text-zinc-300 border-white/10 hover:border-white/20'
                            }`}
                          >
                            <span className="truncate">{item}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 shrink-0 stroke-[3]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Campus Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Select Campus *
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setCampus('Mahal Flagship Campus')}
                        className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          campus.includes('Mahal')
                            ? 'bg-[#FFD21F] text-black border-[#FFD21F]'
                            : 'bg-[#1d060b] text-zinc-300 border-white/10 hover:border-white/20'
                        }`}
                      >
                        📍 Mahal Flagship Hub
                      </button>

                      <button
                        type="button"
                        onClick={() => setCampus('Sadar Campus')}
                        className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          campus.includes('Sadar')
                            ? 'bg-[#FFD21F] text-black border-[#FFD21F]'
                            : 'bg-[#1d060b] text-zinc-300 border-white/10 hover:border-white/20'
                        }`}
                      >
                        📍 Sadar Campus
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#FFD21F] hover:bg-[#FFC400] text-black font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-[#FFD21F]/20 transition-all duration-200 transform active:scale-98 flex items-center justify-center gap-2"
                    >
                      <Ticket className="w-4 h-4" />
                      <span>Confirm & Claim VIP Demo Pass</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-400 text-center pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Zero spam guarantee • 100% Free • Direct WhatsApp verification</span>
                  </div>

                </form>
              ) : (
                /* Ticket Confirmation Card */
                <div className="text-center py-6 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#FFD21F]/20 text-[#FFD21F] flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    VIP Demo Pass Reserved!
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Congratulations, <strong className="text-white">{name}</strong>! Your seat has been reserved for{' '}
                    <strong className="text-[#FFD21F]">{course}</strong> at our <strong className="text-white">{campus}</strong>. 
                    Our academic coordinator will connect with you on <strong className="text-white">{phone}</strong>.
                  </p>

                  <div className="pt-4 flex flex-col gap-2.5 max-w-sm mx-auto">
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
                      Issue Another Pass
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 4. EDITORIAL BENTO GRID: CHOOSE YOUR PATHWAY */}
      <section className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FFD21F]">
            YOUR NEXT CHAPTER
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mt-1.5">
            Academic Programs <br />
            <span className="text-[#FFD21F]">Built for Rankers.</span>
          </h2>
        </div>

        {/* 4-Card Visual Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          
          {/* Program 1 */}
          <div
            onClick={() => scrollToPass('Class 10th Foundation (CBSE/State)')}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-[#24080f] border border-white/[0.08] hover:border-[#FFD21F]/50 transition-all duration-300 flex flex-col justify-between relative aspect-[3/4] shadow-lg"
          >
            <img
              src="/assets/student-foundation.jpg"
              alt="Foundation classes"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-[#140407]/40 to-transparent" />

            <div className="relative z-10 p-3.5 sm:p-5 mt-auto flex items-end justify-between w-full">
              <div>
                <div className="text-xs sm:text-base font-extrabold text-white leading-tight">
                  Foundation
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-300 font-medium mt-0.5">
                  8th – 10th (CBSE & State)
                </div>
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-[#FFD21F] text-white group-hover:text-black flex items-center justify-center transition-colors shrink-0 ml-2">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>

          {/* Program 2 */}
          <div
            onClick={() => scrollToPass('Class 11th–12th Science (Board + JEE/CET)')}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-[#24080f] border border-white/[0.08] hover:border-[#FFD21F]/50 transition-all duration-300 flex flex-col justify-between relative aspect-[3/4] shadow-lg"
          >
            <img
              src="/assets/student-science.jpg"
              alt="Science classes"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-[#140407]/40 to-transparent" />

            <div className="relative z-10 p-3.5 sm:p-5 mt-auto flex items-end justify-between w-full">
              <div>
                <div className="text-xs sm:text-base font-extrabold text-white leading-tight">
                  Science (PCM/PCB)
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-300 font-medium mt-0.5">
                  11th – 12th + JEE/CET
                </div>
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-[#FFD21F] text-white group-hover:text-black flex items-center justify-center transition-colors shrink-0 ml-2">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>

          {/* Program 3 */}
          <div
            onClick={() => scrollToPass('Class 11th–12th Commerce & Accounts')}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-[#24080f] border border-white/[0.08] hover:border-[#FFD21F]/50 transition-all duration-300 flex flex-col justify-between relative aspect-[3/4] shadow-lg"
          >
            <img
              src="/assets/student-writing.jpg"
              alt="Commerce classes"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-[#140407]/40 to-transparent" />

            <div className="relative z-10 p-3.5 sm:p-5 mt-auto flex items-end justify-between w-full">
              <div>
                <div className="text-xs sm:text-base font-extrabold text-white leading-tight">
                  Commerce & Accounts
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-300 font-medium mt-0.5">
                  11th – 12th Nagpur Best
                </div>
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-[#FFD21F] text-white group-hover:text-black flex items-center justify-center transition-colors shrink-0 ml-2">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>

          {/* Program 4 */}
          <div
            onClick={() => scrollToPass('CAT / MBA CET / Entrance Prep')}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-[#24080f] border border-white/[0.08] hover:border-[#FFD21F]/50 transition-all duration-300 flex flex-col justify-between relative aspect-[3/4] shadow-lg"
          >
            <img
              src="/assets/student-grad.jpg"
              alt="Graduation & Entrance"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140407] via-[#140407]/40 to-transparent" />

            <div className="relative z-10 p-3.5 sm:p-5 mt-auto flex items-end justify-between w-full">
              <div>
                <div className="text-xs sm:text-base font-extrabold text-white leading-tight">
                  Entrance & Degree
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-300 font-medium mt-0.5">
                  CAT • CET • B.Com • BBA
                </div>
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-[#FFD21F] text-white group-hover:text-black flex items-center justify-center transition-colors shrink-0 ml-2">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>

        </div>

        {/* Bento Row: Yellow Card + Highlights Marquee */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
          
          {/* Yellow Bento Card: "MORE THAN CLASSES: A Brighter You." */}
          <div
            onClick={() => scrollToPass()}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl bg-[#FFD21F] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 transform active:scale-98 shadow-xl shadow-[#FFD21F]/20 text-black text-left min-h-[180px] sm:min-h-[220px]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-black/80">
                MORE THAN CLASSES
              </span>
              <Sparkles className="w-5 h-5 text-black" />
            </div>

            <div className="my-4">
              <h3 className="text-3xl sm:text-5xl font-black text-black leading-none">
                A Brighter <br />
                You.
              </h3>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider">
                Claim Demo Pass →
              </span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-black/30 flex items-center justify-center group-hover:bg-black group-hover:text-[#FFD21F] transition-colors">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>

          {/* Caliber's Nova Event Highlights Card with Infinite Horizontal Reel */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#1d060b] p-4 sm:p-5 flex flex-col justify-between shadow-xl min-h-[220px] sm:min-h-[260px] group text-left">
            
            <div className="flex items-center justify-between mb-2 sm:mb-3 z-10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD21F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD21F]"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#FFD21F]">
                  Life @ Nova • Events & Highlights
                </span>
              </div>
              <span className="text-[10px] text-zinc-500 font-medium hidden sm:inline">
                Auto-scrolls • Real GMB photos
              </span>
            </div>

            {/* Horizontal Scrolling Reel */}
            <div className="relative w-full overflow-hidden mask-marquee-horizontal py-1">
              <div className="flex gap-3 w-max animate-marquee-left pause-hover">
                {[
                  {
                    id: 'h-vyaapar',
                    tag: 'MBA SUMMIT',
                    title: 'Vyaapar: The Big MBA Summit',
                    subtitle: "Caliber's Nova presents Nagpur's premier business event",
                    image: '/assets/gmb_event_vyaapar.jpg',
                  },
                  {
                    id: 'h-gathering',
                    tag: 'ANNUAL MEET',
                    title: 'Nova Student Meet & Socials',
                    subtitle: 'Student community, peer networks & celebrations',
                    image: '/assets/gmb_photo_3.jpg',
                  },
                  {
                    id: 'h-lecture',
                    tag: 'LIVE LECTURE',
                    title: 'Commerce & Accounts Mastery',
                    subtitle: 'In-depth interactive whiteboard sessions by senior faculty',
                    image: '/assets/gmb_photo_4.jpg',
                  },
                  {
                    id: 'h-study',
                    tag: 'DOUBT SESSIONS',
                    title: 'Classroom Doubt-Solving',
                    subtitle: 'Focused self-study under the "जीत की ज़िद" philosophy',
                    image: '/assets/gmb_photo_1.jpg',
                  },
                  {
                    id: 'h-campus',
                    tag: 'CENTRAL CAMPUS',
                    title: 'Natraj Tower, Mahal Hub',
                    subtitle: 'Flagship academic center at Zenda Square, Nagpur',
                    image: '/assets/gmb_photo_2.jpg',
                  },
                  {
                    id: 'h-vyaapar-2',
                    tag: 'MBA SUMMIT',
                    title: 'Vyaapar: The Big MBA Summit',
                    subtitle: "Caliber's Nova presents Nagpur's premier business event",
                    image: '/assets/gmb_event_vyaapar.jpg',
                  },
                  {
                    id: 'h-gathering-2',
                    tag: 'ANNUAL MEET',
                    title: 'Nova Student Meet & Socials',
                    subtitle: 'Student community, peer networks & celebrations',
                    image: '/assets/gmb_photo_3.jpg',
                  },
                ].map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    onClick={() => scrollToPass()}
                    className="cursor-pointer relative w-48 sm:w-56 h-36 sm:h-40 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shrink-0 group/item bg-[#24080f] transition-all duration-300 hover:border-[#FFD21F]/40 hover:scale-[1.02]"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140407]/95 via-[#140407]/40 to-transparent" />
                    
                    <div className="absolute inset-0 p-3 flex flex-col justify-between text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#FFD21F] text-black shadow-sm">
                          {item.tag}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-white leading-snug line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-zinc-300 line-clamp-1 mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[11px] text-zinc-400">
              <span>Moments from Caliber's Nova GMB</span>
              <button
                onClick={() => scrollToPass()}
                className="text-[#FFD21F] hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>Join Next Batch</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 5. THE 25-STUDENT BATCH ADVANTAGE */}
      <section className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#1d060b] border border-white/[0.08] p-5 sm:p-10 lg:p-12 text-left">
          
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <div className="text-[10px] sm:text-xs font-semibold text-zinc-400 mb-1">
                The Caliber's Nova Advantage
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Built for <br />
                What's <span className="text-[#FFD21F]">Next.</span>
              </h2>
            </div>

            <button
              onClick={() => scrollToPass()}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-white/5 hover:bg-[#FFD21F] text-white hover:text-black flex items-center justify-center transition-all duration-300"
              aria-label="Claim Pass"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#280a12] border border-white/[0.06] hover:border-[#FFD21F]/30 transition-all duration-200 flex flex-col justify-between aspect-[4/3] sm:aspect-auto">
              <div className="w-8 h-8 rounded-lg bg-[#FFD21F]/15 flex items-center justify-center text-[#FFD21F] mb-3">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-base font-bold text-white leading-snug">
                  Founders Personally Teach
                </h3>
                <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 hidden sm:block">
                  Pankaj Agrawal & Rahul Rai personally guide your concepts.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#280a12] border border-white/[0.06] hover:border-[#FFD21F]/30 transition-all duration-200 flex flex-col justify-between aspect-[4/3] sm:aspect-auto">
              <div className="w-8 h-8 rounded-lg bg-[#FFD21F]/15 flex items-center justify-center text-[#FFD21F] mb-3">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-base font-bold text-white leading-snug">
                  Concept-First Learning
                </h3>
                <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 hidden sm:block">
                  First-principles intuition instead of mindless formula memorization.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#280a12] border border-white/[0.06] hover:border-[#FFD21F]/30 transition-all duration-200 flex flex-col justify-between aspect-[4/3] sm:aspect-auto">
              <div className="w-8 h-8 rounded-lg bg-[#FFD21F]/15 flex items-center justify-center text-[#FFD21F] mb-3">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-base font-bold text-white leading-snug">
                  Strictly 25 Students
                </h3>
                <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 hidden sm:block">
                  Every doubt resolved every day. No student is left behind.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#280a12] border border-white/[0.06] hover:border-[#FFD21F]/30 transition-all duration-200 flex flex-col justify-between aspect-[4/3] sm:aspect-auto">
              <div className="w-8 h-8 rounded-lg bg-[#FFD21F]/15 flex items-center justify-center text-[#FFD21F] mb-3">
                <Star className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-base font-bold text-white leading-snug">
                  Weekly Board Tests
                </h3>
                <p className="text-[10px] sm:text-xs text-zinc-400 mt-1 hidden sm:block">
                  Detailed evaluated papers and parent performance reports.
                </p>
              </div>
            </div>
          </div>

          {/* Photographic Card with Handwritten Annotation */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] aspect-[4/3] sm:aspect-[16/9] group shadow-xl mb-4 sm:mb-6">
            <img
              src="/assets/student-writing.jpg"
              alt="Student studying with focus"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140407]/85 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-[#1c060e]/90 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl border border-white/15 text-left shadow-xl max-w-[140px] sm:max-w-none">
              <span className="handwriting text-base sm:text-2xl font-bold text-zinc-200 block leading-tight">
                Good Concepts. <br />
                <span className="text-[#FFD21F]">Brighter Futures.</span>
              </span>
            </div>
          </div>

          {/* Mini CTA Card */}
          <div
            onClick={() => scrollToPass()}
            className="group cursor-pointer rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#300e18] to-[#1c060e] border border-white/10 p-5 sm:p-6 flex items-center justify-between transition-all hover:border-[#FFD21F]/40 active:scale-98"
          >
            <div>
              <div className="text-base sm:text-2xl font-extrabold text-white">
                Your Next Step
              </div>
              <div className="text-base sm:text-2xl font-extrabold text-[#FFD21F]">
                Starts Here.
              </div>
            </div>

            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFD21F] text-black flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md shadow-[#FFD21F]/20">
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>

        </div>
      </section>

      {/* 6. WALL OF SUCCESS: INFINITE REVIEW MARQUEE */}
      <section className="py-10 sm:py-16 px-2.5 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FFD21F] mb-2.5">
            WALL OF LOVE • STUDENT & PARENT STORIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            More Success <span className="text-[#FFD21F]">Stories.</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-400 mt-2.5 max-w-lg mx-auto leading-relaxed">
            Real experiences from students whose academic journeys, concepts, and results were built at Caliber’s Nova.
          </p>
        </div>

        <div className="relative h-[560px] sm:h-[650px] overflow-hidden mask-marquee-vertical">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#140407] via-[#140407]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#140407] via-[#140407]/80 to-transparent z-20" />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 h-full items-start">
            <div className="animate-marquee-up-slow pause-hover flex flex-col gap-2.5 sm:gap-4">
              {[...column1, ...column1].map((review, idx) => (
                <ReviewCard key={`col1-${review.id}-${idx}`} review={review} />
              ))}
            </div>

            <div className="animate-marquee-down-slow pause-hover flex flex-col gap-2.5 sm:gap-4">
              {[...column2, ...column2].map((review, idx) => (
                <ReviewCard key={`col2-${review.id}-${idx}`} review={review} />
              ))}
            </div>

            <div className="animate-marquee-up-fast pause-hover hidden lg:flex flex-col gap-4">
              {[...column3, ...column3].map((review, idx) => (
                <ReviewCard key={`col3-${review.id}-${idx}`} review={review} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEET THE MENTORS */}
      <section className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#1d060b] border border-white/[0.08] p-5 sm:p-10 lg:p-12 text-left">
          
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <div className="text-[10px] sm:text-xs font-semibold text-zinc-400 mb-1">
                Our Senior Leadership
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                More Than <br />
                <span className="text-[#FFD21F]">Teachers.</span>
              </h2>
            </div>

            <button
              onClick={() => scrollToPass()}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-white/5 hover:bg-[#FFD21F] text-white hover:text-black flex items-center justify-center transition-all duration-300"
              aria-label="Claim Pass"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] aspect-[4/3] sm:aspect-[16/9] group shadow-2xl mb-4 sm:mb-6">
            <img
              src="/assets/faculty.jpg"
              alt="Faculty mentor teaching"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140407]/85 via-transparent to-transparent pointer-events-none" />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white ml-1" />
              </div>
            </div>

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#1c060e]/85 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15 text-left shadow-xl">
              <span className="handwriting text-xl sm:text-2xl font-bold text-zinc-200 block leading-tight">
                Guiding <br />
                What's <span className="text-[#FFD21F]">Next.</span>
              </span>
            </div>
          </div>

          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#3b121c] via-[#240810] to-[#160408] border border-[#FFD21F]/30 p-6 sm:p-8 text-left shadow-xl">
            <Quote className="w-7 h-7 text-[#FFD21F] fill-[#FFD21F] mb-3" />
            
            <blockquote className="text-lg sm:text-2xl font-extrabold text-white leading-snug tracking-tight">
              Better Students Create Brighter Futures.
            </blockquote>

            <div className="mt-4 flex items-center gap-2">
              <div className="w-6 h-0.5 bg-[#FFD21F]" />
              <span className="text-xs font-semibold text-zinc-300">
                Pankaj Agrawal & Rahul Rai • Co-Founders & Academic Mentors (Est. 2007)
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 8. CAMPUSES & IMMEDIATE CONTACT */}
      <section className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#1d060b] border border-white/[0.08] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FFD21F]">
                TWO CONVENIENT NAGPUR CAMPUSES
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Visit Us in Nagpur
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Parents and students are welcome to visit our campuses for a 1-on-1 career consultation.
              </p>

              <div className="space-y-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-[#280a12] border border-white/10">
                  <div className="flex items-center gap-2 font-bold text-white text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-[#FFD21F] shrink-0" />
                    <span>Central Flagship Hub — Mahal</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-400 pl-6 mt-1">
                    2nd Floor, Natraj Tower, Zenda Chowk, Natraj Talkies Road, Mahal, Nagpur - 440032
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#280a12] border border-white/10">
                  <div className="flex items-center gap-2 font-bold text-white text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-[#FFD21F] shrink-0" />
                    <span>Sadar Campus — Central Nagpur</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-400 pl-6 mt-1">
                    Sadar Hub, Nagpur
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#280a12] rounded-3xl p-6 sm:p-8 border border-white/10 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FFD21F] text-black flex items-center justify-center mx-auto shadow-lg shadow-[#FFD21F]/20">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Speak With A Senior Mentor
              </h3>
              <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                Call directly to inquire about upcoming batch dates, syllabus plans, and batch vacancies.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href="tel:+919595253778"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFD21F] hover:bg-[#FFC400] text-black font-extrabold text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 95952 53778</span>
                </a>

                <a
                  href="https://wa.me/919595253778?text=Hello%20Caliber%27s%20Nova%2C%20I%20saw%20your%20Meta%20Ad%20and%20want%20to%20inquire%20about%20admissions."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs uppercase tracking-wider transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. INTERACTIVE FAQS */}
      <section className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-3xl mx-auto text-left">
        <div className="text-center mb-8">
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FFD21F]">
            COMMON QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1.5">
            Everything You Need <span className="text-[#FFD21F]">to Know</span>
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

      {/* 10. FINAL BOTTOM PASS BANNER */}
      <section className="py-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-[#380f1a] via-[#240810] to-[#140407] border-2 border-[#FFD21F]/30 p-8 sm:p-12 text-center space-y-4 shadow-2xl">
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD21F] text-black font-extrabold">
            STRICTLY 25 SEATS PER BATCH
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Give Your Child the <span className="text-[#FFD21F]">Caliber’s Nova Advantage</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
            Claim your Free 2-Day Academic VIP Pass today and experience our disciplined, concept-first classroom.
          </p>

          <div className="pt-2">
            <button
              onClick={() => scrollToPass()}
              className="inline-flex items-center gap-2 bg-[#FFD21F] hover:bg-[#FFC400] text-black font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 transform active:scale-95 shadow-xl shadow-[#FFD21F]/20"
            >
              <Ticket className="w-4 h-4" />
              <span>Claim Your Free VIP Pass Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="py-6 border-t border-white/[0.08] text-center text-xs text-zinc-500">
        <p>© 2007–2026 Caliber’s Nova Academic Institute, Nagpur. All rights reserved.</p>
        <p className="mt-1 text-[11px] text-zinc-600">
          KNOW MORE. BE MORE. • Admissions Office: Mahal & Sadar, Nagpur
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
          href="https://wa.me/919595253778?text=Hello%20Caliber%27s%20Nova%2C%20I%20saw%20your%20Meta%20Ad%20and%20want%20to%20claim%20the%20Free%20VIP%20Pass."
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#25D366] text-black font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => scrollToPass()}
          className="flex-1 bg-[#FFD21F] text-black font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-1 shadow-md shadow-[#FFD21F]/20"
        >
          <span>VIP Pass</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
