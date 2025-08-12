'use client';

import { useEffect, useState } from 'react';
import HeaderSection from '@/components/sections/HeaderSection';
import HeroSection from '@/components/sections/HeroSection';
import InfiniteCardsSection from '@/components/sections/InfiniteCardsSection';
import AboutSection from '@/components/sections/AboutSection';
import TokenomicsSection from '@/components/sections/TokenomicsSection';
import HowToBuySection from '@/components/sections/HowToBuySection';
import MemeVaultSection from '@/components/sections/MemeVaultSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import SocialsSection from '@/components/sections/SocialsSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  const contractAddress = '0x1D647Af24B30e763F9cb6C1567bc6B745e27C78e';

  // Blob images fetched dynamically
  const [blobImages, setBlobImages] = useState<{ url: string; pathname: string; }[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const res = await fetch('/api/images');
        const data = await res.json();
        if (Array.isArray(data.images)) {
          setBlobImages(data.images);
        }
      } catch {
        // ignore
      }
    };
    loadImages();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen">
      <HeaderSection />
      <HeroSection />
      <InfiniteCardsSection />
      <AboutSection />
      <TokenomicsSection contractAddress={contractAddress} />
      <HowToBuySection />
      <MemeVaultSection blobImages={blobImages} />
      <RoadmapSection />
      <SocialsSection />
      <FooterSection onCopy={copyToClipboard} />
    </div>
  );
}