import React, { useState } from 'react';
import { Home, Bed, Bath, Video, Trees, Smartphone, ShieldCheck, X, Sparkles, CheckCircle2, Eye } from 'lucide-react';

interface FacilityDetail {
  id: string;
  title: string;
  category: string;
  iconEmoji: string;
  tag: string;
  description: string;
  features: string[];
  safetyStandard: string;
  image: string;
  bgColor: string;
  borderColor: string;
}

export const FacilitiesSection: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<FacilityDetail | null>(null);

  const facilitiesList: FacilityDetail[] = [
    {
      id: 'soft-furniture',
      title: 'Ruang Kelas & Ergonomic Soft Furniture',
      category: 'Ergonomi & Kenyamanan Santri',
      iconEmoji: '🛋️',
      tag: 'Sudut Membulat',
      description: 'Seluruh meja, kursi, dan lemari dirancang khusus proporsional anak dengan sudut membulat bebas tajam (round-corner design) berbahan kayu solid bersertifikat ramah lingkungan.',
      features: [
        'Meja & kursi ergonomis sesuai tinggi badan anak',
        'Finishing cat water-based non-toxic bersertifikasi aman',
        'Pencahayaan alami dan sirkulasi udara silang'
      ],
      safetyStandard: 'Standar Keamanan Internasional Montessori & Bebas Timbal',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80',
      bgColor: 'bg-teal-50',
      borderColor: 'border-[#00A896]/30'
    },
    {
      id: 'montessori-toys',
      title: 'Sentra Mainan Kayu & Loose Parts',
      category: 'Stimulasi Motorik & Logika',
      iconEmoji: '🧱',
      tag: 'Kayu Alami Non-Toxic',
      description: 'Koleksi balok kayu pinus alami, loose parts batuan halus, biji-bijian, dan mainan sensorik tanpa sudut runcing yang mengasah imajinasi spasial.',
      features: [
        '100% kayu alami tanpa zat pewarna kimia berbahaya',
        'Desinfeksi rutin sinar UV dan ozon setiap sore',
        'Tersusun rapi dalam keranjang anyaman terbuka'
      ],
      safetyStandard: 'Sertifikasi SNI Mainan Anak & Desinfeksi UV Harian',
      image: 'https://images.unsplash.com/photo-1566378246594-5b1e222e9124?auto=format&fit=crop&w=600&q=80',
      bgColor: 'bg-amber-50',
      borderColor: 'border-[#F39C12]/30'
    },
    {
      id: 'green-spaces',
      title: 'Taman Hijau & Mini Eco-Garden',
      category: 'Area Terbuka Hijau & Alam',
      iconEmoji: '🌿',
      tag: 'Outdoor Eco-Play',
      description: 'Area rumput alami, kebun sayur santri cilik, kolam ikan terapi, dan jalur sensorik bebatuan sungai untuk mengenalkan anak pada keagungan alam semesta.',
      features: [
        'Kebun hidroponik & pot tanah sayur organik',
        'Area rumput empuk untuk senam & bermain bola',
        'Peneduh pohon rindang & tanaman herbal beraroma'
      ],
      safetyStandard: 'Bebas Pestisida Kimiawi & Pagar Pengaman Anak',
      image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=600&q=80',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-500/30'
    },
    {
      id: 'sensory-gym',
      title: 'Indoor Sensory Gym & Softplay',
      category: 'Sensori Motor & Keseimbangan',
      iconEmoji: '🤸',
      tag: 'Lantai Busa Tebal',
      description: 'Gymnasium mini indoor dengan matras busa berketebalan tinggi, terowongan merangkak, balok titian keseimbangan, dan ayunan vestibular pelindung leher.',
      features: [
        'Lantai tatami busa antibakteri tebal 5cm',
        'Pelindung dinding empuk (wall padding)',
        'Alat stimulasi vestibular & proprioseptif teruji'
      ],
      safetyStandard: 'Peredam Benturan Maksimum & Pengawasan Instruktur Khusus',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'nap-suites',
      title: 'Kamar Tidur Bayi & Balita Higienis',
      category: 'Istirahat & Pemulihan Energi',
      iconEmoji: '🛏️',
      tag: 'Sprei Katun Organik',
      description: 'Ruang istirahat tenang ber-AC dengan pembersih udara HEPA, dipan rendah berpagar halus, sprei katun Jepang organik dicuci terpisah untuk tiap anak.',
      features: [
        'Air Purifier HEPA H13 penangkal virus & alergen',
        'Suhu sejuk stabil 24-26°C dengan aromaterapi lavender alami',
        'Boks bayi kayu individual & matras ortopedi balita'
      ],
      safetyStandard: 'Sistem 1 Anak 1 Kasur/Sprei & Bebas Tungau Debu',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-400/30'
    },
    {
      id: 'live-cctv',
      title: 'Live Parent Portal & CCTV 24 Jam',
      category: 'Transparansi & Keamanan Digital',
      iconEmoji: '📹',
      tag: 'Akses Real-Time',
      description: 'Sistem pengawasan kamera HD di seluruh sudut aktivitas (ruang makan, ruang bermain, area tidur) yang dapat diakses orang tua secara terenkripsi.',
      features: [
        'Aplikasi mobile Parent Portal dengan otentikasi aman',
        'Laporan harian digital (makan, tidur, BAB/BAK, mood)',
        'Petugas keamanan 24 jam dengan akses pintu kartu RFID'
      ],
      safetyStandard: 'Enkripsi Data SSL 256-bit & Gerbang Akses Terkontrol',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-400/30'
    }
  ];

  return (
    <section id="fasilitas-section" className="py-16 md:py-24 bg-[#FAF7F0] relative overflow-hidden scroll-mt-16 border-b border-amber-900/10">
      
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 bg-paper-texture opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#FEF9E7] border border-[#F39C12]/40 text-[#C37932] px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lingkungan Belajar &amp; Pengasuhan Ramah Anak</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#16332A] tracking-tight mb-4">
            Fasilitas Standar Tinggi, Bersih, dan Beradab
          </h2>

          <p className="text-[#16332A]/80 text-sm sm:text-base leading-relaxed">
            Setiap sudut ruangan dirancang dengan material aman tanpa racun, perabotan membulat, ruang terbuka hijau, serta sistem keamanan modern untuk kenyamanan optimal ananda.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {facilitiesList.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setSelectedFacility(facility)}
              className="bg-white rounded-3xl p-6 border border-amber-900/10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${facility.bgColor} border ${facility.borderColor} flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                    {facility.iconEmoji}
                  </div>

                  <span className="text-[11px] font-bold text-[#00A896] bg-teal-50 px-3 py-1 rounded-full border border-[#00A896]/20">
                    {facility.tag}
                  </span>
                </div>

                <div className="text-[10px] font-extrabold text-[#C37932] uppercase tracking-wider mb-1">
                  {facility.category}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#16332A] mb-2.5 group-hover:text-[#00A896] transition-colors leading-snug">
                  {facility.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {facility.description}
                </p>
              </div>

              {/* Highlights & Trigger */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-500 text-[11px] flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  Higienis &amp; Teruji
                </span>

                <span className="text-[#00A896] font-bold flex items-center group-hover:underline">
                  <Eye className="w-3.5 h-3.5 mr-1" />
                  Lihat Detail
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Detail Modal */}
        {selectedFacility && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <div className={`text-3xl p-3 rounded-2xl ${selectedFacility.bgColor} border ${selectedFacility.borderColor}`}>
                  {selectedFacility.iconEmoji}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#C37932] uppercase tracking-wider">
                    {selectedFacility.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#16332A]">
                    {selectedFacility.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-5">
                {selectedFacility.description}
              </p>

              <div className="bg-[#FAF7F0] p-4 rounded-2xl mb-4 border border-amber-200/80">
                <h5 className="text-xs font-bold text-[#00473A] uppercase tracking-wider mb-2.5 flex items-center">
                  <Sparkles className="w-4 h-4 text-[#F39C12] mr-1.5" />
                  Fitur Unggulan Fasilitas:
                </h5>
                <ul className="space-y-2 text-xs text-gray-700">
                  {selectedFacility.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#00A896] mr-2 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50 p-3.5 rounded-2xl mb-6 border border-emerald-200">
                <div className="text-[11px] font-bold text-emerald-800 flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-600" />
                  <span>Standar Keamanan: {selectedFacility.safetyStandard}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedFacility(null)}
                className="w-full bg-[#00473A] hover:bg-[#006C59] text-white py-3 rounded-xl font-bold text-xs transition cursor-pointer"
              >
                Tutup Info Fasilitas
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
