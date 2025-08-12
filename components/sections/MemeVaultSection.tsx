"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type BlobImage = { url: string; pathname: string };

export default function MemeVaultSection({ blobImages }: { blobImages: BlobImage[] }) {
  const [selectedMeme, setSelectedMeme] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(Math.max(0, blobImages.length - 1) / imagesPerPage);
  const getCurrentPageImages = () => {
    const startIndex = 1 + currentPage * imagesPerPage;
    return blobImages.slice(startIndex, startIndex + imagesPerPage);
  };

  return (
    <motion.section
      id="memes"
      className="px-6 py-20 bg-[#16FF00] bg-[linear-gradient(180deg,#E7FFE7_0%,#16FF00_15%,#16FF00_85%,#E7FFE7_100%)]/"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl lg:text-6xl font-bold mb-12 text-center text-black hachi-maru-pop-regular">MEME VAULT</h2>
        <p className="text-2xl font-bold text-center text-black mb-8">CERTIFIED DEGEN MEMES INSIDE!</p>
        <div className="mb-8 text-center">
          <div className="bg-white border-4 border-[#E900FF] rounded-3xl p-4 inline-block">
            <div className="w-full max-w-2xl aspect-video bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
              {blobImages.length > 0 ? (
                <Image src={blobImages[selectedMeme]?.url || blobImages[0].url} alt={blobImages[selectedMeme]?.pathname || "Featured Meme"} width={1024} height={512} className="w-full h-full object-cover" priority />
              ) : (
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-600">MEMES LOADING...</p>
                  <p className="text-sm text-gray-500 mt-2">Upload some fire content!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {getCurrentPageImages().map((img, index) => (
            <div key={currentPage * imagesPerPage + index + 1} className="bg-white border-4 border-[#00F5FF] rounded-2xl p-2 cursor-pointer degen-button shadow-xl" onClick={() => setSelectedMeme(currentPage * imagesPerPage + index + 1)}>
              <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                {img?.url ? (
                  <Image src={img.url} alt={img.pathname} width={256} height={128} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center text-gray-500 text-sm">
                    <div>MEME #{currentPage * imagesPerPage + index + 2}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-4">
            <Button onClick={() => setCurrentPage(Math.max(0, currentPage - 1))} disabled={currentPage === 0} className="degen-button bg-[#E900FF] disabled:bg-gray-300 text-white px-8 py-3 rounded-full font-bold text-lg">
              BACK TO PAST MEMES
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button key={i} onClick={() => setCurrentPage(i)} variant={currentPage === i ? "default" : "outline"} size="sm" className={`w-12 h-12 rounded-full font-bold ${currentPage === i ? "bg-[#E900FF] text-white border-[#E900FF]" : "bg-white text-[#E900FF] border-4 border-[#E900FF]"}`}>
                  {i + 1}
                </Button>
              ))}
            </div>
            <Button onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))} disabled={currentPage === totalPages - 1} className="degen-button bg-[#E900FF] disabled:bg-gray-300 text-white px-8 py-3 rounded-full font-bold text-lg">
              FUTURE MEMES
            </Button>
          </div>
        )}
      </div>
    </motion.section>
  );
}


