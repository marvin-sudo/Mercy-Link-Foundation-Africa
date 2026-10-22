import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  GraduationCap,
  Heart,
  CheckCircle2,
  FileCheck,
  Calendar,
  HelpCircle,
  Search,
  Send,
  AlertCircle
} from 'lucide-react';

export const EducationFundPage: React.FC = () => {
  const { educationApplications, addEducationApplication, openDonationModal } = useApp();

  // Application Form State
  const [studentName, setStudentName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('Female');
  const [district, setDistrict] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [currentLevel, setCurrentLevel] = useState('Primary 5');
  const [guardianName, setGuardianName] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');
  const [annualFeeNeedUGX, setAnnualFeeNeedUGX] = useState<string>('600000');
  const [reasonForApplication, setReasonForApplication] = useState('');
  const [submittedAppNumber, setSubmittedAppNumber] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Status Lookup State
  const [lookupQuery, setLookupQuery] = useState('');
  const [lookupResult, setLookupResult] = useState<(typeof educationApplications)[0] | null | 'not_found'>(null);

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !guardianName || !guardianPhone || !schoolName) return;

    setIsSubmitting(true);
    try {
      const appNum = await addEducationApplication({
        studentName,
        dateOfBirth: dateOfBirth || '2012-01-01',
        gender,
        district,
        schoolName,
        currentLevel,
        guardianName,
        guardianPhone,
        annualFeeNeedUGX: parseFloat(annualFeeNeedUGX) || 500000,
        reasonForApplication
      });
      setSubmittedAppNumber(appNum);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStatusLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupQuery.trim()) return;
    const found = educationApplications.find(
      (a) => a.applicationNumber.toLowerCase() === lookupQuery.trim().toLowerCase()
    );
    setLookupResult(found || 'not_found');
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Full Width */}
      <section className="reveal-up w-full relative overflow-hidden bg-[#17324D] text-white py-14 sm:py-20 px-4 sm:px-8 lg:px-12 xl:px-16 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E98A32]">
            Educational Stewardship
          </span>
          <h1 className="font-['Manrope'] font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Mercy Link Education Fund
          </h1>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl">
            Equipping vulnerable children, orphans, and students with disabilities with tuition assistance, learning materials, and mentoring so they can complete basic education and fulfill God's purpose.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => openDonationModal('Education Fund')}
              className="px-6 py-3 bg-[#E98A32] hover:bg-[#d47926] text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 interactive-button"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Sponsor a Student's Education</span>
            </button>

            <a
              href="#apply-section"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold border border-white/20 transition-colors interactive-button"
            >
              Submit Student Application ↓
            </a>
          </div>
        </div>
      </section>

      {/* Purpose, Eligibility & Calendar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-group">
          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#2459A9]/10 text-[#2459A9] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Who the Fund Helps
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Targeted assistance for orphans, children from single-parent households facing severe hardship, and children with physical or sensory disabilities in underserved districts of Uganda.
            </p>
          </div>

          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#2459A9]/10 text-[#2459A9] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Strict Eligibility Criteria
            </h3>
            <ul className="text-xs text-stone-600 space-y-1.5 leading-snug">
              <li>• Verified Ugandan citizen enrolled in registered school</li>
              <li>• Letter from local church pastor or local council (LC1)</li>
              <li>• Active commitment to school attendance and character</li>
              <li>• Disbursements paid directly to verified school accounts</li>
            </ul>
          </div>

          <div className="reveal-up interactive-card bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#E98A32]/10 text-[#E98A32] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Intake Cycles
            </h3>
            <div className="text-xs text-stone-600 space-y-2">
              <p>
                <strong>Term 1 Intake:</strong> Open Nov 15 – Dec 31
              </p>
              <p>
                <strong>Term 2 Review:</strong> Open April 15 – May 10
              </p>
              <p className="text-[11px] text-stone-500 pt-1 border-t border-stone-100">
                Subject to approved donor sponsorship slots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Status Lookup Tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-up bg-[#FAF7F0] p-6 sm:p-8 rounded-3xl border border-stone-200 max-w-2xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-[#2459A9]" />
            <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
              Check Existing Application Status
            </h3>
          </div>
          <p className="text-xs text-stone-600">
            Enter your official Education Fund application tracking number (e.g. <code>ML-EDU-2026-0042</code>):
          </p>

          <form onSubmit={handleStatusLookup} className="flex gap-2">
            <input
              type="text"
              required
              placeholder="e.g. ML-EDU-2026-0042"
              value={lookupQuery}
              onChange={(e) => setLookupQuery(e.target.value)}
              className="flex-1 px-3.5 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#17324D] hover:bg-[#2459A9] text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap"
            >
              Check Status
            </button>
          </form>

          {lookupResult === 'not_found' && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>No record found matching this application number. Please check the spelling or contact our administration.</span>
            </div>
          )}

          {typeof lookupResult === 'object' && lookupResult !== null && (
            <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-[#17324D]">{lookupResult.studentName}</span>
                <span className="font-semibold text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800">
                  {lookupResult.status}
                </span>
              </div>
              <p className="text-stone-600">
                School: <strong className="text-stone-900">{lookupResult.schoolName}</strong> ({lookupResult.currentLevel})
              </p>
              <p className="text-stone-600">
                District: <strong className="text-stone-900">{lookupResult.district}</strong> · Submission Date: {lookupResult.submissionDate}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Online Application Intake Form */}
      <section id="apply-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-up bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2459A9]">
              Student Intake Form
            </span>
            <h2 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl text-[#17324D]">
              Apply for Education Fund Assistance
            </h2>
            <p className="text-xs text-stone-500 max-w-md mx-auto">
              Please provide complete and accurate information. All submissions are verified directly with the school administration and local leadership.
            </p>
          </div>

          {submittedAppNumber ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-['Manrope'] font-bold text-xl text-emerald-900">
                Application Submitted Successfully!
              </h3>
              <p className="text-xs text-emerald-800 max-w-md mx-auto">
                Your application has been logged with official reference:
              </p>
              <div className="bg-white p-3 rounded-xl border border-emerald-300 font-mono text-base font-bold text-[#17324D] max-w-xs mx-auto">
                {submittedAppNumber}
              </div>
              <p className="text-xs text-emerald-700">
                Please retain this number to track your status. Our education board will review submissions during the intake cycle.
              </p>
              <button
                onClick={() => setSubmittedAppNumber(null)}
                className="text-xs text-[#2459A9] underline font-bold"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleApplicationSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First & last name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    District in Uganda *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kampala, Gulu"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Current Grade / Level
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Primary 5, Senior 2"
                    value={currentLevel}
                    onChange={(e) => setCurrentLevel(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    School Name in Uganda *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full school name"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Estimated Annual Fee Requirement (UGX)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 600000"
                    value={annualFeeNeedUGX}
                    onChange={(e) => setAnnualFeeNeedUGX(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Guardian full name"
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Guardian Telephone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+256 7..."
                    value={guardianPhone}
                    onChange={(e) => setGuardianPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Reason for Support Application & Background *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Explain the student's family circumstances, vulnerability, or financial barrier..."
                  value={reasonForApplication}
                  onChange={(e) => setReasonForApplication(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                />
              </div>

              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-[11px] text-stone-500">
                Notice: Successful applicants will be asked to present physical copies of school term reports and a recommendation letter from their local parish pastor or local chairperson prior to disbursement.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#17324D] hover:bg-[#2459A9] disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 interactive-button"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application for Review'}</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="reveal-up max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2459A9]">
            Transparency & Governance
          </span>
          <h3 className="font-['Manrope'] font-extrabold text-2xl text-[#17324D]">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-600 stagger-group">
          <div className="reveal-up interactive-card bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
            <h4 className="font-bold text-[#17324D] text-sm">
              How are tuition funds disbursed?
            </h4>
            <p>
              To ensure complete transparency and prevent misuse, all tuition grants are remitted directly to the registered bank account or mobile payment code of the student's school in Uganda. We never disburse cash directly to third parties.
            </p>
          </div>

          <div className="reveal-up interactive-card bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
            <h4 className="font-bold text-[#17324D] text-sm">
              Can donors sponsor a specific child?
            </h4>
            <p>
              Yes. International donors and churches can commit to termly or annual sponsorship of approved students. Sponsors receive progress updates, school reports, and student letters while maintaining strict child safeguarding privacy.
            </p>
          </div>

          <div className="reveal-up interactive-card bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
            <h4 className="font-bold text-[#17324D] text-sm">
              Are students required to attend a specific denomination?
            </h4>
            <p>
              No. Mercy Link Foundation Africa is a Christian, non-denominational NGO. Assistance is awarded based on verified need, character, and school commitment, without discrimination.
            </p>
          </div>

          <div className="reveal-up interactive-card bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
            <h4 className="font-bold text-[#17324D] text-sm">
              What documents must accompany the application?
            </h4>
            <p>
              Candidates must submit the school admission letter or latest term report, a passport photo, and a recommendation letter from their church or community leader upon initial shortlist notification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
