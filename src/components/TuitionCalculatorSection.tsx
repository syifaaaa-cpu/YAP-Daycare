import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, Download, Percent, ShieldCheck, Heart } from 'lucide-react';
import { PPDB_MAIN_NARRATIVE } from '../data/mockData';

interface TuitionCalculatorProps {
  onOpenPpdb: () => void;
  onOpenBrochure: () => void;
}

export const TuitionCalculatorSection: React.FC<TuitionCalculatorProps> = ({
  onOpenPpdb,
  onOpenBrochure
}) => {
  const [selectedAge, setSelectedAge] = useState<string>('toddler');
  const [careType, setCareType] = useState<'full' | 'half'>('full');
  const [isEarlyBird, setIsEarlyBird] = useState(true);
  const [isSibling, setIsSibling] = useState(false);

  // Fee calculation logic
  const getCalculation = () => {
    let baseRegFee = 2500000; // Uang Masuk / Pendaftaran
    let baseMonthly = 1650000; // Pengasuhan & SPP
    let uniformEquipmentFee = 500000; // Paket perlengkapan & sprei higienis
    let mealFee = 550000; // Paket makan 4 bintang & snack bergizi

    if (selectedAge === 'baby') {
      baseRegFee = 2800000;
      baseMonthly = careType === 'full' ? 1850000 : 1350000;
      mealFee = 600000;
    } else if (selectedAge === 'toddler') {
      baseRegFee = 2500000;
      baseMonthly = careType === 'full' ? 1650000 : 1200000;
      mealFee = 550000;
    } else if (selectedAge === 'pra-tk') {
      baseRegFee = 2300000;
      baseMonthly = careType === 'full' ? 1550000 : 1100000;
      mealFee = 500000;
    } else {
      // Harian / Insidental
      baseRegFee = 200000;
      baseMonthly = 120000 * 20; // 20 hari simulasi
      mealFee = 0;
      uniformEquipmentFee = 0;
    }

    let discount = 0;
    if (isEarlyBird && selectedAge !== 'harian') discount += 500000;
    if (isSibling && selectedAge !== 'harian') discount += 300000;

    const initialTotal = Math.max(0, baseRegFee + uniformEquipmentFee - discount);
    const monthlyTotal = baseMonthly + mealFee;

    return {
      baseRegFee,
      uniformEquipmentFee,
      discount,
      initialTotal,
      baseMonthly,
      mealFee,
      monthlyTotal
    };
  };

  const calc = getCalculation();

  return (
    <section id="biaya-section" className="py-16 md:py-24 bg-[#FAF7F0] relative overflow-hidden scroll-mt-16 border-b border-amber-900/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-[#FEF9E7] text-[#C37932] text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-amber-200 shadow-2xs">
            <Calculator className="w-3.5 h-3.5 text-[#F39C12]" />
            <span>Transparansi &amp; Simulasi Biaya PPDB 2026/2027</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#16332A] mb-3">
            Simulasi Biaya Day Care Asih Putera
          </h2>
          <div className="w-24 h-1 bg-[#00A896] mx-auto rounded-full"></div>
          
          {/* Official PPDB Narrative Quote */}
          <div className="max-w-3xl mx-auto mt-5 bg-white p-4 sm:p-5 rounded-2xl border border-amber-200/80 shadow-xs">
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium italic">
              "{PPDB_MAIN_NARRATIVE}"
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-amber-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Form Controls */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            
            {/* Age Group Option */}
            <div>
              <label className="block text-xs font-extrabold text-[#16332A] uppercase tracking-wider mb-2">
                1. Pilih Kelompok Usia Ananda
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  { id: 'baby', label: 'Baby Care', age: '6 - 18 Bulan', ratio: '1:2' },
                  { id: 'toddler', label: 'Toddler Care', age: '1.5 - 3 Tahun', ratio: '1:4' },
                  { id: 'pra-tk', label: 'Pra-TK Care', age: '3 - 4 Tahun', ratio: '1:6' },
                  { id: 'harian', label: 'Daycare Harian', age: 'Fleksibel', ratio: 'Fleksibel' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedAge(item.id)}
                    className={`p-3 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                      selectedAge === item.id
                        ? 'border-[#00A896] bg-teal-50/60 ring-2 ring-[#00A896]/30'
                        : 'border-gray-200 hover:border-amber-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-xs sm:text-sm text-[#16332A]">{item.label}</span>
                      <span className="text-[9px] bg-teal-100 text-[#00A896] font-extrabold px-1.5 py-0.5 rounded-full">{item.ratio}</span>
                    </div>
                    <span className="text-[11px] text-gray-500 mt-1">{item.age}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Selector */}
            {selectedAge !== 'harian' && (
              <div>
                <label className="block text-xs font-extrabold text-[#16332A] uppercase tracking-wider mb-2">
                  2. Durasi Layanan
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCareType('full')}
                    className={`p-3 rounded-2xl border text-center transition cursor-pointer ${
                      careType === 'full'
                        ? 'border-[#00A896] bg-teal-50/60 font-bold text-[#00A896] ring-2 ring-[#00A896]/30'
                        : 'border-gray-200 text-gray-700'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold">Full Day (07.00 - 16.30 WIB)</div>
                    <div className="text-[10px] text-gray-500">Makan Siang + 2x Snack</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCareType('half')}
                    className={`p-3 rounded-2xl border text-center transition cursor-pointer ${
                      careType === 'half'
                        ? 'border-[#00A896] bg-teal-50/60 font-bold text-[#00A896] ring-2 ring-[#00A896]/30'
                        : 'border-gray-200 text-gray-700'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold">Half Day (07.00 - 12.30 WIB)</div>
                    <div className="text-[10px] text-gray-500">Makan Siang + 1x Snack</div>
                  </button>
                </div>
              </div>
            )}

            {/* Discount / Promo toggles */}
            {selectedAge !== 'harian' && (
              <div>
                <label className="block text-xs font-extrabold text-[#16332A] uppercase tracking-wider mb-2">
                  3. Promo &amp; Manfaat PPDB
                </label>
                <div className="space-y-2">
                  <label className="flex items-center p-3 rounded-2xl border border-amber-200/80 bg-[#FAF7F0] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isEarlyBird}
                      onChange={(e) => setIsEarlyBird(e.target.checked)}
                      className="w-4 h-4 text-[#00A896] rounded"
                    />
                    <div className="ml-3">
                      <span className="text-xs font-bold text-[#16332A] block">Potongan Early Bird Gelombang 1</span>
                      <span className="text-[11px] text-gray-500">Hemat Rp 500.000 untuk pendaftaran awal</span>
                    </div>
                  </label>

                  <label className="flex items-center p-3 rounded-2xl border border-amber-200/80 bg-[#FAF7F0] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isSibling}
                      onChange={(e) => setIsSibling(e.target.checked)}
                      className="w-4 h-4 text-[#00A896] rounded"
                    />
                    <div className="ml-3">
                      <span className="text-xs font-bold text-[#16332A] block">Diskon Saudara Kandung / Alumni Asih Putera</span>
                      <span className="text-[11px] text-gray-500">Hemat Rp 300.000</span>
                    </div>
                  </label>
                </div>
              </div>
            )}

          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#00473A] to-[#00382E] text-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-4">
                <span className="text-xs uppercase font-extrabold text-amber-300 tracking-wider">
                  Rincian Investasi
                </span>
                <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-bold">
                  Estimasi 2026
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-emerald-100">Uang Masuk / Pendaftaran:</span>
                  <span className="font-bold">Rp {calc.baseRegFee.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-100">Paket Perlengkapan &amp; Sprei:</span>
                  <span className="font-bold">Rp {calc.uniformEquipmentFee.toLocaleString('id-ID')}</span>
                </div>
                {calc.discount > 0 && (
                  <div className="flex justify-between text-amber-300 font-bold">
                    <span>Total Potongan Promo:</span>
                    <span>- Rp {calc.discount.toLocaleString('id-ID')}</span>
                  </div>
                )}
                
                <div className="pt-3 border-t border-white/15 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs text-amber-200 font-extrabold block">TOTAL BIAYA AWAL:</span>
                    <span className="text-[10px] text-emerald-200">Dibayar sekali di awal</span>
                  </div>
                  <span className="text-xl font-extrabold text-white">
                    Rp {calc.initialTotal.toLocaleString('id-ID')}
                  </span>
                </div>

                <div className="pt-3 border-t border-white/15">
                  <div className="flex justify-between text-xs text-emerald-100 mb-1">
                    <span>Pengasuhan &amp; Gizi Bulanan:</span>
                    <span className="font-bold">Rp {calc.monthlyTotal.toLocaleString('id-ID')} / bln</span>
                  </div>
                  <span className="text-[10px] text-emerald-200">Sudah termasuk makan 4 bintang, snack, dan Daily Report</span>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-white/15">
              <button
                onClick={onOpenPpdb}
                className="w-full bg-[#00A896] hover:bg-[#028090] text-white py-3.5 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 transition cursor-pointer shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Lanjut Daftar PPDB Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBrochure}
                className="w-full bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-2xl font-bold text-xs flex items-center justify-center space-x-2 transition cursor-pointer border border-white/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh Brosur Lengkap PDF</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
