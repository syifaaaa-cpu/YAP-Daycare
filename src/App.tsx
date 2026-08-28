import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { QuickFeatures } from './components/QuickFeatures';
import { WhyUsSection } from './components/WhyUsSection';
import { DevelopmentFocusSection } from './components/DevelopmentFocusSection';
import { CoreProgramsSection } from './components/CoreProgramsSection';
import { CoreValuesSection } from './components/CoreValuesSection';
import { RoleActorsSection } from './components/RoleActorsSection';
import { PhaseOutputsSection } from './components/PhaseOutputsSection';
import { AgeGroupsSection } from './components/AgeGroupsSection';
import { DailyRoutineSection } from './components/DailyRoutineSection';
import { WeeklyNutritionSection } from './components/WeeklyNutritionSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { TeachersSection } from './components/TeachersSection';
import { TuitionCalculatorSection } from './components/TuitionCalculatorSection';
import { ChildReadinessQuiz } from './components/ChildReadinessQuiz';
import { GallerySection } from './components/GallerySection';
import { TestimonialsAndNewsSection } from './components/TestimonialsAndNewsSection';
import { FaqSection } from './components/FaqSection';
import { CallToActionSection } from './components/CallToActionSection';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';
import { PpdbModal } from './components/PpdbModal';
import { ScheduleVisitModal } from './components/ScheduleVisitModal';
import { DigitalBrochureModal } from './components/DigitalBrochureModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { NewsDetailModal } from './components/NewsDetailModal';
import { NotificationToast } from './components/NotificationToast';
import { ProgramItem, NewsItem } from './types';
import { ALL_PROGRAMS } from './data/mockData';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [isPpdbOpen, setIsPpdbOpen] = useState(false);
  const [isVisitOpen, setIsVisitOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Smooth scroll handler
  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleSubscribeNewsletter = (email: string) => {
    showToast(`Terima kasih! Email ${email} berhasil didaftarkan untuk buletin Day Care Asih Putera.`);
  };

  // Listen to window scroll to show top button
  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      if (window.scrollY > 400) {
        if (!showScrollTop) setShowScrollTop(true);
      } else {
        if (showScrollTop) setShowScrollTop(false);
      }
    };
  }

  return (
    <div className="min-h-screen bg-[#FAF7F0] font-sans text-[#16332A] antialiased flex flex-col justify-between selection:bg-[#00A896] selection:text-white">
      
      {/* Hidden Action Hooks for Chatbot & Quick Triggers */}
      <button
        data-ppdb-trigger
        onClick={() => setIsPpdbOpen(true)}
        className="sr-only"
        aria-hidden="true"
      >
        Open PPDB
      </button>
      <button
        data-trial-trigger
        onClick={() => setIsVisitOpen(true)}
        className="sr-only"
        aria-hidden="true"
      >
        Open Trial Class
      </button>

      {/* Header & Topbar */}
      <Header
        onOpenPpdb={() => setIsPpdbOpen(true)}
        onOpenVisit={() => setIsVisitOpen(true)}
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onSelectNav={handleNavigateSection}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section (Day Care Asih Putera: Ruang Aman Pertama untuk Tumbuh dengan Kasih Sayang) */}
        <HeroSection
          onOpenPpdb={() => setIsPpdbOpen(true)}
          onExplorePrograms={() => handleNavigateSection('layanan-usia-section')}
          onOpenTrial={() => setIsVisitOpen(true)}
        />

        {/* 2. Quick Features Bar */}
        <QuickFeatures
          onLearnMore={(feature) => {
            if (feature.includes('Fasilitas') || feature.includes('Aman')) handleNavigateSection('fasilitas-section');
            else if (feature.includes('Rasio') || feature.includes('Anak')) handleNavigateSection('layanan-usia-section');
            else handleNavigateSection('biaya-section');
          }}
        />

        {/* 3. Why Us / Profile Section (Positioning, Narasi, Ringkasan Strategis, 6 Tujuan, 5 Keunggulan) */}
        <WhyUsSection />

        {/* 4. Nilai Luhur Panca Waluya (Cageur, Bageur, Bener, Pinter, Singer) */}
        <CoreValuesSection />

        {/* 5. 5 Area Fokus Perkembangan & Capaian (Emosi, Motorik, Sosial, Bahasa, Spiritual) */}
        <DevelopmentFocusSection />

        {/* 6. 6 Program Inti & Makna Pendidikan */}
        <CoreProgramsSection />

        {/* 7. Sinergi Pendidik, Koordinator & Orang Tua */}
        <RoleActorsSection />

        {/* 8. Peta Output Per Fase Perkembangan (Fase Adaptasi, Pembiasaan, Kesiapan TK) */}
        <PhaseOutputsSection />

        {/* 9. Age Groups & Services (Baby Care, Toddler Care, Pra-TK Care, Daycare Harian) */}
        <AgeGroupsSection
          onSelectProgram={(prog) => setSelectedProgram(prog)}
        />

        {/* 10. Daily Routine Timeline & Digital Daily Report */}
        <DailyRoutineSection />

        {/* 11. Weekly Nutrition & Gizi Seimbang Halal */}
        <WeeklyNutritionSection />

        {/* 12. Facilities & Lingkungan Aman */}
        <FacilitiesSection />

        {/* 13. Pendidik & Pengasuh Tersertifikasi */}
        <TeachersSection />

        {/* 14. Interactive Tuition & Fee Calculator (Narasi Utama PPDB) */}
        <TuitionCalculatorSection
          onOpenPpdb={() => setIsPpdbOpen(true)}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* 15. Child Readiness Quiz */}
        <ChildReadinessQuiz
          onOpenTrial={() => setIsVisitOpen(true)}
          onOpenPpdb={() => setIsPpdbOpen(true)}
        />

        {/* 16. Photo Gallery */}
        <GallerySection />

        {/* 17. Testimonials & News */}
        <TestimonialsAndNewsSection
          onSelectNews={(news) => setSelectedNews(news)}
          onSelectTestimonial={() => {
            showToast('Ulasan nyata terverifikasi dari orang tua santri Day Care Asih Putera.');
          }}
        />

        {/* 18. Frequently Asked Questions (FAQ Strategis & Operasional) */}
        <FaqSection />

        {/* 19. Call to Action Banner */}
        <CallToActionSection
          onOpenPpdb={() => setIsPpdbOpen(true)}
          onOpenVisit={() => setIsVisitOpen(true)}
        />
      </main>

      {/* Institutional Footer */}
      <Footer
        onSubscribeNewsletter={handleSubscribeNewsletter}
        onNavigateSection={handleNavigateSection}
        onOpenPpdb={() => setIsPpdbOpen(true)}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Interactive Chatbot Widget */}
      <ChatbotWidget />

      {/* WhatsApp Quick Trigger Button */}
      <div className="fixed bottom-5 left-5 z-40 flex items-center space-x-2">
        <a
          href="https://wa.me/6281223456789?text=Halo%20Admin%20Day%20Care%20Asih%20Putera,%20saya%20ingin%20konsultasi%20pengasuhan%20ananda"
          target="_blank"
          rel="noreferrer"
          className="bg-[#00A896] hover:bg-[#007A6D] text-white p-3.5 rounded-full shadow-xl flex items-center space-x-2 transition transform hover:scale-105 group border-2 border-white"
          title="Hubungi WhatsApp Day Care Asih Putera"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="hidden sm:inline text-xs font-bold pr-1">Konsultasi Pengasuhan</span>
        </a>
      </div>

      {/* Back to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-40 bg-[#00473A] hover:bg-[#00A896] text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 cursor-pointer border border-emerald-700"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Toast Notification Alert */}
      {toastMessage && (
        <NotificationToast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}

      {/* PPDB Registration Modal */}
      {isPpdbOpen && (
        <PpdbModal
          isOpen={isPpdbOpen}
          onClose={() => setIsPpdbOpen(false)}
          onSuccess={() => {
            showToast('Formulir pendaftaran ananda berhasil dikirimkan! Tim konselor kami akan segera menghubungi.');
          }}
        />
      )}

      {/* Schedule Visit / Trial Class Modal */}
      {isVisitOpen && (
        <ScheduleVisitModal
          isOpen={isVisitOpen}
          onClose={() => setIsVisitOpen(false)}
          onSuccess={() => {
            showToast('Jadwal kunjungan/trial class ananda berhasil diajukan!');
          }}
        />
      )}

      {/* Digital Brochure Modal */}
      {isBrochureOpen && (
        <DigitalBrochureModal
          isOpen={isBrochureOpen}
          onClose={() => setIsBrochureOpen(false)}
        />
      )}

      {/* Program Detail Popup Modal */}
      {selectedProgram && (
        <ProgramDetailModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
          onRegister={() => {
            setSelectedProgram(null);
            setIsPpdbOpen(true);
          }}
        />
      )}

      {/* News Detail Modal */}
      {selectedNews && (
        <NewsDetailModal
          news={selectedNews}
          onClose={() => setSelectedNews(null)}
        />
      )}

    </div>
  );
}
