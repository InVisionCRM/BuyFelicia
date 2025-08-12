"use client";
import { motion } from "framer-motion";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";

export default function HeroSection() {
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
        <h1 className="text-3xl sm:text-4xl lg:text-8xl font-bold mb-4 sm:mb-6 text-foreground fontdiner-swanky-regular">
          <ColourfulText text="Buy Felicia" />
        </h1>
        <div className="text-xl sm:text-2xl lg:text-4xl mb-3 sm:mb-4 font-bold text-[#E900FF]">TO THE MOON OR BUST!</div>
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
      </div>
    </motion.section>
  );
}


