"use client";
import React from "react";
import { motion } from "framer-motion";
import InfiniteMovingCardsDemo from "@/components/infinite-moving-cards-demo";

export default function InfiniteCardsSection() {
  return (
    <motion.div
      className="px-6 py-12 bg-[#F5F0FF] bg-[linear-gradient(180deg,#F8F5FF_0%,#F5F0FF_60%)]/"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <InfiniteMovingCardsDemo />
    </motion.div>
  );
}


