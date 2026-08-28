import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { VisitFormData } from '../types';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState<VisitFormData>({
    parentName: '',
    phone: '',
    childAge: 'Toddler (1,5 - 3 Tahun)',
    preferredDate: '',
    preferredTime: '09.00 - 10.30 WIB',
    programInterest: 'Toddler',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    onSuccess(`Pengajuan jadwal Free Trial Class / School Tour untuk Ayah/Bunda ${formData.parentName} pada ${formData.preferredDate || 'tanggal yang dipilih'} berhasil diajukan! Tim kami akan menghubungi via WhatsApp.`);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative border-2 border-amber-200 my-8 animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-emerald-100 text-emerald-700 p-3 rounded-2xl">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center space-x-1 text-xs font-bold text-asih-orange uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>Free Trial Class & School Tour</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-asih-green">
                  Jadwalkan Kunjungan
                </h3>
              </div>
            </div>

            <p className="text-xs md:text-sm text-gray-600 mb-5">
              Ajak buah hati mencoba pengalaman seru di Sentra Bermain <strong>TK & Daycare Asih Putera</strong> sebelum mendaftar. Gratis tanpa dipungut biaya!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Nama Lengkap Ayah / Bunda *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Bunda Aisyah"
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-asih-orange"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    WhatsApp / HP *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-xxxx-xxxx"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-asih-orange"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Peminatan Program *
                  </label>
                  <select
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-asih-orange bg-white font-medium"
                    value={formData.programInterest}
                    onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                  >
                    <option value="Baby Care">👶 Baby Care (6 - 18 Bulan)</option>
                    <option value="Toddler">🧸 Toddler Care (1,5 - 3 Tahun)</option>
                    <option value="Pra-TK">🎨 Pra-TK Daycare (3 - 4 Tahun)</option>
                    <option value="KOBer">🎒 KOBer / Kelompok Bermain (3 - 4 Tahun)</option>
                    <option value="TK A">⭐ TK A (4 - 5 Tahun)</option>
                    <option value="TK B">🎓 TK B (5 - 6 Tahun)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Pilihan Tanggal Visit *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-asih-orange"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Pilihan Sesi Waktu *
                  </label>
                  <select
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-asih-orange bg-white font-medium"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  >
                    <option value="08.30 - 10.00 WIB">Sesi Pagi (08.30 - 10.00 WIB)</option>
                    <option value="10.00 - 11.30 WIB">Sesi Siang (10.00 - 11.30 WIB)</option>
                    <option value="13.30 - 15.00 WIB">Sesi Sore (13.30 - 15.00 WIB)</option>
                  </select>
                </div>
              </div>

              <div className="bg-asih-light p-3 rounded-2xl text-xs text-gray-700 flex items-center space-x-2 border border-amber-200">
                <MapPin className="w-4 h-4 text-asih-orange shrink-0" />
                <span>Kampus Asih Putera: Jl. Daeng Moh. Ardiwinata / Bojongloa No. 12, Kota Cimahi.</span>
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 border border-gray-200 text-gray-600 py-2.5 rounded-full font-medium text-sm hover:bg-gray-50 transition cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-2/3 bg-asih-green hover:bg-emerald-800 text-white py-2.5 rounded-full font-bold text-sm transition flex items-center justify-center cursor-pointer shadow-xs"
                >
                  <span>Konfirmasi Trial Class</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-asih-green mb-2">
              Jadwal Trial Class Dikonfirmasi!
            </h3>
            <p className="text-xs text-gray-600 max-w-sm mx-auto mb-5">
              Tim panitia PPDB TK & Daycare Asih Putera akan mengirimkan barcode undangan trial class ke WhatsApp <strong>{formData.phone}</strong>.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="bg-asih-orange hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-bold text-xs transition cursor-pointer"
            >
              Tutup & Kembali
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
