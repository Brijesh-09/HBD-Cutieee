import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { PhotoGallery } from './components/PhotoGallery';
import { SpecialMessage } from './components/SpecialMessage';
import { GiftSurprise } from './components/GiftSurprise';
import { Footer } from './components/Footer';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [openGift, setOpenGift] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <Hero />
      <PhotoGallery />
      <SpecialMessage showMessage={showMessage} setShowMessage={setShowMessage} />
      <GiftSurprise openGift={openGift} setOpenGift={setOpenGift} />
      <Footer />
    </div>
  );
}

export default App;