"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Revolutionary Memecoin",
    description:
      "BuyFelicia brings a clean, trustworthy experience to the memecoin space. Built on BASE and focused on community-first design.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-muted text-foreground">
        <div className="text-center">
          <div className="text-2xl font-bold">BuyFelicia</div>
          <div className="text-sm opacity-80">Revolutionary Memecoin</div>
        </div>
      </div>
    ),
  },
  {
    title: "Transparent Tokenomics",
    description:
      "5% tax on transactions: 3% reflections to holders and 2% to founders for sustainable growth.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-muted text-foreground">
        <div className="text-center">
          <div className="text-2xl font-bold">Tokenomics</div>
          <div className="text-sm opacity-80">5% Tax • 3% Reflections</div>
        </div>
      </div>
    ),
  },
  {
    title: "BASE Network Power",
    description:
      "Leveraging Coinbase's BASE for fast, low-fee transactions with Ethereum-grade security.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-muted text-foreground">
        <div className="text-center">
          <div className="text-2xl font-bold">BASE Network</div>
          <div className="text-sm opacity-80">Ethereum L2 • Low Fees</div>
        </div>
      </div>
    ),
  },
  {
    title: "Meme Portfolio",
    description:
      "Community-driven creativity showcased in a curated portfolio. Culture, humor, and identity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-muted text-foreground">
        <div className="text-center">
          <div className="text-2xl font-bold">Meme Portfolio</div>
          <div className="text-sm opacity-80">Community • Creativity • Fun</div>
        </div>
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
