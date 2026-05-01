"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-8">
      <nav 
        className="max-w-7xl mx-auto h-16 px-6 md:px-10 flex items-center justify-between rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl"
        style={{ 
          background: "rgba(19, 19, 27, 0.8)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
        }}
      >
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-indigo-600">
             <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
             </svg>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            Ethereal<span className="text-indigo-400">Catalog</span>
          </span>
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {["Cars", "Bikes", "Phones", "Computers"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <motion.a
            href="#bikes"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 inline-block"
            style={{
              background: "linear-gradient(135deg, #6366F1, #818cf8)",
              color: "#1e1b4b",
              boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)"
            }}
          >
            Explore Catalog
          </motion.a>
          
          <div className="flex items-center gap-3">
             <button className="p-2 text-white/70 hover:text-white transition-colors">
               <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
             </button>
             <button className="p-2 text-white/70 hover:text-white transition-colors">
               <span className="material-symbols-outlined text-[24px]">account_circle</span>
             </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
