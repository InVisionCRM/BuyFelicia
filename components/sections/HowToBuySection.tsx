"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlareCard } from "@/components/ui/glare-card";
 

export default function HowToBuySection() {
  return (
    <motion.section
      id="howtobuy"
      className="px-4 sm:px-6 py-12 sm:py-20 bg-transparent"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center text-white">HOW TO APE IN</h2>
        <p className="text-lg sm:text-2xl font-bold text-center text-white mb-6 sm:mb-8 px-2 sm:px-0">STEP-BY-STEP GUIDE TO FINANCIAL CHAOS!</p>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 items-center md:items-stretch mx-auto max-w-md md:max-w-none">
          <GlareCard hideFrame className="overflow-hidden relative">
            <div className="relative z-10 rounded-3xl p-6 text-center bg-white shadow-sm min-h-[240px] flex flex-col justify-center">
              <div className="text-6xl font-bold text-[#E900FF] mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-black">GET A WALLET</h3>
              <p className="text-sm text-black/80 font-medium">Download Internet Money Wallet on IOS, Android ot Chrome Extension! Make sure it&apos;s BASE compatible or you&apos;ll be REKT!</p>
            </div>
          </GlareCard>
          <GlareCard hideFrame className="overflow-hidden relative">
            <div className="relative z-10 rounded-3xl p-6 text-center bg-white shadow-sm min-h-[240px] flex flex-col justify-center">
              <div className="text-6xl font-bold text-[#16FF00] mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-black">GET ETH ON BASE</h3>
              <p className="text-sm text-black/80 font-medium">Bridge that ETH to BASE network! No ETH = No lambo!</p>
            </div>
          </GlareCard>
          <GlareCard hideFrame className="overflow-hidden relative">
            <div className="relative z-10 rounded-3xl p-6 text-center bg-white shadow-sm min-h-[240px] flex flex-col justify-center overflow-hidden">
              <div className="text-6xl font-bold text-[#00F5FF] mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-black">Add $BYFI to your wallet</h3>
              <p className="text-sm text-black/80 font-medium break-all hyphens-auto">Click &quot;Add Token&quot; in your wallet, then &quot;Custom Token&quot; and paste this address &quot;0x1D647Af24B30e763F9cb6C1567bc6B745e27C78e&quot;! Time to make magic happen!</p>
            </div>
          </GlareCard>
          <GlareCard hideFrame className="overflow-hidden relative">
            <div className="relative z-10 rounded-3xl p-6 text-center bg-white shadow-sm min-h-[240px] flex flex-col justify-center">
              <div className="text-6xl font-bold text-[#E900FF] mb-4">4</div>
              <h3 className="text-xl font-bold mb-3 text-black">SWAP FOR $BYFI!</h3>
              <p className="text-sm text-black/80 font-medium">Click &quot;SWAP&quot; in your wallet and add &quot;BuyFelicia&quot; to the &quot;Swap For&quot; field and then SEND IT! Welcome to degen paradise!</p>
            </div>
          </GlareCard>
        </div>
      </div>
    </motion.section>
  );
}


