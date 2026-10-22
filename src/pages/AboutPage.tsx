import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Heart,
  Users,
  Compass,
  CheckCircle2,
  Shield,
  ArrowRight,
  MapPin,
  Sparkles,
  Award
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo, openDonationModal, contactInfo } = useApp();

  const coreValues = [
    {
      title: 'God-Fearing',
      description: 'Recognizing God as the ultimate source of our work, seeking His guidance in all ministry initiatives and decisions.'
    },
    {
      title: 'Teamwork',
      description: 'Fostering cooperation, mutual support, and respect across staff, volunteers, local churches, and communities.'
    },
    {
      title: 'Excellence',
      description: 'A relentless commitment to quality, diligent fulfillment of our responsibilities, and stewardship of all resources.'
    },
    {
      title: 'Partnering',
      description: 'Working side-by-side with local congregations, grassroots agencies, and global friends to multiply community fruit.'
    },
    {
      title: 'Compassion',
      description: 'Responding with profound empathy and unconditional dignity to physical, emotional, and spiritual needs of the vulnerable.'
    },
    {
      title: 'Integrity',
      description: 'Living in absolute transparency, biblical honesty, and accountable financial stewardship before God and society.'
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* Page Header - Full Width */}
      <section className="reveal-up w-full bg-gradient-to-b from-white via-[#FAF7F0] to-[#FAF7F0] border-b border-stone-200/80 py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2459A9]">
              <span>About Us</span>
              <span aria-hidden="true">·</span>
              <span>Historical Foundation</span>
              <span aria-hidden="true">·</span>
              <span>Uganda, East Africa</span>
            </div>
            <h1 className="font-['Manrope'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#17324D] tracking-tight">
              About Mercy Link Foundation Africa
            </h1>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-medium">
              Mercy Link Foundation Africa is a mission-based NGO reaching the lost, discipling the unreached, and empowering churches through training, outreaches, and social transformation programs.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold pt-1">
              <span className="bg-white border border-[#E98A32]/40 text-[#17324D] px-3 py-1 rounded-full">
                • Faith-driven grassroots empowerment
              </span>
              <span className="bg-white border border-[#2459A9]/40 text-[#17324D] px-3 py-1 rounded-full">
                • Registered NGO operating across Uganda
              </span>
              <span className="bg-white border border-emerald-500/40 text-[#17324D] px-3 py-1 rounded-full">
                • Holistic Gospel propagation
              </span>
            </div>

            {/* Quick jump to dedicated pages */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 stagger-fast">
              <button
                onClick={() => navigateTo('ministry-profile')}
                className="interactive-card group p-3.5 rounded-xl border border-stone-200 bg-white hover:border-[#E98A32] text-left transition-all shadow-xs hover:shadow-sm"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#E98A32] mb-1">
                  Institutional Facts
                </div>
                <div className="font-bold text-sm text-[#17324D] group-hover:text-[#E98A32] flex items-center justify-between">
                  <span>Ministry Profile</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 group-hover:text-[#E98A32] transition-all" />
                </div>
              </button>

              <button
                onClick={() => navigateTo('about-founder')}
                className="interactive-card group p-3.5 rounded-xl border border-stone-200 bg-white hover:border-[#E98A32] text-left transition-all shadow-xs hover:shadow-sm"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#2459A9] mb-1">
                  Leadership
                </div>
                <div className="font-bold text-sm text-[#17324D] group-hover:text-[#E98A32] flex items-center justify-between">
                  <span>About the Founder</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 group-hover:text-[#E98A32] transition-all" />
                </div>
              </button>

              <button
                onClick={() => navigateTo('vision-mission-values')}
                className="interactive-card group p-3.5 rounded-xl border border-stone-200 bg-white hover:border-[#E98A32] text-left transition-all shadow-xs hover:shadow-sm"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 mb-1">
                  Core Guiding Principles
                </div>
                <div className="font-bold text-sm text-[#17324D] group-hover:text-[#E98A32] flex items-center justify-between">
                  <span>Vision, Mission & Values</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 group-hover:text-[#E98A32] transition-all" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative: How Mercy Link Began & Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="reveal-left lg:col-span-7 space-y-6">
            <h2 className="font-['Manrope'] font-bold text-2xl sm:text-3xl text-[#17324D]">
              How Mercy Link Began
            </h2>

            <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
              <p>
                Mercy Link Foundation Africa traces its origin to <strong>2007</strong>, when a small group of committed believers
                began gathering children in the Bulange Mengo neighborhood of Kampala for a weekly community Bible club.
                What started as an informal effort to share God's word, sing songs, and offer children a loving, safe space
                quickly revealed profound systemic needs across Uganda’s households.
              </p>

              <p>
                Many participating children were caring for siblings, living with untreated disabilities, or dealing with the
                imprisonment of a breadwinner. Recognizing that true ministry must emulate Jesus Christ by touching the
                whole person, the initiative expanded from child evangelism into parenting seminars, disability support,
                and prison chaplaincy.
              </p>

              <p>
                In <strong>2013</strong>, the foundation officially registered as a local Non-Governmental Organization (NGO)
                in Uganda. Today, through indigenous church networks and faithful ministry partners, our published work spans
                more than 70 districts across Central, Northern, Western, Southern, and Eastern Uganda, with active
                cross-border fellowships extending toward Eastern Democratic Republic of Congo and Tanzania.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#17324D]">
              <div className="p-3 bg-stone-100 rounded-xl">
                <span className="text-[#E98A32] font-bold">2007</span> · Bulange Mengo Bible Club
              </div>
              <div className="p-3 bg-stone-100 rounded-xl">
                <span className="text-[#2459A9] font-bold">2013</span> · Registered Ugandan NGO
              </div>
              <div className="p-3 bg-stone-100 rounded-xl">
                <span className="text-[#17324D] font-bold">70+</span> · Districts in Scope
              </div>
            </div>
          </div>

          <div className="reveal-right lg:col-span-5 relative">
            <div className="charity-image-shape overflow-hidden border border-stone-200/90 shadow-xl bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80"
                alt="Mercy Link Fellowship and Leadership Training"
                className="reveal-image interactive-image w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Organizational Goal */}
      <section className="bg-white py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="reveal-up text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2459A9]">
              Foundational Truths
            </span>
            <h2 className="font-['Manrope'] font-extrabold text-3xl text-[#17324D]">
              Vision, Mission & Organizational Goal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-group">
            <div className="reveal-up interactive-card p-8 rounded-2xl bg-[#FAF7F0] border border-stone-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2459A9]">
                Our Vision
              </span>
              <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
                Legacy of Peace
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                "Develop leaders, transform communities and create a legacy of peace through equipping the church in Africa for relevance, responsibility and sustainability."
              </p>
            </div>

            <div className="reveal-up interactive-card p-8 rounded-2xl bg-[#FAF7F0] border border-stone-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E98A32]">
                Our Mission
              </span>
              <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
                Holistic Empowerment
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                "To develop programs that will empower people physically, emotionally, socially, and economically with a goal to draw them to Christ who meets their spiritual needs."
              </p>
            </div>

            <div className="reveal-up interactive-card p-8 rounded-2xl bg-[#FAF7F0] border border-stone-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Core Goal
              </span>
              <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
                Church & Community Capacity
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Facilitate accessible and effective education and training for church and community leaders, strengthen biblical values, support mission work, develop leadership and business capacity, and promote sustainable community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Six Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="reveal-up max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2459A9]">
            Organizational Ethics
          </span>
          <h2 className="font-['Manrope'] font-extrabold text-3xl text-[#17324D]">
            Our Six Core Values
          </h2>
          <p className="text-sm text-stone-600">
            Documented on the official About Us page of Mercy Link Foundation Africa and practiced in every field outreach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-group">
          {coreValues.map((val, idx) => (
            <div
              key={val.title}
              className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-['Manrope'] font-bold text-sm text-[#E98A32]">0{idx + 1}</span>
                <CheckCircle2 className="w-4 h-4 text-[#2459A9]" />
              </div>
              <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                {val.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Geographical Reach & Scope */}
      <section className="reveal-up bg-[#17324D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E98A32]">
                Geographical Footprint
              </span>
              <h2 className="font-['Manrope'] font-extrabold text-3xl text-white">
                Reaching Across Uganda & Beyond
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Mercy Link Foundation Africa operates across the <strong>Central, Northern, Western, Southern, and Eastern</strong> regions of Uganda.
                Our published organizational records indicate outreach and training initiatives touching more than <strong>70 districts</strong>.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                Recognizing shared humanitarian and spiritual needs across African borders, we also collaborate with regional pastors and church planters in border corridors including Eastern Democratic Republic of Congo (Goma) and Northwestern Tanzania.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="bg-white/10 px-3 py-1 rounded-lg">Central (Kampala, Wakiso, Mukono)</span>
                <span className="bg-white/10 px-3 py-1 rounded-lg">Eastern (Jinja, Mbale, Busoga)</span>
                <span className="bg-white/10 px-3 py-1 rounded-lg">Northern (Gulu, Lira, West Nile)</span>
                <span className="bg-white/10 px-3 py-1 rounded-lg">Western (Mbarara, Kasese, Bunyoro)</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-sm text-[#E98A32]">Administrative Transparency</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                All district metrics, church planter registers, and partner listings are maintained through our staff Content Management System and audited under Ugandan NGO registration guidelines.
              </p>
              <div className="pt-2 border-t border-white/10 text-xs text-white/60">
                <p>Mailing Address: {contactInfo.postalAddress}</p>
                <p>Registered Location: {contactInfo.physicalLocation}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Partner With Us */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="font-['Manrope'] font-extrabold text-3xl text-[#17324D]">
          Join Hands in This Mission
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
          We invite churches, donor partners, volunteers, and believers worldwide to walk with Mercy Link Foundation Africa in transforming lives and creating a legacy of peace.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigateTo('get-involved')}
            className="interactive-button px-6 py-3 bg-[#17324D] hover:bg-[#2459A9] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
          >
            Partner With Us
          </button>
          <button
            onClick={() => openDonationModal()}
            className="interactive-button px-6 py-3 bg-[#E98A32] hover:bg-[#d47926] text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-2"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>Support Our Mission</span>
          </button>
        </div>
      </section>
    </div>
  );
};
