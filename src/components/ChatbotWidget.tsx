import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles, Phone, HelpCircle, ArrowRight, CornerDownLeft, ThumbsUp } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: { label: string; action: () => void }[];
  time: string;
}

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Assalamu\'alaikum Ayah & Bunda! 👋 Saya RaudhahBot 🤖, asisten ramah Raudhah Asih Putera Daycare & Kindergarten. Ada yang bisa saya bantu hari ini?',
      time: 'Baru saja',
      options: [
        { label: '💰 Rincian Biaya & SPP', action: () => handlePresetClick('Berapa biaya pendaftaran dan SPP bulanan?') },
        { label: '👶 Rasio Pengasuh & Kelas', action: () => handlePresetClick('Berapa rasio pengasuh untuk baby dan toddler?') },
        { label: '📹 Akses CCTV Live', action: () => handlePresetClick('Apakah orang tua bisa memantau CCTV secara live?') },
        { label: '✨ Trial Class Gratis', action: () => handlePresetClick('Bagaimana cara ikut Trial Class gratis?') }
      ]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateBotReply = (query: string): { reply: string; options?: { label: string; action: () => void }[] } => {
    const q = query.toLowerCase();

    if (q.includes('biaya') || q.includes('spp') || q.includes('uang') || q.includes('daftar')) {
      return {
        reply: 'Untuk Tahun Ajaran 2026/2027:\n• Formulir & Asesmen: Rp 350.000\n• Infaq Pengembangan: Rp 5.500.000 - Rp 7.500.000 (sekali di awal)\n• SPP Daycare Full Day: Rp 2.100.000 - Rp 2.700.000/bulan (sudah termasuk makan 3x + snack + laundry harian).\n\nAda diskon Early Bird khusus pendaftaran gelombang 1!',
        options: [
          { label: '📝 Buka Formulir PPDB', action: () => {
            const btn = document.querySelector('[data-ppdb-trigger]') as HTMLElement;
            btn?.click();
          }},
          { label: '📲 Tanya Admin WhatsApp', action: () => window.open('https://wa.me/6281221828884?text=Halo%20Admin%20Raudhah,%20saya%20ingin%20tanya%20detail%20biaya', '_blank') }
        ]
      };
    }

    if (q.includes('rasio') || q.includes('pengasuh') || q.includes('guru') || q.includes('usia')) {
      return {
        reply: 'Rasio pengasuhan di Raudhah Asih Putera sangat ketat untuk memastikan keselamatan maksimal ananda:\n• Baby Care (6-18 bln): 1 Pengasuh : 2 Bayi\n• Toddler Daycare (1.5-3 thn): 1 Pengasuh : 4 Anak\n• KOBer & TK (3-6 thn): 2 Guru Sentra per kelas (maks. 12-15 santri).',
        options: [
          { label: '👀 Lihat Profil Pendidik', action: () => {
            const el = document.getElementById('pendidik-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        ]
      };
    }

    if (q.includes('cctv') || q.includes('pantau') || q.includes('kamera') || q.includes('portal')) {
      return {
        reply: 'Ya, tentu Bunda! Seluruh area kelas, ruang tidur, dan ruang makan dilengkapi kamera CCTV HD. Orang tua dapat mengakses live streaming via aplikasi "Parent Portal Raudhah" yang terenkripsi dan aman.',
        options: [
          { label: '🔒 Lihat Standar Keamanan', action: () => {
            const el = document.getElementById('fasilitas-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        ]
      };
    }

    if (q.includes('jam') || q.includes('jadwal') || q.includes('antar') || q.includes('jemput')) {
      return {
        reply: 'Jadwal operasional Raudhah Asih Putera:\n• Full Day: 07.00 - 17.00 WIB (Senin - Jumat)\n• Half Day: 07.30 - 12.00 WIB\n• TK/KOBer Saja: 07.30 - 11.30 WIB.\n\nTersedia layanan perpanjangan waktu pengasuhan (late pick-up) dengan konfirmasi sebelumnya.',
      };
    }

    if (q.includes('makan') || q.includes('gizi') || q.includes('alergi') || q.includes('menu')) {
      return {
        reply: 'Menu makanan diolah oleh chef internal berstandar 4 Bintang (Halal, Organik, Tanpa MSG/Pengawet). Disesuaikan dengan rekomendasi dokter anak. Tim kami juga memiliki catatan ketat untuk santri dengan riwayat alergi khusus.',
        options: [
          { label: '🥗 Cek Contoh Menu Mingguan', action: () => {
            const el = document.getElementById('gizi-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        ]
      };
    }

    if (q.includes('trial') || q.includes('coba') || q.includes('kunjung')) {
      return {
        reply: 'Ayah & Bunda bisa mencoba Free Trial Class selama 1 hari secara gratis! Ananda akan merasakan serunya bermain di sentra balok, storybook corner, dan berkenalan dengan ustadzah.',
        options: [
          { label: '📅 Booking Trial Sekarang', action: () => {
            const btn = document.querySelector('[data-trial-trigger]') as HTMLElement;
            btn?.click();
          }}
        ]
      };
    }

    return {
      reply: 'Terima kasih atas pertanyaannya! Tim pendaftaran kami dapat memberikan panduan langsung dan simulasi jadwal harian khusus untuk ananda via WhatsApp.',
      options: [
        { label: '💬 Chat Admin WhatsApp Langsung', action: () => window.open('https://wa.me/6281221828884?text=Halo%20Admin%20Raudhah,%20saya%20ingin%20konsultasi%20seputar%20' + encodeURIComponent(query), '_blank') }
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      time: 'Baru saja'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateBotReply(text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.reply,
        options: response.options,
        time: 'Baru saja'
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handlePresetClick = (query: string) => {
    handleSendMessage(query);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      
      {/* Floating Smiling Robot Avatar Trigger Button */}
      {!isOpen && (
        <div className="relative group">
          {/* Floating Speech Prompt */}
          <div className="absolute bottom-16 right-0 bg-white px-3.5 py-2 rounded-2xl shadow-xl border-2 border-[#00A896] text-xs font-bold text-[#16332A] whitespace-nowrap animate-bounce flex items-center space-x-1.5 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-[#00A896] animate-ping"></span>
            <span>Tanya RaudhahBot 🤖 ✨</span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#00473A] to-[#00A896] text-white flex items-center justify-center shadow-2xl hover:scale-108 transition-transform duration-300 border-3 border-white ring-4 ring-[#00A896]/30 cursor-pointer glow-teal"
            aria-label="Buka Chatbot Asisten Raudhah"
          >
            <div className="text-2xl sm:text-3xl animate-wiggle">
              🤖
            </div>
          </button>
        </div>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#00A896]/40 w-[90vw] sm:w-96 max-h-[580px] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          
          {/* Chatbot Header */}
          <div className="bg-[#00473A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#00A896] border border-emerald-300 flex items-center justify-center text-xl shadow-xs">
                🤖
              </div>
              <div>
                <div className="font-serif font-bold text-sm flex items-center">
                  <span>RaudhahBot</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 ml-2 animate-pulse"></span>
                </div>
                <div className="text-[10px] text-emerald-200">
                  Asisten Cerdas Daycare &amp; TK
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-200 hover:text-white p-1 rounded-full hover:bg-white/10 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#FAF7F0] bg-geometric-stars text-xs max-h-[380px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#00A896] text-white rounded-tr-none font-medium'
                      : 'bg-white text-[#16332A] rounded-tl-none border border-amber-200/80'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Optional Interactive Action Buttons from Bot */}
                {msg.options && msg.options.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5 max-w-[95%]">
                    {msg.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={opt.action}
                        className="bg-white hover:bg-teal-50 text-[#00A896] border border-[#00A896]/40 hover:border-[#00A896] px-2.5 py-1 rounded-full text-[11px] font-bold transition shadow-2xs cursor-pointer flex items-center text-left"
                      >
                        <span>{opt.label}</span>
                        <ArrowRight className="w-2.5 h-2.5 ml-1" />
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[9px] text-gray-400 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-1.5 bg-white p-2.5 rounded-2xl rounded-tl-none border border-amber-100 w-20 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F39C12] animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00473A] animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Field with Playful Borders */}
          <div className="p-3 bg-white border-t border-gray-100">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ketik pertanyaan di sini..."
                className="flex-1 bg-[#FAF7F0] border-2 border-dashed border-[#00A896]/50 focus:border-[#00A896] focus:bg-white px-3.5 py-2.5 rounded-2xl text-xs text-[#16332A] outline-hidden transition shadow-inner font-medium placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-2xl bg-[#00A896] hover:bg-[#028090] text-white flex items-center justify-center transition shadow-md cursor-pointer shrink-0"
                aria-label="Kirim Pesan"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2 flex items-center justify-between text-[10px] text-gray-400 px-1">
              <span>Didukung AI Raudhah Asih Putera</span>
              <a
                href="https://wa.me/6281221828884"
                target="_blank"
                rel="noreferrer"
                className="text-[#00A896] font-bold hover:underline"
              >
                Hubungi CS Manusia ↗
              </a>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
