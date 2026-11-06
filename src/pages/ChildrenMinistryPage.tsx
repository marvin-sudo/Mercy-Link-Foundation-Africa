import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Heart,
  BookOpen,
  ShieldCheck,
  Users,
  Smile,
  GraduationCap,
  Sparkles,
  Send,
  CheckCircle2,
  Calendar,
  Search,
  AlertCircle,
  HelpCircle,
  Clock,
  Layers,
  MapPin,
  ChevronRight
} from 'lucide-react';

export const ChildrenMinistryPage: React.FC = () => {
  const {
    openDonationModal,
    addEnquiry,
    educationApplications,
    addEducationApplication
  } = useApp();

  // Active Tab: 'all' | 'services' | 'education' | 'curriculum'
  const [activeTab, setActiveTab] = useState<'all' | 'services' | 'education' | 'curriculum'>('all');

  // Children Services Inquiry Form State
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [childAge, setChildAge] = useState('');
  const [district, setDistrict] = useState('');
  const [inquiryType, setInquiryType] = useState('Community Bible Hub Enrollment');
  const [serviceMessage, setServiceMessage] = useState('');
  const [servicesSubmittedId, setServicesSubmittedId] = useState<string | null>(null);
  const [isSubmittingService, setIsSubmittingService] = useState(false);

  // Education Fund Application Form State
  const [studentName, setStudentName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('Female');
  const [eduDistrict, setEduDistrict] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [currentLevel, setCurrentLevel] = useState('Primary 5');
  const [guardianName, setGuardianName] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');
  const [annualFeeNeedUGX, setAnnualFeeNeedUGX] = useState<string>('600000');
  const [reasonForApplication, setReasonForApplication] = useState('');
  const [submittedAppNumber, setSubmittedAppNumber] = useState<string | null>(null);
  const [isSubmittingEdu, setIsSubmittingEdu] = useState(false);

  // Education Status Lookup State
  const [lookupQuery, setLookupQuery] = useState('');
  const [lookupResult, setLookupResult] = useState<(typeof educationApplications)[0] | null | 'not_found'>(null);

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !parentEmail) return;

    setIsSubmittingService(true);
    try {
      const id = await addEnquiry({
        type: 'general',
        fullName: parentName,
        email: parentEmail,
        phone: parentPhone,
        programInterest: `Children Services: ${inquiryType} (Age: ${childAge}, District: ${district})`,
        message: serviceMessage || `Inquiry regarding ${inquiryType} for a child in ${district}.`
      });
      setServicesSubmittedId(id);
    } finally {
      setIsSubmittingService(false);
    }
  };

  const handleEducationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !guardianName || !guardianPhone || !schoolName) return;

    setIsSubmittingEdu(true);
    try {
      const appNum = await addEducationApplication({
        studentName,
        dateOfBirth: dateOfBirth || '2012-01-01',
        gender,
        district: eduDistrict || 'Kampala',
        schoolName,
        currentLevel,
        guardianName,
        guardianPhone,
        annualFeeNeedUGX: parseFloat(annualFeeNeedUGX) || 500000,
        reasonForApplication
      });
      setSubmittedAppNumber(appNum);
    } finally {
      setIsSubmittingEdu(false);
    }
  };

  const handleStatusLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupQuery.trim()) return;
    const found = educationApplications.find(
      (a) => a.applicationNumber.toLowerCase() === lookupQuery.trim().toLowerCase()
    );
    setLookupResult(found || 'not_found');
  };

  const scrollToSection = (id: string, tab: 'all' | 'services' | 'education' | 'curriculum') => {
    setActiveTab(tab);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <div className="space-y-10 sm:space-y-14 lg:space-y-16 pb-16 bg-[#FAF9F6]">
      {/* =========================================================================
          HERO SECTION - Full Width with Background Photography & 50% Navy Blue Overlay
          ========================================================================= */}
      <section className="reveal-up w-full relative overflow-hidden bg-[#000a37] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 shadow-md border-b border-white/10">
        {/* Authentic Background Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/bwdc13G6/Whats-App-Image-2026-10-22-at-5-13-54-PM.jpg"
            alt="Children in community Bible hubs across Uganda"
            className="reveal-image absolute inset-0 w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80';
            }}
          />
          {/* 50% Opacity Navy Blue Overlay (#000a37) */}
          <div className="absolute inset-0 bg-[#000a37]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ef5a20]">
            <span>Children's Ministry</span>
            <span aria-hidden="true">·</span>
            <span>Children Services & Education Fund</span>
            <span aria-hidden="true">·</span>
            <span>Uganda</span>
          </div>

          <h1 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Children's Ministry: Services & Education Fund
          </h1>

          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-3xl font-['Plus_Jakarta_Sans']">
            Nurturing young hearts in Christ, instilling godly character through community Bible hubs, and securing educational futures with tuition grants for vulnerable children across Uganda.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={() => openDonationModal("Children's Ministry & Education Fund")}
              className="interactive-button px-6 py-3.5 bg-[#ef5a20] hover:bg-[#d94a14] text-white rounded-full text-xs font-extrabold uppercase tracking-widest transition-all shadow-md active:scale-95 cursor-pointer"
            >
              SUPPORT CHILDREN'S MINISTRY
            </button>

            <button
              onClick={() => scrollToSection('education-fund-section', 'education')}
              className="interactive-button px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-xs text-white rounded-full text-xs font-bold uppercase tracking-wider border border-white/25 transition-all cursor-pointer"
            >
              APPLY FOR EDUCATION FUND
            </button>

            <button
              onClick={() => scrollToSection('children-services-section', 'services')}
              className="interactive-button px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-xs text-stone-200 hover:text-white rounded-full text-xs font-bold uppercase tracking-wider border border-white/15 transition-all cursor-pointer"
            >
              EXPLORE CHILDREN SERVICES
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE NAV PILL TABS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-1.5 sm:p-2 border border-stone-200/90 shadow-xs flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#000a37] text-white shadow-xs'
                  : 'text-stone-600 hover:text-[#000a37] hover:bg-stone-50'
              }`}
            >
              Complete Overview
            </button>
            <button
              onClick={() => scrollToSection('children-services-section', 'services')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'services'
                  ? 'bg-[#ef5a20] text-white shadow-xs'
                  : 'text-stone-600 hover:text-[#ef5a20] hover:bg-stone-50'
              }`}
            >
              Children Services & Bible Hubs
            </button>
            <button
              onClick={() => scrollToSection('education-fund-section', 'education')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'education'
                  ? 'bg-[#ef5a20] text-white shadow-xs'
                  : 'text-stone-600 hover:text-[#ef5a20] hover:bg-stone-50'
              }`}
            >
              Education Fund & Scholarships
            </button>
            <button
              onClick={() => scrollToSection('raising-hope-section', 'curriculum')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'curriculum'
                  ? 'bg-[#000a37] text-white shadow-xs'
                  : 'text-stone-600 hover:text-[#000a37] hover:bg-stone-50'
              }`}
            >
              Raising Hope Curriculum
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 pr-3 text-xs font-semibold text-stone-500 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>12,500+ Children Enrolled Weekly</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOUNDATION & TRUTH STATEMENT
          ========================================================================= */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50/70 border border-amber-200/80 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#ef5a20] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
            2007
          </div>
          <div className="space-y-1.5 text-xs text-stone-700 leading-relaxed">
            <div className="flex items-center gap-2">
              <h3 className="font-['Manrope'] font-bold text-sm text-[#000a37]">
                Our Foundation: The Bulange Mengo Neighborhood Bible Club
              </h3>
              <span className="bg-[#ef5a20]/10 text-[#ef5a20] text-[10px] font-bold px-2 py-0.5 rounded-full">
                Community Discipleship
              </span>
            </div>
            <p>
              Mercy Link Foundation Africa began its journey in 2007 as a grassroots children's Bible club in Bulange Mengo, Kampala. We operate through community hubs, local churches, and partnered schools. <em>Important:</em> Mercy Link is a community-based family ministry and does <strong>not</strong> operate a closed residential orphanage or institutional home. We firmly believe children thrive best when grounded in family care, local church fellowship, and supported neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PART 1: CHILDREN SERVICES
          (With 3-Image Organic Asymmetric Collage and Sunburst SVG Watermark like Mission & Vision Page)
          ========================================================================= */}
      <section id="children-services-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] p-4 sm:p-8 lg:p-14 border border-stone-200/90 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: 3-Photo Organic Collage with Sunburst SVG Watermark */}
            <div className="lg:col-span-6 reveal-left">
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                {/* Sunburst radial tick marks SVG watermark matching Mission & Vision page */}
                <svg
                  className="absolute -top-3 -left-3 sm:-top-7 sm:-left-7 w-20 h-20 sm:w-36 sm:h-36 text-[#ef5a20]/60 pointer-events-none z-0 select-none"
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

                {/* 3-Photo Grid */}
                <div className="relative z-10 grid grid-cols-12 gap-2.5 sm:gap-4 items-stretch">
                  {/* Left tall card */}
                  <div className="col-span-6 relative h-[240px] sm:h-[360px] lg:h-[390px] charity-image-shape overflow-hidden shadow-[0_15px_30px_rgba(23,50,77,0.14)] border border-stone-200/60 bg-stone-100 group">
                    <img
                      src="https://i.postimg.cc/bwdc13G6/Whats-App-Image-2026-10-22-at-5-13-54-PM.jpg"
                      alt="Children learning in Ugandan community Bible hub"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000a37]/70 via-transparent to-transparent flex items-end p-3 sm:p-4">
                      <div>
                        <span className="text-[9px] sm:text-[10px] font-extrabold text-[#ef5a20] uppercase tracking-wider block">
                          Community Hubs
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">
                          12,500+ Weekly Children
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right stacked cards */}
                  <div className="col-span-6 flex flex-col gap-2.5 sm:gap-4 justify-between">
                    {/* Top Right card */}
                    <div className="relative h-[114px] sm:h-[172px] lg:h-[187px] charity-image-shape overflow-hidden shadow-[0_12px_24px_rgba(23,50,77,0.1)] border border-stone-200/60 bg-stone-100 group">
                      <img
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                        alt="Children receiving mentorship and care"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                      />
                      <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5">
                        <span className="text-[8px] sm:text-[9px] font-bold text-white bg-[#000a37]/80 backdrop-blur-xs px-2 py-0.5 rounded-full">
                          Teacher Mentoring
                        </span>
                      </div>
                    </div>

                    {/* Bottom Right card */}
                    <div className="relative h-[114px] sm:h-[172px] lg:h-[187px] charity-image-shape overflow-hidden shadow-[0_12px_24px_rgba(23,50,77,0.1)] border border-stone-200/60 bg-stone-100 group">
                      <img
                        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
                        alt="Handicapped school care and discipleship supplies"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                      />
                      <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5">
                        <span className="text-[8px] sm:text-[9px] font-bold text-white bg-[#ef5a20]/90 backdrop-blur-xs px-2 py-0.5 rounded-full">
                          Disability Care
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Information & Children Services Overview */}
            <div className="lg:col-span-6 reveal-right space-y-5">
              <span className="text-[#ef5a20] font-bold text-xs sm:text-sm tracking-widest uppercase block">
                Discipleship & Community Care
              </span>

              <h2 className="font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl text-[#000a37] tracking-tight leading-[1.12]">
                Children Services
              </h2>

              <p className="font-['Playfair_Display'] text-base sm:text-lg text-[#000a37] font-medium leading-relaxed italic border-l-2 border-[#ef5a20] pl-4">
                "Whoever welcomes one of these little children in my name welcomes me." — Mark 9:37
              </p>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Mercy Link's Children Services provides holistic spiritual discipleship, moral formation, and protective care for children across 70+ Ugandan districts. Rather than separating children into orphanages, we empower neighborhood hubs and equip local Sunday school leaders with standardized, culturally relevant teaching tools.
              </p>

              {/* Core Feature Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700 font-semibold pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ef5a20] shrink-0" />
                  <span>Weekly Community Bible Hubs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ef5a20] shrink-0" />
                  <span>Sunday School Teacher Mentoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ef5a20] shrink-0" />
                  <span>Kampala Handicapped School Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ef5a20] shrink-0" />
                  <span>Child Protection & Safe Spaces</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToSection('inquiry-form-section', 'services')}
                  className="interactive-button px-7 py-3.5 bg-[#ef5a20] hover:bg-[#d94a14] text-white rounded-full text-xs font-extrabold uppercase tracking-widest transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  ENROLL A CHILD OR INQUIRE
                </button>
                <button
                  onClick={() => openDonationModal("Children's Ministry")}
                  className="interactive-button px-7 py-3.5 bg-[#000a37] hover:bg-[#00135c] text-white rounded-full text-xs font-extrabold uppercase tracking-widest transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  SPONSOR BIBLE MATERIALS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY CHILDREN SERVICES PILLARS (3 Cards)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-[#ef5a20]/60 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-stone-200 flex items-center justify-center text-[#ef5a20]">
              <Users className="w-5 h-5 text-[#ef5a20]" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#000a37]">
              Community Bible Hubs
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Decentralized, grassroots gatherings where children sing, hear Scripture in their heart language, and receive personal care and guidance from trusted mentors.
            </p>
            <div className="pt-2 text-[11px] font-bold text-[#ef5a20]">
              70+ Districts Across Uganda
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-[#ef5a20]/60 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-stone-200 flex items-center justify-center text-[#ef5a20]">
              <Sparkles className="w-5 h-5 text-[#ef5a20]" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#000a37]">
              Teacher Training & Mentoring
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Equipping indigenous Sunday school workers with practical storytelling skills, trauma-informed care methods, and child safeguarding policies.
            </p>
            <div className="pt-2 text-[11px] font-bold text-[#ef5a20]">
              350+ Leaders Certified Annually
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-[#ef5a20]/60 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-stone-200 flex items-center justify-center text-[#ef5a20]">
              <Heart className="w-5 h-5 text-[#ef5a20]" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#000a37]">
              Disability Care & Inclusion
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dedicated weekly spiritual programs and nutritional aid at Kampala School for the Handicapped, affirming every child’s divine worth and purpose.
            </p>
            <div className="pt-2 text-[11px] font-bold text-[#ef5a20]">
              Active Institutional Partnership
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PART 2: EDUCATION FUND
          (With Matching Editorial Organic Collage Design, like Mission & Vision Page)
          ========================================================================= */}
      <section id="education-fund-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] p-4 sm:p-8 lg:p-14 border border-stone-200/90 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column (Desktop order 1, mobile order 2): Information & Education Fund Details */}
            <div className="lg:col-span-6 order-2 lg:order-1 reveal-left space-y-5">
              <span className="text-[#ef5a20] font-bold text-xs sm:text-sm tracking-widest uppercase block">
                Academic Stewardship & Aid
              </span>

              <h2 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000a37] tracking-tight leading-[1.12]">
                Mercy Link Education Fund
              </h2>

              <p className="font-['Playfair_Display'] text-sm sm:text-base lg:text-lg text-[#000a37] font-medium leading-relaxed italic border-l-2 border-[#ef5a20] pl-3 sm:pl-4">
                "Education is the most powerful weapon which you can use to change the world."
              </p>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Poverty should never lock a promising child out of the classroom. The Mercy Link Education Fund provides targeted tuition grants, scholastic uniforms, textbooks, and mentoring for vulnerable orphans, pastor households, and students with disabilities in Uganda.
              </p>

              {/* Education Fund Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700 font-semibold pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ef5a20] shrink-0" />
                  <span>Tuition & Exam Fee Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ef5a20] shrink-0" />
                  <span>School Uniforms & Textbooks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ef5a20] shrink-0" />
                  <span>Academic Mentorship Follow-up</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ef5a20] shrink-0" />
                  <span>Direct School Bank Transfers</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToSection('scholarship-application-section', 'education')}
                  className="interactive-button px-6 sm:px-7 py-3 sm:py-3.5 bg-[#ef5a20] hover:bg-[#d94a14] text-white rounded-full text-xs font-extrabold uppercase tracking-widest transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  APPLY FOR TUITION AID
                </button>
                <button
                  onClick={() => scrollToSection('status-lookup-section', 'education')}
                  className="interactive-button px-6 sm:px-7 py-3 sm:py-3.5 bg-[#000a37] hover:bg-[#00135c] text-white rounded-full text-xs font-extrabold uppercase tracking-widest transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  CHECK APPLICATION STATUS
                </button>
              </div>
            </div>

            {/* Right Column (Desktop order 2, mobile order 1): 3-Photo Organic Collage with Sunburst */}
            <div className="lg:col-span-6 order-1 lg:order-2 reveal-right">
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                {/* Sunburst radial tick marks SVG watermark behind top-right of collage */}
                <svg
                  className="absolute -top-3 -right-3 sm:-top-7 sm:-right-7 w-20 h-20 sm:w-36 sm:h-36 text-[#ef5a20]/60 pointer-events-none z-0 select-none"
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

                {/* 3-Photo Grid */}
                <div className="relative z-10 grid grid-cols-12 gap-2.5 sm:gap-4 items-stretch">
                  {/* Left stacked cards */}
                  <div className="col-span-6 flex flex-col gap-2.5 sm:gap-4 justify-between">
                    {/* Top Left card */}
                    <div className="relative h-[114px] sm:h-[172px] lg:h-[187px] charity-image-shape overflow-hidden shadow-[0_12px_24px_rgba(23,50,77,0.1)] border border-stone-200/60 bg-stone-100 group">
                      <img
                        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                        alt="Classroom learning and student scholarship"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                      />
                      <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5">
                        <span className="text-[8px] sm:text-[9px] font-bold text-white bg-[#000a37]/80 backdrop-blur-xs px-2 py-0.5 rounded-full">
                          Primary & Secondary
                        </span>
                      </div>
                    </div>

                    {/* Bottom Left card */}
                    <div className="relative h-[114px] sm:h-[172px] lg:h-[187px] charity-image-shape overflow-hidden shadow-[0_12px_24px_rgba(23,50,77,0.1)] border border-stone-200/60 bg-stone-100 group">
                      <img
                        src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80"
                        alt="Scholastic packages and study books"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                      />
                      <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5">
                        <span className="text-[8px] sm:text-[9px] font-bold text-white bg-[#ef5a20]/90 backdrop-blur-xs px-2 py-0.5 rounded-full">
                          Scholastic Supplies
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right tall card */}
                  <div className="col-span-6 relative h-[240px] sm:h-[360px] lg:h-[390px] charity-image-shape overflow-hidden shadow-[0_15px_30px_rgba(23,50,77,0.14)] border border-stone-200/60 bg-stone-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                      alt="Student supported by Mercy Link Education Fund"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000a37]/70 via-transparent to-transparent flex items-end p-3 sm:p-4">
                      <div>
                        <span className="text-[9px] sm:text-[10px] font-extrabold text-[#ef5a20] uppercase tracking-wider block">
                          Scholarship Impact
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold text-white leading-tight">
                          100% Direct School Tuition Disbursement
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PART 3: THE "RAISING HOPE" 3-MODULE CURRICULUM
          ========================================================================= */}
      <section id="raising-hope-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="reveal-up max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ef5a20]">
            Core Pedagogical Framework
          </span>
          <h2 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl text-[#000a37]">
            The "Raising Hope" Children's Curriculum
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-['Plus_Jakarta_Sans']">
            Born out of the 2013 humanitarian crisis in South Sudan and northern Uganda, our 3-tiered curriculum addresses trauma, identity, and moral purpose through interactive biblical discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Module 1: Connected */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs relative overflow-hidden space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#ef5a20] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/60">
                MODULE 1
              </span>
              <span className="text-[10px] font-semibold text-stone-400">Foundational Stage</span>
            </div>
            <h3 className="font-['Manrope'] font-extrabold text-lg text-[#000a37]">
              CONNECTED
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Focuses on divine relationship, self-worth, and identity in Christ. Helps children understand they are created in God’s image, deeply loved, and secure regardless of difficult external circumstances.
            </p>
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
              <span>Theme: Relationship & Value</span>
              <span className="font-bold text-[#000a37]">12 Core Lessons</span>
            </div>
          </div>

          {/* Module 2: Perfected */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs relative overflow-hidden space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#ef5a20] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/60">
                MODULE 2
              </span>
              <span className="text-[10px] font-semibold text-stone-400">Growth Stage</span>
            </div>
            <h3 className="font-['Manrope'] font-extrabold text-lg text-[#000a37]">
              PERFECTED
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Nurtures Christ-like character, emotional resilience, forgiveness, and moral integrity. Guides children through biblical principles of honesty, peer pressure resistance, and servant leadership.
            </p>
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
              <span>Theme: Character & Transformation</span>
              <span className="font-bold text-[#000a37]">14 Core Lessons</span>
            </div>
          </div>

          {/* Module 3: Directed */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs relative overflow-hidden space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#ef5a20] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/60">
                MODULE 3
              </span>
              <span className="text-[10px] font-semibold text-stone-400">Empowerment Stage</span>
            </div>
            <h3 className="font-['Manrope'] font-extrabold text-lg text-[#000a37]">
              DIRECTED
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Equips older children and youth to become positive agents of change, live with vocational vision, serve their community, and share the message of Christ with their peers.
            </p>
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
              <span>Theme: Purpose & Leadership</span>
              <span className="font-bold text-[#000a37]">12 Core Lessons</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PART 4: INTERACTIVE FORMS
          (1) Children Services Enrollment Inquiry
          (2) Education Fund Scholarship Application
          (3) Application Status Search Tool
          ========================================================================= */}
      <section id="inquiry-form-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form 1: Children Services Hub Inquiry */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
            <div className="space-y-1.5 border-b border-stone-100 pb-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ef5a20]">
                <Smile className="w-4 h-4 text-[#ef5a20]" />
                <span>Hub Enrollment & Partnership</span>
              </div>
              <h3 className="font-['Playfair_Display'] font-extrabold text-xl text-[#000a37]">
                Children Services Inquiry Form
              </h3>
              <p className="text-xs text-stone-500">
                Register a child for a neighborhood Bible club or invite Mercy Link to train Sunday school teachers in your local church.
              </p>
            </div>

            {servicesSubmittedId ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl space-y-3 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-sm text-[#000a37]">Inquiry Successfully Received</h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  Thank you! Our Children's Ministry coordinator will reach out via email or phone within 2 business days. Reference ID: <strong className="font-mono text-[#000a37]">{servicesSubmittedId}</strong>.
                </p>
                <button
                  onClick={() => {
                    setServicesSubmittedId(null);
                    setParentName('');
                    setParentEmail('');
                    setParentPhone('');
                    setServiceMessage('');
                  }}
                  className="mt-3 px-5 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleServiceSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    Parent / Guardian or Pastor Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Sarah Namubiru"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={parentEmail}
                      onChange={(e) => setParentEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                      placeholder="+256 700 123 456"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      District / Region *
                    </label>
                    <input
                      type="text"
                      required
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder="e.g. Kampala, Gulu, Jinja"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      Child Age / Number of Children
                    </label>
                    <input
                      type="text"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      placeholder="e.g. 8 years (or 35 Sunday school pupils)"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    Interest Area
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                  >
                    <option value="Community Bible Hub Enrollment">Community Bible Hub Enrollment</option>
                    <option value="Sunday School Teacher Certification">Sunday School Teacher Certification</option>
                    <option value="Disability Ministry & Special Care">Disability Ministry & Special Care</option>
                    <option value="Raising Hope Curriculum Material Request">Raising Hope Curriculum Material Request</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    Notes or Specific Request
                  </label>
                  <textarea
                    rows={3}
                    value={serviceMessage}
                    onChange={(e) => setServiceMessage(e.target.value)}
                    placeholder="Tell us how we can best support your child, household, or partner church..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingService}
                  className="w-full py-3.5 bg-[#ef5a20] hover:bg-[#d94a14] disabled:opacity-50 text-white rounded-full font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
                >
                  {isSubmittingService ? 'SUBMITTING INQUIRY...' : 'SUBMIT CHILDREN SERVICES INQUIRY'}
                </button>
              </form>
            )}
          </div>

          {/* Form 2: Education Fund Scholarship Application & Live Status Tool */}
          <div id="scholarship-application-section" className="lg:col-span-6 space-y-6">
            {/* Status Lookup Card */}
            <div id="status-lookup-section" className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#ef5a20]" />
                <h3 className="font-['Playfair_Display'] font-extrabold text-lg text-[#000a37]">
                  Education Application Status Lookup
                </h3>
              </div>
              <p className="text-xs text-stone-500">
                Enter your application reference code (e.g. <span className="font-mono text-[#000a37]">ML-EDU-2026-081</span>) to view current verification and award status.
              </p>

              <form onSubmit={handleStatusLookup} className="flex gap-2">
                <input
                  type="text"
                  required
                  value={lookupQuery}
                  onChange={(e) => setLookupQuery(e.target.value)}
                  placeholder="e.g. ML-EDU-2026-081"
                  className="flex-1 px-3.5 py-2 rounded-xl border border-stone-200 text-xs font-mono uppercase focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#000a37] hover:bg-[#00135c] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  CHECK STATUS
                </button>
              </form>

              {lookupResult === 'not_found' && (
                <div className="bg-stone-50 border border-stone-200 p-3 rounded-xl flex items-center gap-2 text-xs text-stone-600">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>No application found matching that reference. Please check your tracking code.</span>
                </div>
              )}

              {lookupResult && lookupResult !== 'not_found' && (
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#000a37]">{lookupResult.studentName}</span>
                    <span className="font-mono font-bold uppercase px-2 py-0.5 rounded-full text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {lookupResult.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-stone-600 text-[11px]">
                    <div>School: <strong className="text-stone-800">{lookupResult.schoolName}</strong></div>
                    <div>Level: <strong className="text-stone-800">{lookupResult.currentLevel}</strong></div>
                    <div>Submitted: <strong className="text-stone-800">{lookupResult.submissionDate}</strong></div>
                    <div>Need: <strong className="text-stone-800">UGX {lookupResult.annualFeeNeedUGX.toLocaleString()}</strong></div>
                  </div>
                </div>
              )}
            </div>

            {/* Application Submission Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <div className="space-y-1.5 border-b border-stone-100 pb-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#ef5a20]">
                  <GraduationCap className="w-4 h-4 text-[#ef5a20]" />
                  <span>Tuition Assistance Program</span>
                </div>
                <h3 className="font-['Playfair_Display'] font-extrabold text-xl text-[#000a37]">
                  Student Scholarship Application
                </h3>
                <p className="text-xs text-stone-500">
                  Complete this form to apply for tuition support, uniforms, and textbooks for the upcoming academic term.
                </p>
              </div>

              {submittedAppNumber ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl space-y-3 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-sm text-[#000a37]">Application Submitted Successfully</h4>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto">
                    Your application has been registered. Please record your unique reference number:
                  </p>
                  <div className="inline-block px-4 py-2 bg-white rounded-xl border border-emerald-300 font-mono font-bold text-base text-[#000a37] shadow-xs">
                    {submittedAppNumber}
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Use this code in the status lookup box above to monitor your application's review.
                  </p>
                  <button
                    onClick={() => {
                      setSubmittedAppNumber(null);
                      setStudentName('');
                      setGuardianName('');
                      setGuardianPhone('');
                      setSchoolName('');
                      setReasonForApplication('');
                    }}
                    className="mt-2 px-5 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    Submit Another Student
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEducationSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="e.g. Joshua Mukasa"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        Gender & Birth Date
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          className="px-3 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                        >
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                        </select>
                        <input
                          type="date"
                          value={dateOfBirth}
                          onChange={(e) => setDateOfBirth(e.target.value)}
                          className="flex-1 px-3 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        School Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        placeholder="e.g. Mengo Primary School"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        Current Class Level *
                      </label>
                      <input
                        type="text"
                        required
                        value={currentLevel}
                        onChange={(e) => setCurrentLevel(e.target.value)}
                        placeholder="e.g. Primary 4 / Senior 2"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={guardianName}
                        onChange={(e) => setGuardianName(e.target.value)}
                        placeholder="e.g. Rebecca Nakitto"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        Guardian Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={guardianPhone}
                        onChange={(e) => setGuardianPhone(e.target.value)}
                        placeholder="+256 772 345 678"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        Home District *
                      </label>
                      <input
                        type="text"
                        required
                        value={eduDistrict}
                        onChange={(e) => setEduDistrict(e.target.value)}
                        placeholder="e.g. Wakiso, Kampala, Arua"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">
                        Annual Tuition Fee Need (UGX)
                      </label>
                      <input
                        type="number"
                        value={annualFeeNeedUGX}
                        onChange={(e) => setAnnualFeeNeedUGX(e.target.value)}
                        placeholder="600000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      Reason for Financial Assistance Application
                    </label>
                    <textarea
                      rows={3}
                      value={reasonForApplication}
                      onChange={(e) => setReasonForApplication(e.target.value)}
                      placeholder="Share family financial background, orphan status, or disability details to help the committee review eligibility..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#ef5a20] bg-[#FAF9F6]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingEdu}
                    className="w-full py-3.5 bg-[#ef5a20] hover:bg-[#d94a14] disabled:opacity-50 text-white rounded-full font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
                  >
                    {isSubmittingEdu ? 'SUBMITTING APPLICATION...' : 'SUBMIT EDUCATION GRANT APPLICATION'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
