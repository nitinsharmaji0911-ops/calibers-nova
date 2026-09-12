import React from 'react';

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
    text: 'Hey guys, I am Akash. When I joined Caliber’s Nova in Class 11th, I was genuinely intimidated by accountancy and higher mathematics. But Pankaj Sir and the faculty break down every complex concept into intuitive first principles. Within a year, my test scores jumped from 60s to 90s, and I scored 96.2% in my 12th boards while clearing my foundation entrance. The weekly test series and 1-on-1 doubt clearing genuinely changed everything for me. If you’re serious about your academics in Nagpur, this institute is unmatched!',
  },
  {
    id: 'c1-2',
    name: 'Rohan Agrawal',
    batch: 'Class 10 Foundation Batch',
    text: 'Hello everyone, I am Rohan from Nagpur. I joined the foundation program at Caliber’s Nova when I was struggling with mathematics. The teachers here have endless patience—they will explain a concept four times until you understand it. The study material and question banks are top-tier. I scored a perfect 100 in Math in my 10th board exams, and I credit the entire team here for building my foundation.',
  },
  {
    id: 'c1-3',
    name: 'Kunal Raut',
    batch: 'Graduation & Entrance Prep',
    text: 'What sets Caliber’s Nova apart from corporate coaching factories is the personal human connection. You can walk up to the mentors anytime after class without hesitation. They know your strengths, your weaknesses, and they keep you accountable. 19+ years of consistent academic results in Nagpur speak for themselves.',
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
    name: 'Padmesh Joshi',
    batch: 'Class 12 Commerce & Finance',
    text: 'Hey guys, I am Padmesh. I joined Caliber’s Nova in Class 11th for Commerce and State Board preparation. The teaching methodology of Pankaj Sir is legendary in Nagpur for a reason—accounts and economics become so interesting when taught with real-world examples. Today I’m studying at a premier finance college, and the strong base built at Caliber’s Nova is still helping me stay ahead of the curve.',
  },
  {
    id: 'c2-3',
    name: 'Harsh Vardhan',
    batch: 'Class 12 Science — Merit List',
    text: 'The environment at Caliber’s Nova is infectious—everyone around you wants to achieve bigger goals. The structured study timetable, error logs, and one-on-one reviews with faculty helped me eliminate silly mistakes and rank among the top scorers in Nagpur.',
  },
];

const column3: ReviewItem[] = [
  {
    id: 'c3-1',
    name: 'Prachi Kulkarni',
    batch: 'Class 12 Science & Competitive',
    text: 'Hi, I am Prachi. I joined Caliber’s Nova with a lot of self-doubt about handling boards alongside competitive entrance prep. Most institutes treat you like a roll number, but here, Pankaj Sir sat down with me individually to map out a realistic study roadmap. The doubt-solving sessions go on until you’re 100% confident. That personal attention gave me the belief that I could excel. I scored 95.8% in boards and secured a top percentile in my entrance exams. It’s a decision you’ll look back on as the turning point of your student life.',
  },
  {
    id: 'c3-2',
    name: 'Ananya Sharma',
    batch: 'Class 12 Board Topper',
    text: 'Before joining Caliber’s Nova, I used to panic during exam seasons. The regular weekend assessments and full-syllabus mock tests simulated exam pressure so well that the final board exam felt like just another practice test. I scored 97% overall. The faculty’s dedication and the calm, focused atmosphere at the campus make all the difference.',
  },
  {
    id: 'c3-3',
    name: 'Meera Iyer',
    batch: 'Class 9th & 10th Foundation',
    text: 'I started early with Caliber’s Nova in 9th grade, and it gave me a massive head start over my peers. Instead of rote learning, they teach you how to analyze problems logically. The daily practice problems and revision schedules helped me develop strong study habits that made Class 10 completely stress-free.',
  },
];

const column4: ReviewItem[] = [
  {
    id: 'c4-1',
    name: 'Deepak Divakar',
    batch: 'Class 11–12 Science',
    text: 'Enrolling at Caliber’s Nova in Mahal was honestly the best decision of my academic life. In school, chemistry and physics felt like a chore, but here the concepts clicked instantly. The mock exams mirror actual board patterns, and the detailed feedback after every test shows you exactly where you lost marks and how to improve. I gained so much confidence in just 6 months.',
  },
  {
    id: 'c4-2',
    name: 'Dhruvil Patel',
    batch: 'B.Com & Entrance / CAT Prep',
    text: 'When I joined Caliber’s Nova, I was looking for rigorous guidance for higher education and entrance preparation. The faculty members bring 19+ years of teaching expertise, and you feel that depth in every lecture. They teach you time management, exam strategy, and analytical problem-solving. Being surrounded by motivated peers in a disciplined classroom environment pushed me to work harder every single day.',
  },
  {
    id: 'c4-3',
    name: 'Sneha Gupta',
    batch: 'Commerce & Foundation Prep',
    text: 'I joined for 11th-12th commerce and foundation guidance. The faculty doesn’t just complete the syllabus; they build discipline and career clarity. I’m now confidently pursuing my professional exams, and the conceptual clarity I gained here is my biggest asset. Highly recommended to every student in Nagpur!',
  },
];

const ReviewCard: React.FC<{ review: ReviewItem }> = ({ review }) => (
  <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-b from-[#260910] via-[#1a050a] to-[#120306] border border-white/[0.09] hover:border-[#FFD21F]/40 p-3 sm:p-5 lg:p-6 text-left transition-all duration-300 shadow-xl shadow-black/70 group flex flex-col justify-between">
    <p className="text-[11.5px] sm:text-[13px] lg:text-[14px] text-zinc-300 leading-relaxed font-normal mb-3 sm:mb-5 whitespace-pre-line">
      {review.text}
    </p>

    <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-white/[0.06] gap-1">
      <div className="min-w-0 flex-1">
        <div className="text-xs sm:text-sm font-bold text-white leading-tight group-hover:text-[#FFD21F] transition-colors truncate">
          {review.name}
        </div>
        <div className="text-[9.5px] sm:text-[11px] text-zinc-400 font-medium mt-0.5 truncate">
          {review.batch}
        </div>
      </div>
      <div className="shrink-0 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[9px] sm:text-[10px] font-mono text-zinc-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
        <span>Verified</span>
      </div>
    </div>
  </div>
);

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-10 sm:py-20 px-2.5 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Section Header matching Tharun Speaks "More Success Stories" */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 px-2">
        <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#FFD21F] mb-2.5">
          WALL OF LOVE • STUDENT STORIES
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          More Success <span className="text-[#FFD21F]">Stories.</span>
        </h2>
        <p className="text-xs sm:text-base text-zinc-400 mt-2.5 sm:mt-3 max-w-lg mx-auto leading-relaxed">
          Real experiences from students whose academic journeys, concepts, and results were built at Caliber’s Nova.
        </p>
      </div>

      {/* Infinite Multi-Column Marquee Container with Top & Bottom Fade */}
      <div className="relative h-[560px] sm:h-[650px] lg:h-[750px] overflow-hidden mask-marquee-vertical">
        
        {/* Top Gradient Fade Overlay */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-24 lg:h-28 bg-gradient-to-b from-[#140407] via-[#140407]/80 to-transparent z-20" />

        {/* Bottom Gradient Fade Overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 lg:h-28 bg-gradient-to-t from-[#140407] via-[#140407]/80 to-transparent z-20" />

        {/* 2-Column on Mobile, 4-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5 h-full items-start">
          
          {/* Column 1 - Moving Up */}
          <div className="animate-marquee-up-slow pause-hover flex flex-col gap-2.5 sm:gap-4 lg:gap-5">
            {[...column1, ...column1].map((review, idx) => (
              <ReviewCard key={`col1-${review.id}-${idx}`} review={review} />
            ))}
          </div>

          {/* Column 2 - Moving Down (now visible on mobile as well!) */}
          <div className="animate-marquee-down-slow pause-hover flex flex-col gap-2.5 sm:gap-4 lg:gap-5">
            {[...column2, ...column2].map((review, idx) => (
              <ReviewCard key={`col2-${review.id}-${idx}`} review={review} />
            ))}
          </div>

          {/* Column 3 - Moving Up (visible on lg+) */}
          <div className="animate-marquee-up-fast pause-hover hidden lg:flex flex-col gap-4 lg:gap-5">
            {[...column3, ...column3].map((review, idx) => (
              <ReviewCard key={`c3-${review.id}-${idx}`} review={review} />
            ))}
          </div>

          {/* Column 4 - Moving Down (visible on lg+) */}
          <div className="animate-marquee-down-fast pause-hover hidden lg:flex flex-col gap-4 lg:gap-5">
            {[...column4, ...column4].map((review, idx) => (
              <ReviewCard key={`c4-${review.id}-${idx}`} review={review} />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
