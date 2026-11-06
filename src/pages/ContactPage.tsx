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
    <div className="space-y-10 sm:space-y-14 pb-16">
      {/* Header - Full Width with Background Image & Transparent Navy Blue Overlay */}
      <section className="reveal-up w-full relative overflow-hidden bg-[#000a37] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 shadow-md border-b border-white/10">
        {/* Relevant Background Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1920&q=80"
            alt="Kampala and East Africa landscape"
            className="reveal-image absolute inset-0 w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
          {/* 50% Opacity Transparent Navy Blue Overlay (#000a37) */}
          <div className="absolute inset-0 bg-[#000a37]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ef5a20]">
            <span>Get in Touch</span>
            <span aria-hidden="true">·</span>
            <span>Kampala, Uganda</span>
            <span aria-hidden="true">·</span>
            <span>East Africa</span>
          </div>
          <h1 className="font-['Manrope'] font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Connect With Mercy Link
          </h1>
          <p className="text-xs sm:text-sm text-stone-200 max-w-3xl leading-relaxed">
            We welcome inquiries from local churches, development partners, volunteers, and donors. Reach our administrative office in Kampala or submit an online inquiry below.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid & Map Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 stagger-group">
          {/* Postal & Physical */}
          <div className="reveal-up interactive-card bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#000a37]/20 flex items-center justify-center text-[#000a37]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-base sm:text-lg text-[#000a37]">
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
          <div className="reveal-up interactive-card bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#000a37]/20 flex items-center justify-center text-[#000a37]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-base sm:text-lg text-[#000a37]">
              Official Email Inboxes
            </h3>
            <div className="text-xs text-stone-600 space-y-2">
              <div>
                <p className="text-[11px] text-stone-400 uppercase font-semibold">General Ministry Desk</p>
                <a
                  href={`mailto:${contactInfo.emails[0]}`}
                  className="font-bold text-[#000a37] hover:text-[#ef5a20] transition-colors"
                >
                  {contactInfo.emails[0]}
                </a>
              </div>
              <div>
                <p className="text-[11px] text-stone-400 uppercase font-semibold">Administration & Accounts</p>
                <a
                  href={`mailto:${contactInfo.emails[1]}`}
                  className="font-bold text-[#000a37] hover:text-[#ef5a20] transition-colors"
                >
                  {contactInfo.emails[1]}
                </a>
              </div>
            </div>
          </div>

          {/* Telephone Lines */}
          <div className="reveal-up interactive-card bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#ef5a20]/20 flex items-center justify-center text-[#ef5a20]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-['Manrope'] font-bold text-base sm:text-lg text-[#000a37]">
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
                    className="font-mono font-bold text-stone-800 hover:text-[#ef5a20]"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Contact Form */}
          <div className="reveal-left lg:col-span-7 bg-white p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ef5a20]">
                Send a Secure Message
              </span>
              <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-[#000a37]">
                How Can We Serve You?
              </h2>
              <p className="text-xs text-stone-500">
                Messages are routed to the relevant coordinator in Kampala. You will receive an acknowledgment email.
              </p>
            </div>

            {submittedId ? (
              <div className="p-6 sm:p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-['Manrope'] font-bold text-lg sm:text-xl text-emerald-900">
                  Message Successfully Sent!
                </h3>
                <p className="text-xs text-emerald-800">
                  Reference Tracking Code: <strong>{submittedId}</strong>.
                  Our administrative secretariat will review and reply within 24 to 48 business hours.
                </p>
                <button
                  onClick={() => setSubmittedId(null)}
                  className="text-xs text-[#000a37] hover:text-[#ef5a20] underline font-bold"
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
                      className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef5a20]"
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
                      className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef5a20]"
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
                      className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef5a20]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Enquiry Category
                    </label>
                    <select
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value as any)}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#ef5a20]"
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
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#ef5a20]"
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
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef5a20]"
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
                    className="w-32 px-3 py-1.5 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#ef5a20]"
                  />
                  {errorMsg && <p className="text-[11px] text-red-600 mt-1">{errorMsg}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="interactive-button w-full py-3.5 bg-[#000a37] hover:bg-[#000a37]/90 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-colors text-center"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message to Secretariat'}
                </button>
              </form>
            )}
          </div>

          {/* Right: Location Map & Ministry Presence */}
          <div className="reveal-right lg:col-span-5 space-y-6">
            <div className="bg-[#000a37] text-white p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ef5a20]">
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
                  <Building2 className="w-4 h-4 text-[#ef5a20]" />
                  <span>Bulange Mengo, Kampala, Uganda</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#ef5a20]" />
                  <span>Monday - Friday: 8:30 AM - 5:00 PM (EAT)</span>
                </div>
              </div>

              {/* Official Social Media Channels */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ef5a20] block">
                  Official Social Channels
                </span>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href="https://www.facebook.com/pages/Mercy-Link-FoundationAfrica/212454875452484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#1877F2] text-white text-xs font-medium transition-all"
                    title="Facebook: Mercy Link Foundation Africa"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://twitter.com/mercylinkafrica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-black text-white text-xs font-medium transition-all"
                    title="X (Twitter): @mercylinkafrica"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>X (Twitter)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Official Banking Information Card */}
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#000a37]" />
                <h4 className="font-['Manrope'] font-bold text-sm text-[#000a37]">
                  Official Banking Details
                </h4>
              </div>
              <div className="text-xs text-stone-600 space-y-1.5 font-mono">
                <p className="flex justify-between">
                  <span className="font-sans text-stone-500">Bank:</span>
                  <strong className="text-stone-900">{contactInfo.bankName}</strong>
                </p>
                <p className="flex justify-between">
                  <span className="font-sans text-stone-500">Account Name:</span>
                  <strong className="text-stone-900">{contactInfo.bankAccountTitle}</strong>
                </p>
                <div className="p-2.5 bg-[#FAF9F6] border border-stone-200/80 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-stone-500">Dollar Account:</span>
                    <strong className="text-stone-900 text-xs font-bold">{contactInfo.bankAccountNumberUSD || '50244877001'}</strong>
                  </div>
                  <div className="flex items-center justify-between border-t border-stone-200/60 pt-1">
                    <span className="font-sans text-stone-500">Shillings Account:</span>
                    <strong className="text-stone-900 text-xs font-bold">{contactInfo.bankAccountNumberUGX || '50244877002'}</strong>
                  </div>
                </div>
                <p className="flex justify-between">
                  <span className="font-sans text-stone-500">SWIFT Code:</span>
                  <strong className="text-stone-900 font-bold">{contactInfo.bankSwift}</strong>
                </p>
              </div>
            </div>

            {/* Simulated Interactive Map Display */}
            <div className="bg-stone-100 rounded-3xl overflow-hidden border border-stone-200 relative p-6 text-center space-y-3 min-h-[220px] flex flex-col justify-center items-center">
              <MapPin className="w-8 h-8 text-[#ef5a20] mx-auto animate-bounce" />
              <div>
                <h4 className="font-['Manrope'] font-bold text-sm text-[#000a37]">
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
