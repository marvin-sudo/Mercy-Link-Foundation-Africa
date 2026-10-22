import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Heart, ShieldCheck, Building2, Smartphone, CreditCard, Mail, CheckCircle2, Copy, Check } from 'lucide-react';

export const DonationModal: React.FC = () => {
  const { isDonationModalOpen, closeDonationModal, activeDonationDesignation, addDonation, contactInfo } = useApp();

  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [currency, setCurrency] = useState<'USD' | 'UGX' | 'GBP' | 'EUR'>('USD');
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [designation, setDesignation] = useState<string>(activeDonationDesignation || 'General Ministry & Operational Fund');
  const [paymentMethod, setPaymentMethod] = useState<'bank_wire' | 'mobile_money' | 'card_simulation'>('card_simulation');

  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorNotes, setDonorNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copiedBank, setCopiedBank] = useState(false);

  if (!isDonationModalOpen) return null;

  const presetAmounts: Record<'USD' | 'UGX' | 'GBP' | 'EUR', number[]> = {
    USD: [25, 50, 100, 250, 500],
    UGX: [50000, 100000, 250000, 500000, 1000000],
    GBP: [20, 40, 80, 200, 400],
    EUR: [25, 50, 100, 250, 500],
  };

  const currentPresets = presetAmounts[currency];

  const handlePresetSelect = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    const parsed = parseFloat(val);
    if (!isNaN(parsed) && parsed > 0) {
      setAmount(parsed);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorEmail) return;

    setIsSubmitting(true);
    try {
      const ref = await addDonation({
        donorName,
        email: donorEmail,
        amount: customAmount ? parseFloat(customAmount) : amount,
        currency,
        frequency,
        programDesignation: designation,
        paymentMethod
      });
      setSubmittedRef(ref);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyBankDetails = () => {
    const text = `Bank: ${contactInfo.bankName}\nAccount Name: ${contactInfo.bankAccountTitle}\nAccount: ${contactInfo.bankAccountNumber}\nSWIFT: ${contactInfo.bankSwift}`;
    navigator.clipboard?.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const handleClose = () => {
    setSubmittedRef(null);
    closeDonationModal();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#17324D] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E98A32] flex items-center justify-center text-white">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className="font-['Manrope'] font-bold text-lg text-white">
                Support Mercy Link Foundation Africa
              </h3>
              <p className="text-xs text-white/70">
                Transforming Communities – Creating a Legacy of Peace
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedRef ? (
          /* Confirmation View */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="font-['Manrope'] font-bold text-2xl text-[#17324D]">
              Thank You for Your Faithful Support!
            </h4>

            <p className="text-sm text-stone-600 max-w-md mx-auto">
              Your gift of{' '}
              <strong className="text-stone-900 font-semibold">
                {currency} {amount.toLocaleString()}
              </strong>{' '}
              designated for <em>{designation}</em> has been registered with reference code:
            </p>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 max-w-xs mx-auto">
              <span className="text-xs font-mono font-bold text-[#17324D] tracking-wider">
                {submittedRef}
              </span>
            </div>

            <p className="text-xs text-stone-500 max-w-md mx-auto">
              A stewardship receipt and confirmation email has been logged for{' '}
              <span className="font-semibold">{donorEmail}</span>. Our administrative office in Kampala will verify the
              contribution according to Ugandan NGO governance standards.
            </p>

            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-[#17324D] text-white rounded-lg text-xs font-bold hover:bg-[#2459A9] transition-colors"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Frequency & Currency Segmented Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Frequency */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Frequency
                </label>
                <div className="flex bg-stone-100 p-1 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      frequency === 'one-time'
                        ? 'bg-white text-[#17324D] shadow-sm'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    One-Time Gift
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      frequency === 'monthly'
                        ? 'bg-white text-[#17324D] shadow-sm'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Monthly Partner
                  </button>
                </div>
              </div>

              {/* Currency */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Currency
                </label>
                <div className="flex bg-stone-100 p-1 rounded-lg">
                  {(['USD', 'UGX', 'GBP', 'EUR'] as const).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => {
                        setCurrency(curr);
                        setAmount(presetAmounts[curr][1]);
                        setCustomAmount('');
                      }}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                        currency === curr
                          ? 'bg-[#17324D] text-white shadow-sm'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Amount Selection */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Select Amount ({currency})
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                {currentPresets.map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handlePresetSelect(val)}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all ${
                      amount === val && !customAmount
                        ? 'bg-[#17324D] text-white border-[#17324D] shadow-sm'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    {val.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs font-bold text-stone-400">
                  {currency}
                </span>
                <input
                  type="number"
                  min="1"
                  step="any"
                  placeholder="Or enter custom amount..."
                  value={customAmount}
                  onChange={handleCustomChange}
                  className="w-full pl-14 pr-4 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32] focus:border-[#E98A32]"
                />
              </div>
            </div>

            {/* Ministry Designation */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Designate Your Gift
              </label>
              <select
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
              >
                <option value="General Ministry & Operational Fund">Where Most Needed (General Ministry Fund)</option>
                <option value="Church Planter Training">Church Planter Training (5-Module Modular Training)</option>
                <option value="Children's Ministry Program">Children's Ministry & "Raising Hope" Curriculum</option>
                <option value="Disability Ministry">Disability Ministry (Kampala School of Handicapped & Caregivers)</option>
                <option value="Prison Ministry">Prison Ministry (Inmate Discipleship & Welfare)</option>
                <option value="Family Foundations">Family Foundations (Parenting, Men & Mentorship)</option>
                <option value="Education Fund">Mercy Link Education Fund (Vulnerable Students)</option>
                <option value="The Better Life Program">The Better Life Program (Vocational & Community Welfare)</option>
              </select>
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Giving Method
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card_simulation')}
                  className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                    paymentMethod === 'card_simulation'
                      ? 'border-[#2459A9] bg-[#2459A9]/5 ring-1 ring-[#2459A9]'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#2459A9] mb-1.5" />
                  <span className="text-xs font-bold text-stone-800">Online Card</span>
                  <span className="text-[11px] text-stone-500">Secure Direct Processing</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank_wire')}
                  className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                    paymentMethod === 'bank_wire'
                      ? 'border-[#2459A9] bg-[#2459A9]/5 ring-1 ring-[#2459A9]'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-[#17324D] mb-1.5" />
                  <span className="text-xs font-bold text-stone-800">Bank Wire</span>
                  <span className="text-[11px] text-stone-500">Orient / I&M Bank Uganda</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('mobile_money')}
                  className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                    paymentMethod === 'mobile_money'
                      ? 'border-[#2459A9] bg-[#2459A9]/5 ring-1 ring-[#2459A9]'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-[#E98A32] mb-1.5" />
                  <span className="text-xs font-bold text-stone-800">Mobile Money</span>
                  <span className="text-[11px] text-stone-500">MTN & Airtel Uganda</span>
                </button>
              </div>
            </div>

            {/* Method Details Box */}
            {paymentMethod === 'bank_wire' && (
              <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xl space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#17324D]">Official Banking Instructions (Uganda)</span>
                  <button
                    type="button"
                    onClick={copyBankDetails}
                    className="flex items-center gap-1 text-[11px] font-semibold text-[#2459A9] hover:underline"
                  >
                    {copiedBank ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedBank ? 'Copied' : 'Copy Details'}</span>
                  </button>
                </div>
                <div className="font-mono text-[11px] text-stone-700 space-y-0.5">
                  <p>Bank: <strong className="text-stone-900">{contactInfo.bankName}</strong></p>
                  <p>Account Name: <strong className="text-stone-900">{contactInfo.bankAccountTitle}</strong></p>
                  <p>Account No: <strong className="text-stone-900">{contactInfo.bankAccountNumber}</strong></p>
                  <p>SWIFT: <strong className="text-stone-900">{contactInfo.bankSwift}</strong></p>
                  <p>Branch: Kampala Main Branch, Uganda</p>
                </div>
                <p className="text-[11px] text-stone-500 italic">
                  Note: Submit your details below so our treasury office can issue your acknowledgment receipt upon transfer arrival.
                </p>
              </div>
            )}

            {paymentMethod === 'mobile_money' && (
              <div className="p-3.5 bg-amber-50/60 border border-amber-200/80 rounded-xl space-y-2 text-xs">
                <span className="font-bold text-[#17324D]">Verified Mobile Money Lines (Uganda)</span>
                <div className="text-[11px] text-stone-700 space-y-1">
                  <p className="flex items-center justify-between">
                    <span>MTN Uganda:</span>
                    <strong className="font-mono text-stone-900">{contactInfo.mobileMoneyMTN}</strong>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Airtel Uganda:</span>
                    <strong className="font-mono text-stone-900">{contactInfo.mobileMoneyAirtel}</strong>
                  </p>
                </div>
                <p className="text-[11px] text-stone-500">
                  Please use your full name as the transaction reference. Fill out the form below to receive your confirmation receipt.
                </p>
              </div>
            )}

            {/* Donor Information */}
            <div className="space-y-3 pt-1 border-t border-stone-200">
              <span className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                Donor Information
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name / Church / Organization *"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address (for receipt) *"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp Number (optional)"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  className="px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                />
                <input
                  type="text"
                  placeholder="Prayer request or dedication note (optional)"
                  value={donorNotes}
                  onChange={(e) => setDonorNotes(e.target.value)}
                  className="px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
                />
              </div>
            </div>

            {/* Trust disclaimer */}
            <div className="flex items-start gap-2 text-[11px] text-stone-500 bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
              <ShieldCheck className="w-4 h-4 text-[#2459A9] shrink-0 mt-0.5" />
              <span>
                Mercy Link Foundation Africa is an officially registered Ugandan NGO. All funds are held in audited
                accounts and allocated in strict accordance with your program designation.
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-[#E98A32] hover:bg-[#d47926] disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>
                  {isSubmitting
                    ? 'Recording Gift...'
                    : `Confirm Gift of ${currency} ${amount.toLocaleString()}`}
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
