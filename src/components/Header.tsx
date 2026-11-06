import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PageId, ProgramId } from '../types';
import {
  Heart,
  Menu,
  X,
  Shield,
  Phone,
  ChevronDown,
  Search,
  Lock,
  BookOpen,
  Users,
  Award,
  ArrowRight,
  Smile,
  GraduationCap,
  Sparkles
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentPage,
    selectedProgramId,
    navigateTo,
    openDonationModal,
    currentUser,
    contactInfo,
    openSuperAdminModal
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [childrenDropdownOpen, setChildrenDropdownOpen] = useState(false);

  // References and debounce timers for robust, intact dropdown interactions
  const aboutRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const aboutTimerRef = useRef<NodeJS.Timeout | null>(null);
  const programsTimerRef = useRef<NodeJS.Timeout | null>(null);
  const childrenTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleAboutEnter = () => {
    if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
    if (programsTimerRef.current) clearTimeout(programsTimerRef.current);
    if (childrenTimerRef.current) clearTimeout(childrenTimerRef.current);
    setProgramsDropdownOpen(false);
    setChildrenDropdownOpen(false);
    setAboutDropdownOpen(true);
  };

  const handleAboutLeave = () => {
    if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
    aboutTimerRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 200);
  };

  const handleProgramsEnter = () => {
    if (programsTimerRef.current) clearTimeout(programsTimerRef.current);
    if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
    if (childrenTimerRef.current) clearTimeout(childrenTimerRef.current);
    setAboutDropdownOpen(false);
    setChildrenDropdownOpen(false);
    setProgramsDropdownOpen(true);
  };

  const handleProgramsLeave = () => {
    if (programsTimerRef.current) clearTimeout(programsTimerRef.current);
    programsTimerRef.current = setTimeout(() => {
      setProgramsDropdownOpen(false);
    }, 200);
  };

  const handleChildrenEnter = () => {
    if (childrenTimerRef.current) clearTimeout(childrenTimerRef.current);
    if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
    if (programsTimerRef.current) clearTimeout(programsTimerRef.current);
    setAboutDropdownOpen(false);
    setProgramsDropdownOpen(false);
    setChildrenDropdownOpen(true);
  };

  const handleChildrenLeave = () => {
    if (childrenTimerRef.current) clearTimeout(childrenTimerRef.current);
    childrenTimerRef.current = setTimeout(() => {
      setChildrenDropdownOpen(false);
    }, 200);
  };

  // Close dropdowns on click outside & cleanup timers on unmount
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutDropdownOpen(false);
      }
      if (programsRef.current && !programsRef.current.contains(e.target as Node)) {
        setProgramsDropdownOpen(false);
      }
      if (childrenRef.current && !childrenRef.current.contains(e.target as Node)) {
        setChildrenDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
      if (programsTimerRef.current) clearTimeout(programsTimerRef.current);
      if (childrenTimerRef.current) clearTimeout(childrenTimerRef.current);
    };
  }, []);

  // Logo 5-consecutive-clicks easter egg tracking for Super Admin / Staff CMS
  const [clickCount, setClickCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    setShowFeedback(true);

    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }

    if (nextCount >= 5) {
      // 5 consecutive clicks reached!
      setClickCount(0);
      setShowFeedback(false);
      if (currentUser.isAuthenticated) {
        navigateTo('cms');
      } else {
        openSuperAdminModal();
      }
    } else {
      // First click navigates home if not currently on home
      if (nextCount === 1 && currentPage !== 'home') {
        navigateTo('home');
      }
      // Reset counter after 2.5 seconds of inactivity
      clickTimerRef.current = setTimeout(() => {
        setClickCount(0);
        setShowFeedback(false);
      }, 2500);
    }
  };

  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Reports', page: 'reports' },
    { label: 'Get Involved', page: 'get-involved' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageId, programId?: ProgramId) => {
    if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
    if (programsTimerRef.current) clearTimeout(programsTimerRef.current);
    if (childrenTimerRef.current) clearTimeout(childrenTimerRef.current);
    navigateTo(page, programId);
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    setAboutDropdownOpen(false);
    setChildrenDropdownOpen(false);
  };

  return (
    <>
      {/* Main Top Navigation */}
      <header className="header-mount sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/90 transition-shadow">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-6">
          {/* Zone 1: Logo Wordmark with 5-consecutive-clicks Super Admin CMS trigger */}
          <div className="relative">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef5a20] rounded-xl p-1 transition-all active:scale-95"
              title="Mercy Link Foundation Africa (Click 5 consecutive times to open Super Admin CMS Login)"
              aria-label="Mercy Link Foundation Africa Logo"
            >
              {/* Official Emblem - Prominent & Visible */}
              <div
                className={`w-10 h-10 sm:w-13 sm:h-13 md:w-15 md:h-15 rounded-full p-0.5 bg-white border-2 ${
                  clickCount > 1
                    ? 'border-[#ef5a20] ring-4 ring-[#ef5a20]/60 scale-105 shadow-lg shadow-amber-500/40'
                    : 'border-[#ef5a20] shadow-md'
                } flex items-center justify-center shrink-0 relative overflow-hidden group-hover:scale-105 transition-all`}
              >
                <img
                  src="https://i.postimg.cc/J4CrQcrZ/Whats-App-Image-2026-10-23-at-9-33-54-AM.jpg"
                  alt="Mercy Link Foundation Africa Logo"
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/logo.jpg';
                  }}
                />
              </div>

              <div className="flex flex-col whitespace-nowrap shrink-0">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="font-['Manrope'] font-extrabold text-base sm:text-xl lg:text-2xl tracking-tight text-[#000a37] leading-none">
                    Mercy Link
                  </span>
                  {currentUser.isAuthenticated && (
                    <span className="text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      CMS
                    </span>
                  )}
                </div>
                <span className="text-[9px] sm:text-xs font-bold text-[#ef5a20] tracking-wider uppercase mt-0.5 sm:mt-1">
                  Foundation Africa
                </span>
              </div>
            </button>

            {/* Subtle, non-intrusive feedback on consecutive clicks */}
            {showFeedback && clickCount >= 2 && (
              <div className="absolute -bottom-6 left-0 bg-[#000a37] text-[#ef5a20] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-[#ef5a20]/40 flex items-center gap-1 animate-in fade-in zoom-in duration-150 z-50 pointer-events-none whitespace-nowrap">
                <Lock className="w-2.5 h-2.5 text-[#ef5a20]" />
                <span>Super Admin: {clickCount}/5 clicks</span>
              </div>
            )}
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-bold text-[#242B33]/80">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-[#ef5a20] transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentPage === 'home' ? 'text-[#ef5a20] border-b-2 border-[#ef5a20]' : ''
              }`}
            >
              Home
            </button>

            {/* About Us Dropdown Menu */}
            <div
              ref={aboutRef}
              className="relative py-2"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setProgramsDropdownOpen(false);
                  setAboutDropdownOpen((prev) => !prev);
                }}
                className={`flex items-center gap-1.5 hover:text-[#ef5a20] transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer select-none font-bold ${
                  currentPage === 'about' ||
                  currentPage === 'ministry-profile' ||
                  currentPage === 'about-founder' ||
                  currentPage === 'vision-mission-values'
                    ? 'text-[#ef5a20] border-b-2 border-[#ef5a20]'
                    : ''
                }`}
                aria-expanded={aboutDropdownOpen}
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#687381] transition-transform duration-200 ${
                    aboutDropdownOpen ? 'rotate-180 text-[#ef5a20]' : ''
                  }`}
                />
              </button>

              {aboutDropdownOpen && (
                <div
                  className="absolute top-full left-0 pt-2 z-50 w-72"
                  onMouseEnter={handleAboutEnter}
                  onMouseLeave={handleAboutLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150 ring-1 ring-black/5">
                    <div className="px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#ef5a20] border-b border-stone-100 flex items-center justify-between">
                      <span>About Mercy Link</span>
                      <span className="text-[9px] font-bold text-stone-400">Est. 2007</span>
                    </div>

                    <button
                      onClick={() => handleNavClick('ministry-profile')}
                      className={`w-full text-left px-4 py-2.5 hover:bg-stone-50 transition-colors flex items-start gap-2.5 ${
                        currentPage === 'ministry-profile' ? 'bg-[#FAF9F6] text-[#ef5a20]' : 'text-[#000a37]'
                      }`}
                    >
                      <BookOpen className={`w-4 h-4 mt-0.5 shrink-0 ${currentPage === 'ministry-profile' ? 'text-[#ef5a20]' : 'text-[#000a37]'}`} />
                      <div>
                        <div className="text-xs font-bold leading-snug">Ministry Profile</div>
                        <div className="text-[10px] text-stone-500 font-normal leading-tight">Missional scope, 70+ districts & hubs</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('about-founder')}
                      className={`w-full text-left px-4 py-2.5 hover:bg-stone-50 transition-colors flex items-start gap-2.5 ${
                        currentPage === 'about-founder' ? 'bg-[#FAF9F6] text-[#ef5a20]' : 'text-[#000a37]'
                      }`}
                    >
                      <Users className={`w-4 h-4 mt-0.5 shrink-0 ${currentPage === 'about-founder' ? 'text-[#ef5a20]' : 'text-[#000a37]'}`} />
                      <div>
                        <div className="text-xs font-bold leading-snug">About the Founder</div>
                        <div className="text-[10px] text-stone-500 font-normal leading-tight">Mr. Robert Sebunya & leadership</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('vision-mission-values')}
                      className={`w-full text-left px-4 py-2.5 hover:bg-stone-50 transition-colors flex items-start gap-2.5 ${
                        currentPage === 'vision-mission-values' ? 'bg-[#FAF9F6] text-[#ef5a20]' : 'text-[#000a37]'
                      }`}
                    >
                      <Award className={`w-4 h-4 mt-0.5 shrink-0 ${currentPage === 'vision-mission-values' ? 'text-[#ef5a20]' : 'text-[#000a37]'}`} />
                      <div>
                        <div className="text-xs font-bold leading-snug">Vision, Mission & Core Values</div>
                        <div className="text-[10px] text-stone-500 font-normal leading-tight">6 foundational biblical pillars</div>
                      </div>
                    </button>

                    <div className="border-t border-stone-100 my-1.5" />

                    <button
                      onClick={() => handleNavClick('about')}
                      className={`w-full text-left px-4 py-2 text-xs hover:bg-stone-50 transition-colors flex items-center justify-between ${
                        currentPage === 'about' ? 'text-[#ef5a20] font-bold bg-[#FAF9F6]' : 'text-stone-600 hover:text-[#000a37]'
                      }`}
                    >
                      <span className="font-semibold text-[11px]">Our Story & Overview</span>
                      <ArrowRight className="w-3 h-3 text-[#ef5a20]" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Our programs Dropdown */}
            <div
              ref={programsRef}
              className="relative py-2"
              onMouseEnter={handleProgramsEnter}
              onMouseLeave={handleProgramsLeave}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setAboutDropdownOpen(false);
                  setProgramsDropdownOpen((prev) => !prev);
                }}
                className={`flex items-center gap-1.5 hover:text-[#ef5a20] transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer select-none font-bold ${
                  currentPage === 'programs' || currentPage === 'program-detail'
                    ? 'text-[#ef5a20] border-b-2 border-[#ef5a20]'
                    : ''
                }`}
                aria-expanded={programsDropdownOpen}
              >
                <span>Our programs</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#687381] transition-transform duration-200 ${
                    programsDropdownOpen ? 'rotate-180 text-[#ef5a20]' : ''
                  }`}
                />
              </button>

              {programsDropdownOpen && (
                <div
                  className="absolute top-full left-0 pt-2 z-50 w-64"
                  onMouseEnter={handleProgramsEnter}
                  onMouseLeave={handleProgramsLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150 ring-1 ring-black/5">
                    <button
                      onClick={() => handleNavClick('programs')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-[#000a37] hover:bg-stone-50 border-b border-stone-100 uppercase tracking-wider flex items-center justify-between"
                    >
                      <span>All 7 Ministry Programs</span>
                      <ArrowRight className="w-3 h-3 text-[#ef5a20]" />
                    </button>
                    <button
                      onClick={() => {
                        navigateTo('program-detail', 'disability-ministry');
                        setProgramsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs normal-case text-stone-700 hover:bg-stone-50 hover:text-[#ef5a20] transition-colors"
                    >
                      Disability Ministry
                    </button>
                    <button
                      onClick={() => {
                        navigateTo('program-detail', 'prison-ministry');
                        setProgramsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs normal-case text-stone-700 hover:bg-stone-50 hover:text-[#ef5a20] transition-colors"
                    >
                      Prison Ministry
                    </button>
                    <button
                      onClick={() => {
                        navigateTo('program-detail', 'church-planters');
                        setProgramsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs normal-case text-stone-700 hover:bg-stone-50 hover:text-[#ef5a20] transition-colors"
                    >
                      Church Planter Training
                    </button>
                    <button
                      onClick={() => {
                        navigateTo('program-detail', 'family-foundations');
                        setProgramsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs normal-case text-stone-700 hover:bg-stone-50 hover:text-[#ef5a20] transition-colors"
                    >
                      Family Foundations
                    </button>
                    <button
                      onClick={() => {
                        navigateTo('program-detail', 'childrens-ministry');
                        setProgramsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs normal-case text-stone-700 hover:bg-stone-50 hover:text-[#ef5a20] transition-colors"
                    >
                      Children's Ministry
                    </button>
                    <button
                      onClick={() => {
                        navigateTo('program-detail', 'better-life-program');
                        setProgramsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs normal-case text-stone-700 hover:bg-stone-50 hover:text-[#ef5a20] transition-colors"
                    >
                      The Better Life Program
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Children's Ministry Dropdown */}
            <div
              ref={childrenRef}
              className="relative py-2"
              onMouseEnter={handleChildrenEnter}
              onMouseLeave={handleChildrenLeave}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setAboutDropdownOpen(false);
                  setProgramsDropdownOpen(false);
                  navigateTo('children-ministry');
                  setChildrenDropdownOpen((prev) => !prev);
                }}
                className={`flex items-center gap-1.5 hover:text-[#ef5a20] transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer select-none font-bold ${
                  currentPage === 'children-ministry' ||
                  currentPage === 'children-services' ||
                  currentPage === 'education-fund' ||
                  (currentPage === 'program-detail' && selectedProgramId === 'childrens-ministry')
                    ? 'text-[#ef5a20] border-b-2 border-[#ef5a20]'
                    : ''
                }`}
                aria-expanded={childrenDropdownOpen}
              >
                <span>Children's Ministry</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#687381] transition-transform duration-200 ${
                    childrenDropdownOpen ? 'rotate-180 text-[#ef5a20]' : ''
                  }`}
                />
              </button>

              {childrenDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-[680px]"
                  onMouseEnter={handleChildrenEnter}
                  onMouseLeave={handleChildrenLeave}
                >
                  <div className="bg-white rounded-3xl shadow-2xl border border-stone-200/90 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150 ring-1 ring-black/5">
                    {/* Header Strip */}
                    <div className="bg-gradient-to-r from-[#000a37] via-[#081b5c] to-[#000a37] px-6 py-3.5 text-white flex items-center justify-between border-b border-stone-800">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#ef5a20]" />
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ef5a20]">
                          Children's Ministry: Services & Education Fund
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          navigateTo('children-ministry');
                          setChildrenDropdownOpen(false);
                        }}
                        className="text-[11px] font-bold text-stone-300 hover:text-white transition-colors cursor-pointer"
                      >
                        Visit Children's Ministry Page →
                      </button>
                    </div>

                    {/* 2-Card Showcase Grid with Vision/Mission Page Image Design */}
                    <div className="p-5 grid grid-cols-2 gap-5 bg-gradient-to-b from-[#FAF9F6]/40 to-white">
                      {/* Card 1: Children Services */}
                      <div
                        onClick={() => handleNavClick('children-ministry')}
                        className="group bg-white rounded-2xl p-4 border border-stone-200/80 hover:border-[#ef5a20]/60 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden text-left"
                      >
                        {/* Sunburst radial tick marks SVG watermark matching Vision & Mission page */}
                        <svg
                          className="absolute -top-3 -right-3 w-20 h-20 text-[#ef5a20]/30 pointer-events-none z-0 select-none"
                          viewBox="0 0 100 100"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M 12 58 A 44 44 0 0 1 58 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeDasharray="2 3"
                            opacity="0.5"
                          />
                          <line x1="8" y1="58" x2="0" y2="58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="11" y1="48" x2="3" y2="45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="15" y1="39" x2="8" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="21" y1="31" x2="15" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="28" y1="24" x2="23" y2="17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="37" y1="18" x2="33" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="47" y1="14" x2="45" y2="5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="58" y1="12" x2="58" y2="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>

                        <div className="space-y-3 relative z-10">
                          {/* Image Thumbnail with charity-image-shape */}
                          <div className="relative h-36 w-full charity-image-shape overflow-hidden bg-stone-100 border border-stone-200/80 shadow-sm">
                            <img
                              src="https://i.postimg.cc/bwdc13G6/Whats-App-Image-2026-10-22-at-5-13-54-PM.jpg"
                              alt="Children in Community Bible Hubs"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80';
                              }}
                            />
                            <div className="absolute top-2.5 left-2.5">
                              <span className="text-[9px] font-extrabold uppercase tracking-wider text-white bg-[#000a37]/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                                12,500+ Weekly
                              </span>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#ef5a20]">
                              <Smile className="w-3.5 h-3.5" />
                              <span>Discipleship & Community Care</span>
                            </div>
                            <h4 className="font-['Manrope'] font-bold text-sm text-[#000a37] group-hover:text-[#ef5a20] transition-colors mt-0.5">
                              Children Services
                            </h4>
                            <p className="text-[11px] text-stone-600 leading-snug line-clamp-2 mt-1">
                              Community Bible Hubs, Sunday school teacher mentoring, safe learning spaces, and character formation.
                            </p>
                          </div>
                        </div>

                        <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#000a37] group-hover:text-[#ef5a20] transition-colors relative z-10">
                          <span>Explore Children Services</span>
                          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Card 2: Education Fund */}
                      <div
                        onClick={() => handleNavClick('children-ministry')}
                        className="group bg-white rounded-2xl p-4 border border-stone-200/80 hover:border-[#ef5a20]/60 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden text-left"
                      >
                        {/* Sunburst radial tick marks SVG watermark matching Vision & Mission page */}
                        <svg
                          className="absolute -top-3 -right-3 w-20 h-20 text-[#ef5a20]/30 pointer-events-none z-0 select-none"
                          viewBox="0 0 100 100"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M 12 58 A 44 44 0 0 1 58 12"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeDasharray="2 3"
                            opacity="0.5"
                          />
                          <line x1="8" y1="58" x2="0" y2="58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="11" y1="48" x2="3" y2="45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="15" y1="39" x2="8" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="21" y1="31" x2="15" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="28" y1="24" x2="23" y2="17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="37" y1="18" x2="33" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="47" y1="14" x2="45" y2="5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="58" y1="12" x2="58" y2="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>

                        <div className="space-y-3 relative z-10">
                          {/* Image Thumbnail with charity-image-shape */}
                          <div className="relative h-36 w-full charity-image-shape overflow-hidden bg-stone-100 border border-stone-200/80 shadow-sm">
                            <img
                              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                              alt="Vulnerable children receiving educational support"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2.5 left-2.5">
                              <span className="text-[9px] font-extrabold uppercase tracking-wider text-white bg-[#ef5a20]/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                                Tuition & Grants
                              </span>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#ef5a20]">
                              <GraduationCap className="w-3.5 h-3.5" />
                              <span>Academic Sponsorship & Aid</span>
                            </div>
                            <h4 className="font-['Manrope'] font-bold text-sm text-[#000a37] group-hover:text-[#ef5a20] transition-colors mt-0.5">
                              Education Fund
                            </h4>
                            <p className="text-[11px] text-stone-600 leading-snug line-clamp-2 mt-1">
                              School fee grants for orphans and vulnerable learners, application review, and tracking portal.
                            </p>
                          </div>
                        </div>

                        <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#000a37] group-hover:text-[#ef5a20] transition-colors relative z-10">
                          <span>View Education Fund & Apply</span>
                          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Strip: Raising Hope Curriculum */}
                    <div className="bg-stone-50 px-6 py-2.5 border-t border-stone-200/80 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-2 text-stone-600">
                        <span className="font-bold text-[#000a37]">Core Curriculum:</span>
                        <span className="text-stone-500">"Raising Hope" (Connected · Perfected · Directed)</span>
                      </div>
                      <button
                        onClick={() => {
                          navigateTo('program-detail', 'childrens-ministry');
                          setChildrenDropdownOpen(false);
                        }}
                        className="text-[#ef5a20] hover:text-[#d94a14] font-bold cursor-pointer"
                      >
                        Learn About Raising Hope →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('reports')}
              className={`hover:text-[#ef5a20] transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentPage === 'reports' ? 'text-[#ef5a20] border-b-2 border-[#ef5a20]' : ''
              }`}
            >
              Reports
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#ef5a20] transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentPage === 'contact' ? 'text-[#ef5a20] border-b-2 border-[#ef5a20]' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary Action CTA - Rounded Orange Button with Heart Icon */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {currentUser.isAuthenticated && (
              <button
                onClick={() => handleNavClick('cms')}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#000a37] text-[#ef5a20] text-xs font-bold border border-[#ef5a20]/30 hover:bg-[#ef5a20] hover:text-white transition-colors shadow-xs"
                title="Super Admin / Staff CMS Dashboard"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>CMS ({currentUser.role.split(' ')[0]})</span>
              </button>
            )}

            <button
              onClick={() => openDonationModal()}
              className="px-3.5 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-bold text-white bg-[#ef5a20] hover:bg-[#d94a14] active:scale-[0.98] rounded-full transition-all shadow-md shadow-[#ef5a20]/20 whitespace-nowrap shrink-0 uppercase tracking-wider text-center"
            >
              Donate Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg text-[#000a37] hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 px-6 py-6 space-y-2 shadow-xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors ${
                currentPage === 'home'
                  ? 'bg-[#000a37] text-white'
                  : 'text-[#242B33] hover:bg-stone-100'
              }`}
            >
              Home
            </button>

            {/* About Us Mobile Section */}
            <div className="rounded-xl border border-stone-200/80 p-2.5 bg-stone-50/50 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#ef5a20] px-2 py-1">
                About Us
              </div>
              <button
                onClick={() => handleNavClick('ministry-profile')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                  currentPage === 'ministry-profile'
                    ? 'bg-[#000a37] text-white'
                    : 'text-[#000a37] hover:bg-stone-100'
                }`}
              >
                Ministry Profile
              </button>
              <button
                onClick={() => handleNavClick('about-founder')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                  currentPage === 'about-founder'
                    ? 'bg-[#000a37] text-white'
                    : 'text-[#000a37] hover:bg-stone-100'
                }`}
              >
                About the Founder
              </button>
              <button
                onClick={() => handleNavClick('vision-mission-values')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                  currentPage === 'vision-mission-values'
                    ? 'bg-[#000a37] text-white'
                    : 'text-[#000a37] hover:bg-stone-100'
                }`}
              >
                Vision, Mission and Core Values
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`block w-full text-left py-1.5 px-3 rounded-lg text-[11px] transition-colors ${
                  currentPage === 'about'
                    ? 'text-[#ef5a20] font-bold'
                    : 'text-stone-500 hover:text-[#000a37]'
                }`}
              >
                Overview & Story →
              </button>
            </div>

            <button
              onClick={() => handleNavClick('programs')}
              className={`block w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors ${
                currentPage === 'programs' || currentPage === 'program-detail'
                  ? 'bg-[#000a37] text-white'
                  : 'text-[#242B33] hover:bg-stone-100'
              }`}
            >
              Our Programs
            </button>

            {/* Children's Ministry Mobile Section */}
            <div className="rounded-2xl border border-stone-200/90 p-3 bg-stone-50/70 space-y-2.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#ef5a20]">
                  Children's Ministry
                </span>
                <span className="text-[10px] font-semibold text-stone-500">
                  Services & Fund
                </span>
              </div>

              {/* Children Services Card */}
              <button
                onClick={() => handleNavClick('children-ministry')}
                className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center gap-3 cursor-pointer ${
                  currentPage === 'children-ministry' || currentPage === 'children-services'
                    ? 'bg-[#000a37] text-white border-[#000a37] shadow-sm'
                    : 'bg-white hover:bg-stone-50 text-[#000a37] border-stone-200/80 shadow-2xs'
                }`}
              >
                <div className="w-16 h-14 charity-image-shape overflow-hidden shrink-0 bg-stone-200 border border-stone-300/60">
                  <img
                    src="https://i.postimg.cc/bwdc13G6/Whats-App-Image-2026-10-22-at-5-13-54-PM.jpg"
                    alt="Children Services"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#ef5a20] bg-[#ef5a20]/10 px-1.5 py-0.5 rounded">
                      Discipleship
                    </span>
                    <span className="text-[9px] text-stone-500 font-medium">12,500+ Weekly</span>
                  </div>
                  <div className="font-bold text-xs truncate mt-0.5">
                    Children Services
                  </div>
                  <p className={`text-[11px] line-clamp-1 ${currentPage === 'children-ministry' || currentPage === 'children-services' ? 'text-stone-300' : 'text-stone-500'}`}>
                    Bible Hubs, teacher training & child care
                  </p>
                </div>
              </button>

              {/* Education Fund Card */}
              <button
                onClick={() => handleNavClick('children-ministry')}
                className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center gap-3 cursor-pointer ${
                  currentPage === 'education-fund'
                    ? 'bg-[#000a37] text-white border-[#000a37] shadow-sm'
                    : 'bg-white hover:bg-stone-50 text-[#000a37] border-stone-200/80 shadow-2xs'
                }`}
              >
                <div className="w-16 h-14 charity-image-shape overflow-hidden shrink-0 bg-stone-200 border border-stone-300/60">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                    alt="Education Fund"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#ef5a20] bg-[#ef5a20]/10 px-1.5 py-0.5 rounded">
                      Sponsorship
                    </span>
                    <span className="text-[9px] text-stone-500 font-medium">Tuition & Grants</span>
                  </div>
                  <div className="font-bold text-xs truncate mt-0.5">
                    Education Fund
                  </div>
                  <p className={`text-[11px] line-clamp-1 ${currentPage === 'education-fund' ? 'text-stone-300' : 'text-stone-500'}`}>
                    School fee grants for vulnerable learners
                  </p>
                </div>
              </button>

              {/* Raising Hope link */}
              <button
                onClick={() => handleNavClick('program-detail', 'childrens-ministry')}
                className="w-full text-left py-1.5 px-2 text-[11px] text-[#000a37] font-semibold hover:text-[#ef5a20] transition-colors cursor-pointer"
              >
                Raising Hope Program Overview & Curriculum →
              </button>
            </div>

            <button
              onClick={() => handleNavClick('reports')}
              className={`block w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors ${
                currentPage === 'reports'
                  ? 'bg-[#000a37] text-white'
                  : 'text-[#242B33] hover:bg-stone-100'
              }`}
            >
              Reports
            </button>

            <button
              onClick={() => handleNavClick('get-involved')}
              className={`block w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors ${
                currentPage === 'get-involved'
                  ? 'bg-[#000a37] text-white'
                  : 'text-[#242B33] hover:bg-stone-100'
              }`}
            >
              Get Involved
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`block w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors ${
                currentPage === 'contact'
                  ? 'bg-[#000a37] text-white'
                  : 'text-[#242B33] hover:bg-stone-100'
              }`}
            >
              Contact
            </button>

            <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDonationModal();
                }}
                className="w-full py-3 px-4 rounded-full bg-[#ef5a20] text-white font-bold text-xs uppercase tracking-wider shadow-md text-center"
              >
                Donate Now
              </button>

              {currentUser.isAuthenticated && (
                <button
                  onClick={() => handleNavClick('cms')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#000a37] text-[#ef5a20] text-xs font-semibold"
                >
                  <Shield className="w-3.5 h-3.5 text-[#ef5a20]" />
                  <span>Access Staff CMS ({currentUser.role.split(' ')[0]})</span>
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
