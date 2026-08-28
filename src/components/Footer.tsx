import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight, Instagram, Facebook, Youtube, Video, Download, ExternalLink, ShieldCheck, Map, Smartphone, Sparkles, Clock, Heart } from 'lucide-react';

interface FooterProps {
  onSubscribeNewsletter: (email: string) => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenPpdb: () => void;
  onOpenBrochure: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSubscribeNewsletter,
  onNavigateSection,
  onOpenPpdb,
  onOpenBrochure
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribeNewsletter(email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="footer" className="bg-[#00382E] text-white pt-14 pb-8 border-t-4 border-[#00A896]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Top Interactive Feature Quick-Tiles in Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          {/* Tile 1: Play Area Maps */}
          <button
            onClick={() => onNavigateSection('fasilitas-section')}
            className="bg-[#00473A] hover:bg-[#005A4A] p-4 rounded-2xl border border-emerald-700/60 flex items-center space-x-3 text-left transition duration-200 group cursor-pointer shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F39C12] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <Map className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
                Peta Lokasi &amp; Sentra
              </div>
              <div className="text-xs font-bold text-white group-hover:text-emerald-200">
                Play Area Maps ↗
              </div>
            </div>
          </button>

          {/* Tile 2: Live Video Feed (Parent Portal) */}
          <a
            href="https://wa.me/6281221828884?text=Halo%20Admin%20Raudhah,%20saya%20ingin%20info%20demo%20Live%20CCTV%20Parent%20Portal"
            target="_blank"
            rel="noreferrer"
            className="bg-[#00473A] hover:bg-[#005A4A] p-4 rounded-2xl border border-emerald-700/60 flex items-center space-x-3 text-left transition duration-200 group cursor-pointer shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00A896] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-teal-300 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-ping"></span>
                Akses Terproteksi
              </div>
              <div className="text-xs font-bold text-white group-hover:text-teal-200">
                Live Video Feed (Parent Portal) ↗
              </div>
            </div>
          </a>

          {/* Tile 3: Download Digital Brochure */}
          <button
            onClick={onOpenBrochure}
            className="bg-[#00473A] hover:bg-[#005A4A] p-4 rounded-2xl border border-emerald-700/60 flex items-center space-x-3 text-left transition duration-200 group cursor-pointer shadow-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-[#E76F51] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-rose-300">
                Dokumen PDF Resmi
              </div>
              <div className="text-xs font-bold text-white group-hover:text-amber-200">
                Unduh E-Brosur 2026/2027 ↗
              </div>
            </div>
          </button>

          {/* Tile 4: Glowing PPDB Register */}
          <button
            onClick={onOpenPpdb}
            className="bg-[#00A896] hover:bg-[#028090] p-4 rounded-2xl border border-teal-300/40 flex items-center space-x-3 text-left transition duration-200 group cursor-pointer shadow-lg glow-teal"
          >
            <div className="w-10 h-10 rounded-xl bg-white text-[#00A896] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-200">
                Gelombang 1 Dibuka
              </div>
              <div className="text-xs font-extrabold text-white flex items-center">
                <span>Daftar Sekarang!</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>

        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <img
                src="/images/logo-asih-putera-white.svg"
                alt="Day Care Asih Putera - Ruang Aman Pertama untuk Tumbuh dengan Kasih Sayang"
                className="h-12 w-auto object-contain"
              />
            </div>
            
            <p className="text-xs text-emerald-100/80 mb-3 leading-relaxed">
              Ruang aman pertama bagi anak untuk tumbuh dengan kasih sayang, rutinitas sehat, stimulasi sesuai usia, dan pengenalan nilai tauhid dalam suasana yang lembut dan menyenangkan.
            </p>

            <div className="flex items-center space-x-2 text-xs font-semibold text-[#F39C12] mb-5">
              <Heart className="w-3.5 h-3.5 text-[#F39C12] fill-current" />
              <span>Cageur, Bageur, Bener, Pinter, Singer</span>
            </div>

            {/* Refined Toy-Block Style Social Media Badges */}
            <div className="flex items-center space-x-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#00473A] border border-emerald-700 hover:bg-[#00A896] text-emerald-100 hover:text-white flex items-center justify-center transition shadow-xs group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#00473A] border border-emerald-700 hover:bg-[#00A896] text-emerald-100 hover:text-white flex items-center justify-center transition shadow-xs group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#00473A] border border-emerald-700 hover:bg-[#00A896] text-emerald-100 hover:text-white flex items-center justify-center transition shadow-xs group"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#00473A] border border-emerald-700 hover:bg-[#00A896] text-emerald-100 hover:text-white flex items-center justify-center transition shadow-xs group"
                aria-label="TikTok"
              >
                <Video className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-bold text-sm mb-3.5 text-white uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <button
                  onClick={() => onNavigateSection('why-us-section')}
                  className="hover:text-amber-300 transition cursor-pointer"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('layanan-usia-section')}
                  className="hover:text-amber-300 transition cursor-pointer"
                >
                  Program &amp; Daycare
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('sentra-bcct-section')}
                  className="hover:text-amber-300 transition cursor-pointer"
                >
                  7 Sentra Belajar BCCT
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('fasilitas-section')}
                  className="hover:text-amber-300 transition cursor-pointer"
                >
                  Fasilitas &amp; Keamanan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('biaya-section')}
                  className="hover:text-amber-300 transition cursor-pointer"
                >
                  Simulasi Biaya &amp; SPP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('berita-section')}
                  className="hover:text-amber-300 transition cursor-pointer"
                >
                  Blog &amp; Edukasi
                </button>
              </li>
            </ul>
          </div>

          {/* Unit Yayasan Asih Putera (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-sm mb-3.5 text-white uppercase tracking-wider">
              Yayasan Asih Putera
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li className="bg-[#00473A]/80 p-2.5 rounded-xl border border-emerald-700/50">
                <span className="font-bold text-white block">Raudhah Daycare &amp; TK</span>
                <span className="text-[10px] text-teal-300">Pendidikan Usia Dini 6 Bulan - 6 Tahun</span>
              </li>
              <li>
                <a
                  href="https://yayasan-asih-putera.ai.studio"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition flex items-center justify-between py-0.5"
                >
                  <span>MI Asih Putera (Madrasah Ibtidaiyah)</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://yayasan-asih-putera.ai.studio"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition flex items-center justify-between py-0.5"
                >
                  <span>MTs Asih Putera (Tsanawiyah)</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://yayasan-asih-putera.ai.studio"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition flex items-center justify-between py-0.5"
                >
                  <span>MA Asih Putera (Aliyah)</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-bold text-sm mb-3.5 text-white uppercase tracking-wider">
              Kontak &amp; Lokasi
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mt-0.5 mr-2 text-[#F39C12] shrink-0" />
                <span>Jl. Daeng Moh. Ardiwinata No. 12, Kota Cimahi, Jawa Barat 40511</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#00A896] shrink-0" />
                <a href="tel:0226652882" className="hover:text-white transition font-medium">
                  (022) 665-2882 / 0812-2182-8884
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#00A896] shrink-0" />
                <a href="mailto:raudhah@asihputera.sch.id" className="hover:text-white transition">
                  raudhah@asihputera.sch.id
                </a>
              </li>
              <li className="pt-2 border-t border-emerald-800/80 text-[11px] text-emerald-200">
                <div className="flex items-center text-amber-300 font-bold mb-0.5">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>Jam Layanan Pengasuhan:</span>
                </div>
                <span>Senin - Jumat: 07.00 - 17.00 WIB</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Accreditation Strip */}
        <div className="border-t border-emerald-800/80 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-emerald-300/80 gap-3">
          <p>© 2026 Raudhah Asih Putera Daycare &amp; Kindergarten. Yayasan Asih Putera (Est. 1985).</p>
          <div className="flex items-center space-x-4">
            <span className="text-emerald-400 font-medium">Akreditasi A Unggul Kemendikbudristek</span>
            <span>•</span>
            <button onClick={onOpenPpdb} className="text-amber-300 hover:underline font-bold cursor-pointer">
              Daftar PPDB Online 2026/2027
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
