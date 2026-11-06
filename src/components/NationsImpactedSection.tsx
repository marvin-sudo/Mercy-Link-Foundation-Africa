import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import {
  Globe,
  MapPin,
  CheckCircle2,
  Compass,
  X
} from 'lucide-react';

export interface VisitedNation {
  id: string;
  name: string;
  countryCode: string;
  flagUrl: string;
  flag: string;
  tag: string;
  category: 'headquarters' | 'cross-border' | 'regional';
  categoryLabel: string;
  yearActive: string;
  headline: string;
  description: string;
  historicalContext: string;
  regionsCovered: string[];
  keyOutcomes: string[];
  metrics: { label: string; value: string }[];
  fieldFocus: string;
  bannerTone: 'amber' | 'blue' | 'emerald';
}

export const IMPACTED_NATIONS: VisitedNation[] = [
  {
    id: 'uganda',
    name: 'UGANDA',
    countryCode: 'ug',
    flagUrl: '/assets/flags/ug.svg',
    flag: '🇺🇬',
    tag: 'National Headquarters & Epicenter',
    category: 'headquarters',
    categoryLabel: 'National Headquarters',
    yearActive: '2014 – Present',
    headline: 'National Base & Active Field Operations Across 70+ Districts',
    description:
      'Serving as the institutional headquarters and main operational base in Bulange Mengo, Kampala. Spearheading daily field ministries across Central, Northern, Western, Southern, and Eastern Uganda.',
    historicalContext:
      'Mercy Link Foundation Africa began its foundational operations in Uganda, establishing sustainable community Bible hubs, holistic church planter curricula, and certified prison chaplaincy partnerships sanctioned by national correctional authorities.',
    regionsCovered: [
      'Kampala (Bulange Mengo Headquarters)',
      'Central Region & Wakiso District',
      'Northern Region (Gulu, Arua, Lira)',
      'Eastern Region (Jinja, Mbale, Tororo)',
      'Western & South-Western (Mbarara, Kasese, Kabale)'
    ],
    keyOutcomes: [
      'Over 12,500 children engaged weekly across community Bible hubs and small groups',
      'Regular access to 7 major regional prisons with 5,130+ inmates committing lives to Christ',
      '450+ indigenous church planters and pastors equipped in modular training cohorts',
      'Direct ongoing disability care and life-skills discipleship at Kampala School for the Handicapped'
    ],
    metrics: [
      { label: 'Districts Active', value: '70+' },
      { label: 'Weekly Children', value: '12,500+' },
      { label: 'Correctional Centers', value: '7 Major' },
      { label: 'Planters Equipped', value: '450+' }
    ],
    fieldFocus: 'National Secretariat, Children Bible Hubs, Correctional Facilities, Disability Inclusion, Modular Church Planting',
    bannerTone: 'amber'
  },
  {
    id: 'rwanda',
    name: 'RWANDA',
    countryCode: 'rw',
    flagUrl: '/assets/flags/rw.svg',
    flag: '🇷🇼',
    tag: 'Reconciliation & Family Foundations',
    category: 'cross-border',
    categoryLabel: 'Peacebuilding & Family Foundations',
    yearActive: '2020 – Present',
    headline: 'Peacebuilding Fellowships & Christ-Centered Family Discipleship',
    description:
      'Partnering with regional pastors to champion biblical reconciliation, trauma healing, and Christ-centered family values across Kigali and border communities.',
    historicalContext:
      'Given the profound need for lasting reconciliation and spiritual restoration in the Great Lakes region, Mercy Link has partnered with local Rwandan pastors to share its Family Foundations and Legacy of Peace principles to strengthen pastoral households and community cohesion.',
    regionsCovered: [
      'Kigali Pastoral Networks',
      'Cyanika Border Corridor',
      'Musanze Community Hubs'
    ],
    keyOutcomes: [
      'Conducted 8 regional seminars on biblical conflict resolution and family healing',
      '35+ senior pastors participating in cross-border peace and reconciliation roundtables',
      '950+ families engaged through Christ-centered household values curricula',
      'Children’s character workshops integrated into local partner church programs'
    ],
    metrics: [
      { label: 'Families Impacted', value: '950+' },
      { label: 'Pastoral Leaders', value: '35+' },
      { label: 'Peace Seminars', value: '8' },
      { label: 'Districts Connected', value: '4' }
    ],
    fieldFocus: 'Family Foundations, Peace & Reconciliation, Moral Discipleship, Pastoral Counseling',
    bannerTone: 'emerald'
  },
  {
    id: 'kenya',
    name: 'KENYA',
    countryCode: 'ke',
    flagUrl: '/assets/flags/ke.svg',
    flag: '🇰🇪',
    tag: 'Pastoral Alliance & Youth Leadership',
    category: 'regional',
    categoryLabel: 'Pastoral & Youth Alliances',
    yearActive: '2017 – Present',
    headline: 'Cross-Border Youth Mentorship & Theological Roundtables',
    description:
      'Fostering bilateral church alliances in Western Kenya and Nairobi to train youth mentors, exchange children’s ministry strategies, and mobilize cross-border evangelistic outreaches.',
    historicalContext:
      'Through regional minister associations, Mercy Link has established mutual exchange programs with Western Kenyan churches, conducting joint youth assemblies, character coaching, and pastor retreats along the Kenya-Uganda border corridor.',
    regionsCovered: [
      'Busia Border Hub',
      'Kisumu Evangelical Alliance',
      'Eldoret & Western Kenya Fellowships',
      'Nairobi Leadership Dialogue'
    ],
    keyOutcomes: [
      '85+ youth mentors and children’s directors coached in interactive curriculum delivery',
      '3,200+ teenagers engaged through school outreach assemblies and holiday leadership camps',
      'Regular bilateral pastoral roundtables addressing regional church sustainability',
      'Joint evangelistic missions along the busy Kenya-Uganda trade corridor'
    ],
    metrics: [
      { label: 'Youth Reached', value: '3,200+' },
      { label: 'Mentors Coached', value: '85+' },
      { label: 'Partner Churches', value: '24' },
      { label: 'School Assemblies', value: '30+' }
    ],
    fieldFocus: 'Youth Discipleship, Leadership Conferences, Bilateral Church Fellowships, Moral Character',
    bannerTone: 'blue'
  },
  {
    id: 'sudan',
    name: 'SUDAN',
    countryCode: 'sd',
    flagUrl: '/assets/flags/sd.svg',
    flag: '🇸🇩',
    tag: 'Emergency Relief & Scripture Placement',
    category: 'cross-border',
    categoryLabel: 'Humanitarian & Displaced Relief',
    yearActive: '2015 – Present',
    headline: 'Emergency Displaced Outreach & Arabic Scripture Distribution',
    description:
      'Providing spiritual solidarity, emergency relief coordination, and Christian literature to displaced Sudanese families and refugees fleeing northern conflict corridors.',
    historicalContext:
      'As ongoing instability affected families across Sudan, Mercy Link extended compassionate cross-border reach through emergency scripture delivery, trauma counseling, and partnership with refugee transit networks to ensure spiritual support and basic relief reach the vulnerable.',
    regionsCovered: [
      'Northern Transit Corridors',
      'Displaced Family Encampments',
      'Arabic Christian Literature Distribution Networks'
    ],
    keyOutcomes: [
      'Over 2,100 Arabic and bilingual Gospel booklets and Bible portions distributed',
      'Coordinated emergency nutritional packs and sanitation essentials for displaced families',
      'Pastoral trauma-healing interventions for uprooted households and widows',
      'Cross-border communication network maintaining prayer and support for persecuted believers'
    ],
    metrics: [
      { label: 'Scripture Binders', value: '2,100+' },
      { label: 'Families Assisted', value: '750+' },
      { label: 'Relief Outreaches', value: '14' },
      { label: 'Transit Hubs', value: '5' }
    ],
    fieldFocus: 'Emergency Relief, Arabic Scripture Distribution, Displaced Family Support, Trauma Ministry',
    bannerTone: 'amber'
  },
  {
    id: 'south-sudan',
    name: 'SOUTH SUDAN',
    countryCode: 'ss',
    flagUrl: '/assets/flags/ss.svg',
    flag: '🇸🇸',
    tag: 'Raising Hope Curriculum & Refugee Discipleship',
    category: 'cross-border',
    categoryLabel: 'Refugee Discipleship',
    yearActive: '2013 – Present',
    headline: 'Birthplace of the "Raising Hope" Children’s Curriculum',
    description:
      'Catalyzed by the 2013 humanitarian crisis in South Sudan, Mercy Link pastoral leaders authored the 3-module "Raising Hope" curriculum to restore hope and character in refugee camps.',
    historicalContext:
      'In December 2013, when violent conflict erupted in South Sudan, tens of thousands fled across the border into northern Uganda. In response, a team of Ugandan pastors and educators developed the “Raising Hope” curriculum, tailored to heal trauma and guide children toward Christ.',
    regionsCovered: [
      'Adjumani Refugee Settlement Corridors',
      'Bidi Bidi Zone Hubs',
      'Juba Pastoral Exchange Link'
    ],
    keyOutcomes: [
      'Authored the acclaimed 3-module curriculum: Connected, Perfected, and Directed',
      'Certified over 120 Sunday school leaders serving refugee settlement children',
      'Over 8,200 refugee children discipled with culturally relevant, trauma-recovery materials',
      'Distributed hundreds of tactile learning tools and children’s Bible portions'
    ],
    metrics: [
      { label: 'Refugee Children', value: '8,200+' },
      { label: 'Teachers Certified', value: '120+' },
      { label: 'Curriculum Modules', value: '3 Full' },
      { label: 'Settlement Hubs', value: '15' }
    ],
    fieldFocus: 'Raising Hope Curriculum, Child Trauma Healing, Teacher Certification, Refugee Discipleship',
    bannerTone: 'emerald'
  },
  {
    id: 'malawi',
    name: 'MALAWI',
    countryCode: 'mw',
    flagUrl: '/assets/flags/mw.svg',
    flag: '🇲🇼',
    tag: 'Pastoral Training & Community Hubs',
    category: 'regional',
    categoryLabel: 'Regional Church Multiplication',
    yearActive: '2021 – Present',
    headline: 'Grassroots Church Planter Training & Rural Bible Hubs',
    description:
      'Extending contextual, modular church planter training and children\'s Bible hub models to underserved rural communities and local pastors across Malawi.',
    historicalContext:
      'Mercy Link’s non-residential, modular training model was introduced to Malawian pastors desiring practical biblical training in missions, governance, and children’s ministry to evangelize rural and unreached communities.',
    regionsCovered: [
      'Lilongwe Pastoral Network',
      'Blantyre Community Fellowships',
      'Rural Village Bible Hubs (Central & Southern Regions)'
    ],
    keyOutcomes: [
      'Modular church planter curriculum binders deployed for 38+ local pastors and evangelists',
      '14 rural Children Community Bible Hubs established with local leadership',
      'Practical leadership and financial stewardship seminars conducted for village churches',
      'Chichewa and English scripture literature placement in remote communities'
    ],
    metrics: [
      { label: 'Pastors Trained', value: '38+' },
      { label: 'Village Hubs', value: '14' },
      { label: 'Children Enrolled', value: '1,100+' },
      { label: 'Rural Seminars', value: '6' }
    ],
    fieldFocus: 'Modular Planter Training, Children Bible Hubs, Rural Church Development, Pastoral Mentorship',
    bannerTone: 'amber'
  },
  {
    id: 'drc-congo-goma',
    name: 'DRC CONGO- GOMA',
    countryCode: 'cd',
    flagUrl: '/assets/flags/cd.svg',
    flag: '🇨🇩',
    tag: 'Cross-Border Mission Field & Conflict Recovery',
    category: 'cross-border',
    categoryLabel: 'Cross-Border Outreach',
    yearActive: '2018 – Present',
    headline: 'Displaced Family Support & Pastor Multiplication in Goma & Eastern DRC',
    description:
      'Providing vital pastoral mentorship, trauma recovery, and spiritual hope to war-impacted families and indigenous church planters in Goma and the North Kivu border corridor.',
    historicalContext:
      'Recognizing severe displacement and humanitarian distress across borders, Mercy Link teams extended training to French and Swahili-speaking pastors in the Goma and Kivu border regions who shepherd communities amidst civil instability.',
    regionsCovered: [
      'Goma City Border Corridors',
      'North Kivu Displaced Camps',
      'Lake Kivu Grassroots Fellowships'
    ],
    keyOutcomes: [
      '65+ indigenous church planters equipped through mobile leadership modules',
      'Trauma-informed discipleship materials distributed to over 1,800 displaced children',
      'Swahili and French scripture placement across vulnerable border congregations',
      'Community reconciliation roundtables fostering long-term peaceful coexistence'
    ],
    metrics: [
      { label: 'Displaced Children', value: '1,800+' },
      { label: 'Planters Equipped', value: '65+' },
      { label: 'Border Cohorts', value: '12' },
      { label: 'Scripture Binders', value: '1,400+' }
    ],
    fieldFocus: 'Trauma Discipleship, Indigenous Church Multiplication, Cross-Border Humanitarian Spiritual Care',
    bannerTone: 'blue'
  }
];

export const NationsImpactedSection: React.FC = () => {
  const { navigateTo, openDonationModal } = useApp();
  const [selectedNation, setSelectedNation] = useState<VisitedNation | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // We duplicate the 7 nations multiple times to create a perfectly seamless infinite loop
  const loopingNationsLeft = [
    ...IMPACTED_NATIONS,
    ...IMPACTED_NATIONS,
    ...IMPACTED_NATIONS,
    ...IMPACTED_NATIONS
  ];

  const reversedNations = [...IMPACTED_NATIONS].reverse();
  const loopingNationsRight = [
    ...reversedNations,
    ...reversedNations,
    ...reversedNations,
    ...reversedNations
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Section Header */}
      <div className="reveal-up border-b border-stone-200/80 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ef5a20]">
            <Globe className="w-4 h-4 text-[#ef5a20]" />
            <span>Continental Scope & Missions</span>
          </div>
          <h2 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#000a37] tracking-tight">
            Nations Visited & Impacted
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-['Plus_Jakarta_Sans']">
            Continuous cross-border reach across Uganda, Rwanda, Kenya, Sudan, South Sudan, Malawi, and DRC Congo- Goma.
            Hover or click any nation to view detailed field reports.
          </p>
        </div>

        {/* Carousel Pause/Resume Control */}
        <div className="flex items-center gap-2 self-start md:self-end">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-4 py-2 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-bold transition-all shadow-xs cursor-pointer select-none"
            title={isPaused ? 'Resume sliding' : 'Pause sliding'}
          >
            {isPaused ? '▶ Resume Slide' : '❚❚ Pause Slide'}
          </button>
        </div>
      </div>

      {/* 2 CONTINUOUS SLIDING TRACKS (ONE SLIDING LEFT, ONE SLIDING RIGHT)
          CONTAINING ONLY THE FLAG AND THE NAME OF THE COUNTRY */}
      <div
        className="relative w-full overflow-hidden rounded-3xl py-3 space-y-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle gradient edge masks for seamless entry & exit */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/90 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF9F6] via-[#FAF9F6]/90 to-transparent z-10" />

        {/* ROW 1: SLIDING CONTINUOUSLY TO THE LEFT */}
        <div className="overflow-hidden py-1">
          <div
            className={`slide-track-left gap-3 sm:gap-4 items-center ${isPaused ? 'slide-track-paused' : ''}`}
          >
            {loopingNationsLeft.map((nation, idx) => (
              <button
                key={`left-${nation.id}-${idx}`}
                onClick={() => setSelectedNation(nation)}
                className="group shrink-0 inline-flex items-center gap-2.5 sm:gap-3.5 px-3.5 sm:px-5 py-2 sm:py-3 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200/90 hover:border-[#ef5a20] shadow-xs hover:shadow-md transition-all cursor-pointer select-none"
                title={`Click to view ${nation.name} field report`}
              >
                <div className="w-8 h-5.5 sm:w-11 sm:h-7.5 rounded-md overflow-hidden shadow-2xs border border-stone-300 shrink-0 bg-stone-100 flex items-center justify-center">
                  <img
                    src={nation.flagUrl}
                    alt={`${nation.name} Flag`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallbackTried) {
                        target.dataset.fallbackTried = '1';
                        target.src = `/assets/flags/${nation.countryCode}.png`;
                      } else {
                        target.src = `https://flagcdn.com/w160/${nation.countryCode}.png`;
                      }
                    }}
                  />
                </div>
                <span className="font-['Manrope'] font-extrabold text-xs sm:text-base text-[#000a37] group-hover:text-[#ef5a20] transition-colors tracking-wide whitespace-nowrap">
                  {nation.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ROW 2: SLIDING CONTINUOUSLY TO THE RIGHT */}
        <div className="overflow-hidden py-1">
          <div
            className={`slide-track-right gap-3 sm:gap-4 items-center ${isPaused ? 'slide-track-paused' : ''}`}
          >
            {loopingNationsRight.map((nation, idx) => (
              <button
                key={`right-${nation.id}-${idx}`}
                onClick={() => setSelectedNation(nation)}
                className="group shrink-0 inline-flex items-center gap-2.5 sm:gap-3.5 px-3.5 sm:px-5 py-2 sm:py-3 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200/90 hover:border-[#ef5a20] shadow-xs hover:shadow-md transition-all cursor-pointer select-none"
                title={`Click to view ${nation.name} field report`}
              >
                <div className="w-8 h-5.5 sm:w-11 sm:h-7.5 rounded-md overflow-hidden shadow-2xs border border-stone-300 shrink-0 bg-stone-100 flex items-center justify-center">
                  <img
                    src={nation.flagUrl}
                    alt={`${nation.name} Flag`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallbackTried) {
                        target.dataset.fallbackTried = '1';
                        target.src = `/assets/flags/${nation.countryCode}.png`;
                      } else {
                        target.src = `https://flagcdn.com/w160/${nation.countryCode}.png`;
                      }
                    }}
                  />
                </div>
                <span className="font-['Manrope'] font-extrabold text-xs sm:text-base text-[#000a37] group-hover:text-[#ef5a20] transition-colors tracking-wide whitespace-nowrap">
                  {nation.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cross-Border Callout Strip */}
      <div className="reveal-up bg-gradient-to-r from-[#000a37] via-[#081b5c] to-[#000a37] text-white rounded-3xl p-5 sm:p-8 shadow-md border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ef5a20]">
            <Compass className="w-4 h-4 text-[#ef5a20]" />
            <span>Expanding Across East, Central & Southern Africa</span>
          </div>
          <h3 className="font-['Playfair_Display'] font-bold text-lg sm:text-2xl text-white">
            Partner with Mercy Link in Your Nation
          </h3>
          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-['Plus_Jakarta_Sans']">
            Inviting pastors, regional networks, and mission partners across Uganda, Rwanda, Kenya, Sudan, South Sudan, Malawi, and DRC Congo- Goma to collaborate.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => navigateTo('contact')}
            className="interactive-button px-5 py-2.5 bg-[#ef5a20] hover:bg-[#d94a14] text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all shadow-sm cursor-pointer"
          >
            Partner With Us
          </button>
          <button
            onClick={() => openDonationModal('Cross-Border Missions')}
            className="interactive-button px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs uppercase tracking-wider font-bold rounded-full transition-all cursor-pointer"
          >
            Support Missions
          </button>
        </div>
      </div>

      {/* Interactive Selected Nation Modal / Slide-Over */}
      {selectedNation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 flex flex-col justify-between animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="nation-modal-title"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-xs border-b border-stone-200 px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-9 rounded-lg overflow-hidden shadow-md border border-stone-200 shrink-0 bg-stone-100 flex items-center justify-center">
                  <img
                    src={selectedNation.flagUrl}
                    alt={`${selectedNation.name} Flag`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallbackTried) {
                        target.dataset.fallbackTried = '1';
                        target.src = `/assets/flags/${selectedNation.countryCode}.png`;
                      } else {
                        target.src = `https://flagcdn.com/w160/${selectedNation.countryCode}.png`;
                      }
                    }}
                  />
                </div>
                <div>
                  <h3 id="nation-modal-title" className="font-['Manrope'] font-extrabold text-xl text-[#000a37] leading-tight tracking-wide">
                    {selectedNation.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-[#ef5a20]">{selectedNation.tag}</span>
                    <span className="text-stone-300">·</span>
                    <span className="text-stone-500">{selectedNation.yearActive}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedNation(null)}
                className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close nation details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Headline & Overview */}
              <div className="space-y-2">
                <h4 className="font-['Playfair_Display'] font-bold text-xl text-[#000a37]">
                  {selectedNation.headline}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {selectedNation.description}
                </p>
              </div>

              {/* Historical Context & Theological Burden */}
              <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-stone-200/90 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#000a37] uppercase tracking-wide">
                  <Compass className="w-4 h-4 text-[#ef5a20]" />
                  <span>Historical Context & Mission Mandate</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed font-['Plus_Jakarta_Sans']">
                  {selectedNation.historicalContext}
                </p>
              </div>

              {/* 4-Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedNation.metrics.map((m) => (
                  <div key={m.label} className="bg-stone-50 border border-stone-200/70 rounded-2xl p-3.5 text-center">
                    <span className="block font-['Playfair_Display'] font-extrabold text-xl text-[#000a37]">
                      {m.value}
                    </span>
                    <span className="text-[10px] text-stone-500 font-medium">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Verified Outcomes */}
              <div className="space-y-3">
                <h5 className="font-['Manrope'] font-bold text-sm text-[#000a37] uppercase tracking-wider">
                  Verified Field Achievements & Ministry Focus
                </h5>
                <div className="space-y-2.5">
                  {selectedNation.keyOutcomes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Field Stations / Hubs */}
              <div className="space-y-2.5 pt-2 border-t border-stone-100">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                  Field Stations & Regional Network:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedNation.regionsCovered.map((reg) => (
                    <span
                      key={reg}
                      className="inline-flex items-center gap-1.5 text-xs text-stone-700 bg-stone-100 border border-stone-200/80 px-3 py-1 rounded-full font-medium"
                    >
                      <MapPin className="w-3 h-3 text-[#ef5a20]" />
                      <span>{reg}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="sticky bottom-0 bg-stone-50 border-t border-stone-200 p-5 sm:px-8 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setSelectedNation(null)}
                className="px-4 py-2 text-xs font-bold text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                Close Report
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedNation(null);
                    navigateTo('contact');
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#000a37] hover:bg-[#000a37]/90 text-white text-xs font-bold tracking-wide transition-colors cursor-pointer"
                >
                  Contact About {selectedNation.name}
                </button>
                <button
                  onClick={() => {
                    setSelectedNation(null);
                    openDonationModal(`Missions in ${selectedNation.name}`);
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#ef5a20] hover:bg-[#d94a14] text-white text-xs font-bold tracking-wide transition-colors cursor-pointer shadow-xs"
                >
                  Support Outreach
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
