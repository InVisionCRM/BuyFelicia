"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="relative px-6 py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 p-4 sm:p-10">
          <Image
            src="https://zgzhxntyxikp1c4w.public.blob.vercel-storage.com/images/IMG_0316.JPG"
            alt="About background"
            fill
            className="object-contain"
            priority={false}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="text-3xl lg:text-6xl font-bold mb-8 text-center text-white drop-shadow-lg hachi-maru-pop-regular">
          What is <span className="text-[#E900FF]">$BYFI</span>?
        </h2>
        <div className="text-center mb-8">
          <p className="text-2xl font-bold text-white drop-shadow-md">THE ULTIMATE “FELICIA FAREWELL” TO BORING INVESTMENTS!</p>
          <p className="mt-4 text-lg text-white/90 drop-shadow max-w-3xl mx-auto">
            Buy Felicia is the meme coin that waves goodbye to every other meme coin pretending to be &quot;the next big thing.&quot; It’s not here to shill, promise utility, or drop a 40-page whitepaper in Comic Sans. It’s here to look the hype straight in the face, say &quot;Bye, Felicia&quot;, and move on to the next joke — preferably while your bags get heavier.
          </p>
          <p className="mt-3 text-lg text-white/90 drop-shadow max-w-3xl mx-auto">
            It’s a parody of the pump, the dump, and the endless &quot;to the moon&quot; chants. A meme for people who are tired of chasing memes… and would rather laugh on the way up (or down).
          </p>
        </div>
        
      </div>
    </motion.section>
  );
}


