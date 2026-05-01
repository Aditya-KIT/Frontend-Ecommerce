"use client";

import { useRef } from "react";

const showcaseCards = [
  {
    tag: "Audio",
    title: "Sonic Void X",
    desc: "Next-generation spatial audio with quantum noise cancellation.",
    price: "$499",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-uEnFIeAfdWcpXSG08LRBNZ7kpW6gtSfR8xAePD4ixmqupqTjGYrV17iI0pSgBKAH4hOuGBKvivFBdi1zam4VVGDHdTqxFG1eiEjCCNBwkov4fBUlfghvlFXzlxzOrWJxiPtKPcTILZLdyDBe20eOcsWQhD7cIzEQet-tf6AYtIhOPDmxTMTumdDJEvWpDIvCn8MJ6_TY6hXl9lGus1FIuLGSrdBy1NCWl4CbLoCChuYNLc75aQvnc8rKlJdCwCpdfaYtEx-icdeS",
  },
  {
    tag: "Immersive",
    title: "Aether Visor",
    desc: "Ultra-low latency mixed reality headset for enterprise and design.",
    price: "$899",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhqDTB8nGA56UjsLBViDNlXsudG9yjBJ-Uu75A_bND3AQvy55T8ez2uUncB19dtBkiRjt6uqYt9ALurT2URbEPJrTLpzFZTTCU90Eg2rYAgGig2vyn1v2s0HEq6tVHz2gZ3AWJ5JAFTqtPF8qNga_b2fIikF2ECRcnscpBqsSZh-zHtO3NMLfB4Ku3kCHxo-O68fIAq3rowBhhLfqedzAsR9iLu1aUj3rXoFPlaXnOiygRGYHAYivCQlcmWGf2XNVlwAWWaLFKolnJ",
  },
  {
    tag: "Wearable",
    title: "Chrono Core",
    desc: "Biometric syncing and infinite battery life in a titanium chassis.",
    price: "$350",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7Y2x2k5IFAgmvGY4Wi5Xeeecg_-uV_RO39nh8l6pd3OM5kj2rGLOMYwH9AxslD65UVUU93RLwyDGM82P9QZy2J0VPoQjZRJxiX3Y5rm9jNpsRPzVRejLqVW3eTDIaC05Lh-cmYAetvFVbMGDoiPpn8KUzZLAMOI_mB8fzCuLQJ_gQxhYgnbhSG1dob7iGCh4uSRPt5WGrO9Nkee98Dm8pebXmp-BhyAA9RzNlHlFRgcFeA87pQcLTr0SldbYxAoUaB58SPXpfVxke",
  },
  {
    tag: "Mobility",
    title: "Nebula GT",
    desc: "Autonomous electric grand tourer with a zero-gravity cabin.",
    price: "$120k",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD11n1kRcHId-xA_voGzl7aLz5luJje8ORIn9uRBHSp5K7r96J0yGjvQOQKIZyJtlRZfL_wVLoQiHfKg2ecf5bJvTlbfOqFWpmdE2vBKiXVyEkXkpTT4q1r-0VfGEmDPBLsQvsaqlbIHuO7W_fvWbcya6vdKElOW6QDZF9oZe5Fjmh4PuguZj49mARKrZwZDS4AgsY-iZ-u_yxVwUb0nNinzMQ14WkqMwY_Cb_Twmy_BH8Zn4Suj898xrvMfyMvwC7lOn7TAZEjZM1b",
  },
];

export default function GlassmorphismShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: dir === "left" ? -340 : 340,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 relative">
      {/* Section Header */}
      <div className="text-center mb-14 z-10 relative max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c0c1ff] mb-3">
          Featured Collection
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
          Discover the Future
        </h2>
        <p className="text-lg text-[#c7c4d7] max-w-2xl mx-auto leading-relaxed">
          Immerse yourself in our curated collection of next-generation
          technology and high-fidelity artifacts.
        </p>
      </div>

      {/* Slider Container */}
      <div className="w-full max-w-7xl mx-auto relative group">
        {/* Left Nav Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-20 bg-[#1f1f27]/80 backdrop-blur border border-white/10 rounded-full p-3 text-[#e4e1ed] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#393841] hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] cursor-pointer"
          aria-label="Scroll left"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        {/* Cards Track */}
        <div
          ref={trackRef}
          className="flex space-x-6 overflow-x-auto snap-x snap-mandatory py-8 px-4 -mx-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {showcaseCards.map((card, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-80 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:border-[#c0c1ff]/50 cursor-pointer flex flex-col group/card border border-white/10"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              {/* Image */}
              <div className="h-64 relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                {/* Tag */}
                <div className="absolute top-4 left-4 bg-[#A78BFA]/20 backdrop-blur-md border border-[#A78BFA]/30 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {card.tag}
                </div>
                {/* Subtle gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131b]/60 to-transparent pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#c7c4d7] leading-relaxed line-clamp-2">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-[#c0c1ff] font-bold text-lg">
                    {card.price}
                  </span>
                  <button className="text-[#c0c1ff] hover:text-white transition-colors p-2 rounded-full hover:bg-[#6366F1]/30 cursor-pointer">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Nav Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-20 bg-[#1f1f27]/80 backdrop-blur border border-white/10 rounded-full p-3 text-[#e4e1ed] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#393841] hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] cursor-pointer"
          aria-label="Scroll right"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-8 h-1 rounded-full bg-[#c0c1ff] shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
          <div className="w-2 h-1 rounded-full bg-white/20 hover:bg-white/40 transition-all cursor-pointer" />
          <div className="w-2 h-1 rounded-full bg-white/20 hover:bg-white/40 transition-all cursor-pointer" />
          <div className="w-2 h-1 rounded-full bg-white/20 hover:bg-white/40 transition-all cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
