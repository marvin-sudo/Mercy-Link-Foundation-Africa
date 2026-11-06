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
      {/* Header - Full Width with Background Image & Transparent Navy Blue Overlay */}
      <section className="reveal-up w-full relative overflow-hidden bg-[#000a37] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 shadow-md border-b border-white/10">
        {/* Relevant Background Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/q7xsYBzr/Whats-App-Image-2026-11-06-at-11-10-37-AM.jpg"
            alt="Mercy Link Foundation Africa Founder and Field Work"
            className="reveal-image absolute inset-0 w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/founder_hero_bg.jpg';
            }}
          />
          {/* 50% Opacity Transparent Navy Blue Overlay (#000a37) */}
          <div className="absolute inset-0 bg-[#000a37]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ef5a20]">
            <span>About Us</span>
            <span aria-hidden="true">·</span>
            <span>Visionary Leadership</span>
            <span aria-hidden="true">·</span>
            <span>Since 2007</span>
          </div>
          <h1 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            About the Founder & Leadership
          </h1>
          <p className="text-xs sm:text-sm text-stone-200 max-w-3xl leading-relaxed font-['Plus_Jakarta_Sans']">
            The visionary burden, servant leadership, and grassroots faith that catalyzed Mercy Link Foundation Africa from a humble community Bible club into a nationwide movement.
          </p>
        </div>
      </section>

      {/* Founder Profile Feature */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white charity-image-shape border border-stone-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Portrait Column */}
          <div className="reveal-left lg:col-span-5 relative h-full min-h-[300px] sm:min-h-[420px] bg-stone-100">
            <img
              src="https://i.postimg.cc/8ktyc4ks/Whats-App-Image-2026-11-06-at-11-24-25-AM.jpg"
              alt="Mr. Robert Sebunya - Director/Founder, Mercy Link Foundation Africa"
              className="reveal-image interactive-image w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/founder_robert_sebunya.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000a37]/85 via-transparent to-transparent" />
            <div className="absolute bottom-5 sm:bottom-6 inset-x-5 sm:inset-x-6 text-white space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#ef5a20] block">
                Director / Founder
              </span>
              <h3 className="font-['Playfair_Display'] font-bold text-xl sm:text-2xl text-white">
                Mr. Robert Sebunya
              </h3>
              <p className="text-xs text-white/90 font-medium">
                Mercy Link Foundation Africa · Kampala, Uganda
              </p>
            </div>
          </div>

          {/* Biography & Calling Column */}
          <div className="reveal-right lg:col-span-7 p-5 sm:p-8 lg:p-12 space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ef5a20]">
                The Calling & Genesis
              </span>
              <h2 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-[#000a37]">
                A Heart for the Unreached & Vulnerable
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
              <p>
                In <strong>2007</strong>, while walking through the streets of Bulange Mengo in Kampala, <strong>Mr. Robert Sebunya</strong> and a cohort of dedicated local believers were deeply burdened by the number of children lingering around informal settlements with neither biblical guidance nor safe spaces to learn.
              </p>
              <p>
                Responding to God's whisper, they established a weekend neighborhood Bible club. They sang songs, taught Scripture, shared small meals, and counseled parents. What became instantly apparent was that child discipleship could not be separated from family welfare, disability compassion, and local church equipping.
              </p>
              <p>
                Driven by Christ's call to <em>"reach the lost and bind up the brokenhearted,"</em> Mr. Robert Sebunya steered the growth of Mercy Link Foundation Africa into formal local NGO registration in 2013, extending ministry operations across more than 70 districts throughout Uganda and cross-border missions.
              </p>
            </div>

            {/* Quote Callout */}
            <div className="p-4 bg-[#FAF9F6] border-l-4 border-[#ef5a20] rounded-r-xl space-y-1">
              <Quote className="w-5 h-5 text-[#ef5a20]" />
              <p className="font-['Playfair_Display'] italic text-xs sm:text-sm text-[#000a37]">
                "Our calling in Africa is not to build monuments to ourselves, but to equip the local church so that ordinary believers become catalysts of peace, righteousness, and sustainable community transformation."
              </p>
              <p className="text-[11px] font-bold text-stone-500">— Mr. Robert Sebunya, Director/Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Convictions & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="reveal-up max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ef5a20]">
            Guiding Philosophy
          </span>
          <h2 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl text-[#000a37]">
            Core Leadership Convictions
          </h2>
          <p className="text-xs text-stone-500">
            Principles that guide our leadership board, regional coordinators, and field staff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-group">
          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#000a37] text-[#ef5a20] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#000a37]">
              Christ-Centered Servant Leadership
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We lead with humility, wash the feet of those we serve, and point every beneficiary directly to Jesus Christ who alone meets their deepest physical, emotional, and eternal needs.
            </p>
          </div>

          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#000a37] text-white flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#000a37]">
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
            <h3 className="font-['Manrope'] font-bold text-base text-[#000a37]">
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
        <h2 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-[#000a37]">
          Connect with the Leadership Team
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
          Are you interested in inviting Mercy Link to your regional fellowship, or discussing strategic ministry collaboration?
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3 sm:gap-4">
          <button
            onClick={() => navigateTo('contact')}
            className="interactive-button px-6 py-3 bg-[#000a37] hover:bg-[#000a37]/90 text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all"
          >
            Send Message to Executive Desk
          </button>
          <button
            onClick={openVideoModal}
            className="interactive-button px-6 py-3 bg-white border border-stone-300 hover:border-[#000a37] text-[#000a37] text-xs uppercase tracking-wider font-bold rounded-full transition-all"
          >
            Watch Documentary Video
          </button>
        </div>
      </section>
    </div>
  );
};
