import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AdminRole, ImpactMetric, Program, Report, EventItem } from '../types';
import {
  Shield,
  LayoutDashboard,
  BookOpen,
  FileText,
  Calendar,
  BarChart3,
  Phone,
  GraduationCap,
  MessageSquare,
  Users,
  Settings,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Save,
  Search
} from 'lucide-react';

export const AdminCMS: React.FC = () => {
  const {
    currentUser,
    loginCMS,
    logoutCMS,
    switchRole,
    navigateTo,
    programs,
    updateProgram,
    reports,
    addReport,
    updateReport,
    deleteReport,
    events,
    addEvent,
    updateEvent,
    impactMetrics,
    updateImpactMetric,
    contactInfo,
    updateContactInfo,
    enquiries,
    updateEnquiryStatus,
    educationApplications,
    updateApplicationStatus,
    subscribers
  } = useApp();

  // Login form state
  const [loginEmail, setLoginEmail] = useState('staff@mercylinkfoundationafrica.org');
  const [loginPassword, setLoginPassword] = useState('mercylink2026');
  const [selectedRole, setSelectedRole] = useState<AdminRole>('Super Administrator');

  // Active Tab
  const [activeTab, setActiveTab] = useState<
    | 'dashboard'
    | 'programs'
    | 'reports'
    | 'events'
    | 'impact'
    | 'contacts'
    | 'applications'
    | 'enquiries'
    | 'subscribers'
  >('dashboard');

  // Program Edit Modal/State
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);

  // Report Edit/Add State
  const [editingReport, setEditingReport] = useState<Report | null>(null);
  const [isAddingReport, setIsAddingReport] = useState(false);
  const [newReportTitle, setNewReportTitle] = useState('');
  const [newReportCategory, setNewReportCategory] = useState<Report['category']>("Children's Ministry");
  const [newReportPeriod, setNewReportPeriod] = useState('2026 Reporting Cycle');
  const [newReportLocation, setNewReportLocation] = useState('Kampala, Uganda');
  const [newReportContent, setNewReportContent] = useState('');
  const [newReportExcerpt, setNewReportExcerpt] = useState('');

  // Event Add/Edit State
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('2026-12-20');
  const [newEventLocation, setNewEventLocation] = useState('Kampala, Uganda');
  const [newEventDesc, setNewEventDesc] = useState('');

  // Contact Info Local State
  const [tempContact, setTempContact] = useState({ ...contactInfo });
  const [contactSavedAlert, setContactSavedAlert] = useState(false);

  // Impact Metric Local State
  const [editingMetric, setEditingMetric] = useState<ImpactMetric | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginCMS('Executive Staff', selectedRole);
  };

  const rolesList: AdminRole[] = [
    'Super Administrator',
    'Content Editor',
    'Program Manager',
    'Communications Officer',
    'Enquiry Manager'
  ];

  if (!currentUser.isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl max-w-md w-full space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#17324D] text-[#E98A32] flex items-center justify-center mx-auto shadow-md">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="font-['Manrope'] font-extrabold text-2xl text-[#17324D]">
              Staff CMS Portal
            </h2>
            <p className="text-xs text-stone-500">
              Authorized access for Mercy Link Foundation Africa administrators and program managers.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Authorized Role
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value as AdminRole)}
                className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
              >
                {rolesList.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Staff Email
              </label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Staff Password
              </label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
              />
            </div>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-[11px] text-stone-500">
              Demo Access: Any password enters the administrative dashboard with role-based permissions.
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#17324D] hover:bg-[#2459A9] text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
            >
              Log In to Portal
            </button>

            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="w-full py-2 text-stone-500 hover:text-stone-800 text-xs font-medium text-center transition-colors"
            >
              ← Return to Public Website
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Authenticated CMS View
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* CMS Top Bar */}
      <div className="bg-[#17324D] text-white p-6 rounded-3xl flex flex-wrap items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full p-0.5 bg-white border-2 border-[#E98A32] shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
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
            <div className="flex items-center gap-2">
              <h1 className="font-['Manrope'] font-bold text-lg text-white">
                Mercy Link Content Management System
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/20 text-[#E98A32]">
                {currentUser.role}
              </span>
            </div>
            <p className="text-xs text-white/70">
              Staff: {currentUser.userName} ({currentUser.userEmail})
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Role switcher for evaluation testing */}
          <select
            value={currentUser.role}
            onChange={(e) => switchRole(e.target.value as AdminRole)}
            className="px-3 py-1.5 text-xs bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#E98A32]"
            title="Switch staff role"
          >
            {rolesList.map((r) => (
              <option key={r} value={r} className="text-stone-900">
                Switch: {r}
              </option>
            ))}
          </select>

          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
            title="Return to public website view"
          >
            <span>View Website</span>
          </button>

          <button
            onClick={() => {
              logoutCMS();
              navigateTo('home');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* CMS Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-stone-200">
        {[
          { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
          { id: 'programs', label: 'Ministry Programs', icon: BookOpen },
          { id: 'reports', label: 'Reports & Field Data', icon: FileText },
          { id: 'events', label: 'Events Calendar', icon: Calendar },
          { id: 'impact', label: 'Impact Statistics', icon: BarChart3 },
          { id: 'applications', label: 'Education Applications', icon: GraduationCap },
          { id: 'enquiries', label: 'Enquiries & Messages', icon: MessageSquare },
          { id: 'contacts', label: 'Contact & Banking', icon: Phone },
          { id: 'subscribers', label: 'Subscribers', icon: Users }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? 'bg-[#17324D] text-white shadow-xs'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: DASHBOARD OVERVIEW */}
      {activeTab === 'dashboard' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-2">
              <span className="text-[11px] font-bold text-stone-400 uppercase">Active Programs</span>
              <p className="font-['Manrope'] font-extrabold text-3xl text-[#17324D] tabular-nums">
                {programs.length}
              </p>
              <p className="text-xs text-stone-500">7 verified ministries in Uganda</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-2">
              <span className="text-[11px] font-bold text-stone-400 uppercase">Published Reports</span>
              <p className="font-['Manrope'] font-extrabold text-3xl text-[#2459A9] tabular-nums">
                {reports.filter((r) => r.isPublished).length}
              </p>
              <p className="text-xs text-stone-500">Field documentation summaries</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-2">
              <span className="text-[11px] font-bold text-stone-400 uppercase">Education Applications</span>
              <p className="font-['Manrope'] font-extrabold text-3xl text-[#E98A32] tabular-nums">
                {educationApplications.length}
              </p>
              <p className="text-xs text-stone-500">
                {educationApplications.filter((a) => a.status === 'Pending Review').length} awaiting review
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-2">
              <span className="text-[11px] font-bold text-stone-400 uppercase">Incoming Enquiries</span>
              <p className="font-['Manrope'] font-extrabold text-3xl text-emerald-700 tabular-nums">
                {enquiries.length}
              </p>
              <p className="text-xs text-stone-500">
                {enquiries.filter((e) => e.status === 'new').length} new messages
              </p>
            </div>
          </div>

          {/* Recent Enquiries & Applications quick preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                  Recent Enquiries
                </h3>
                <button
                  onClick={() => setActiveTab('enquiries')}
                  className="text-xs font-bold text-[#2459A9] hover:underline"
                >
                  View All ({enquiries.length}) →
                </button>
              </div>

              <div className="space-y-3">
                {enquiries.slice(0, 3).map((enq) => (
                  <div key={enq.id} className="p-3.5 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#17324D]">{enq.fullName}</span>
                      <span className="text-[11px] text-stone-400">{enq.date}</span>
                    </div>
                    <p className="text-xs text-stone-600 line-clamp-1">{enq.message}</p>
                    <span className="text-[10px] font-semibold text-[#2459A9]">{enq.programInterest}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                  Recent Education Applications
                </h3>
                <button
                  onClick={() => setActiveTab('applications')}
                  className="text-xs font-bold text-[#2459A9] hover:underline"
                >
                  View All ({educationApplications.length}) →
                </button>
              </div>

              <div className="space-y-3">
                {educationApplications.slice(0, 3).map((app) => (
                  <div key={app.id} className="p-3.5 bg-stone-50 rounded-xl border border-stone-100 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#17324D]">{app.studentName} ({app.currentLevel})</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                        {app.status}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600">{app.schoolName} · District: {app.district}</p>
                    <span className="text-[10px] text-stone-400 font-mono">Ref: {app.applicationNumber}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MANAGE PROGRAMS */}
      {activeTab === 'programs' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-['Manrope'] font-bold text-xl text-[#17324D]">
                Ministry Program Management
              </h2>
              <p className="text-xs text-stone-500">
                Update descriptions, verified outcomes, and objectives for all 7 baseline programs.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {programs.map((prog) => (
              <div
                key={prog.id}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#2459A9]">{prog.category}</span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-xs text-stone-500">Period: {prog.reportingPeriod}</span>
                  </div>
                  <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">{prog.name}</h3>
                  <p className="text-xs text-stone-600 line-clamp-2">{prog.overview}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setEditingProgram(prog)}
                    className="px-4 py-2 bg-[#17324D] hover:bg-[#2459A9] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Edit Program</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Program Edit Modal */}
          {editingProgram && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-stone-200 p-6 space-y-4 my-8">
                <h3 className="font-['Manrope'] font-bold text-xl text-[#17324D]">
                  Edit Program: {editingProgram.name}
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Tagline</label>
                    <input
                      type="text"
                      value={editingProgram.tagline}
                      onChange={(e) =>
                        setEditingProgram({ ...editingProgram, tagline: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Overview Description</label>
                    <textarea
                      rows={3}
                      value={editingProgram.overview}
                      onChange={(e) =>
                        setEditingProgram({ ...editingProgram, overview: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">The Need Addressed</label>
                    <textarea
                      rows={2}
                      value={editingProgram.needAddressed}
                      onChange={(e) =>
                        setEditingProgram({ ...editingProgram, needAddressed: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Reporting Period</label>
                    <input
                      type="text"
                      value={editingProgram.reportingPeriod}
                      onChange={(e) =>
                        setEditingProgram({ ...editingProgram, reportingPeriod: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-stone-200">
                  <button
                    onClick={() => setEditingProgram(null)}
                    className="px-4 py-2 text-xs font-semibold text-stone-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      updateProgram(editingProgram);
                      setEditingProgram(null);
                    }}
                    className="px-5 py-2 bg-[#17324D] hover:bg-[#2459A9] text-white text-xs font-bold rounded-lg"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: MANAGE REPORTS */}
      {activeTab === 'reports' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-['Manrope'] font-bold text-xl text-[#17324D]">
                Field Reports Archive Management
              </h2>
              <p className="text-xs text-stone-500">
                Publish new ministry updates, edit verified metrics, or archive outdated entries.
              </p>
            </div>

            <button
              onClick={() => setIsAddingReport(true)}
              className="px-4 py-2 bg-[#E98A32] hover:bg-[#d47926] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Publish New Report</span>
            </button>
          </div>

          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-[#2459A9]">{report.category}</span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-stone-500">{report.publicationDate}</span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-stone-500">{report.location}</span>
                  </div>
                  <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">{report.title}</h3>
                  <p className="text-xs text-stone-600 line-clamp-1">{report.excerpt}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => deleteReport(report.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete report"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Report Modal */}
          {isAddingReport && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-stone-200 p-6 space-y-4 my-8">
                <h3 className="font-['Manrope'] font-bold text-xl text-[#17324D]">
                  Publish New Field Report
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Report Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prison Discipleship Milestone 2026"
                      value={newReportTitle}
                      onChange={(e) => setNewReportTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">Category</label>
                      <select
                        value={newReportCategory}
                        onChange={(e) => setNewReportCategory(e.target.value as any)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg bg-white"
                      >
                        <option value="Children's Ministry">Children's Ministry</option>
                        <option value="Disability Ministry">Disability Ministry</option>
                        <option value="Prison Ministry">Prison Ministry</option>
                        <option value="Leadership Training">Leadership Training</option>
                        <option value="Education & Family Support">Education & Family Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-stone-700 mb-1">Location</label>
                      <input
                        type="text"
                        value={newReportLocation}
                        onChange={(e) => setNewReportLocation(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Short Excerpt *</label>
                    <input
                      type="text"
                      required
                      placeholder="Brief summary..."
                      value={newReportExcerpt}
                      onChange={(e) => setNewReportExcerpt(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Full Content *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Detailed report text..."
                      value={newReportContent}
                      onChange={(e) => setNewReportContent(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-stone-200">
                  <button
                    onClick={() => setIsAddingReport(false)}
                    className="px-4 py-2 text-xs font-semibold text-stone-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (!newReportTitle || !newReportContent) return;
                      addReport({
                        title: newReportTitle,
                        slug: newReportTitle.toLowerCase().replace(/\s+/g, '-'),
                        publicationDate: new Date().toISOString().split('T')[0],
                        reportingPeriod: newReportPeriod,
                        category: newReportCategory,
                        location: newReportLocation,
                        author: currentUser.userName,
                        excerpt: newReportExcerpt || newReportTitle,
                        content: newReportContent,
                        featuredImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
                        isPublished: true
                      });
                      setIsAddingReport(false);
                      setNewReportTitle('');
                      setNewReportContent('');
                    }}
                    className="px-5 py-2 bg-[#E98A32] text-white text-xs font-bold rounded-lg"
                  >
                    Publish to Website
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: MANAGE EVENTS */}
      {activeTab === 'events' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-['Manrope'] font-bold text-xl text-[#17324D]">
                Event Calendar Management
              </h2>
              <p className="text-xs text-stone-500">
                Create new conferences, seminars, or mark past gatherings.
              </p>
            </div>

            <button
              onClick={() => setIsAddingEvent(true)}
              className="px-4 py-2 bg-[#E98A32] hover:bg-[#d47926] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Ministry Event</span>
            </button>
          </div>

          <div className="space-y-4">
            {events.map((evt) => (
              <div
                key={evt.id}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-[#E98A32]">{evt.date}</span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-stone-500">{evt.location}</span>
                  </div>
                  <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">{evt.title}</h3>
                  <p className="text-xs text-stone-600">{evt.description}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                      evt.status === 'upcoming'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {evt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {isAddingEvent && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-stone-200 p-6 space-y-4 my-8">
                <h3 className="font-['Manrope'] font-bold text-xl text-[#17324D]">
                  Add Ministry Event
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Event Title *</label>
                    <input
                      type="text"
                      required
                      value={newEventTitle}
                      onChange={(e) => setNewEventTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">Event Date</label>
                      <input
                        type="date"
                        value={newEventDate}
                        onChange={(e) => setNewEventDate(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-stone-700 mb-1">Location</label>
                      <input
                        type="text"
                        value={newEventLocation}
                        onChange={(e) => setNewEventLocation(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Description</label>
                    <textarea
                      rows={3}
                      value={newEventDesc}
                      onChange={(e) => setNewEventDesc(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-stone-200">
                  <button
                    onClick={() => setIsAddingEvent(false)}
                    className="px-4 py-2 text-xs font-semibold text-stone-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (!newEventTitle) return;
                      addEvent({
                        title: newEventTitle,
                        date: newEventDate,
                        time: '9:00 AM - 4:00 PM EAT',
                        location: newEventLocation,
                        isVirtual: false,
                        description: newEventDesc,
                        category: 'Community Fellowship',
                        status: 'upcoming',
                        registrationOpen: true
                      });
                      setIsAddingEvent(false);
                      setNewEventTitle('');
                      setNewEventDesc('');
                    }}
                    className="px-5 py-2 bg-[#17324D] text-white text-xs font-bold rounded-lg"
                  >
                    Save Event
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 5: IMPACT METRICS */}
      {activeTab === 'impact' && (
        <div className="space-y-6">
          <div>
            <h2 className="font-['Manrope'] font-bold text-xl text-[#17324D]">
              Approved Impact Statistics
            </h2>
            <p className="text-xs text-stone-500">
              Maintain audited field numbers with verifiable reporting sources and update cycles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impactMetrics.map((met) => (
              <div
                key={met.id}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-['Manrope'] font-bold text-2xl text-[#17324D] tabular-nums">
                      {met.value}
                    </span>
                    <button
                      onClick={() => setEditingMetric(met)}
                      className="text-xs font-bold text-[#2459A9] hover:underline flex items-center gap-1"
                    >
                      <Edit2 className="w-3 h-3" />
                      <span>Edit Metric</span>
                    </button>
                  </div>
                  <h3 className="font-bold text-xs text-[#242B33]">{met.label}</h3>
                  <p className="text-xs text-stone-600">{met.description}</p>
                </div>

                <div className="pt-2 border-t border-stone-100 text-[10px] text-stone-400 space-y-0.5">
                  <p>Source: {met.source}</p>
                  <p>Cycle: {met.reportingPeriod} · Updated: {met.lastUpdated}</p>
                </div>
              </div>
            ))}
          </div>

          {editingMetric && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-stone-200 p-6 space-y-4 my-8">
                <h3 className="font-['Manrope'] font-bold text-lg text-[#17324D]">
                  Edit Statistic: {editingMetric.label}
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Value (e.g. 70+, 12,500+)</label>
                    <input
                      type="text"
                      value={editingMetric.value}
                      onChange={(e) => setEditingMetric({ ...editingMetric, value: e.target.value })}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Source Citation</label>
                    <input
                      type="text"
                      value={editingMetric.source}
                      onChange={(e) => setEditingMetric({ ...editingMetric, source: e.target.value })}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">Reporting Period</label>
                    <input
                      type="text"
                      value={editingMetric.reportingPeriod}
                      onChange={(e) =>
                        setEditingMetric({ ...editingMetric, reportingPeriod: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-stone-200">
                  <button
                    onClick={() => setEditingMetric(null)}
                    className="px-4 py-2 text-xs font-semibold text-stone-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      updateImpactMetric({
                        ...editingMetric,
                        lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                      });
                      setEditingMetric(null);
                    }}
                    className="px-5 py-2 bg-[#17324D] text-white text-xs font-bold rounded-lg"
                  >
                    Save Metric
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 6: EDUCATION APPLICATIONS */}
      {activeTab === 'applications' && (
        <div className="space-y-6">
          <div>
            <h2 className="font-['Manrope'] font-bold text-xl text-[#17324D]">
              Education Fund Applications Review
            </h2>
            <p className="text-xs text-stone-500">
              Manage student intake requests, evaluate fee needs, and update review statuses.
            </p>
          </div>

          <div className="space-y-4">
            {educationApplications.map((app) => (
              <div
                key={app.id}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <div>
                    <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                      {app.studentName} ({app.gender}, DOB: {app.dateOfBirth})
                    </h3>
                    <p className="text-xs text-stone-500 font-mono">
                      Tracking Ref: <strong>{app.applicationNumber}</strong> · Submitted: {app.submissionDate}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-stone-500 font-semibold">Status:</span>
                    <select
                      value={app.status}
                      onChange={(e) => updateApplicationStatus(app.id, e.target.value as any)}
                      className="px-2.5 py-1 text-xs border border-stone-300 rounded-lg bg-white font-semibold text-[#17324D]"
                    >
                      <option value="Pending Review">Pending Review</option>
                      <option value="Documents Under Verification">Under Verification</option>
                      <option value="Approved">Approved</option>
                      <option value="Waitlisted">Waitlisted</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600">
                  <div>
                    <span className="font-bold text-stone-800">School & Level:</span>
                    <p>{app.schoolName} ({app.currentLevel})</p>
                  </div>
                  <div>
                    <span className="font-bold text-stone-800">Guardian Contact:</span>
                    <p>{app.guardianName} ({app.guardianPhone})</p>
                  </div>
                  <div>
                    <span className="font-bold text-stone-800">Estimated Need:</span>
                    <p className="font-mono text-emerald-700 font-bold">
                      UGX {app.annualFeeNeedUGX.toLocaleString()} / year
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-700">
                  <strong>Statement of Need:</strong> {app.reasonForApplication}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 7: ENQUIRIES */}
      {activeTab === 'enquiries' && (
        <div className="space-y-6">
          <div>
            <h2 className="font-['Manrope'] font-bold text-xl text-[#17324D]">
              Incoming Enquiries & Partnership Requests
            </h2>
            <p className="text-xs text-stone-500">
              Messages received via contact forms, program deep-dives, and partnership intake.
            </p>
          </div>

          <div className="space-y-4">
            {enquiries.map((enq) => (
              <div
                key={enq.id}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-['Manrope'] font-bold text-base text-[#17324D]">
                        {enq.fullName}
                      </h3>
                      {enq.organization && (
                        <span className="text-xs text-stone-500">({enq.organization})</span>
                      )}
                    </div>
                    <p className="text-xs text-stone-500">
                      {enq.email} · {enq.phone} · Date: {enq.date}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={enq.status}
                      onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                      className="px-2.5 py-1 text-xs border border-stone-300 rounded-lg bg-white font-semibold text-[#17324D]"
                    >
                      <option value="new">New</option>
                      <option value="in-progress">In Progress</option>
                      <option value="responded">Responded</option>
                    </select>
                  </div>
                </div>

                <div className="text-xs text-stone-700 leading-relaxed">
                  <p className="font-semibold text-[#2459A9] mb-1">Subject: {enq.programInterest}</p>
                  <p>{enq.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 8: CONTACT & BANKING */}
      {activeTab === 'contacts' && (
        <div className="bg-white p-8 rounded-3xl border border-stone-200 space-y-6 max-w-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-['Manrope'] font-bold text-xl text-[#17324D]">
                Approved Contact & Donation Configuration
              </h2>
              <p className="text-xs text-stone-500">
                Official details displayed across website headers, footers, and donation modals.
              </p>
            </div>

            {contactSavedAlert && (
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Saved</span>
              </span>
            )}
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-stone-700 mb-1">Postal Address</label>
              <input
                type="text"
                value={tempContact.postalAddress}
                onChange={(e) => setTempContact({ ...tempContact, postalAddress: e.target.value })}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Primary Email</label>
                <input
                  type="email"
                  value={tempContact.emails[0]}
                  onChange={(e) => {
                    const next = [...tempContact.emails];
                    next[0] = e.target.value;
                    setTempContact({ ...tempContact, emails: next });
                  }}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Administrative Email</label>
                <input
                  type="email"
                  value={tempContact.emails[1]}
                  onChange={(e) => {
                    const next = [...tempContact.emails];
                    next[1] = e.target.value;
                    setTempContact({ ...tempContact, emails: next });
                  }}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Bank Name</label>
              <input
                type="text"
                value={tempContact.bankName}
                onChange={(e) => setTempContact({ ...tempContact, bankName: e.target.value })}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Bank Account Title</label>
                <input
                  type="text"
                  value={tempContact.bankAccountTitle}
                  onChange={(e) => setTempContact({ ...tempContact, bankAccountTitle: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">Account Number / SWIFT</label>
                <input
                  type="text"
                  value={tempContact.bankAccountNumber}
                  onChange={(e) => setTempContact({ ...tempContact, bankAccountNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-stone-700 mb-1">MTN Uganda Mobile Money</label>
                <input
                  type="text"
                  value={tempContact.mobileMoneyMTN}
                  onChange={(e) => setTempContact({ ...tempContact, mobileMoneyMTN: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">Airtel Uganda Mobile Money</label>
                <input
                  type="text"
                  value={tempContact.mobileMoneyAirtel}
                  onChange={(e) => setTempContact({ ...tempContact, mobileMoneyAirtel: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg"
                />
              </div>
            </div>

            <button
              onClick={() => {
                updateContactInfo(tempContact);
                setContactSavedAlert(true);
                setTimeout(() => setContactSavedAlert(false), 2500);
              }}
              className="px-6 py-2.5 bg-[#17324D] hover:bg-[#2459A9] text-white font-bold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Contact & Donation Instructions</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 9: SUBSCRIBERS */}
      {activeTab === 'subscribers' && (
        <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-4 max-w-xl">
          <h2 className="font-['Manrope'] font-bold text-xl text-[#17324D]">
            Newsletter & Field Report Subscribers ({subscribers.length})
          </h2>
          <div className="space-y-2">
            {subscribers.map((email, idx) => (
              <div key={idx} className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 text-xs font-mono text-stone-800">
                {email}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
