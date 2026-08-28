import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface NotificationToastProps {
  message: string | null;
  onClose: () => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white rounded-2xl shadow-2xl border border-amber-200/80 p-4 animate-in slide-in-from-bottom-5">
      <div className="flex items-start">
        <div className="bg-emerald-100 text-emerald-600 p-2 rounded-xl shrink-0 mr-3">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h5 className="font-bold text-xs text-asih-green uppercase tracking-wider mb-0.5">
            Pemberitahuan
          </h5>
          <p className="text-xs text-gray-700 leading-snug">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 p-1 rounded-full transition ml-2"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
