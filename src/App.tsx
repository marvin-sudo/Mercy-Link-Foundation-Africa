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
import { ChildrenMinistryPage } from './pages/ChildrenMinistryPage';
import { ChildrenServicesPage } from './pages/ChildrenServicesPage';
import { EducationFundPage } from './pages/EducationFundPage';
import { ReportsPage } from './pages/ReportsPage';
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
      {(currentPage === 'children-ministry' ||
        currentPage === 'children-services' ||
        currentPage === 'education-fund') && <ChildrenMinistryPage />}
      {currentPage === 'reports' && <ReportsPage />}
      {currentPage === 'get-involved' && <GetInvolvedPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'cms' && <AdminCMS />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#242B33] selection:bg-[#ef5a20]/20 selection:text-[#000a37]">
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
