import React, { useState } from 'react';
import { X, Download, CheckCircle2, FileText, Phone, Mail, Sparkles, BookOpen, Share2 } from 'lucide-react';

interface DigitalBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPpdb?: () => void;
  onSuccessToast?: (msg: string) => void;
}

export const DigitalBrochureModal: React.FC<DigitalBrochureModalProps> = ({
  isOpen,
  onClose,
  onOpenPpdb,
  onSuccessToast
}) => {
  const [downloadName, setDownloadName] = useState('');
  const [downloadWhatsapp, setDownloadWhatsapp] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadWhatsapp.trim()) return;

    setIsDownloaded(true);
    if (onSuccessToast) {
      onSuccessToast(`Brosur Digital PPDB 2026/2027 berhasil diunduh! Salinan dikirimkan via WhatsApp ke ${downloadWhatsapp}.`);
    }
    
    // Simulate file download trigger
    setTimeout(() => {
      onClose();
      setIsDownloaded(false);
      setDownloadName('');
      setDownloadWhatsapp('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-amber-200 relative animate-in fade-in zoom-in-95">
        
        {/* Header banner */}
        <div className="bg-gradient-to-r from-[#00473A] to-[#006C59] text-white p-6 sm:p-8 rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center space-x-1.5 bg-[#F39C12] text-white text-[11px] font-bold px-3 py-0.5 rounded-full mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Official Prospectus 2026/2027</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold">
            Brosur Digital Day Care Asih Putera
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 mt-1">
            Panduan lengkap filosofi pengasuhan, program stimulasi sensori motorik, rincian biaya investasi, rutinitas harian, dan syarat PPDB.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Highlights in Brochure */}
          <div className="bg-[#FAF7F0] p-4 rounded-2xl border border-amber-200/80">
            <h4 className="font-serif text-xs font-bold text-[#00473A] uppercase tracking-wider mb-2.5 flex items-center">
              <BookOpen className="w-4 h-4 mr-1.5 text-[#F39C12]" />
              Isi Dokumen Brosur (PDF 12 Halaman):
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Profil &amp; Falsafah Luhur Panca Waluya</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Rincian 6 Program Inti &amp; Makna Pendidikan</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Daftar Menu Gizi 4 Bintang &amp; Daily Report</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Struktur Biaya Pengasuhan T.A 2026/2027</span>
              </div>
            </div>
          </div>

          {/* Download Form */}
          <form onSubmit={handleDownload} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Nama Ayah / Bunda
              </label>
              <input
                type="text"
                required
                value={downloadName}
                onChange={(e) => setDownloadName(e.target.value)}
                placeholder="Contoh: Bunda Fatimah"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A896] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Nomor WhatsApp Aktif <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={downloadWhatsapp}
                onChange={(e) => setDownloadWhatsapp(e.target.value)}
                placeholder="Contoh: 081234567890"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00A896] focus:outline-none"
              />
              <span className="text-[11px] text-gray-500 mt-1 block">
                Link download PDF instan akan terbuka &amp; salinan otomatis dikirimkan ke WhatsApp Anda.
              </span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={isDownloaded}
                className="flex-1 bg-[#00A896] hover:bg-[#028090] text-white py-3 rounded-xl font-bold text-sm transition flex items-center justify-center shadow-md cursor-pointer disabled:opacity-50"
              >
                <Download className="w-4 h-4 mr-2" />
                <span>{isDownloaded ? 'Mengunduh Brosur...' : 'Unduh Brosur Digital Sekarang (PDF)'}</span>
              </button>

              {onOpenPpdb && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenPpdb();
                  }}
                  className="sm:w-auto bg-[#00473A] hover:bg-[#00382E] text-white px-5 py-3 rounded-xl font-bold text-sm transition cursor-pointer"
                >
                  Daftar PPDB Langsung
                </button>
              )}
            </div>
          </form>

        </div>

      </div>
    </div>
  );
};
