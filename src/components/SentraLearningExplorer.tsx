import React, { useState } from 'react';
import { Sparkles, CheckCircle2, BookOpen, Layers, Lightbulb, Compass, Palette, Music, Compass as CompassIcon, Shield, Heart } from 'lucide-react';
import { CornerSticker } from './PlayfulDecorations';

interface SentraItem {
  id: string;
  name: string;
  slogan: string;
  iconName: string;
  accentColor: string;
  bgLight: string;
  badgeColor: string;
  ageTarget: string;
  description: string;
  mainGoals: string[];
  materialsUsed: string[];
  quote: string;
  stickerType: 'blocks' | 'crayons' | 'puzzle' | 'quran' | 'sprout' | 'hand';
  imageUrl: string;
}

const SENTRA_LIST: SentraItem[] = [
  {
    id: 'sentra-balok',
    name: 'Sentra Balok & Konstruksi',
    slogan: 'Membangun Imajinasi, Logika Spasial & Pemecahan Masalah',
    iconName: 'blocks',
    accentColor: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50/70 border-amber-200',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    ageTarget: 'Toddler, KOBer, TK A & TK B',
    description: 'Anak bereksplorasi menyusun beragam balok kayu unit terstandar, balok busa, dan miniatur lingkungan untuk membangun pemahaman arsitektur, geometri ruang, serta kesabaran berkolaborasi.',
    mainGoals: [
      'Memahami konsep matematika konkret (panjang-pendek, tinggi-rendah, simetri)',
      'Melatih koordinasi visual-spasial dan kekuatan motorik halus jemari',
      'Membiasakan regulasi emosi saat rancang bangun runtuh dan mencoba kembali'
    ],
    materialsUsed: ['Balok Unit Standar Kayu Pinus', 'Miniatur Hewan & Pohon', 'Papan Landasan & Silinder', 'Jalan Raya Miniatur'],
    quote: '"Balok adalah media terbaik untuk melatih arsitek masa depan yang berpikir runut dan logis."',
    stickerType: 'blocks',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS5CPKwrDhyyPgU5iH1jnOFnvTxXElv6RHknftoeIkqNVnTJGnA_ieL1T_a2HaZu0hHKzl8IUeL2Ma2722kXtiQRqPvSuXM0I5ZsbxGksZN-dTpVU8oXcPiZPkQsefPvKCX7NeLlNUmv_3uC39G_WFaDdlUElXejMSlZCfzdArYjLLEUtdtsnylZeh2xXVzPN7PiV-87oCZbOhpokDQ6QPhrUpo9P980Nv7b78NKMTuUVJVvYF9Z-Km0f_8y7v1nNa08klcdnJDksHOw'
  },
  {
    id: 'sentra-bahan-alam',
    name: 'Sentra Bahan Alam & Sains Mini',
    slogan: 'Eksplorasi Tekstur, Air, Pasir, dan Keajaiban Ciptaan Allah',
    iconName: 'sprout',
    accentColor: 'from-emerald-600 to-teal-700',
    bgLight: 'bg-emerald-50/70 border-emerald-200',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    ageTarget: 'Baby Care, Toddler, KOBer, TK',
    description: 'Sentra sensori terkaya dengan bahan alam non-toksik: pasir kinetik, air suam, bebatuan halus, biji-bijian, daun kering, dan playdough alami buatan sendiri untuk menstimulasi 7 indera anak.',
    mainGoals: [
      'Menstimulasi sistem taktil (peraba), vestibular (keseimbangan) & proprioseptif',
      'Mengenalkan eksperimen fisika sederhana (tenggelam-terapung, mengalir, mencampur warna)',
      'Menanamkan rasa takjub dan syukur mendalam pada alam semesta ciptaan Allah'
    ],
    materialsUsed: ['Pasir Silika Higienis & Air', 'Biji-Bijian & Kerikil Sungai Halus', 'Kaca Pembesar Balita', 'Pipet Tetes & Corong Warna'],
    quote: '"Bermain kotor yang terkontrol adalah nutrisi emas bagi kematangan sistem saraf anak."',
    stickerType: 'sprout',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOsLQegnCLZkoCDLv4cbxA4n0s5BsxxMUKn2Ylm3EJPL86qya4skXuwADHzZubBmJ9-cD_HgH7g5kOKmvt59N1fXm_4Fu7wsDKf-siV9d6w6cjN0XPjeHyVZZCBXCScMY9u3sDr-pvdkuJ5jWgIpw_5Vag_RFcm7A4fc228-XVXEglSd-JeDxrNeKkXpZ-BgMnEtLX6CK03sKbgqCW2B-LpNOtTZzivcxwRxlQ4plp5n8Yg3ZbiTAwBOqxHeXAV3IKu0Qse4dP108gdQ'
  },
  {
    id: 'sentra-main-peran',
    name: 'Sentra Main Peran (Makro & Mikro)',
    slogan: 'Menumbuhkan Empati Sosial, Bahasa, dan Adab Bergaul',
    iconName: 'heart',
    accentColor: 'from-rose-500 to-pink-600',
    bgLight: 'bg-rose-50/70 border-rose-200',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    ageTarget: 'Toddler, KOBer, TK A & TK B',
    description: 'Dua zona bermain peran: Peran Makro (kostum dokter, koki, pemadam, pasar swalayan) dan Peran Mikro (boneka keluarga mini, rumah-rumahan) untuk melatih kecerdasan interpersonal.',
    mainGoals: [
      'Memperkaya perbendaharaan kosa kata dan keberanian mengekspresikan pendapat',
      'Memahami aturan sosial (antre, bertukar peran, minta tolong, berterima kasih)',
      'Menyalurkan emosi secara sehat melalui skenario cerita keseharian'
    ],
    materialsUsed: ['Kostum Profesi Ramah Anak', 'Dapur Kayu & Replika Makanan Sehat', 'Stetoskop & Kasir Mainan', 'Boneka Jari Karakter Islami'],
    quote: '"Melalui bermain peran, anak belajar melihat dunia dari sudut pandang orang lain."',
    stickerType: 'hand',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF1_AiY0ZU-dkOGNSqDpDPbbi3rsxvGTyVNLN3oLTYmMR7kgeQA_TGLm0z4DuP0tQuyHSVowluj7ivfX-i2TXEuvBdPvg8oYwf1CvLVNwRS20L4d6l16pKx8f8Dpt0VeetDCoosw4HWvyne5dEcINStfNxZut1D2ul_V4e91WGWSJbOAQ5dc9UucOTnnKCzQXR3A7rKgfUh3hHuOfQmgS0Dk6oFeyGsjXwnI90hvWQJPzq4Kwuz96WjyKi55eu0KNBN_W3IJDIOMKXQQ'
  },
  {
    id: 'sentra-seni',
    name: 'Sentra Seni, Kreasi & Kolase',
    slogan: 'Melejitkan Estetika, Motorik Halus, dan Orisinalitas',
    iconName: 'palette',
    accentColor: 'from-purple-500 to-indigo-600',
    bgLight: 'bg-purple-50/70 border-purple-200',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    ageTarget: 'Semua Kelompok Usia',
    description: 'Ruang kebebasan berkarya seni rupa tanpa dinilai salah/benar. Melukis dengan jari (finger painting), mencetak dengan pelepah pisang, menggunting ramah balita, dan meronce manik kayu.',
    mainGoals: [
      'Memperkuat otot intrinsik tangan dan kekuatan genggaman (persiapan menulis)',
      'Mengenalkan pencampuran warna primer dan sekunder secara visual',
      'Membangun rasa bangga atas hasil karya orisinal sendiri'
    ],
    materialsUsed: ['Cat Air Berbasis Makanan (Food-Grade)', 'Kuas Kayu Aneka Ukuran', 'Gunting Khusus Ujung Tumpul', 'Kertas Tekstur & Daun Kering'],
    quote: '"Setiap goresan warna anak adalah bahasa jiwa yang jujur dan indah."',
    stickerType: 'crayons',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL8IW1oLNKCA3Kum9IoF3QF6yhx91kVHhiPcQ4d5oDm0t82056OIKjCdyQTet8bomuxVK85dLYN7KQAQtz9bS04D3vN1fKX3VyqLHaYdX5Y-mCfWDpu5jMN-fIEKwH_8a0DFuimpo8gNiDfhnOKC_1lguKhvQkbt5eGUxuBuLi1ehaOOq49zSUN2jagIKJw-p3PLiOCzIKVTPO9ZNG9a9SDvZYWnlX8TeIsLv1BCXWKXda7Gg3ovfQRjV49bLrC6g-iG4At2KN_fkjow'
  },
  {
    id: 'sentra-imtaq',
    name: 'Sentra Imtaq & Tahfidz Balita',
    slogan: 'Menanamkan Cahaya Iman, Adab Qur\'ani & Shalat Ceria',
    iconName: 'quran',
    accentColor: 'from-emerald-700 to-teal-800',
    bgLight: 'bg-emerald-50/70 border-emerald-300',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    ageTarget: 'Semua Kelompok Usia',
    description: 'Pusat spiritualitas ramah balita. Pembiasaan wudhu mandiri, shalat dhuha berjamaah di sajadah warna-warni, mendengarkan kisah nabi berboneka tangan, dan murottal juz 30 merdu.',
    mainGoals: [
      'Menghafal surat pendek Juz 30 dan doa-doa thoyyibah harian dengan fasih',
      'Mengenal huruf hijaiyah berharakat melalui media kartu taktil timbul',
      'Membiasakan adab sunnah (makan tangan kanan, mengucap salam, menghormati orang tua)'
    ],
    materialsUsed: ['Sajadah Mini Lembut', 'Kartu Hijaiyah Kayu Timbul', 'Puzzle Ka\'bah & Manasik Haji', 'Audio Murottal Qari Anak'],
    quote: '"Kecintaan pada Al-Qur\'an yang ditanam sejak dini akan menjadi pelindung hidup selamanya."',
    stickerType: 'quran',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQHcmhX1DlRVmtggkftbiUS4H2miIjXPk8dVtRmuBKw-mKL4GhQvc_SVRJPBQ4prs8-i5sg_ehm7AuEbBuZjjRsHxaJ5U7aBbze3eHXtxXyTKVqmVwGJuOVb7Fz2Zkv-fezqPbMow6KDK25ejyic765RUBj5ZqCcVH3boIv8hETEnrNJGqAmMbA2ph4Np6DBV0E4EF31J8EvB-utR19IhwAK_5ESY9Fydb1oIJkQZCAkoyt4TfelR0msFMZnZC_pr9CS82DzUz2XmVDQ'
  },
  {
    id: 'sentra-persiapan',
    name: 'Sentra Persiapan (Calistung Alami)',
    slogan: 'Kesiapan Literasi & Numerasi Menuju SD/MI Tanpa Beban Tekanan',
    iconName: 'puzzle',
    accentColor: 'from-blue-600 to-cyan-700',
    bgLight: 'bg-blue-50/70 border-blue-200',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    ageTarget: 'KOBer, TK A & TK B',
    description: 'Pengenalan membaca, menulis, dan berhitung melalui permainan tebak kata fonik, puzzle suku kata magnetik, dan benda konkret hitung tanpa lembar kerja hafalan yang membosankan.',
    mainGoals: [
      'Mengenali fonik bunyi huruf dan merangkai kata dengan senang hati',
      'Memahami konsep penambahan dan pengurangan benda nyata (loose parts)',
      'Melatih fokus duduk dan mengikuti instruksi bertingkat (kesiapan masuk MI/SD)'
    ],
    materialsUsed: ['Kartu Kata Fonik Bergambar', 'Papan Huruf Magnetik', 'Batang Hitung Kayu Cuisenaire', 'Buku Cerita Bergambar Interaktif'],
    quote: '"Membaca adalah petualangan magis, bukan kewajiban yang menakutkan."',
    stickerType: 'puzzle',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsFFksyetlFPg2kKU4rxaIxmUxYjKRj-S8VIdFAiqs2v6rQLf0BMN3e2RPpkk_BHUetHC1X10KGSLKcXz_FLSRi-vluWrsGGg3POY8Ej8jh8VF9YA063aBDaUk1bXRZKUAxVxskOblMPCQNPywMT7BWIXoQrygc6e6V5C_P80k9qvqUhdHBn_urfweTCNA-efcllLro1f3V5yVVVALFQRVtx19NU0p5GUSljGu6mb8M0NvBRsCaj_TDq8R-an0HVQFDJQd1BtGCDojZw'
  }
];

export const SentraLearningExplorer: React.FC = () => {
  const [activeSentraId, setActiveSentraId] = useState<string>('sentra-balok');

  const currentSentra = SENTRA_LIST.find((s) => s.id === activeSentraId) || SENTRA_LIST[0];

  return (
    <section id="sentra-bcct-section" className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/40 to-white relative overflow-hidden scroll-mt-16">
      {/* Playful Floating Doodles */}
      <div className="absolute top-8 left-8 text-amber-300/40 text-3xl select-none pointer-events-none">✦</div>
      <div className="absolute bottom-10 right-10 text-emerald-300/50 text-2xl select-none pointer-events-none">✿</div>
      <div className="absolute top-1/2 left-4 text-rose-300/50 text-xl select-none pointer-events-none">♥</div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100/90 text-asih-orange px-4 py-1.5 rounded-full text-xs font-bold mb-3 border border-amber-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kurikulum Merdeka PAUD Berbasis Sentra (BCCT)</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-asih-green mb-3">
            Eksplorasi Sentra Belajar Santri Cilik
          </h2>
          <div className="w-24 h-1 bg-asih-orange mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Metode <em>Beyond Centers and Circle Time</em> (BCCT) menempatkan anak sebagai penemu aktif. Setiap sentra dirancang khusus menstimulasi kecerdasan majemuk (multiple intelligences) sesuai fitrah usianya.
          </p>
        </div>

        {/* Sentra Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 max-w-5xl mx-auto">
          {SENTRA_LIST.map((sentra) => {
            const isSelected = sentra.id === activeSentraId;
            return (
              <button
                key={sentra.id}
                onClick={() => setActiveSentraId(sentra.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center space-x-2 border ${
                  isSelected
                    ? 'bg-asih-green text-white border-asih-green shadow-md scale-102 ring-2 ring-emerald-200'
                    : 'bg-white text-gray-700 border-amber-200/80 hover:border-asih-orange hover:bg-amber-50/50 shadow-2xs'
                }`}
              >
                <span>{sentra.name.split('&')[0]}</span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse"></span>}
              </button>
            );
          })}
        </div>

        {/* Sentra Feature Detail Showcase Box */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border-2 border-amber-200 shadow-xl overflow-hidden animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Image & Quote Panel */}
            <div className="lg:col-span-5 relative bg-amber-50 p-6 flex flex-col justify-between overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden shadow-md mb-4 group">
                <img
                  src={currentSentra.imageUrl}
                  alt={currentSentra.name}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Corner Sticker */}
                <div className="absolute top-3 right-3">
                  <CornerSticker type={currentSentra.stickerType} />
                </div>

                {/* Age Target Badge */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  👶 Usia: {currentSentra.ageTarget}
                </div>
              </div>

              {/* Ustadzah Quote Box */}
              <div className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-amber-200 shadow-xs text-xs text-gray-700 italic">
                <p className="mb-2">{currentSentra.quote}</p>
                <div className="flex items-center space-x-2 not-italic font-bold text-[11px] text-asih-green">
                  <span>★ Ustadzah Sentra Asih Putera</span>
                </div>
              </div>
            </div>

            {/* Right Detailed Content */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`text-[11px] font-bold px-3 py-0.5 rounded-full border ${currentSentra.badgeColor}`}>
                    Sentra Inti PAUD Asih Putera
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-asih-green mb-2">
                  {currentSentra.name}
                </h3>
                
                <p className="text-xs sm:text-sm font-semibold text-asih-orange mb-4">
                  {currentSentra.slogan}
                </p>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {currentSentra.description}
                </p>

                {/* Key Developmental Goals */}
                <div className="mb-5">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2.5 flex items-center">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500 mr-1.5" />
                    Target Perkembangan & Stimulasi:
                  </h4>
                  <div className="space-y-2">
                    {currentSentra.mainGoals.map((goal, idx) => (
                      <div key={idx} className="flex items-start text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0" />
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Materials & Loose Parts Used */}
                <div className="bg-amber-50/50 p-3.5 rounded-2xl border border-amber-100 mb-4">
                  <span className="text-[11px] font-bold text-gray-600 block mb-1.5 uppercase tracking-wide">
                    Media & Alat Main Alami (Loose Parts):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentSentra.materialsUsed.map((mat, i) => (
                      <span key={i} className="bg-white px-2.5 py-1 rounded-lg text-xs font-medium text-asih-green border border-amber-200/60 shadow-2xs">
                        ✦ {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Rotasi Sentra: Berganti tema setiap pekan</span>
                <span className="text-emerald-700 font-semibold">100% Screen-Free</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
