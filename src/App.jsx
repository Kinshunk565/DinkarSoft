import React from 'react';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import PopupManager from './components/layout/PopupManager';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-vanta-black text-white font-body selection:bg-neon-pink selection:text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <PopupManager />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
