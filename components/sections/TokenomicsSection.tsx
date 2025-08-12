"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlareCard } from "@/components/ui/glare-card";
import { Button } from "@/components/ui/button";

export default function TokenomicsSection({ contractAddress }: { contractAddress: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.section
      id="tokenomics"
      className="px-4 sm:px-6 py-12 sm:py-20 bg-[linear-gradient(135deg,#E8F5E8_0%,#F0E8FF_30%,#E8F8FF_60%,#FFE8F5_100%)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center text-foreground hachi-maru-pop-regular">TOKENOMICS</h2>
        <div className="text-center mb-8">
          <p className="text-xl font-bold text-foreground">100% DEGEN-APPROVED DISTRIBUTION!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-sm md:max-w-none mx-auto">
          <GlareCard className="bg-[#FFF0FF]">
            <div className="p-4 bg-transparent min-h-[120px] flex flex-col justify-center items-center text-center">
              <h4 className="text-base font-bold text-foreground mb-1">TICKER</h4>
              <p className="text-4xl font-bold text-[#E900FF]">BYFI</p>
              <p className="text-sm mt-2">BYE FELICIA!</p>
            </div>
          </GlareCard>
          <GlareCard className="bg-[#F0FFF0]">
            <div className="p-4 bg-transparent min-h-[120px] flex flex-col justify-center items-center text-center">
              <h4 className="text-base font-bold text-foreground mb-1">NETWORK</h4>
              <p className="text-4xl font-bold text-[#16FF00]">BASE</p>
              <p className="text-sm mt-2">BASED & LOADED!</p>
            </div>
          </GlareCard>
          <GlareCard className="bg-[#F0FFFF]">
            <div className="p-4 bg-transparent min-h-[120px] flex flex-col justify-center items-center text-center">
              <h4 className="text-base font-bold text-foreground mb-1">SUPPLY</h4>
              <p className="text-4xl font-bold text-[#00F5FF]">100B</p>
              <p className="text-sm mt-2">BILLIONS & BILLIONS!</p>
            </div>
          </GlareCard>
        </div>

        <GlareCard className="bg-[#FFF5FE]" fullWidth>
          <div className="p-8 text-center bg-transparent mb-8">
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

        <div className="mt-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">CONTRACT ADDRESS</h3>
            <div className="bg-muted rounded-2xl p-4 mb-6 max-w-2xl mx-auto">
              <div className="bg-background rounded-xl p-4 break-all text-sm font-mono text-foreground border-2 border-[#16FF00]">
                {contractAddress}
              </div>
            </div>
            <Button onClick={copyToClipboard} className="degen-button bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-xl mb-4">
              {copied ? "COPIED TO THE MOON!" : "COPY & SEND IT!"}
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


