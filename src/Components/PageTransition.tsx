"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Cubic bezier matching the classic "Awwwards" agency power curve
const EASE_IN: [number, number, number, number] = [0.76, 0, 0.24, 1];
const EASE_OUT: [number, number, number, number] = [0.215, 0.61, 0.355, 1];

const DURATION = 0.65; // curtain travel duration (seconds)

/**
 * PageTransition
 *
 * Implements a two-layer curtain wipe:
 *   1. Back layer (slate) enters first at a 40ms lag — creates a "shadow" depth illusion
 *   2. Front layer (near-black) enters right behind it and exits last
 *   3. Page content waits until curtain has cleared, then fades + translates up
 */
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Keep previous key so AnimatePresence can animate exit before new children mount
  const [displayPathname, setDisplayPathname] = useState(pathname);

  useEffect(() => {
    setDisplayPathname(pathname);
  }, [pathname]);

  return (
    <>
      {/* ── Curtain layers (fixed, full-screen, above everything) ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`curtain-${displayPathname}`}
          className="fixed inset-0 z-[9999] pointer-events-none flex flex-col"
        >
          {/* Back layer — slightly lighter, slight delay (depth illusion) */}
          <motion.div
            className="absolute inset-0 bg-[#1a1a1a]"
            initial={{ y: "100%" }}
            animate={{
              y: ["100%", "0%", "0%", "-100%"],
              transition: {
                duration: DURATION * 2.2,
                times: [0, 0.38, 0.62, 1],
                ease: EASE_IN,
                delay: 0.04,
              },
            }}
          />

          {/* Front layer — primary curtain */}
          <motion.div
            className="absolute inset-0 bg-[#0a0a0a]"
            initial={{ y: "100%" }}
            animate={{
              y: ["100%", "0%", "0%", "-100%"],
              transition: {
                duration: DURATION * 2.2,
                times: [0, 0.38, 0.62, 1],
                ease: EASE_IN,
              },
            }}
          />

          {/* Label that peeks through while curtain is at rest */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              transition: {
                duration: DURATION * 2.2,
                times: [0.25, 0.38, 0.62, 0.78],
              },
            }}
          >
            <span className="font-plus-jakarta font-semibold text-white text-lg tracking-widest uppercase opacity-30">
              Faiq S.
            </span>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ── Page content: fades + rises after curtain exits ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={displayPathname}
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.55,
            ease: EASE_OUT,
            delay: DURATION * 1.05, // wait for curtain to peak and start exiting
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
