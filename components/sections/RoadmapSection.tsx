"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RoadmapSection() {
  return (
    <motion.section
      id="roadmap"
      className="px-6 py-20 bg-[#00F5FF] bg-[linear-gradient(180deg,#E6FBFF_0%,#00F5FF_15%,#00F5FF_85%,#E6FBFF_100%)]/"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl lg:text-6xl font-bold mb-12 text-center text-black hachi-maru-pop-regular">ROADMAP TO MARS</h2>
        <p className="text-2xl font-bold text-center text-black mb-8">OUR MASTER PLAN FOR WORLD DOMINATION!</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border-4 border-[#E900FF] rounded-3xl p-6 degen-button shadow-2xl">
            <div className="text-4xl font-bold mb-4 text-[#E900FF] text-center">Phase 1: LAUNCH!</div>
            <ul className="space-y-3 text-lg text-black">
              <li><span className="font-bold">Website launch</span> (YOU&apos;RE HERE!)</li>
              <li><span className="font-bold">Social media</span> (WE&apos;RE EVERYWHERE!)</li>
              <li><span className="font-bold">Community building</span> (JOIN THE CHAOS!)</li>
              <li><span className="font-bold">Marketing blitz</span> (PREPARE FOR MAYHEM!)</li>
            </ul>
          </div>
          <div className="bg-white border-4 border-[#16FF00] rounded-3xl p-6 degen-button shadow-2xl">
            <div className="text-4xl font-bold mb-4 text-[#16FF00] text-center">Phase 2: MOON MISSION!</div>
            <ul className="space-y-3 text-lg font-medium text-black">
              <li><span className="font-bold">CoinGecko listing</span></li>
              <li><span className="font-bold">CoinMarketCap listing</span></li>
              <li><span className="font-bold">Influencer partnerships</span></li>
              <li><span className="font-bold">Epic contests & giveaways</span></li>
            </ul>
          </div>
          <div className="bg-white border-4 border-[#00F5FF] rounded-3xl p-6 degen-button shadow-2xl">
            <div className="text-4xl font-bold mb-4 text-[#00F5FF] text-center">Phase 3: GALAXY TAKEOVER!</div>
            <ul className="space-y-3 text-lg font-medium text-black">
              <li><span className="font-bold">NFT collection</span> (RARE FELICIAS!)</li>
              <li><span className="font-bold">Degen game</span> (GAMIFY THE CHAOS!)</li>
              <li><span className="font-bold">Merch store</span> (WEAR YOUR DEGEN PRIDE!)</li>
              <li><span className="font-bold">SECRET UTILITIES</span> (SSSHHHH!)</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-black">PHASE 4: BEYOND THE KNOWN UNIVERSE!</p>
        </div>
      </div>
    </motion.section>
  );
}


