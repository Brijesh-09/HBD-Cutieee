import React from 'react';
import { Gift, PartyPopper } from 'lucide-react';

interface GiftSurpriseProps {
  openGift: boolean;
  setOpenGift: (open: boolean) => void;
}

export function GiftSurprise({ openGift, setOpenGift }: GiftSurpriseProps) {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div
        onClick={() => setOpenGift(true)}
        className="cursor-pointer inline-block animate-bounce"
      >
        {!openGift ? (
          <Gift className="w-24 h-24 text-pink-500 hover:text-pink-600 transition-colors duration-300" />
        ) : (
          <div className="animate-confetti">
            <PartyPopper className="w-24 h-24 text-pink-500" />
            <p className="text-2xl font-bold text-pink-600 mt-4">
              A special Lunch date awaits you! 🎉
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
