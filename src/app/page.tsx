"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import TechCarousel from "@/Components/TechCarousel";

// Container orchestrates staggered children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

// Each card fades up with a spring
const cardVariants = {
  hidden: {
    y: 60,
    opacity: 0,
    scale: 0.95,
    filter: "blur(8px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 16,
      mass: 0.8,
    },
  },
};

// Shared hover spring — snappy feel
const hoverTransition = {
  type: "spring" as const,
  stiffness: 350,
  damping: 22,
};

// Premium hover: lifts cleanly, deep directional shadow, no scale
const cardHover = {
  y: -10,
  boxShadow:
    "0 2px 2px rgba(0,0,0,0.04), 0 6px 10px rgba(0,0,0,0.06), 0 24px 48px -12px rgba(0,0,0,0.14), rgb(255,255,255) 0px 3px 1px 0px inset",
};

const cardHoverSmall = {
  y: -6,
  boxShadow:
    "0 2px 2px rgba(0,0,0,0.04), 0 6px 10px rgba(0,0,0,0.06), 0 24px 48px -12px rgba(0,0,0,0.14), rgb(255,255,255) 0px 3px 1px 0px inset",
};

const Page = () => {
  return (
    <div className="pt-20 md:pt-[90px] 2xl:pt-[110px]">
      <motion.div
        className="grid grid-cols-6 xl:grid-cols-7 gap-3 md:gap-5 px-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* About */}
        <Link href="/about" className="col-span-6 lg:col-span-3 xl:col-span-2 block group">
          <motion.div
            className="card-body h-[150px] md:h-[200px] lg:h-[220px] xl:h-[354px] flex flex-col justify-between p-4 sm:p-7 cursor-pointer transition-colors duration-300 group-hover:bg-[#f0f0f0]"
            variants={cardVariants}
            whileHover={cardHover}
            transition={hoverTransition}
          >
            <p className="text-gray-400 group-hover:text-gray-600 font-inter text-sm md:text-2xl transition-colors duration-300">
              Learn more about Me, My 3 years work experience and Tech Stack.
            </p>
            <h4 className="font-inter sm:text-lg flex items-center justify-between w-full">
              {/* Sliding text reveal */}
              <span className="relative overflow-hidden inline-flex flex-col h-[1.2em]">
                <span className="translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-in-out">About</span>
                <span className="absolute top-full group-hover:-translate-y-full transition-transform duration-300 ease-in-out">About</span>
              </span>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-black/15 transition-all duration-300">
                <BsArrowUpRight className="text-xs transition-transform duration-300 group-hover:rotate-[360deg]" />
              </span>
            </h4>
          </motion.div>
        </Link>

        {/* Portfolio */}
        <Link href="/portfolio" className="col-span-6 lg:col-span-3 xl:col-span-5 block group">
          <motion.div
            className="card-body h-[150px] md:h-[200px] lg:h-[220px] xl:h-[354px] flex flex-col justify-between p-4 sm:p-7 cursor-pointer transition-colors duration-300 group-hover:bg-[#f0f0f0]"
            variants={cardVariants}
            whileHover={cardHover}
            transition={hoverTransition}
          >
            <p className="text-gray-400 group-hover:text-gray-600 font-inter text-sm md:text-2xl transition-colors duration-300">
              See what I'm capable of by looking at the projects I've Built over the years. And See the before and after of the businesses.
            </p>
            <h4 className="font-inter text-sm sm:text-lg flex items-center justify-between w-full">
              <span className="relative overflow-hidden inline-flex flex-col h-[1.2em]">
                <span className="translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-in-out">Portfolio</span>
                <span className="absolute top-full group-hover:-translate-y-full transition-transform duration-300 ease-in-out">Portfolio</span>
              </span>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-black/15 transition-all duration-300">
                <BsArrowUpRight className="text-xs transition-transform duration-300 group-hover:rotate-[360deg]" />
              </span>
            </h4>
          </motion.div>
        </Link>

        {/* Contact */}
        <Link href="/contact" className="col-span-3 md:col-span-4 xl:col-span-3 block group">
          <motion.div
            className="card-body h-[150px] md:h-[200px] lg:h-[220px] xl:h-[354px] flex items-end p-4 sm:p-7 cursor-pointer transition-colors duration-300 group-hover:bg-[#f0f0f0]"
            variants={cardVariants}
            whileHover={cardHover}
            transition={hoverTransition}
          >
            <h4 className="font-inter sm:text-lg flex items-center justify-between w-full">
              <span className="relative overflow-hidden inline-flex flex-col h-[1.2em]">
                <span className="translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-in-out">Contact</span>
                <span className="absolute top-full group-hover:-translate-y-full transition-transform duration-300 ease-in-out">Contact</span>
              </span>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-black/15 transition-all duration-300">
                <BsArrowUpRight className="text-xs transition-transform duration-300 group-hover:rotate-[360deg]" />
              </span>
            </h4>
          </motion.div>
        </Link>

        {/* Photo */}
        <motion.div
          className="card-body col-span-3 md:col-span-2 h-[150px] md:h-[200px] lg:h-[220px] xl:h-[354px] flex justify-center p-0! md:p-7 cursor-pointer overflow-hidden group"
          variants={cardVariants}
          whileHover={cardHover}
          transition={hoverTransition}
        >
          <motion.img
            src="/faiq.png"
            alt="me"
            className="object-center max-h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        </motion.div>

        {/* Tech + Resume stacked grid */}
        <motion.div
          className="h-[150px] md:h-[200px] lg:h-[220px] xl:h-[354px] grid grid-cols-2 md:grid-cols-1 gap-5 col-span-6 md:col-span-2"
          variants={cardVariants}
        >
          <motion.div
            className="card-body overflow-hidden group"
            whileHover={cardHoverSmall}
            transition={hoverTransition}
          >
            <TechCarousel />
          </motion.div>
          <motion.div
            className="card-body flex items-end cursor-pointer group transition-colors duration-300 hover:bg-[#f0f0f0]"
            whileHover={cardHoverSmall}
            transition={hoverTransition}
          >
            <h4 className="font-inter sm:text-lg flex items-center justify-between w-full">
              <span className="relative overflow-hidden inline-flex flex-col h-[1.2em]">
                <span className="translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-in-out">Resume</span>
                <span className="absolute top-full group-hover:-translate-y-full transition-transform duration-300 ease-in-out">Resume</span>
              </span>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-black/15 transition-all duration-300">
                <BsArrowUpRight className="text-xs transition-transform duration-300 group-hover:rotate-[360deg]" />
              </span>
            </h4>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
