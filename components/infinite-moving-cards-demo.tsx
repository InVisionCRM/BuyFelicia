"use client";

import React from "react";
import { InfiniteMovingCards, FELICIA_QUOTES } from "@/components/ui/infinite-moving-cards";

const STATS: typeof FELICIA_QUOTES = [
  { quote: "90% of traders buy right before the crash.", name: "Felicia", title: "Stat" },
  { quote: "100% of traders think this coin is “different.”", name: "Felicia", title: "Stat" },
  { quote: "75% of portfolios are just screenshots from last year.", name: "Felicia", title: "Stat" },
  { quote: "60% of traders’ exit strategy is “never.”", name: "Felicia", title: "Stat" },
  { quote: "80% of market analysis is just vibes.", name: "Felicia", title: "Stat" },
  { quote: "95% of people who say “HODL” are already broke.", name: "Felicia", title: "Stat" },
  { quote: "70% of traders refresh their portfolio more than they blink.", name: "Felicia", title: "Stat" },
];

const testimonials = [...FELICIA_QUOTES, ...STATS];

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="py-6">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}


