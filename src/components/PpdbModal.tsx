import React, { useState } from 'react';
import { X, CheckCircle2, Calculator, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { PPDBFormData } from '../types';

interface PpdbModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const PpdbModal: React.FC<PpdbModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState<PPDBFormData>({
    parentName: '',
    childName: '',
    childDob: '',
    phone: '',
    email: '',
    programType: 'toddler',
    duration: 'full-day',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  if (!isOpen) return null;

  const calculateEstimate = () => {
    let registrationFee = 350000;
    let monthlySpp = 1650000;
    let uniformAndKit = 650000;

    if (formData.programType === 'baby-care') {
      monthlySpp = formData.duration === 'full-day' ? 1850000 : 1350000;
    } else if (formData.programType === 'toddler') {
      monthlySpp = formData.duration === 'full-day' ? 1650000 : 1200000;
    } else if (formData.programType === 'pra-tk-daycare') {
      monthlySpp = formData.duration === 'full-day' ? 1550000 : 1100000;
    } else if (formData.programType === 'daycare-harian') {
      registrationFee = 150000;
      monthlySpp = 800000;
      uniformAndKit = 250000;
    } else if (formData.programType === 'kober-asih') {
      registrationFee = 350000;
      monthlySpp = 650000;
      uniformAndKit = 750000;
    } else if (formData.programType === 'tk-a') {
      registrationFee = 350000;
      monthlySpp = 750000;
      uniformAndKit = 850000;
    } else if (formData.programType === 'tk-b') {
      registrationFee = 350000;
      monthlySpp = 800000;
      uniformAndKit = 850000;
    }

    const totalFirstMonth = registrationFee + monthlySpp + uniformAndKit;

    return {
      registrationFee,
      monthlySpp,
      uniformAndKit,
      totalFirstMonth
    };
  };

  const fees = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      onSuccess(`Pendaftaran PPDB 2026/2027 untuk ${formData.childName || 'ananda'} berhasil terkirim! Tim PPDB Asih Putera akan segera menghubungi Ayah/Bunda via WhatsApp.`);
    }, 800);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative border-2 border-amber-200 my-8 animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedSuccess ? (
          <>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-100 text-asih-orange p-3 rounded-2xl">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-asih-orange uppercase tracking-wider">
                  Penerimaan Peserta Didik Baru (PPDB) 2026/2027
                </span>
                <h3 className="font-serif text-2xl font-bold text-asih-green">
                  Formulir Pendaftaran Daycare, KOBer & TK
                </h3>
              </div>
            </div>

            <p className="text-xs md:text-sm text-gray-600 mb-6">
              Daftarkan ananda tercinta di <strong>TK & Daycare Asih Putera</strong>. Kuota terbatas setiap kelas demi menjaga rasio pengasuhan personal yang optimal.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Nama Lengkap Ayah / Bunda *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Ibu Rina Septiani"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-asih-orange"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Nomor WhatsApp Aktif *
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Nama Panggilan Buah Hati *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Aisyah"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-asih-orange"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Tanggal Lahir Anak *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-asih-orange"
                    value={formData.childDob}
                    onChange={(e) => setFormData({ ...formData, childDob: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Pilihan Unit & Kelas *
                  </label>
                  <select
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-asih-orange bg-white font-medium"
                    value={formData.programType}
                    onChange={(e) => setFormData({ ...formData, programType: e.target.value })}
                  >
                    <optgroup label="Unit Daycare Islami">
                      <option value="baby-care">👶 Baby Care (6 - 18 Bulan)</option>
                      <option value="toddler">🧸 Toddler Care (1,5 - 3 Tahun)</option>
                      <option value="pra-tk-daycare">🎨 Pra-TK Daycare (3 - 4 Tahun)</option>
                      <option value="daycare-harian">⏰ Daycare Harian / Insidental</option>
                    </optgroup>
                    <optgroup label="Unit TK & KOBer Asih">
                      <option value="kober-asih">🎒 Kelompok Bermain / KOBer (3 - 4 Tahun)</option>
                      <option value="tk-a">⭐ Taman Kanak-Kanak A / TK A (4 - 5 Tahun)</option>
                      <option value="tk-b">🎓 Taman Kanak-Kanak B / TK B (5 - 6 Tahun)</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Durasi Pengasuhan / Jadwal *
                  </label>
                  <select
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-asih-orange bg-white font-medium"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value as 'half-day' | 'full-day' })}
                  >
                    <option value="full-day">Full Day (07.00 - 16.30 WIB)</option>
                    <option value="half-day">Half Day / Reguler Pagi (07.30 - 12.00 WIB)</option>
                  </select>
                </div>
              </div>

              {/* Live Fee Estimator */}
              <div className="bg-asih-light border border-amber-200/80 rounded-2xl p-4 mt-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-asih-green flex items-center">
                    <Calculator className="w-3.5 h-3.5 mr-1 text-asih-orange" />
                    Simulasi Estimasi Biaya (PPDB 2026/2027)
                  </span>
                  <span className="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-semibold">
                    Termasuk Snack Sehat & Modul
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs border-t border-gray-200/60 pt-2 text-gray-600">
                  <div>
                    <span className="text-gray-400 block text-[10px]">Formulir PPDB</span>
                    <span className="font-semibold text-gray-800">Rp {fees.registrationFee.toLocaleString('id-ID')}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px]">SPP Bulanan</span>
                    <span className="font-semibold text-gray-800">Rp {fees.monthlySpp.toLocaleString('id-ID')}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px]">Seragam & Kit</span>
                    <span className="font-semibold text-gray-800">Rp {fees.uniformAndKit.toLocaleString('id-ID')}</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Catatan Tambahan (Alergi makanan, riwayat medis, atau kebutuhan khusus)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ceritakan preferensi atau riwayat ananda..."
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-asih-orange"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <div className="flex items-center space-x-2 text-[11px] text-gray-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Data pendaftaran Anda terenkripsi aman untuk keperluan administrasi Yayasan Asih Putera.</span>
              </div>

              <div className="flex space-x-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/3 border border-gray-200 text-gray-600 py-3 rounded-full font-medium text-sm hover:bg-gray-50 transition cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-2/3 bg-asih-orange hover:bg-amber-700 text-white py-3 rounded-full font-bold text-sm transition shadow-sm flex items-center justify-center cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Memproses Formulir...</span>
                  ) : (
                    <>
                      <span>Kirim Pendaftaran PPDB</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-asih-green mb-2">
              Pendaftaran PPDB Berhasil Terkirim!
            </h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
              Jazakumullah Khairan Ayah/Bunda <strong>{formData.parentName}</strong>. Data ananda <strong>{formData.childName}</strong> telah diterima oleh panitia PPDB TK & Daycare Asih Putera T.A 2026/2027.
            </p>
            <div className="bg-asih-light border border-amber-200/80 rounded-2xl p-4 max-w-md mx-auto text-left text-xs text-gray-700 space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Program Dipilih:</span>
                <span className="font-bold text-asih-green uppercase">{formData.programType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Jadwal:</span>
                <span className="font-semibold text-gray-800">{formData.duration === 'full-day' ? 'Full Day (07.00 - 16.30)' : 'Half Day (07.30 - 12.00)'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Nomor WhatsApp:</span>
                <span className="font-semibold text-gray-800">{formData.phone}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setSubmittedSuccess(false);
                onClose();
              }}
              className="bg-asih-green hover:bg-emerald-900 text-white px-8 py-3 rounded-full font-bold text-sm transition cursor-pointer"
            >
              Selesai & Tutup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
