import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Menu, X, ArrowUpRight, Phone, Sparkles } from 'lucide-react';

export type CategoryType = 'All' | 'Class 9th' | 'Class 10th' | 'Class 11th' | 'Class 12th';

interface NavbarProps {
  selectedCategory: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  onOpenCounselling: () => void;
}

const CATEGORIES: CategoryType[] = [
  'All',
  'Class 9th',
  'Class 10th',
  'Class 11th',
  'Class 12th',
];

export const Navbar: React.FC<NavbarProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenCounselling,
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategorySelect = (category: CategoryType) => {
    onSelectCategory(category);
    setIsCategoryOpen(false);
    setIsMobileMenuOpen(false);

    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed fixed-safe-top inset-x-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
      <nav
        className={`w-full pointer-events-auto transition-[background-color,border-color,box-shadow] duration-300 rounded-full px-3.5 sm:px-6 py-2 sm:py-3 flex items-center justify-between shadow-2xl ${
          scrolled
            ? 'bg-[#180409]/95 backdrop-blur-xl border border-white/10 shadow-black/80'
            : 'bg-[#180409]/85 backdrop-blur-lg border border-white/[0.08]'
        }`}
      >
        {/* Left: Brand Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden border border-white/20 transition-transform group-hover:scale-105 shrink-0">
            <img
              src="/assets/logo.png"
              alt="Caliber's Nova Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-white font-extrabold text-xs sm:text-sm tracking-tight leading-tight whitespace-nowrap">
              CALIBER’S <span className="text-[#FFD21F]">NOVA</span>
            </span>
            <span className="hidden sm:inline-block text-[9px] uppercase tracking-widest text-zinc-400 font-semibold whitespace-nowrap">
              Academic Institute • Est. 2007
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {/* Categories Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                selectedCategory !== 'All'
                  ? 'bg-[#FFD21F] text-black shadow-sm font-bold'
                  : 'text-zinc-200 hover:text-white hover:bg-white/5 border border-white/10'
              }`}
              aria-expanded={isCategoryOpen}
            >
              <span>{selectedCategory === 'All' ? 'Categories' : selectedCategory}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isCategoryOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu Container (Off-white rounded container with subtle shadow) */}
            {isCategoryOpen && (
              <div className="absolute top-full left-0 mt-2.5 w-52 bg-[#F5F3ED] text-[#0B0B0B] rounded-2xl p-2 shadow-2xl shadow-black/50 border border-zinc-300/80 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500 border-b border-zinc-200/80 mb-1">
                  Filter by Grade / Class
                </div>
                <div className="flex flex-col space-y-1">
                  {CATEGORIES.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => handleCategorySelect(cat)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl font-medium transition-all ${
                          isActive
                            ? 'bg-[#FFD21F] text-black font-bold shadow-sm'
                            : 'hover:bg-black/5 text-zinc-800'
                        }`}
                      >
                        <span>{cat}</span>
                        {isActive && <Check className="w-4 h-4 text-black stroke-[2.5]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a
            href="#about"
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#programs"
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Programs
          </a>
          <a
            href="#method"
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Method
          </a>
          <a
            href="#results"
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Results
          </a>
          <a
            href="#faculty"
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Faculty
          </a>
          <a
            href="#resources"
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Resources
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Desktop Right CTA: Admissions Open */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCounselling}
            className="group relative inline-flex items-center gap-2 bg-[#FFD21F] hover:bg-[#FFC400] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 transform active:scale-95 shadow-md shadow-[#FFD21F]/20"
          >
            <span>Admissions Open</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center shrink-0">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-white hover:text-[#FFD21F] transition-colors focus:outline-none flex items-center justify-center rounded-full hover:bg-white/5 active:scale-95"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 stroke-[2.5]" />
            ) : (
              <div className="space-y-1 w-5 flex flex-col justify-center items-end py-0.5">
                <span className="block w-5 h-0.5 bg-white rounded-full"></span>
                <span className="block w-3.5 h-0.5 bg-[#FFD21F] rounded-full"></span>
                <span className="block w-5 h-0.5 bg-white rounded-full"></span>
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto sm:hidden mt-2 bg-[#180409]/98 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-2xl shadow-black animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-3 text-left">
            {/* Mobile Categories Accordion */}
            <div className="border border-white/10 rounded-2xl p-3.5 bg-white/[0.03]">
              <button
                onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-[#FFD21F]"
              >
                <span>Category Filter: {selectedCategory}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileCategoryOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isMobileCategoryOpen && (
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10">
                  {CATEGORIES.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => handleCategorySelect(cat)}
                        className={`px-3 py-2 rounded-xl text-xs text-left font-medium transition-all ${
                          isActive
                            ? 'bg-[#FFD21F] text-black font-bold'
                            : 'bg-white/5 text-zinc-300 hover:bg-white/10'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Navigation links */}
            <div className="grid grid-cols-2 gap-2 py-2 text-xs font-semibold">
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/[0.03] text-zinc-300 hover:text-white"
              >
                About Institute
              </a>
              <a
                href="#programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/[0.03] text-zinc-300 hover:text-white"
              >
                Programs
              </a>
              <a
                href="#method"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/[0.03] text-zinc-300 hover:text-white"
              >
                Learning Method
              </a>
              <a
                href="#results"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/[0.03] text-zinc-300 hover:text-white"
              >
                Results & Records
              </a>
              <a
                href="#faculty"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/[0.03] text-zinc-300 hover:text-white"
              >
                Our Faculty
              </a>
              <a
                href="#resources"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/[0.03] text-zinc-300 hover:text-white"
              >
                Resources
              </a>
            </div>

            {/* Mobile Action CTAs */}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCounselling();
                }}
                className="w-full bg-[#FFD21F] text-black font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-[#FFD21F]/15 active:scale-98"
              >
                <Sparkles className="w-4 h-4 fill-black" />
                <span>Admissions Open — Book Free Counselling</span>
              </button>
              <a
                href="tel:+919595253778"
                className="w-full py-2 text-center text-xs font-semibold text-zinc-400 hover:text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFD21F]" />
                <span>Nagpur Campus: +91 95952 53778</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
