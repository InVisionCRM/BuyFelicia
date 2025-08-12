"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function SocialsSection() {
  return (
    <motion.section
      id="socials"
      className="px-6 py-20 bg-[#E900FF] bg-[linear-gradient(180deg,#ffdbff_0%,#E900FF_15%,#E900FF_85%,#ffdbff_100%)]/"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl lg:text-6xl font-bold mb-8 text-white hachi-maru-pop-regular">JOIN THE DEGEN FAM!</h2>
        <div className="bg-white/95 rounded-3xl p-8 mb-8 shadow-2xl">
          <p className="text-2xl lg:text-3xl text-black font-bold">WARNING: EXTREME DEGENERACY AHEAD!</p>
          <p className="text-lg text-black font-medium mt-4">Connect with fellow degens across ALL platforms! We&apos;re building the most UNHINGED community in crypto!</p>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          <Button size="lg" className="degen-button bg-white hover:bg-white/90 text-[#1DA1F2] px-8 py-4 rounded-full font-bold text-xl border-4 border-[#1DA1F2]">TWITTER CHAOS!</Button>
          <Button size="lg" className="degen-button bg-white hover:bg-white/90 text-[#0088CC] px-8 py-4 rounded-full font-bold text-xl border-4 border-[#0088CC]">TELEGRAM MAYHEM!</Button>
          <Button size="lg" className="degen-button bg-white hover:bg-white/90 text-[#5865F2] px-8 py-4 rounded-full font-bold text-xl border-4 border-[#5865F2]">DISCORD DEGENERACY!</Button>
        </div>
      </div>
    </motion.section>
  );
}


