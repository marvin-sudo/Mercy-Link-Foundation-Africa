import React, { useState, useId } from 'react';
import { useApp } from '../context/AppContext';
import { Report } from '../types';
import {
  Search,
  Filter,
  Calendar,
  MapPin,
  Download,
  FileText,
  ArrowRight,
  X,
  CheckCircle2,
  Share2,
  Printer,
  Eye,
  Grid,
  List,
  Building2,
  Quote,
  Heart,
  FileCheck,
  FileDown,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const ReportsPage: React.FC = () => {
  const { reports, selectedReportSlug, navigateTo, openDonationModal } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [readerFontSize, setReaderFontSize] = useState<'normal' | 'large'>('normal');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [activeReportModal, setActiveReportModal] = useState<Report | null>(() => {
    if (selectedReportSlug) {
      return reports.find((r) => r.slug === selectedReportSlug) || null;
    }
    return null;
  });

  const categories = [
    'All',
    "Children's Ministry",
    'Disability Ministry',
    'Prison Ministry',
    'Leadership Training',
    'Education & Family Support',
    'Youth Empowerment',
    'Annual Accountability'
  ];

  const periods = ['All', '2025', '2024'];

  const filteredReports = reports.filter((r) => {
    if (!r.isPublished) return false;
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesPeriod =
      selectedPeriod === 'All' ||
      r.reportingPeriod.includes(selectedPeriod) ||
      r.publicationDate.includes(selectedPeriod);
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.author && r.author.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesPeriod && matchesSearch;
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleShareReport = async (report: Report) => {
    const url = window.location.href;
    const shareData = {
      title: `${report.title} - Mercy Link Foundation Africa`,
      text: report.excerpt,
      url: url
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(`${report.title} | Mercy Link Foundation Africa Report\n${url}`);
      showToast('Report reference link copied to clipboard!');
    } catch {
      showToast('Link ready to share: ' + url);
    }
  };

  // Direct Formatted Document Download (Word / HTML compatible)
  const handleDownloadDocument = (report: Report) => {
    const filename = report.downloadablePdfName
      ? report.downloadablePdfName.replace('.pdf', '_Report.doc')
      : `${report.slug}_Official_Report.doc`;

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${report.title} - Mercy Link Foundation Africa</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #17324D; padding: 40px; max-width: 800px; margin: auto; }
    .header { border-bottom: 3px double #E98A32; padding-bottom: 20px; margin-bottom: 30px; text-align: center; }
    .org-title { font-size: 24px; font-weight: bold; color: #17324D; text-transform: uppercase; margin: 0; }
    .org-sub { font-size: 13px; color: #E98A32; font-weight: bold; margin-top: 4px; }
    .org-meta { font-size: 11px; color: #666; margin-top: 6px; }
    .report-title { font-size: 20px; font-weight: bold; color: #17324D; margin: 20px 0 10px 0; }
    .meta-box { background: #FAF7F0; border-left: 4px solid #E98A32; padding: 12px 16px; margin-bottom: 20px; font-size: 12px; }
    .metric-table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px; }
    .metric-table th, .metric-table td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; }
    .metric-table th { background: #17324D; color: #fff; }
    .summary-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin: 20px 0; }
    .summary-box h3 { margin-top: 0; color: #17324D; font-size: 15px; }
    .quote-box { font-style: italic; background: #fffbeb; border-left: 4px solid #f59e0b; padding: 12px 16px; margin: 20px 0; }
    .footer { border-top: 1px solid #ddd; margin-top: 40px; padding-top: 20px; font-size: 11px; color: #777; text-align: center; }
  </style>
</head>
<body>
  <div class="header">
    <div class="org-title">Mercy Link Foundation Africa</div>
    <div class="org-sub">Transforming Communities – Creating a Legacy of Peace</div>
    <div class="org-meta">Registered Local NGO in Uganda (2013) | Bulange Mengo, Kampala | mercylink2@gmail.com</div>
  </div>

  <div class="meta-box">
    <strong>OFFICIAL FIELD REPORT & ACCOUNTABILITY RECORD</strong><br/>
    <strong>Category:</strong> ${report.category} | <strong>Reporting Cycle:</strong> ${report.reportingPeriod}<br/>
    <strong>Publication Date:</strong> ${report.publicationDate} | <strong>Location:</strong> ${report.location}<br/>
    <strong>Authoring Division:</strong> ${report.author}
  </div>

  <h1 class="report-title">${report.title}</h1>

  ${report.executiveSummary ? `
  <div class="summary-box">
    <h3>Executive Summary</h3>
    <p>${report.executiveSummary}</p>
  </div>` : ''}

  ${report.verifiedMetrics && report.verifiedMetrics.length > 0 ? `
  <h3>Verified Quantitative Field Metrics</h3>
  <table class="metric-table">
    <thead>
      <tr><th>Indicator / Field Metric</th><th>Verified Achievement</th></tr>
    </thead>
    <tbody>
      ${report.verifiedMetrics.map(m => `<tr><td>${m.label}</td><td><strong>${m.value}</strong></td></tr>`).join('')}
    </tbody>
  </table>` : ''}

  ${report.keyFindings && report.keyFindings.length > 0 ? `
  <h3>Key Strategic Findings</h3>
  <ul>
    ${report.keyFindings.map(k => `<li>${k}</li>`).join('')}
  </ul>` : ''}

  <h3>Full Field Narrative & Program Analysis</h3>
  ${report.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}

  ${report.witnessTestimonial ? `
  <div class="quote-box">
    "${report.witnessTestimonial.quote}"<br/>
    <strong>— ${report.witnessTestimonial.person}</strong> (${report.witnessTestimonial.role})
  </div>` : ''}

  ${report.recommendations && report.recommendations.length > 0 ? `
  <h3>Strategic Recommendations & Future Actions</h3>
  <ol>
    ${report.recommendations.map(r => `<li>${r}</li>`).join('')}
  </ol>` : ''}

  <div class="footer">
    <p>Mercy Link Foundation Africa | P.O. Box 269 Kampala, Uganda | Phone: +(256) 392 003 454</p>
    <p>This report has been published in accordance with institutional stewardship standards. Verified by Program Directorate.</p>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`Downloaded: ${filename}`);
  };

  // Browser Print / Save as PDF handler
  const handlePrintReport = (report: Report) => {
    setActiveReportModal(report);
    setTimeout(() => {
      window.print();
    }, 250);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#17324D] text-white px-5 py-3 rounded-xl shadow-2xl border border-[#E98A32]/40 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3">
          <CheckCircle2 className="w-4 h-4 text-[#E98A32] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Section & Archive Header - Full Width */}
      <section className="reveal-up w-full bg-gradient-to-b from-white via-[#FAF7F0] to-[#FAF7F0] border-b border-stone-200/80 py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-12 xl:px-16 no-print">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#2459A9]">
              <Building2 className="w-3.5 h-3.5 text-[#E98A32]" />
              <span>Institutional Documentation</span>
              <span aria-hidden="true">·</span>
              <span>Audited Field Evidence</span>
              <span aria-hidden="true">·</span>
              <span>Uganda, East Africa</span>
            </div>
            <h1 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17324D] tracking-tight leading-tight">
              Reports & Field Impact Archive
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-['Plus_Jakarta_Sans']">
              Access verified field records, child evangelism audits, disability inclusion outcomes, and annual governance reviews. All reports are formatted for immediate online reading and download.
            </p>
          </div>

        {/* Accountability Snapshot Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 stagger-fast">
          <div className="reveal-up interactive-card p-4 bg-white rounded-2xl border border-stone-200/90 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
              Published Reports
            </span>
            <p className="font-['Playfair_Display'] font-bold text-2xl text-[#17324D] mt-1">
              {reports.filter((r) => r.isPublished).length} Documents
            </p>
            <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">100% Peer-Reviewed</p>
          </div>

          <div className="reveal-up interactive-card p-4 bg-white rounded-2xl border border-stone-200/90 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
              Districts Covered
            </span>
            <p className="font-['Playfair_Display'] font-bold text-2xl text-[#17324D] mt-1">
              70+ Districts
            </p>
            <p className="text-[11px] text-[#2459A9] font-semibold mt-0.5">Central, North, East, West</p>
          </div>

          <div className="reveal-up interactive-card p-4 bg-white rounded-2xl border border-stone-200/90 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
              Annual Beneficiaries
            </span>
            <p className="font-['Playfair_Display'] font-bold text-2xl text-[#17324D] mt-1">
              48,000+
            </p>
            <p className="text-[11px] text-[#E98A32] font-semibold mt-0.5">Children, Parents, Leaders</p>
          </div>

          <div className="reveal-up interactive-card p-4 bg-white rounded-2xl border border-stone-200/90 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
              Governance Status
            </span>
            <p className="font-['Playfair_Display'] font-bold text-2xl text-[#17324D] mt-1">
              Reg. 2013
            </p>
            <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">Uganda NGO Board</p>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-xs space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search reports by program, district, keyword, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs border border-stone-300 rounded-xl bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E98A32]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Cycle / Period Dropdown & View Mode Switcher */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 text-xs text-stone-600">
                <Calendar className="w-3.5 h-3.5 text-[#E98A32]" />
                <span className="font-bold text-[11px] uppercase tracking-wider">Period:</span>
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-2.5 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E98A32] font-semibold text-[#17324D]"
                >
                  {periods.map((p) => (
                    <option key={p} value={p}>
                      {p === 'All' ? 'All Reporting Cycles' : `Cycle ${p}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center border border-stone-200 rounded-xl p-0.5 bg-stone-50">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-[#17324D] shadow-xs'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                  title="Grid Cards View"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                    viewMode === 'table'
                      ? 'bg-white text-[#17324D] shadow-xs'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                  title="Table Dossier View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-t border-stone-100 pt-3">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? reports.filter((r) => r.isPublished).length
                  : reports.filter((r) => r.isPublished && r.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-[#17324D] text-white shadow-xs'
                      : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>

      {/* Reports Display: Grid Mode vs Table Mode */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 no-print">
        {filteredReports.length === 0 ? (
          <div className="p-16 text-center bg-white rounded-3xl border border-stone-200 space-y-4">
            <FileText className="w-12 h-12 text-stone-400 mx-auto" />
            <h3 className="font-['Manrope'] font-bold text-xl text-stone-800">
              No Corresponding Reports Located
            </h3>
            <p className="text-xs text-stone-500 max-w-md mx-auto">
              We couldn't locate any published reports matching your current filter criteria. Try resetting your search query or selecting "All" categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedPeriod('All');
              }}
              className="px-4 py-2 bg-[#17324D] text-white rounded-xl text-xs font-bold hover:bg-[#2459A9] transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* =========================================================================
             VIEW 1: CARD GRID VIEW (VISUAL, COMPREHENSIVE)
             ========================================================================= */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-group">
            {filteredReports.map((report) => (
              <article
                key={report.id}
                className="reveal-up interactive-card bg-white charity-image-shape border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo & Badges */}
                  <div className="relative h-52 charity-image-shape overflow-hidden bg-stone-100">
                    <img
                      src={report.featuredImage}
                      alt={report.title}
                      className="reveal-image interactive-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    
                    <span className="absolute top-3 left-3 text-[10px] font-bold text-white bg-[#17324D]/90 backdrop-blur-xs px-2.5 py-1 rounded-md uppercase tracking-wider border border-white/20">
                      {report.category}
                    </span>

                    {report.fileSize && (
                      <span className="absolute top-3 right-3 text-[10px] font-medium text-white/90 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded">
                        {report.fileSize} · {report.pagesCount || 8} pgs
                      </span>
                    )}

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-[11px]">
                      <span className="font-semibold">{report.publicationDate}</span>
                      <span className="text-white/80">Period: {report.reportingPeriod}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3.5">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500">
                      <MapPin className="w-3.5 h-3.5 text-[#2459A9] shrink-0" />
                      <span className="font-medium text-stone-700">{report.location}</span>
                    </div>

                    <h2
                      onClick={() => setActiveReportModal(report)}
                      className="font-['Manrope'] font-bold text-lg text-[#17324D] group-hover:text-[#2459A9] transition-colors leading-snug cursor-pointer line-clamp-2"
                    >
                      {report.title}
                    </h2>

                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-['Plus_Jakarta_Sans']">
                      {report.excerpt}
                    </p>

                    {/* Verified Metrics Pills */}
                    {report.verifiedMetrics && report.verifiedMetrics.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {report.verifiedMetrics.slice(0, 3).map((met, i) => (
                          <div
                            key={i}
                            className="text-[10px] bg-[#FAF7F0] border border-[#E98A32]/30 px-2.5 py-1 rounded-md text-[#17324D]"
                          >
                            <strong className="text-[#E98A32] font-extrabold">{met.value}</strong>{' '}
                            <span>{met.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between gap-3 bg-stone-50/50">
                  <button
                    onClick={() => setActiveReportModal(report)}
                    className="flex-1 py-2.5 px-3.5 bg-[#17324D] hover:bg-[#2459A9] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs group-hover:shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Read Online</span>
                  </button>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleDownloadDocument(report)}
                      className="p-2.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-[#17324D] transition-colors"
                      title="Download Official Document (.doc)"
                      aria-label="Download Report Document"
                    >
                      <Download className="w-4 h-4 text-[#E98A32]" />
                    </button>

                    <button
                      onClick={() => handlePrintReport(report)}
                      className="p-2.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-stone-600 hover:text-[#17324D] transition-colors"
                      title="Print or Save as PDF"
                      aria-label="Print Report"
                    >
                      <Printer className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* =========================================================================
             VIEW 2: EXECUTIVE DOSSIER TABLE VIEW (PROFESSIONAL INSTITUTIONAL TABLE)
             ========================================================================= */
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#17324D] text-white border-b border-stone-200">
                    <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">
                      Date & Cycle
                    </th>
                    <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">
                      Document Title & Scope
                    </th>
                    <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">
                      Category
                    </th>
                    <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">
                      Key Metric
                    </th>
                    <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredReports.map((report) => (
                    <tr
                      key={report.id}
                      className="hover:bg-stone-50/80 transition-colors group cursor-pointer"
                      onClick={() => setActiveReportModal(report)}
                    >
                      <td className="py-4 px-4 whitespace-nowrap text-stone-600">
                        <div className="font-bold text-[#17324D]">{report.publicationDate}</div>
                        <div className="text-[11px] text-stone-500">{report.reportingPeriod}</div>
                      </td>

                      <td className="py-4 px-4 max-w-md">
                        <div className="font-bold text-sm text-[#17324D] group-hover:text-[#2459A9] transition-colors line-clamp-1">
                          {report.title}
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mt-0.5">
                          <MapPin className="w-3 h-3 text-[#2459A9]" />
                          <span>{report.location}</span>
                          <span aria-hidden="true">·</span>
                          <span>{report.author}</span>
                        </div>
                      </td>

                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="text-[10px] font-bold text-[#17324D] bg-[#FAF7F0] border border-[#E98A32]/30 px-2 py-0.5 rounded">
                          {report.category}
                        </span>
                      </td>

                      <td className="py-4 px-4 whitespace-nowrap">
                        {report.verifiedMetrics && report.verifiedMetrics[0] ? (
                          <div className="text-xs">
                            <span className="font-extrabold text-[#E98A32]">
                              {report.verifiedMetrics[0].value}
                            </span>{' '}
                            <span className="text-stone-500 text-[11px]">
                              {report.verifiedMetrics[0].label}
                            </span>
                          </div>
                        ) : (
                          <span className="text-stone-400 text-[11px]">Verified</span>
                        )}
                      </td>

                      <td
                        className="py-4 px-4 text-right whitespace-nowrap"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setActiveReportModal(report)}
                            className="px-3 py-1.5 bg-[#17324D] hover:bg-[#2459A9] text-white text-[11px] font-bold rounded-lg flex items-center gap-1"
                          >
                            <Eye className="w-3 h-3" />
                            <span>Read</span>
                          </button>

                          <button
                            onClick={() => handleDownloadDocument(report)}
                            className="p-1.5 rounded-lg border border-stone-200 hover:bg-stone-100 text-[#E98A32]"
                            title="Download Official Document"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => handlePrintReport(report)}
                            className="p-1.5 rounded-lg border border-stone-200 hover:bg-stone-100 text-stone-600"
                            title="Print / Save PDF"
                          >
                            <Printer className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          ONLINE REPORT READER (EXECUTIVE MODAL & PRINT-READY DOSSIER)
          ========================================================================= */}
      {activeReportModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-stone-200 overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh] printable-report-container">
            {/* Top Toolbar (Non-printable) */}
            <div className="bg-[#17324D] text-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 border-b border-stone-700 no-print shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white p-0.5 border border-[#E98A32] shadow-sm shrink-0 overflow-hidden flex items-center justify-center">
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
                  <span className="text-[10px] font-extrabold text-[#E98A32] uppercase tracking-wider block">
                    Mercy Link Foundation Africa · Official Dossier
                  </span>
                  <span className="text-xs text-white/80 line-clamp-1 font-semibold">
                    {activeReportModal.title}
                  </span>
                </div>
              </div>

              {/* Reader Controls */}
              <div className="flex items-center gap-2">
                {/* Font Size Toggle */}
                <div className="flex items-center border border-white/20 rounded-lg p-0.5 text-xs text-white/80">
                  <button
                    onClick={() => setReaderFontSize('normal')}
                    className={`px-2 py-0.5 rounded ${
                      readerFontSize === 'normal' ? 'bg-white/20 text-white font-bold' : 'hover:text-white'
                    }`}
                    title="Standard Reading Text"
                  >
                    A
                  </button>
                  <button
                    onClick={() => setReaderFontSize('large')}
                    className={`px-2 py-0.5 rounded ${
                      readerFontSize === 'large' ? 'bg-white/20 text-white font-bold' : 'hover:text-white'
                    }`}
                    title="Larger Reading Text"
                  >
                    A+
                  </button>
                </div>

                {/* Print / Save as PDF Button */}
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5 text-[#E98A32]" />
                  <span className="hidden sm:inline">Print / Save PDF</span>
                </button>

                {/* Download Document Button */}
                <button
                  onClick={() => handleDownloadDocument(activeReportModal)}
                  className="px-3 py-1.5 bg-[#E98A32] hover:bg-[#d47926] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                  title="Download Document (.doc)"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </button>

                {/* Share Button */}
                <button
                  onClick={() => handleShareReport(activeReportModal)}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  title="Share Report"
                >
                  <Share2 className="w-4 h-4" />
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setActiveReportModal(null)}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors ml-1"
                  aria-label="Close reader"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Reading View Body (Scrollable & Printable) */}
            <div
              id="report-printable-area"
              className="p-6 sm:p-10 md:p-12 overflow-y-auto space-y-8 flex-1 bg-white"
            >
              {/* Official Institutional Letterhead */}
              <div className="border-b-2 border-stone-900/80 pb-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-[#E98A32] p-1 shadow-md shrink-0 overflow-hidden flex items-center justify-center">
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
                      <h2 className="font-['Manrope'] font-extrabold text-xl sm:text-2xl tracking-tight text-[#17324D] uppercase">
                        Mercy Link Foundation Africa
                      </h2>
                      <p className="text-[11px] font-bold text-[#E98A32] tracking-wider uppercase">
                        Transforming Communities – Creating a Legacy of Peace
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right text-[11px] text-stone-500 space-y-0.5">
                    <p className="font-semibold text-stone-800">Bulange Mengo, Kampala, Uganda</p>
                    <p>Official NGO Registration No. 2013</p>
                    <p>Contact: mercylink2@gmail.com | +(256) 392 003 454</p>
                  </div>
                </div>

                <div className="bg-[#FAF7F0] border border-[#E98A32]/30 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[#17324D]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#E98A32] uppercase">Classification:</span>
                    <span className="font-semibold">Official Field Record & Audit Document</span>
                  </div>
                  <div className="flex items-center gap-4 text-stone-600 text-[11px]">
                    <span>Ref: <strong>ML-{activeReportModal.id.toUpperCase()}</strong></span>
                    <span>Issued: <strong>{activeReportModal.publicationDate}</strong></span>
                    <span>Cycle: <strong>{activeReportModal.reportingPeriod}</strong></span>
                  </div>
                </div>
              </div>

              {/* Title & Metadata Strip */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#17324D] uppercase tracking-wider">
                    {activeReportModal.category}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    Field Scope: {activeReportModal.location}
                  </span>
                </div>

                <h1 className="font-['Playfair_Display'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17324D] leading-tight">
                  {activeReportModal.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 border-y border-stone-100 py-2.5">
                  <span>Author: <strong>{activeReportModal.author}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>Reporting Period: <strong>{activeReportModal.reportingPeriod}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>File Reference: <strong>{activeReportModal.downloadablePdfName || 'Official PDF'}</strong></span>
                </div>
              </div>

              {/* Executive Summary Box */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-[#FAF7F0] to-white rounded-2xl border-l-4 border-[#E98A32] border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E98A32]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Executive Summary</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                  {activeReportModal.executiveSummary || activeReportModal.excerpt}
                </p>
              </div>

              {/* Verified Quantitative Metrics Grid */}
              {activeReportModal.verifiedMetrics && activeReportModal.verifiedMetrics.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-['Manrope'] font-bold text-sm uppercase tracking-wider text-stone-500">
                    Verified Quantitative Field Outcomes
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {activeReportModal.verifiedMetrics.map((met, i) => (
                      <div
                        key={i}
                        className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-center space-y-1"
                      >
                        <p className="font-['Playfair_Display'] font-extrabold text-2xl text-[#17324D]">
                          {met.value}
                        </p>
                        <p className="text-[11px] text-stone-600 font-semibold">{met.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Strategic Findings */}
              {activeReportModal.keyFindings && activeReportModal.keyFindings.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-['Manrope'] font-bold text-sm uppercase tracking-wider text-stone-500">
                    Key Observations & Field Evidence
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeReportModal.keyFindings.map((finding, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl border border-stone-200/90 bg-white flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                          {finding}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Featured Image in Reader */}
              <div className="charity-image-shape overflow-hidden border border-stone-200/90 shadow-md max-h-96">
                <img
                  src={activeReportModal.featuredImage}
                  alt={activeReportModal.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Detailed Narrative Section */}
              <div className="space-y-4">
                <h3 className="font-['Manrope'] font-bold text-sm uppercase tracking-wider text-stone-500">
                  Comprehensive Field Narrative
                </h3>
                <div
                  className={`space-y-4 text-stone-800 leading-relaxed font-['Plus_Jakarta_Sans'] ${
                    readerFontSize === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                  }`}
                >
                  {activeReportModal.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Beneficiary / Witness Testimonial */}
              {activeReportModal.witnessTestimonial && (
                <div className="p-6 bg-[#FAF7F0] rounded-2xl border border-[#E98A32]/40 relative space-y-3">
                  <Quote className="w-6 h-6 text-[#E98A32]" />
                  <p className="text-xs sm:text-sm italic text-stone-800 leading-relaxed font-serif">
                    "{activeReportModal.witnessTestimonial.quote}"
                  </p>
                  <div className="text-xs">
                    <strong className="text-[#17324D]">{activeReportModal.witnessTestimonial.person}</strong>
                    <span className="text-stone-500 ml-1.5">
                      ({activeReportModal.witnessTestimonial.role})
                    </span>
                  </div>
                </div>
              )}

              {/* Recommendations & Next Steps */}
              {activeReportModal.recommendations && activeReportModal.recommendations.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-['Manrope'] font-bold text-sm uppercase tracking-wider text-stone-500">
                    Strategic Recommendations & Action Steps
                  </h3>
                  <div className="space-y-2">
                    {activeReportModal.recommendations.map((rec, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-start gap-3"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#17324D] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Official Attestation & Sign-off Stamp */}
              <div className="pt-8 border-t-2 border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1 text-xs text-stone-600">
                  <div className="flex items-center gap-2 font-bold text-[#17324D]">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official Institutional Attestation</span>
                  </div>
                  <p>Archived under Mercy Link Foundation Africa official governance.</p>
                  <p className="text-[11px] text-stone-400">
                    Registration Authority: Uganda NGO Board (2013) · P.O. Box 269 Kampala
                  </p>
                </div>

                <div className="p-3 bg-stone-50 border border-stone-300 rounded-xl text-center min-w-[200px]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E98A32] block">
                    Institutional Verification
                  </span>
                  <span className="font-serif font-bold text-sm text-[#17324D] block mt-0.5">
                    Verified Field Record
                  </span>
                  <span className="text-[10px] text-stone-500 block">Kampala, Uganda</span>
                </div>
              </div>
            </div>

            {/* Modal Bottom Action Bar (Non-printable) */}
            <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 no-print shrink-0">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span>Want to partner with this ministry?</span>
                <button
                  onClick={() => {
                    openDonationModal(activeReportModal.category);
                  }}
                  className="font-bold text-[#E98A32] hover:underline flex items-center gap-1"
                >
                  <Heart className="w-3.5 h-3.5 fill-[#E98A32]" />
                  <span>Support this Cause</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownloadDocument(activeReportModal)}
                  className="px-4 py-2 bg-[#17324D] hover:bg-[#2459A9] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-2 bg-white border border-stone-300 hover:bg-stone-100 text-[#17324D] text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Dossier</span>
                </button>

                <button
                  onClick={() => setActiveReportModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
