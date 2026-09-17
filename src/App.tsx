import React, { useState, useEffect } from 'react';
import { Navbar, CategoryType } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProgramsBento } from './components/ProgramsBento';
import { LearningMethod } from './components/LearningMethod';
import { WhyCalibersNova } from './components/WhyCalibersNova';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ResultsSection } from './components/ResultsSection';
import { FacultySection } from './components/FacultySection';
import { ResourcesSection } from './components/ResourcesSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CounsellingModal } from './components/CounsellingModal';
import { MetaAdsLanding } from './components/MetaAdsLanding';
import { DigitalMarketingSection } from './components/DigitalMarketingSection';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [currentSearch, setCurrentSearch] = useState(window.location.search);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [isCounsellingOpen, setIsCounsellingOpen] = useState(false);
  const [preselectedProgram, setPreselectedProgram] = useState<string>('Class 10th');

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setCurrentSearch(window.location.search);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    setCurrentSearch('');
    window.scrollTo(0, 0);
  };

  const isAdPage =
    currentPath.startsWith('/ad') ||
    currentPath.startsWith('/apply') ||
    currentPath.startsWith('/admission') ||
    currentPath.startsWith('/meta') ||
    currentSearch.includes('ad=') ||
    currentSearch.includes('source=meta');

  if (isAdPage) {
    return <MetaAdsLanding onNavigateHome={() => navigateTo('/')} />;
  }

  const handleOpenCounselling = (programName?: string) => {
    if (programName) {
      setPreselectedProgram(programName);
    }
    setIsCounsellingOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#781B37] via-[#63142C] to-[#4F0E22] text-[#F5F3ED] selection:bg-[#FFD21F] selection:text-black relative antialiased overflow-x-hidden">
      {/* Atmospheric Lighter Maroon Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-[#9E2448]/35 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] right-[-10%] w-[650px] h-[650px] bg-[#8A1E3E]/30 rounded-full blur-[150px]" />
        <div className="absolute top-[70%] left-[-10%] w-[650px] h-[650px] bg-[#942044]/25 rounded-full blur-[160px]" />
      </div>

      {/* Floating Rounded Navbar with Categories Dropdown */}
      <Navbar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onOpenCounselling={() => handleOpenCounselling()}
      />

      {/* Main Flow Matching Exact Design Sequence */}
      <main className="space-y-4 sm:space-y-6 relative z-10">
        
        {/* Screen 1: Hero Section with Integrated Stats Strip */}
        <HeroSection onOpenCounselling={() => handleOpenCounselling()} />

        {/* Screen 1: Programs Section (Your Next Chapter) */}
        <ProgramsBento
          selectedCategory={selectedCategory}
          onSelectProgram={(name) => handleOpenCounselling(name)}
          onOpenCounselling={() => handleOpenCounselling()}
        />

        {/* Featured Career Acceleration: Welurik Digital Marketing Course */}
        <DigitalMarketingSection />

        {/* Screen 2: Learning Method (The Caliber's Nova Method) */}
        <LearningMethod />

        {/* Screen 2: Why Caliber's Nova? (Built for What's Next + Mini CTA) */}
        <WhyCalibersNova onOpenCounselling={() => handleOpenCounselling()} />

        {/* Screen 2: Testimonials (Hear from Our Students) */}
        <TestimonialsSection />

        {/* Screen 3: Results (Real Stories) */}
        <ResultsSection onOpenCounselling={() => handleOpenCounselling()} />

        {/* Screen 3: Our Faculty (More Than Teachers + Play + Quote) */}
        <FacultySection onOpenCounselling={() => handleOpenCounselling()} />

        {/* Screen 3: Resources (Stay Ahead) */}
        <ResourcesSection onOpenCounselling={() => handleOpenCounselling()} />

        {/* Screen 3: Admissions Open Banner Card */}
        <FinalCTA onOpenCounselling={() => handleOpenCounselling()} />

      </main>

      {/* Screen 3: Footer */}
      <Footer />

      {/* Interactive Booking & Inquiry Modal */}
      <CounsellingModal
        isOpen={isCounsellingOpen}
        onClose={() => setIsCounsellingOpen(false)}
        preselectedProgram={preselectedProgram}
      />

      {/* Floating Preview Switcher to Meta Ad Landing Page */}
      <button
        onClick={() => navigateTo('/ad')}
        className="fixed bottom-5 left-5 z-40 hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#280a12]/95 hover:bg-[#380f1a] text-[#FFD21F] border border-[#FFD21F]/40 backdrop-blur-md shadow-2xl text-xs font-black transition-all hover:scale-105 active:scale-95"
      >
        <span className="w-2 h-2 rounded-full bg-[#FFD21F] animate-pulse" />
        <span>Meta Ads Page Preview ↗</span>
      </button>

    </div>
  );
};

export default App;
