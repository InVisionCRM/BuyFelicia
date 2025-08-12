"use client";
import ColourfulText from "@/components/ui/colourful-text";
import React, { useState } from "react";

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-[#E900FF] shadow-lg">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold barrio-regular">
            <ColourfulText text="Buy Felicia" />
          </div>
          <nav className="hidden md:flex space-x-4 zain-bold">
            <button onClick={() => scrollToSection("hero")} className="text-black hover:text-[#E900FF] transition-colors">Home</button>
            <button onClick={() => scrollToSection("about")} className="text-black hover:text-[#E900FF] transition-colors">What is BYFI?</button>
            <button onClick={() => scrollToSection("tokenomics")} className="text-black hover:text-[#E900FF] transition-colors">Tokenomics</button>
            <button onClick={() => scrollToSection("howtobuy")} className="text-black hover:text-[#E900FF] transition-colors">How to Buy</button>
            <button onClick={() => scrollToSection("memes")} className="text-black hover:text-[#E900FF] transition-colors">Memes</button>
            <button onClick={() => scrollToSection("roadmap")} className="text-black hover:text-[#E900FF] transition-colors">Roadmap</button>
            <button onClick={() => scrollToSection("socials")} className="text-black hover:text-[#E900FF] transition-colors">Socials</button>
          </nav>
          <div className="flex items-center gap-4">
            <button className="relative inline-flex h-10 md:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 md:px-5 py-1 text-sm font-bold text-white backdrop-blur-3xl">
                Buy Now
              </span>
            </button>
            <button 
              className="md:hidden text-foreground" 
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-[#E900FF] shadow-lg">
          <nav className="px-6 py-4 space-y-4 zain-bold">
            <button 
              onClick={() => scrollToSection("hero")} 
              className="block w-full text-left text-black hover:text-[#E900FF] transition-colors py-2 border-b border-gray-100"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="block w-full text-left text-black hover:text-[#E900FF] transition-colors py-2 border-b border-gray-100"
            >
              What is BYFI?
            </button>
            <button 
              onClick={() => scrollToSection("tokenomics")} 
              className="block w-full text-left text-black hover:text-[#E900FF] transition-colors py-2 border-b border-gray-100"
            >
              Tokenomics
            </button>
            <button 
              onClick={() => scrollToSection("howtobuy")} 
              className="block w-full text-left text-black hover:text-[#E900FF] transition-colors py-2 border-b border-gray-100"
            >
              How to Buy
            </button>
            <button 
              onClick={() => scrollToSection("memes")} 
              className="block w-full text-left text-black hover:text-[#E900FF] transition-colors py-2 border-b border-gray-100"
            >
              Memes
            </button>
            <button 
              onClick={() => scrollToSection("roadmap")} 
              className="block w-full text-left text-black hover:text-[#E900FF] transition-colors py-2 border-b border-gray-100"
            >
              Roadmap
            </button>
            <button 
              onClick={() => scrollToSection("socials")} 
              className="block w-full text-left text-black hover:text-[#E900FF] transition-colors py-2"
            >
              Socials
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}


