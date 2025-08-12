"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0x1D647Af24B30e763F9cb6C1567bc6B745e27C78e';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  return (
    <motion.section
      id="hero"
      className="pt-20 sm:pt-24 px-4 sm:px-6 py-12 sm:py-20 lg:py-32 bg-[linear-gradient(135deg,#FFE5FF_0%,#E5FFFF_25%,#F0FFF0_50%,#FFFACD_75%,#FFE5FF_100%)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-9xl font-bold mb-6 sm:mb-8 mt-6 sm:mt-8 text-foreground fontdiner-swanky-regular">
          <ColourfulText text="Buy Felicia" />
        </h1>
        
        {/* Token Image Placeholder */}
        <div className="mb-6 sm:mb-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto bg-gradient-to-br from-[#E900FF] via-[#16FF00] to-[#00F5FF] rounded-full flex items-center justify-center shadow-lg">
            <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E900FF]">$BYFI</span>
            </div>
          </div>
        </div>
        <div className="text-xl sm:text-2xl lg:text-4xl mb-3 sm:mb-4 font-bold text-[#E900FF]">Any person, place or thing that you hate. Buy Felicia!</div>
        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-foreground/70 font-medium px-2 sm:px-0">
          The most UNHINGED memecoin on BASE! We&apos;re not just going to the moon - we&apos;re buying the ENTIRE GALAXY!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="degen-button btn-zoom bg-[#E900FF] text-white px-8 py-4 rounded-full font-bold text-xl">BUY NOW</button>
          <button className="degen-button btn-bounce bg-[#16FF00] text-black px-8 py-4 rounded-full font-bold text-xl">CHECK THE CHARTS!</button>
        </div>
        
        <div className="mt-8">
          <div className="bg-[#16FF00] border-4 border-[#E900FF] rounded-2xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-black mb-2">TREASURY</h4>
            <div className="text-4xl font-bold text-[#E900FF] degen-pulse mb-2">33,330,000,000 $BYFI</div>
            <p className="text-sm text-black font-medium">Auto-reflections enabled. Refreshes every 30 seconds.</p>
          </div>
        </div>
        
        {/* Contract Address Section - Minimal */}
        <div className="mt-6 text-center">
          <p className="text-sm text-foreground/60 mb-2">CONTRACT ADDRESS</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <code className="text-xs sm:text-sm font-mono text-foreground bg-white/80 px-3 py-2 rounded-lg break-all flex-1">
              {contractAddress}
            </code>
            <Button onClick={copyToClipboard} size="sm" className="bg-[#E900FF] hover:bg-[#E900FF]/80 text-white px-4 py-2 rounded-lg text-sm font-medium shrink-0">
              {copied ? "✓ Copied!" : "Copy"}
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


