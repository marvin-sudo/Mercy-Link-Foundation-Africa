export type PageId =
  | 'home'
  | 'about'
  | 'ministry-profile'
  | 'about-founder'
  | 'vision-mission-values'
  | 'programs'
  | 'program-detail'
  | 'reports'
  | 'children-services'
  | 'education-fund'
  | 'events'
  | 'get-involved'
  | 'contact'
  | 'cms';

export type ProgramId =
  | 'disability-ministry'
  | 'prison-ministry'
  | 'family-foundations'
  | 'church-planters'
  | 'childrens-ministry'
  | 'youth-empowerment'
  | 'better-life-program';

export interface Program {
  id: ProgramId;
  name: string;
  tagline: string;
  category: string;
  imageUrl: string;
  overview: string;
  needAddressed: string;
  objectives: string[];
  keyActivities: string[];
  intendedParticipants: string;
  verifiedOutcomes: string[];
  reportingPeriod: string;
  isPublished: boolean;
  featuredInHome: boolean;
}

export interface Report {
  id: string;
  title: string;
  slug: string;
  publicationDate: string;
  reportingPeriod: string;
  category:
    | "Children's Ministry"
    | "School Outreach"
    | "Prison Ministry"
    | "Disability Ministry"
    | "Leadership Training"
    | "Community Outreach"
    | "Youth Empowerment"
    | "Education & Family Support"
    | "Organizational News"
    | "Annual Accountability";
  location: string;
  author: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  verifiedMetrics?: { label: string; value: string }[];
  downloadablePdfName?: string;
  fileSize?: string;
  pagesCount?: number;
  executiveSummary?: string;
  keyFindings?: string[];
  recommendations?: string[];
  witnessTestimonial?: { quote: string; person: string; role: string };
  isPublished: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  isVirtual: boolean;
  description: string;
  category: string;
  programId?: ProgramId;
  status: 'upcoming' | 'completed' | 'cancelled';
  contactPerson?: string;
  registrationOpen: boolean;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  unit?: string;
  description: string;
  source: string;
  reportingPeriod: string;
  lastUpdated: string;
  isVerified: boolean;
  isVisible: boolean;
}

export interface ContactInfo {
  postalAddress: string;
  emails: string[];
  phones: string[];
  physicalLocation: string;
  country: string;
  regions: string;
  bankName: string;
  bankAccountTitle: string;
  bankAccountNumber: string;
  bankSwift: string;
  mobileMoneyMTN: string;
  mobileMoneyAirtel: string;
  lastVerifiedDate: string;
}

export interface EnquirySubmission {
  id: string;
  date: string;
  type: 'general' | 'partnership' | 'volunteer' | 'program' | 'prayer';
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  programInterest?: string;
  message: string;
  status: 'new' | 'in-progress' | 'responded';
}

export interface EducationApplication {
  id: string;
  applicationNumber: string;
  submissionDate: string;
  studentName: string;
  dateOfBirth: string;
  gender: string;
  district: string;
  schoolName: string;
  currentLevel: string;
  guardianName: string;
  guardianPhone: string;
  annualFeeNeedUGX: number;
  reasonForApplication: string;
  status: 'Pending Review' | 'Documents Under Verification' | 'Approved' | 'Waitlisted';
}

export interface DonationRecord {
  id: string;
  date: string;
  donorName: string;
  email: string;
  amount: number;
  currency: 'USD' | 'UGX' | 'GBP' | 'EUR';
  frequency: 'one-time' | 'monthly';
  programDesignation: string;
  paymentMethod: 'bank_wire' | 'mobile_money' | 'card_simulation';
  referenceCode: string;
  status: 'confirmed' | 'pending_verification';
}

export type AdminRole =
  | 'Super Administrator'
  | 'Content Editor'
  | 'Program Manager'
  | 'Communications Officer'
  | 'Enquiry Manager';

export interface UserSession {
  isAuthenticated: boolean;
  role: AdminRole;
  userName: string;
  userEmail: string;
}
