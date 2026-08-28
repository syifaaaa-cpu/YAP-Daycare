import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Check, Info, X, Play, Pause, Compass, Sprout, Droplets, BookOpen, Utensils, Heart, Layers } from 'lucide-react';
import { FeaturedProgram } from '../types';

interface FeaturedProgramsSectionProps {
  onLearnProgramDetails?: (program: FeaturedProgram) => void;
}

interface HotspotItem {
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  badge: string;
  description: string;
  skill: string;
}

interface CurriculumSlide {
  id: string;
  title: string;
  category: string;
  ageTarget: string;
  imageUrl: string;
  description: string;
  color: string;
  lightColor: string;
  hotspots: HotspotItem[];
  pedagogyFocus: string[];
}

export const FeaturedProgramsSection: React.FC<FeaturedProgramsSectionProps> = ({ onLearnProgramDetails }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<HotspotItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const curriculumData: CurriculumSlide[] = [
    {
      id: 'berkebun-ceria',
      title: 'Berkebun Ceria & Little Eco-Farmer',
      category: 'Eksplorasi Alam & Sains Hayati',
      ageTarget: '2 - 6 Tahun',
      imageUrl: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=900&q=80',
      description: 'Anak-anak belajar menanam benih sayuran organik, menyiram dengan sekop & ceret cilik, merasakan tekstur tanah subur, serta mengenal siklus air dan rasa syukur pada Sang Pencipta.',
      color: '#00A896',
      lightColor: '#E0F7F6',
      pedagogyFocus: ['Motorik Kasar & Halus', 'Cinta Lingkungan & Sains Hijau', 'Kesabaran & Tanggung Jawab'],
      hotspots: [
        {
          x: 35,
          y: 45,
          title: 'Berkebun Ceria',
          badge: '🌱 Stimulasi Alami',
          description: 'Menggenggam sekop mini melatih kekuatan cengkeraman jari (tripod grasp) sebelum belajar menulis.',
          skill: 'Motorik Halus & Sensorik Tanah'
        },
        {
          x: 70,
          y: 65,
          title: 'Siram Tanaman',
          badge: '💧 Adab Merawat',
          description: 'Melatih konsentrasi dan koordinasi dua tangan saat mengalirkan air ke pot tanaman.',
          skill: 'Kemandirian & Regulasi Diri'
        }
      ]
    },
    {
      id: 'bermain-sensorik',
      title: 'Bermain Sensorik (Water & Kinetic Sand Play)',
      category: 'Sensory & Motor Integration',
      ageTarget: '1 - 5 Tahun',
      imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80',
      description: 'Aktivitas bermain air terpadu, pasir kinetik aman food-grade, corong warna-warni, dan busa sabun alami yang menenangkan sistem saraf serta mengasah rasa ingin tahu ilmiah.',
      color: '#4A90E2',
      lightColor: '#EBF5FB',
      pedagogyFocus: ['Sensory Processing', 'Eksplorasi Tekstur & Suhu', 'Regulasi Emosi & Ketelitian'],
      hotspots: [
        {
          x: 42,
          y: 50,
          title: 'Bermain Sensorik',
          badge: '✨ Sensory Gym',
          description: 'Meraba berbagai tekstur pasir dan cairan merangsang jutaan koneksi saraf di otak anak usia emas.',
          skill: 'Integrasi Sensori & Ketenangan'
        },
        {
          x: 75,
          y: 35,
          title: 'Tuang & Takar',
          badge: '🧪 Konsep Sains Dasar',
          description: 'Mengenal konsep volume isi, berat jenis, dan sebab-akibat secara langsung dan menyenangkan.',
          skill: 'Logika Matematika Awal'
        }
      ]
    },
    {
      id: 'storytelling-panggung',
      title: 'Group Storytelling & Panggung Boneka',
      category: 'Bahasa, Literasi & Akhlak',
      ageTarget: '1.5 - 6 Tahun',
      imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80',
      description: 'Mendengarkan dongeng kisah para Nabi, fabel hewan Al-Qur\'an berkarakter mulia melalui buku pop-out 3D, boneka tangan, dan panggung teater santri cilik.',
      color: '#F39C12',
      lightColor: '#FEF9E7',
      pedagogyFocus: ['Kosakata & Artikulasi Bahasa', 'Empati & Kecerdasan Emosional', 'Daya Imajinasi & Fokus Menyimak'],
      hotspots: [
        {
          x: 50,
          y: 40,
          title: 'Kisah Sahabat & Hewan',
          badge: '📖 Literasi Bergambar',
          description: 'Melatih kemampuan menyimak aktif dan mengidentifikasi nilai kebaikan (adab) dalam cerita.',
          skill: 'Pemahaman Moral & Bahasa'
        },
        {
          x: 25,
          y: 60,
          title: 'Boneka Tangan',
          badge: '🎭 Panggung Imajinasi',
          description: 'Santri cilik berani mengekspresikan pendapat dan berdialog santun di depan teman-temannya.',
          skill: 'Percaya Diri & Komunikasi'
        }
      ]
    },
    {
      id: 'little-chef',
      title: 'Little Chef & Dapur Halal Cilik',
      category: 'Practical Life Skills & Gizi',
      ageTarget: '2.5 - 6 Tahun',
      imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
      description: 'Santri cilik meracik buah segar, menguleni adonan roti sehat tanpa pengawet, menghias bento halal, dan mempraktikkan adab makan Rasulullah SAW.',
      color: '#E76F51',
      lightColor: '#FDEDEC',
      pedagogyFocus: ['Kemandirian Makan Sendiri', 'Edukasi Makanan Sehat Bergizi', 'Koordinasi Mata & Tangan'],
      hotspots: [
        {
          x: 48,
          y: 52,
          title: 'Meracik Buah',
          badge: '🍎 Practical Life',
          description: 'Memotong buah lunak dengan pisau tumpul ramah anak menumbuhkan rasa bangga dan mandiri.',
          skill: 'Kemandirian & Adab Makan'
        }
      ]
    },
    {
      id: 'tahfidz-balita',
      title: 'Tahfidz Balita & Shalat Dhuha Ceria',
      category: 'Spiritualitas & Pembiasaan Doa',
      ageTarget: '2 - 6 Tahun',
      imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
      description: 'Mengenalkan bacaan Al-Qur\'an dengan metode irama santun, gerakan visual ceria, wudhu mandiri, dan shalat berjamaah di musholla mini yang bersih dan wangi.',
      color: '#00473A',
      lightColor: '#E8F5E9',
      pedagogyFocus: ['Hafalan Juz 30 Bertahap', 'Adab Menghadap Allah SWT', 'Ketenangan Jiwa & Kedisiplinan'],
      hotspots: [
        {
          x: 55,
          y: 48,
          title: 'Irama Murattal Balita',
          badge: '🕌 Cinta Al-Qur\'an',
          description: 'Hafalan surat pendek diperdengarkan secara rutin lewat senandung alami dan visual ceria.',
          skill: 'Fitrah Spiritual & Daya Ingat'
        }
      ]
    }
  ];

  const currentSlide = curriculumData[currentSlideIndex];

  const handleNext = () => {
    setActiveHotspot(null);
    setCurrentSlideIndex((prev) => (prev + 1) % curriculumData.length);
  };

  const handlePrev = () => {
    setActiveHotspot(null);
    setCurrentSlideIndex((prev) => (prev - 1 + curriculumData.length) % curriculumData.length);
  };

  return (
    <section id="program-unggulan-section" className="py-16 md:py-24 bg-[#FAF7F0] relative overflow-hidden scroll-mt-16 border-b border-amber-900/10">
      
      {/* Background Subtle Stars Texture */}
      <div className="absolute inset-0 bg-geometric-stars opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#FEF9E7] border border-[#F39C12]/40 text-[#C37932] px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Curriculum Explorer</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#16332A] tracking-tight mb-3">
            Aktivitas Bermain &amp; Stimulasi Holistik
          </h2>

          <p className="text-[#16332A]/80 text-sm sm:text-base leading-relaxed">
            Klik ikon yang berpendar (<em>pulsing hotspot</em>) pada setiap aktivitas untuk melihat target capaian tumbuh kembang dan stimulasi sensorik santri cilik.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto">
          
          {/* Main Slide Card */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-amber-900/10 relative overflow-hidden">
            
            {/* Top Navigation & Tag Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center space-x-2.5">
                <span 
                  className="text-xs font-extrabold px-3 py-1.5 rounded-full text-white shadow-xs"
                  style={{ backgroundColor: currentSlide.color }}
                >
                  {currentSlide.category}
                </span>

                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                  Sasaran: {currentSlide.ageTarget}
                </span>
              </div>

              {/* Stylized Prev/Next Arrow Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-[#FAF7F0] hover:bg-[#00A896] hover:text-white text-[#16332A] border border-gray-200 flex items-center justify-center transition shadow-xs cursor-pointer group"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                <div className="text-xs font-extrabold text-[#16332A] px-2">
                  <span className="text-[#00A896]">{currentSlideIndex + 1}</span> / {curriculumData.length}
                </div>

                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-[#FAF7F0] hover:bg-[#00A896] hover:text-white text-[#16332A] border border-gray-200 flex items-center justify-center transition shadow-xs cursor-pointer group"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Main Interactive Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left 7 Columns: Photo with Pulsing Hotspots */}
              <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={currentSlide.imageUrl}
                  alt={currentSlide.title}
                  className="w-full h-72 sm:h-96 object-cover transform hover:scale-102 transition duration-500"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

                {/* Pulsing Hotspot Hotspots */}
                {currentSlide.hotspots.map((spot, idx) => (
                  <div
                    key={idx}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <button
                      onClick={() => setActiveHotspot(activeHotspot?.title === spot.title ? null : spot)}
                      className="relative flex items-center justify-center group cursor-pointer focus:outline-hidden"
                      aria-label={`Hotspot ${spot.title}`}
                    >
                      {/* Pulsing Ring Animation */}
                      <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-[#00A896] opacity-75"></span>
                      
                      {/* Inner Button */}
                      <span className="relative inline-flex rounded-full h-9 w-9 bg-white border-2 border-[#00A896] text-[#00A896] shadow-xl items-center justify-center font-bold text-xs hover:scale-110 transition-transform">
                        <Sparkles className="w-4 h-4 fill-current text-[#F39C12]" />
                      </span>
                    </button>
                  </div>
                ))}

                {/* Hotspot Floating Popup Banner if Active */}
                {activeHotspot && (
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border-2 border-[#00A896] z-30 animate-in fade-in slide-in-from-bottom-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-extrabold text-[#00A896] bg-teal-50 px-2.5 py-0.5 rounded-full">
                          {activeHotspot.badge}
                        </span>
                        <h4 className="font-serif font-bold text-sm text-[#16332A]">
                          {activeHotspot.title}
                        </h4>
                      </div>
                      <button
                        onClick={() => setActiveHotspot(null)}
                        className="text-gray-400 hover:text-gray-600 p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-gray-700 mt-1.5 leading-relaxed">
                      {activeHotspot.description}
                    </p>

                    <div className="mt-2 text-[11px] font-bold text-[#C37932] flex items-center">
                      <Check className="w-3.5 h-3.5 mr-1" />
                      <span>Fokus Stimulasi: {activeHotspot.skill}</span>
                    </div>
                  </div>
                )}

                {/* Bottom Photo Caption */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#00A896] mr-1.5 animate-pulse"></span>
                  Klik titik bercahaya untuk detail
                </div>
              </div>

              {/* Right 5 Columns: Text Details & Pedagogical Milestones */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#16332A] mb-3 leading-snug">
                    {currentSlide.title}
                  </h3>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {currentSlide.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                      Capaian Tumbuh Kembang:
                    </div>
                    {currentSlide.pedagogyFocus.map((focus, fIdx) => (
                      <div key={fIdx} className="flex items-center text-xs font-semibold text-[#16332A] bg-[#FAF7F0] p-2.5 rounded-xl border border-amber-900/5">
                        <div className="w-5 h-5 rounded-lg bg-[#00A896] text-white flex items-center justify-center mr-2.5 shrink-0 text-[10px]">
                          ✓
                        </div>
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-[11px] text-gray-500">
                    Didampingi Guru Bersertifikasi PAUD
                  </div>

                  <button
                    onClick={() => onLearnProgramDetails?.({
                      id: currentSlide.id,
                      title: currentSlide.title,
                      description: currentSlide.description,
                      imageUrl: currentSlide.imageUrl,
                      details: `Program ${currentSlide.title} dirancang untuk menstimulasi fitrah belajar anak secara gembira dan berkesinambungan.`,
                      benefits: currentSlide.pedagogyFocus
                    })}
                    className="text-xs font-bold text-[#00A896] hover:text-[#028090] flex items-center group cursor-pointer"
                  >
                    <span>Pelajari Silabus</span>
                    <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>

            {/* Carousel Slide Selector Mini Thumbnails */}
            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {curriculumData.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveHotspot(null);
                    setCurrentSlideIndex(idx);
                  }}
                  className={`p-2.5 rounded-2xl text-left transition-all border cursor-pointer ${
                    currentSlideIndex === idx
                      ? 'bg-[#E0F7F6] border-[#00A896] shadow-sm'
                      : 'bg-[#FAF7F0] border-transparent hover:border-gray-200'
                  }`}
                >
                  <div className="text-[10px] font-bold text-[#00A896] uppercase truncate">
                    0{idx + 1}. {item.category.split(' ')[0]}
                  </div>
                  <div className="text-xs font-extrabold text-[#16332A] truncate">
                    {item.title.split(' ')[0]} {item.title.split(' ')[1]}
                  </div>
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
