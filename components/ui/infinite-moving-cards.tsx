"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type InfiniteMovingCardItem = {
  quote: string;
  name: string;
  title: string;
};

export const FELICIA_QUOTES: InfiniteMovingCardItem[] = [
  { quote: "I don’t chase pumps — pumps chase me.", name: "Felicia", title: "Quote" },
  { quote: "If you’re not holding me, you’re holding an L.", name: "Felicia", title: "Quote" },
  { quote: "I’m not volatile, I’m just unpredictable… like fashion week.", name: "Felicia", title: "Quote" },
  { quote: "Honey, I am the liquidity.", name: "Felicia", title: "Quote" },
  { quote: "Rug pull? Sweetie, I only pull up in Lambos.", name: "Felicia", title: "Quote" },
  { quote: "I don’t need a bull run. I am the stampede.", name: "Felicia", title: "Quote" },
  { quote: "Charts are for nerds. I’m here for vibes.", name: "Felicia", title: "Quote" },
  { quote: "Buy low, sell never. That’s my skincare routine.", name: "Felicia", title: "Quote" },
  { quote: "I didn’t come to moon — the moon came to me.", name: "Felicia", title: "Quote" },
  { quote: "If you’re still in the red, maybe you’re just allergic to profits.", name: "Felicia", title: "Quote" },
  { quote: "The only dip I touch is guacamole.", name: "Felicia", title: "Quote" },
  { quote: "Gas fees? Please. I only run on champagne.", name: "Felicia", title: "Quote" },
  { quote: "Buy me now or regret me forever, sugar.", name: "Felicia", title: "Quote" },
  { quote: "I’m not a meme — I’m a movement.", name: "Felicia", title: "Quote" },
];

export type InfiniteMovingCardsProps = {
  items: InfiniteMovingCardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation(): void {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      applyDirection();
      applySpeed();
      setStart(true);
    }
  }

  function applyDirection(): void {
    if (!containerRef.current) return;
    const dir = direction === "left" ? "forwards" : "reverse";
    containerRef.current.style.setProperty("--animation-direction", dir);
  }

  function applySpeed(): void {
    if (!containerRef.current) return;
    const dur = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current.style.setProperty("--animation-duration", dur);
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-10 max-w-7xl overflow-hidden",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${item.title}-${item.quote.slice(0, 12)}`}
            className={cn(
              "relative w-[320px] md:w-[420px] max-w-full shrink-0 rounded-2xl border px-6 py-5",
              idx % 3 === 0 && "border-[#E900FF] bg-white",
              idx % 3 === 1 && "border-[#16FF00] bg-white",
              idx % 3 === 2 && "border-[#00F5FF] bg-white",
              "dark:bg-zinc-900 dark:border-zinc-700",
            )}
          >
            <blockquote>
              <span className="relative z-20 text-sm leading-relaxed font-normal text-neutral-800 dark:text-gray-100 text-center block">
                {item.quote}
              </span>
              <div className="relative z-20 mt-5 flex flex-col items-center text-center">
                <span className="text-xs leading-relaxed font-medium text-neutral-500 dark:text-gray-400 uppercase tracking-wide">
                  {item.title}
                </span>
                <span className="text-sm leading-relaxed font-semibold text-neutral-700 dark:text-gray-300">
                  {item.name}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) linear infinite var(--animation-direction, forwards);
        }
        @keyframes scroll {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
