'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ColourfulText from '@/components/ui/colourful-text';
import StickyScrollRevealDemo from '@/components/ui/sticky-scroll-reveal-demo';
import { WobbleCard } from '@/components/ui/wobble-card';
import { GlareCard } from '@/components/ui/glare-card';
import InfiniteMovingCardsDemo from '@/components/infinite-moving-cards-demo';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

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



  const imagesPerPage = 6;
  const totalPages = Math.ceil(Math.max(0, blobImages.length - 1) / imagesPerPage);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
             setCopied(true);
       setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCurrentPageImages = () => {
    const startIndex = 1 + (currentPage * imagesPerPage);
    return blobImages.slice(startIndex, startIndex + imagesPerPage);
  };

  return (
    <div className="min-h-screen">
      {/* Header with Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-[#E900FF] shadow-lg">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
              <div className="text-2xl font-bold barrio-regular">
                <ColourfulText text="Buy Felicia" />
              </div>
            <nav className="hidden md:flex space-x-4 zain-bold">
              <button onClick={() => scrollToSection('hero')} className="text-black hover:text-[#E900FF] transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-black hover:text-[#E900FF] transition-colors">What is BYFI?</button>
              <button onClick={() => scrollToSection('tokenomics')} className="text-black hover:text-[#E900FF] transition-colors">Tokenomics</button>
              <button onClick={() => scrollToSection('howtobuy')} className="text-black hover:text-[#E900FF] transition-colors">How to Buy</button>
              <button onClick={() => scrollToSection('memes')} className="text-black hover:text-[#E900FF] transition-colors">Memes</button>
              <button onClick={() => scrollToSection('roadmap')} className="text-black hover:text-[#E900FF] transition-colors">Roadmap</button>
              <button onClick={() => scrollToSection('socials')} className="text-black hover:text-[#E900FF] transition-colors">Socials</button>
            </nav>
                         <div className="flex items-center gap-4">
               {/* Buy Now playful button */}
               <button className="relative inline-flex h-10 md:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                 <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                 <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 md:px-5 py-1 text-sm font-bold text-white backdrop-blur-3xl">
                   Buy Now
                 </span>
               </button>
               <button className="md:hidden text-foreground" aria-label="Open menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="pt-24 px-6 py-20 lg:py-32 bg-secondary"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl lg:text-8xl font-bold mb-6 text-foreground fontdiner-swanky-regular">
            <ColourfulText text="Buy Felicia" />
          </h1>
                     <div className="text-2xl lg:text-4xl mb-4 font-bold text-[#E900FF]">
             TO THE MOON OR BUST!
           </div>
          <p className="text-lg lg:text-xl mb-8 text-foreground/70 font-medium">
            The most UNHINGED memecoin on BASE! We&apos;re not just going to the moon - we&apos;re buying the ENTIRE GALAXY!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="degen-button btn-zoom bg-[#E900FF] text-white px-8 py-4 rounded-full font-bold text-xl">
              BUY NOW
            </Button>
            <Button size="lg" className="degen-button btn-bounce bg-[#16FF00] text-black px-8 py-4 rounded-full font-bold text-xl">
              CHECK THE CHARTS!
            </Button>
          </div>
          {/* Treasury moved from Tokenomics */}
          <div className="mt-8">
            <div className="bg-[#16FF00] border-4 border-[#E900FF] rounded-2xl p-6 max-w-2xl mx-auto">
              <h4 className="text-lg font-bold text-black mb-2">TREASURY</h4>
              <div className="text-4xl font-bold text-[#E900FF] degen-pulse mb-2">
                <span>33,330,000,000 $BYFI</span>
              </div>
              <p className="text-sm text-black font-medium">Auto-reflections enabled. Refreshes every 30 seconds.</p>
            </div>
          </div>
          
        </div>
      </motion.section>

      {/* Infinite cards below hero */}
      <motion.div
        className="px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <InfiniteMovingCardsDemo />
      </motion.div>

      {/* What is BYFI Section */}
      <motion.section
        id="about"
        className="px-6 py-20 bg-secondary"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-6xl font-bold mb-8 text-center text-foreground hachi-maru-pop-regular">
            What is <span className="text-[#E900FF]">$BYFI</span>?
          </h2>
          <div className="text-center mb-8">
            <p className="text-2xl font-bold text-foreground">
              THE ULTIMATE “FELICIA FAREWELL” TO BORING INVESTMENTS!
            </p>
          </div>
          <StickyScrollRevealDemo />
        </div>
      </motion.section>

      {/* Tokenomics Section */}
      <motion.section
        id="tokenomics"
        className="px-6 py-20 bg-secondary"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-6xl font-bold mb-12 text-center text-foreground hachi-maru-pop-regular">
            TOKENOMICS
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-xl font-bold text-foreground">
              100% DEGEN-APPROVED DISTRIBUTION!
            </p>
          </div>
          
          {/* Individual Tokenomics Cards (with GlareCard) */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlareCard className="bg-[#FFF5FE]">
              <div className="p-6 text-center bg-transparent rounded-2xl border-4 border-[#E900FF]">
                <h4 className="text-base font-bold text-foreground mb-1">TICKER</h4>
                <p className="text-4xl font-bold text-[#E900FF]">BYFI</p>
                <p className="text-sm mt-2">BYE FELICIA!</p>
              </div>
            </GlareCard>
            <GlareCard className="bg-[#F0FFF5]">
              <div className="p-6 text-center bg-transparent rounded-2xl border-4 border-[#16FF00]">
                <h4 className="text-base font-bold text-foreground mb-1">NETWORK</h4>
                <p className="text-4xl font-bold text-[#16FF00]">BASE</p>
                <p className="text-sm mt-2">BASED & LOADED!</p>
              </div>
            </GlareCard>
            <GlareCard className="bg-[#F0FCFF]">
              <div className="p-6 text-center bg-transparent rounded-2xl border-4 border-[#00F5FF]">
                <h4 className="text-base font-bold text-foreground mb-1">SUPPLY</h4>
                <p className="text-4xl font-bold text-[#00F5FF]">100B</p>
                <p className="text-sm mt-2">BILLIONS & BILLIONS!</p>
              </div>
            </GlareCard>
          </div>
          
          {/* Rewards Distribution Card with GlareCard, full width */}
          <GlareCard className="bg-[#FFF5FE]" fullWidth>
            <div className="p-8 text-center bg-transparent rounded-2xl border-4 border-[#E900FF] mb-8">
              <h4 className="text-2xl font-bold text-foreground mb-6">REWARDS: 5%</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#E900FF] mb-2">2%</div>
                  <p className="text-lg font-bold text-foreground">TO THE BUILDERS</p>
                  <p className="text-sm text-foreground/80">Keep the rocket fueled!</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#16FF00] mb-2">3%</div>
                  <p className="text-lg font-bold text-foreground">TO THE HODLERS</p>
                  <p className="text-sm text-foreground/80">Diamond hands get paid!</p>
                </div>
              </div>
            </div>
          </GlareCard>
          
          {/* Contract Address Card */}
          <WobbleCard 
            containerClassName="bg-white border-4 border-[#16FF00]"
            className="py-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                CONTRACT ADDRESS
              </h3>
              <p className="text-lg font-bold text-foreground mb-4">
                COPY THIS BADBOY AND GET REKT (IN A GOOD WAY)!
              </p>
              <div className="bg-muted rounded-2xl p-4 mb-6 max-w-2xl mx-auto">
                <div className="bg-background rounded-xl p-4 break-all text-sm font-mono text-foreground border-2 border-[#16FF00]">
                  {contractAddress}
                </div>
              </div>
              <Button
                onClick={copyToClipboard}
                className="degen-button bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-xl mb-4"
              >
                {copied ? 'COPIED TO THE MOON!' : 'COPY & SEND IT!'}
              </Button>
              
              
            </div>
          </WobbleCard>
        </div>
      </motion.section>

      {/* How to Buy Section */}
      <motion.section
        id="howtobuy"
        className="px-6 py-20 bg-[#E900FF] bg-[linear-gradient(180deg,#ffdbff_0%,#E900FF_15%,#E900FF_85%,#ffdbff_100%)]/"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-6xl font-bold mb-12 text-center text-white">
            HOW TO APE IN
          </h2>
          <p className="text-2xl font-bold text-center text-white mb-8">
            STEP-BY-STEP GUIDE TO FINANCIAL CHAOS!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlareCard>
              <div className="bg-white border-4 border-[#16FF00] rounded-3xl p-6 text-center degen-button shadow-2xl">
              <div className="text-6xl font-bold text-[#E900FF] mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-black">GET A WALLET</h3>
              <p className="text-sm text-black/80 font-medium">
                Download MetaMask or Coinbase Wallet! Make sure it&apos;s BASE compatible or you&apos;ll be REKT!
              </p>
              </div>
            </GlareCard>
            <GlareCard>
              <div className="bg-white border-4 border-[#00F5FF] rounded-3xl p-6 text-center degen-button shadow-2xl">
              <div className="text-6xl font-bold text-[#16FF00] mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-black">GET ETH ON BASE</h3>
              <p className="text-sm text-black/80 font-medium">
                Bridge that ETH to BASE network! No ETH = No lambo!
              </p>
              </div>
            </GlareCard>
            <GlareCard>
              <div className="bg-white border-4 border-[#E900FF] rounded-3xl p-6 text-center degen-button shadow-2xl">
              <div className="text-6xl font-bold text-[#00F5FF] mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-black">FIND UNISWAP</h3>
              <p className="text-sm text-black/80 font-medium">
                Head to Uniswap and connect your wallet! Time to make magic happen!
              </p>
              </div>
            </GlareCard>
            <GlareCard>
              <div className="bg-white border-4 border-[#16FF00] rounded-3xl p-6 text-center degen-button shadow-2xl">
              <div className="text-6xl font-bold text-[#E900FF] mb-4">4</div>
              <h3 className="text-xl font-bold mb-3 text-black">SWAP FOR $BYFI!</h3>
              <p className="text-sm text-black/80 font-medium">
                Paste the contract address and SEND IT! Welcome to degen paradise!
              </p>
              </div>
            </GlareCard>
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-white">
              REMEMBER: ONLY INVEST WHAT YOU CAN AFFORD TO LOSE!
            </p>
            <p className="text-lg text-white/80 mt-2">
              (BUT ALSO, FORTUNE FAVORS THE BOLD!)
            </p>
          </div>
        </div>
      </motion.section>

      {/* Meme Portfolio Section */}
      <motion.section
        id="memes"
        className="px-6 py-20 bg-[#16FF00] bg-[linear-gradient(180deg,#E7FFE7_0%,#16FF00_15%,#16FF00_85%,#E7FFE7_100%)]/"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-6xl font-bold mb-12 text-center text-black hachi-maru-pop-regular">
            MEME VAULT
          </h2>
          <p className="text-2xl font-bold text-center text-black mb-8">
            CERTIFIED DEGEN MEMES INSIDE!
          </p>
          
          {/* Large Featured Image */}
          <div className="mb-8 text-center">
                         <div className="bg-white border-4 border-[#E900FF] rounded-3xl p-4 inline-block">
               <div className="w-full max-w-2xl aspect-video bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                {blobImages.length > 0 ? (
                  <Image
                    src={blobImages[selectedMeme]?.url || blobImages[0].url}
                    alt={blobImages[selectedMeme]?.pathname || 'Featured Meme'}
                    width={1024}
                    height={512}
                    className="w-full h-full object-cover"
                    priority
                  />
                ) : (
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-600">MEMES LOADING...</p>
                    <p className="text-sm text-gray-500 mt-2">Upload some fire content!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Grid of Smaller Images */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {getCurrentPageImages().map((img, index) => (
              <div 
                key={currentPage * imagesPerPage + index + 1}
                className="bg-white border-4 border-[#00F5FF] rounded-2xl p-2 cursor-pointer degen-button shadow-xl"
                onClick={() => setSelectedMeme(currentPage * imagesPerPage + index + 1)}
              >
                <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  {img?.url ? (
                    <Image
                      src={img.url}
                      alt={img.pathname}
                      width={256}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center text-gray-500 text-sm">
                      <div>MEME #{currentPage * imagesPerPage + index + 2}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-4">
              <Button 
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="degen-button bg-[#E900FF] disabled:bg-gray-300 text-white px-8 py-3 rounded-full font-bold text-lg"
              >
                BACK TO PAST MEMES
              </Button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    variant={currentPage === i ? "default" : "outline"}
                    size="sm"
                    className={`w-12 h-12 rounded-full font-bold ${
                      currentPage === i 
                        ? 'bg-[#E900FF] text-white border-[#E900FF]' 
                        : 'bg-white text-[#E900FF] border-4 border-[#E900FF]'
                    }`}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button 
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="degen-button bg-[#E900FF] disabled:bg-gray-300 text-white px-8 py-3 rounded-full font-bold text-lg"
              >
                FUTURE MEMES
              </Button>
            </div>
          )}
        </div>
      </motion.section>

      {/* Roadmap Section */}
      <motion.section
        id="roadmap"
        className="px-6 py-20 bg-[#00F5FF] bg-[linear-gradient(180deg,#E6FBFF_0%,#00F5FF_15%,#00F5FF_85%,#E6FBFF_100%)]/"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-6xl font-bold mb-12 text-center text-black hachi-maru-pop-regular">
            ROADMAP TO MARS
          </h2>
          <p className="text-2xl font-bold text-center text-black mb-8">
            OUR MASTER PLAN FOR WORLD DOMINATION!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-[#E900FF] rounded-3xl p-6 degen-button shadow-2xl">
              <div className="text-4xl font-bold mb-4 text-[#E900FF] text-center">
                Phase 1: LAUNCH!
              </div>
              <ul className="space-y-3 text-lg text-black">
                <li><span className="font-bold">Website launch</span> (YOU&apos;RE HERE!)</li>
                <li><span className="font-bold">Social media</span> (WE&apos;RE EVERYWHERE!)</li>
                <li><span className="font-bold">Community building</span> (JOIN THE CHAOS!)</li>
                <li><span className="font-bold">Marketing blitz</span> (PREPARE FOR MAYHEM!)</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-[#16FF00] rounded-3xl p-6 degen-button shadow-2xl">
              <div className="text-4xl font-bold mb-4 text-[#16FF00] text-center">
                Phase 2: MOON MISSION!
              </div>
              <ul className="space-y-3 text-lg font-medium text-black">
                <li><span className="font-bold">CoinGecko listing</span></li>
                <li><span className="font-bold">CoinMarketCap listing</span></li>
                <li><span className="font-bold">Influencer partnerships</span></li>
                <li><span className="font-bold">Epic contests & giveaways</span></li>
              </ul>
            </div>
            <div className="bg-white border-4 border-[#00F5FF] rounded-3xl p-6 degen-button shadow-2xl">
              <div className="text-4xl font-bold mb-4 text-[#00F5FF] text-center">
                Phase 3: GALAXY TAKEOVER!
              </div>
              <ul className="space-y-3 text-lg font-medium text-black">
                <li><span className="font-bold">NFT collection</span> (RARE FELICIAS!)</li>
                <li><span className="font-bold">Degen game</span> (GAMIFY THE CHAOS!)</li>
                <li><span className="font-bold">Merch store</span> (WEAR YOUR DEGEN PRIDE!)</li>
                <li><span className="font-bold">SECRET UTILITIES</span> (SSSHHHH!)</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-black">
              PHASE 4: BEYOND THE KNOWN UNIVERSE!
            </p>
          </div>
        </div>
      </motion.section>

      {/* Socials Section */}
      <motion.section
        id="socials"
        className="px-6 py-20 bg-[#E900FF] bg-[linear-gradient(180deg,#ffdbff_0%,#E900FF_15%,#E900FF_85%,#ffdbff_100%)]/"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-6xl font-bold mb-8 text-white hachi-maru-pop-regular">
            JOIN THE DEGEN FAM!
          </h2>
          <div className="bg-white/95 rounded-3xl p-8 mb-8 shadow-2xl">
            <p className="text-2xl lg:text-3xl text-black font-bold">
              WARNING: EXTREME DEGENERACY AHEAD!
            </p>
            <p className="text-lg text-black font-medium mt-4">
              Connect with fellow degens across ALL platforms! We&apos;re building the most UNHINGED community in crypto!
            </p>
          </div>
          <div className="flex justify-center gap-6 flex-wrap">
            <Button size="lg" className="degen-button bg-white hover:bg-white/90 text-[#1DA1F2] px-8 py-4 rounded-full font-bold text-xl border-4 border-[#1DA1F2]">
              TWITTER CHAOS!
            </Button>
            <Button size="lg" className="degen-button bg-white hover:bg-white/90 text-[#0088CC] px-8 py-4 rounded-full font-bold text-xl border-4 border-[#0088CC]">
              TELEGRAM MAYHEM!
            </Button>
            <Button size="lg" className="degen-button bg-white hover:bg-white/90 text-[#5865F2] px-8 py-4 rounded-full font-bold text-xl border-4 border-[#5865F2]">
              DISCORD DEGENERACY!
            </Button>
          </div>
          <div className="mt-8">
            <p className="text-xl font-bold text-white">
              WELCOME TO THE CIRCUS! LEAVE YOUR SANITY AT THE DOOR!
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-black zain-bold">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 bg-white/95 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-black">
              <span className="gradient-text">Buy Felicia</span> • $BYFI
            </h3>
            <div className="flex justify-center gap-4 text-lg flex-wrap">
                             <Button variant="ghost" onClick={copyToClipboard} className="hover:text-[#E900FF] transition-colors text-black font-bold p-0 h-auto">
                 {copied ? 'COPIED!' : 'CONTRACT'}
               </Button>
              <span className="text-black">•</span>
              <Button variant="ghost" asChild className="hover:text-[#16FF00] transition-colors text-black font-bold p-0 h-auto">
                <a href="#">TWITTER MADNESS</a>
              </Button>
              <span className="text-black">•</span>
              <Button variant="ghost" asChild className="hover:text-[#00F5FF] transition-colors text-black font-bold p-0 h-auto">
                <a href="#">TELEGRAM CHAOS</a>
              </Button>
            </div>
          </div>
          <div className="text-sm text-white max-w-2xl mx-auto">
            <p className="mb-2 font-bold">2025 Buy Felicia - ALL RIGHTS TO THE MOON!</p>
            <p className="font-medium">
              <strong>ULTRA DISCLAIMER:</strong> This is 100% PURE DEGENERACY! Crypto is risky AF! 
              Only invest what you can afford to lose while laughing maniacally! 
              Buy Felicia is a meme with ZERO intrinsic value - just MAXIMUM CHAOS!
            </p>
            <p className="mt-4 font-bold text-[#E900FF]">
              BYE FELICIA TO BORING INVESTMENTS!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}