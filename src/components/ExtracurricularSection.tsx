import React from 'react';
import { Target, Waves, Music, Shield, Sparkles, UtensilsCrossed, Star } from 'lucide-react';

interface ExtraItem {
  id: string;
  title: string;
  category: string;
  age: string;
  icon: React.ReactNode;
  colorClass: string;
  bgColor: string;
  description: string;
  benefits: string[];
}

const EXTRACURRICULAR_ITEMS: ExtraItem[] = [
  {
    id: 'panahan',
    title: 'Panahan Cilik (Kids Archery)',
    category: 'Olahraga Sunnah & Fokus',
    age: 'TK A & TK B (4 - 6 Thn)',
    icon: <Target className="w-6 h-6 text-amber-600" />,
    colorClass: 'border-amber-300 text-amber-700',
    bgColor: 'bg-amber-50',
    description: 'Menggunakan busur & anak panah busa pengaman berujung vakum khusus anak. Melatih konsentrasi penglihatan, ketenangan napas, dan ketegapan postur tubuh.',
    benefits: ['Meningkatkan rentang fokus & ketenangan mental', 'Melatih kekuatan otot bahu & koordinasi mata-tangan']
  },
  {
    id: 'renang',
    title: 'Renang Cilik & Water Play',
    category: 'Ketangkasan Fisik & Relaksasi',
    age: 'Toddler, KOBer & TK',
    icon: <Waves className="w-6 h-6 text-blue-600" />,
    colorClass: 'border-blue-300 text-blue-700',
    bgColor: 'bg-blue-50',
    description: 'Bermain air terarah di kolam khusus balita dengan kedalaman 30-50 cm air hangat suam-kuku. Menghilangkan rasa takut air dan melatih reflek pernapasan.',
    benefits: ['Menguatkan paru-paru dan stamina kardiovaskular', 'Menstimulasi seluruh otot tubuh tanpa beban sendi']
  },
  {
    id: 'angklung-tari',
    title: 'Angklung Cilik & Tari Sunda',
    category: 'Seni Budaya & Harmoni',
    age: 'KOBer, TK A & TK B',
    icon: <Music className="w-6 h-6 text-emerald-600" />,
    colorClass: 'border-emerald-300 text-emerald-700',
    bgColor: 'bg-emerald-50',
    description: 'Mengenal nada pentatonis dan diatonis melalui alat musik bambu angklung serta gerak tari tradisional Sunda yang santun dan gembira.',
    benefits: ['Melatih pendengaran musikal dan kerjasama tim (ensemble)', 'Menumbuhkan kecintaan pada warisan budaya daerah']
  },
  {
    id: 'silat',
    title: 'Pencak Silat Usia Dini',
    category: 'Bela Diri Karakter & Disiplin',
    age: 'TK A & TK B (4 - 6 Thn)',
    icon: <Shield className="w-6 h-6 text-red-600" />,
    colorClass: 'border-red-300 text-red-700',
    bgColor: 'bg-red-50',
    description: 'Jurus dasar bela diri nusantara yang disesuaikan dengan anatomi anak. Mengutamakan sikap ksatria, penghormatan pada guru, dan ketangkasan menghindar.',
    benefits: ['Membangun rasa percaya diri dan ketangkasan gerak', 'Melatih disiplin mematuhi komando instruktur']
  },
  {
    id: 'little-scientist',
    title: 'Little Scientist & Cooking Class',
    category: 'STEM & Keterampilan Hidup',
    age: 'Semua Jenjang',
    icon: <UtensilsCrossed className="w-6 h-6 text-purple-600" />,
    colorClass: 'border-purple-300 text-purple-700',
    bgColor: 'bg-purple-50',
    description: 'Eksperimen seru: membuat gunung berapi soda kue, pelangi dalam gelas, serta menghias bento sehat dan memanggang kue kering sendiri.',
    benefits: ['Mengembangkan rasa ingin tahu ilmiah (scientific inquiry)', 'Mengenal kebersihan makanan dan adab dapur halal']
  },
  {
    id: 'drumband',
    title: 'Drumband Cilik Gita Asih',
    category: 'Musikalitas & Kekompakan',
    age: 'TK A & TK B',
    icon: <Sparkles className="w-6 h-6 text-rose-600" />,
    colorClass: 'border-rose-300 text-rose-700',
    bgColor: 'bg-rose-50',
    description: 'Permainan marching band mini menggunakan pianika, snare drum mini, dan simbal anak. Rutin tampil pada wisuda dan semarak milad yayasan.',
    benefits: ['Melatih kepekaan ritme, tempo, dan koordinasi motorik', 'Menumbuhkan keberanian tampil di depan khalayak luas']
  }
];

export const ExtracurricularSection: React.FC = () => {
  return (
    <section id="ekstrakurikuler-section" className="py-16 md:py-24 bg-white scroll-mt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-asih-orange px-4 py-1 rounded-full text-xs font-bold mb-3 border border-amber-200 shadow-2xs">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Pengembangan Bakat & Minat Santri Cilik</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-asih-green mb-3">
            Ekstrakurikuler Unggulan
          </h2>
          <div className="w-24 h-1 bg-asih-orange mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Wadah ekspresi positif untuk mengasah potensi majemuk anak sejak dini dengan instruktur ramah anak dan peralatan aman terstandarisasi.
          </p>
        </div>

        {/* Extracurricular Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {EXTRACURRICULAR_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-3xl border-2 ${item.colorClass} ${item.bgColor}/30 hover:${item.bgColor}/60 transition duration-300 shadow-xs flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${item.bgColor} border ${item.colorClass} shadow-2xs`}>
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 shadow-2xs">
                    {item.age}
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">
                  {item.category}
                </span>

                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  {item.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start text-xs text-gray-700 font-medium">
                      <span className="text-asih-green font-bold mr-1.5">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200/60 text-[11px] text-gray-500 flex justify-between items-center">
                <span>Jadwal: 1x / pekan</span>
                <span className="font-bold text-asih-green">Didampingi Guru Spesialis</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
