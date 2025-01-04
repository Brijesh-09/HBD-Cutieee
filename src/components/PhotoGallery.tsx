
export function PhotoGallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((num) => (
          <div 
            key={num} 
            className="relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 aspect-[4/3]"
          >
            <img
              src={`/${num}.jpg`}
              alt={`Romantic moment ${num}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}