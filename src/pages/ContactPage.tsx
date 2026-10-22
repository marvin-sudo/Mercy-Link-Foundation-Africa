import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Building2,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { contactInfo, addEnquiry } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState<'general' | 'partnership' | 'volunteer' | 'prayer'>('general');
  const [programInterest, setProgramInterest] = useState('General Mission');
  const [message, setMessage] = useState('');
  const [securityCheck, setSecurityCheck] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam honeypot
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent spam rejection

    // Simple anti-spam validation
    if (securityCheck.trim() !== '7') {
      setErrorMsg('Please answer the simple security question correctly (3 + 4 = 7).');
      return;
    }
    setErrorMsg('');

    setIsSubmitting(true);
    try {
      const id = await addEnquiry({
        type: enquiryType,
        fullName,
        email,
        phone,
        programInterest,
        message
      });
      setSubmittedId(id);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header - Full Width */}
      <section className="reveal-up w-full bg-gradient-to-b from-white via-[#FAF7F0] to-[#FAF7F0] border-b border-stone-200/80 py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2459A9]">
            <span>Get in Touch</span>
            <span aria-hidden="true">·</span>
            <span>Kampala, Uganda</span>
            <span aria-hidden="true">·</span>
            <span>East Africa</span>
          </div>
          <h1 className="font-['Manrope'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#17324D] tracking-tight">
            Connect With Mercy Link
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-3xl leading-relaxed">
            We welcome inquiries from local churches, development partners, volunteers, and donors. Reach our administrative office in Kampala or submit an online inquiry below.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid & Map Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-group">
          {/* Postal & Physical */}
          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] border border-[#2459A9]/20 flex items-center justify-center text-[#2459A9]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Physical & Postal Address
            </h3>
            <div className="text-xs text-stone-600 space-y-1 leading-relaxed">
              <p className="font-semibold text-stone-900">{contactInfo.postalAddress}</p>
              <p>{contactInfo.physicalLocation}</p>
              <p>{contactInfo.country} (East Africa)</p>
              <p className="text-[11px] text-stone-400 pt-1">Operations across {contactInfo.regions}</p>
            </div>
          </div>

          {/* Electronic Mail */}
          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] border border-[#2459A9]/20 flex items-center justify-center text-[#2459A9]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Official Email Inboxes
            </h3>
            <div className="text-xs text-stone-600 space-y-2">
              <div>
                <p className="text-[11px] text-stone-400 uppercase font-semibold">General Ministry Desk</p>
                <a
                  href={`mailto:${contactInfo.emails[0]}`}
                  className="font-bold text-[#17324D] hover:text-[#2459A9] transition-colors"
                >
                  {contactInfo.emails[0]}
                </a>
              </div>
              <div>
                <p className="text-[11px] text-stone-400 uppercase font-semibold">Administration & Accounts</p>
                <a
                  href={`mailto:${contactInfo.emails[1]}`}
                  className="font-bold text-[#17324D] hover:text-[#2459A9] transition-colors"
                >
                  {contactInfo.emails[1]}
                </a>
              </div>
            </div>
          </div>

          {/* Telephone Lines */}
          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] border border-[#E98A32]/20 flex items-center justify-center text-[#E98A32]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Direct Telephone & WhatsApp
            </h3>
            <div className="text-xs text-stone-600 space-y-1.5">
              {contactInfo.phones.map((phone, idx) => (
                <div key={phone} className="flex items-center justify-between">
                  <span className="text-[11px] text-stone-400">
                    {idx === 0 ? 'Main Office' : idx === 1 ? 'Admin Line' : 'Field Desk'}:
                  </span>
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="font-mono font-bold text-stone-800 hover:text-[#2459A9]"
                  >
                    {phone}
                  </a>
                </div>
              ))}
              <p className="text-[11px] text-stone-400 pt-1">Operating Hours: Mon - Fri, 8:30 AM - 5:00 PM EAT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Form & Location Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Form */}
          <div className="reveal-left lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2459A9]">
                Send a Secure Message
              </span>
              <h2 className="font-['Manrope'] font-bold text-2xl text-[#17324D]">
                How Can We Serve You?
              </h2>
              <p className="text-xs text-stone-500">
                Messages are routed to the relevant coordinator in Kampala. You will receive an acknowledgment email.
              </p>
            </div>

            {submittedId ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-['Manrope'] font-bold text-xl text-emerald-900">
                  Message Successfully Sent!
                </h3>
                <p className="text-xs text-emerald-800">
                  Reference Tracking Code: <strong>{submittedId}</strong>.
                  Our administrative secretariat will review and reply within 24 to 48 business hours.
                </p>
                <button
                  onClick={() => setSubmittedId(null)}
                  className="text-xs text-[#2459A9] underline font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from legitimate users) */}
                <input
                  type="text"
                  name="website_url"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Okello"
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
                      placeholder="name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+256 7..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Enquiry Category
                    </label>
                    <select
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value as any)}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Church / NGO Partnership</option>
                      <option value="volunteer">Volunteering & Mission Service</option>
                      <option value="prayer">Prayer Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Related Ministry Program
                  </label>
                  <select
                    value={programInterest}
                    onChange={(e) => setProgramInterest(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  >
                    <option value="General Mission">General Mission & Inquiries</option>
                    <option value="Disability Ministry">Disability Ministry</option>
                    <option value="Prison Ministry">Prison Ministry</option>
                    <option value="Church Planter Training">Church Planter Training</option>
                    <option value="Family Foundations / Parenting">Family Foundations / Positive Parenting</option>
                    <option value="Children's Ministry">Children's Ministry & Bible Hubs</option>
                    <option value="Education Fund">Mercy Link Education Fund</option>
                    <option value="The Better Life Program">The Better Life Program</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Your Message / Inquiry *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>

                {/* Spam Protection Challenge */}
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    Spam Verification: What is 3 + 4? *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter answer (e.g. 7)"
                    value={securityCheck}
                    onChange={(e) => setSecurityCheck(e.target.value)}
                    className="w-32 px-3 py-1.5 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                  {errorMsg && <p className="text-[11px] text-red-600 mt-1">{errorMsg}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="interactive-button w-full py-3 bg-[#17324D] hover:bg-[#2459A9] disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message to Secretariat'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Location Map & Ministry Presence */}
          <div className="reveal-right lg:col-span-5 space-y-6">
            <div className="bg-[#17324D] text-white p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E98A32]">
                Regional Headquarters
              </span>
              <h3 className="font-['Manrope'] font-bold text-xl text-white">
                Kampala, Uganda
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Our central secretariat is located in Bulange Mengo, Kampala, serving as the coordination hub for field directors and pastors across Uganda's 70+ reached districts.
              </p>

              <div className="pt-2 border-t border-white/10 space-y-2 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#E98A32]" />
                  <span>Bulange Mengo, Kampala, Uganda</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E98A32]" />
                  <span>Monday - Friday: 8:30 AM - 5:00 PM (EAT)</span>
                </div>
              </div>
            </div>

            {/* Simulated Interactive Map Display */}
            <div className="bg-stone-100 rounded-3xl overflow-hidden border border-stone-200 relative p-6 text-center space-y-3 min-h-[220px] flex flex-col justify-center items-center">
              <MapPin className="w-8 h-8 text-[#E98A32] mx-auto animate-bounce" />
              <div>
                <h4 className="font-['Manrope'] font-bold text-sm text-[#17324D]">
                  Mengo Bulange Outreach Center
                </h4>
                <p className="text-xs text-stone-500">
                  Kampala District, Uganda (East Africa)
                </p>
              </div>
              <p className="text-[11px] text-stone-400 max-w-xs">
                Coordinates: 0.3136° N, 32.5594° E · Visits by appointment for church delegations & partners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
