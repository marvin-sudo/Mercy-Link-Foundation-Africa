import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  AdminRole,
  ContactInfo,
  DonationRecord,
  EducationApplication,
  EnquirySubmission,
  EventItem,
  ImpactMetric,
  PageId,
  Program,
  ProgramId,
  Report,
  UserSession
} from '../types';
import {
  INITIAL_CONTACT_INFO,
  INITIAL_EDUCATION_APPLICATIONS,
  INITIAL_EVENTS,
  INITIAL_IMPACT_METRICS,
  INITIAL_PROGRAMS,
  INITIAL_REPORTS
} from '../data/initialData';

interface AppContextType {
  currentPage: PageId;
  selectedProgramId: ProgramId | null;
  selectedReportSlug: string | null;
  programs: Program[];
  reports: Report[];
  events: EventItem[];
  impactMetrics: ImpactMetric[];
  contactInfo: ContactInfo;
  enquiries: EnquirySubmission[];
  educationApplications: EducationApplication[];
  donationRecords: DonationRecord[];
  subscribers: string[];
  currentUser: UserSession;
  isDonationModalOpen: boolean;
  isVideoModalOpen: boolean;
  isSuperAdminModalOpen: boolean;
  activeDonationDesignation?: string;
  navigateTo: (page: PageId, programId?: ProgramId, reportSlug?: string) => void;
  openDonationModal: (designation?: string) => void;
  closeDonationModal: () => void;
  openVideoModal: () => void;
  closeVideoModal: () => void;
  openSuperAdminModal: () => void;
  closeSuperAdminModal: () => void;
  addEnquiry: (data: Omit<EnquirySubmission, 'id' | 'date' | 'status'>) => Promise<string>;
  addEducationApplication: (data: Omit<EducationApplication, 'id' | 'applicationNumber' | 'submissionDate' | 'status'>) => Promise<string>;
  addDonation: (data: Omit<DonationRecord, 'id' | 'date' | 'referenceCode' | 'status'>) => Promise<string>;
  subscribeNewsletter: (email: string) => boolean;
  // CMS Actions
  updateProgram: (updated: Program) => void;
  addReport: (report: Omit<Report, 'id'>) => void;
  updateReport: (updated: Report) => void;
  deleteReport: (id: string) => void;
  addEvent: (item: Omit<EventItem, 'id'>) => void;
  updateEvent: (updated: EventItem) => void;
  updateImpactMetric: (updated: ImpactMetric) => void;
  updateContactInfo: (updated: ContactInfo) => void;
  updateEnquiryStatus: (id: string, status: EnquirySubmission['status']) => void;
  updateApplicationStatus: (id: string, status: EducationApplication['status']) => void;
  loginCMS: (name: string, role: AdminRole) => void;
  logoutCMS: () => void;
  switchRole: (role: AdminRole) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_PREFIX = 'mercylink_africa_v1_';

function getStoredItem<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PREFIX + key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function setStoredItem<T>(key: string, value: T) {
  try {
    localStorage.setItem(STORAGE_KEY_PREFIX + key, JSON.stringify(value));
  } catch (e) {
    console.error('Failed saving to localStorage', e);
  }
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProgramId, setSelectedProgramId] = useState<ProgramId | null>(null);
  const [selectedReportSlug, setSelectedReportSlug] = useState<string | null>(null);

  const [programs, setPrograms] = useState<Program[]>(() =>
    getStoredItem<Program[]>('programs', INITIAL_PROGRAMS)
  );
  const [reports, setReports] = useState<Report[]>(() => {
    const stored = getStoredItem<Report[]>('reports', INITIAL_REPORTS);
    if (!stored || stored.length < INITIAL_REPORTS.length || !stored[0]?.executiveSummary) {
      return INITIAL_REPORTS;
    }
    return stored;
  });
  const [events, setEvents] = useState<EventItem[]>(() =>
    getStoredItem<EventItem[]>('events', INITIAL_EVENTS)
  );
  const [impactMetrics, setImpactMetrics] = useState<ImpactMetric[]>(() =>
    getStoredItem<ImpactMetric[]>('impact_metrics', INITIAL_IMPACT_METRICS)
  );
  const [contactInfo, setContactInfo] = useState<ContactInfo>(() =>
    getStoredItem<ContactInfo>('contact_info', INITIAL_CONTACT_INFO)
  );
  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>(() =>
    getStoredItem<EnquirySubmission[]>('enquiries', [
      {
        id: 'enq-01',
        date: '2026-10-18',
        type: 'partnership',
        fullName: 'Pastor David Mukasa',
        email: 'mukasa.ministries@gmail.com',
        phone: '+256 701 445 882',
        organization: 'Grace Community Fellowship Jinja',
        programInterest: 'Church Planter Training',
        message: 'We have 4 prospective young pastors in Busoga sub-region eager to join the next church planter training session.',
        status: 'in-progress'
      },
      {
        id: 'enq-02',
        date: '2026-10-20',
        type: 'volunteer',
        fullName: 'Dr. Rebecca Nakato',
        email: 'r.nakato@healthinitiative.org',
        phone: '+256 772 901 345',
        organization: 'Community Health Volunteers',
        programInterest: 'Disability Ministry',
        message: 'Interested in partnering with physiotherapy assessments during the upcoming Community Disability Outreach Day.',
        status: 'new'
      }
    ])
  );
  const [educationApplications, setEducationApplications] = useState<EducationApplication[]>(() =>
    getStoredItem<EducationApplication[]>('edu_applications', INITIAL_EDUCATION_APPLICATIONS)
  );
  const [donationRecords, setDonationRecords] = useState<DonationRecord[]>(() =>
    getStoredItem<DonationRecord[]>('donations', [
      {
        id: 'don-101',
        date: '2026-10-14',
        donorName: 'Covenant Partner Fellowship',
        email: 'missions@covenantpartner.org',
        amount: 500,
        currency: 'USD',
        frequency: 'monthly',
        programDesignation: "Children's Ministry Program",
        paymentMethod: 'bank_wire',
        referenceCode: 'ML-WIRE-88912',
        status: 'confirmed'
      }
    ])
  );
  const [subscribers, setSubscribers] = useState<string[]>(() =>
    getStoredItem<string[]>('subscribers', ['partner@africaoutreach.net', 'volunteer@mercylink.info'])
  );

  const [currentUser, setCurrentUser] = useState<UserSession>(() =>
    getStoredItem<UserSession>('user_session', {
      isAuthenticated: false,
      role: 'Content Editor',
      userName: 'Ministry Staff',
      userEmail: 'staff@mercylinkfoundationafrica.org'
    })
  );

  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [activeDonationDesignation, setActiveDonationDesignation] = useState<string | undefined>();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSuperAdminModalOpen, setIsSuperAdminModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => setStoredItem('programs', programs), [programs]);
  useEffect(() => setStoredItem('reports', reports), [reports]);
  useEffect(() => setStoredItem('events', events), [events]);
  useEffect(() => setStoredItem('impact_metrics', impactMetrics), [impactMetrics]);
  useEffect(() => setStoredItem('contact_info', contactInfo), [contactInfo]);
  useEffect(() => setStoredItem('enquiries', enquiries), [enquiries]);
  useEffect(() => setStoredItem('edu_applications', educationApplications), [educationApplications]);
  useEffect(() => setStoredItem('donations', donationRecords), [donationRecords]);
  useEffect(() => setStoredItem('subscribers', subscribers), [subscribers]);
  useEffect(() => setStoredItem('user_session', currentUser), [currentUser]);

  const navigateTo = (page: PageId, programId?: ProgramId, reportSlug?: string) => {
    setCurrentPage(page);
    if (programId !== undefined) {
      setSelectedProgramId(programId);
    }
    if (reportSlug !== undefined) {
      setSelectedReportSlug(reportSlug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDonationModal = (designation?: string) => {
    setActiveDonationDesignation(designation);
    setIsDonationModalOpen(true);
  };

  const closeDonationModal = () => {
    setIsDonationModalOpen(false);
  };

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  const openSuperAdminModal = () => setIsSuperAdminModalOpen(true);
  const closeSuperAdminModal = () => setIsSuperAdminModalOpen(false);

  const addEnquiry = async (data: Omit<EnquirySubmission, 'id' | 'date' | 'status'>): Promise<string> => {
    const id = `enq-${Date.now().toString().slice(-6)}`;
    const newSubmission: EnquirySubmission = {
      ...data,
      id,
      date: new Date().toISOString().split('T')[0],
      status: 'new'
    };
    setEnquiries((prev) => [newSubmission, ...prev]);
    return id;
  };

  const addEducationApplication = async (
    data: Omit<EducationApplication, 'id' | 'applicationNumber' | 'submissionDate' | 'status'>
  ): Promise<string> => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const applicationNumber = `ML-EDU-2026-${randomSuffix}`;
    const newApp: EducationApplication = {
      ...data,
      id: `app-${Date.now()}`,
      applicationNumber,
      submissionDate: new Date().toISOString().split('T')[0],
      status: 'Pending Review'
    };
    setEducationApplications((prev) => [newApp, ...prev]);
    return applicationNumber;
  };

  const addDonation = async (
    data: Omit<DonationRecord, 'id' | 'date' | 'referenceCode' | 'status'>
  ): Promise<string> => {
    const refCode = `ML-${data.currency}-${Math.floor(100000 + Math.random() * 900000)}`;
    const newRecord: DonationRecord = {
      ...data,
      id: `don-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      referenceCode: refCode,
      status: data.paymentMethod === 'card_simulation' ? 'confirmed' : 'pending_verification'
    };
    setDonationRecords((prev) => [newRecord, ...prev]);
    return refCode;
  };

  const subscribeNewsletter = (email: string): boolean => {
    if (!email || !email.includes('@')) return false;
    if (!subscribers.includes(email.toLowerCase())) {
      setSubscribers((prev) => [...prev, email.toLowerCase()]);
    }
    return true;
  };

  // CMS functions
  const updateProgram = (updated: Program) => {
    setPrograms((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const addReport = (report: Omit<Report, 'id'>) => {
    const newReport: Report = {
      ...report,
      id: `rep-${Date.now().toString().slice(-6)}`
    };
    setReports((prev) => [newReport, ...prev]);
  };

  const updateReport = (updated: Report) => {
    setReports((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
  };

  const deleteReport = (id: string) => {
    setReports((prev) => prev.filter((r) => r.id !== id));
  };

  const addEvent = (item: Omit<EventItem, 'id'>) => {
    const newEvent: EventItem = {
      ...item,
      id: `ev-${Date.now().toString().slice(-6)}`
    };
    setEvents((prev) => [newEvent, ...prev]);
  };

  const updateEvent = (updated: EventItem) => {
    setEvents((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));
  };

  const updateImpactMetric = (updated: ImpactMetric) => {
    setImpactMetrics((prev) => prev.map((m) => (m.id === updated.id ? updated : m)));
  };

  const updateContactInfo = (updated: ContactInfo) => {
    setContactInfo(updated);
  };

  const updateEnquiryStatus = (id: string, status: EnquirySubmission['status']) => {
    setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, status } : e)));
  };

  const updateApplicationStatus = (id: string, status: EducationApplication['status']) => {
    setEducationApplications((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
  };

  const loginCMS = (name: string, role: AdminRole) => {
    setCurrentUser({
      isAuthenticated: true,
      role,
      userName: name || 'Authorized Staff',
      userEmail: 'staff@mercylinkfoundationafrica.org'
    });
  };

  const logoutCMS = () => {
    setCurrentUser((prev) => ({
      ...prev,
      isAuthenticated: false
    }));
  };

  const switchRole = (role: AdminRole) => {
    setCurrentUser((prev) => ({
      ...prev,
      role
    }));
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        selectedProgramId,
        selectedReportSlug,
        programs,
        reports,
        events,
        impactMetrics,
        contactInfo,
        enquiries,
        educationApplications,
        donationRecords,
        subscribers,
        currentUser,
        isDonationModalOpen,
        isVideoModalOpen,
        isSuperAdminModalOpen,
        activeDonationDesignation,
        navigateTo,
        openDonationModal,
        closeDonationModal,
        openVideoModal,
        closeVideoModal,
        openSuperAdminModal,
        closeSuperAdminModal,
        addEnquiry,
        addEducationApplication,
        addDonation,
        subscribeNewsletter,
        updateProgram,
        addReport,
        updateReport,
        deleteReport,
        addEvent,
        updateEvent,
        updateImpactMetric,
        updateContactInfo,
        updateEnquiryStatus,
        updateApplicationStatus,
        loginCMS,
        logoutCMS,
        switchRole
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
