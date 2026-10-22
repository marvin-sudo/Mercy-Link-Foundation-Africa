import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Heart,
  BookOpen,
  Users,
  Compass,
  Award,
  ArrowRight,
  Shield,
  MapPin,
  Quote
} from 'lucide-react';

export const AboutFounderPage: React.FC = () => {
  const { navigateTo, openDonationModal, openVideoModal } = useApp();

  return (
    <div className="space-y-10 sm:space-y-14 lg:space-y-16 pb-16">
      {/* Header - Full Width */}
      <section className="reveal-up w-full bg-gradient-to-b from-white via-[#FAF7F0] to-[#FAF7F0] border-b border-stone-200/80 py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#2459A9]">
            <span>About Us</span>
            <span aria-hidden="true">·</span>
            <span>Visionary Leadership</span>
            <span aria-hidden="true">·</span>
            <span>Since 2007</span>
          </div>
          <h1 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17324D] tracking-tight leading-tight">
            About the Founder & Leadership
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed font-['Plus_Jakarta_Sans']">
            The pastoral burden, servant leadership, and grassroots faith that catalyzed Mercy Link Foundation Africa from a humble community Bible club into a nationwide movement.
          </p>
        </div>
      </section>

      {/* Founder Profile Feature */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white charity-image-shape border border-stone-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Portrait Column */}
          <div className="reveal-left lg:col-span-5 relative h-full min-h-[380px] bg-stone-100">
            <img
              src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80"
              alt="Pastor Martin Mugaba and Mercy Link Leadership"
              className="reveal-image interactive-image w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 inset-x-6 text-white space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E98A32]">
                Founding Visionary & Executive Director
              </span>
              <h3 className="font-['Playfair_Display'] font-bold text-xl text-white">
                Pastor Martin Mugaba
              </h3>
              <p className="text-xs text-white/80">
                Mercy Link Foundation Africa · Kampala, Uganda
              </p>
            </div>
          </div>

          {/* Biography & Calling Column */}
          <div className="reveal-right lg:col-span-7 p-8 sm:p-12 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                The Calling & Genesis
              </span>
              <h2 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-[#17324D]">
                A Heart for the Unreached & Vulnerable
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
              <p>
                In <strong>2007</strong>, while walking through the streets of Bulange Mengo in Kampala, Pastor Martin Mugaba and a cohort of dedicated local believers were deeply burdened by the number of children lingering around informal settlements with neither biblical guidance nor safe spaces to learn.
              </p>
              <p>
                Responding to God's whisper, they established a weekend neighborhood Bible club. They sang songs, taught Scripture, shared small meals, and counseled parents. What became instantly apparent was that child discipleship could not be separated from family welfare, disability compassion, and local church equipping.
              </p>
              <p>
                Driven by Christ's call to <em>"reach the lost and bind up the brokenhearted,"</em> Pastor Martin steered the growth of Mercy Link into formal local NGO registration in 2013, extending ministry operations across more than 70 districts throughout Uganda and cross-border missions.
              </p>
            </div>

            {/* Quote Callout */}
            <div className="p-4 bg-[#FAF7F0] border-l-4 border-[#E98A32] rounded-r-xl space-y-1">
              <Quote className="w-5 h-5 text-[#E98A32]" />
              <p className="font-['Playfair_Display'] italic text-sm text-[#17324D]">
                "Our calling in Africa is not to build monuments to ourselves, but to equip the local church so that ordinary believers become catalysts of peace, righteousness, and sustainable community transformation."
              </p>
              <p className="text-[11px] font-bold text-stone-500">— Pastor Martin Mugaba</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Convictions & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="reveal-up max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2459A9]">
            Guiding Philosophy
          </span>
          <h2 className="font-['Playfair_Display'] font-extrabold text-3xl text-[#17324D]">
            Core Leadership Convictions
          </h2>
          <p className="text-xs text-stone-500">
            Principles that guide our leadership board, regional coordinators, and field staff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-group">
          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#17324D] text-[#E98A32] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
              Christ-Centered Servant Leadership
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We lead with humility, wash the feet of those we serve, and point every beneficiary directly to Jesus Christ who alone meets their deepest physical, emotional, and eternal needs.
            </p>
          </div>

          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2459A9] text-white flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
              Empowerment Over Dependency
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We do not impose top-down handouts. We train local pastors, caregivers, and youth to take ownership of their own community challenges through sustainable skills, savings groups, and prayer.
            </p>
          </div>

          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
              Fiduciary Stewardship & Integrity
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Every donation and partnership pledge is managed under audited accounting practices, ensuring full transparency before God, government authorities, and international donors.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Desk Connect */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="font-['Playfair_Display'] font-bold text-3xl text-[#17324D]">
          Connect with the Leadership Team
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
          Are you interested in inviting Mercy Link to your regional fellowship, or discussing strategic ministry collaboration?
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigateTo('contact')}
            className="interactive-button px-6 py-3 bg-[#17324D] hover:bg-[#2459A9] text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all"
          >
            Send Message to Executive Desk
          </button>
          <button
            onClick={openVideoModal}
            className="interactive-button px-6 py-3 bg-white border border-stone-300 hover:border-[#17324D] text-[#17324D] text-xs uppercase tracking-wider font-bold rounded-full transition-all"
          >
            Watch Documentary Video
          </button>
        </div>
      </section>
    </div>
  );
};
