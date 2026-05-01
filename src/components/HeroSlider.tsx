"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slideData = [
  { 
    title: "Explore Premium Products in One Catalog", 
    desc: "Browse cars, bikes, phones, and computers with dynamic category details.",
    tag: "Automotive",
    tagColor: "bg-[#A78BFA]/20 text-[#A78BFA] border-[#A78BFA]/30",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5t2duZL1j_2md_IILTxRqXZRBw0RD3wvjyos3rs1YDL3q2CjkeHjNClG4FbaQqwc6j6OrIvo9z4duIogdyGig9C3tq5t40h_VyQn89W1YWxZMgA_QYDD0lqop43WLvRuZqVYZN0obcqxn56a0nzvAQh8R3qsiM1yHXp8c1tTmGZZC_dFlInSj8sijsBm-S_P2V9quzWJbG-tqJA7dude0ESi2iCOmFj9c60IORc1-k0bf2fPSKAQe58Vr78hgLIO50M659MP-kbRh",
    categoryId: "cars"
  },
  { 
    title: "Performance Beyond Limits", 
    desc: "Experience the thrill of electric power with our sport bike collection.",
    tag: "Sport",
    tagColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhsjQQFJCXyJJplHfc8UPXuRneQT5UTYVq3SoTu4jjH2RLTYD1YPCoRhPQcomkQJ7PJyQdc_tXDassmKxLYs4TLaKT1WkQ8bIdlmq6uhe9dVSXcQFJtXkU9IG1YWZEJT8rRaA7VElQFKcKzbI-AchZ8x0lDd9o16W7HP0bvbYTbdZEYx_qtQsXjRPFXmsEl0F7nr7UhbNJCOdnEBkTmiVfT1hjUAnVD2zdYRoNZJ6e2i-4QxLc_clxa1_NYb8Nbok9PxsojX4uQM0e",
    categoryId: "bikes"
  },
  { 
    title: "The Future in Your Hand", 
    desc: "Cutting-edge mobile technology designed for the next generation.",
    tag: "Mobile",
    tagColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcnFtnugoznmGLHY3l8VjXLgKyW6mSOnuxABZHYmTfpUigkZTW9UK8iExKS_qJHGKCJqSEIibsbxZG687R-wYS_5C4gWnTcfwwwvlNnlQyd00qUg8jx5Mj7XOrNvRIk4BwKHgnOB-xKZjiarhJ7_MgbHRhl1NwKBpbyGDnRSrGYkm61q_ul5Xdk_ChBzqRGhQM6UZCt9-g1pcHJJBMUvbxPRPEzoGD_99Ulqorifi1yB0y2x9edJDYw-wC3wI9fsGLHPDj-ovR5z40",
    categoryId: "phones"
  },
  { 
    title: "Architected for Professionals", 
    desc: "Unlock unparalleled performance with our elite computing lineup.",
    tag: "Computing",
    tagColor: "bg-primary/20 text-primary border-primary/30",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAP8MiZACbs2_cLnx1bkQBfMzvUyc2N8CJ-32oRoM9F49IwWXsOjWUVpt3UpfG9DUvM23ED4Y1-0eXio6CF78qgPlGfdg9WJMh_spq5cNYghqjQkfff7PuAPo4e97FjBlYmz_EcTm7-BKRh1dWHl9SOyTNT4XP6r6UISU2e5I1MR8b13S2VSE2jtMj0sCcF78CCll9N_Vg5kLoH7sCrqPJGXIGPw_TJPplKMZRsspDce4p0ogCFJo9842TEDGZmyimdq_gWO3GfQqj",
    categoryId: "computers"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = slideData.length;

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      handleNextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  const updateSlideWithTransition = (newIndex: number) => {
    if (isTransitioning || newIndex === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const handleNextSlide = () => {
    updateSlideWithTransition((currentSlide + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    updateSlideWithTransition((currentSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div 
      className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 h-full min-h-[716px] w-full max-w-7xl mx-auto px-4 sm:px-8 py-12" 
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Text Content */}
      <div className="w-full lg:w-5/12 flex flex-col items-start justify-center space-y-8">
        <div className="space-y-4 min-h-[160px]">
          <h1 
            className={`font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-on-surface leading-tight text-glow transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          >
            {slideData[currentSlide].title}
          </h1>
          <p 
            className={`font-body text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
          >
            {slideData[currentSlide].desc}
          </p>
        </div>
        <button 
          onClick={() => {
            document.getElementById('bikes')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-4 rounded-xl bg-[#6366F1] text-white font-bold tracking-wider hover:bg-[#4F46E5] transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center gap-3 group cursor-pointer"
        >
          Explore Catalog
          <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        
        {/* Slider Controls */}
        <div className="flex items-center gap-6 pt-8">
          <div className="flex gap-3">
            <button 
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white/10 transition-all cursor-pointer" 
              onClick={handlePrevSlide}
              disabled={isTransitioning}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button 
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-white/10 transition-all cursor-pointer" 
              onClick={handleNextSlide}
              disabled={isTransitioning}
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="flex gap-2">
            {slideData.map((_, idx) => (
              <button 
                key={idx}
                className={`rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide ? 'w-8 h-1.5 bg-[#6366F1] shadow-[0_0_8px_rgba(99,102,241,0.5)]' : 'w-2 h-1.5 bg-surface-variant hover:bg-primary/50'}`}
                onClick={() => updateSlideWithTransition(idx)}
                disabled={isTransitioning}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Slider Canvas */}
      <div className="w-full lg:w-7/12 relative h-[500px] lg:h-[650px] overflow-visible">
        {slideData.map((slide, idx) => {
          let animationClasses = "opacity-0 z-10 ";
          
          if (idx === currentSlide) {
            animationClasses = "opacity-100 z-20 translate-x-0 translate-y-0 scale-100";
          } else if (idx === 0) {
            animationClasses += "translate-x-[-50px]";
          } else if (idx === 1) {
            animationClasses += "translate-x-full";
          } else if (idx === 2) {
            animationClasses += "translate-y-full";
          } else if (idx === 3) {
            animationClasses += "scale-90";
          }

          return (
            <div 
              key={idx}
              className={`absolute inset-0 glass-card rounded-2xl overflow-hidden p-6 flex flex-col justify-end transform transition-all duration-700 shadow-2xl ${animationClasses}`}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="relative z-10 flex justify-between items-end w-full">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full font-label text-xs font-bold uppercase tracking-widest mb-3 border backdrop-blur-md ${slide.tagColor}`}>
                    {slide.tag}
                  </span>
                  <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                    {slide.title.split(' ').slice(0, 2).join(' ')}
                  </h2>
                  <p className="text-on-surface-variant font-medium">
                    {slide.desc}
                  </p>
                </div>
                <button 
                  onClick={() => {
                    document.getElementById(slide.categoryId)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#6366F1] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined">north_east</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
