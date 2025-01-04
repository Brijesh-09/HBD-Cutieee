
import { Heart } from 'lucide-react';

export function Hero() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="animate-float">
        <Heart className="inline-block text-pink-500 w-16 h-16 mb-4" />
      </div>
      <h1 className="text-5xl font-bold text-pink-600 mb-4 animate-fadeIn">
        Happy Birthday Saijal ❤️
      </h1>
      <p className="text-xl text-gray-700 mb-8 animate-fadeIn delay-200">
        On this special day, I want to celebrate the amazing person you are
      </p>
    </div>
  );
}