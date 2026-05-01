"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";

interface StoryCategory {
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  image: string;
  accent: string;
  glow: string;
  stats: { label: string; value: string }[];
}

const storyCategories: StoryCategory[] = [
  {
    tag: "🚗 Automotive",
    title: "Premium Cars",
    description:
      "From electric grand tourers to iconic supercars — explore our handpicked lineup of vehicles engineered to thrill at every single curve.",
    buttonText: "Explore Cars",
    link: "#cars",
    image:
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1920&auto=format&fit=crop",
    accent: "#6366F1",
    glow: "rgba(99,102,241,0.35)",
    stats: [
      { label: "Models", value: "12+" },
      { label: "Top Speed", value: "300+km/h" },
      { label: "0–100", value: "< 3s" },
    ],
  },
  {
    tag: "🏍️ Motorcycles",
    title: "Elite Bikes",
    description:
      "Feel the road like never before. Precision superbikes to adventure tourers — built for every terrain on earth.",
    buttonText: "View Bikes",
    link: "#bikes",
    image:
      "https://images.unsplash.com/photo-1626840362735-afb64615318d?q=80&w=1920&auto=format&fit=crop",
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.35)",
    stats: [
      { label: "Brands", value: "8+" },
      { label: "Max Power", value: "214 hp" },
      { label: "Displacement", value: "2458 cc" },
    ],
  },
  {
    tag: "📱 Mobile",
    title: "Flagship Phones",
    description:
      "Holographic displays, AI-powered cameras, and titanium chassis. Our mobile collection redefines what a smartphone can truly be.",
    buttonText: "Shop Phones",
    link: "#phones",
    image:
      "https://images.unsplash.com/photo-1726732970014-f2df88c87dd3?q=80&w=1920&auto=format&fit=crop",
    accent: "#A78BFA",
    glow: "rgba(167,139,250,0.35)",
    stats: [
      { label: "Devices", value: "10+" },
      { label: "Best Camera", value: "200 MP" },
      { label: "Fastest Charge", value: "100 W" },
    ],
  },
  {
    tag: "💻 Computing",
    title: "Pro Computers",
    description:
      "OLED displays, next-gen GPUs, and ultra-thin designs built for creators, engineers, and gamers who refuse to compromise.",
    buttonText: "Browse Computers",
    link: "#computers",
    image:
      "https://images.unsplash.com/photo-1724859234679-964acf07b126?q=80&w=1920&auto=format&fit=crop",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.35)",
    stats: [
      { label: "Laptops", value: "8+" },
      { label: "Best GPU", value: "RTX 4090" },
      { label: "Best Display", value: "18\" QHD+" },
    ],
  },
];

const n = storyCategories.length;

// Animation variants
const leftVariants = {
  initial: { opacity: 0, y: 48, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -32,
    filter: "blur(3px)",
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
};

const imgVariants = {
  initial: { opacity: 0, scale: 1.06 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
};

const badgeVariants = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.45, delay: 0.25, ease: "easeOut" as const } },
  exit: { opacity: 0, x: -16, transition: { duration: 0.25, ease: "easeIn" as const } },
};

export default function ScrollStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const raw = latest * n;
    const idx = Math.min(Math.floor(raw), n - 1);
    setActiveIndex(idx);
  });

  const cat = storyCategories[activeIndex];

  return (
    // Outer: scrollable tall container (n × 100vh)
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${n * 100}vh` }}
    >
      {/* Inner: sticky viewport panel */}
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ background: "#0a0a12" }}
      >
        {/* Animated ambient glow per category */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          animate={{
            background: `radial-gradient(ellipse 70% 80% at 75% 50%, ${cat.glow.replace("0.35", "0.12")} 0%, transparent 65%)`,
          }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />

        {/* ── Split Layout ── */}
        <div className="relative z-10 h-full flex flex-col lg:flex-row">

          {/* ─── LEFT PANEL: Text ─── */}
          <div className="w-full lg:w-[46%] h-[48%] lg:h-full flex flex-col justify-center relative px-8 sm:px-12 lg:px-14 xl:px-20">

            {/* Progress indicator + counter */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex flex-row lg:flex-col gap-2">
                {storyCategories.map((_, i) => (
                  <motion.div
                    key={i}
                    className="rounded-full"
                    animate={{
                      width: i === activeIndex ? 28 : 6,
                      height: 6,
                      backgroundColor:
                        i === activeIndex
                          ? cat.accent
                          : "rgba(255,255,255,0.18)",
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                ))}
              </div>
              <span
                className="text-xs font-bold tabular-nums"
                style={{
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.15em",
                }}
              >
                {String(activeIndex + 1).padStart(2, "0")}&nbsp;/&nbsp;
                {String(n).padStart(2, "0")}
              </span>
            </div>

            {/* Animated text block */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={leftVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Tag */}
                <span
                  className="inline-block text-xs font-bold uppercase tracking-[0.28em] px-4 py-1.5 rounded-full mb-6"
                  style={{
                    background: `${cat.accent}1a`,
                    border: `1px solid ${cat.accent}44`,
                    color: cat.accent,
                  }}
                >
                  {cat.tag}
                </span>

                {/* Heading */}
                <h2
                  className="font-black tracking-tighter leading-none mb-5 text-white text-5xl sm:text-6xl lg:text-6xl xl:text-7xl"
                  style={{ textShadow: `0 0 48px ${cat.glow}` }}
                >
                  {cat.title}
                </h2>

                {/* Description */}
                <p
                  className="text-base sm:text-lg leading-relaxed mb-8 max-w-sm xl:max-w-md"
                  style={{ color: "#b8b5c9" }}
                >
                  {cat.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {cat.stats.map((s, i) => (
                    <div
                      key={i}
                      className="flex flex-col px-4 py-3 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span
                        className="text-xl font-black leading-none"
                        style={{ color: cat.accent }}
                      >
                        {s.value}
                      </span>
                      <span
                        className="text-xs font-semibold uppercase tracking-wider mt-1"
                        style={{ color: "#6b6880" }}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={cat.link}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${cat.accent}ee, ${cat.accent}99)`,
                    boxShadow: `0 0 28px ${cat.glow}, 0 4px 20px rgba(0,0,0,0.4)`,
                  }}
                >
                  {cat.buttonText}
                  <span className="material-symbols-outlined text-base transform group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Scroll hint — only first slide */}
            <AnimatePresence>
              {activeIndex === 0 && (
                <motion.div
                  className="absolute bottom-8 left-8 sm:left-12 lg:left-14 xl:left-20 flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="w-5 h-8 rounded-full border-2 border-white/15 flex items-start justify-center pt-1.5">
                    <motion.div
                      className="w-1 h-2 rounded-full bg-white/40"
                      animate={{ y: [0, 10, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  >
                    Scroll to explore
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Subtle vertical divider (desktop only) */}
          <div
            className="absolute left-[46%] top-8 bottom-8 w-px hidden lg:block z-20"
            style={{ background: "rgba(255,255,255,0.04)" }}
          />

          {/* ─── RIGHT PANEL: Image ─── */}
          <div className="w-full lg:w-[54%] h-[52%] lg:h-full relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="absolute inset-0"
                variants={imgVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />

                {/* Left bleed into panel (desktop) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a12] via-[#0a0a12]/30 to-transparent hidden lg:block" />
                {/* Top bleed (mobile) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#0a0a12]/25 to-transparent lg:hidden" />
                {/* Bottom blend */}
                <div className="absolute bottom-0 left-0 right-0 h-36"
                  style={{
                    background: `linear-gradient(to top, #0a0a12, ${cat.glow.replace("0.35", "0.10")}, transparent)`,
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Corner badge — image label */}
            <div className="absolute bottom-6 right-6 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={badgeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="px-4 py-2.5 rounded-xl text-right"
                  style={{
                    background: "rgba(10,10,18,0.72)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    boxShadow: `0 0 20px ${cat.glow.replace("0.35", "0.15")}`,
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: cat.accent }}
                  >
                    {cat.tag}
                  </p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    {cat.title}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Top-right category dots (desktop) */}
            <div className="absolute top-8 right-8 z-10 flex-col gap-2 hidden lg:flex">
              {storyCategories.map((c, i) => (
                <motion.div
                  key={i}
                  className="rounded-full"
                  animate={{
                    height: i === activeIndex ? 28 : 6,
                    width: 6,
                    backgroundColor:
                      i === activeIndex
                        ? cat.accent
                        : "rgba(255,255,255,0.15)",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom page-blend */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
          style={{
            background: "linear-gradient(to top, #13131b, transparent)",
          }}
        />
      </div>
    </div>
  );
}
