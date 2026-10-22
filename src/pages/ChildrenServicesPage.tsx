import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Heart,
  BookOpen,
  ShieldCheck,
  Users,
  Smile,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle2
} from 'lucide-react';

export const ChildrenServicesPage: React.FC = () => {
  const { navigateTo, openDonationModal, addEnquiry } = useApp();

  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [childAge, setChildAge] = useState('');
  const [district, setDistrict] = useState('');
  const [inquiryType, setInquiryType] = useState('Community Bible Hub Enrollment');
  const [message, setMessage] = useState('');
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !parentEmail) return;

    const id = await addEnquiry({
      type: 'general',
      fullName: parentName,
      email: parentEmail,
      phone: parentPhone,
      programInterest: `Children Services: ${inquiryType} (Age: ${childAge}, District: ${district})`,
      message: message || `Inquiry regarding ${inquiryType} for a child in ${district}.`
    });
    setSubmittedId(id);
  };

  return (
    <div className="space-y-10 sm:space-y-14 pb-16">
      {/* Hero Full Width */}
      <section className="reveal-up w-full relative overflow-hidden bg-gradient-to-r from-[#17324D] via-[#2459A9] to-[#17324D] text-white py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-12 xl:px-16 shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#E98A32]">
            Child-Centered Ministry
          </span>
          <h1 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
            Children Services & Discipleship
          </h1>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-3xl">
            Nurturing children into a living relationship with Christ, instilling godly character, providing safe learning hubs, and equipping children workers across Ugandan communities.
          </p>

          <div className="pt-1 flex flex-wrap gap-3">
            <button
              onClick={() => openDonationModal("Children's Ministry Program")}
              className="interactive-button px-5 py-2.5 bg-[#E98A32] hover:bg-[#d47926] text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Support Children's Ministry</span>
            </button>

            <button
              onClick={() => navigateTo('education-fund')}
              className="interactive-button px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold border border-white/20 transition-colors"
            >
              Explore Education Fund →
            </button>
          </div>
        </div>
      </section>

      {/* Origin & Truth Statement */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50/70 border border-amber-200/80 p-6 rounded-2xl flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#E98A32] text-white flex items-center justify-center font-bold text-lg shrink-0">
            2007
          </div>
          <div className="space-y-1 text-xs text-stone-700">
            <h3 className="font-['Manrope'] font-bold text-sm text-[#17324D]">
              Our Foundation: The Bulange Mengo Bible Club
            </h3>
            <p className="leading-relaxed">
              Mercy Link began its journey in 2007 as a neighborhood Bible club. We operate through community hubs,
              local churches, and schools. <em>Note:</em> Mercy Link is a community ministry and does <strong>not</strong> operate
              a closed residential orphanage or institutional home—we believe children thrive best in families and supported communities.
            </p>
          </div>
        </div>
      </section>

      {/* Core Children Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="reveal-up max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2459A9]">
            Holistic Ministry Pathways
          </span>
          <h2 className="font-['Manrope'] font-extrabold text-3xl text-[#17324D]">
            Key Children Programs & Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-group">
          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#17324D]/10 text-[#17324D] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-[#2459A9]" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Community Bible Hubs
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Safe, joyful weekly gatherings where over 12,500 children learn Bible verses, sing worship songs, and receive moral instruction and peer mentorship in their home villages.
            </p>
          </div>

          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#17324D]/10 text-[#17324D] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#2459A9]" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Primary School Outreach
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Partnering with public and community primary schools across Uganda for morning scripture assemblies, moral values formation, and learner encouragement.
            </p>
          </div>

          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#17324D]/10 text-[#17324D] flex items-center justify-center">
              <Users className="w-5 h-5 text-[#2459A9]" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Sunday School Teacher Clinics
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Equipping hundreds of local church children's teachers with creative pedagogy, puppetry, lesson planning, and child psychology.
            </p>
          </div>

          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#17324D]/10 text-[#17324D] flex items-center justify-center">
              <Heart className="w-5 h-5 text-[#E98A32]" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Disability Learning Support
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Targeted assistance for children with special physical and intellectual needs, in collaboration with Kampala School of the Handicapped.
            </p>
          </div>

          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#17324D]/10 text-[#17324D] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#2459A9]" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Scripture & Book Placement
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Distributing illustrated children Bibles, storybooks, and literacy materials to encourage early reading and spiritual grounding.
            </p>
          </div>

          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#17324D]/10 text-[#17324D] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Positive Parenting Circles
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Engaging caregivers to foster peaceful, violence-free households where children feel protected and encouraged.
            </p>
          </div>
        </div>
      </section>

      {/* Child Safeguarding Statement */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-3xl border border-stone-200 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <h3 className="font-['Manrope'] font-bold text-xl text-[#17324D]">
              Strict Child Safeguarding & Privacy Policy
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Mercy Link Foundation Africa maintains zero tolerance for any form of child abuse, neglect, or exploitation.
            All children workers and volunteers undergo vetting and adherence training. In strict compliance with child protection
            regulations, we do not publish private contact information, home locations, or identifiable sensitive medical data of children.
          </p>
        </div>
      </section>

      {/* Secure Children Service Enquiry / Enrollment Request */}
      <section className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F0] p-8 sm:p-12 rounded-3xl border border-stone-200 max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-['Manrope'] font-bold text-2xl text-[#17324D]">
              Enquire About Children Services or Hubs
            </h3>
            <p className="text-xs text-stone-600">
              Parents, teachers, and church representatives can reach our Children Services desk in Kampala directly.
            </p>
          </div>

          {submittedId ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-sm text-emerald-900">Enquiry Successfully Logged</h4>
              <p className="text-xs text-emerald-700">
                Reference code: <strong>{submittedId}</strong>. Our child ministry coordinator will contact you via email or phone.
              </p>
              <button
                onClick={() => setSubmittedId(null)}
                className="text-xs text-[#2459A9] underline font-semibold"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Parent / Guardian / Teacher Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+256 ..."
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Child's Age (or Target Group)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 7 years old"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    District / Town in Uganda
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kampala, Wakiso"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Nature of Request
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                >
                  <option value="Community Bible Hub Enrollment">Community Bible Hub Enrollment</option>
                  <option value="School Assembly / Outreach Request">School Assembly / Outreach Request</option>
                  <option value="Children Teacher Training Clinic">Children Teacher Training Clinic</option>
                  <option value="Disability Learning Assistance Inquiry">Disability Learning Assistance Inquiry</option>
                  <option value="General Children Ministry Inquiry">General Children Ministry Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us more about your child or community need..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#17324D] hover:bg-[#2459A9] text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Children Services Enquiry</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
