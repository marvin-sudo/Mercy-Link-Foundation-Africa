import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Heart,
  Users,
  Building2,
  GraduationCap,
  Sparkles,
  Send,
  CheckCircle2,
  HandHeart,
  Briefcase
} from 'lucide-react';

export const GetInvolvedPage: React.FC = () => {
  const { openDonationModal, addEnquiry, navigateTo } = useApp();

  const [selectedPathway, setSelectedPathway] = useState<string>('Church Partnership');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pathways = [
    {
      id: 'church',
      title: 'Church Partnerships',
      icon: Building2,
      description:
        'Equip your congregation for rural missions, send short-term ministry teams, host church planter workshops, or sponsor a sister fellowship in Uganda.'
    },
    {
      id: 'volunteer',
      title: 'Volunteering & Mission Service',
      icon: HandHeart,
      description:
        'Share your skills in Sunday school teaching, disability physical therapy, youth mentoring, medical outreach, or audiovisual and digital support.'
    },
    {
      id: 'sponsor',
      title: 'Program & Ministry Sponsorship',
      icon: Heart,
      description:
        'Adopt a specific regional initiative—such as monthly prison hygiene distributions, community Bible hub supplies, or church planter starter kits.'
    },
    {
      id: 'education',
      title: "Children's Education Support",
      icon: GraduationCap,
      description:
        'Provide termly school fees and uniform assistance for vulnerable orphans and students with disabilities through the Mercy Link Education Fund.'
    },
    {
      id: 'corporate',
      title: 'Corporate & Technical Support',
      icon: Briefcase,
      description:
        'Collaborate on sustainable community water, vocational training tools, digital literacy resources, or institutional grant matching.'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !consent) return;

    setIsSubmitting(true);
    try {
      const ref = await addEnquiry({
        type: 'partnership',
        fullName,
        email,
        phone,
        organization,
        programInterest: `Get Involved: ${selectedPathway}`,
        message: message || `Inquiring about engagement through ${selectedPathway}.`
      });
      setSubmittedRef(ref);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Full Width */}
      <section className="reveal-up w-full relative overflow-hidden bg-gradient-to-r from-[#17324D] to-[#2459A9] text-white py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E98A32]">
            Collaboration & Service
          </span>
          <h1 className="font-['Manrope'] font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Get Involved With Mercy Link
          </h1>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl">
            Every lasting community transformation begins with committed partners. Explore pathways for churches, volunteers, professionals, and sponsors to walk alongside us in Uganda.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => openDonationModal()}
              className="px-6 py-3 bg-[#E98A32] hover:bg-[#d47926] text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 interactive-button"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Make an Immediate Gift</span>
            </button>

            <a
              href="#involvement-form"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold border border-white/20 transition-colors interactive-button"
            >
              Submit Partnership Enquiry ↓
            </a>
          </div>
        </div>
      </section>

      {/* Pathways Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="reveal-up max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2459A9]">
            Engagement Opportunities
          </span>
          <h2 className="font-['Manrope'] font-extrabold text-3xl text-[#17324D]">
            Ways to Partner & Serve
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-group">
          {pathways.map((path) => {
            const IconComponent = path.icon;
            return (
              <div
                key={path.id}
                className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] border border-[#2459A9]/20 flex items-center justify-center text-[#2459A9]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
                    {path.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {path.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href="#involvement-form"
                    onClick={() => setSelectedPathway(path.title)}
                    className="text-xs font-bold text-[#2459A9] hover:underline"
                  >
                    Select & Enquire →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pathway Intake Form */}
      <section id="involvement-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-up bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2459A9]">
              Partnership Intake
            </span>
            <h2 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl text-[#17324D]">
              Express Your Interest to Collaborate
            </h2>
            <p className="text-xs text-stone-500 max-w-md mx-auto">
              Tell us how you, your church, or your organization would like to participate.
            </p>
          </div>

          {submittedRef ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-['Manrope'] font-bold text-xl text-emerald-900">
                Partnership Enquiry Received
              </h3>
              <p className="text-xs text-emerald-800">
                Reference ID: <strong>{submittedRef}</strong>. Our partnership director will reach out to schedule an introductory dialogue.
              </p>
              <button
                onClick={() => setSubmittedRef(null)}
                className="text-xs text-[#2459A9] underline font-bold"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Selected Participation Pathway *
                </label>
                <select
                  value={selectedPathway}
                  onChange={(e) => setSelectedPathway(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                >
                  <option value="Church Partnership">Church Partnership (Missions & Planters)</option>
                  <option value="Volunteering & Mission Service">Volunteering & Mission Service</option>
                  <option value="Program & Ministry Sponsorship">Program & Ministry Sponsorship</option>
                  <option value="Children's Education Support">Children's Education Support</option>
                  <option value="Corporate & Technical Support">Corporate & Technical Support</option>
                  <option value="Prayer & Intercession Partner">Prayer & Intercession Partner</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+256..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Church / Organization / Institution
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Grace Chapel / Independent"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  How Would You Like to Collaborate? *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your vision, timeline, questions, or skills you would like to offer..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                />
              </div>

              <label className="flex items-center gap-2 text-xs text-stone-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="rounded border-stone-300 text-[#E98A32] focus:ring-[#E98A32]"
                />
                <span>I consent to Mercy Link Foundation Africa contacting me regarding this enquiry.</span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#17324D] hover:bg-[#2459A9] disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 interactive-button"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Submitting...' : 'Submit Partnership Expression'}</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
