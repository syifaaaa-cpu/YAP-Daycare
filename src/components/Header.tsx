import React, { useState } from 'react';
import { Phone, Mail, ChevronDown, ArrowRight, Menu, X, MapPin, Download, MessageCircle, Clock, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenPpdb: () => void;
  onOpenVisit: () => void;
  onOpenBrochure: () => void;
  onSelectNav: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPpdb,
  onOpenVisit,
  onOpenBrochure,
  onSelectNav
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programDropdownOpen, setProgramDropdownOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onSelectNav(sectionId);
    setMobileMenuOpen(false);
    setProgramDropdownOpen(false);
  };

  return (
    <>
      {/* Clean Dark Green Topbar with Toy-Block Style Micro Badges */}
      <div className="bg-[#00473A] text-white py-2 px-4 md:px-8 text-xs hidden md:flex justify-between items-center z-40 relative border-b border-emerald-800/80 shadow-xs">
        <div className="flex items-center space-x-4">
          {/* Toy-block Phone Badge */}
          <a
            href="tel:0226652882"
            className="flex items-center bg-[#005A4A] hover:bg-[#006C59] px-2.5 py-1 rounded-lg border border-emerald-700/60 transition group text-emerald-50"
          >
            <div className="w-4 h-4 bg-[#F39C12] text-white rounded-md flex items-center justify-center mr-1.5 shadow-xs">
              <Phone className="w-2.5 h-2.5" />
            </div>
            <span className="font-semibold text-[11px]">(022) 665-2882</span>
          </a>

          {/* Toy-block WhatsApp Badge */}
          <a
            href="https://wa.me/6281221828884?text=Halo%20Admin%20Raudhah%20Asih%20Putera,%20saya%20ingin%20konsultasi%20PPDB%20Daycare%20%26%20TK"
            target="_blank"
            rel="noreferrer"
            className="flex items-center bg-[#005A4A] hover:bg-[#006C59] px-2.5 py-1 rounded-lg border border-emerald-700/60 transition group text-emerald-50"
          >
            <div className="w-4 h-4 bg-[#00A896] text-white rounded-md flex items-center justify-center mr-1.5 shadow-xs">
              <MessageCircle className="w-2.5 h-2.5" />
            </div>
            <span className="font-semibold text-[11px]">WA: 0812-2182-8884</span>
          </a>

          {/* Toy-block Operational Hours */}
          <div className="flex items-center bg-[#005A4A]/70 px-2.5 py-1 rounded-lg text-emerald-100 text-[11px]">
            <div className="w-4 h-4 bg-[#E76F51] text-white rounded-md flex items-center justify-center mr-1.5 shadow-xs">
              <Clock className="w-2.5 h-2.5" />
            </div>
            <span>Senin - Jumat: 07.00 - 17.00 WIB</span>
          </div>

          <div className="flex items-center text-emerald-200/90 text-[11px]">
            <MapPin className="w-3.5 h-3.5 mr-1 text-[#F39C12]" />
            <span>Kota Cimahi, Jawa Barat</span>
          </div>
        </div>

        {/* Topbar Right Actions */}
        <div className="flex items-center space-x-3 text-xs font-medium text-emerald-100">
          <button
            onClick={onOpenBrochure}
            className="flex items-center hover:text-amber-300 transition cursor-pointer bg-white/10 hover:bg-white/15 px-3 py-1 rounded-lg text-[11px] font-semibold border border-white/10"
          >
            <Download className="w-3 h-3 mr-1.5 text-[#F39C12]" />
            <span>E-Brosur 2026/2027</span>
          </button>
          
          <button
            onClick={() => handleNavClick('biaya-section')}
            className="hover:text-amber-300 transition cursor-pointer text-[11px] px-2 py-0.5"
          >
            Simulasi Biaya
          </button>

          <span className="text-emerald-600">|</span>

          <span className="bg-[#F39C12]/20 text-[#F39C12] px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide flex items-center">
            <Sparkles className="w-2.5 h-2.5 mr-1" />
            Akreditasi A Unggul
          </span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="bg-[#FAF7F0]/95 backdrop-blur-md py-3.5 px-4 md:px-8 sticky top-0 z-50 transition-all border-b border-amber-900/10 shadow-xs">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* Brand Logo: Logo Asih Putera */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group py-0.5"
            aria-label="Day Care Asih Putera"
          >
            <img
              src="/images/logo-daycare.png"
              alt="Day Care Asih Putera - Ruang Aman Pertama untuk Tumbuh dengan Kasih Sayang"
              className="h-10 sm:h-12 md:h-13 w-auto object-contain transition duration-200 group-hover:scale-102"
            />
          </a>

          {/* Desktop Menu - Day Care Asih Putera */}
          <nav className="hidden lg:flex space-x-6 items-center font-semibold text-[13.5px] text-[#16332A]">
            
            {/* 1. Profil Unit */}
            <button
              onClick={() => handleNavClick('why-us-section')}
              className="hover:text-[#00A896] transition cursor-pointer relative py-1 group"
            >
              <span>Profil &amp; Visi</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A896] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>

            {/* 2. Program & Layanan Usia */}
            <div
              className="relative"
              onMouseEnter={() => setProgramDropdownOpen(true)}
              onMouseLeave={() => setProgramDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('layanan-usia-section')}
                className="flex items-center hover:text-[#00A896] transition py-1 cursor-pointer font-semibold group"
              >
                <span>Program &amp; Layanan</span>
                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform text-[#C37932] ${programDropdownOpen ? 'rotate-180 text-[#00A896]' : ''}`} />
              </button>

              {programDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-amber-200/60 py-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-1 text-[10px] font-extrabold text-[#C37932] uppercase tracking-wider">
                    Layanan Daycare Berdasarkan Usia
                  </div>
                  <button
                    onClick={() => handleNavClick('layanan-usia-section')}
                    className="w-full text-left px-4 py-2 text-xs text-[#16332A] hover:bg-[#FAF7F0] hover:text-[#00A896] transition flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold">Baby Care (6 - 18 bln)</div>
                      <div className="text-[11px] text-gray-500">Stimulasi awal &amp; kelekatan aman</div>
                    </div>
                    <span className="text-[10px] bg-teal-50 text-[#00A896] font-bold px-2 py-0.5 rounded-full">1:2</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('layanan-usia-section')}
                    className="w-full text-left px-4 py-2 text-xs text-[#16332A] hover:bg-[#FAF7F0] hover:text-[#00A896] transition flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold">Toddler Daycare (1.5 - 3 thn)</div>
                      <div className="text-[11px] text-gray-500">Sensori motorik &amp; adab makan</div>
                    </div>
                    <span className="text-[10px] bg-teal-50 text-[#00A896] font-bold px-2 py-0.5 rounded-full">1:4</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('layanan-usia-section')}
                    className="w-full text-left px-4 py-2 text-xs text-[#16332A] hover:bg-[#FAF7F0] hover:text-[#00A896] transition flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold">Pra-TK Daycare (3 - 4 thn)</div>
                      <div className="text-[11px] text-gray-500">Kemandirian &amp; kesiapan TK</div>
                    </div>
                    <span className="text-[10px] bg-teal-50 text-[#00A896] font-bold px-2 py-0.5 rounded-full">1:6</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('layanan-usia-section')}
                    className="w-full text-left px-4 py-2 text-xs text-[#16332A] hover:bg-[#FAF7F0] hover:text-[#00A896] transition flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold">Daycare Harian &amp; Fleksibel</div>
                      <div className="text-[11px] text-gray-500">Opsi insidental / mingguan</div>
                    </div>
                    <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">Fleksibel</span>
                  </button>

                  <div className="border-t border-amber-100 my-2"></div>
                  <div className="px-4 py-1 text-[10px] font-extrabold text-[#00473A] uppercase tracking-wider">
                    Program Inti &amp; Perkembangan
                  </div>
                  <button
                    onClick={() => handleNavClick('program-inti-section')}
                    className="w-full text-left px-4 py-1.5 text-xs text-[#16332A] hover:bg-[#FAF7F0] hover:text-[#00A896] transition"
                  >
                    6 Program Inti &amp; Nilai Karakter
                  </button>
                  <button
                    onClick={() => handleNavClick('fokus-perkembangan-section')}
                    className="w-full text-left px-4 py-1.5 text-xs text-[#16332A] hover:bg-[#FAF7F0] hover:text-[#00A896] transition"
                  >
                    5 Fokus &amp; Capaian Perkembangan
                  </button>
                </div>
              )}
            </div>

            {/* 3. 5 Fokus Perkembangan */}
            <button
              onClick={() => handleNavClick('fokus-perkembangan-section')}
              className="hover:text-[#00A896] transition cursor-pointer relative py-1 group"
            >
              <span>Fokus Perkembangan</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A896] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>

            {/* 4. Rutinitas & Daily Report */}
            <button
              onClick={() => handleNavClick('rutinitas-section')}
              className="hover:text-[#00A896] transition cursor-pointer relative py-1 group"
            >
              <span>Rutinitas &amp; Daily Report</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A896] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>

            {/* 5. Fasilitas */}
            <button
              onClick={() => handleNavClick('fasilitas-section')}
              className="hover:text-[#00A896] transition cursor-pointer relative py-1 group"
            >
              <span>Fasilitas</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A896] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>

            {/* 6. Biaya & PPDB */}
            <button
              onClick={() => handleNavClick('biaya-section')}
              className="hover:text-[#00A896] transition cursor-pointer relative py-1 group"
            >
              <span>Biaya &amp; PPDB</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A896] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>

            {/* 7. FAQ */}
            <button
              onClick={() => handleNavClick('faq-section')}
              className="hover:text-[#00A896] transition cursor-pointer relative py-1 group"
            >
              <span>FAQ</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A896] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
          </nav>

          {/* Right Action CTA: Glowing 'Daftar Sekarang!' Button in Bright Teal */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenVisit}
              className="text-xs font-bold text-[#00473A] hover:text-[#006C59] px-3.5 py-2.5 rounded-full border border-[#00473A]/25 hover:border-[#00473A] transition cursor-pointer bg-white/60"
            >
              Trial Class Gratis
            </button>

            {/* Glowing 'Daftar Sekarang!' in Bright Teal */}
            <button
              onClick={onOpenPpdb}
              className="bg-[#00A896] hover:bg-[#028090] text-white px-5 py-2.5 rounded-full font-bold transition inline-flex items-center text-xs cursor-pointer transform hover:-translate-y-0.5 glow-teal glow-teal-hover shadow-lg tracking-wide group"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-200 animate-pulse" />
              <span>Daftar Sekarang!</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#16332A] hover:text-[#00A896] transition cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-amber-900/10 py-4 px-4 mt-3 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-2.5 font-semibold text-[#16332A] text-sm">
              <button
                onClick={() => handleNavClick('why-us-section')}
                className="text-left py-2 px-3 rounded-xl hover:bg-[#FAF7F0] hover:text-[#00A896]"
              >
                Tentang Kami
              </button>
              <button
                onClick={() => handleNavClick('layanan-usia-section')}
                className="text-left py-2 px-3 rounded-xl hover:bg-[#FAF7F0] hover:text-[#00A896] flex items-center justify-between"
              >
                <span>Program &amp; Daycare</span>
                <span className="text-xs bg-teal-50 text-[#00A896] px-2 py-0.5 rounded-full font-bold">Lengkap</span>
              </button>
              <button
                onClick={() => handleNavClick('sentra-bcct-section')}
                className="text-left py-2 px-3 rounded-xl hover:bg-[#FAF7F0] hover:text-[#00A896]"
              >
                7 Sentra Belajar BCCT
              </button>
              <button
                onClick={() => handleNavClick('biaya-section')}
                className="text-left py-2 px-3 rounded-xl hover:bg-[#FAF7F0] hover:text-[#00A896]"
              >
                Pendaftaran &amp; Biaya
              </button>
              <button
                onClick={() => handleNavClick('fasilitas-section')}
                className="text-left py-2 px-3 rounded-xl hover:bg-[#FAF7F0] hover:text-[#00A896]"
              >
                Fasilitas
              </button>
              <button
                onClick={() => handleNavClick('berita-section')}
                className="text-left py-2 px-3 rounded-xl hover:bg-[#FAF7F0] hover:text-[#00A896]"
              >
                Blog &amp; Edukasi Parenting
              </button>
              <button
                onClick={() => handleNavClick('kontak-section')}
                className="text-left py-2 px-3 rounded-xl hover:bg-[#FAF7F0] hover:text-[#00A896]"
              >
                Hubungi Kami
              </button>
              
              <div className="border-t border-gray-100 pt-3 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrochure();
                  }}
                  className="w-full bg-amber-50 text-[#C37932] border border-amber-200 py-2.5 rounded-xl font-bold text-center text-xs flex items-center justify-center"
                >
                  <Download className="w-3.5 h-3.5 mr-1.5" />
                  <span>Unduh Brosur Digital (PDF)</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVisit();
                  }}
                  className="w-full bg-[#FAF7F0] text-[#00473A] border border-[#00473A]/20 py-2.5 rounded-xl font-bold text-center text-xs"
                >
                  Jadwalkan Free Trial Class
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPpdb();
                  }}
                  className="w-full bg-[#00A896] text-white py-3 rounded-xl font-bold text-center text-sm flex items-center justify-center glow-teal"
                >
                  <Sparkles className="w-4 h-4 mr-1.5 text-amber-200" />
                  Daftar Sekarang! <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
