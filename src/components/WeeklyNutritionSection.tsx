import React, { useState } from 'react';
import { Utensils, Apple, ShieldCheck, Heart, Sparkles, Check, AlertCircle, Coffee, Soup } from 'lucide-react';

interface DailyMenu {
  day: string;
  dayName: string;
  theme: string;
  morningSnack: {
    title: string;
    description: string;
    nutrients: string;
  };
  lunchMeal: {
    title: string;
    carb: string;
    animalProtein: string;
    plantProtein: string;
    veggies: string;
    fruit: string;
    soup: string;
  };
  afternoonSnack: {
    title: string;
    description: string;
    drinks: string;
  };
  allergyNotice: string;
}

const WEEKLY_MENUS: DailyMenu[] = [
  {
    day: 'senin',
    dayName: 'Senin',
    theme: 'Semangat Ceria Nusantara',
    morningSnack: {
      title: 'Puding Ubi Ungu & Susu UHT / Kedelai',
      description: 'Puding lembut ubi ungu manis alami dengan saus santan gurih tanpa gula berlebih.',
      nutrients: 'Tinggi Antioksidan & Serat Alami'
    },
    lunchMeal: {
      title: 'Paket Nasi Wangi Pandan & Ayam Suwir Madu Gurih',
      carb: 'Nasi Pulen Pandan Organik',
      animalProtein: 'Ayam Kampung Suwir Madu Jahe',
      plantProtein: 'Tempe Mendoan Oven Sehat',
      veggies: 'Sup Bening Bayam, Jagung Manis & Wortel',
      fruit: 'Potongan Pepaya California Manis Segar',
      soup: 'Kuah Kaldu Ayam Asli Bening'
    },
    afternoonSnack: {
      title: 'Pisang Barangan & Biskuit Gandum Mini',
      description: 'Pisang matang pohon kaya kalium untuk memulihkan energi setelah nap time.',
      drinks: 'Air Putih Hangat & Teh Chamomile Madu'
    },
    allergyNotice: 'Opsi Bebas Gluten & Pengganti Ayam: Daging Sapi Cincang / Tahu Sutra Organik'
  },
  {
    day: 'selasa',
    dayName: 'Selasa',
    theme: 'Sehat Cerdas Omega-3',
    morningSnack: {
      title: 'Bubur Kacang Hijau Santan Encer & Roti Gandum',
      description: 'Bubur kacang hijau dipadu daun pandan wangi dan gula aren murni.',
      nutrients: 'Kaya Vitamin B Kompleks & Asam Folat'
    },
    lunchMeal: {
      title: 'Nasi Liwet Sunda Santri & Salmon/Dori Kukus Lemon',
      carb: 'Nasi Liwet Teri Nasi Halus',
      animalProtein: 'Fillet Ikan Dori / Salmon Panggang Mentega Bawang',
      plantProtein: 'Tahu Bakso Kukus Gurih',
      veggies: 'Sayur Lodeh Labu Siam & Jagung Muda',
      fruit: 'Semangka Merah Tanpa Biji Segar',
      soup: 'Kuah Sayur Asem Bening Gurih'
    },
    afternoonSnack: {
      title: 'Smoothie Mangga Gedong Gincu & Chia Seed',
      description: 'Puree mangga segar dingin alami tanpa pemanis buatan.',
      drinks: 'Infused Water Lemon Madu'
    },
    allergyNotice: 'Opsi Non-Seafood: Daging Ayam Fillet Gulung Telur Puyuh'
  },
  {
    day: 'rabu',
    dayName: 'Rabu',
    theme: 'Kekuatan & Pertumbuhan Tulang',
    morningSnack: {
      title: 'Pancake Pisang Oat Madu Alami',
      description: 'Pancake lembut dari tepung oat, pisang lumat, dan madu murni.',
      nutrients: 'Karbohidrat Kompleks & Kalsium'
    },
    lunchMeal: {
      title: 'Nasi Putih & Bola-Bola Daging Sapi Saus Tomat Segar',
      carb: 'Nasi Beras Merah-Putih Mix Lembut',
      animalProtein: 'Bola Daging Sapi Cincang Saus Tomat Asli',
      plantProtein: 'Nugget Tahu Wortel Homemade',
      veggies: 'Sup Krim Jagung Manis & Brokoli',
      fruit: 'Potongan Melon Madu Hijau',
      soup: 'Sup Krim Jagung Wortel'
    },
    afternoonSnack: {
      title: 'Jasuke Lembut (Jagung Susu Keju Rendah Garam)',
      description: 'Jagung manis pipil kukus dengan taburan keju cheddar anak.',
      drinks: 'Susu Pasteurisasi Segar / Sari Kedelai'
    },
    allergyNotice: 'Opsi Bebas Laktosa: Keju Nabati & Susu Almond/Oat'
  },
  {
    day: 'kamis',
    dayName: 'Kamis',
    theme: 'Eksplorasi Warna & Vitamin',
    morningSnack: {
      title: 'Pastel Mini Isi Sayur & Telur Rebus Ceria',
      description: 'Kulit pastel panggang garing dengan isian kentang, wortel, dan potongan telur.',
      nutrients: 'Protein Tinggi & Vitamin A'
    },
    lunchMeal: {
      title: 'Nasi Kuning Kunyit Alami & Rolade Ayam Sayur',
      carb: 'Nasi Kuning Kunyit Segar (Anti-inflamasi alami)',
      animalProtein: 'Rolade Daging Ayam & Telur Sayur Kukus',
      plantProtein: 'Tempe Orek Manis Lembut',
      veggies: 'Sup Bakso Ikan Sayur Oyong & Soun',
      fruit: 'Jeruk Manis Kupas Segar',
      soup: 'Kuah Kaldu Bening Oyong Bakso'
    },
    afternoonSnack: {
      title: 'Salad Buah Yogurt Madu (Naga, Apel, Melon)',
      description: 'Potongan buah manis dengan dressing yogurt probiotik plain & madu.',
      drinks: 'Air Kelapa Murni Alami'
    },
    allergyNotice: 'Opsi Bebas Telur: Rolade Tahu Jamur Organik'
  },
  {
    day: 'jumat',
    dayName: 'Jumat',
    theme: 'Jumat Berkah & Hidangan Sunnah',
    morningSnack: {
      title: 'Kue Lumpur Labu Kuning & Susu Kurma Lembut',
      description: 'Kue lumpur kukus manis lembut dari labu kuning segar kaya beta-karoten.',
      nutrients: 'Vitamin E, Serat & Energi Berkelanjutan'
    },
    lunchMeal: {
      title: 'Nasi Putih Pulen & Soto Ayam Kampung Kuah Kuning',
      carb: 'Nasi Putih Pulen Hangat',
      animalProtein: 'Soto Suwir Daging Ayam Kampung & Telur Rebus',
      plantProtein: 'Perkedel Kentang Tahu Daun Bawang',
      veggies: 'Tauge Pendek Segar, Kol Iris Halus & Tomat',
      fruit: 'Potongan Buah Naga Merah Manis',
      soup: 'Kuah Soto Kuning Hangat Rempah Alami'
    },
    afternoonSnack: {
      title: 'Roti Panggang Selai Kacang Buatan Sendiri & Pisang',
      description: 'Roti tawar gandum lembut dengan pasta kacang panggang tanpa garam tinggi.',
      drinks: 'Susu Kedelai Hangat / Air Putih Segar'
    },
    allergyNotice: 'Opsi Bebas Kacang: Selai Buah Stroberi Asli Homemade'
  }
];

export const WeeklyNutritionSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('senin');

  const activeMenu = WEEKLY_MENUS.find((m) => m.day === selectedDay) || WEEKLY_MENUS[0];

  return (
    <section id="menu-gizi-section" className="py-16 md:py-24 bg-white scroll-mt-16 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-8 w-16 h-16 rounded-full bg-amber-100/50 pointer-events-none"></div>
      <div className="absolute bottom-12 left-10 w-24 h-24 rounded-full bg-emerald-100/40 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-4 py-1 rounded-full text-xs font-bold mb-3 border border-emerald-200 shadow-2xs">
            <Utensils className="w-3.5 h-3.5 text-emerald-600" />
            <span>Katering Higienis & Nutrisi Pertumbuhan Emas</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-asih-green mb-3">
            Menu Gizi 4 Bintang Santri Cilik
          </h2>
          <div className="w-24 h-1 bg-asih-orange mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Setiap hidangan dimasak segar setiap pagi di dapur sekolah berstandar higienis tinggi oleh ahli gizi anak. <strong>100% Bebas MSG</strong>, pengawet buatan, dan pewarna sintetis.
          </p>
        </div>

        {/* 4 Star Nutrition Key Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-10 text-xs">
          <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl flex items-center space-x-2.5">
            <span className="text-xl">🍚</span>
            <div>
              <strong className="text-gray-800 block font-bold">1. Karbohidrat</strong>
              <span className="text-gray-500 text-[11px]">Beras organik, oat, ubi & gandum</span>
            </div>
          </div>

          <div className="bg-rose-50 border border-rose-200 p-3.5 rounded-2xl flex items-center space-x-2.5">
            <span className="text-xl">🍗</span>
            <div>
              <strong className="text-gray-800 block font-bold">2. Protein Hewani</strong>
              <span className="text-gray-500 text-[11px]">Ayam kampung, ikan laut & sapi</span>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl flex items-center space-x-2.5">
            <span className="text-xl">🌱</span>
            <div>
              <strong className="text-gray-800 block font-bold">3. Protein Nabati</strong>
              <span className="text-gray-500 text-[11px]">Tempe, tahu sutra & kacang hijau</span>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 p-3.5 rounded-2xl flex items-center space-x-2.5">
            <span className="text-xl">🥗</span>
            <div>
              <strong className="text-gray-800 block font-bold">4. Sayur & Buah</strong>
              <span className="text-gray-500 text-[11px]">Bayam, wortel, labu & buah segar</span>
            </div>
          </div>
        </div>

        {/* Day Switcher Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8">
          {WEEKLY_MENUS.map((menu) => {
            const isSelected = menu.day === selectedDay;
            return (
              <button
                key={menu.day}
                onClick={() => setSelectedDay(menu.day)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
                  isSelected
                    ? 'bg-asih-orange text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-asih-orange'
                }`}
              >
                {menu.dayName}
              </button>
            );
          })}
        </div>

        {/* Menu Showcase Card */}
        <div className="max-w-4xl mx-auto bg-asih-light rounded-3xl border-2 border-amber-200/80 p-6 sm:p-8 shadow-lg">
          
          {/* Day Theme Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-amber-200 pb-4 mb-6 gap-2">
            <div>
              <span className="text-xs font-bold text-asih-orange uppercase tracking-wider block">
                Jadwal Menu Hari {activeMenu.dayName}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-asih-green">
                {activeMenu.theme}
              </h3>
            </div>
            <div className="inline-flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-full border border-amber-200 text-xs font-semibold text-emerald-800 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Halal Thayyib Certified</span>
            </div>
          </div>

          {/* 3 Meal Times Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            
            {/* 1. Morning Snack */}
            <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-asih-orange font-bold text-xs uppercase mb-2">
                  <Coffee className="w-4 h-4 text-amber-500" />
                  <span>Snack Pagi (08.45 WIB)</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-gray-800 mb-2 leading-snug">
                  {activeMenu.morningSnack.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  {activeMenu.morningSnack.description}
                </p>
              </div>
              <div className="pt-2 border-t border-gray-100 text-[11px] font-semibold text-emerald-700">
                ✦ {activeMenu.morningSnack.nutrients}
              </div>
            </div>

            {/* 2. Main Lunch (Featured) */}
            <div className="bg-white p-5 rounded-2xl border-2 border-asih-green/30 shadow-md flex flex-col justify-between md:scale-102 ring-2 ring-emerald-100">
              <div>
                <div className="flex items-center justify-between text-emerald-800 font-bold text-xs uppercase mb-2">
                  <div className="flex items-center space-x-1.5">
                    <Soup className="w-4 h-4 text-emerald-600" />
                    <span>Makan Siang (11.30 WIB)</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full">
                    Utama
                  </span>
                </div>
                
                <h4 className="font-serif font-bold text-sm text-asih-green mb-3 leading-snug">
                  {activeMenu.lunchMeal.title}
                </h4>

                <div className="space-y-1.5 text-xs text-gray-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                  <div className="flex items-start">
                    <span className="font-bold text-emerald-900 w-16 shrink-0">Karbo:</span>
                    <span>{activeMenu.lunchMeal.carb}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold text-emerald-900 w-16 shrink-0">Lauk:</span>
                    <span>{activeMenu.lunchMeal.animalProtein} & {activeMenu.lunchMeal.plantProtein}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold text-emerald-900 w-16 shrink-0">Sayur:</span>
                    <span>{activeMenu.lunchMeal.veggies}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold text-emerald-900 w-16 shrink-0">Buah:</span>
                    <span>{activeMenu.lunchMeal.fruit}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Afternoon Snack */}
            <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-rose-600 font-bold text-xs uppercase mb-2">
                  <Apple className="w-4 h-4 text-rose-500" />
                  <span>Snack Sore (15.00 WIB)</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-gray-800 mb-2 leading-snug">
                  {activeMenu.afternoonSnack.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  {activeMenu.afternoonSnack.description}
                </p>
              </div>
              <div className="pt-2 border-t border-gray-100 text-[11px] text-gray-500">
                <strong>Minuman:</strong> {activeMenu.afternoonSnack.drinks}
              </div>
            </div>

          </div>

          {/* Allergy Friendly Card Footer */}
          <div className="bg-white/80 border border-amber-200 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-700 gap-2">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-asih-orange shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900">Perhatian Alergi Khusus:</strong>
                <p className="text-gray-600 text-[11px]">{activeMenu.allergyNotice}</p>
              </div>
            </div>
            <span className="text-[11px] text-asih-green font-bold shrink-0 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              ✓ Menu Alergi Terpantau
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
