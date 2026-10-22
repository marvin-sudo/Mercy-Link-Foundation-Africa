import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ProgramId } from '../types';
import { ArrowRight, Heart, Filter } from 'lucide-react';

export const ProgramsPage: React.FC = () => {
  const { programs, navigateTo, openDonationModal } = useApp();
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Ministries' },
    { id: 'Leadership & Church Multiplication', label: 'Church Planters' },
    { id: 'Child Evangelism & Discipleship', label: "Children's Ministry" },
    { id: 'Family Wellbeing & Parent Training', label: 'Family Foundations' },
    { id: 'Correctional Outreach & Rehabilitation', label: 'Prison Ministry' },
    { id: 'Vulnerable Care & Inclusion', label: 'Disability & Care' },
    { id: 'Community Self-Reliance & Welfare', label: 'Better Life' },
  ];

  const filteredPrograms = filterCategory === 'all'
    ? programs
    : programs.filter((p) => p.category === filterCategory);

  return (
    <div className="space-y-8 sm:space-y-10 pb-16">
      {/* Header - Full Width */}
      <section className="reveal-up w-full bg-gradient-to-b from-white via-[#FAF7F0] to-[#FAF7F0] border-b border-stone-200/80 py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#2459A9]">
            <span>Our Ministries</span>
            <span aria-hidden="true">·</span>
            <span>7 Baseline Programs</span>
            <span aria-hidden="true">·</span>
            <span>Uganda & East Africa</span>
          </div>
          <h1 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17324D] tracking-tight leading-tight">
            Comprehensive Ministry Programs
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
            From community Bible clubs and family foundations to prison chaplaincy, disability advocacy, and youth empowerment—explore our verified programs transforming lives across Uganda.
          </p>

          {/* Filter Bar */}
          <div className="pt-2 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none stagger-fast">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  filterCategory === cat.id
                    ? 'bg-[#17324D] text-white shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-group">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="reveal-up interactive-card bg-white charity-image-shape overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 charity-image-shape overflow-hidden bg-stone-100">
                  <img
                    src={prog.imageUrl}
                    alt={prog.name}
                    className="reveal-image interactive-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[11px] font-bold text-white bg-[#17324D]/80 backdrop-blur-xs px-2.5 py-1 rounded">
                    {prog.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h2 className="font-['Manrope'] font-bold text-xl text-[#17324D] group-hover:text-[#2459A9] transition-colors leading-snug">
                    {prog.name}
                  </h2>
                  <p className="text-xs font-semibold text-[#E98A32] italic">
                    "{prog.tagline}"
                  </p>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {prog.overview}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => navigateTo('program-detail', prog.id)}
                  className="text-xs font-bold text-[#17324D] hover:text-[#2459A9] flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Full Program Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => openDonationModal(prog.name)}
                  className="text-xs font-semibold text-[#E98A32] hover:underline"
                >
                  Support
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
