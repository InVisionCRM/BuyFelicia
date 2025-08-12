"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function FooterSection({ onCopy }: { onCopy: () => void }) {
  return (
    <footer className="px-6 py-12 bg-black zain-bold">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 bg-white/95 rounded-3xl p-6 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4 text-black">
            <span className="gradient-text">Buy Felicia</span> • $BYFI
          </h3>
          <div className="flex justify-center gap-4 text-lg flex-wrap">
            <Button variant="ghost" onClick={onCopy} className="hover:text-[#E900FF] transition-colors text-black font-bold p-0 h-auto">CONTRACT</Button>
            <span className="text-black">•</span>
            <Button variant="ghost" asChild className="hover:text-[#16FF00] transition-colors text-black font-bold p-0 h-auto"><a href="#">TWITTER MADNESS</a></Button>
            <span className="text-black">•</span>
            <Button variant="ghost" asChild className="hover:text-[#00F5FF] transition-colors text-black font-bold p-0 h-auto"><a href="#">TELEGRAM CHAOS</a></Button>
          </div>
        </div>
        <div className="text-sm text-white max-w-2xl mx-auto">
          <p className="mb-2 font-bold">2025 Buy Felicia - ALL RIGHTS TO THE MOON!</p>
          <p className="font-medium"><strong>ULTRA DISCLAIMER:</strong> This is 100% PURE DEGENERACY! Crypto is risky AF! Only invest what you can afford to lose while laughing maniacally! Buy Felicia is a meme with ZERO intrinsic value - just MAXIMUM CHAOS!</p>
          <p className="mt-4 font-bold text-[#E900FF]">BYE FELICIA TO BORING INVESTMENTS!</p>
        </div>
      </div>
    </footer>
  );
}


