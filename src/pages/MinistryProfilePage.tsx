import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  Shield,
  ArrowRight,
  Heart,
  Users,
  Compass,
  Target,
  BookOpen,
  Award,
  Video,
  Bike,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';

export const MinistryProfilePage: React.FC = () => {
  const { navigateTo, openDonationModal } = useApp();

  const coreValues = [
    {
      title: 'God-Fearing',
      tagline: 'Recognizing God as Our Ultimate Source',
      description:
        'We recognize God as our source and are fully dependent on Him. Our goal is to bring glory to His name and reflect His love and grace to the people.'
    },
    {
      title: 'Teamwork',
      tagline: 'Cooperative, Respectful, and Joyful Work',
      description:
        'Providing support to one another, working co-operatively, respecting one another’s views, and making our work environment fun and enjoyable.'
    },
    {
      title: 'Excellence',
      tagline: 'Faithful Commitment to Quality',
      description:
        'Always doing what we say we will and striving for excellence and quality in all we do.'
    },
    {
      title: 'Partnering',
      tagline: 'Walking with the Global Body of Christ',
      description:
        'We believe we are a part of the world-wide body of Christ and support great and diverse works of God by partnering with different organizations, churches, individuals and other agencies by providing confidential services committing to support each partner by coming alongside them in friendship to see the possibilities and opportunities God has for them and their ministry.'
    },
    {
      title: 'Compassion',
      tagline: 'Loving Concern, Honesty & Empathy',
      description:
        'Provide loving concern for people in a safe, non-judgmental atmosphere. We encourage our partners by addressing their practical, emotional and spiritual needs with honesty, empathy and unconditional love.'
    },
    {
      title: 'Integrity',
      tagline: 'Standards of Honesty, Trust & Stewardship',
      description:
        'We are individuals who uphold the standards of honesty and trust. We are accountable to manage financial and material resources in a wise and productive manner with personal conduct that honors God, earning us a name worthy of trust by partners and community alike.'
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-14 lg:space-y-16 pb-16">
      {/* 1. Header - Full Width */}
      <section className="reveal-up w-full bg-gradient-to-b from-white via-[#FAF7F0] to-[#FAF7F0] border-b border-stone-200/80 py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#2459A9]">
            <span>About Us</span>
            <span aria-hidden="true">·</span>
            <span>Official Institutional Profile</span>
            <span aria-hidden="true">·</span>
            <span>Uganda & East Africa</span>
          </div>
          <h1 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17324D] tracking-tight leading-tight">
            Ministry Profile
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed font-['Plus_Jakarta_Sans']">
            Mercy Link Foundation Africa is a missional organization seeking to equip and empower the Church in Africa to affect un-reached communities through the effective and relevant propagation of the holistic Gospel.
          </p>
        </div>
      </section>

      {/* 2. Executive Overview & Institutional Scope */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative */}
          <div className="reveal-left lg:col-span-7 space-y-6">
            <span className="text-[#E98A32] font-bold text-xs tracking-widest uppercase block">
              Who We Are & Where We Serve
            </span>
            <h2 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17324D] tracking-tight leading-tight">
              A Missional Movement for Church Empowerment & Community Healing
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>
                <strong>Mercy Link Foundation Africa</strong> is a missional organization seeking to equip and empower the Church in Africa to affect the un-reached communities through effective and relevant propagation of holistic Gospel.
              </p>
              <p>
                The organization was established in <strong>2007</strong> with a community bible club at <strong>Bulange Mengo</strong> and later registered in <strong>2013</strong> as a local NGO in Uganda.
              </p>
              <p>
                Our scope of operation currently covers the <strong>Central, Northern, Western, Southern and Eastern</strong> parts of Uganda with activities running in <strong>over 70 districts</strong> of Uganda, with prospects of extending to the <strong>Democratic Republic of Congo (DRC)</strong> and <strong>Tanzania</strong>.
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-stone-200/90 shadow-xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#E98A32] font-bold">
                  <Calendar className="w-4 h-4" />
                  <span>Founded 2007</span>
                </div>
                <p className="text-[11px] text-stone-500">Bulange Mengo Bible Club · Reg. NGO 2013</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-stone-200/90 shadow-xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#2459A9] font-bold">
                  <MapPin className="w-4 h-4" />
                  <span>70+ Districts</span>
                </div>
                <p className="text-[11px] text-stone-500">Central, North, West, South & Eastern Uganda</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-stone-200/90 shadow-xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                  <Compass className="w-4 h-4" />
                  <span>Regional Horizons</span>
                </div>
                <p className="text-[11px] text-stone-500">Cross-border prospects in DR Congo & Tanzania</p>
              </div>
            </div>
          </div>

          {/* Right Column: Image with Signature Diagonal Border */}
          <div className="reveal-right lg:col-span-5 relative">
            <div className="charity-image-shape overflow-hidden border border-stone-200/90 shadow-2xl bg-stone-100 relative group">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80"
                alt="Mercy Link Fellowship and Leadership Training"
                className="reveal-image interactive-image w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-[10px] font-bold text-[#E98A32] uppercase tracking-wider block">Bulange Mengo, Kampala</span>
                  <p className="text-white text-base font-bold font-['Manrope']">Mercy Link Foundation Africa Leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision, Mission & Core Organizational Goal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="reveal-up interactive-card p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
                Our Vision
              </span>
              <Compass className="w-5 h-5 text-[#E98A32]" />
            </div>
            <h3 className="font-['Playfair_Display'] font-bold text-2xl text-[#17324D]">
              Legacy of Peace
            </h3>
            <p className="font-['Playfair_Display'] text-base text-[#17324D] leading-relaxed italic border-l-2 border-[#E98A32] pl-4">
              "Develop leaders, transform communities and create a legacy of peace through equipping the church in Africa for relevance, responsibility and sustainability."
            </p>
          </div>

          {/* Mission Card */}
          <div className="reveal-up interactive-card p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2459A9]">
                Our Mission
              </span>
              <Heart className="w-5 h-5 text-[#2459A9]" />
            </div>
            <h3 className="font-['Playfair_Display'] font-bold text-2xl text-[#17324D]">
              Holistic Empowerment
            </h3>
            <p className="font-['Playfair_Display'] text-base text-[#17324D] leading-relaxed italic border-l-2 border-[#2459A9] pl-4">
              "To develop programs that will empower people physically, emotionally, socially, and economically with a goal to draw them to Christ who meets their spiritual needs."
            </p>
          </div>
        </div>

        {/* Goal Card - Full Width Highlight */}
        <div className="reveal-up bg-[#17324D] text-white p-8 sm:p-12 rounded-3xl space-y-5 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E98A32]">
            <Target className="w-4 h-4 text-[#E98A32]" />
            <span>Mercy Link’s Goal</span>
          </div>

          <h3 className="font-['Playfair_Display'] font-bold text-2xl sm:text-3xl text-white leading-tight">
            Cost-Effective Leadership Training, Biblical Values & Sustainable Resource Networks
          </h3>

          <div className="text-xs sm:text-sm text-white/85 leading-relaxed space-y-3 font-['Plus_Jakarta_Sans']">
            <p>
              Facilitate the most cost-effective educational and training programs among church and community leadership, imparting in them key biblical values in regard to Missions, Organizational Leadership and Business development and also creating platform for networking and sustainable resource development among local churches, grassroots Mission and Development players.
            </p>
            <p>
              We do this through empowerment, capacity building and providing necessary knowledge for relevance, responsibility and sustainability by liaising with local Christian groups in order to carry out evangelistic missions, preaching and teaching in various forms, social interactions and outreaches aimed at bringing communities to the full knowledge of the Lord Jesus Christ.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs text-white/70">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E98A32] shrink-0 mt-0.5" />
              <span>Cost-Effective Education & Practical Leadership</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E98A32] shrink-0 mt-0.5" />
              <span>Missions, Governance & Business Capacity</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E98A32] shrink-0 mt-0.5" />
              <span>Grassroots Collaboration for Lasting Sustainability</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Ministries & The Community Bible Hubs (Cells) */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
            Key Ministries
          </span>
          <h2 className="font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl text-[#17324D]">
            Community Bible Hubs & Small Groups (Cells)
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            We liaise with local churches, grass root organizations, schools, Christian groups and prisons in order to carry out evangelistic missions, preaching and teaching in various forms, social interactions and outreaches aimed at bringing communities to the full knowledge of the Lord Jesus Christ.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-xs space-y-4">
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            The Community Bible Hubs and Small groups (Cells) are one of Mercy Link’s major community projects. The hubs adopt their name from the fact that they are set within communities to operate in and serve that given community. The church operates in three distinct yet unified entities namely:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Entity 1 */}
            <div className="interactive-card p-6 rounded-2xl bg-[#FAF7F0] border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#E98A32]/10 border border-[#E98A32]/30 text-[#E98A32] flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                Children Community Bible Hubs
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nurturing boys and girls with scripture stories, moral discipleship, tactile learning, and gospel hope in their immediate neighborhoods.
              </p>
            </div>

            {/* Entity 2 */}
            <div className="interactive-card p-6 rounded-2xl bg-[#FAF7F0] border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#2459A9]/10 border border-[#2459A9]/30 text-[#2459A9] flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                Youth Community Bible Hubs
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Engaging teenagers and young adults with biblical worldview, vocational preparation, peer accountability, and discipleship.
              </p>
            </div>

            {/* Entity 3 */}
            <div className="interactive-card p-6 rounded-2xl bg-[#FAF7F0] border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-700/10 border border-emerald-700/30 text-emerald-700 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                Adult Community / Prison Fellowships
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Mobilizing parents, neighborhood elders, and regional correction center inmates with pastoral counseling, reconciliation, and salvation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Ministry Activities */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
            Core Ministry Portfolio
          </span>
          <h2 className="font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl text-[#17324D]">
            Key Ministry Activities We Undertake
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            The targeted initiatives through which our field teams and church partners carry out practical ministry across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Activity Category 1: Trainings */}
          <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#2459A9]">
                <div className="w-10 h-10 rounded-xl bg-[#2459A9]/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#2459A9]" />
                </div>
                <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
                  Trainings
                </h3>
              </div>

              <p className="text-xs text-stone-500 leading-relaxed">
                Equipping church workers and grassroots pioneers with practical theology, ministry skills, and discipleship models.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-stone-200/80 space-y-1">
                  <p className="font-bold text-xs text-[#17324D]">The Church Planter Trainings</p>
                  <p className="text-[11px] text-stone-600">
                    Equipping indigenous believers to plant and shepherd vibrant, self-sustaining community churches.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-stone-200/80 space-y-1">
                  <p className="font-bold text-xs text-[#17324D]">Children’s & Youth Ministry Trainings</p>
                  <p className="text-[11px] text-stone-600">
                    Preparing teachers, volunteers, and mentors to disciple the next generation in local churches.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigateTo('programs')}
              className="text-xs font-bold text-[#2459A9] hover:underline flex items-center gap-1 pt-2"
            >
              <span>Explore Training Curriculum</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Activity Category 2: Outreaches */}
          <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#E98A32]">
                <div className="w-10 h-10 rounded-xl bg-[#E98A32]/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#E98A32]" />
                </div>
                <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
                  Outreaches
                </h3>
              </div>

              <p className="text-xs text-stone-500 leading-relaxed">
                Going beyond church walls into public spaces, institutions, homes, and specialized vulnerable groups.
              </p>

              <div className="grid grid-cols-1 gap-2 pt-2 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F0] border border-stone-200/60 font-medium text-stone-800">
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>School Outreaches</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F0] border border-stone-200/60 font-medium text-stone-800">
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>Community Outreaches</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F0] border border-stone-200/60 font-medium text-stone-800">
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>Prison Outreaches</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F0] border border-stone-200/60 font-medium text-stone-800">
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>Home Visits</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F0] border border-stone-200/60 font-medium text-stone-800">
                  <Bike className="w-3.5 h-3.5 text-[#E98A32]" />
                  <span>BodaBoda’s For Christ (Outreach to BodaBoda Riders)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F0] border border-stone-200/60 font-medium text-stone-800">
                  <div className="w-2 h-2 rounded-full bg-[#E98A32]" />
                  <span>People with Disabilities</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => openDonationModal('Community Outreaches')}
              className="text-xs font-bold text-[#E98A32] hover:underline flex items-center gap-1 pt-2"
            >
              <span>Support Our Field Outreaches</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Activity Category 3: Scripture Placement & Media */}
          <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-700">
                <div className="w-10 h-10 rounded-xl bg-emerald-700/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
                  Scripture & Media
                </h3>
              </div>

              <p className="text-xs text-stone-500 leading-relaxed">
                Providing essential evangelical literature, visual teaching aids, and cinematic Gospel presentations.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-stone-200/80 space-y-2">
                  <p className="font-bold text-xs text-[#17324D]">Scripture Placement & Evangelism</p>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    We provide ministry materials to all our partners among which include: Tracts, Curriculums, Books, Visuals, and other ministry materials available, Tactile toys, Bibles and discipleship scripture portions.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-stone-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-[#17324D]">
                    <Video className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Film Ministry</span>
                  </div>
                  <p className="text-[11px] text-stone-600">
                    Open-air evening film screenings of the Gospel, drawing entire villages together to hear God’s word in local languages.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigateTo('get-involved')}
              className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1 pt-2"
            >
              <span>Partner in Materials Distribution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Six Core Values (Official Wording) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="reveal-up text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E98A32]">
            Mercy Link’s Core Values
          </span>
          <h2 className="font-['Playfair_Display'] font-extrabold text-3xl sm:text-4xl text-[#17324D]">
            Our Guiding Ethical & Spiritual Pillars
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">
            The immutable convictions that govern our personal conduct, partnerships, and financial stewardship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-group">
          {coreValues.map((val, idx) => (
            <div
              key={val.title}
              className="reveal-up interactive-card bg-white p-7 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-xs text-[#E98A32]">
                    0{idx + 1}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#2459A9]" />
                </div>
                <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
                  {val.title}
                </h3>
                <p className="text-xs font-semibold text-[#2459A9] italic">
                  {val.tagline}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed pt-1">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="font-['Playfair_Display'] font-bold text-3xl text-[#17324D]">
          Partner with Mercy Link Foundation Africa
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
          We invite churches, missions, and friends worldwide to come alongside us in friendship and practical collaboration to reach communities for Christ.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigateTo('contact')}
            className="interactive-button px-6 py-3 bg-[#17324D] hover:bg-[#2459A9] text-white text-xs uppercase tracking-wider font-bold rounded-full transition-all"
          >
            Contact Our Secretariat
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
