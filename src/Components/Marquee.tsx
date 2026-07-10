"use client";

import React from "react";
import { motion } from "framer-motion";

type MarqueeProps = {
  items: string[];
  separator?: string;
  speed?: number;
  className?: string;
};

const Marquee = ({
  items,
  separator = "—",
  speed = 25,
  className = "",
}: MarqueeProps) => {
  // Build the text string with separators
  const textBlock = items.join(` ${separator} `) + ` ${separator} `;
  // Duplicate for seamless loop
  const doubled = textBlock + textBlock;

  return (
    <div className={`overflow-hidden whitespace-nowrap py-8 ${className}`}>
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 h-full w-[80px] z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgb(245, 245, 245) 0%, transparent 100%)",
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 h-full w-[80px] z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, rgb(245, 245, 245) 0%, transparent 100%)",
        }}
      />

      <motion.div
        className="inline-block font-plus-jakarta font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {doubled}
      </motion.div>
    </div>
  );
};

export default Marquee;
