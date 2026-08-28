import {
  StrategicSummary,
  DevelopmentFocusItem,
  CoreProgramMeaningItem,
  PancaWaluyaValue,
  RoleActor,
  PhaseOutput,
  UnitAdvantage,
  ProgramItem,
  RoutineItem,
  FacilityItem,
  TestimonialItem,
  NewsItem,
  FaqItem,
  GalleryItem,
  TeacherItem,
  FeaturedProgram
} from '../types';

export const HERO_IMAGE = '/images/hero-islamic-daycare.jpg';

export const HEADMASTER_IMAGE = '/images/headmaster-muslimah.jpg';

export const CTA_AVATARS = [
  '/images/teacher-siti.jpg',
  '/images/teacher-nurul.jpg'
];

// 1. Ringkasan Strategis Unit
export const STRATEGIC_SUMMARY: StrategicSummary = {
  segmentasiUtama: 'Anak usia dini yang membutuhkan pengasuhan aman, hangat, terstruktur, dan Islami ketika orang tua bekerja atau membutuhkan dukungan pengasuhan.',
  kebutuhanOrangTua: 'Orang tua membutuhkan tempat yang aman, bersih, penuh kasih, komunikatif, dan tidak hanya menjaga anak, tetapi juga membantu anak tumbuh secara emosi, sosial, motorik, dan spiritual.',
  janjiUtamaUnit: 'Anak merasa aman, diterima, disayangi, mulai mandiri, memiliki rutinitas sehat, dan mengenal adab sederhana sejak dini.',
  kesanBrand: 'Hangat, lembut, aman, Islami, bersih, komunikatif, dan penuh kasih sayang.',
  outputUtamaAnak: 'Rasa aman, kelekatan positif, rutinitas sehat, adab sederhana, kemandirian awal, dan kesiapan masuk fase TK.'
};

// 2. Narasi Profil Unit
export const UNIT_PROFILE_NARRATIVE = {
  title: 'Profile Day Care Asih Putera',
  tagline: 'Ruang Aman Pertama untuk Tumbuh dengan Kasih Sayang',
  positioning: 'Day Care Asih Putera adalah ruang aman pertama bagi anak untuk tumbuh dengan kasih sayang, rutinitas sehat, stimulasi sesuai usia, dan pengenalan nilai tauhid dalam suasana yang lembut dan menyenangkan.',
  paragraf1: 'Day Care Asih Putera bukan hanya tempat menitipkan anak. Day Care adalah ruang tumbuh awal yang membantu anak merasa aman, dicintai, dan dipahami ketika mulai berinteraksi dengan lingkungan di luar rumah.',
  paragraf2: 'Pada fase usia dini, kebutuhan utama anak adalah rasa aman, kelekatan emosional, rutinitas yang sehat, stimulasi yang tepat, dan teladan perilaku yang lembut. Karena itu, pendekatan Day Care Asih Putera menekankan pengasuhan sepenuh hati, pembiasaan adab sederhana, dan komunikasi yang dekat dengan orang tua.',
  paragraf3: 'Nilai tauhid diperkenalkan melalui suasana: doa, kebiasaan baik, kalimat thayyibah, adab makan, adab bermain, serta interaksi yang penuh kasih. Anak tidak dipaksa menjadi cepat dewasa, tetapi dibimbing tumbuh sesuai tahap perkembangannya.'
};

// 3. Tujuan Pendidikan Unit
export const EDUCATIONAL_GOALS = [
  'Membangun rasa aman dan kepercayaan anak kepada pendidik dan lingkungan.',
  'Membiasakan rutinitas sehat: makan, istirahat, kebersihan diri, dan bermain aktif.',
  'Menumbuhkan kemandirian awal sesuai usia.',
  'Melatih interaksi sosial sederhana: bergiliran, berbagi, menyapa, dan meminta bantuan.',
  'Mengenalkan nilai Islam melalui suasana, doa, adab, dan keteladanan.',
  'Membangun komunikasi harian yang jelas antara pendidik dan orang tua.'
];

// 4. Fokus Perkembangan dan Capaian
export const DEVELOPMENT_FOCUS_ITEMS: DevelopmentFocusItem[] = [
  {
    area: 'Emosi',
    fokus: 'Rasa aman, kelekatan, regulasi emosi awal',
    capaian: 'Anak lebih tenang, mudah beradaptasi, dan berani mencoba aktivitas sederhana.',
    iconName: 'heart',
    colorClass: 'from-rose-50 to-pink-50 border-rose-200 text-rose-800',
    badgeColor: 'bg-rose-100 text-rose-800'
  },
  {
    area: 'Motorik',
    fokus: 'Gerak kasar, gerak halus, koordinasi tubuh',
    capaian: 'Anak aktif bergerak, bermain, memegang alat sederhana, dan menjaga keselamatan diri.',
    iconName: 'activity',
    colorClass: 'from-amber-50 to-orange-50 border-amber-200 text-amber-800',
    badgeColor: 'bg-amber-100 text-amber-800'
  },
  {
    area: 'Sosial',
    fokus: 'Interaksi dengan pendidik dan teman',
    capaian: 'Anak belajar menyapa, berbagi, bergiliran, dan meminta izin.',
    iconName: 'users',
    colorClass: 'from-teal-50 to-emerald-50 border-teal-200 text-teal-800',
    badgeColor: 'bg-teal-100 text-teal-800'
  },
  {
    area: 'Bahasa',
    fokus: 'Kosakata, ekspresi kebutuhan, mendengarkan',
    capaian: 'Anak mampu menyampaikan kebutuhan sederhana dan memahami instruksi pendek.',
    iconName: 'message-circle',
    colorClass: 'from-blue-50 to-sky-50 border-blue-200 text-blue-800',
    badgeColor: 'bg-blue-100 text-blue-800'
  },
  {
    area: 'Spiritual-adab',
    fokus: 'Doa, kalimat baik, adab harian',
    capaian: 'Anak mulai mengenal doa, salam, terima kasih, dan kebiasaan baik.',
    iconName: 'sparkles',
    colorClass: 'from-emerald-50 to-green-50 border-emerald-200 text-emerald-800',
    badgeColor: 'bg-emerald-100 text-emerald-800'
  }
];

// 5. Program Inti dan Makna Pendidikan
export const CORE_PROGRAM_MEANINGS: CoreProgramMeaningItem[] = [
  {
    id: 'prog-welcome',
    program: 'Welcome & bonding routine',
    maknaPendidikan: 'Membangun rasa aman sejak anak datang.',
    nilaiYangDibentuk: ['Cageur', 'Bageur'],
    description: 'Penyambutan ramah dari guru, transisi nyaman dari orang tua ke sekolah, pelukan hangat, dan penyesuaian emosi di pagi hari.',
    contohAktivitas: ['Sapa senyum dan salam hangat', 'Cek suhu & kebersihan ceria', 'Transisi pelukan santai tanpa tangis'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn5DnYVlbjMj41PJSy69tyU5BATx2dZlqvxhUFztkNh5IcLEVsfVkSvWTcjtMvK74DrCV4V8itwe9BIjVnmRU2IGl27nf89l8_3vpA1pRGHbauUU3sEXF2FWm-8BN4hyzZ5M9Rbm7npO72dU68FebeotGlDK6EtK_OvCFChCyT7-gUc650wjC4PEVwtKVR5k_iezg_LHXZ-1fGPIIu6-j3PsDmp5OdhZPrBKfwxzuC0_Ud4hRbRKHFoFDF1O8tV3SKAA77v-DCH8w8Ww',
    tag: 'Rasa Aman & Bonding'
  },
  {
    id: 'prog-sensorik',
    program: 'Ragam main sensorik-motorik',
    maknaPendidikan: 'Menstimulasi gerak, rasa ingin tahu, dan koordinasi.',
    nilaiYangDibentuk: ['Cageur', 'Pinter'],
    description: 'Eksplorasi ragam tekstur, pasir kinetik higienis, loose parts alami, air, balok kayu, dan senam motorik yang menyenangkan.',
    contohAktivitas: ['Merasakan aneka tekstur aman', 'Meronce & menyusun balok', 'Gerak irama & rintangan mini lembut'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL8IW1oLNKCA3Kum9IoF3QF6yhx91kVHhiPcQ4d5oDm0t82056OIKjCdyQTet8bomuxVK85dLYN7KQAQtz9bS04D3vN1fKX3VyqLHaYdX5Y-mCfWDpu5jMN-fIEKwH_8a0DFuimpo8gNiDfhnOKC_1lguKhvQkbt5eGUxuBuLi1ehaOOq49zSUN2jagIKJw-p3PLiOCzIKVTPO9ZNG9a9SDvZYWnlX8TeIsLv1BCXWKXda7Gg3ovfQRjV49bLrC6g-iG4At2KN_fkjow',
    tag: 'Stimulasi Perkembangan'
  },
  {
    id: 'prog-makan',
    program: 'Rutinitas makan dan kebersihan',
    maknaPendidikan: 'Melatih kemandirian awal dan adab diri.',
    nilaiYangDibentuk: ['Cageur', 'Bener'],
    description: 'Pembiasaan cuci tangan 6 langkah, makan mandiri dengan tangan kanan, minum air putih cukup, sikat gigi ceria, dan toilet training sabar.',
    contohAktivitas: ['Cuci tangan sebelum makan', 'Makan hidangan 4 bintang sendiri', 'Toilet training ramah anak tanpa trauma'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF1_AiY0ZU-dkOGNSqDpDPbbi3rsxvGTyVNLN3oLTYmMR7kgeQA_TGLm0z4DuP0tQuyHSVowluj7ivfX-i2TXEuvBdPvg8oYwf1CvLVNwRS20L4d6l16pKx8f8Dpt0VeetDCoosw4HWvyne5dEcINStfNxZut1D2ul_V4e91WGWSJbOAQ5dc9UucOTnnKCzQXR3A7rKgfUh3hHuOfQmgS0Dk6oFeyGsjXwnI90hvWQJPzq4Kwuz96WjyKi55eu0KNBN_W3IJDIOMKXQQ',
    tag: 'Kemandirian Dini'
  },
  {
    id: 'prog-adab',
    program: 'Adab harian sederhana',
    maknaPendidikan: 'Membiasakan salam, tolong, maaf, terima kasih.',
    nilaiYangDibentuk: ['Bageur', 'Bener'],
    description: 'Penanaman 4 kata ajaib (Tolong, Maaf, Terima Kasih, Permisi), antre giliran, menyayangi teman, dan merapikan mainan setelah selesai.',
    contohAktivitas: ['Merapikan mainan bersama', 'Minta izin saat meminjam mainan', 'Mengucapkan terima kasih dan tolong'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS5CPKwrDhyyPgU5iH1jnOFnvTxXElv6RHknftoeIkqNVnTJGnA_ieL1T_a2HaZu0hHKzl8IUeL2Ma2722kXtiQRqPvSuXM0I5ZsbxGksZN-dTpVU8oXcPiZPkQsefPvKCX7NeLlNUmv_3uC39G_WFaDdlUElXejMSlZCfzdArYjLLEUtdtsnylZeh2xXVzPN7PiV-87oCZbOhpokDQ6QPhrUpo9P980Nv7b78NKMTuUVJVvYF9Z-Km0f_8y7v1nNa08klcdnJDksHOw',
    tag: 'Adab & Karakter'
  },
  {
    id: 'prog-doa',
    program: 'Doa dan kalimat thayyibah',
    maknaPendidikan: 'Mengenalkan Allah melalui suasana harian.',
    nilaiYangDibentuk: ['Bener', 'Bageur'],
    description: 'Mengenalkan doa harian (makan, tidur, masuk kamar mandi), melafalkan Bismillah & Alhamdulillah, serta mendengarkan lantunan murottal riang.',
    contohAktivitas: ['Doa sebelum makan & tidur', 'Murottal Al-Qur\'an lembut', 'Mengenalkan ciptaan Allah lewat alam'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQHcmhX1DlRVmtggkftbiUS4H2miIjXPk8dVtRmuBKw-mKL4GhQvc_SVRJPBQ4prs8-i5sg_ehm7AuEbBuZjjRsHxaJ5U7aBbze3eHXtxXyTKVqmVwGJuOVb7Fz2Zkv-fezqPbMow6KDK25ejyic765RUBj5ZqCcVH3boIv8hETEnrNJGqAmMbA2ph4Np6DBV0E4EF31J8EvB-utR19IhwAK_5ESY9Fydb1oIJkQZCAkoyt4TfelR0msFMZnZC_pr9CS82DzUz2XmVDQ',
    tag: 'Nilai Tauhid & Spiritual'
  },
  {
    id: 'prog-daily-report',
    program: 'Daily report orang tua',
    maknaPendidikan: 'Membangun kepercayaan dan kolaborasi rumah-sekolah.',
    nilaiYangDibentuk: ['Kolaborasi'],
    description: 'Pencatatan digital dan jurnal harian lengkap: porsi makan, durasi tidur siang, buang air, stimulasi yang didapat, mood anak, dan foto kegiatan.',
    contohAktivitas: ['Laporan digital jam makan & tidur', 'Dokumentasi foto ekspresi anak', 'Konsultasi berkala perkembangan ananda'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOsLQegnCLZkoCDLv4cbxA4n0s5BsxxMUKn2Ylm3EJPL86qya4skXuwADHzZubBmJ9-cD_HgH7g5kOKmvt59N1fXm_4Fu7wsDKf-siV9d6w6cjN0XPjeHyVZZCBXCScMY9u3sDr-pvdkuJ5jWgIpw_5Vag_RFcm7A4fc228-XVXEglSd-JeDxrNeKkXpZ-BgMnEtLX6CK03sKbgqCW2B-LpNOtTZzivcxwRxlQ4plp5n8Yg3ZbiTAwBOqxHeXAV3IKu0Qse4dP108gdQ',
    tag: 'Komunikasi Transparan'
  }
];

// 6. Turunan Nilai Cageur, Bageur, Bener, Pinter, Singer
export const PANCA_WALUYA_VALUES: PancaWaluyaValue[] = [
  {
    name: 'Cageur',
    maknaDiUnit: 'Sehat, aman, nyaman, dan ritme harian terjaga.',
    contohPerilaku: [
      'Makan teratur dengan gizi seimbang',
      'Membiasakan cuci tangan 6 langkah',
      'Istirahat dan tidur siang yang cukup',
      'Bermain aktif dan bergerak ceria'
    ],
    iconName: 'heart',
    accentColor: '#E76F51',
    bgLight: 'bg-rose-50'
  },
  {
    name: 'Bageur',
    maknaDiUnit: 'Mulai peduli dan lembut kepada teman.',
    contohPerilaku: [
      'Menyapa pendidik dan teman dengan ramah',
      'Berbagi mainan dan bergiliran',
      'Tidak menyakiti teman (berkata dan bersikap lembut)'
    ],
    iconName: 'user',
    accentColor: '#00A896',
    bgLight: 'bg-teal-50'
  },
  {
    name: 'Bener',
    maknaDiUnit: 'Mulai mengenal aturan sederhana.',
    contohPerilaku: [
      'Menunggu giliran dengan sabar',
      'Merapikan kembali mainan ke tempatnya',
      'Mengikuti ritme dan rutinitas harian'
    ],
    iconName: 'star',
    accentColor: '#F39C12',
    bgLight: 'bg-amber-50'
  },
  {
    name: 'Pinter',
    maknaDiUnit: 'Rasa ingin tahu dan bahasa mulai tumbuh.',
    contohPerilaku: [
      'Senang bertanya dan mengeksplorasi hal baru',
      'Meniru kalimat baik dan menyebut nama benda',
      'Berani mencoba ragam aktivitas bermain'
    ],
    iconName: 'lightbulb',
    accentColor: '#3B82F6',
    bgLight: 'bg-blue-50'
  },
  {
    name: 'Singer',
    maknaDiUnit: 'Berani mencoba dan beradaptasi.',
    contohPerilaku: [
      'Tidak mudah menangis saat masa transisi pagi',
      'Mencoba makan sendiri dan minum mandiri',
      'Cepat beradaptasi dengan lingkungan baru'
    ],
    iconName: 'globe',
    accentColor: '#10B981',
    bgLight: 'bg-emerald-50'
  }
];

// 7. Peran Guru, Wali Kelas, dan Orang Tua
export const ROLE_ACTORS: RoleActor[] = [
  {
    aktor: 'Pendidik',
    subtitle: 'Pengasuh, teladan, dan penjaga rasa aman',
    peranUtama: 'Menghadirkan kehangatan dan stimulasi terarah bagi setiap ananda.',
    bentukTindakan: [
      'Menyambut anak dengan senyum dan pelukan hangat di pintu kedatangan',
      'Mendampingi proses transisi dan menenangkan emosi anak',
      'Memberikan stimulasi bermain sensorik-motorik sesuai usia',
      'Mencatat perkembangan, kebiasaan, dan kondisi harian anak'
    ],
    iconName: 'user-check',
    badge: 'Pendidik & Pengasuh'
  },
  {
    aktor: 'Koordinator',
    subtitle: 'Menjaga standar pengasuhan dan keselamatan',
    peranUtama: 'Memastikan seluruh operasional aman, higienis, dan sesuai standar yayasan.',
    bentukTindakan: [
      'Memastikan jadwal harian berjalan teratur dan konsisten',
      'Mengawasi kebersihan ruangan, sterilisasi alat, dan menu gizi',
      'Menjaga rasio pendidik-anak agar tetap ideal dan aman',
      'Mengelola komunikasi harian yang terbuka dengan orang tua'
    ],
    iconName: 'shield',
    badge: 'Koordinator Unit'
  },
  {
    aktor: 'Orang tua',
    subtitle: 'Melanjutkan pembiasaan di rumah',
    peranUtama: 'Mitra utama dalam menyelaraskan pembiasaan adab dan rutinitas sehat.',
    bentukTindakan: [
      'Menjaga jam tidur malam yang cukup agar anak bangun segar',
      'Menyediakan bekal sehat dan pakaian ganti yang nyaman',
      'Membangun komunikasi terbuka dengan pendidik terkait kondisi anak',
      'Menjaga konsistensi rutinitas dan adab yang telah dibiasakan di Day Care'
    ],
    iconName: 'heart-handshake',
    badge: 'Mitra Orang Tua'
  }
];

// 8. Output Per Fase / Tingkat
export const PHASE_OUTPUTS: PhaseOutput[] = [
  {
    fase: 'Adaptasi',
    rentangUsia: 'Bulan 1 - 2 (Awal Masuk)',
    fokus: 'Rasa aman dan kelekatan emosional',
    outputAnak: 'Anak mengenal pendidik, ruang bermain, dan ritme rutinitas harian dengan nyaman.',
    keyPractices: [
      'Penyambutan penuh kelembutan tanpa pemisahan paksa',
      'Eksplorasi ruang bermain bersama pengasuh terpercaya',
      'Mulai merasa nyaman saat ditinggal orang tua bekerja'
    ]
  },
  {
    fase: 'Pembiasaan',
    rentangUsia: 'Bulan 3 - 6',
    fokus: 'Rutinitas sehat dan adab harian',
    outputAnak: 'Anak mulai mandiri dalam aktivitas sederhana (cuci tangan, makan sendiri, merapikan mainan).',
    keyPractices: [
      'Pembiasaan doa sebelum dan sesudah makan',
      'Toilet training terstruktur dan sabar',
      'Belajar 4 kata ajaib: tolong, maaf, terima kasih, permisi'
    ]
  },
  {
    fase: 'Kesiapan TK',
    rentangUsia: 'Usia 3 - 4 Tahun (Pra-TK)',
    fokus: 'Sosial, bahasa, motorik, dan kematangan emosi',
    outputAnak: 'Anak lebih percaya diri, mampu mengekspresikan kebutuhan, dan siap mengikuti kegiatan kelompok.',
    keyPractices: [
      'Kemampuan berbagi mainan dan bergiliran dengan teman',
      'Kosa kata kaya untuk mengungkapkan perasaan dan kebutuhan',
      'Motorik halus matang untuk memegang alat dan mandiri'
    ]
  }
];

// 9. Keunggulan Unit yang Perlu Dikomunikasikan
export const UNIT_ADVANTAGES: UnitAdvantage[] = [
  {
    id: 'adv-1',
    title: 'Pengasuhan Islami yang Hangat dan Tidak Kaku',
    description: 'Nilai tauhid dan adab diperkenalkan secara natural lewat kebiasaan harian, doa, dan interaksi yang penuh kelembutan.',
    iconName: 'sparkles',
    highlight: 'Islami & Lembut'
  },
  {
    id: 'adv-2',
    title: 'Rasio Pendampingan Terjaga',
    description: 'Jumlah pengasuh disesuaikan ketat dengan usia anak (Baby 1:2, Toddler 1:4) agar setiap anak terpantau aman dan mendapat perhatian penuh.',
    iconName: 'users',
    highlight: 'Rasio Ideal'
  },
  {
    id: 'adv-3',
    title: 'Daily Report Terbuka & Transparan',
    description: 'Laporan harian perkembangan fisik, emosi, makan, dan tidur anak dikirimkan rutin setiap hari untuk membangun kepercayaan orang tua.',
    iconName: 'file-text',
    highlight: 'Daily Report'
  },
  {
    id: 'adv-4',
    title: 'Lingkungan Bersih, Aman, dan Lembut',
    description: 'Fasilitas dengan sudut tumpul rounded-edge, matras antibakteri, HEPA filter di ruang tidur, serta standar higienitas tinggi.',
    iconName: 'shield-check',
    highlight: 'Aman & Bersih'
  },
  {
    id: 'adv-5',
    title: 'Bukan Sekadar Menjaga, Tapi Menumbuhkan',
    description: 'Program terencana untuk menumbuhkan kemandirian awal, stimulasi sensori motorik, regulasi emosi, dan adab sejak dini.',
    iconName: 'heart',
    highlight: 'Tumbuh Optimal'
  }
];

// Program Layanan Usia di Day Care Asih Putera
export const ALL_PROGRAMS: ProgramItem[] = [
  {
    id: 'baby-care',
    unit: 'daycare',
    title: 'Baby Care Asih Putera',
    ageGroup: '6 - 18 Bulan',
    description: 'Ruang aman pertama bagi bayi dengan pendampingan penuh kasih, stimulasi sensori motorik awal, kebersihan terjaga, dan rutinitas tidur yang tenang.',
    imageUrl: '/images/baby-care-islamic.jpg',
    ratio: '1 Pendidik : 2 Bayi',
    schedule: '07.00 - 16.30 WIB (Half Day / Full Day)',
    keyActivities: [
      'Welcome & bonding hangat di pagi hari',
      'Tummy time & stimulasi motorik awal terpandu',
      'Stimulasi sensorik taktil dan visual kontras lembut',
      'Rutinitas tidur higienis dengan murottal merdu'
    ],
    facilities: ['Kamar bayi ber-AC + HEPA filter', 'Sterilisasi botol UV', 'Matras busa empuk antibakteri', 'Kulkas & warmer ASI'],
    mealsIncluded: ['MPASI bergizi seimbang sesuai tahap usia bayi', 'Puree buah segar alami'],
    tuitionEstimate: 'Mulai Rp 1.850.000 / bulan'
  },
  {
    id: 'toddler',
    unit: 'daycare',
    title: 'Toddler Daycare Asih Putera',
    ageGroup: '1,5 - 3 Tahun (Batita)',
    description: 'Eksplorasi sensorik-motorik aktif, pembiasaan adab sederhana (salam, tolong, terima kasih), latihan makan mandiri, dan toilet training sabar.',
    imageUrl: '/images/adab-eating-islamic.jpg',
    ratio: '1 Pendidik : 4 Anak',
    schedule: '07.00 - 16.30 WIB (Half Day / Full Day)',
    keyActivities: [
      'Ragam main loose parts, tekstur alami & playdough',
      'Membiasakan cuci tangan & makan mandiri dengan tangan kanan',
      'Toilet training bertahap tanpa paksaan',
      'Storytelling buku bergambar & pengenalan kosa kata'
    ],
    facilities: ['Area bermain motorik toddler', 'Pojok buku cerita islami', 'Toilet mini ramah anak', 'Area tidur personal'],
    mealsIncluded: ['Makan siang 4 bintang bernutrisi', 'Snack buah & susu sore'],
    tuitionEstimate: 'Mulai Rp 1.650.000 / bulan'
  },
  {
    id: 'pra-tk-daycare',
    unit: 'daycare',
    title: 'Pra-TK Daycare (Kesiapan TK)',
    ageGroup: '3 - 4 Tahun',
    description: 'Mempersiapkan kematangan emosi, interaksi sosial (berbagi & bergiliran), pra-literasi gembira, hafalan doa harian, dan kemandirian penuh.',
    imageUrl: '/images/asih-fish-adventure.jpg',
    ratio: '1 Pendidik : 6 Anak',
    schedule: '07.00 - 16.30 WIB (Full Day Care)',
    keyActivities: [
      'Sentra bermain terarah & eksperimen sederhana',
      'Hafalan doa harian, surat pendek & shalat dhuha ceria',
      'Latihan mengungkapkan ide dan bercerita',
      'Kemandirian membereskan mainan dan perlengkapan diri'
    ],
    facilities: ['Sentra bermain eksplorasi tematik', 'Pojok sains & seni kreasi', 'Playground outdoor pasir & rumput', 'Ruang tidur AC tenang'],
    mealsIncluded: ['Snack pagi bernutrisi', 'Makan siang 4 bintang', 'Snack buah sore'],
    tuitionEstimate: 'Mulai Rp 1.550.000 / bulan'
  },
  {
    id: 'daycare-harian',
    unit: 'daycare',
    title: 'Daycare Harian & Fleksibel',
    ageGroup: '6 Bulan - 6 Tahun',
    description: 'Solusi pengasuhan fleksibel harian atau mingguan bagi orang tua dengan agenda mendesak, dinas luar, atau uji coba adaptasi ananda.',
    imageUrl: '/images/tahfidz-story-islamic.jpg',
    ratio: 'Sesuai jenjang usia anak',
    schedule: 'Paket Harian / Mingguan (07.00 - 16.30 WIB)',
    keyActivities: [
      'Mengikuti seluruh aktivitas sentra sesuai kelompok usianya',
      'Pendampingan istirahat dan makan yang aman dan higienis',
      'Daily report langsung via WhatsApp ke orang tua',
      'Proses adaptasi yang ramah dan menenangkan'
    ],
    facilities: ['Akses seluruh fasilitas bermain', 'Loker personal higienis', 'Pemeriksaan suhu pagi', 'Kamar tidur nyaman'],
    mealsIncluded: ['Makan dan snack disesuaikan jam hadir'],
    tuitionEstimate: 'Mulai Rp 120.000 / hari'
  }
];

export const AGE_GROUP_PROGRAMS = ALL_PROGRAMS;

// 10. Bukti Pengalaman Belajar & Rutinitas
export const ROUTINE_ITEMS: RoutineItem[] = [
  {
    id: 'r1',
    time: '07.00 - 08.00',
    title: 'Welcome & Bonding Routine',
    category: 'Penyambutan Hangat',
    iconName: 'sun',
    description: 'Penyambutan penuh senyum, salam, pelukan hangat, cek suhu tubuh, dan briefing singkat kondisi anak dengan orang tua.',
    details: 'Membangun rasa aman sejak anak datang. Pengasuh menyambut dengan kelembutan untuk memastikan masa transisi pagi berjalan nyaman tanpa rasa cemas.',
    parentTips: 'Ucapkan kalimat penyemangat dan pelukan hangat saat berpisah di pintu masuk agar anak percaya diri menjalani hari.',
    nilaiTerkait: ['Cageur', 'Bageur']
  },
  {
    id: 'r2',
    time: '08.00 - 08.45',
    title: 'Morning Circle & Doa Kalimat Thayyibah',
    category: 'Nilai Tauhid & Doa',
    iconName: 'sparkles',
    description: 'Duduk melingkar, sapa teman, murottal ceria, melafalkan doa harian, kalimat thayyibah, dan shalat dhuha terpandu.',
    details: 'Mengenalkan Allah melalui suasana yang menyenangkan, pembiasaan kalimat baik (Bismillah, Alhamdulillah), dan mengenalkan kasih sayang Allah.',
    parentTips: 'Ajak ananda mengulang kalimat thayyibah saat di rumah dalam suasana santai.',
    nilaiTerkait: ['Bener', 'Bageur']
  },
  {
    id: 'r3',
    time: '08.45 - 09.15',
    title: 'Snack Pagi & Adab Makan',
    category: 'Rutinitas Sehat & Adab',
    iconName: 'apple',
    description: 'Cuci tangan 6 langkah, doa makan, duduk rapi, makan buah potong segar / snack organik, dan minum air putih.',
    details: 'Melatih kemandirian makan, membiasakan adab menggunakan tangan kanan, tidak meniup makanan, dan merapikan piring sendiri.',
    parentTips: 'Menu snack sehat selalu divariasikan oleh ahli gizi anak untuk memenuhi mikronutrien alami.',
    nilaiTerkait: ['Cageur', 'Bener']
  },
  {
    id: 'r4',
    time: '09.15 - 11.00',
    title: 'Ragam Main Sensorik-Motorik',
    category: 'Stimulasi Perkembangan',
    iconName: 'shapes',
    description: 'Eksplorasi sentra: pasir kinetik, air, loose parts, balok kayu, kreasi warna alami, dan bermain aktif di playground aman.',
    details: 'Menstimulasi gerak kasar dan halus, melatih koordinasi mata-tangan, serta mengasah rasa ingin tahu tanpa paksaan akademik dini.',
    parentTips: 'Bebaskan anak bereksplorasi; baju ganti higienis selalu disiapkan oleh pengasuh.',
    nilaiTerkait: ['Cageur', 'Pinter']
  },
  {
    id: 'r5',
    time: '11.00 - 11.30',
    title: 'Adab Beres-Beres & Cuci Tangan',
    category: 'Kemandirian & Adab',
    iconName: 'sparkles',
    description: 'Latihan tanggung jawab merapikan mainan ke tempatnya, antre cuci tangan, dan persiapan makan siang.',
    details: 'Membiasakan aturan sederhana dan kepedulian terhadap lingkungan. Mengajarkan kata tolong dan terima kasih saat bekerja sama.',
    parentTips: 'Konsistensi merapikan mainan bersama di rumah akan mempercepat kemandirian anak.',
    nilaiTerkait: ['Bageur', 'Bener']
  },
  {
    id: 'r6',
    time: '11.30 - 12.30',
    title: 'Makan Siang Sehat 4 Bintang',
    category: 'Gizi & Kemandirian Diri',
    iconName: 'utensils',
    description: 'Makan siang bernutrisi seimbang (karbohidrat, protein, sayuran, buah) dengan pendampingan sabar agar anak makan mandiri.',
    details: 'Menu dimasak segar setiap hari tanpa MSG. Anak dibimbing untuk menikmati makanan tanpa paksaan serta terbiasa bersyukur atas rezeki.',
    parentTips: 'Porsi makan dan catatan nafsu makan dicatat di Daily Report digital.',
    nilaiTerkait: ['Cageur', 'Bener']
  },
  {
    id: 'r7',
    time: '12.30 - 14.45',
    title: 'Nap Time & Relaksasi Lembut',
    category: 'Istirahat Berkualitas',
    iconName: 'moon',
    description: 'Toilet time, ganti baju bersih, sikat gigi, lalu tidur siang nyaman di ruangan ber-AC dengan HEPA filter dan murottal lembut.',
    details: 'Tidur siang berkualitas menjaga ritme tubuh anak tetap segar, stabil emosinya, dan mendukung optimalisasi hormon pertumbuhan.',
    parentTips: 'Pengasuh memantau kenyamanan dan posisi tidur ananda secara berkala.',
    nilaiTerkait: ['Cageur']
  },
  {
    id: 'r8',
    time: '14.45 - 16.30',
    title: 'Mandi Sore, Snack & Daily Report',
    category: 'Penjemputan & Laporan',
    iconName: 'heart',
    description: 'Mandi air hangat, diberi minyak telon harum, snack sore, dan serah terima anak kepada orang tua beserta Daily Report.',
    details: 'Membangun kepercayaan dan kolaborasi rumah-sekolah. Orang tua menerima rangkuman aktivitas, jam tidur, nafsu makan, dan mood anak sepanjang hari.',
    parentTips: 'Sambut kepulangan ananda dengan senyum dan apresiasi atas harinya yang menyenangkan.',
    nilaiTerkait: ['Kolaborasi', 'Cageur']
  }
];

// Fasilitas Ramah Anak & Keamanan
export const FACILITIES: FacilityItem[] = [
  {
    id: 'indoor-play',
    title: 'Ruang Tumbuh & Bermain Lembut',
    category: 'Aman & Ramah Anak',
    iconName: 'home',
    colorClass: 'bg-teal-50 text-[#00A896]',
    iconColor: '#00A896',
    description: 'Ruangan ber-AC dengan matras tebal antibakteri, sudut furnitur rounded-edge (tumpul), mainan edukatif non-toxic, rak buku cerita, dan perosotan mini lembut.',
    safetyStandards: ['Sudut furnitur bulat aman (rounded-edge)', 'Disinfeksi berkala dengan bahan food-grade', 'Mainan bersertifikat SNI & BPA-free']
  },
  {
    id: 'sleeping-area',
    title: 'Kamar Tidur Bersih Ber-HEPA Filter',
    category: 'Kenyamanan & Relaksasi',
    iconName: 'bed',
    colorClass: 'bg-indigo-50 text-indigo-600',
    iconColor: '#4F46E5',
    description: 'Ruang tidur tenang bersuhu sejuk stabil 22-24°C, sprei personal higienis, diffuser aromaterapi lavender alami, pembersih udara HEPA, dan pengawasan siaga.',
    safetyStandards: ['HEPA Filter pembersih udara anti-alergen', 'Seprai personal dicuci higienis berkala', 'Pengawasan tidur anak setiap 15 menit']
  },
  {
    id: 'toilet-training',
    title: 'Area Kebersihan & Toilet Training Ramah Anak',
    category: 'Kemandirian & Higienitas',
    iconName: 'bath',
    colorClass: 'bg-emerald-50 text-emerald-600',
    iconColor: '#059669',
    description: 'Kamar mandi balita dengan kloset mini seukuran anak, wastafel rendah mandiri, air hangat higienis, dan pendampingan toilet training yang sabar tanpa rasa takut.',
    safetyStandards: ['Lantai anti-slip bertekstur aman', 'Kran air dan sabun dirancang ramah balita', 'Pendampingan 1-on-1 oleh pengasuh perempuan']
  },
  {
    id: 'outdoor-garden',
    title: 'Playground Alam & Rumput Bersih',
    category: 'Motorik & Eco-Play',
    iconName: 'trees',
    colorClass: 'bg-amber-50 text-amber-600',
    iconColor: '#D97706',
    description: 'Halaman bermain hijau beralas rumput sintetis higienis, bak pasir alami bersih, kebun mini sayur, dan kanopi peneduh untuk aktivitas motorik di bawah matahari pagi.',
    safetyStandards: ['Pagar pengaman keliling kokoh', 'Kanopi peneduh anti sinar UV langsung', 'Pengawasan aktif pendidik di setiap sudut']
  },
  {
    id: 'cctv-safety',
    title: 'Sistem Keamanan & Protokol Terjaga',
    category: 'Keamanan & Akses Terpantau',
    iconName: 'shield-check',
    colorClass: 'bg-rose-50 text-rose-600',
    iconColor: '#E11D48',
    description: 'Akses gerbang satu pintu (one-gate system) dengan satpam terlatih, CCTV di setiap area pengasuhan, serta protokol penjemputan resmi dengan identitas terverifikasi.',
    safetyStandards: ['Perekaman CCTV 24 jam nonstop', 'Protokol penjemputan kartu identitas resmi', 'Fasilitas P3K lengkap & dokter visit berkala']
  },
  {
    id: 'daily-report-system',
    title: 'Daily Report Digital & Konsultasi Terbuka',
    category: 'Kolaborasi Rumah-Sekolah',
    iconName: 'smartphone',
    colorClass: 'bg-blue-50 text-blue-600',
    iconColor: '#2563EB',
    description: 'Sistem laporan harian digital yang merangkum porsi makan, durasi tidur, buang air, stimulasi harian, mood ananda, dan foto kegiatan sebelum jam kepulangan.',
    safetyStandards: ['Laporan harian terkirim transparan setiap sore', 'Grup komunikasi tertutup privat', 'Konsultasi rutin tumbuh kembang']
  }
];

// 12. FAQ Internal untuk Menjelaskan Unit
export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'internal',
    isStrategic: true,
    question: 'Apa bedanya Day Care Asih Putera dengan tempat penitipan biasa?',
    answer: 'Day Care Asih Putera bukan sekadar tempat menitipkan anak, melainkan ruang tumbuh awal. Kami menekankan rasa aman, kasih sayang, rutinitas sehat, stimulasi perkembangan sesuai usia, dan pembiasaan adab Islami secara lembut tanpa paksaan.'
  },
  {
    id: 'faq-2',
    category: 'internal',
    isStrategic: true,
    question: 'Bagaimana komunikasi dengan orang tua?',
    answer: 'Kami menerapkan sistem Daily Report harian yang transparan. Orang tua mendapat laporan perkembangan, porsi makan, jam tidur, buang air, dan kebiasaan anak secara jelas agar pembiasaan di rumah dan di Day Care tetap selaras.'
  },
  {
    id: 'faq-3',
    category: 'internal',
    isStrategic: true,
    question: 'Apakah anak dipaksa belajar akademik di Day Care Asih Putera?',
    answer: 'Tidak sama sekali. Fokus utama kami pada usia dini adalah membangun rasa aman, kemandirian awal, perkembangan bahasa, stimulasi motorik, kecerdasan sosial-emosional, dan pengenalan adab sesuai tahap perkembangan anak.'
  },
  {
    id: 'faq-4',
    category: 'pendaftaran',
    isStrategic: false,
    question: 'Berapa usia anak yang diterima di Day Care Asih Putera?',
    answer: 'Kami menerima anak mulai usia 6 bulan (Baby Care), 1.5 - 3 tahun (Toddler Daycare), hingga 3 - 4 tahun (Pra-TK Daycare). Kami juga menyediakan opsi Daycare Harian dan Mingguan.'
  },
  {
    id: 'faq-5',
    category: 'kesehatan',
    isStrategic: false,
    question: 'Bagaimana standar kebersihan dan menu makanan yang disajikan?',
    answer: 'Seluruh menu makan siang dan snack dimasak segar setiap hari dengan standar gizi 4 bintang tanpa MSG atau pengawet buatan. Ruangan dibersihkan berkala dengan cairan ramah anak, dan ruang tidur dilengkapi HEPA Filter.'
  },
  {
    id: 'faq-6',
    category: 'kegiatan',
    isStrategic: false,
    question: 'Bagaimana proses masa adaptasi awal bagi anak baru?',
    answer: 'Kami mendampingi masa adaptasi dengan penuh kelembutan selama 3-5 hari pertama. Kami juga menyediakan Free Trial Class agar ananda dan orang tua dapat merasakan langsung suasana hangat di Day Care Asih Putera.'
  }
];

// Testimoni Orang Tua
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    parentName: 'Ibu Rina Septiani, S.Si.',
    childName: 'Bunda dari Aafiyah (Toddler Care)',
    quote: 'Day Care Asih Putera benar-benar ruang aman pertama untuk anak saya. Aafiyah jadi ceria, mandiri makan sendiri, dan di rumah spontan mengucap doa dan terima kasih.',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfx-Ej_dw9aJw6szF8JDHmy5Rcq7BpVCcIRzljMa8BXPbPZHm4TQnm17OYD7BbSCXzpNSj2sR7Ygf1-lYBOUB117Sbl0yaP5HCrUM1SIlTybGHigKzEPmAfj5m4sjnvUZd3WCx_0x0TOQyN6wZoV8UftZR9wVXTLbeIZAigPrELP0XkgwIngXokfKF3a2XyLvPrJ682Cc_NYBgn7d8YJWEGnefWxZuUkLn30x8hex0W6DzwZxdmVp0',
    rating: 5,
    programEnrolled: 'Toddler Daycare (1,5 - 3 thn)',
    fullReview: 'Sebagai ibu bekerja, kekhawatiran terbesar saya adalah apakah anak diasuh dengan penuh kasih. Di Asih Putera, para bunda dan ustadzah sangat telaten. Laporan makannya detail, tidurnya nyenyak, dan toilet training-nya sukses tanpa rasa takut.'
  },
  {
    id: 'testi-2',
    parentName: 'Bapak Dimas Pratama, S.T.',
    childName: 'Ayah dari Rafif (Pra-TK)',
    quote: 'Komunikasi hariannya luar biasa jelas. Daily report-nya detail sehingga kami bisa meneruskan pembiasaan adab dan kemandirian yang sama di rumah.',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACllWcgj-7upMfl89OtKZzuPJjYTubP7g1IC75N4uqTmw2MGDGt1q1HYVSeIFMvfk_FA0qr5qxnw0cYilOQyiuVhzGGiUYxCbuLFxlkN0iooIblDl3p912O89aEq9mX0UVRis4VQys7BEHBC-dyfuNLbmWRtjrbv5uwbVA6fhZYwkT-eDUkk80Ni1zDZ4g7TvWtCv9gmocg_tcz_hqMD7_f4sXrHRSeYUmWDt2WDsUy6cnZzXhp-Ha',
    rating: 5,
    programEnrolled: 'Pra-TK Daycare (3 - 4 thn)',
    fullReview: 'Kombinasi nilai Cageur, Bageur, Bener, Pinter, Singer dan pengasuhan islami yang tidak kaku membuat anak sangat betah. Lingkungannya bersih dan rasionya pas sehingga pengawasan terjaga maksimal.'
  },
  {
    id: 'testi-3',
    parentName: 'Ibu dr. Annisa Nurul',
    childName: 'Bunda dari Rayyan (Baby Care)',
    quote: 'Pelayanan Baby Care-nya sangat higienis dan penuh kehangatan. Rayyan tidur teratur dan stimulasi motoriknya terpantau optimal.',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl0kuDuBNO1Lsk_alUZaNv3ASqcgbOLfTLJl-AFn48dACw0GdUhmD9jHpXNMfBYdWJbNS1hZV1NhHAdKVH4kOi1H7Qa25MBBo2YAUO66b14E1gpnX27DvPTHe5yVkuEKEfb8U8RJGCbe10bhs5dt0vBr_Kd_bRakM1e5oE4Q43rh_2rktcvqeCRnTt7om-YrL44iacH0PDzDKw7t_lnViEce9F0ZX1cwuiM63cGq6XDCpoLPV2sRqI',
    rating: 5,
    programEnrolled: 'Baby Care (6 - 18 bln)',
    fullReview: 'Sebagai dokter, saya sangat memperhatikan sterilisasi dan protokol kesehatan. Day Care Asih Putera memenuhi semua standar kebersihan dan keamanan yang saya harapkan.'
  }
];

// Berita & Edukasi Parenting
export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Trial Class & Konsultasi Parenting: Ruang Aman Tumbuh Kembang Ananda',
    dateDay: '28',
    dateMonthYear: 'Mei 2026',
    imageUrl: '/images/hero-islamic-daycare.jpg',
    category: 'Agenda Pengasuhan',
    summary: 'Ajak ananda merasakan langsung suasana hangat di Day Care Asih Putera, ikuti simulasi stimulasi sensori motorik dan konsultasi bersama pendidik.',
    content: 'Day Care Asih Putera membuka kesempatan bagi Ayah dan Bunda untuk mengunjungi lingkungan Day Care, melihat contoh Daily Report harian, dan mencoba masa adaptasi yang ramah anak.',
    location: 'Kampus Day Care Asih Putera, Cimahi',
    time: '08.30 - 11.30 WIB'
  },
  {
    id: 'news-2',
    title: 'Tips Membangun Kelekatan dan Rutinitas Sehat Saat Ibu Bekerja',
    dateDay: '15',
    dateMonthYear: 'Mei 2026',
    imageUrl: '/images/adab-eating-islamic.jpg',
    category: 'Edukasi Parenting',
    summary: 'Kunci sukses masa transisi anak: konsistensi jam tidur, bonding di pagi hari, dan komunikasi terbuka dengan pendidik Day Care.',
    content: 'Membangun rasa aman anak dimulai dari kelekatan emosional yang konsisten antara rumah dan lingkungan Day Care. Simak panduan praktis dari tim pendidik Asih Putera.',
    location: 'Artikel Edukasi Asih Putera',
    time: 'Waktu Baca: 3 Menit'
  },
  {
    id: 'news-3',
    title: 'Adventure Day: Eksplorasi Alam & Ketangkasan Tangkap Ikan',
    dateDay: '05',
    dateMonthYear: 'Mei 2026',
    imageUrl: '/images/asih-fish-adventure.jpg',
    category: 'Stimulasi Motorik',
    summary: 'Bagaimana aktivitas fisik ceria menangkap ikan di kolam mini melatih fokus, koordinasi mata-tangan, dan keceriaan ananda bersama teman.',
    content: 'Di Day Care Asih Putera, bermain bukan sekadar mengisi waktu, melainkan proses belajar alami yang menstimulasi rasa percaya diri, kekuatan fisik, dan nilai ukhuwah antar teman.',
    location: 'Halaman Luar Asih Putera',
    time: 'Waktu Baca: 4 Menit'
  }
];

// 11. Narasi Utama PPDB
export const PPDB_MAIN_NARRATIVE = 'Day Care Asih Putera hadir sebagai ruang aman pertama bagi anak. Anak tidak hanya dijaga, tetapi didampingi dengan kasih sayang, rutinitas sehat, stimulasi sesuai usia, dan pembiasaan adab sederhana agar tumbuh lebih mandiri, ceria, dan siap memasuki fase belajar berikutnya.';

// 14. Checklist Implementasi Unit
export const IMPLEMENTATION_CHECKLIST = [
  {
    area: 'Brand',
    checklist: 'Foto dan narasi harus menampilkan rasa aman, bersih, lembut, dan penuh kasih.'
  },
  {
    area: 'Program',
    checklist: 'Pastikan rutinitas harian terdokumentasi dan dapat dijelaskan sebagai proses tumbuh anak.'
  },
  {
    area: 'PPDB',
    checklist: 'Admin harus bisa menjelaskan perbedaan menjaga anak dan menumbuhkan anak.'
  },
  {
    area: 'Orang tua',
    checklist: 'Siapkan format komunikasi harian yang konsisten melalui Daily Report.'
  }
];

// Dokumentasi Galeri Kegiatan
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Stimulasi Sensorik & Bermain Bersama',
    category: 'sentra',
    imageUrl: '/images/hero-islamic-daycare.jpg',
    caption: 'Mengeksplorasi ragam loose parts dan buku edukatif bersama pendidik berhati hangat.',
    date: 'Mei 2026'
  },
  {
    id: 'gal-2',
    title: 'Pembiasaan Adab & Doa Makan Bersama',
    category: 'adab',
    imageUrl: '/images/adab-eating-islamic.jpg',
    caption: 'Membaca doa sebelum makan, duduk tenang, dan belajar makan mandiri dengan tangan kanan.',
    date: 'Mei 2026'
  },
  {
    id: 'gal-3',
    title: 'Adventure Day: Tangkap Ikan & Eksplorasi Sensori Alam',
    category: 'outdoor',
    imageUrl: '/images/asih-fish-adventure.jpg',
    caption: 'Ananda TK Asih Putera antusias belajar menangkap ikan di kolam terpal dengan jaring mini, melatih kesabaran dan kebersamaan.',
    date: 'Mei 2026'
  },
  {
    id: 'gal-4',
    title: 'Dongeng Kisah Teladan & Panggung Boneka',
    category: 'sentra',
    imageUrl: '/images/tahfidz-story-islamic.jpg',
    caption: 'Mendengarkan kisah sahabat Nabi dengan ekspresi ceria dan tanya-jawab interaktif.',
    date: 'April 2026'
  },
  {
    id: 'gal-5',
    title: 'Pengenalan Kalimat Thayyibah & Tahfidz Balita',
    category: 'tahfidz',
    imageUrl: '/images/tahfidz-story-islamic.jpg',
    caption: 'Membiasakan ucapan Bismillah, Alhamdulillah, dan mendengarkan murottal merdu.',
    date: 'Maret 2026'
  },
  {
    id: 'gal-6',
    title: 'Ruang Nyaman Baby Care & Stimulasi Awal',
    category: 'event',
    imageUrl: '/images/baby-care-islamic.jpg',
    caption: 'Pendampingan penuh kelembutan oleh perawat medis dan caregiver bersertifikasi.',
    date: 'Februari 2026'
  }
];

// Profil Pendidik & Pengasuh Tersertifikasi
export const TEACHERS: TeacherItem[] = [
  {
    id: 't-1',
    name: 'Bunda Siti Rahmawati, S.Pd.I',
    role: 'Koordinator Pendidik & Caregiver',
    experience: '8+ Tahun Pengalaman',
    education: 'S1 PG-PAUD UIN Bandung',
    certification: 'Sertifikasi BNSP Pengasuh Anak Usia Dini & First Aid Medis',
    quote: '"Kelekatan emosional dan rasa aman adalah pintu pertama bagi anak untuk mencintai proses belajar."',
    avatarUrl: '/images/teacher-siti.jpg',
    badge: 'Senior Caregiver'
  },
  {
    id: 't-2',
    name: 'Ustadzah Nurul Hidayah, S.Psi',
    role: 'Pendidik Toddler & Konselor Tumbuh Kembang',
    experience: '6+ Tahun Pengalaman',
    education: 'S1 Psikologi Perkembangan Anak',
    certification: 'Sertifikasi Terapi Sensori Integrasi & Montessori Awal',
    quote: '"Mendampingi anak dengan sabar melatih kemandirian dan rasa percaya diri yang kokoh."',
    avatarUrl: '/images/teacher-nurul.jpg',
    badge: 'Child Development Specialist'
  },
  {
    id: 't-3',
    name: 'Bunda Aisyah Wardani, A.Md.Keb',
    role: 'Caregiver Baby Care & Perawat Medis',
    experience: '5+ Tahun Pengalaman',
    education: 'D3 Kebidanan & Kesehatan Anak',
    certification: 'Sertifikasi Resusitasi Bayi & Gizi MPASI Higienis',
    quote: '"Higienitas prima dan sentuhan kasih sayang menjamin ananda senantiasa bugar dan tenang."',
    avatarUrl: '/images/teacher-aisyah.jpg',
    badge: 'Baby Care Specialist'
  }
];

// Featured Programs for Curriculum Carousel
export const FEATURED_PROGRAMS: FeaturedProgram[] = [
  {
    id: 'fp-1',
    title: 'Stimulasi Sensori & Motorik Halus',
    age: 'Usia 6 Bulan - 3 Tahun',
    description: 'Eksplorasi ragam media loose parts, pasir kinetik, dan finger painting untuk mengasah koordinasi motorik.',
    iconName: 'shapes',
    colorClass: 'bg-teal-500',
    badge: 'Sensorik'
  },
  {
    id: 'fp-2',
    title: 'Pembiasaan Adab & Adab Diri Harian',
    age: 'Usia 1.5 - 4 Tahun',
    description: 'Pelatihan toilet training, cuci tangan 6 langkah, doa harian, dan makan mandiri dengan adab Islami.',
    iconName: 'heart',
    colorClass: 'bg-amber-500',
    badge: 'Adab'
  },
  {
    id: 'fp-3',
    title: 'Kesiapan Sosial & Transisi TK',
    age: 'Usia 3 - 4 Tahun',
    description: 'Melatih konsentrasi, interaksi kelompok santun, dan keberanian berekspresi menuju jenjang TK.',
    iconName: 'users',
    colorClass: 'bg-emerald-600',
    badge: 'Sosial'
  }
];
