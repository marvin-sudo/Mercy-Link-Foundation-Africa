import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { VideoModal } from './components/VideoModal';
import { SuperAdminLoginModal } from './components/SuperAdminLoginModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MinistryProfilePage } from './pages/MinistryProfilePage';
import { AboutFounderPage } from './pages/AboutFounderPage';
import { VisionMissionValuesPage } from './pages/VisionMissionValuesPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { ChildrenServicesPage } from './pages/ChildrenServicesPage';
import { EducationFundPage } from './pages/EducationFundPage';
import { ReportsPage } from './pages/ReportsPage';
import { EventsPage } from './pages/EventsPage';
import { GetInvolvedPage } from './pages/GetInvolvedPage';
import { ContactPage } from './pages/ContactPage';
import { AdminCMS } from './pages/AdminCMS';

import { useScrollReveal } from './hooks/useScrollReveal';

const MainContent: React.FC = () => {
  const { currentPage } = useApp();
  // Activate automatic single-trigger scroll reveal system
  useScrollReveal();

  return (
    <main className="min-h-screen">
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'ministry-profile' && <MinistryProfilePage />}
      {currentPage === 'about-founder' && <AboutFounderPage />}
      {currentPage === 'vision-mission-values' && <VisionMissionValuesPage />}
      {currentPage === 'programs' && <ProgramsPage />}
      {currentPage === 'program-detail' && <ProgramDetailPage />}
      {currentPage === 'children-services' && <ChildrenServicesPage />}
      {currentPage === 'education-fund' && <EducationFundPage />}
      {currentPage === 'reports' && <ReportsPage />}
      {currentPage === 'events' && <EventsPage />}
      {currentPage === 'get-involved' && <GetInvolvedPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'cms' && <AdminCMS />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#242B33] selection:bg-[#E98A32]/20 selection:text-[#17324D]">
        <Header />
        <div className="flex-1">
          <MainContent />
        </div>
        <Footer />

        {/* Global Modals */}
        <DonationModal />
        <VideoModal />
        <SuperAdminLoginModal />
      </div>
    </AppProvider>
  );
}
