import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { PageId } from '../types';
import { Heart, Menu, X, Shield, Phone, ChevronDown, Search, Lock } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentPage,
    navigateTo,
    openDonationModal,
    currentUser,
    contactInfo,
    openSuperAdminModal
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

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
    { label: 'Children Services', page: 'children-services' },
    { label: 'Education Fund', page: 'education-fund' },
    { label: 'Reports', page: 'reports' },
    { label: 'Events', page: 'events' },
    { label: 'Get Involved', page: 'get-involved' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageId) => {
    navigateTo(page);
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  return (
    <>
      {/* Main Top Navigation */}
      <header className="header-mount sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/90 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Zone 1: Logo Wordmark with 5-consecutive-clicks Super Admin CMS trigger */}
          <div className="relative">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2459A9] rounded-xl p-1 transition-all active:scale-95"
              title="Mercy Link Foundation Africa (Click 5 consecutive times to open Super Admin CMS Login)"
              aria-label="Mercy Link Foundation Africa Logo"
            >
              {/* Official Emblem - Prominent & Visible */}
              <div
                className={`w-13 h-13 sm:w-15 sm:h-15 rounded-full p-0.5 bg-white border-2 ${
                  clickCount > 1
                    ? 'border-[#E98A32] ring-4 ring-[#E98A32]/60 scale-105 shadow-lg shadow-amber-500/40'
                    : 'border-[#E98A32] shadow-md'
                } flex items-center justify-center shrink-0 relative overflow-hidden group-hover:scale-105 transition-all`}
              >
                <img
                  src="https://i.postimg.cc/nV7TcH8r/Gemini-Generated-Image.jpg"
                  alt="Mercy Link Foundation Africa Logo"
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/logo.jpg';
                  }}
                />
              </div>

              <div className="flex flex-col whitespace-nowrap shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-['Manrope'] font-extrabold text-xl sm:text-2xl tracking-tight text-[#17324D] leading-none">
                    Mercy Link
                  </span>
                  {currentUser.isAuthenticated && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      CMS Active
                    </span>
                  )}
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-[#E98A32] tracking-wider uppercase mt-1">
                  Foundation Africa
                </span>
              </div>
            </button>

            {/* Subtle, non-intrusive feedback on consecutive clicks */}
            {showFeedback && clickCount >= 2 && (
              <div className="absolute -bottom-6 left-0 bg-[#17324D] text-[#E98A32] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-[#E98A32]/40 flex items-center gap-1 animate-in fade-in zoom-in duration-150 z-50 pointer-events-none whitespace-nowrap">
                <Lock className="w-2.5 h-2.5 text-[#E98A32]" />
                <span>Super Admin: {clickCount}/5 clicks</span>
              </div>
            )}
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-bold text-[#242B33]/80">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-[#E98A32] transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentPage === 'home' ? 'text-[#E98A32] border-b-2 border-[#E98A32]' : ''
              }`}
            >
              Home
            </button>

            {/* Programs Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleNavClick('programs')}
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                className={`flex items-center gap-1 hover:text-[#E98A32] transition-colors whitespace-nowrap shrink-0 pb-1 ${
                  currentPage === 'programs' || currentPage === 'program-detail'
                    ? 'text-[#E98A32] border-b-2 border-[#E98A32]'
                    : ''
                }`}
              >
                <span>Ministries</span>
                <ChevronDown className="w-3 h-3 text-[#687381]" />
              </button>

              {programsDropdownOpen && (
                <div
                  onMouseLeave={() => setProgramsDropdownOpen(false)}
                  className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-stone-200 py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1"
                >
                  <button
                    onClick={() => handleNavClick('programs')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-[#17324D] hover:bg-stone-50 border-b border-stone-100 uppercase"
                  >
                    All 7 Ministry Programs →
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('program-detail', 'disability-ministry');
                      setProgramsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs normal-case text-stone-700 hover:bg-stone-50"
                  >
                    Disability Ministry
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('program-detail', 'prison-ministry');
                      setProgramsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs normal-case text-stone-700 hover:bg-stone-50"
                  >
                    Prison Ministry
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('program-detail', 'church-planters');
                      setProgramsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs normal-case text-stone-700 hover:bg-stone-50"
                  >
                    Church Planter Training
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('program-detail', 'family-foundations');
                      setProgramsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs normal-case text-stone-700 hover:bg-stone-50"
                  >
                    Family Foundations
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('program-detail', 'childrens-ministry');
                      setProgramsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs normal-case text-stone-700 hover:bg-stone-50"
                  >
                    Children's Ministry
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('program-detail', 'better-life-program');
                      setProgramsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs normal-case text-stone-700 hover:bg-stone-50"
                  >
                    The Better Life Program
                  </button>
                </div>
              )}
            </div>

            {/* About Us Dropdown Menu */}
            <div
              className="relative py-2"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => setAboutDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1 hover:text-[#E98A32] transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer ${
                  currentPage === 'about' ||
                  currentPage === 'ministry-profile' ||
                  currentPage === 'about-founder' ||
                  currentPage === 'vision-mission-values'
                    ? 'text-[#E98A32] border-b-2 border-[#E98A32]'
                    : ''
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3 h-3 text-[#687381] transition-transform ${aboutDropdownOpen ? 'rotate-180 text-[#E98A32]' : ''}`} />
              </button>

              {aboutDropdownOpen && (
                <div
                  className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-stone-200 py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-1"
                >
                  <button
                    onClick={() => {
                      navigateTo('ministry-profile');
                      setAboutDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs normal-case hover:bg-stone-50 font-bold transition-colors ${
                      currentPage === 'ministry-profile' ? 'text-[#E98A32] bg-stone-50' : 'text-[#17324D]'
                    }`}
                  >
                    Ministry Profile
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('about-founder');
                      setAboutDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs normal-case hover:bg-stone-50 font-bold transition-colors ${
                      currentPage === 'about-founder' ? 'text-[#E98A32] bg-stone-50' : 'text-[#17324D]'
                    }`}
                  >
                    About the Founder
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('vision-mission-values');
                      setAboutDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs normal-case hover:bg-stone-50 font-bold transition-colors ${
                      currentPage === 'vision-mission-values' ? 'text-[#E98A32] bg-stone-50' : 'text-[#17324D]'
                    }`}
                  >
                    Vision, Mission and Core Values
                  </button>
                  <div className="border-t border-stone-100 my-1" />
                  <button
                    onClick={() => {
                      navigateTo('about');
                      setAboutDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-[11px] normal-case hover:bg-stone-50 transition-colors ${
                      currentPage === 'about' ? 'text-[#E98A32] font-semibold' : 'text-stone-500 hover:text-[#17324D]'
                    }`}
                  >
                    Our Story & Overview →
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('children-services')}
              className={`hover:text-[#E98A32] transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentPage === 'children-services' ? 'text-[#E98A32] border-b-2 border-[#E98A32]' : ''
              }`}
            >
              Children Services
            </button>

            <button
              onClick={() => handleNavClick('education-fund')}
              className={`hover:text-[#E98A32] transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentPage === 'education-fund' ? 'text-[#E98A32] border-b-2 border-[#E98A32]' : ''
              }`}
            >
              Education Fund
            </button>

            <button
              onClick={() => handleNavClick('reports')}
              className={`hover:text-[#E98A32] transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentPage === 'reports' ? 'text-[#E98A32] border-b-2 border-[#E98A32]' : ''
              }`}
            >
              Reports
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#E98A32] transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentPage === 'contact' ? 'text-[#E98A32] border-b-2 border-[#E98A32]' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary Action CTA - Rounded Orange Button with Heart Icon */}
          <div className="flex items-center gap-3 shrink-0">
            {currentUser.isAuthenticated && (
              <button
                onClick={() => handleNavClick('cms')}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#17324D] text-[#E98A32] text-xs font-bold border border-[#E98A32]/30 hover:bg-[#2459A9] hover:text-white transition-colors shadow-xs"
                title="Super Admin / Staff CMS Dashboard"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>CMS ({currentUser.role.split(' ')[0]})</span>
              </button>
            )}

            <button
              onClick={() => openDonationModal()}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#E98A32] hover:bg-[#d47926] active:scale-[0.98] rounded-full transition-all shadow-md shadow-orange-500/20 whitespace-nowrap shrink-0 uppercase tracking-wider"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donate Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#17324D] hover:bg-stone-100 focus:outline-none"
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
                  ? 'bg-[#17324D] text-white'
                  : 'text-[#242B33] hover:bg-stone-100'
              }`}
            >
              Home
            </button>

            {/* About Us Mobile Section */}
            <div className="rounded-xl border border-stone-200/80 p-2.5 bg-stone-50/50 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#E98A32] px-2 py-1">
                About Us
              </div>
              <button
                onClick={() => handleNavClick('ministry-profile')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                  currentPage === 'ministry-profile'
                    ? 'bg-[#17324D] text-white'
                    : 'text-[#17324D] hover:bg-stone-100'
                }`}
              >
                Ministry Profile
              </button>
              <button
                onClick={() => handleNavClick('about-founder')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                  currentPage === 'about-founder'
                    ? 'bg-[#17324D] text-white'
                    : 'text-[#17324D] hover:bg-stone-100'
                }`}
              >
                About the Founder
              </button>
              <button
                onClick={() => handleNavClick('vision-mission-values')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-semibold transition-colors ${
                  currentPage === 'vision-mission-values'
                    ? 'bg-[#17324D] text-white'
                    : 'text-[#17324D] hover:bg-stone-100'
                }`}
              >
                Vision, Mission and Core Values
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`block w-full text-left py-1.5 px-3 rounded-lg text-[11px] transition-colors ${
                  currentPage === 'about'
                    ? 'text-[#E98A32] font-bold'
                    : 'text-stone-500 hover:text-[#17324D]'
                }`}
              >
                Overview & Story →
              </button>
            </div>

            <button
              onClick={() => handleNavClick('programs')}
              className={`block w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors ${
                currentPage === 'programs' || currentPage === 'program-detail'
                  ? 'bg-[#17324D] text-white'
                  : 'text-[#242B33] hover:bg-stone-100'
              }`}
            >
              All 7 Ministry Programs
            </button>

            <button
              onClick={() => handleNavClick('children-services')}
              className={`block w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors ${
                currentPage === 'children-services'
                  ? 'bg-[#17324D] text-white'
                  : 'text-[#242B33] hover:bg-stone-100'
              }`}
            >
              Children Services
            </button>

            <button
              onClick={() => handleNavClick('education-fund')}
              className={`block w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors ${
                currentPage === 'education-fund'
                  ? 'bg-[#17324D] text-white'
                  : 'text-[#242B33] hover:bg-stone-100'
              }`}
            >
              Education Fund
            </button>

            <button
              onClick={() => handleNavClick('reports')}
              className={`block w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors ${
                currentPage === 'reports'
                  ? 'bg-[#17324D] text-white'
                  : 'text-[#242B33] hover:bg-stone-100'
              }`}
            >
              Reports
            </button>

            <button
              onClick={() => handleNavClick('events')}
              className={`block w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors ${
                currentPage === 'events'
                  ? 'bg-[#17324D] text-white'
                  : 'text-[#242B33] hover:bg-stone-100'
              }`}
            >
              Events
            </button>

            <button
              onClick={() => handleNavClick('get-involved')}
              className={`block w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors ${
                currentPage === 'get-involved'
                  ? 'bg-[#17324D] text-white'
                  : 'text-[#242B33] hover:bg-stone-100'
              }`}
            >
              Get Involved
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`block w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors ${
                currentPage === 'contact'
                  ? 'bg-[#17324D] text-white'
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
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#E98A32] text-white font-bold text-xs uppercase tracking-wider shadow-md"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate Now</span>
              </button>

              {currentUser.isAuthenticated && (
                <button
                  onClick={() => handleNavClick('cms')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#17324D] text-[#E98A32] text-xs font-semibold"
                >
                  <Shield className="w-3.5 h-3.5 text-[#E98A32]" />
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
