import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Heart,
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Calendar,
  FileText,
  Play,
  Shield,
  MapPin,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Plus,
  Compass,
  GraduationCap,
  HandHeart,
  Building2,
  Smile,
  Eye,
  Download
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const {
    programs,
    reports,
    events,
    impactMetrics,
    navigateTo,
    openDonationModal,
    openVideoModal
  } = useApp();

  const featuredPrograms = programs.filter((p) => p.isPublished);
  const visibleMetrics = impactMetrics.filter((m) => m.isVisible);

  return (
    <div className="space-y-14 lg:space-y-20 pb-16">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          Matching the design:
          - High-contrast editorial serif title on the left
          - Dark pill button
          - Background Africa silhouette with decorative colored dots
          - Right: Organic map-silhouette photo mask of joyful smiling African children
          ========================================================================= */}
      <section className="relative overflow-hidden pt-4 sm:pt-6 pb-6 sm:pb-8 lg:pb-10 w-full bg-gradient-to-b from-white/40 via-transparent to-transparent">
        {/* Subtle Decorative Africa Background Outline / Watermark */}
        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden flex items-center justify-center">
          <svg
            className="w-[900px] h-[900px] text-stone-200/50 translate-x-24"
            viewBox="0 0 800 800"
            fill="currentColor"
          >
            {/* Stylized continent silhouette */}
            <path d="M420,120 C460,110 520,130 560,160 C600,190 620,240 610,290 C600,340 640,380 660,420 C680,460 670,510 650,560 C620,630 560,700 500,750 C460,780 430,770 410,740 C380,700 360,650 340,610 C320,570 290,540 270,500 C240,440 220,380 230,320 C240,260 270,220 310,180 C350,140 380,130 420,120 Z" />
          </svg>
        </div>

        {/* Decorative accent dots matching design */}
        <div className="absolute top-12 left-[48%] w-3 h-3 rounded-full bg-[#E98A32]" />
        <div className="absolute top-36 left-[8%] w-2.5 h-2.5 rounded-full bg-[#0284c7]" />
        <div className="absolute top-20 right-[12%] w-2.5 h-2.5 rounded-full bg-[#E98A32]" />
        <div className="absolute bottom-10 right-[42%] w-2.5 h-2.5 rounded-full bg-[#0284c7]" />

        {/* Full-width container with responsive outer margin and edge padding */}
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 items-center">
            {/* Left Column: Editorial Serif Typography & CTA */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-4">
              <h1 className="hero-headline font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] text-[#17324D] tracking-tight leading-[1.14]">
                Transforming Lives Across Africa
              </h1>

              <p className="hero-subtext text-stone-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl">
                Empowering the vulnerable. Serving with compassion across Africa.
              </p>

              <div className="hero-actions pt-1 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openDonationModal()}
                  className="interactive-button px-5 py-2.5 bg-[#17324D] hover:bg-[#2459A9] text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>Donate Now</span>
                </button>

                <button
                  onClick={() => navigateTo('programs')}
                  className="interactive-button px-4 py-2.5 text-xs uppercase tracking-wider font-bold text-[#17324D] hover:text-[#E98A32] transition-colors"
                >
                  Explore Our Programs →
                </button>
              </div>

              {/* Verified Trust Markers */}
              <div className="hero-trust pt-3 border-t border-stone-200/60 flex flex-wrap items-center gap-3 text-xs text-stone-500">
                <span className="font-semibold text-[#17324D]">Bulange Mengo, Kampala</span>
                <span aria-hidden="true">·</span>
                <span>Established 2007</span>
                <span aria-hidden="true">·</span>
                <span>Over 70 Districts Reached</span>
              </div>
            </div>

            {/* Right Column: Organic Silhouette Mask of Joyful African Children */}
            <div className="hero-visual lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end z-20">
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Radiant Soft Backlight Halo for Maximum Visibility & Pop */}
                <div className="absolute inset-0 -m-4 bg-gradient-to-tr from-[#E98A32]/20 via-white/90 to-[#2459A9]/10 rounded-full blur-2xl -z-10 pointer-events-none" />

                {/* Organic Graphic Container */}
                <div className="relative flex items-center justify-center p-1">
                  <img
                    src="https://i.postimg.cc/2872WvdN/TYU.png"
                    alt="African children smiling joyfully - Mercy Link Foundation Africa"
                    className="w-full h-auto max-h-[340px] sm:max-h-[380px] lg:max-h-[410px] object-contain drop-shadow-[0_16px_32px_rgba(23,50,77,0.2)] hover:scale-105 transition-transform duration-700 select-none"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80";
                    }}
                  />
                </div>

                {/* Satellite Floating Accent Elements matching design */}
                <div className="absolute top-2 right-4 w-4 h-4 rounded-full bg-[#E98A32] shadow-md animate-pulse" />
                <div className="absolute bottom-12 -left-2 w-3 h-3 rounded-full bg-[#0284c7] shadow-md" />
                <div className="absolute -bottom-1 right-16 w-3 h-3 rounded-full bg-[#E98A32] shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: "WHO WE ARE" / "Make a Difference"
          Matching the 4 distinctive notched cards from the design image:
          - Top small orange label: WHO WE ARE
          - Center serif headline: Make a Difference
          - 4 Cards with asymmetric notched corner + soft shadow
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="reveal-up text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
            Who We Are
          </span>
          <h2 className="font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl text-[#17324D] tracking-tight">
            Make a Difference
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 max-w-lg mx-auto">
            It's through practical faith, leadership development, and compassionate outreach that we empower vulnerable people to thrive.
          </p>
        </div>

        {/* 4 Feature Cards with Notched Corner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-group">
          {/* Card 1 */}
          <div className="reveal-up interactive-card bg-white p-7 rounded-2xl clip-badge-notch border border-stone-200/80 shadow-sm hover:shadow-md transition-all space-y-3 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-[#E98A32]/40 bg-[#FAF7F0] flex items-center justify-center text-[#E98A32]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
              Accessible Training
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Equipping rural church planters and Sunday school workers with practical ministry and discipleship tools at zero financial burden.
            </p>
          </div>

          {/* Card 2 */}
          <div className="reveal-up interactive-card bg-white p-7 rounded-2xl clip-badge-notch border border-stone-200/80 shadow-sm hover:shadow-md transition-all space-y-3 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-[#2459A9]/40 bg-[#FAF7F0] flex items-center justify-center text-[#2459A9]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
              Locals For Locals
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Empowering indigenous African believers to lead community Bible hubs, counsel parents, and plant vibrant local fellowships.
            </p>
          </div>

          {/* Card 3 */}
          <div className="reveal-up interactive-card bg-white p-7 rounded-2xl clip-badge-notch border border-stone-200/80 shadow-sm hover:shadow-md transition-all space-y-3 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-emerald-500/40 bg-[#FAF7F0] flex items-center justify-center text-emerald-600">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
              Real Impact
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Over 70 districts reached across Uganda, with verified records of 12,500+ children engaged weekly and 450+ leaders trained.
            </p>
          </div>

          {/* Card 4 */}
          <div className="reveal-up interactive-card bg-white p-7 rounded-2xl clip-badge-notch border border-stone-200/80 shadow-sm hover:shadow-md transition-all space-y-3 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-[#E98A32]/40 bg-[#FAF7F0] flex items-center justify-center text-[#E98A32]">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
              Compassionate Safety Net
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Dignified care for children with disabilities, prison chaplaincy, positive parenting circles, and education scholarships.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: "ABOUT US" / "Changing Lives with Knowledge & Faith"
          Matching the design:
          - Left: Circular cluster of overlapping photos with dotted orbital concentric rings
          - Right: "ABOUT US", Serif title, bold subhead, dual CTA ("LEARN MORE" + "WATCH VIDEO")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Circular Overlapping Photo Montage */}
          <div className="reveal-left reveal-image lg:col-span-6 relative flex justify-center items-center py-8">
            {/* Concentric dotted orbital ring background */}
            <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border-2 border-dashed border-stone-300 pointer-events-none" />
            <div className="absolute w-[460px] h-[460px] rounded-full border border-stone-200 pointer-events-none hidden sm:block" />

            {/* Accent colored dots */}
            <div className="absolute top-12 left-8 w-4 h-4 rounded-full bg-[#E98A32]" />
            <div className="absolute bottom-10 right-14 w-3.5 h-3.5 rounded-full bg-[#0284c7]" />

            {/* Main Center Circular Portrait */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
                alt="Mercy Link Community Children"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Top-Right Overlapping Floating Circle */}
            <div className="absolute top-0 right-4 sm:right-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80"
                alt="Children Smiling in African village"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom-Left Overlapping Floating Circle */}
            <div className="absolute bottom-2 left-2 sm:left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
                alt="Young Ugandan children learning"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Action Buttons */}
          <div className="reveal-right lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
              About Us
            </span>

            <h2 className="font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17324D] tracking-tight leading-[1.15]">
              Mercy Link Foundation Africa
            </h2>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-medium">
              Mercy Link Foundation Africa is a mission-based NGO reaching the lost, discipling the unreached, and empowering churches through training, outreaches, and social transformation programs.
            </p>

            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#E98A32] shrink-0" />
                <span>Faith-driven grassroots empowerment</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#2459A9] shrink-0" />
                <span>Registered NGO operating across Uganda</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Holistic Gospel propagation</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigateTo('about')}
                className="interactive-button px-6 py-3 bg-[#17324D] hover:bg-[#2459A9] text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all shadow-md"
              >
                Learn More
              </button>

              <button
                onClick={openVideoModal}
                className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#17324D] hover:text-[#2459A9] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full border-2 border-emerald-600 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: "OUR CORE PROGRAMS"
          Directly following About Us section with authentic ministry icons & text:
          - Disability Ministry
          - Prison Ministry
          - Positive Parenting
          - Church Planters Training
          - Children's Ministry
          - Youth Empowerment
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="reveal-up text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
            What We Do
          </span>
          <h2 className="font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl text-[#17324D] tracking-tight">
            Our Core Programs
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 max-w-lg mx-auto">
            Practical ministry pathways developed to reach vulnerable individuals, equip local churches, and nurture generations across Uganda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-group">
          {/* 1. Disability Ministry */}
          <div className="reveal-up interactive-card bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] border border-[#E98A32]/30 flex items-center justify-center text-[#E98A32] group-hover:scale-105 transition-transform">
                <HandHeart className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D] group-hover:text-[#2459A9] transition-colors">
                  Disability Ministry
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Supporting people with disabilities through compassion, care, and community inclusion.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => navigateTo('program-detail', 'disability-ministry')}
                className="text-xs font-bold text-[#17324D] group-hover:text-[#2459A9] flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => openDonationModal('Disability Ministry')}
                className="text-[11px] font-semibold text-[#E98A32] hover:underline"
              >
                Support
              </button>
            </div>
          </div>

          {/* 2. Prison Ministry */}
          <div className="reveal-up interactive-card bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] border border-[#2459A9]/30 flex items-center justify-center text-[#2459A9] group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D] group-hover:text-[#2459A9] transition-colors">
                  Prison Ministry
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Offering hope, counseling, and reintegration support for incarcerated individuals.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => navigateTo('program-detail', 'prison-ministry')}
                className="text-xs font-bold text-[#17324D] group-hover:text-[#2459A9] flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => openDonationModal('Prison Ministry')}
                className="text-[11px] font-semibold text-[#E98A32] hover:underline"
              >
                Support
              </button>
            </div>
          </div>

          {/* 3. Positive Parenting */}
          <div className="reveal-up interactive-card bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] border border-[#E98A32]/30 flex items-center justify-center text-[#E98A32] group-hover:scale-105 transition-transform">
                <Smile className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D] group-hover:text-[#2459A9] transition-colors">
                  Positive Parenting
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Empowering parents and caregivers to raise responsible, faith-grounded children.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => navigateTo('program-detail', 'family-foundations')}
                className="text-xs font-bold text-[#17324D] group-hover:text-[#2459A9] flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => openDonationModal('Family Foundations / Positive Parenting')}
                className="text-[11px] font-semibold text-[#E98A32] hover:underline"
              >
                Support
              </button>
            </div>
          </div>

          {/* 4. Church Planters Training */}
          <div className="reveal-up interactive-card bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] border border-[#2459A9]/30 flex items-center justify-center text-[#2459A9] group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D] group-hover:text-[#2459A9] transition-colors">
                  Church Planters Training
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Equipping leaders to plant and nurture Gospel-centered churches in their communities.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => navigateTo('program-detail', 'church-planters')}
                className="text-xs font-bold text-[#17324D] group-hover:text-[#2459A9] flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => openDonationModal('The Church Planter Program')}
                className="text-[11px] font-semibold text-[#E98A32] hover:underline"
              >
                Support
              </button>
            </div>
          </div>

          {/* 5. Children’s Ministry */}
          <div className="reveal-up interactive-card bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] border border-emerald-500/30 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D] group-hover:text-[#2459A9] transition-colors">
                  Children’s Ministry
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Discipling children through creative outreach, teaching, and spiritual formation.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => navigateTo('program-detail', 'childrens-ministry')}
                className="text-xs font-bold text-[#17324D] group-hover:text-[#2459A9] flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => openDonationModal("Children's Ministry Program")}
                className="text-[11px] font-semibold text-[#E98A32] hover:underline"
              >
                Support
              </button>
            </div>
          </div>

          {/* 6. Youth Empowerment */}
          <div className="reveal-up interactive-card bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] border border-[#E98A32]/30 flex items-center justify-center text-[#E98A32] group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D] group-hover:text-[#2459A9] transition-colors">
                  Youth Empowerment
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Mentorship, skill-building, and leadership training for the next generation.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
              <button
                onClick={() => navigateTo('program-detail', 'youth-empowerment')}
                className="text-xs font-bold text-[#17324D] group-hover:text-[#2459A9] flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => openDonationModal('Youth Empowerment')}
                className="text-[11px] font-semibold text-[#E98A32] hover:underline"
              >
                Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: "WE NEED YOUR HELP" / "Featured Campaigns"
          Matching the 3 campaign cards with:
          - Image with rounded top corners
          - Progress & funding metrics
          - Title, description, and bottom-right corner "+" button
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="reveal-up text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
            We Need Your Help
          </span>
          <h2 className="font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl text-[#17324D] tracking-tight">
            Featured Campaigns & Ministries
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
            Directly support verified initiatives delivering education, healthcare aids, and spiritual hope across Uganda.
          </p>
        </div>

        {/* 3 Campaign Cards Grid matching the design layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-group">
          {/* Campaign 1: Disability Ministry */}
          <div className="reveal-up interactive-card bg-white charity-image-shape overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
            <div>
              <div className="relative h-56 charity-image-shape overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                  alt="Disability Ministry at Kampala School of the Handicapped"
                  className="reveal-image interactive-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Progress & Verification Bar */}
              <div className="p-5 pb-0 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-semibold text-stone-500">
                  <span>Current: <strong>157 Students</strong></span>
                  <span className="text-emerald-600 font-bold">100% Verified</span>
                  <span>Goal: <strong>250 Students</strong></span>
                </div>

                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E98A32] rounded-full w-[65%]" />
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-['Manrope'] font-bold text-base text-[#17324D] group-hover:text-[#2459A9] transition-colors">
                  Disability Care & Inclusion
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
                  Providing specialized learning aids, caregiver counseling, and physical mobility support for children with disabilities at Kampala School of the Handicapped.
                </p>
              </div>
            </div>

            {/* Bottom Strip with Action Button on the Right */}
            <div className="p-5 pt-0 flex items-center justify-between">
              <button
                onClick={() => navigateTo('program-detail', 'disability-ministry')}
                className="text-xs font-bold text-[#17324D] hover:underline"
              >
                Learn More →
              </button>

              <button
                onClick={() => openDonationModal('Disability Ministry')}
                className="interactive-button w-8 h-8 rounded-lg bg-[#E98A32] hover:bg-[#d47926] text-white flex items-center justify-center shadow-xs transition-colors"
                title="Support this campaign"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Campaign 2: Children's Bible Hubs */}
          <div className="reveal-up interactive-card bg-white charity-image-shape overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
            <div>
              <div className="relative h-56 charity-image-shape overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                  alt="Children Bible Hubs and Literacy"
                  className="reveal-image interactive-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Progress & Verification Bar */}
              <div className="p-5 pb-0 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-semibold text-stone-500">
                  <span>Weekly: <strong>12,500+</strong></span>
                  <span className="text-emerald-600 font-bold">100% Active</span>
                  <span>Goal: <strong>15,000+</strong></span>
                </div>

                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E98A32] rounded-full w-[83%]" />
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-['Manrope'] font-bold text-base text-[#17324D] group-hover:text-[#2459A9] transition-colors">
                  Community Bible Hubs & Literacy
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
                  Nurturing young hearts with scripture, moral foundation, and children storybooks across hundreds of weekly village clubs throughout Uganda.
                </p>
              </div>
            </div>

            {/* Bottom Strip with Action Button on the Right */}
            <div className="p-5 pt-0 flex items-center justify-between">
              <button
                onClick={() => navigateTo('program-detail', 'childrens-ministry')}
                className="text-xs font-bold text-[#17324D] hover:underline"
              >
                Learn More →
              </button>

              <button
                onClick={() => openDonationModal("Children's Ministry Program")}
                className="interactive-button w-8 h-8 rounded-lg bg-[#E98A32] hover:bg-[#d47926] text-white flex items-center justify-center shadow-xs transition-colors"
                title="Support this campaign"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Campaign 3: Family Foundations */}
          <div className="reveal-up interactive-card bg-white charity-image-shape overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
            <div>
              <div className="relative h-56 charity-image-shape overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
                  alt="Family Foundations - Parenting & Mentorship"
                  className="reveal-image interactive-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Progress & Verification Bar */}
              <div className="p-5 pb-0 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-semibold text-stone-500">
                  <span>Households: <strong>1,200+</strong></span>
                  <span className="text-emerald-600 font-bold">12 Core Initiatives</span>
                  <span>Districts: <strong>70+</strong></span>
                </div>

                <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E98A32] rounded-full w-[92%]" />
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-['Manrope'] font-bold text-base text-[#17324D] group-hover:text-[#2459A9] transition-colors">
                  Family Foundations
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
                  “When families struggle or fail, our churches, communities, culture and nations at large suffer.” Equipping parents, couples, and youth with wholistic life skills and biblical coping mechanisms.
                </p>
              </div>
            </div>

            {/* Bottom Strip with Action Button on the Right */}
            <div className="p-5 pt-0 flex items-center justify-between">
              <button
                onClick={() => navigateTo('program-detail', 'family-foundations')}
                className="text-xs font-bold text-[#17324D] hover:underline"
              >
                Learn More →
              </button>

              <button
                onClick={() => openDonationModal('Family Foundations')}
                className="interactive-button w-8 h-8 rounded-lg bg-[#E98A32] hover:bg-[#d47926] text-white flex items-center justify-center shadow-xs transition-colors"
                title="Support this campaign"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: "Volunteer Positions Available" / Geographic Scope
          Matching the design:
          - Left: Title, Volunteer CTA, and 2-column KPI counters
          - Right: Stylized warm mustard/gold map of Africa with interactive location dots
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-up bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Volunteer & Impact Numbers */}
            <div className="reveal-left lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                Join the Movement
              </span>

              <h2 className="font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl text-[#17324D] tracking-tight">
                Volunteer Positions & Regional Reach
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Whether you are a medical volunteer, a children's teacher, a theological mentor, or a prayer partner,
                there is a meaningful place for you in Mercy Link's mission across Uganda and East Africa.
              </p>

              {/* KPI Counters matching design */}
              <div className="grid grid-cols-2 gap-6 pt-2 stagger-fast">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#E98A32]" />
                    <span className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-[#17324D] tabular-nums">
                      12,500+
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 font-medium">Children Engaged Weekly</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#2459A9]" />
                    <span className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-[#17324D] tabular-nums">
                      70+
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 font-medium">Districts Across Uganda</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#2459A9]" />
                    <span className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-[#17324D] tabular-nums">
                      450+
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 font-medium">Church Planters Equipped</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-[#17324D] tabular-nums">
                      35,000+
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 font-medium">Annual Outreach Contacts</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('get-involved')}
                  className="interactive-button px-6 py-3 bg-[#17324D] hover:bg-[#2459A9] text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all shadow-md flex items-center gap-2"
                >
                  <span>Volunteer With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Stylized Golden/Mustard Africa & Uganda Map Graphic matching design */}
            <div className="reveal-right reveal-scale lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square bg-[#FAF7F0] rounded-3xl p-6 border border-stone-200/80 flex items-center justify-center overflow-hidden">
                {/* Stylized Africa silhouette in warm mustard tone */}
                <svg
                  className="w-full h-full text-[#E98A32]/80"
                  viewBox="0 0 500 500"
                  fill="currentColor"
                >
                  <path d="M220,60 C260,50 330,70 370,110 C410,150 430,200 420,250 C410,290 440,330 450,370 C460,400 440,440 410,460 C370,480 340,450 310,430 C270,400 240,360 210,310 C180,260 160,200 170,150 C180,100 200,70 220,60 Z" />
                </svg>

                {/* Pulsing Regional Hub Location Pins */}
                {/* Kampala / Bulange Mengo */}
                <div className="absolute top-[38%] left-[58%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-[#17324D] shadow-md flex items-center justify-center animate-ping absolute inset-0" />
                  <div className="relative w-4 h-4 rounded-full bg-[#17324D] border-2 border-white shadow-md" />
                  <span className="absolute left-5 top-0 bg-[#17324D] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow whitespace-nowrap">
                    Kampala (Mengo Hub)
                  </span>
                </div>

                {/* Northern Region / Gulu */}
                <div className="absolute top-[28%] left-[54%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-white border border-[#2459A9] shadow-md" />
                  <span className="absolute -left-12 -top-5 bg-white text-stone-800 text-[9px] font-semibold px-1.5 py-0.5 rounded border border-stone-200 shadow-xs whitespace-nowrap">
                    Northern Region
                  </span>
                </div>

                {/* Eastern Region / Jinja & Mbale */}
                <div className="absolute top-[42%] left-[65%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-white border border-[#2459A9] shadow-md" />
                  <span className="absolute left-4 top-1 bg-white text-stone-800 text-[9px] font-semibold px-1.5 py-0.5 rounded border border-stone-200 shadow-xs whitespace-nowrap">
                    Eastern Region
                  </span>
                </div>

                {/* Western Region / Mbarara */}
                <div className="absolute top-[48%] left-[48%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-white border border-[#2459A9] shadow-md" />
                  <span className="absolute -left-12 top-4 bg-white text-stone-800 text-[9px] font-semibold px-1.5 py-0.5 rounded border border-stone-200 shadow-xs whitespace-nowrap">
                    Western Region
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 text-center">
                  <span className="text-[11px] font-bold text-stone-600 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-stone-200 shadow-xs">
                    Published Scope: Over 70 Districts in Uganda
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: "ACCOUNTABILITY & TRANSPARENCY" / Recent Field Reports
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="reveal-up flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200/80 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
              Accountability & Evidence
            </span>
            <h2 className="font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl text-[#17324D] tracking-tight">
              Verified Field & Impact Reports
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 max-w-lg">
              Explore documented field achievements, ministry audits, and caregiver milestones across Uganda. Readable online and downloadable.
            </p>
          </div>

          <button
            onClick={() => navigateTo('reports')}
            className="text-xs font-bold uppercase tracking-wider text-[#17324D] hover:text-[#E98A32] flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>All Reports Archive</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-group">
          {reports.filter((r) => r.isPublished).slice(0, 3).map((report) => (
            <div
              key={report.id}
              className="reveal-up interactive-card bg-white charity-image-shape border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 charity-image-shape overflow-hidden bg-stone-100">
                  <img
                    src={report.featuredImage}
                    alt={report.title}
                    className="reveal-image interactive-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white bg-[#17324D]/90 backdrop-blur-xs px-2.5 py-1 rounded">
                    {report.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-stone-500">
                    <span>{report.publicationDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{report.location}</span>
                  </div>

                  <h3
                    onClick={() => navigateTo('reports', undefined, report.slug)}
                    className="font-['Manrope'] font-bold text-base text-[#17324D] group-hover:text-[#2459A9] transition-colors leading-snug cursor-pointer line-clamp-2"
                  >
                    {report.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {report.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => navigateTo('reports', undefined, report.slug)}
                  className="text-xs font-bold text-[#17324D] hover:text-[#2459A9] flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Read Report Online</span>
                </button>

                <button
                  onClick={() => navigateTo('reports', undefined, report.slug)}
                  className="p-1.5 rounded-lg border border-stone-200 text-[#E98A32] hover:bg-stone-50 transition-colors"
                  title="Download Report"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
