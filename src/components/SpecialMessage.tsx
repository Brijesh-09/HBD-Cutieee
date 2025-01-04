

interface SpecialMessageProps {
  showMessage: boolean;
  setShowMessage: (show: boolean) => void;
}

export function SpecialMessage({ showMessage, setShowMessage }: SpecialMessageProps) {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <button
        onClick={() => setShowMessage(true)}
        className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors duration-300 animate-pulse"
      >
        Click for a Special Message ❤️
      </button>

      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fadeIn z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg">
            <p className="text-xl text-gray-800 mb-4">
              My dearest, every moment with you feels like a celebration. Your smile lights up my world,
              and your love makes every day special. I'm so grateful to have you in my life.
              Happy Birthday Cutieeee 💕
            </p>
            <button
              onClick={() => setShowMessage(false)}
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}