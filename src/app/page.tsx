"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
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

// Hover spring config
const hoverTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
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
        <motion.div
          className="card-body col-span-6 lg:col-span-3 xl:col-span-2 h-[150px] md:h-[200px] lg:h-[220px] xl:h-[354px] flex flex-col justify-between p-4 sm:p-7 cursor-pointer card-hover"
          variants={cardVariants}
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 20px 40px -8px, rgba(0, 0, 0, 0.06) 0px 8px 16px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
          }}
          transition={hoverTransition}
        >
          <p className="text-gray-600 font-inter text-sm md:text-2xl">Learn more about Me, My 3 years work experience and Tech Stack.</p>
          <motion.h4 className="font-inter sm:text-lg flex items-center justify-between w-full">
            <span>About</span>
            <motion.span
              className="inline-flex"
              whileHover={{ x: 3, y: -3 }}
              transition={hoverTransition}
            >
              <BsArrowUpRight />
            </motion.span>
          </motion.h4>
        </motion.div>

        {/* Portfolio */}
        <motion.div
          className="card-body col-span-6 lg:col-span-3 xl:col-span-5 h-[150px] md:h-[200px] lg:h-[220px] xl:h-[354px] flex flex-col justify-between p-4 sm:p-7 cursor-pointer card-hover"
          variants={cardVariants}
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 20px 40px -8px, rgba(0, 0, 0, 0.06) 0px 8px 16px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
          }}
          transition={hoverTransition}
        >
                    <p className="text-gray-600 font-inter text-sm md:text-2xl">See what I'm capable of by looking at the projects I've Built over the years. And See the before and after of the businesses.</p>

          <motion.h4 className="font-inter text-sm sm:text-lg flex items-center justify-between w-full">
            <span>Portfolio</span>
            <motion.span
              className="inline-flex"
              whileHover={{ x: 3, y: -3 }}
              transition={hoverTransition}
            >
              <BsArrowUpRight />
            </motion.span>
          </motion.h4>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="card-body col-span-3 md:col-span-4 xl:col-span-3 h-[150px] md:h-[200px] lg:h-[220px] xl:h-[354px] flex items-end p-4 sm:p-7 cursor-pointer card-hover"
          variants={cardVariants}
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 20px 40px -8px, rgba(0, 0, 0, 0.06) 0px 8px 16px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
          }}
          transition={hoverTransition}
        >
          <motion.h4 className="font-inter sm:text-lg flex items-center justify-between w-full">
            <span>Contact</span>
            <motion.span
              className="inline-flex"
              whileHover={{ x: 3, y: -3 }}
              transition={hoverTransition}
            >
              <BsArrowUpRight />
            </motion.span>
          </motion.h4>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="card-body col-span-3 md:col-span-2 h-[150px] md:h-[200px] lg:h-[220px] xl:h-[354px] flex justify-center p-0! md:p-7 cursor-pointer overflow-hidden card-hover"
          variants={cardVariants}
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 20px 40px -8px, rgba(0, 0, 0, 0.06) 0px 8px 16px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
          }}
          transition={hoverTransition}
        >
          <motion.img
            src="/faiq.png"
            alt="me"
            className="object-center max-h-full w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        </motion.div>

        {/* Tech + Resume stacked grid */}
        <motion.div
          className="h-[150px] md:h-[200px] lg:h-[220px] xl:h-[354px] grid grid-cols-2 md:grid-cols-1 gap-5 col-span-6 md:col-span-2"
          variants={cardVariants}
        >
          <motion.div
            className="card-body overflow-hidden card-hover"
            whileHover={{
              y: -4,
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 20px 40px -8px, rgba(0, 0, 0, 0.06) 0px 8px 16px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
            }}
            transition={hoverTransition}
          >
            <TechCarousel />
          </motion.div>
          <motion.div
            className="card-body flex items-end cursor-pointer card-hover"
            whileHover={{
              y: -4,
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 20px 40px -8px, rgba(0, 0, 0, 0.06) 0px 8px 16px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
            }}
            transition={hoverTransition}
          >
            <motion.h4 className="font-inter sm:text-lg flex items-center justify-between w-full">
              <span>Resume</span>
              <motion.span
                className="inline-flex"
                whileHover={{ x: 3, y: -3 }}
                transition={hoverTransition}
              >
                <BsArrowUpRight />
              </motion.span>
            </motion.h4>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
