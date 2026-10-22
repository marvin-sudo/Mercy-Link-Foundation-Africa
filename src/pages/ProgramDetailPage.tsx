import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProgramId } from '../types';
import {
  Heart,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Users,
  Send,
  Play,
  FileText,
  Building2,
  ShieldAlert,
  Target,
  CheckSquare,
  Sparkles,
  Baby,
  MapPin,
  Radio,
  Tv,
  MessageCircle,
  Home,
  ShieldCheck,
  Compass,
  Layers,
  BookOpen,
  Church,
  GraduationCap,
  Award,
  Globe,
  Smile
} from 'lucide-react';

export const ProgramDetailPage: React.FC = () => {
  const {
    selectedProgramId,
    programs,
    reports,
    navigateTo,
    openDonationModal,
    openVideoModal,
    addEnquiry
  } = useApp();

  const program = programs.find((p) => p.id === selectedProgramId) || programs[0];
  const relatedReports = reports.filter((r) =>
    r.category.toLowerCase().includes(program.name.toLowerCase().split(' ')[0])
  );

  // Enquiry form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submittedEnquiryId, setSubmittedEnquiryId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;
    setSubmitting(true);
    try {
      const id = await addEnquiry({
        type: 'program',
        fullName,
        email,
        phone,
        programInterest: program.name,
        message
      });
      setSubmittedEnquiryId(id);
      setMessage('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Full Width */}
      <section className="reveal-up w-full relative overflow-hidden bg-[#17324D] text-white min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] flex items-end py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-12 xl:px-16 shadow-md border-b border-white/10">
        <img
          src={program.imageUrl}
          alt={program.name}
          className="reveal-image absolute inset-0 w-full h-full object-cover opacity-35 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17324D] via-[#17324D]/75 to-[#17324D]/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto space-y-2.5">
          {/* Back button & Breadcrumb */}
          <div>
            <button
              onClick={() => navigateTo('programs')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-[#E98A32] bg-white/10 hover:bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full transition-all"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back to All Programs</span>
            </button>
          </div>

          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#E98A32]">
            {program.category} · Official Ministry Program
          </span>
          <h1 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            {program.name}
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-white/90 font-medium italic max-w-3xl line-clamp-2">
            "{program.tagline}"
          </p>

          <div className="pt-1 flex flex-wrap gap-2.5">
            <button
              onClick={() => openDonationModal(program.name)}
              className="px-5 py-2.5 bg-[#E98A32] hover:bg-[#d47926] text-white rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-2 interactive-button"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Support This Program</span>
            </button>

            {program.id === 'disability-ministry' && (
              <button
                onClick={openVideoModal}
                className="px-4 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 interactive-button"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Watch Ministry Video</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2 & 3: Overview and The Need */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {program.id === 'disability-ministry' ? (
              /* =========================================================================
                 DISABILITY MINISTRY SPECIALIZED LAYOUT (OFFICIAL CONSTITUTIONAL TEXT)
                 ========================================================================= */
              <div className="space-y-10">
                {/* 1. MISSION STATEMENT */}
                <div className="reveal-up p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4 relative overflow-hidden">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                    <Heart className="w-4 h-4 text-[#E98A32]" />
                    <span>MISSION STATEMENT</span>
                  </div>
                  <h2 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl text-[#17324D] leading-snug">
                    Imitating Christ's Love to Restore Dignity & Opportunity
                  </h2>
                  <p className="font-['Playfair_Display'] text-base sm:text-lg text-[#17324D] leading-relaxed italic border-l-4 border-[#E98A32] pl-4 sm:pl-6 bg-[#FAF7F0] p-5 rounded-r-2xl">
                    “To imitate the love and compassion of Jesus Christ in reaching out to the deprived, neglected and needy people with disabilities, especially children. Helping them to make life meaningful through education, life skills training, and business assistance to integrate well into the Society.”
                  </p>
                </div>

                {/* 2. DESCRIPTION OF FOCAL PROBLEM */}
                <div className="reveal-up p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2459A9]">
                    <ShieldAlert className="w-4 h-4 text-[#2459A9]" />
                    <span>DESCRIPTION OF FOCAL PROBLEM</span>
                  </div>
                  <h3 className="font-['Playfair_Display'] font-bold text-xl sm:text-2xl text-[#17324D]">
                    Overcoming Social Taboos, Marginalization & Educational Neglect
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-['Plus_Jakarta_Sans']">
                    <p>
                      There exist negative attitudes and social taboos against PWDs in many parts of the World and that includes Uganda. This leads to the neglect of these vulnerable people hampering the development of their God-given potentials.
                    </p>
                    <p>
                      To many parents, it is a waste of resources and an unnecessary bother to send the physically challenged such as the deaf, the blind or the cripple to school. These children are usually marginalized. Some parents who might be very poor but willing to send Children with Disabilities (CWDs) to School would otherwise prefer to rather educate able children.
                    </p>
                  </div>
                </div>

                {/* 3. BRIEF DESCRIPTION OF THE PROJECT & PROJECT SCOPE */}
                <div className="reveal-up space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                      PROJECT SCOPE
                    </span>
                    <h3 className="font-['Playfair_Display'] font-bold text-2xl text-[#17324D]">
                      BRIEF DESCRIPTION OF THE PROJECT
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      Our priorities include the following project scopes, aligning with core categories of disability-related work:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-group">
                    {/* Scope 1: Inclusive Education */}
                    <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-[#2459A9]/10 text-[#2459A9] flex items-center justify-center font-bold text-base">
                        □
                      </div>
                      <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                        Inclusive Education
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Projects that improve the quality of inclusive education, or that help increase the number of children with disabilities being supported in a classroom setting.
                      </p>
                    </div>

                    {/* Scope 2: Disability Service */}
                    <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-[#E98A32]/10 text-[#E98A32] flex items-center justify-center font-bold text-base">
                        □
                      </div>
                      <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                        Disability Service
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Covering therapeutic expenses, funding programs and/or providing assistive devices exclusively for people with disabilities.
                      </p>
                    </div>

                    {/* Scope 3: Inclusive Development */}
                    <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-700/10 text-emerald-700 flex items-center justify-center font-bold text-base">
                        □
                      </div>
                      <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                        Inclusive Development
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Activities that are important in improving the quality of life of a community, benefitting people of all abilities, including those with disabilities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. MEASURABLE GOALS */}
                <div className="reveal-up space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                      <Target className="w-4 h-4 text-[#E98A32]" />
                      <span>SPECIFIC IMPACT MILESTONES</span>
                    </div>
                    <h3 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-[#17324D]">
                      MEASURABLE GOALS
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      Through this project, we are aiming to accomplish the following goals (reporting verified people impacted, timeline, and leadership mobilization):
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Goal 1: Awareness */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className="font-['Manrope'] font-bold text-lg text-[#17324D] flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#17324D] text-white flex items-center justify-center text-xs font-bold">1</span>
                          <span>Awareness</span>
                        </h4>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-[#E98A32] border border-amber-200">
                          Active Since January 2014
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        These have been done on individual, Family, community and national levels through meetings on Village, school, churches, parish and national levels in partnership with the local churches working hand in hand with community leaders. Through the awareness programs, we work towards raising awareness and providing information that may help churches, families and communities with disabled children/people better understand their disability. Through the awareness program, we have so far reached <strong>25 districts</strong> with a total of <strong>83 community leaders</strong>, and <strong>722 individuals</strong> from the communities since January 2014.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        <div className="p-4 bg-[#FAF7F0] rounded-2xl border border-stone-200 text-center">
                          <span className="font-extrabold text-2xl text-[#17324D] block">25</span>
                          <span className="text-xs text-stone-600 font-semibold">Districts Reached</span>
                        </div>
                        <div className="p-4 bg-[#FAF7F0] rounded-2xl border border-stone-200 text-center">
                          <span className="font-extrabold text-2xl text-[#E98A32] block">83</span>
                          <span className="text-xs text-stone-600 font-semibold">Community Leaders</span>
                        </div>
                        <div className="p-4 bg-[#FAF7F0] rounded-2xl border border-stone-200 text-center">
                          <span className="font-extrabold text-2xl text-[#2459A9] block">722</span>
                          <span className="text-xs text-stone-600 font-semibold">Individuals Engaged</span>
                        </div>
                      </div>
                    </div>

                    {/* Goal 2: Community based rehabilitation */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className="font-['Manrope'] font-bold text-lg text-[#17324D] flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#17324D] text-white flex items-center justify-center text-xs font-bold">2</span>
                          <span>Community Based Rehabilitation</span>
                        </h4>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                          Self-Help & Dignity
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        Disabled people must and will be active in its planning and implementation. This way they will gain in responsibility and grow in self-esteem. Through this, throughout Uganda self-help groups shall be formed which run income-generating activities such as knitting, making crafts, mending, tailoring or rearing livestock changing the trend of begging outside churches and empowering them.
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs font-semibold text-stone-700">
                        <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 text-center">Knitting & Crafts</div>
                        <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 text-center">Tailoring & Mending</div>
                        <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 text-center">Rearing Livestock</div>
                        <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 text-center">Self-Help Circles</div>
                      </div>
                    </div>

                    {/* Goal 3: Discipleship/life skill programs and Scripture Placement Program */}
                    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className="font-['Manrope'] font-bold text-lg text-[#17324D] flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#17324D] text-white flex items-center justify-center text-xs font-bold">3</span>
                          <span>Discipleship/Life Skill Programs & Scripture Placement</span>
                        </h4>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#2459A9] border border-blue-200">
                          “Raising Hope” Discipleship
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        We shall be engaged in evangelism and discipleship programs including rehabilitation and reconciliation support to the beneficiaries using the <strong>“Raising Hope”</strong> discipleship program. We are currently engaged in reaching and discipling children with disabilities at institutional and community levels. One such program is at <strong>Kampala School of the Handicapped</strong> where <strong>157 children with disabilities</strong> are enrolled in our discipleship and life skill programs.
                      </p>

                      <div className="p-5 bg-gradient-to-r from-[#17324D] to-[#2459A9] text-white rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
                        <div>
                          <span className="text-xs font-bold text-[#E98A32] uppercase tracking-wider block">
                            Key Institutional Partner
                          </span>
                          <p className="font-bold text-base">Kampala School of the Handicapped</p>
                          <p className="text-xs text-white/80">Reaching & discipling children with disabilities</p>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className="font-extrabold text-3xl text-white">157</span>
                          <p className="text-xs text-[#E98A32] font-bold">Enrolled Children with Disabilities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : program.id === 'prison-ministry' ? (
              /* =========================================================================
                 PRISON MINISTRY SPECIALIZED LAYOUT (OFFICIAL CONSTITUTIONAL TEXT)
                 ========================================================================= */
              <div className="space-y-10">
                {/* 1. Overview & Verified Access */}
                <div className="reveal-up p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5 relative overflow-hidden">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                    <ShieldCheck className="w-4 h-4 text-[#E98A32]" />
                    <span>OFFICIAL CORRECTIONAL ACCESS</span>
                  </div>
                  <h2 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl text-[#17324D] leading-snug">
                    Reaching Behind Prison Walls with the Gospel of Restoration
                  </h2>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-['Plus_Jakarta_Sans']">
                    One other Major area of our operation is the prisons in Uganda. God has granted us full leverage and access to all prisons in Uganda. This has so far given us access to over <strong>12,000 prisoners</strong> in different districts since the year begun and over <strong>5,130 committing and rededicating their lives to Christ</strong>.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 bg-[#FAF7F0] rounded-2xl border border-stone-200 text-center space-y-1">
                      <span className="font-extrabold text-3xl text-[#17324D] block">12,000+</span>
                      <span className="text-xs text-stone-600 font-semibold">Prisoners Accessed</span>
                    </div>
                    <div className="p-4 bg-[#FAF7F0] rounded-2xl border border-stone-200 text-center space-y-1">
                      <span className="font-extrabold text-3xl text-[#E98A32] block">5,130+</span>
                      <span className="text-xs text-stone-600 font-semibold">Committed Lives to Christ</span>
                    </div>
                    <div className="p-4 bg-[#FAF7F0] rounded-2xl border border-stone-200 text-center space-y-1">
                      <span className="font-extrabold text-3xl text-[#2459A9] block">30,312</span>
                      <span className="text-xs text-stone-600 font-semibold">Inmates in National Scope</span>
                    </div>
                  </div>
                </div>

                {/* 2. Statistical Breakdown: Men, Women & Children in Ugandan Prisons */}
                <div className="reveal-up p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2459A9]">
                      <Users className="w-4 h-4 text-[#2459A9]" />
                      <span>PRISON DEMOGRAPHIC REALITY</span>
                    </div>
                    <h3 className="font-['Playfair_Display'] font-bold text-xl sm:text-2xl text-[#17324D]">
                      Understanding the Ugandan Prison Population
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-['Plus_Jakarta_Sans']">
                    Across the globe, prison systems are a male-dominated area of society and Uganda is no exception to this. In fact in Uganda, the prisons have a total of about <strong>30,312 inmates</strong>.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-stone-200 space-y-2">
                      <h4 className="font-bold text-sm text-[#17324D]">
                        Women in Uganda Prisons (5%)
                      </h4>
                      <p className="text-stone-600 leading-relaxed">
                        Women make up only five percent of the inmates in Uganda prisons. <strong>1,280 inmates</strong> of the 30,312 inmates held in Uganda prisons are women. <strong>28 of the female inmates are on death row</strong>, <strong>468 are convicts</strong> while another <strong>812 are on remand</strong>.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-stone-200 space-y-2">
                      <h4 className="font-bold text-sm text-[#17324D] flex items-center gap-2">
                        <Baby className="w-4 h-4 text-[#E98A32]" />
                        <span>Children in Prison Realities</span>
                      </h4>
                      <p className="text-stone-600 leading-relaxed">
                        Children in women’s prisons in Uganda make up about 10 per cent of the population. Added to the number of imprisoned juveniles under the age of 18, the reality is that children make up closer to 20 per cent of the prison population in this region.
                      </p>
                    </div>
                  </div>

                  {/* Urgent Attention Alert: 161 Innocent Children */}
                  <div className="p-5 bg-amber-50 border-2 border-amber-300/80 rounded-2xl flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E98A32] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Heart className="w-5 h-5 fill-white" />
                    </div>
                    <div className="space-y-1 text-xs">
                      <h5 className="font-bold text-sm text-[#17324D]">
                        Over 161 Innocent Children in Prison
                      </h5>
                      <p className="text-stone-700 leading-relaxed">
                        Over 161 innocent children are languishing in Uganda Prisons because of crimes committed by their mothers. Mercy Link Foundation Africa actively provides sanitary relief, nutrition, and compassionate care for these infants and young toddlers.
                      </p>
                    </div>
                  </div>

                  {/* Youth Population & Preventive Strategy */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-bold text-sm text-[#17324D]">
                      The 70% Youth Demographic: Preventive Rehabilitation
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      This therefore poses a huge opportunity to reach the lost in these institutions yet untapped. Most of the inmates about <strong>70% are youths below the age of 40</strong> meaning if not well rehabilitated, still have much potential to come out and cause much more havoc in the communities where they come from. This therefore calls for an establishment of a preventive measure to curb the problem before it happens. This has been our goal even as we reach out to these prisons.
                    </p>
                  </div>
                </div>

                {/* 3. Prison Churches, Active Stations & Warders Strategy */}
                <div className="reveal-up p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                      IMPLEMENTATION STRATEGY
                    </span>
                    <h3 className="font-['Playfair_Display'] font-bold text-xl sm:text-2xl text-[#17324D]">
                      Establishment of Prison Churches & Discipleship Programs
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      We have effectively done this through the establishment of Prison churches in the prisons and establishment of discipleship programs in these prisons. To date such programs run in:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 bg-[#FAF7F0] rounded-xl border border-stone-200 flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#2459A9] shrink-0" />
                      <span className="font-semibold text-stone-800">Luzira Remand & Women Prison</span>
                    </div>
                    <div className="p-3.5 bg-[#FAF7F0] rounded-xl border border-stone-200 flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#2459A9] shrink-0" />
                      <span className="font-semibold text-stone-800">Murchison Bay Prison</span>
                    </div>
                    <div className="p-3.5 bg-[#FAF7F0] rounded-xl border border-stone-200 flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#2459A9] shrink-0" />
                      <span className="font-semibold text-stone-800">Kauga Prison</span>
                    </div>
                    <div className="p-3.5 bg-[#FAF7F0] rounded-xl border border-stone-200 flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#2459A9] shrink-0" />
                      <span className="font-semibold text-stone-800">Kigo Prison (Men & Women)</span>
                    </div>
                    <div className="p-3.5 bg-[#FAF7F0] rounded-xl border border-stone-200 flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#2459A9] shrink-0" />
                      <span className="font-semibold text-stone-800">Jinja Kirinya (Women & Main)</span>
                    </div>
                    <div className="p-3.5 bg-[#FAF7F0] rounded-xl border border-stone-200 flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#2459A9] shrink-0" />
                      <span className="font-semibold text-stone-800">Kasangati Prison</span>
                    </div>
                    <div className="p-3.5 bg-[#FAF7F0] rounded-xl border border-stone-200 flex items-center gap-2.5 sm:col-span-2 md:col-span-1">
                      <MapPin className="w-4 h-4 text-[#2459A9] shrink-0" />
                      <span className="font-semibold text-stone-800">Kitala Prison</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-500 italic">
                    ...and now expanding to different prisons in different communities across Uganda.
                  </p>

                  {/* Warders Strategy */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-[#17324D] to-[#2459A9] text-white space-y-2 shadow-md">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#E98A32] uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-[#E98A32]" />
                      <span>Correctional Warder Church Planters</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-['Plus_Jakarta_Sans']">
                      This strategy also encompasses prison warders from whom potential church planters are identified and commissioned to oversee the prison churches, ensuring uninterrupted pastoral discipleship from within the institution.
                    </p>
                  </div>
                </div>
              </div>
            ) : program.id === 'church-planters' ? (
              /* =========================================================================
                 CHURCH PLANTER TRAINING SPECIALIZED LAYOUT (OFFICIAL CONSTITUTIONAL TEXT)
                 ========================================================================= */
              <div className="space-y-10">
                {/* 1. Vision Callout */}
                <div className="reveal-up p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5 relative overflow-hidden">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                    <Church className="w-4 h-4 text-[#E98A32]" />
                    <span>CHURCH PLANTING & TRAINING INITIATIVE</span>
                  </div>
                  <h2 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17324D] leading-snug">
                    A Living Church in Every Community
                  </h2>
                  <div className="border-l-4 border-[#E98A32] pl-4 sm:pl-6 bg-[#FAF7F0] p-6 rounded-r-2xl space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E98A32] block">
                      OUR OVERALL VISION
                    </span>
                    <p className="font-['Playfair_Display'] text-base sm:text-xl text-[#17324D] leading-relaxed italic font-bold">
                      “A LIVING CHURCH IN EVERY COMMUNITY, PLANTED BY ORDINARY BELIEVERS WHO ARE EQUIPPED WITH PRACTICAL SKILLS AND TOOLS”
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-['Plus_Jakarta_Sans'] font-normal pt-1">
                      A Living Church in every community planted by ordinary believers implies churches planted by mature and committed indigenous/local believers from a specific people group who have a burden to evangelize and disciple their own communities.
                    </p>
                  </div>

                  {/* 2. Goal & The Modular Approach */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2459A9]">
                      <Target className="w-4 h-4 text-[#2459A9]" />
                      <span>THE GOAL OF THE INITIATIVE</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-['Plus_Jakarta_Sans']">
                      The goal in the Church Planting and Training Initiative is to establish a rapid increase of indigenous Churches among unreached people groups that will be capable of sustaining evangelization and discipleship of their own communities. The initiative is coordinated and run by trained local Church believers within a specific people group.
                    </p>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-['Plus_Jakarta_Sans']">
                      In the current program, ordinary, mature believers, native of a typical community/tribe, will be equipped with good knowledge of the Bible, trained on practical skills are envisaged for Church Planting and training to plant a living Church in every community in Africa.
                    </p>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-['Plus_Jakarta_Sans']">
                      The essence of the training is to build national church planters to plant churches as Jesus Christ commanded us to go, preach and make disciples of all nations. The training adopts a Modular (5 Modules) system offering a contextual and practical skill transfer on to the church planters providing opportunities to empower churches evangelize and counter non-biblical churches and groups. The alternative training program is sought because education of the church planters is expensive and churches don’t have adequate resources to address the needs. Hence, the alternative program, apart from helping churches focus on church planting has increased the native missionaries and cross-cultural missionaries to work beyond African boundaries. The program approach has also fostered unity among denominations and focused on the kingdom.
                    </p>
                  </div>

                  {/* Theme Box */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-[#17324D] to-[#2459A9] text-white space-y-1.5 shadow-md">
                    <span className="text-[10px] font-bold text-[#E98A32] uppercase tracking-wider block">
                      INITIATIVE THEME
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed font-medium">
                      “To empower Churches in our Region with Practical Church Planting skills and other resources to establish in every community reproducible and sustainable indigenous churches through Church planting as the most appropriate method of evangelism to un-reached communities.”
                    </p>
                  </div>
                </div>

                {/* 3. Church Planter Image with Signature Curved Border */}
                <div className="charity-image-shape overflow-hidden border border-stone-200/80 shadow-md relative h-64 sm:h-80 group">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80"
                    alt="Church Planter Summit and Leadership Training"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/aistudio/Charity_website_0802821e.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/85 via-[#17324D]/30 to-transparent flex items-end p-6">
                    <div>
                      <span className="text-[10px] font-bold text-[#E98A32] uppercase tracking-wider block">
                        Indigenous Multiplication
                      </span>
                      <p className="text-white text-base sm:text-lg font-bold font-['Manrope']">
                        Modular 5-Phase Skill Transfer for Ordinary Believers
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Obligation of the Program (3 Key Pillars) */}
                <div className="reveal-up space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                      PROGRAM ARCHITECTURE
                    </span>
                    <h3 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-[#17324D]">
                      Obligation of the Program
                    </h3>
                  </div>

                  {/* Pillar 1: Modular Church Planter Training */}
                  <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-[#2459A9]" />
                      <h4 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
                        Module Church Planter Training (5 Phases)
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      The centrepiece of the program is a scalable, 5-phase training curriculum designed to take leaders from initial outreach to a self-sustaining, multiplying church:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
                      {[
                        { module: 'Module 1', title: 'Evangelism', desc: 'Strategies for effectively engaging communities and sharing the gospel.' },
                        { module: 'Module 2', title: 'Discipleship', desc: 'Foundational teaching to help new believers grow in the image of Christ.' },
                        { module: 'Module 3', title: 'Membership', desc: 'Organizing new believers into healthy, functioning local church bodies.' },
                        { module: 'Module 4', title: 'Leadership', desc: 'Identifying and equipping pastors and lay leaders with practical administrative and pastoral skills.' },
                        { module: 'Module 5', title: 'Multiplication', desc: 'Training the church to reproduce itself by planting new daughter congregations.' },
                      ].map((mod, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F0] border border-stone-200 space-y-1.5 hover:shadow-xs transition-shadow">
                          <span className="text-[10px] font-mono font-bold text-[#E98A32] uppercase">{mod.module}</span>
                          <h5 className="font-bold text-sm text-[#17324D]">{mod.title}</h5>
                          <p className="text-xs text-stone-600 leading-relaxed">{mod.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pillar 2 & 3: Coaching + Literature Hub */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mentoring & Coaching */}
                    <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#E98A32]" />
                        <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                          Mentoring & Coaching for Pastors
                        </h4>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        To prevent burnout and ensure ongoing accountability, planters are paired with experienced, vetted coaches:
                      </p>
                      <div className="space-y-3 pt-1 text-xs">
                        <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                          <strong className="text-stone-900 block font-semibold">Regular Check-ins</strong>
                          <p className="text-stone-600">Monthly one-on-one or cohort-based meetings to review ministry progress and overcome hurdles.</p>
                        </div>
                        <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                          <strong className="text-stone-900 block font-semibold">Pastoral Care</strong>
                          <p className="text-stone-600">A safe space for pastors to receive personal encouragement, theological guidance, and emotional/spiritual support.</p>
                        </div>
                        <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                          <strong className="text-stone-900 block font-semibold">Strategic Planning</strong>
                          <p className="text-stone-600">Assisting planters in adapting the 5-module training to the unique socio-cultural realities of their specific neighborhoods.</p>
                        </div>
                      </div>
                    </div>

                    {/* Discipleship Materials & Christian Literature */}
                    <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-[#2459A9]" />
                        <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                          Discipleship Materials & Christian Literature
                        </h4>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        A resource hub that supplies planters with the foundational physical and digital tools needed for their congregations: Planters receive tangible tools to execute ministry effectively from day one.
                      </p>
                      <div className="space-y-3 pt-1 text-xs">
                        <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                          <strong className="text-stone-900 block font-semibold">Discipleship Materials</strong>
                          <p className="text-stone-600">Structured study guides for small groups and cells.</p>
                        </div>
                        <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                          <strong className="text-stone-900 block font-semibold">Gospel Tracts</strong>
                          <p className="text-stone-600">Culturally relevant print tools for mass evangelism.</p>
                        </div>
                        <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                          <strong className="text-stone-900 block font-semibold">Bibles</strong>
                          <p className="text-stone-600">Scripture copies for new believers and spiritual searchers.</p>
                        </div>
                        <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                          <strong className="text-stone-900 block font-semibold">Christian Literature</strong>
                          <p className="text-stone-600">Leadership books and theology texts for pastoral growth.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Objective of the Program */}
                <div className="reveal-up p-8 rounded-3xl bg-[#FAF7F0] border border-stone-200/90 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                    <Target className="w-4 h-4 text-[#E98A32]" />
                    <span>PROGRAM OBJECTIVE</span>
                  </div>
                  <h4 className="font-['Playfair_Display'] font-bold text-xl text-[#17324D]">
                    18 Months Practical Holistic Development Training Program
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-['Plus_Jakarta_Sans']">
                    The main objective of this project is to train Church planters (Ordinary believers) in Uganda in a 5 module practical holistic development training program for <strong>18 months</strong> to share the Gospel of Jesus Christ, conduct adult and children’s cells/home groups, plant new churches in communities, bring about spiritual transformation and create a legacy of peace in communities and nations.
                  </p>
                </div>

                {/* 6. Process of the Church Planting and Training Program */}
                <div className="reveal-up p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#2459A9]">
                      SYSTEMATIC EXECUTION
                    </span>
                    <h3 className="font-['Playfair_Display'] font-bold text-2xl text-[#17324D]">
                      Process of the Church Planting & Training Program
                    </h3>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm text-stone-700 font-['Plus_Jakarta_Sans']">
                    {[
                      { step: '(a)', text: 'Mobilize and sharing the vision with national and local churches across all denominations. Share with the leadership what we offer, schedules, our obligations and commitment and help them understand their obligations and responsibilities.' },
                      { step: '(b)', text: 'Work with grassroots partners to identify unreached people groups and recruit Church planters through the sending churches, with help of guidelines jointly produced by Churches and partners.' },
                      { step: '(c)', text: 'Design and develop appropriate training, coaching, follow-up, visitation, management, reporting systems to measure success.' },
                      { step: '(d)', text: 'Provide platform for continuous education, resourcing, networking and multiplication in the initiative.' },
                    ].map((proc, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#17324D] text-white flex items-center justify-center text-xs font-bold shrink-0">
                          {proc.step}
                        </span>
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pt-1">
                          {proc.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : program.id === 'family-foundations' ? (
              /* =========================================================================
                 FAMILY FOUNDATIONS SPECIALIZED LAYOUT (OFFICIAL CONSTITUTIONAL TEXT)
                 ========================================================================= */
              <div className="space-y-10">
                {/* 1. Guiding Theme & Quote */}
                <div className="reveal-up p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5 relative overflow-hidden">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                    <Home className="w-4 h-4 text-[#E98A32]" />
                    <span>FAMILY FOUNDATIONS</span>
                  </div>
                  <h2 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17324D] leading-snug">
                    Strengthening the Bedrock of Society
                  </h2>
                  <p className="font-['Playfair_Display'] text-base sm:text-xl text-[#17324D] leading-relaxed italic border-l-4 border-[#E98A32] pl-4 sm:pl-6 bg-[#FAF7F0] p-5 rounded-r-2xl">
                    “When families struggle or fail, our churches, communities, culture and nations at large suffer.”
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-stone-200 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2459A9] block">
                        Our Vision
                      </span>
                      <h4 className="font-['Playfair_Display'] font-bold text-lg text-[#17324D]">
                        Healthy Families, Prosperous Communities, Stable Country
                      </h4>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-stone-200 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E98A32] block">
                        Our Mission
                      </span>
                      <p className="text-xs text-stone-700 leading-relaxed font-medium">
                        To establish family centered wholistic programs that will equip individuals at the different levels of development with life skills and coping mechanisms that enable them lead a fulfilling and productive life to and through families.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Changing Family Context in Africa */}
                <div className="reveal-up p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2459A9] block">
                    Context & The Need
                  </span>
                  <h3 className="font-['Playfair_Display'] font-bold text-xl sm:text-2xl text-[#17324D]">
                    Restoring Hope Amid Changing African Family Patterns
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-['Plus_Jakarta_Sans']">
                    <p>
                      Families come in all shapes, sizes, generations and degrees of vulnerability. While all families are different they are the basic social structure into which we are all born. For generations, the family has been a source of strength for guidance and support, thus providing members with a wide circle of relatives on whom they can fall back. In times of crisis, unemployment, sickness, poverty, old age, and bereavement, most people rely on the family as the main source of material, social and emotional support and social security.
                    </p>
                    <p>
                      Throughout the continent, traditional family patterns are changing. Colonialism, capitalism, the growth of cities, exposure to Western culture, and increasing opportunities for women are some the factors that are affecting the shape of family life. Unlike the past where each person in African traditional life lived in or as a part of the family, today, many marriages and families are splitting up or simply reeling in dysfunction due to Domestic Violence, poverty, increasing Teenage Sexuality, bad parenting, as younger people leave rural households to work in cities, women are increasingly becoming the family breadwinners, as the number of female‐headed households increase raising children apart from the traditional family frameworks among other factors.
                    </p>
                  </div>

                  {/* Family Image Embedded with Signature Diagonal Curved Border */}
                  <div className="charity-image-shape overflow-hidden border border-stone-200/80 shadow-md relative h-64 sm:h-80 group">
                    <img
                      src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
                      alt="African family discipleship and togetherness"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/aistudio/Charity_website_0802821e.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/80 via-transparent to-transparent flex items-end p-5">
                      <div>
                        <span className="text-[10px] font-bold text-[#E98A32] uppercase tracking-wider block">Family Foundations</span>
                        <p className="text-white text-base font-bold font-['Manrope']">Equipping Families to Lead Fulfilling & Productive Lives</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. The 12 Official Activities */}
                <div className="reveal-up space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                      CORE INITIATIVES
                    </span>
                    <h3 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-[#17324D]">
                      Family Foundations Activities
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600">
                      Our holistic programming spans twelve focused avenues of engagement:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-semibold text-stone-800">
                    {[
                      { title: 'Seminars', desc: 'Practical teaching modules for communities and churches' },
                      { title: 'Positive Parenting', desc: 'Equipping parents with non-violent discipline & child nurture' },
                      { title: 'Pastors and Pastors’ Wives', desc: 'Enrichment, rest, and renewal for ministry marriages' },
                      { title: 'Worshippers / Volunteers', desc: 'Equipping community volunteers with family ministry tools' },
                      { title: 'Media Programming', desc: 'Impactful broadcasts across TV, Radio and Social Media' },
                      { title: 'Counselling', desc: 'Confidential, biblical guidance for couples and individuals' },
                      { title: 'Kingdom Maximized Men Program', desc: 'Challenging men to spiritual leadership and family responsibility' },
                      { title: 'Girl Talk', desc: 'Safe spaces guiding adolescent girls into godly womanhood' },
                      { title: 'Retreats', desc: 'Restorative weekend getaways for couples and caregivers' },
                      { title: 'Outreaches', desc: 'Taking family healing directly into villages and informal settlements' },
                      { title: 'Literature Development', desc: 'Publishing contextually grounded family workbooks & guides' },
                      { title: 'Fellowships', desc: 'Regular small-group family gatherings for mutual accountability' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[#E98A32] font-mono text-xs font-bold">0{idx + 1}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2459A9]" />
                        </div>
                        <h4 className="font-['Manrope'] font-bold text-sm text-[#17324D]">{item.title}</h4>
                        <p className="text-[11px] text-stone-500 font-normal leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : program.id === 'childrens-ministry' ? (
              /* =========================================================================
                 CHILDREN'S MINISTRY SPECIALIZED LAYOUT (OFFICIAL CONSTITUTIONAL TEXT)
                 ========================================================================= */
              <div className="space-y-10">
                {/* 1. Goal Callout & Vision */}
                <div className="reveal-up p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5 relative overflow-hidden">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                    <Baby className="w-4 h-4 text-[#E98A32]" />
                    <span>CHILD EVANGELISM & DISCIPLESHIP</span>
                  </div>
                  <h2 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17324D] leading-snug">
                    Nurturing Children for God's Kingdom
                  </h2>

                  {/* 3 Pillars of the Goal */}
                  <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-stone-200 space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E98A32] block">
                      CORE GOAL OF THE CHILDREN'S MINISTRY PROGRAM
                    </span>
                    <p className="text-xs sm:text-sm text-stone-700 font-medium">
                      The goal of the Children’s ministry program is to nurture children for:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1 shadow-xs">
                        <span className="w-7 h-7 rounded-lg bg-[#17324D] text-white flex items-center justify-center text-xs font-bold">1</span>
                        <h4 className="font-bold text-sm text-[#17324D]">Personal Relationship with God</h4>
                        <p className="text-[11px] text-stone-500">Cultivating authentic faith and daily walk with Christ.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1 shadow-xs">
                        <span className="w-7 h-7 rounded-lg bg-[#E98A32] text-white flex items-center justify-center text-xs font-bold">2</span>
                        <h4 className="font-bold text-sm text-[#17324D]">Grow with Healthy Character</h4>
                        <p className="text-[11px] text-stone-500">Pursuing godly character, moral integrity, and respect.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-1 shadow-xs">
                        <span className="w-7 h-7 rounded-lg bg-[#2459A9] text-white flex items-center justify-center text-xs font-bold">3</span>
                        <h4 className="font-bold text-sm text-[#17324D]">Advance the Kingdom through Outreach</h4>
                        <p className="text-[11px] text-stone-500">Equipping children as young ambassadors of the Gospel.</p>
                      </div>
                    </div>
                  </div>

                  {/* Raising Hope Background & 3 Modules */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2459A9]">
                      <Sparkles className="w-4 h-4 text-[#2459A9]" />
                      <span>THE “RAISING HOPE” CURRICULUM</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-['Plus_Jakarta_Sans']">
                      Children Ministry training curriculum <strong>“Raising Hope”</strong> was developed in Uganda by a team of pastors as part of the response to the crisis that began in South Sudan in December 2013.
                    </p>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-['Plus_Jakarta_Sans']">
                      The curriculum consists of <strong>3 modules</strong>:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                      <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#2459A9] block">MODULE 1</span>
                        <h4 className="font-bold text-base text-[#17324D]">CONNECTED</h4>
                        <p className="text-xs text-stone-600">Our personal relationship with God.</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#E98A32] block">MODULE 2</span>
                        <h4 className="font-bold text-base text-[#17324D]">PERFECTED</h4>
                        <p className="text-xs text-stone-600">Pursuing Godly character.</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">MODULE 3</span>
                        <h4 className="font-bold text-base text-[#17324D]">DIRECTED</h4>
                        <p className="text-xs text-stone-600">Advancing the Kingdom God’s way.</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-['Plus_Jakarta_Sans'] pt-2">
                      Today the program is being introduced to different regions in Africa, refugee camps, churches and schools after consultation with church leaders and a vision casting seminar.
                    </p>
                  </div>

                  {/* Vision Box */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-[#17324D] to-[#2459A9] text-white space-y-1.5 shadow-md">
                    <span className="text-[10px] font-bold text-[#E98A32] uppercase tracking-wider block">
                      OUR VISION
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed font-medium">
                      “To empower, equip, and connect children’s ministry leaders to effectively reach and disciple children in the local church, communities and schools.”
                    </p>
                  </div>
                </div>

                {/* Children Image with Signature Diagonal Border */}
                <div className="charity-image-shape overflow-hidden border border-stone-200/80 shadow-md relative h-64 sm:h-80 group">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
                    alt="Children learning in Mercy Link community club"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/aistudio/Charity_website_0802821e.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/85 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <span className="text-[10px] font-bold text-[#E98A32] uppercase tracking-wider block">
                        Raising Hope
                      </span>
                      <p className="text-white text-base sm:text-lg font-bold font-['Manrope']">
                        Reaching & Discipling Children in Communities, Schools, and Refugee Camps
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Core Programs (6 Pillars) */}
                <div className="reveal-up space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                      CORE PROGRAMS
                    </span>
                    <h3 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-[#17324D]">
                      Comprehensive Children's Initiatives
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 1. Facilitator Mentoring & Coaching */}
                    <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#2459A9]" />
                        <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                          Facilitator Mentoring & Coaching
                        </h4>
                      </div>
                      <div className="space-y-2.5 text-xs">
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Masterclass Cohorts</strong>
                          <span className="text-stone-600">Year-long small group mentoring for ministry directors.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">On-Site Coaching</strong>
                          <span className="text-stone-600">Experienced consultants observing and guiding your local team.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Peer Networks</strong>
                          <span className="text-stone-600">Monthly regional roundtables for sharing resources and encouragement.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Spiritual Formations</strong>
                          <span className="text-stone-600">Dedicated retreats focusing on the spiritual health of workers.</span>
                        </div>
                      </div>
                    </div>

                    {/* 2. Children’s Workers Trainings */}
                    <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-[#E98A32]" />
                        <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                          Children’s Workers Trainings
                        </h4>
                      </div>
                      <div className="space-y-2.5 text-xs">
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Foundational Skills</strong>
                          <span className="text-stone-600">Basic child psychology, classroom management, and safety protocols.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Creative Communication</strong>
                          <span className="text-stone-600">Workshops on storytelling, puppetry, and object lessons.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Special Needs Inclusion</strong>
                          <span className="text-stone-600">Specialized training to serve children with diverse abilities.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Certification Ministry Program</strong>
                          <span className="text-stone-600">A three module children’s ministry training curriculum.</span>
                        </div>
                      </div>
                    </div>

                    {/* 3. Discipleship Programs */}
                    <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-[#E98A32]" />
                        <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                          Discipleship Programs
                        </h4>
                      </div>
                      <div className="space-y-2.5 text-xs">
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Light Fellowships</strong>
                          <span className="text-stone-600">Community and school-based discipleship programs.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Peer-to-Peer Discipleship</strong>
                          <span className="text-stone-600">Small group models designed for older children to mentor younger peers.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Family Devotional Kits</strong>
                          <span className="text-stone-600">Weekly devotionals for kids and families.</span>
                        </div>
                      </div>
                    </div>

                    {/* 4. Community Bible Clubs */}
                    <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                      <div className="flex items-center gap-2">
                        <Home className="w-5 h-5 text-[#2459A9]" />
                        <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                          Community Bible Clubs
                        </h4>
                      </div>
                      <div className="space-y-2.5 text-xs">
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Backyard Bible Clubs</strong>
                          <span className="text-stone-600">High-energy, neighborhood-based community programs run by volunteers.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">After-School Clubs</strong>
                          <span className="text-stone-600">Safe spaces hosting homework help, games, and Bible lessons.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Club Starter Kits</strong>
                          <span className="text-stone-600">All-in-one boxes containing banners, lesson guides, and games.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Local Partnership Model</strong>
                          <span className="text-stone-600">Connecting local churches to anchor and sustain neighborhood clubs.</span>
                        </div>
                      </div>
                    </div>

                    {/* 5. Community & School Outreaches */}
                    <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                      <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-[#2459A9]" />
                        <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                          Community & School Outreaches
                        </h4>
                      </div>
                      <div className="space-y-2.5 text-xs">
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">School Assemblies</strong>
                          <span className="text-stone-600">Values-based, engaging character-building programs for public and private assemblies.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Compassion Projects</strong>
                          <span className="text-stone-600">Organised community clean-ups and mercy ministry projects led by children.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Holiday Mega-Events</strong>
                          <span className="text-stone-600">Large-scale community festivals utilizing sports, fellowships, life skills, empowerment, praise and Worship.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Parenting Seminars</strong>
                          <span className="text-stone-600">Bridging communities by offering free child-rearing workshops to parents.</span>
                        </div>
                      </div>
                    </div>

                    {/* 6. Curriculum Hub */}
                    <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-[#E98A32]" />
                        <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                          Curriculum Hub
                        </h4>
                      </div>
                      <div className="space-y-2.5 text-xs">
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Age-Segregated Tracks</strong>
                          <span className="text-stone-600">Distinct, culturally relevant materials designed for toddlers through pre-teens.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Curriculums</strong>
                          <span className="text-stone-600">Children Sunday school curriculums, lesson plans, media slides, music and colouring sheets.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Adaptable Formats</strong>
                          <span className="text-stone-600">Easily modified schedules fitting 45-minute to 2-hour ministry slots.</span>
                        </div>
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block font-semibold">Scope and Sequence</strong>
                          <span className="text-stone-600">A transparent 3-year chronological journey through the entire Bible.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Program Objectives */}
                <div className="reveal-up p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#2459A9]">
                      STRATEGIC OBJECTIVES
                    </span>
                    <h3 className="font-['Playfair_Display'] font-bold text-2xl text-[#17324D]">
                      Children's Ministry Objectives
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
                    {[
                      'Establish children clubs across Uganda',
                      'Partnership with local churches and schools to nurture children for personal relationship with God and healthy character',
                      'Source children scripture materials and Bibles',
                      'Produce training materials that will be used by Children’s Ministry Teachers manual and participants work book',
                      'Train Master Trainers an approach aimed at multiplying the program',
                    ].map((obj, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F0] border border-stone-200 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium text-stone-800">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Standard Program Layout */
              <>
                {/* Overview */}
                <div className="reveal-up space-y-4">
                  <h2 className="font-['Manrope'] font-bold text-2xl text-[#17324D]">
                    Program Overview
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {program.overview}
                  </p>
                </div>

                {/* The Need Addressed */}
                <div className="reveal-up space-y-4 p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E98A32]" />
                    <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
                      The Community Need We Address
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {program.needAddressed}
                  </p>
                </div>

                {/* 4. Objectives */}
                <div className="space-y-4">
                  <h3 className="reveal-up font-['Manrope'] font-bold text-xl text-[#17324D]">
                    Core Program Objectives
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-group">
                    {program.objectives.map((obj, i) => (
                      <div key={i} className="reveal-up interactive-card flex items-start gap-3 p-4 bg-white rounded-xl border border-stone-200">
                        <CheckCircle2 className="w-4 h-4 text-[#2459A9] shrink-0 mt-0.5" />
                        <p className="text-xs text-stone-700 leading-snug">{obj}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Activities and Implementation */}
                <div className="space-y-4">
                  <h3 className="reveal-up font-['Manrope'] font-bold text-xl text-[#17324D]">
                    Key Activities & Implementation Approach
                  </h3>
                  <ul className="space-y-2.5 stagger-group">
                    {program.keyActivities.map((act, i) => (
                      <li key={i} className="reveal-up flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                        <span className="w-5 h-5 rounded-full bg-[#17324D] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 6. Intended Participants */}
                <div className="reveal-up p-6 bg-[#FAF7F0] rounded-2xl border border-stone-200 space-y-2">
                  <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                    Intended Participants & Beneficiaries
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {program.intendedParticipants}
                  </p>
                </div>

                {/* 7. Verified Outcomes */}
                <div className="space-y-4">
                  <h3 className="reveal-up font-['Manrope'] font-bold text-xl text-[#17324D]">
                    Documented & Verified Outcomes
                  </h3>
                  <div className="space-y-3 stagger-group">
                    {program.verifiedOutcomes.map((outcome, i) => (
                      <div key={i} className="reveal-up p-4 bg-white rounded-xl border border-emerald-200 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-stone-800 font-medium">{outcome}</span>
                      </div>
                    ))}
                  </div>
                  <p className="reveal-up text-[11px] text-stone-400">
                    Reporting Cycle: {program.reportingPeriod} · Verified under official field audit guidelines.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Right Sidebar: Quick Actions, Enquiries & Reports */}
          <div className="lg:col-span-4 space-y-8">
            {/* Support CTA Box */}
            <div className="reveal-up bg-[#17324D] text-white p-6 rounded-2xl shadow-lg space-y-4">
              <h3 className="font-['Manrope'] font-bold text-lg text-white">
                Support {program.name}
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Your direct contribution enables our field team to provide materials, mentorship, and emergency welfare
                for participants in this program.
              </p>
              <button
                onClick={() => openDonationModal(program.name)}
                className="w-full py-3 bg-[#E98A32] hover:bg-[#d47926] text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 interactive-button"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Designate a Gift to this Ministry</span>
              </button>
            </div>

            {/* 11. Program Enquiry Form */}
            <div className="reveal-up bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                Enquire About This Program
              </h3>
              <p className="text-xs text-stone-500">
                Are you a church, volunteer, or partner interested in {program.name}? Send a message directly to our program desk.
              </p>

              {submittedEnquiryId ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                  <p className="text-xs font-bold text-emerald-800">Enquiry Received!</p>
                  <p className="text-[11px] text-emerald-700">
                    Your reference number is <strong>{submittedEnquiryId}</strong>. Our team in Kampala will respond within 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmittedEnquiryId(null)}
                    className="text-[11px] text-[#2459A9] underline font-semibold"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                  <textarea
                    required
                    rows={3}
                    placeholder="How would you like to engage with this program?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 bg-[#17324D] hover:bg-[#2459A9] disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 interactive-button"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Sending...' : 'Submit Program Enquiry'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Related Reports */}
            {relatedReports.length > 0 && (
              <div className="reveal-up bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#17324D]">
                  Related Field Reports
                </h4>
                <div className="space-y-2 stagger-group">
                  {relatedReports.map((rep) => (
                    <button
                      key={rep.id}
                      onClick={() => navigateTo('reports', undefined, rep.slug)}
                      className="reveal-up interactive-card w-full text-left p-2.5 bg-white rounded-lg border border-stone-200 hover:border-[#2459A9] text-xs font-semibold text-[#17324D] transition-colors"
                    >
                      {rep.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
