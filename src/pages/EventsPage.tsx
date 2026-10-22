import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EventItem } from '../types';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  X,
  Send,
  ArrowRight,
  Heart
} from 'lucide-react';

export const EventsPage: React.FC = () => {
  const { events, navigateTo, openDonationModal, addEnquiry } = useApp();

  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed'>('upcoming');
  const [selectedEventForRsvp, setSelectedEventForRsvp] = useState<EventItem | null>(null);

  // RSVP Modal Form
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [attendeePhone, setAttendeePhone] = useState('');
  const [numGuests, setNumGuests] = useState('1');
  const [notes, setNotes] = useState('');
  const [rsvpSubmitted, setRsvpSubmitted] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const displayedEvents = events.filter((e) =>
    activeTab === 'upcoming' ? e.status === 'upcoming' : e.status === 'completed'
  );

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendeeName || !attendeeEmail || !selectedEventForRsvp) return;

    setSubmitting(true);
    try {
      const id = await addEnquiry({
        type: 'general',
        fullName: attendeeName,
        email: attendeeEmail,
        phone: attendeePhone,
        programInterest: `Event Registration: ${selectedEventForRsvp.title} (${numGuests} guest/s)`,
        message: notes || `Registered to attend ${selectedEventForRsvp.title} on ${selectedEventForRsvp.date}.`
      });
      setRsvpSubmitted(id);
    } finally {
      setSubmitting(false);
    }
  };

  const closeRsvpModal = () => {
    setSelectedEventForRsvp(null);
    setRsvpSubmitted(null);
    setAttendeeName('');
    setEmailAttendee('');
  };

  function setEmailAttendee(val: string) {
    setAttendeeEmail(val);
  }

  return (
    <div className="space-y-12 pb-16">
      {/* Header - Full Width */}
      <section className="reveal-up w-full bg-gradient-to-b from-white via-[#FAF7F0] to-[#FAF7F0] border-b border-stone-200/80 py-12 sm:py-16 px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2459A9]">
            <span>Conferences & Outreaches</span>
            <span aria-hidden="true">·</span>
            <span>Fellowship & Training</span>
            <span aria-hidden="true">·</span>
            <span>Uganda</span>
          </div>
          <h1 className="font-['Manrope'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#17324D] tracking-tight">
            Events & Opportunities
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-3xl leading-relaxed">
            Participate in our annual leadership summits, disability community days, and positive parenting workshops across Kampala and regional hubs.
          </p>

          {/* Tab switch */}
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all interactive-button ${
                activeTab === 'upcoming'
                  ? 'bg-[#17324D] text-white shadow-xs'
                  : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-300'
              }`}
            >
              Upcoming Events ({events.filter((e) => e.status === 'upcoming').length})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all interactive-button ${
                activeTab === 'completed'
                  ? 'bg-[#17324D] text-white shadow-xs'
                  : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-300'
              }`}
            >
              Past Gatherings ({events.filter((e) => e.status === 'completed').length})
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {displayedEvents.length === 0 ? (
          <div className="reveal-up p-12 text-center bg-white rounded-3xl border border-stone-200 space-y-3">
            <Calendar className="w-10 h-10 text-stone-400 mx-auto" />
            <h3 className="font-['Manrope'] font-bold text-lg text-stone-800">
              No Events Currently Scheduled
            </h3>
            <p className="text-xs text-stone-500 max-w-md mx-auto">
              Our regional outreach dates are verified quarterly with participating churches. Inquire with our office to invite Mercy Link to your district or school.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigateTo('contact')}
                className="px-5 py-2.5 bg-[#17324D] text-white rounded-lg text-xs font-bold interactive-button"
              >
                Contact Our Ministry Desk
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-group">
            {displayedEvents.map((evt) => (
              <div
                key={evt.id}
                className="reveal-up interactive-card bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#2459A9]">{evt.category}</span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        evt.status === 'upcoming'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {evt.status === 'upcoming' ? 'Confirmed Date' : 'Completed'}
                    </span>
                  </div>

                  <h2 className="font-['Manrope'] font-bold text-xl text-[#17324D] leading-snug">
                    {evt.title}
                  </h2>

                  <div className="space-y-1.5 text-xs text-stone-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#E98A32] shrink-0" />
                      <span className="font-semibold text-stone-900">{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#2459A9] shrink-0 mt-0.5" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {evt.description}
                  </p>

                  {evt.contactPerson && (
                    <p className="text-[11px] text-stone-400 pt-1">
                      Desk: {evt.contactPerson}
                    </p>
                  )}
                </div>

                <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between">
                  {evt.registrationOpen && evt.status === 'upcoming' ? (
                    <button
                      onClick={() => setSelectedEventForRsvp(evt)}
                      className="px-4 py-2 bg-[#17324D] hover:bg-[#2459A9] text-white rounded-lg text-xs font-bold transition-colors interactive-button"
                    >
                      Register / RSVP
                    </button>
                  ) : (
                    <span className="text-xs text-stone-400 italic">
                      Registration Concluded
                    </span>
                  )}

                  {evt.programId && (
                    <button
                      onClick={() => navigateTo('program-detail', evt.programId)}
                      className="text-xs text-[#2459A9] hover:underline font-semibold"
                    >
                      View Program →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* RSVP Modal */}
      {selectedEventForRsvp && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-stone-200 overflow-hidden my-8 animate-in fade-in zoom-in-95">
            <div className="bg-[#17324D] text-white p-5 flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#E98A32] uppercase">
                  Event Registration
                </span>
                <h3 className="font-['Manrope'] font-bold text-lg text-white">
                  {selectedEventForRsvp.title}
                </h3>
                <p className="text-xs text-white/70">
                  {selectedEventForRsvp.date} · {selectedEventForRsvp.location}
                </p>
              </div>

              <button
                onClick={closeRsvpModal}
                className="p-1 rounded text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {rsvpSubmitted ? (
              <div className="p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base text-[#17324D]">Registration Confirmed!</h4>
                <p className="text-xs text-stone-600">
                  Your registration has been recorded with reference <strong>{rsvpSubmitted}</strong>.
                  We look forward to fellowshipping with you.
                </p>
                <button
                  onClick={closeRsvpModal}
                  className="px-5 py-2 bg-[#17324D] text-white text-xs font-bold rounded-lg"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={attendeeName}
                    onChange={(e) => setAttendeeName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={attendeeEmail}
                      onChange={(e) => setAttendeeEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+256..."
                      value={attendeePhone}
                      onChange={(e) => setAttendeePhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Number of Attendees
                  </label>
                  <select
                    value={numGuests}
                    onChange={(e) => setNumGuests(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-5">3 to 5 People (Delegation)</option>
                    <option value="5+">More than 5 (Church Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Church / Ministry or Special Note
                  </label>
                  <input
                    type="text"
                    placeholder="Your church or community affiliation..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={closeRsvpModal}
                    className="px-4 py-2 text-xs font-semibold text-stone-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-5 py-2 bg-[#E98A32] hover:bg-[#d47926] text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    {submitting ? 'Registering...' : 'Confirm Registration'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
