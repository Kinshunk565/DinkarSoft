import React from 'react';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import PopupManager from './components/layout/PopupManager';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import Features from './components/sections/Features';
import ComparisonTable from './components/sections/ComparisonTable';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-vanta-black text-white font-body selection:bg-neon-pink selection:text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <PopupManager />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <ComparisonTable />
      </main>
      <Footer />
    </div>
  );
}

export default App;
