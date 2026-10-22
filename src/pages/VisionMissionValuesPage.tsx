import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Compass,
  CheckCircle2,
  Heart,
  Shield,
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Target
} from 'lucide-react';

export const VisionMissionValuesPage: React.FC = () => {
  const { navigateTo, openDonationModal } = useApp();

  const coreValues = [
    {
      num: '01',
      title: 'God-Fearing',
      tagline: 'Recognizing God as Our Ultimate Source',
      description:
        'We acknowledge the Lord as the sovereign source and anchor of our lives and labors. Every program, outreach, and resource is pursued under His guidance and prayerful devotion.'
    },
    {
      num: '02',
      title: 'Teamwork',
      tagline: 'United in Purpose and Mutual Respect',
      description:
        'We value every staff member, church volunteer, and community beneficiary. Genuine collaboration and mutual honor produce far greater fruit than solitary efforts.'
    },
    {
      num: '03',
      title: 'Excellence',
      tagline: 'Diligent Commitment to Quality',
      description:
        'We fulfill our ministry duties with utmost diligence, excellence, and care, knowing that whatever we do, we do it heartily as unto the Lord and not unto men.'
    },
    {
      num: '04',
      title: 'Partnering',
      tagline: 'Walking Together Across Denominations',
      description:
        'We bridge divides to work alongside local congregations, grassroots agencies, and international supporters, leveraging shared strengths to transform communities.'
    },
    {
      num: '05',
      title: 'Compassion',
      tagline: 'Empathy, Dignity, and Christlike Love',
      description:
        'We respond with heartfelt compassion to the physical, emotional, social, and spiritual suffering of vulnerable children, disabled persons, and prisoners, defending their human dignity.'
    },
    {
      num: '06',
      title: 'Integrity',
      tagline: 'Accountability, Honesty, and Stewardship',
      description:
        'We maintain uncompromising honesty, open financial stewardship, and ethical transparency before God, governmental authorities, partner churches, and the public.'
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-14 lg:space-y-16 pb-16">
      {/* Header - Full Width */}
      <section className="reveal-up w-full bg-gradient-to-b from-white via-[#FAF7F0] to-[#FAF7F0] border-b border-stone-200/80 py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#2459A9]">
            <span>About Us</span>
            <span aria-hidden="true">·</span>
            <span>Spiritual & Strategic Anchors</span>
            <span aria-hidden="true">·</span>
            <span>Uganda</span>
          </div>
          <h1 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17324D] tracking-tight leading-tight">
            Vision, Mission & Core Values
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed font-['Plus_Jakarta_Sans']">
            The immutable biblical pillars, theological convictions, and strategic focus that guide Mercy Link Foundation Africa in every outreach, classroom, and community fellowship.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: OUR VISION (Represented in requested WordPress Donation Theme Design)
          - Left: 3-Image Organic Asymmetric Collage with Sunburst Radial Tick Marks
          - Right: "What We Do", "Our Vision", Vision Quote, Description & Orange Pill Button
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 border border-stone-200/90 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: 3-Photo Organic Collage with Sunburst SVG */}
            <div className="lg:col-span-6 reveal-left">
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                {/* Sunburst radial tick marks SVG watermark behind top-left of collage */}
                <svg
                  className="absolute -top-5 -left-5 sm:-top-7 sm:-left-7 w-28 h-28 sm:w-36 sm:h-36 text-[#E98A32]/60 pointer-events-none z-0 select-none"
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
                <div className="relative z-10 grid grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
                  {/* Left tall card */}
                  <div className="col-span-6 relative h-[300px] sm:h-[360px] lg:h-[390px] charity-image-shape overflow-hidden shadow-[0_15px_30px_rgba(23,50,77,0.14)] border border-stone-200/60 bg-stone-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
                      alt="Donation relief box and community outreach"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/aistudio/Donation_WordPress_Theme_2aed6214.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider">Compassion in Action</span>
                    </div>
                  </div>

                  {/* Right stacked cards */}
                  <div className="col-span-6 flex flex-col gap-3.5 sm:gap-4 justify-between">
                    {/* Top Right card */}
                    <div className="relative h-[142px] sm:h-[172px] lg:h-[187px] charity-image-shape overflow-hidden shadow-[0_12px_24px_rgba(23,50,77,0.1)] border border-stone-200/60 bg-stone-100 group">
                      <img
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                        alt="Clothing distribution and child welfare"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/aistudio/Donation_WordPress_Theme_2aed6214.jpg';
                        }}
                      />
                    </div>

                    {/* Bottom Right card */}
                    <div className="relative h-[142px] sm:h-[172px] lg:h-[187px] charity-image-shape overflow-hidden shadow-[0_12px_24px_rgba(23,50,77,0.1)] border border-stone-200/60 bg-stone-100 group">
                      <img
                        src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80"
                        alt="Essential supplies and packages for vulnerable families"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/aistudio/Donation_WordPress_Theme_2aed6214.jpg';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Typography & Orange Pill CTA matching design */}
            <div className="lg:col-span-6 reveal-right space-y-5">
              <span className="text-[#E98A32] font-bold text-xs sm:text-sm tracking-widest uppercase block">
                What We Do
              </span>

              <h2 className="font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17324D] tracking-tight leading-[1.12]">
                Our Vision
              </h2>

              <p className="font-['Playfair_Display'] text-base sm:text-lg text-[#17324D] font-medium leading-relaxed italic border-l-2 border-[#E98A32] pl-4">
                "Develop leaders, transform communities and create a legacy of peace through equipping the church in Africa for relevance, responsibility and sustainability."
              </p>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                We envision an Africa where vibrant, self-sustaining local churches actively spearhead social healing, peace, and spiritual growth in every village and town. Choose your involvement and walk with us—every program is completely transparent, community-led, and centered on lasting human dignity.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-stone-700 font-semibold pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>70+ Reached Districts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>Christ-Centered Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>Self-Sustaining Churches</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>Legacy of Lasting Peace</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => navigateTo('programs')}
                  className="interactive-button px-8 py-3.5 bg-[#E98A32] hover:bg-[#d47926] text-white rounded-full text-xs font-extrabold uppercase tracking-widest transition-all shadow-md hover:shadow-lg active:scale-95 inline-flex items-center gap-2 group"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR MISSION (Represented in Matching Editorial Design)
          - Left: "How We Serve", "Our Mission", Mission Quote, Description & Orange Pill Button
          - Right: 3-Image Organic Asymmetric Collage with Sunburst SVG
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 border border-stone-200/90 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column (Desktop order 1, mobile order 2): Typography & Orange Pill CTA */}
            <div className="lg:col-span-6 order-2 lg:order-1 reveal-left space-y-5">
              <span className="text-[#E98A32] font-bold text-xs sm:text-sm tracking-widest uppercase block">
                How We Serve
              </span>

              <h2 className="font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17324D] tracking-tight leading-[1.12]">
                Our Mission
              </h2>

              <p className="font-['Playfair_Display'] text-base sm:text-lg text-[#17324D] font-medium leading-relaxed italic border-l-2 border-[#E98A32] pl-4">
                "To develop programs that will empower people physically, emotionally, socially, and economically with a goal to draw them to Christ who meets their spiritual needs."
              </p>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Our mission embraces holistic Gospel propagation: meeting physical and social needs with Christlike compassion while unashamedly proclaiming eternal salvation in Jesus Christ. We do not separate spiritual discipleship from physical relief—caring for children with special needs, comforting inmates in regional prisons, equipping young parents with positive discipline, and training church planters with practical skills.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-stone-700 font-semibold pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>Physical & Health Relief</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>Emotional Counseling</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>Social Inclusion</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>Economic Empowerment</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => openDonationModal()}
                  className="interactive-button px-8 py-3.5 bg-[#E98A32] hover:bg-[#d47926] text-white rounded-full text-xs font-extrabold uppercase tracking-widest transition-all shadow-md hover:shadow-lg active:scale-95 inline-flex items-center gap-2 group"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>SUPPORT OUR MISSION</span>
                </button>

                <button
                  onClick={() => navigateTo('get-involved')}
                  className="interactive-button px-6 py-3.5 bg-stone-100 hover:bg-stone-200 text-[#17324D] rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                >
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Right Column (Desktop order 2, mobile order 1): 3-Photo Organic Collage with Sunburst SVG */}
            <div className="lg:col-span-6 order-1 lg:order-2 reveal-right">
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                {/* Sunburst radial tick marks SVG watermark behind top-right of collage */}
                <svg
                  className="absolute -top-5 -right-5 sm:-top-7 sm:-right-7 w-28 h-28 sm:w-36 sm:h-36 text-[#E98A32]/60 pointer-events-none z-0 select-none scale-x-[-1]"
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
                <div className="relative z-10 grid grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
                  {/* Left tall card */}
                  <div className="col-span-6 relative h-[300px] sm:h-[360px] lg:h-[390px] charity-image-shape overflow-hidden shadow-[0_15px_30px_rgba(23,50,77,0.14)] border border-stone-200/60 bg-stone-100 group">
                    <img
                      src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
                      alt="Pastors and church planter training fellowship"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider">Church Equipping</span>
                    </div>
                  </div>

                  {/* Right stacked cards */}
                  <div className="col-span-6 flex flex-col gap-3.5 sm:gap-4 justify-between">
                    {/* Top Right card */}
                    <div className="relative h-[142px] sm:h-[172px] lg:h-[187px] charity-image-shape overflow-hidden shadow-[0_12px_24px_rgba(23,50,77,0.1)] border border-stone-200/60 bg-stone-100 group">
                      <img
                        src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
                        alt="Mother and child family foundations support"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                      />
                    </div>

                    {/* Bottom Right card */}
                    <div className="relative h-[142px] sm:h-[172px] lg:h-[187px] charity-image-shape overflow-hidden shadow-[0_12px_24px_rgba(23,50,77,0.1)] border border-stone-200/60 bg-stone-100 group">
                      <img
                        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                        alt="Disability and vulnerable community care"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: 3-IMAGE SHOWCASE WITH SIGNATURE DIAGONAL CURVED BORDER DESIGN
          Directly matching the user's uploaded reference (Charity_website_0802821e.jpg)
          - Card 1: Mother holding baby with love
          - Card 2: Joyful Christian family
          - Card 3: Smiling African children in community
          - All styled with .charity-image-shape (rounded-tr-[44px] rounded-bl-[44px])
          ========================================================================= */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Mother and Baby */}
          <div className="charity-image-shape overflow-hidden shadow-lg border border-stone-200/70 bg-stone-100 relative h-64 sm:h-72 group transition-transform duration-500 hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
              alt="Mother embracing child - Family care in Uganda"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/aistudio/Charity_website_0802821e.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/85 via-[#17324D]/25 to-transparent flex items-end p-5">
              <div>
                <span className="text-[11px] font-bold text-[#E98A32] uppercase tracking-wider block">
                  Family & Infant Care
                </span>
                <p className="text-white text-sm font-bold font-['Manrope']">
                  Dignity, Health & Parental Compassion
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Joyful Christian Family */}
          <div className="charity-image-shape overflow-hidden shadow-lg border border-stone-200/70 bg-stone-100 relative h-64 sm:h-72 group transition-transform duration-500 hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
              alt="Smiling African family embracing together"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/aistudio/Charity_website_0802821e.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/85 via-[#17324D]/25 to-transparent flex items-end p-5">
              <div>
                <span className="text-[11px] font-bold text-[#E98A32] uppercase tracking-wider block">
                  Household Discipleship
                </span>
                <p className="text-white text-sm font-bold font-['Manrope']">
                  Equipping God-Fearing Households
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Smiling African Children */}
          <div className="charity-image-shape overflow-hidden shadow-lg border border-stone-200/70 bg-stone-100 relative h-64 sm:h-72 group transition-transform duration-500 hover:-translate-y-1">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
              alt="Smiling children in community outreach"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/aistudio/Charity_website_0802821e.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/85 via-[#17324D]/25 to-transparent flex items-end p-5">
              <div>
                <span className="text-[11px] font-bold text-[#E98A32] uppercase tracking-wider block">
                  Generational Hope
                </span>
                <p className="text-white text-sm font-bold font-['Manrope']">
                  Reaching Over 12,500+ Children Weekly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Organizational Goal */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#17324D] text-white p-8 sm:p-12 rounded-3xl space-y-4 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
            Core Organizational Goal
          </span>
          <h2 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-white">
            Equipping Church & Community Leaders for Sustainable Transformation
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-3xl">
            Facilitate accessible and effective education and training for church and community leaders, strengthen biblical values, support mission work, develop leadership and business capacity, encourage collaboration, and promote sustainable community development throughout Uganda and Africa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs text-white/70">
            <div>
              <p className="font-bold text-white mb-1">• Accessible Leadership Training</p>
              <p>Removing financial and geographic obstacles for rural pastors.</p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">• Generational Discipleship</p>
              <p>Nurturing children and youth with moral grounding and hope.</p>
            </div>
            <div>
              <p className="font-bold text-white mb-1">• Self-Sustaining Capacity</p>
              <p>Building local ownership and community resilience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Six Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="reveal-up text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
            Organizational Ethics
          </span>
          <h2 className="font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl text-[#17324D]">
            Our Six Core Values
          </h2>
          <p className="text-xs text-stone-500">
            Preserved directly from the official documented constitution of Mercy Link Foundation Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-group">
          {coreValues.map((val) => (
            <div
              key={val.title}
              className="reveal-up interactive-card bg-white p-7 rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-xs text-[#E98A32]">{val.num}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#2459A9]" />
                </div>
                <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">{val.title}</h3>
                <p className="text-xs font-semibold text-[#2459A9] italic">{val.tagline}</p>
                <p className="text-xs text-stone-600 leading-relaxed">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Non-Denominational Christian Unity Statement */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-3xl border border-stone-200 space-y-3 shadow-xs">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-emerald-600" />
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Our Non-Denominational Commitment
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Mercy Link Foundation Africa is non-denominational. We partner with Bible-believing evangelical, Pentecostal, Baptist, Anglican, and independent churches across Uganda. We are united by our common confession of Jesus Christ as Savior and Lord, committed to the authority of Scripture, and devoted to loving our neighbors in word and in deed.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="font-['Playfair_Display'] font-bold text-3xl text-[#17324D]">
          Share in This Legacy of Peace
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
          We invite you to partner with us in prayer, sponsorship, and active field service.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigateTo('get-involved')}
            className="interactive-button px-6 py-3 bg-[#17324D] hover:bg-[#2459A9] text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all"
          >
            Get Involved With Us
          </button>
          <button
            onClick={() => openDonationModal()}
            className="interactive-button px-6 py-3 bg-[#E98A32] hover:bg-[#d47926] text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all flex items-center gap-2"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>Support Our Mission</span>
          </button>
        </div>
      </section>
    </div>
  );
};
