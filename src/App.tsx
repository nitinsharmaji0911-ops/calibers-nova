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
    <div className="min-h-screen bg-[#140407] text-[#F5F3ED] selection:bg-[#FFD21F] selection:text-black relative antialiased">
      
      {/* Floating Rounded Navbar with Categories Dropdown */}
      <Navbar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onOpenCounselling={() => handleOpenCounselling()}
      />

      {/* Main Flow Matching Exact Design Sequence */}
      <main className="space-y-4 sm:space-y-6">
        
        {/* Screen 1: Hero Section with Integrated Stats Strip */}
        <HeroSection onOpenCounselling={() => handleOpenCounselling()} />

        {/* Screen 1: Programs Section (Your Next Chapter) */}
        <ProgramsBento
          selectedCategory={selectedCategory}
          onSelectProgram={(name) => handleOpenCounselling(name)}
          onOpenCounselling={() => handleOpenCounselling()}
        />

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
