import React, { useState, useEffect, useRef } from 'react';
import { Toaster } from 'sonner';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ManifestoSection } from './components/sections/ManifestoSection';
import { TechnicalProofSection } from './components/sections/TechnicalProofSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { SimulatorSection } from './components/sections/SimulatorSection';
import { ContactSection } from './components/sections/ContactSection';

import { useCalculator } from './hooks/useCalculator';

function App() {
  const {
    constructionType, setConstructionType,
    floorArea, setFloorArea,
    sandTypeSelected, setSandTypeSelected,
    volumes
  } = useCalculator();

  const [initialVolumeStr, setInitialVolumeStr] = useState<string>('');

  const handleQuoteSpecific = (volume: number, label: string) => {
    setInitialVolumeStr(`${volume}m³ - ${label}`);
    const element = document.getElementById('cotacao-secao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Smooth scroll via CSS — no external dependency needed

  return (
    <div className="bg-[#172122] min-h-screen text-[#eae9e5] font-sans selection:bg-[#b79152] selection:text-[#172122] overflow-x-hidden">
      <Toaster position="top-right" richColors theme="dark" />
      <Header />
      
      <main>
        <HeroSection />
        <ManifestoSection />
        <TechnicalProofSection 
          sandTypeSelected={sandTypeSelected}
          setSandTypeSelected={setSandTypeSelected}
          onQuoteSpecific={handleQuoteSpecific}
        />
        <TestimonialsSection />
        <SimulatorSection 
          constructionType={constructionType}
          setConstructionType={setConstructionType}
          floorArea={floorArea}
          setFloorArea={setFloorArea}
          volumes={volumes}
          onQuoteSpecific={handleQuoteSpecific}
        />
        <ContactSection initialVolumeStr={initialVolumeStr} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
