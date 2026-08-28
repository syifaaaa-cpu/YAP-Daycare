import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Heart,
  Clock,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Video,
  Sun,
  Eye
} from 'lucide-react';
import { BackgroundDoodles, BuntingBanner } from './PlayfulDecorations';
import { UNIT_PROFILE_NARRATIVE, STRATEGIC_SUMMARY } from '../data/mockData';

interface HeroSectionProps {
  onOpenPpdb: () => void;
  onExplorePrograms: () => void;
  onOpenTrial: () => void;
}

interface HeroVideoSlide {
  id: string;
  title: string;
  tag: string;
  category: string;
  description: string;
  quote: string;
  videoUrl: string;
  posterUrl: string;
  badge: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPpdb,
  onExplorePrograms,
  onOpenTrial
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isVideoLoading, setIsVideoLoading] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroVideoSlides: HeroVideoSlide[] = [
    {
      id: 'outdoor-adventure',
      title: 'Adventure Day & Eksplorasi Luar Ruang',
      tag: '08.00 - 09.30 WIB',
      category: 'Eksplorasi Alam & Sensori',
      description: 'Ananda beraktivitas di ruang luar Asih Putera: menangkap ikan, melatih fokus, motorik halus-kasar, kebersamaan kawan sebaya, dan rasa ingin tahu yang tinggi.',
      quote: 'Eksplorasi alam langsung melatih keberanian, ketangkasan, dan kepekaan sosial ananda.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-little-boy-playing-with-a-ball-in-the-grass-42617-large.mp4',
      posterUrl: '/images/asih-fish-adventure.jpg',
      badge: 'Adventure Day & Outdoor'
    },
    {
      id: 'sensory-play',
      title: 'Sentra Sensori & Eksplorasi Kreatif',
      tag: '09.15 - 11.00 WIB',
      category: 'Kreativitas & Loose Parts',
      description: 'Bermain loose parts, balok kayu natural, meronce, dan stimulasi sensori terarah yang mengasah imajinasi serta daya nalar kritis anak tanpa paksaan akademik dini.',
      quote: 'Belajar melalui bermain bermakna dengan sentra bermain yang kaya stimulasi.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-children-playing-with-colorful-building-blocks-42618-large.mp4',
      posterUrl: '/images/hero-islamic-daycare.jpg',
      badge: 'Sentra Sensori-Motorik'
    },
    {
      id: 'eating-adab',
      title: 'Pembiasaan Adab & Makan Sehat Mandiri',
      tag: '11.30 - 12.30 WIB',
      category: 'Adab Mandiri & Nutrisi',
      description: 'Membiasakan cuci tangan 6 langkah, membaca doa makan, duduk tertib menggunakan tangan kanan, serta pendampingan sabar dari bunda pendidik.',
      quote: 'Membangun kebiasaan adab Islami dan kemandirian anak dengan kelembutan.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-toddler-learning-and-playing-with-educational-toys-42621-large.mp4',
      posterUrl: '/images/adab-eating-islamic.jpg',
      badge: 'Nutrisi & Adab Islami'
    },
    {
      id: 'story-tahfidz',
      title: 'Tahfidz Cilik & Kisah Teladan Islami',
      tag: '15.00 - 16.00 WIB',
      category: 'Spiritual & Doa Harian',
      description: 'Mendengarkan kisah teladan para Nabi dengan media buku & boneka tangan, murajaah surat-surat pendek riang gembira, serta hafalan doa harian.',
      quote: 'Menanamkan kecintaan pada Allah dan Rasulullah sejak langkah usia dini.',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-little-girl-reading-a-book-with-her-teacher-42620-large.mp4',
      posterUrl: '/images/tahfidz-story-islamic.jpg',
      badge: 'Spiritual & Nilai Tauhid'
    }
  ];

  const currentSlide = heroVideoSlides[currentSlideIndex];

  // Handle slide change
  const handleSelectSlide = (index: number) => {
    setIsVideoLoading(true);
    setCurrentSlideIndex(index);
  };

  const handleNextSlide = () => {
    const next = (currentSlideIndex + 1) % heroVideoSlides.length;
    handleSelectSlide(next);
  };

  const handlePrevSlide = () => {
    const prev = (currentSlideIndex - 1 + heroVideoSlides.length) % heroVideoSlides.length;
    handleSelectSlide(prev);
  };

  // Video control
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Auto-play new video when slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsVideoLoading(false);
          })
          .catch(() => {
            // Browser autoplay policy might mute or require user interaction
            setIsVideoLoading(false);
          });
      }
    }
  }, [currentSlideIndex]);

  return (
    <section className="relative bg-[#FAF7F0] bg-geometric-stars pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden border-b border-amber-900/10">
      {/* Background Cheerful Elements */}
      <BackgroundDoodles />
      
      {/* Playful Top Right Bunting Banner */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 md:w-[460px] z-10 pointer-events-none opacity-85">
        <BuntingBanner />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          
          {/* Left Column: Hero Text & Value Proposition */}
          <div className="lg:w-1/2 text-left">
            
            {/* Top Micro Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#FEF9E7] border border-[#F39C12]/40 text-[#16332A] px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00A896] animate-ping"></span>
              <Sparkles className="w-3.5 h-3.5 text-[#F39C12]" />
              <span className="text-[#C37932] font-extrabold uppercase tracking-wide">Penerimaan Peserta Baru 2026/2027</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16332A] leading-tight mb-3 tracking-tight">
              Day Care Asih Putera
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-[#00A896] font-sans font-extrabold mt-1">
                {UNIT_PROFILE_NARRATIVE.tagline}
              </span>
            </h1>

            {/* Sub-headline from Official Positioning */}
            <p className="text-[#16332A]/85 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {UNIT_PROFILE_NARRATIVE.positioning}
            </p>

            {/* 3 Key Trust Metrics Pills */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-8">
              <div className="bg-white/95 border border-amber-200/90 p-2.5 rounded-2xl shadow-xs flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-7 h-7 rounded-xl bg-teal-50 text-[#00A896] flex items-center justify-center mb-1">
                  <Heart className="w-4 h-4 text-[#00A896]" />
                </div>
                <div className="text-[13px] font-extrabold text-[#16332A]">Penuh Kasih</div>
                <div className="text-[10px] text-gray-500 font-medium">Pengasuhan Lembut</div>
              </div>

              <div className="bg-white/95 border border-amber-200/90 p-2.5 rounded-2xl shadow-xs flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-7 h-7 rounded-xl bg-amber-50 text-[#F39C12] flex items-center justify-center mb-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-[13px] font-extrabold text-[#16332A]">Rasio 1:2 &amp; 1:4</div>
                <div className="text-[10px] text-gray-500 font-medium">Pengawasan Siaga</div>
              </div>

              <div className="bg-white/95 border border-amber-200/90 p-2.5 rounded-2xl shadow-xs flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-7 h-7 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-[13px] font-extrabold text-[#16332A]">Daily Report</div>
                <div className="text-[10px] text-gray-500 font-medium">Laporan Harian Jelas</div>
              </div>
            </div>

            {/* Hero CTA Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={onOpenPpdb}
                className="bg-[#00A896] hover:bg-[#028090] text-white px-7 py-3.5 rounded-full font-extrabold transition inline-flex justify-center items-center shadow-lg text-sm cursor-pointer transform hover:-translate-y-0.5 glow-teal glow-teal-hover group"
              >
                <Sparkles className="w-4 h-4 mr-2 text-amber-200" />
                <span>Daftar Sekarang!</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenTrial}
                className="bg-[#F39C12] hover:bg-[#D68910] text-white px-6 py-3.5 rounded-full font-bold transition inline-flex justify-center items-center shadow-xs text-sm cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Free Trial &amp; Visit</span>
              </button>

              <button
                onClick={onExplorePrograms}
                className="bg-white hover:bg-[#FAF7F0] text-[#00473A] border-2 border-[#00473A]/25 hover:border-[#00473A] px-5 py-3.5 rounded-full font-bold transition inline-flex justify-center items-center text-sm cursor-pointer"
              >
                <span>Lihat Layanan Usia</span>
              </button>
            </div>

            {/* Reassurance text */}
            <p className="text-[11px] text-gray-500 mt-4 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] mr-2"></span>
              {STRATEGIC_SUMMARY.janjiUtamaUnit}
            </p>
          </div>

          {/* Right Column: Hero Video Slider Showcase */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              
              {/* Outer Glow Background Accents */}
              <div className="absolute -top-6 -left-6 w-44 h-44 bg-[#00A896]/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-6 -right-6 w-52 h-52 bg-[#F39C12]/25 rounded-full blur-2xl pointer-events-none"></div>

              {/* Main Video Frame Container */}
              <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border-4 border-white ring-1 ring-amber-900/10 relative overflow-hidden">
                
                {/* Video Player Screen */}
                <div
                  className="relative rounded-2xl overflow-hidden bg-black/90 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center group cursor-pointer shadow-inner"
                  onClick={togglePlay}
                >
                  <video
                    ref={videoRef}
                    src={currentSlide.videoUrl}
                    poster={currentSlide.posterUrl}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover object-top transition duration-300"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none"></div>

                  {/* Top Video Header Bar */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <div className="flex items-center space-x-2">
                      <span className="bg-red-600/90 text-white text-[10px] font-black px-2.5 py-1 rounded-full flex items-center shadow-md uppercase tracking-wider backdrop-blur-xs">
                        <span className="w-2 h-2 rounded-full bg-white mr-1.5 animate-ping"></span>
                        Video Aktivitas
                      </span>
                      <span className="bg-black/50 backdrop-blur-xs text-white/90 text-[10px] font-semibold px-2.5 py-1 rounded-full hidden sm:inline-flex items-center border border-white/10">
                        <Sun className="w-3 h-3 text-amber-400 mr-1" />
                        {currentSlide.badge}
                      </span>
                    </div>

                    {/* Mute/Unmute Toggle Button */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-xs transition z-20 cursor-pointer shadow-md pointer-events-auto border border-white/20"
                      title={isMuted ? 'Nyalakan Audio' : 'Matikan Audio'}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                    </button>
                  </div>

                  {/* Center Play/Pause Overlay Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className={`w-14 h-14 rounded-full bg-white/90 text-[#00473A] shadow-2xl flex items-center justify-center transform transition-all duration-300 ${
                      isPlaying ? 'opacity-0 scale-90 group-hover:opacity-90 group-hover:scale-100' : 'opacity-100 scale-100 ring-4 ring-[#00A896]/50'
                    }`}>
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-current" />
                      ) : (
                        <Play className="w-6 h-6 fill-current ml-0.5 text-[#00473A]" />
                      )}
                    </div>
                  </div>

                  {/* Slide Navigation Arrows */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevSlide();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-xs transition z-20 cursor-pointer opacity-70 group-hover:opacity-100"
                    aria-label="Video Sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextSlide();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-xs transition z-20 cursor-pointer opacity-70 group-hover:opacity-100"
                    aria-label="Video Berikutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Bottom Video Captions Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white z-10 pointer-events-none">
                    <div className="flex items-center space-x-2 text-[11px] font-bold text-amber-300 mb-0.5">
                      <Clock className="w-3 h-3 text-[#F39C12]" />
                      <span>{currentSlide.tag}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-emerald-300 font-semibold">{currentSlide.category}</span>
                    </div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-white leading-tight drop-shadow-sm">
                      {currentSlide.title}
                    </h3>
                  </div>

                  {/* Progress Line Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
                    <div
                      className="h-full bg-gradient-to-r from-[#00A896] to-[#F39C12] transition-all duration-300"
                      style={{ width: `${((currentSlideIndex + 1) / heroVideoSlides.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Video Slider Thumbnails / Activity Moment Selectors */}
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-2 px-1">
                    <div className="flex items-center space-x-1.5 text-xs font-extrabold text-[#16332A]">
                      <Video className="w-3.5 h-3.5 text-[#00A896]" />
                      <span>Pilih Video Kegiatan Harian:</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-semibold">
                      {currentSlideIndex + 1} dari {heroVideoSlides.length} Video
                    </span>
                  </div>

                  {/* Thumbnails Row */}
                  <div className="grid grid-cols-4 gap-2">
                    {heroVideoSlides.map((slide, idx) => (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => handleSelectSlide(idx)}
                        className={`relative rounded-xl overflow-hidden text-left p-1 transition-all cursor-pointer border ${
                          currentSlideIndex === idx
                            ? 'bg-[#00473A] text-white border-[#00A896] shadow-md ring-2 ring-[#00A896]/60 scale-102'
                            : 'bg-amber-50/70 text-[#16332A] border-amber-200/80 hover:bg-white'
                        }`}
                      >
                        {/* Thumbnail Image */}
                        <div className="relative h-11 w-full rounded-lg overflow-hidden mb-1 bg-black/50">
                          <img
                            src={slide.posterUrl}
                            alt={slide.title}
                            className="w-full h-full object-cover object-top"
                          />
                          <div className={`absolute inset-0 ${currentSlideIndex === idx ? 'bg-[#00473A]/40' : 'bg-black/30'}`}></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${currentSlideIndex === idx ? 'bg-[#F39C12] text-white' : 'bg-white/80 text-[#00473A]'}`}>
                              <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                            </div>
                          </div>
                        </div>

                        {/* Title text */}
                        <div className="px-0.5">
                          <div className={`text-[9px] sm:text-[10px] font-bold line-clamp-1 leading-tight ${currentSlideIndex === idx ? 'text-white' : 'text-[#16332A]'}`}>
                            {slide.title.split(' ')[0]} {slide.title.split(' ')[1]}
                          </div>
                          <div className={`text-[8px] truncate ${currentSlideIndex === idx ? 'text-amber-200' : 'text-gray-500'}`}>
                            {slide.tag.split(' ')[0]}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Active Slide Note / Quote */}
                  <div className="mt-2.5 p-2.5 rounded-xl bg-[#FAF7F0] border border-amber-200/70 flex items-center justify-between text-xs text-[#16332A]">
                    <div className="flex items-center space-x-2 text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-[#F39C12] shrink-0" />
                      <span className="line-clamp-1 italic text-gray-700">"{currentSlide.quote}"</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#00A896] shrink-0 ml-2">
                      Yayasan Asih Putera
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

