"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";

interface Props {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

export default function ZoomableImage({ src, fallbackSrc, alt, className }: Props) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomed(false);
    };
    if (isZoomed) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed]);

  // Prevent background scrolling when zoomed
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  return (
    <>
      <div 
        className="cursor-zoom-in w-full h-full flex items-center justify-center"
        onClick={() => setIsZoomed(true)}
      >
        <ImageWithFallback
          src={src}
          fallbackSrc={fallbackSrc}
          alt={alt}
          className={className}
        />
      </div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md cursor-zoom-out p-4 md:p-12"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full flex items-center justify-center max-w-7xl"
            >
              <ImageWithFallback
                src={src}
                fallbackSrc={fallbackSrc}
                alt={alt}
                className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              />
              <button 
                className="absolute top-4 right-4 md:top-0 md:right-0 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-md transition-all cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(false);
                }}
                aria-label="Close zoomed image"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
