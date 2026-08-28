export interface StrategicSummary {
  segmentasiUtama: string;
  kebutuhanOrangTua: string;
  janjiUtamaUnit: string;
  kesanBrand: string;
  outputUtamaAnak: string;
}

export interface DevelopmentFocusItem {
  area: 'Emosi' | 'Motorik' | 'Sosial' | 'Bahasa' | 'Spiritual-adab';
  fokus: string;
  capaian: string;
  iconName: string;
  colorClass: string;
  badgeColor: string;
}

export interface CoreProgramMeaningItem {
  id: string;
  program: string;
  maknaPendidikan: string;
  nilaiYangDibentuk: string[];
  description: string;
  contohAktivitas: string[];
  imageUrl: string;
  tag: string;
}

export interface PancaWaluyaValue {
  name: 'Cageur' | 'Bageur' | 'Bener' | 'Pinter' | 'Singer';
  maknaDiUnit: string;
  contohPerilaku: string[];
  iconName: string;
  accentColor: string;
  bgLight: string;
}

export interface RoleActor {
  aktor: 'Pendidik' | 'Koordinator' | 'Orang tua';
  subtitle: string;
  peranUtama: string;
  bentukTindakan: string[];
  iconName: string;
  badge: string;
}

export interface PhaseOutput {
  fase: 'Adaptasi' | 'Pembiasaan' | 'Kesiapan TK';
  rentangUsia: string;
  fokus: string;
  outputAnak: string;
  keyPractices: string[];
}

export interface UnitAdvantage {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface ProgramItem {
  id: string;
  unit: 'daycare' | 'tk' | 'kober';
  title: string;
  ageGroup: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  videoTitle?: string;
  mediaType?: 'image' | 'video';
  ratio: string;
  schedule: string;
  keyActivities: string[];
  facilities: string[];
  mealsIncluded: string[];
  tuitionEstimate: string;
}

export interface RoutineItem {
  id: string;
  time: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  details: string;
  parentTips: string;
  nilaiTerkait: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  colorClass: string;
  iconColor: string;
  description: string;
  safetyStandards: string[];
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  childName: string;
  quote: string;
  avatarUrl: string;
  rating: number;
  programEnrolled: string;
  fullReview?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  dateDay: string;
  dateMonthYear: string;
  imageUrl: string;
  category: string;
  summary: string;
  content: string;
  location?: string;
  time?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'internal' | 'pendaftaran' | 'kegiatan' | 'kesehatan';
  isStrategic?: boolean;
}

export interface PPDBFormData {
  parentName: string;
  childName: string;
  childDob: string;
  phone: string;
  email: string;
  programType: string;
  duration: 'half-day' | 'full-day';
  notes: string;
}

export interface VisitFormData {
  parentName: string;
  phone: string;
  childAge: string;
  preferredDate: string;
  preferredTime: string;
  programInterest: string;
  notes: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'sentra' | 'tahfidz' | 'outdoor' | 'adab' | 'event';
  imageUrl: string;
  caption: string;
  date: string;
}

export interface TeacherItem {
  id: string;
  name: string;
  role: string;
  experience: string;
  education: string;
  certification: string;
  quote: string;
  avatarUrl: string;
  badge: string;
}

export interface FeaturedProgram {
  id: string;
  title: string;
  age: string;
  description: string;
  iconName: string;
  colorClass: string;
  badge: string;
}

