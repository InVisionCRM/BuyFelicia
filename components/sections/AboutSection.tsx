"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="px-6 py-20 bg-secondary bg-[linear-gradient(180deg,#F0FCFF_0%,#FFFFFF_60%)]/"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl lg:text-6xl font-bold mb-8 text-center text-foreground hachi-maru-pop-regular">
          What is <span className="text-[#E900FF]">$BYFI</span>?
        </h2>
        <div className="text-center mb-8">
          <p className="text-2xl font-bold text-foreground">THE ULTIMATE “FELICIA FAREWELL” TO BORING INVESTMENTS!</p>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            Buy Felicia is the meme coin that waves goodbye to every other meme coin pretending to be &quot;the next big thing.&quot; It’s not here to shill, promise utility, or drop a 40-page whitepaper in Comic Sans. It’s here to look the hype straight in the face, say &quot;Bye, Felicia&quot;, and move on to the next joke — preferably while your bags get heavier.
          </p>
          <p className="mt-3 text-lg text-foreground/80 max-w-3xl mx-auto">
            It’s a parody of the pump, the dump, and the endless &quot;to the moon&quot; chants. A meme for people who are tired of chasing memes… and would rather laugh on the way up (or down).
          </p>
        </div>
        
        {/* Image at bottom of About section */}
        <div className="mt-12 text-center">
          <div className="relative inline-block">
            <Image
              src="https://zgzhxntyxikp1c4w.public.blob.vercel-storage.com/images/IMG_0316.JPG"
              alt="Buy Felicia"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl mx-auto"
              priority={false}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}


