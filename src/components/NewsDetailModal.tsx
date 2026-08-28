import React from 'react';
import { X, Calendar, MapPin, Clock, ArrowRight, Share2 } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
  onRegisterOpenHouse: () => void;
  onShare: (title: string) => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({
  news,
  onClose,
  onRegisterOpenHouse,
  onShare
}) => {
  if (!news) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative border border-gray-100 my-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-5">
          <img
            alt={news.title}
            className="w-full h-full object-cover"
            src={news.imageUrl}
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-asih-green text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
            {news.category}
          </div>
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-center px-3 py-1.5 rounded-xl border border-gray-200/80 shadow-md">
            <span className="block font-bold text-asih-orange text-lg leading-none">
              {news.dateDay}
            </span>
            <span className="block text-[10px] text-gray-600 font-medium">
              {news.dateMonthYear}
            </span>
          </div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-asih-green mb-3">
          {news.title}
        </h3>

        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1 text-asih-orange" />
            <span>{news.dateDay} {news.dateMonthYear}</span>
          </div>
          {news.time && (
            <div className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-asih-orange" />
              <span>{news.time}</span>
            </div>
          )}
          {news.location && (
            <div className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-asih-orange" />
              <span>{news.location}</span>
            </div>
          )}
        </div>

        <p className="text-sm text-gray-700 leading-relaxed mb-4 font-medium">
          {news.summary}
        </p>

        <p className="text-xs text-gray-600 leading-relaxed mb-6">
          {news.content}
        </p>

        <div className="flex space-x-3">
          <button
            onClick={() => onShare(news.title)}
            className="border border-gray-200 text-gray-600 px-4 py-2.5 rounded-full font-medium text-xs hover:bg-gray-50 transition flex items-center justify-center cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 mr-1.5" />
            Bagikan
          </button>
          <button
            onClick={() => {
              onClose();
              onRegisterOpenHouse();
            }}
            className="flex-1 bg-asih-orange hover:bg-amber-700 text-white py-2.5 rounded-full font-medium text-xs sm:text-sm transition flex items-center justify-center cursor-pointer shadow-xs"
          >
            <span>Daftar / Konfirmasi Kehadiran</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
