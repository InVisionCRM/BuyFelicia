"use client";
import React from "react";
import { motion } from "framer-motion";
import StickyScrollRevealDemo from "@/components/ui/sticky-scroll-reveal-demo";

export default function FAQSection() {
  return (
    <motion.section
      id="faq"
      className="px-6 py-20 bg-[#FFFAF0] bg-[linear-gradient(180deg,#FFF8E7_0%,#FFFAF0_60%)]/"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl lg:text-6xl font-bold mb-12 text-center text-foreground hachi-maru-pop-regular">FAQ</h2>
        <StickyScrollRevealDemo />
      </div>
    </motion.section>
  );
}


