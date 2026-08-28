import React from 'react';

// Bunting Banner flags as seen in preschool / daycare references
export const BuntingBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-start overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 420 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xs"
        preserveAspectRatio="none"
      >
        {/* String curve */}
        <path
          d="M0,8 Q105,25 210,12 Q315,26 420,8"
          stroke="#E2D4B7"
          strokeWidth="2"
          strokeDasharray="4 2"
          fill="none"
        />

        {/* Flag 1 - Coral/Orange */}
        <polygon points="12,10 44,13 28,42" fill="#E67E22" opacity="0.95" />
        {/* Flag 2 - Pastel Yellow */}
        <polygon points="56,15 88,18 72,46" fill="#F4D03F" opacity="0.95" />
        {/* Flag 3 - Turquoise/Teal */}
        <polygon points="100,19 132,19 116,48" fill="#1ABC9C" opacity="0.95" />
        {/* Flag 4 - Rose Pink */}
        <polygon points="144,18 176,16 160,45" fill="#EC7063" opacity="0.95" />
        {/* Flag 5 - Asih Green */}
        <polygon points="188,14 220,12 204,42" fill="#006C59" opacity="0.95" />
        {/* Flag 6 - Amber/Orange */}
        <polygon points="232,13 264,15 248,44" fill="#D35400" opacity="0.95" />
        {/* Flag 7 - Light Gold */}
        <polygon points="276,17 308,20 292,48" fill="#F39C12" opacity="0.95" />
        {/* Flag 8 - Sky Blue */}
        <polygon points="320,21 352,19 336,47" fill="#5DADE2" opacity="0.95" />
        {/* Flag 9 - Grass Green */}
        <polygon points="364,17 396,12 380,43" fill="#2ECC71" opacity="0.95" />
      </svg>
    </div>
  );
};

// Cute Background floating doodles
export const BackgroundDoodles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-75">
      {/* Sparkle Star 1 - Top Left */}
      <div className="absolute top-12 left-8 animate-float text-amber-400">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      {/* Rainbow Arc Top Center */}
      <div className="absolute top-4 left-1/4 opacity-40 hidden sm:block">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
          <path d="M10,60 A50,50 0 0,1 110,60" stroke="#FF6B6B" strokeWidth="6" fill="none" />
          <path d="M18,60 A42,42 0 0,1 102,60" stroke="#FDBA74" strokeWidth="6" fill="none" />
          <path d="M26,60 A34,34 0 0,1 94,60" stroke="#FDE047" strokeWidth="6" fill="none" />
          <path d="M34,60 A26,26 0 0,1 86,60" stroke="#86EFAC" strokeWidth="6" fill="none" />
          <path d="M42,60 A18,18 0 0,1 78,60" stroke="#93C5FD" strokeWidth="6" fill="none" />
        </svg>
      </div>

      {/* Floating Cloud 1 - Top Center */}
      <div className="absolute top-6 right-1/3 animate-float-slow text-amber-200/50">
        <svg width="64" height="36" viewBox="0 0 64 36" fill="currentColor">
          <path d="M18 30H50C56.6274 30 62 24.6274 62 18C62 11.3726 56.6274 6 50 6C49.336 6 48.6865 6.05404 48.0537 6.15814C45.8643 2.50293 41.9168 0 37.3333 0C31.5473 0 26.6974 4.02016 25.4388 9.4795C24.0818 8.54117 22.4287 8 20.6667 8C15.6961 8 11.6667 12.0294 11.6667 17C11.6667 17.5851 11.7226 18.1571 11.8291 18.7107C5.2307 19.3497 0 24.8966 0 31.6667C0 31.7783 0.00143896 31.8896 0.00429712 32.0006C1.9442 34.5025 4.97534 36 8.33333 36H18V30Z" />
        </svg>
      </div>

      {/* Cute Sun rays - Right */}
      <div className="absolute top-20 right-12 animate-float-reverse text-amber-300/60 hidden sm:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="20" cy="20" r="8" fill="#FDE68A" />
          <line x1="20" y1="4" x2="20" y2="8" />
          <line x1="20" y1="32" x2="20" y2="36" />
          <line x1="4" y1="20" x2="8" y2="20" />
          <line x1="32" y1="20" x2="36" y2="20" />
          <line x1="8.68" y1="8.68" x2="11.51" y2="11.51" />
          <line x1="28.49" y1="28.49" x2="31.32" y2="31.32" />
          <line x1="8.68" y1="31.32" x2="11.51" y2="28.49" />
          <line x1="28.49" y1="11.51" x2="31.32" y2="8.68" />
        </svg>
      </div>

      {/* Pastel Circles / Bubbles */}
      <div className="absolute bottom-16 left-12 w-6 h-6 rounded-full bg-rose-200/50"></div>
      <div className="absolute top-1/2 left-4 w-4 h-4 rounded-full bg-emerald-200/60"></div>
      <div className="absolute bottom-24 right-1/4 w-8 h-8 rounded-full bg-orange-200/40"></div>
      <div className="absolute top-1/3 right-8 w-5 h-5 rounded-full bg-blue-200/50"></div>

      {/* Cute Little Hearts */}
      <div className="absolute bottom-32 left-1/4 text-rose-300/70">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      {/* Butterfly */}
      <div className="absolute top-1/4 left-10 text-emerald-400/40 hidden md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,12 C10,6 2,6 3,12 C4,16 9,14 12,12 Z M12,12 C14,6 22,6 21,12 C20,16 15,14 12,12 Z M12,12 C10,15 5,18 6,21 C8,22 11,18 12,12 Z M12,12 C14,15 19,18 18,21 C16,22 13,18 12,12 Z" />
        </svg>
      </div>

      {/* Doodle squiggle line */}
      <div className="absolute bottom-12 right-10 text-asih-orange/30 hidden md:block">
        <svg width="70" height="20" viewBox="0 0 70 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M2,10 Q10,2 18,10 T34,10 T50,10 T66,10" />
        </svg>
      </div>
    </div>
  );
};

// Sticker Badge component for card overlays
interface StickerProps {
  type: 'baby-bottle' | 'blocks' | 'abc' | 'clock' | 'quran' | 'hand' | 'sprout' | 'sun' | 'apple' | 'heart' | 'crayons' | 'puzzle' | 'star';
  className?: string;
}

export const CornerSticker: React.FC<StickerProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'baby-bottle':
      return (
        <div className={`w-11 h-11 sm:w-12 sm:h-12 bg-amber-50 border-2 border-amber-300 rounded-full p-2 flex items-center justify-center shadow-md ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            <path d="M13,4 Q16,1 19,4 L19,7 L13,7 Z" fill="#F5B041" />
            <rect x="11" y="7" width="10" height="3" rx="1.5" fill="#E67E22" />
            <path d="M10,10 L22,10 Q24,10 24,13 L23,26 Q23,29 20,29 L12,29 Q9,29 9,26 L8,13 Q8,10 10,10 Z" fill="#FFF9E6" stroke="#E67E22" strokeWidth="1.5" />
            <path d="M9.5,18 L22.5,18 L22,26 Q22,28 19.5,28 L12.5,28 Q10,28 10,26 Z" fill="#FFEAA7" />
            <line x1="12" y1="14" x2="16" y2="14" stroke="#E67E22" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="12" y1="18" x2="18" y2="18" stroke="#E67E22" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="12" y1="22" x2="16" y2="22" stroke="#E67E22" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'blocks':
      return (
        <div className={`w-11 h-11 sm:w-12 sm:h-12 bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-1.5 flex items-center justify-center shadow-md ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            <rect x="4" y="16" width="11" height="11" rx="2" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
            <text x="9.5" y="24" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle">1</text>
            <rect x="17" y="16" width="11" height="11" rx="2" fill="#3498DB" stroke="#2980B9" strokeWidth="1" />
            <text x="22.5" y="24" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle">2</text>
            <rect x="10.5" y="5" width="11" height="11" rx="2" fill="#F1C40F" stroke="#F39C12" strokeWidth="1" />
            <text x="16" y="13" fill="#7D6608" fontSize="7" fontWeight="bold" textAnchor="middle">3</text>
          </svg>
        </div>
      );

    case 'abc':
      return (
        <div className={`w-11 h-11 sm:w-12 sm:h-12 bg-orange-50 border-2 border-orange-300 rounded-2xl p-1.5 flex items-center justify-center shadow-md ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            <rect x="3" y="15" width="12" height="12" rx="2" fill="#2ECC71" />
            <text x="9" y="24" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">A</text>
            <rect x="17" y="15" width="12" height="12" rx="2" fill="#E67E22" />
            <text x="23" y="24" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">B</text>
            <rect x="10" y="4" width="12" height="12" rx="2" fill="#9B59B6" />
            <text x="16" y="13" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">C</text>
          </svg>
        </div>
      );

    case 'crayons':
      return (
        <div className={`w-11 h-11 sm:w-12 sm:h-12 bg-rose-50 border-2 border-rose-300 rounded-2xl p-1.5 flex items-center justify-center shadow-md ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            {/* Crayon 1 */}
            <path d="M8,4 L11,4 L11,26 L8,26 Z" fill="#E74C3C" />
            <polygon points="8,4 9.5,1 11,4" fill="#C0392B" />
            {/* Crayon 2 */}
            <path d="M14,6 L17,6 L17,28 L14,28 Z" fill="#3498DB" />
            <polygon points="14,6 15.5,3 17,6" fill="#2980B9" />
            {/* Crayon 3 */}
            <path d="M20,5 L23,5 L23,27 L20,27 Z" fill="#F1C40F" />
            <polygon points="20,5 21.5,2 23,5" fill="#F39C12" />
          </svg>
        </div>
      );

    case 'puzzle':
      return (
        <div className={`w-11 h-11 sm:w-12 sm:h-12 bg-indigo-50 border-2 border-indigo-300 rounded-2xl p-1.5 flex items-center justify-center shadow-md ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            <path d="M6,10 L12,10 C12,8 14,8 14,10 C14,12 12,12 12,10 L18,10 L18,16 C20,16 20,18 18,18 C16,18 16,20 18,20 L18,26 L6,26 Z" fill="#6366F1" opacity="0.85" />
          </svg>
        </div>
      );

    case 'clock':
      return (
        <div className={`w-11 h-11 sm:w-12 sm:h-12 bg-teal-50 border-2 border-teal-300 rounded-full p-1.5 flex items-center justify-center shadow-md ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            <circle cx="16" cy="16" r="12" fill="#E8F8F5" stroke="#16A085" strokeWidth="2" />
            <circle cx="16" cy="16" r="2" fill="#16A085" />
            <line x1="16" y1="16" x2="16" y2="9" stroke="#16A085" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="16" x2="21" y2="19" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'quran':
      return (
        <div className={`w-9 h-9 sm:w-10 sm:h-10 bg-emerald-100 border border-emerald-300 rounded-xl p-1.5 flex items-center justify-center shadow-xs ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M2,5 Q7,3 12,6 Q17,3 22,5 L22,19 Q17,17 12,20 Q7,17 2,19 Z" fill="#006C59" />
            <path d="M3,6 Q7.5,4.5 12,7 Q16.5,4.5 21,6 L21,18 Q16.5,16.5 12,19 Q7.5,16.5 3,18 Z" fill="#FFFFFF" />
            <line x1="12" y1="7" x2="12" y2="19" stroke="#00473A" strokeWidth="1.2" />
          </svg>
        </div>
      );

    case 'hand':
      return (
        <div className={`w-9 h-9 sm:w-10 sm:h-10 bg-orange-100 border border-orange-300 rounded-xl p-1.5 flex items-center justify-center shadow-xs ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M12 2C12.5523 2 13 2.44772 13 3V10H14V5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5V10H17V7C17 6.44772 17.4477 6 18 6C18.5523 6 19 6.44772 19 7V13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V10H8V4C8 3.44772 8.44772 3 9 3C9.55228 3 10 3.44772 10 4V10H11V3C11 2.44772 11.4477 2 12 2Z"
              fill="#E67E22"
            />
          </svg>
        </div>
      );

    case 'sprout':
      return (
        <div className={`w-9 h-9 sm:w-10 sm:h-10 bg-green-100 border border-green-300 rounded-xl p-1.5 flex items-center justify-center shadow-xs ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M12,21 L12,12" stroke="#27AE60" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M12,12 Q7,12 5,6 Q11,5 12,12 Z" fill="#2ECC71" />
            <path d="M12,14 Q17,10 19,4 Q13,5 12,14 Z" fill="#27AE60" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
