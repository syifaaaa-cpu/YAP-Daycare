import React, { useState } from 'react';
import { HelpCircle, Sparkles, CheckCircle2, ArrowRight, RotateCcw, Heart, Star, Award } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    points: number;
    tip: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Berapa usia ananda saat ini?',
    options: [
      { text: '6 - 18 Bulan (Bayi)', points: 1, tip: 'Fokus pada stimulasi sensori motorik awal, rutinitas tidur, dan pijat bayi.' },
      { text: '1,5 - 3 Tahun (Batita / Toddler)', points: 2, tip: 'Fase eksplorasi aktif, bahasa awal, dan awal toilet training bertahap.' },
      { text: '3 - 4 Tahun (Pra-TK / KOBer)', points: 3, tip: 'Siap bersosialisasi terstruktur, sentra balok, dan hafalan doa harian.' },
      { text: '4 - 6 Tahun (TK A / TK B)', points: 4, tip: 'Fase kematangan pra-literasi, kemandirian emosi, dan kesiapan masuk SD/MI.' }
    ]
  },
  {
    id: 2,
    question: 'Bagaimana kebiasaan makan dan minum ananda?',
    options: [
      { text: 'Masih disuapi penuh / ASI eksklusif', points: 1, tip: 'Pengasuh bersertifikasi kami akan melatih finger-food mandiri secara bertahap.' },
      { text: 'Bisa makan sendiri namun masih berantakan', points: 2, tip: 'Bagus sekali! Ini langkah awal motorik halus yang akan dimatangkan di sentra.' },
      { text: 'Sudah mandiri makan sendiri dengan rapi', points: 3, tip: 'Hebat! Ananda siap membiasakan adab makan islami prasmanan bersama teman.' }
    ]
  },
  {
    id: 3,
    question: 'Bagaimana respon ananda saat bertemu teman sebaya / suasana baru?',
    options: [
      { text: 'Agak pemalu / butuh waktu adaptasi', points: 1, tip: 'Kami menyediakan program masa adaptasi ramah anak 3-5 hari didampingi bunda.' },
      { text: 'Cukup antusias jika ditemani orang tua', points: 2, tip: 'Interaksi kelompok kecil di Sentra Bermain akan cepat membuat ananda nyaman.' },
      { text: 'Sangat senang bergaul dan aktif bermain', points: 3, tip: 'Ananda memiliki fitrah sosial tinggi dan akan sangat menikmati ragam main sentra!' }
    ]
  },
  {
    id: 4,
    question: 'Bagaimana kesiapan toilet training (buang air) ananda?',
    options: [
      { text: 'Masih menggunakan popok (diaper)', points: 1, tip: 'Pengasuh kami membimbing toilet training tanpa paksaan dan tanpa rasa takut.' },
      { text: 'Sudah mulai memberi tanda jika ingin BAB/BAK', points: 2, tip: 'Toilet balita ergonomis kami siap melatih pembiasaan wudhu dan istinja mandiri.' },
      { text: 'Sudah lepas popok dan mandiri ke toilet', points: 3, tip: 'Luar biasa! Ananda mandiri dan siap menjalani aktivitas seharian dengan nyaman.' }
    ]
  }
];

interface ChildReadinessQuizProps {
  onOpenTrial: () => void;
  onOpenPpdb: () => void;
}

export const ChildReadinessQuiz: React.FC<ChildReadinessQuizProps> = ({ onOpenTrial, onOpenPpdb }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = optionIndex;
    setSelectedAnswers(updated);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswers([]);
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const getRecommendation = () => {
    const ageOption = selectedAnswers[0] || 0;
    if (ageOption === 0) {
      return {
        programName: 'Baby Care Daycare Asih Putera',
        ageGroup: '6 - 18 Bulan',
        recommendationText: 'Ananda sangat cocok bergabung di kelas Baby Care dengan rasio 1:2, stimulasi taktil, pijat bayi, dan pantauan dokter berkala.',
        highlight: 'Pendampingan 1-on-1 Penuh Kasih & Bebas Gawai'
      };
    } else if (ageOption === 1) {
      return {
        programName: 'Toddler Care Daycare Asih Putera',
        ageGroup: '1,5 - 3 Tahun',
        recommendationText: 'Ananda berada di fase emas motorik & bahasa! Toddler Care akan menstimulasi loose-parts play, toilet training sabar, dan kosa kata santun.',
        highlight: 'Sensori Motorik & Adab Islami Sejak Dini'
      };
    } else if (ageOption === 2) {
      return {
        programName: 'Kelompok Bermain (KOBer) / Pra-TK Daycare',
        ageGroup: '3 - 4 Tahun',
        recommendationText: 'Ananda siap memasuki gerbang pra-sekolah formal di KOBer Asih Putera dengan ragam sentra balok, sains bahan alam, dan hafalan surat pendek.',
        highlight: 'Kurikulum Sentra BCCT & Tahfidz Ceria'
      };
    } else {
      return {
        programName: 'Taman Kanak-Kanak (TK A & TK B) Asih Putera',
        ageGroup: '4 - 6 Tahun',
        recommendationText: 'Ananda siap melejitkan kepemimpinan, calistung alami tanpa stres, hafalan Juz 30 pilihan, dan karakter luhur Panca Waluya menuju SD/MI.',
        highlight: 'Akreditasi A Unggul & Kesiapan Masuk SD/MI'
      };
    }
  };

  return (
    <section id="kuis-kesiapan-section" className="py-16 md:py-24 bg-asih-light scroll-mt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-3xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-asih-orange px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-amber-200 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Kuis Interaktif Parenting</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-asih-green mb-3">
            Cek Kesiapan Ananda Masuk TK / Daycare
          </h2>
          <div className="w-24 h-1 bg-asih-orange mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Jawab 4 pertanyaan singkat untuk mendapatkan rekomendasi kelas terbaik dan panduan stimulasi ramah anak dari tim psikolog Asih Putera.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-white rounded-3xl border-2 border-amber-200 p-6 sm:p-8 shadow-xl relative overflow-hidden">
          
          {!isCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-6 text-xs text-gray-500 font-bold">
                <span className="text-asih-orange">Pertanyaan {currentStep + 1} dari {QUESTIONS.length}</span>
                <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}%</span>
              </div>
              
              <div className="w-full bg-gray-100 h-2 rounded-full mb-6 overflow-hidden">
                <div
                  className="bg-asih-orange h-full rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                ></div>
              </div>

              {/* Current Question */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-asih-green mb-6 leading-snug">
                {QUESTIONS[currentStep].question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {QUESTIONS[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full text-left p-4 rounded-2xl border-2 border-gray-100 hover:border-asih-orange hover:bg-amber-50/50 transition duration-200 cursor-pointer flex items-center justify-between group shadow-2xs"
                  >
                    <div>
                      <span className="font-bold text-sm text-gray-800 group-hover:text-asih-orange block mb-0.5">
                        {opt.text}
                      </span>
                      <span className="text-xs text-gray-500 block leading-tight">
                        {opt.tip}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-asih-orange group-hover:translate-x-1 transition shrink-0 ml-2" />
                  </button>
                ))}
              </div>

              {/* Back button if past step 0 */}
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-xs text-gray-500 hover:text-gray-800 font-semibold cursor-pointer"
                >
                  ← Kembali ke pertanyaan sebelumnya
                </button>
              )}
            </div>
          ) : (
            <div className="text-center py-4 animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Award className="w-9 h-9" />
              </div>

              <span className="text-xs font-bold text-asih-orange uppercase tracking-wider block mb-1">
                Hasil Evaluasi Kesiapan Buah Hati
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-asih-green mb-2">
                {getRecommendation().programName}
              </h3>

              <div className="inline-block bg-emerald-50 border border-emerald-200 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold mb-4">
                ★ {getRecommendation().highlight}
              </div>

              <div className="bg-asih-light border border-amber-200 p-5 rounded-2xl text-left text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 space-y-2">
                <p><strong>Rekomendasi Ustadzah & Psikolog:</strong></p>
                <p>{getRecommendation().recommendationText}</p>
                <p className="text-gray-500 text-xs italic pt-1">
                  Kami mengundang Ayah/Bunda untuk mengikuti <strong>Free Trial Class</strong> bersama ananda untuk merasakan langsung atmosfer sentra bermain dan pengasuhan penuh kasih.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                <button
                  onClick={onOpenTrial}
                  className="bg-asih-green hover:bg-emerald-800 text-white px-7 py-3 rounded-full font-bold text-xs sm:text-sm transition shadow-sm cursor-pointer"
                >
                  Daftar Free Trial Class
                </button>
                <button
                  onClick={onOpenPpdb}
                  className="bg-asih-orange hover:bg-amber-700 text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition shadow-sm cursor-pointer"
                >
                  Daftar PPDB 2026/2027
                </button>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center text-xs text-gray-500 hover:text-gray-800 font-semibold cursor-pointer pt-2"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1" />
                Ulangi Kuis
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
