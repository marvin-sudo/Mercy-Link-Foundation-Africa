import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, Phone, MapPin, Send, CheckCircle, Shield, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const {
    navigateTo,
    openDonationModal,
    subscribeNewsletter,
    contactInfo,
    currentUser,
    openSuperAdminModal
  } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [consentChecked, setConsentChecked] = useState(true);

  // Footer logo 5-consecutive-clicks handler
  const [footerClickCount, setFooterClickCount] = useState(0);
  const footerTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleFooterLogoClick = () => {
    const next = footerClickCount + 1;
    setFooterClickCount(next);
    if (footerTimerRef.current) clearTimeout(footerTimerRef.current);
    if (next >= 5) {
      setFooterClickCount(0);
      if (currentUser.isAuthenticated) {
        navigateTo('cms');
      } else {
        openSuperAdminModal();
      }
    } else {
      footerTimerRef.current = setTimeout(() => {
        setFooterClickCount(0);
      }, 2500);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !consentChecked) return;
    const success = subscribeNewsletter(newsletterEmail);
    if (success) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#17324D] text-white pt-16 pb-10 border-t border-[#2459A9]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 stagger-group">
          {/* Col 1 & 2: Organization Profile */}
          <div className="reveal-up lg:col-span-2 space-y-4">
            <button
              onClick={handleFooterLogoClick}
              className="flex items-center gap-4 text-left focus:outline-none focus:ring-2 focus:ring-[#E98A32] rounded-xl p-1 group"
              title="Mercy Link Foundation Africa (Click 5 times for Super Admin Staff CMS)"
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-white border-2 ${
                  footerClickCount > 1
                    ? 'border-[#E98A32] ring-4 ring-[#E98A32]/60 scale-105'
                    : 'border-[#E98A32]'
                } shadow-lg shrink-0 flex items-center justify-center transition-all group-hover:scale-105 overflow-hidden`}
              >
                <img
                  src="https://i.postimg.cc/nV7TcH8r/Gemini-Generated-Image.jpg"
                  alt="Mercy Link Foundation Africa Logo"
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/logo.jpg';
                  }}
                />
              </div>
              <div>
                <h3 className="font-['Manrope'] font-extrabold text-xl sm:text-2xl tracking-tight text-white leading-snug group-hover:text-amber-200 transition-colors">
                  Mercy Link Foundation Africa
                </h3>
                <p className="text-xs text-[#E98A32] font-semibold tracking-wider uppercase mt-1">
                  Transforming Communities – Creating a Legacy of Peace
                </p>
              </div>
            </button>

            <p className="text-xs text-white/70 leading-relaxed max-w-md">
              A Christian, non-denominational NGO established in 2007 in Bulange Mengo and registered in 2013 in Uganda.
              Equipping churches, developing leaders, empowering vulnerable children and families, and restoring hope in
              over 70 districts across Uganda and East Africa.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-white/50">
              <span>Faith & Compassion</span>
              <span aria-hidden="true">·</span>
              <span>Human Dignity</span>
              <span aria-hidden="true">·</span>
              <span>Accountability</span>
              <span aria-hidden="true">·</span>
              <span>Sustainable Development</span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openDonationModal()}
                className="interactive-button inline-flex items-center gap-2 px-4 py-2 bg-[#E98A32] hover:bg-[#d47926] text-white rounded-lg text-xs font-bold transition-all shadow-sm"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Partner or Support Us Today</span>
              </button>
            </div>

            {/* Social Media Channels */}
            <div className="pt-3 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E98A32]">
                Follow & Connect With Us
              </span>
              <div className="flex items-center gap-2 pt-0.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com/mercylinkfoundationafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] hover:text-white text-white/80 flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                  aria-label="Mercy Link Foundation Africa on Facebook"
                  title="Facebook: @mercylinkfoundationafrica"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* X (formerly Twitter) */}
                <a
                  href="https://x.com/mercylinkafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-black hover:text-white text-white/80 flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                  aria-label="Mercy Link Foundation Africa on X"
                  title="X (Twitter): @mercylinkafrica"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/mercylinkafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white text-white/80 flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                  aria-label="Mercy Link Foundation Africa on Instagram"
                  title="Instagram: @mercylinkafrica"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@mercylinkfoundationafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF0000] hover:text-white text-white/80 flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                  aria-label="Mercy Link Foundation Africa on YouTube"
                  title="YouTube: @mercylinkfoundationafrica"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/mercylink-foundation-africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0A66C2] hover:text-white text-white/80 flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                  aria-label="Mercy Link Foundation Africa on LinkedIn"
                  title="LinkedIn: Mercy Link Foundation Africa"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/256392003454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white text-white/80 flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                  aria-label="Chat with Mercy Link Foundation Africa on WhatsApp"
                  title="WhatsApp: +(256) 392 003 454"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="reveal-up">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E98A32] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us (Overview)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('ministry-profile')}
                  className="hover:text-white transition-colors"
                >
                  Ministry Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about-founder')}
                  className="hover:text-white transition-colors"
                >
                  About the Founder
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('vision-mission-values')}
                  className="hover:text-white transition-colors"
                >
                  Vision, Mission & Core Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('programs')}
                  className="hover:text-white transition-colors"
                >
                  Our 7 Ministries
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('children-services')}
                  className="hover:text-white transition-colors"
                >
                  Children Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('education-fund')}
                  className="hover:text-white transition-colors"
                >
                  Education Fund
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('reports')}
                  className="hover:text-white transition-colors"
                >
                  Impact & Field Reports
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('events')}
                  className="hover:text-white transition-colors"
                >
                  Ministry Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('get-involved')}
                  className="hover:text-white transition-colors"
                >
                  Get Involved & Volunteer
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Ministry Programs */}
          <div className="reveal-up">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E98A32] mb-4">
              Our Ministries
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  onClick={() => navigateTo('program-detail', 'disability-ministry')}
                  className="hover:text-white transition-colors text-left"
                >
                  Disability Ministry
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('program-detail', 'prison-ministry')}
                  className="hover:text-white transition-colors text-left"
                >
                  Prison Ministry
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('program-detail', 'church-planters')}
                  className="hover:text-white transition-colors text-left"
                >
                  Church Planter Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('program-detail', 'family-foundations')}
                  className="hover:text-white transition-colors text-left"
                >
                  Family Foundations
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('program-detail', 'childrens-ministry')}
                  className="hover:text-white transition-colors text-left"
                >
                  Children's Ministry
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('program-detail', 'better-life-program')}
                  className="hover:text-white transition-colors text-left"
                >
                  The Better Life Program
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Verified Contact Details */}
          <div className="reveal-up">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E98A32] mb-4">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E98A32] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{contactInfo.postalAddress}</p>
                  <p className="text-white/60 text-[11px]">{contactInfo.physicalLocation}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E98A32] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  {contactInfo.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="hover:text-white transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E98A32] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  {contactInfo.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="hover:text-white transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('contact')}
                  className="text-xs text-[#E98A32] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Submit Online Enquiry</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="reveal-up py-8 my-4 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6">
            <h4 className="font-['Manrope'] font-bold text-lg text-white">
              Be Part of the Story of Transformation
            </h4>
            <p className="text-xs text-white/70 mt-1">
              Receive verified quarterly ministry reports, church planting updates, and community testimonies from Uganda.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-[#2459A9]/40 border border-[#2459A9] rounded-lg text-white text-xs">
                <CheckCircle className="w-4 h-4 text-[#E98A32]" />
                <span>Thank you for subscribing! Your privacy is respected and you can unsubscribe anytime.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3.5 py-2 text-xs text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#E98A32] hover:bg-[#d47926] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
                <label className="flex items-center gap-2 text-[11px] text-white/60 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    className="rounded border-white/30 text-[#E98A32] focus:ring-[#E98A32]"
                  />
                  <span>I agree to receive ministry updates. Mercy Link Foundation Africa does not share donor data.</span>
                </label>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Operational Bar */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>
            © {new Date().getFullYear()} Mercy Link Foundation Africa. Registered Local NGO in Uganda. All rights reserved.
          </p>

          {currentUser.isAuthenticated && (
            <div className="flex items-center gap-2 text-[11px]">
              <button
                onClick={() => navigateTo('cms')}
                className="text-[#E98A32] hover:text-white flex items-center gap-1 font-semibold"
              >
                <Shield className="w-3 h-3 text-[#E98A32]" />
                <span>CMS ({currentUser.role.split(' ')[0]})</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
