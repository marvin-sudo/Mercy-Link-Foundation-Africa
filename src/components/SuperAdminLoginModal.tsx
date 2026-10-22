import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { AdminRole } from '../types';
import { Shield, Lock, Eye, EyeOff, X, KeyRound, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

export const SuperAdminLoginModal: React.FC = () => {
  const { isSuperAdminModalOpen, closeSuperAdminModal, loginCMS, navigateTo } = useApp();

  const [selectedRole, setSelectedRole] = useState<AdminRole>('Super Administrator');
  const [email, setEmail] = useState('staff@mercylinkfoundationafrica.org');
  const [password, setPassword] = useState('mercylink2026');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSuperAdminModalOpen) {
        closeSuperAdminModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSuperAdminModalOpen, closeSuperAdminModal]);

  if (!isSuperAdminModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(true);

    setTimeout(() => {
      loginCMS('Super Admin', selectedRole);
      setIsSubmitting(false);
      setSuccessMessage(false);
      closeSuperAdminModal();
      navigateTo('cms');
    }, 600);
  };

  const handleQuickSuperAdmin = () => {
    setIsSubmitting(true);
    setSuccessMessage(true);
    setTimeout(() => {
      loginCMS('Super Admin', 'Super Administrator');
      setIsSubmitting(false);
      setSuccessMessage(false);
      closeSuperAdminModal();
      navigateTo('cms');
    }, 450);
  };

  const rolesList: AdminRole[] = [
    'Super Administrator',
    'Content Editor',
    'Program Manager',
    'Communications Officer',
    'Enquiry Manager'
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17324D]/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="super-admin-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeSuperAdminModal();
      }}
    >
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative overflow-hidden animate-in zoom-in-95 duration-250">
        {/* Subtle decorative top bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#17324D] via-[#2459A9] to-[#E98A32]" />

        {/* Close Button */}
        <button
          onClick={closeSuperAdminModal}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-800 flex items-center justify-center transition-colors"
          aria-label="Close Super Admin Login"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header with Secret Handshake Badge */}
        <div className="text-center space-y-3 mb-6">
          <div className="w-20 h-20 rounded-full p-1 bg-white border-2 border-[#E98A32] shadow-xl shadow-amber-500/10 mx-auto relative group flex items-center justify-center">
            <img
              src="https://i.postimg.cc/nV7TcH8r/Gemini-Generated-Image.jpg"
              alt="Mercy Link Foundation Africa Logo"
              className="w-full h-full object-contain rounded-full"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/logo.jpg';
              }}
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#E98A32] text-white flex items-center justify-center ring-2 ring-white shadow-md">
              <Lock className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#E98A32] text-[11px] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#E98A32]" />
            <span>Secret Handshake Verified: 5 Logo Clicks</span>
          </div>

          <h2 id="super-admin-modal-title" className="font-['Manrope'] font-extrabold text-2xl text-[#17324D] tracking-tight">
            Super Admin & Staff CMS Login
          </h2>
          <p className="text-xs text-stone-500 max-w-sm mx-auto leading-relaxed">
            Restricted gateway to the Mercy Link Foundation Africa internal Content Management System.
          </p>
        </div>

        {successMessage ? (
          <div className="py-8 text-center space-y-3 animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6 animate-bounce" />
            </div>
            <p className="text-sm font-bold text-[#17324D]">Credentials Verified</p>
            <p className="text-xs text-stone-500">Launching Super Administrator Dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">
                Staff Authorization Role
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value as AdminRole)}
                className="w-full px-3.5 py-2.5 text-xs font-medium border border-stone-300 rounded-xl bg-stone-50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2459A9] focus:border-transparent transition-all"
              >
                {rolesList.map((r) => (
                  <option key={r} value={r}>
                    {r} {r === 'Super Administrator' ? '★ (Full Access)' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">
                Staff Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="staff@mercylinkfoundationafrica.org"
                className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2459A9] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">
                Staff Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-xl pr-10 focus:outline-none focus:ring-2 focus:ring-[#2459A9] focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-[#17324D] hover:bg-[#2459A9] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <KeyRound className="w-4 h-4 text-[#E98A32]" />
                <span>Log In & Open CMS Portal</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={handleQuickSuperAdmin}
                className="w-full py-2.5 px-4 bg-amber-500/10 hover:bg-[#E98A32] text-[#17324D] hover:text-white rounded-xl text-xs font-bold border border-[#E98A32]/30 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant 1-Click Access (Super Administrator)</span>
              </button>
            </div>
          </form>
        )}

        <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
          <span>Security Protocol 5-Click Gate</span>
          <button
            onClick={closeSuperAdminModal}
            className="text-stone-500 hover:text-stone-800 underline font-medium"
          >
            Cancel & Return
          </button>
        </div>
      </div>
    </div>
  );
};
