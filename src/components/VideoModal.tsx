import React from 'react';
import { useApp } from '../context/AppContext';
import { X, ExternalLink, Play, Heart } from 'lucide-react';

export const VideoModal: React.FC = () => {
  const { isVideoModalOpen, closeVideoModal, navigateTo, openDonationModal } = useApp();

  if (!isVideoModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#17324D] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#E98A32] text-white flex items-center justify-center">
              <Play className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h3 className="font-['Manrope'] font-bold text-base sm:text-lg text-white">
                The Disability Ministry by Mercy Link Foundation Africa
              </h3>
              <p className="text-[11px] text-white/70">
                Official Documented Ministry Outreach · Kampala, Uganda
              </p>
            </div>
          </div>

          <button
            onClick={closeVideoModal}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/videoseries?list=PLmX6_u7j6m6k_v9"
            title="The Disability Ministry by Mercy Link Foundation Africa"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Details & Context */}
        <div className="p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-200">
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <span className="font-semibold text-[#17324D]">Program: Disability Ministry</span>
              <span aria-hidden="true">·</span>
              <span>Filmed on Location in Uganda</span>
              <span aria-hidden="true">·</span>
              <span>Kampala School of the Handicapped</span>
            </div>

            <a
              href="https://mercylinkfoundationafrica.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#2459A9] hover:underline flex items-center gap-1"
            >
              <span>Visit Official Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed">
            This documentary profile highlights Mercy Link Foundation Africa's work with children with physical and
            developmental disabilities in Uganda. It demonstrates our collaborative partnership with dedicated educators
            at the Kampala School of the Handicapped, empowering children with specialized learning aids, emotional dignity,
            and caregiver support circles.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => {
                closeVideoModal();
                navigateTo('program-detail', 'disability-ministry');
              }}
              className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold transition-colors"
            >
              Read Full Disability Ministry Program →
            </button>

            <button
              onClick={() => {
                closeVideoModal();
                openDonationModal('Disability Ministry');
              }}
              className="px-4 py-2 bg-[#E98A32] hover:bg-[#d47926] text-white rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Support This Ministry</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
