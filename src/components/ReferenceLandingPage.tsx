import React from 'react';
import {
  ArrowRight, Baby, BookOpen, Brain, Camera, Check, Clock3, Flower2, Heart,
  HeartHandshake, Home, Leaf, MonitorSmartphone, Moon, ShieldCheck, Sparkles,
  Sprout, Star, Sun, Users, Utensils, Wifi, type LucideIcon
} from 'lucide-react';

type Card = { title: string; text: string; icon: LucideIcon; image?: string };

const programs: Card[] = [
  { title: 'Baby Care', text: 'Pendampingan penuh kasih, stimulasi sensori, dan rutinitas aman.', icon: Baby, image: '/images/konten-web-daycare/babycare.jpg' },
  { title: 'Toddler', text: 'Eksplorasi aktif, bahasa awal, motorik, dan sosial.', icon: Heart, image: '/images/konten-web-daycare/toddlercare.jpg' },
  { title: 'Pra-TK', text: 'Kemandirian, bahasa, bermain terarah, dan kesiapan sekolah.', icon: BookOpen, image: '/images/konten-web-daycare/sensori.png' },
  { title: 'Daycare Harian', text: 'Program fleksibel setengah hari atau penuh hari.', icon: Clock3, image: '/images/konten-web-daycare/hero1.jpg' },
];

const facilities: Card[] = [
  { title: 'Ruang Bermain Indoor', text: '', icon: Home }, { title: 'Area Tidur / Training', text: '', icon: Moon },
  { title: 'Toilet Training', text: '', icon: Baby }, { title: 'CCTV & Keamanan 24 Jam', text: '', icon: Camera },
  { title: 'Area Outdoor', text: '', icon: Sun }, { title: 'Komunikasi Update Orang Tua', text: '', icon: MonitorSmartphone },
];

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="ref-title">{children}<span /></h2>;
}

function InfoCard({ card }: { card: Card; key?: React.Key }) {
  const Icon = card.icon;
  return <article className="ref-card">
    {card.image && <img src={card.image} alt="" className="ref-card-image" />}
    <Icon className="ref-icon" />
    <div><h3>{card.title}</h3><p>{card.text}</p></div>
  </article>;
}

export function ReferenceLandingPage({ onOpenPpdb }: { onOpenPpdb: () => void }) {
  return <main className="reference-page">
    <section className="ref-hero" id="profil">
      <div className="ref-wrap ref-hero-inner">
        <div className="ref-hero-copy">
          <h1>Daycare Asih Putera</h1>
          <h2>Tempat Tumbuh Penuh Kasih,<br />Aman, dan Bermakna <Heart className="inline-heart" /></h2>
          <p>Mendampingi anak usia dini dengan kasih sayang, stimulasi tumbuh kembang, pembiasaan adab, dan kolaborasi erat bersama Tua.</p>
          <div className="ref-actions"><button onClick={onOpenPpdb}>Informasi Pendaftaran <ArrowRight /></button><a href="#program">Jelajahi Program <ArrowRight /></a></div>
          <div className="ref-trust"><span><ShieldCheck /> <b>Aman & Nyaman</b><small>Lingkungan Islami terjaga</small></span><span><HeartHandshake /> <b>Tumbuh Berkembang</b><small>Stimulasi menyeluruh</small></span><span><Users /> <b>Bersama Orang Tua</b><small>Kolaborasi untuk anak</small></span></div>
        </div>
        <div className="ref-hero-image"><img src="/images/konten-web-daycare/hero1.jpg" alt="Anak-anak bermain bersama" /><div className="ref-image-note"><Sparkles /> Bermain, belajar, dan bertumbuh</div></div>
      </div>
    </section>

    <section className="ref-wrap ref-section" id="fasilitas"><Title>Mengapa Daycare Asih Putera?</Title><div className="ref-grid four">
      <InfoCard card={{ title: 'Pengasuhan Penuh Kasih', text: 'Anak merasa aman, nyaman, dan dicintai.', icon: Heart }} />
      <InfoCard card={{ title: 'Pembiasaan Adab Sejak Dini', text: 'Nilai Islami ditanamkan melalui pembiasaan harian.', icon: Home }} />
      <InfoCard card={{ title: 'Stimulasi Tumbuh Kembang', text: 'Aktivitas sesuai tahap usia anak.', icon: Flower2 }} />
      <InfoCard card={{ title: 'Kolaborasi Orang Tua', text: 'Komunikasi rutin untuk tumbuh kembang selaras.', icon: Users }} />
    </div></section>

    <section className="ref-wrap ref-values"><div className="ref-values-heading"><strong>Nilai Inti<br />Daycare Asih Putera</strong></div>{[
      ['Cageur', Heart], ['Bageur', Users], ['Bener', Star], ['Pinter', Brain], ['Singer', Sparkles]
    ].map(([label, Icon]) => { const I = Icon as LucideIcon; return <div className="ref-value" key={label as string}><I /><b>{label as string}</b><small>Sehat, baik, jujur, cerdas, dan mandiri.</small></div>; })}</section>

    <section className="ref-wrap ref-section" id="program"><Title>Layanan & Kelompok Usia</Title><div className="ref-grid four">{programs.map(card => <InfoCard card={card} key={card.title} />)}</div></section>

    <section className="ref-wrap ref-section"><Title>Program Unggulan Daycare Asih Putera</Title><div className="ref-grid three">
      <InfoCard card={{ title: 'Ragam Main Bermakna', text: 'Belajar sambil bermain yang menyenangkan dan terarah.', icon: Sparkles, image: '/images/konten-web-daycare/sensori.png' }} />
      <InfoCard card={{ title: 'Tahfidz & Adab Harian', text: 'Pembiasaan doa, adab, dan nilai Islam sejak dini.', icon: BookOpen, image: '/images/konten-web-daycare/tahfiz.png' }} />
      <InfoCard card={{ title: 'Sensori-Motorik & Kemandirian', text: 'Mengasah gerak, otot halus, dan rasa percaya diri.', icon: Sprout, image: '/images/konten-web-daycare/kegiatan outdoor.png' }} />
    </div></section>

    <section className="ref-wrap ref-section"><Title>Rutinitas Harian Anak</Title><div className="ref-timeline">{[['07.30','Penyambutan',Sun],['08.30','Morning Circle',Heart],['09.00','Snack Sehat',Utensils],['09.30','Main & Eksplorasi',Sparkles],['11.00','Makan Siang',Utensils],['11.30','Istirahat',Moon],['14.30','Penjemputan',Heart]].map(([time,label,Icon]) => {const I=Icon as LucideIcon;return <div key={time as string}><I /><b>{time as string}</b><span>{label as string}</span></div>})}</div></section>

    <section className="ref-wrap ref-section"><Title>Fasilitas & Keamanan</Title><div className="ref-facilities">{facilities.map(card => <InfoCard card={card} key={card.title} />)}</div></section>

    <section className="ref-wrap ref-bottom-grid"><div><Title>Apa Kata Orang Tua?</Title><div className="ref-testimonials"><blockquote>“Anak saya jadi lebih mandiri dan ceria. Pengasuhnya hangat, lingkungannya bersih dan aman.”<footer>Ibu Rina Septiani<br /><Star /><Star /><Star /><Star /><Star /></footer></blockquote><blockquote>“Programnya lengkap, nilai Islam ditanamkan sejak kecil. Kami merasa tenang menitipkan anak.”<footer>Bapak Ilman Pratama<br /><Star /><Star /><Star /><Star /><Star /></footer></blockquote></div></div><div><Title>Berita & Agenda</Title><div className="ref-news"><img src="/images/konten-web-daycare/hero.png" alt="Dokumentasi kegiatan Daycare Asih Putera" /><img src="/images/konten-web-daycare/kegiatan outdoor.png" alt="Kegiatan outdoor Daycare Asih Putera" /></div></div></section>

    <section className="ref-wrap ref-cta"><div><h2>Bergabunglah Bersama<br />Daycare Asih Putera</h2><p>Tempat terbaik untuk menitipkan sekaligus menumbuhkan buah hati dengan aman, hangat, dan bermakna.</p></div><button onClick={onOpenPpdb}>Daftar PPDB Sekarang <ArrowRight /></button></section>
  </main>;
}
