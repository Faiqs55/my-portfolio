"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
};

const TextReveal = ({ text, className = "" }: TextRevealProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = text.split(" ");
  const BLACK_WORDS_COUNT = 8; // Number of words that start fully black

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        if (i < BLACK_WORDS_COUNT) {
          // First few words are always black
          return (
            <span
              key={i}
              className="mr-[0.35em] inline-block text-black font-bold"
            >
              {word}
            </span>
          );
        }

        // Calculate progress targets for the remaining words
        const target = (i - BLACK_WORDS_COUNT) / (words.length - BLACK_WORDS_COUNT);

        return (
          <Word
            key={i}
            word={word}
            target={target}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
};

type WordProps = {
  word: string;
  target: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
};

const Word = ({ word, target, progress }: WordProps) => {
  // Helper to ensure strictly increasing ranges for useTransform
  const getOpacityRange = (t: number) => {
    const p1 = t - 0.28;
    const p2 = t - 0.16;
    const p3 = t - 0.08;
    const p4 = t;
    const arr = [p1, p2, p3, p4];
    const uniqueArr = [arr[0]];
    for (let idx = 1; idx < arr.length; idx++) {
      let val = arr[idx];
      const prev = uniqueArr[uniqueArr.length - 1];
      if (val <= prev) {
        val = prev + 0.0001;
      }
      uniqueArr.push(val);
    }
    return uniqueArr;
  };

  const getColorRange = (t: number) => {
    const p1 = t - 0.08;
    const p2 = t;
    const arr = [p1, p2];
    const uniqueArr = [arr[0]];
    for (let idx = 1; idx < arr.length; idx++) {
      let val = arr[idx];
      const prev = uniqueArr[uniqueArr.length - 1];
      if (val <= prev) {
        val = prev + 0.0001;
      }
      uniqueArr.push(val);
    }
    return uniqueArr;
  };

  const opacityRange = getOpacityRange(target);
  const colorRange = getColorRange(target);

  // Future words are initially hidden (opacity 0), then become partially hidden (0.2),
  // then transition to visible gray (0.5), and finally to black (1.0).
  const opacity = useTransform(progress, opacityRange, [0, 0.2, 0.5, 1]);

  // Color transitions from a darker slate/gray to black
  const color = useTransform(progress, colorRange, [
    "rgb(107, 114, 128)", // Gray-500 (darker gray)
    "rgb(17, 24, 39)",    // Gray-900 (almost black)
  ]);

  return (
    <motion.span
      style={{ color, opacity }}
      className="mr-[0.35em] inline-block will-change-[opacity,color] font-bold"
    >
      {word}
    </motion.span>
  );
};

export default TextReveal;
