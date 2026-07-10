"use client";

import React from "react";
import { motion } from "framer-motion";

const navVariants = {
  hidden: {
    y: -100,
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 18,
      mass: 1,
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 14,
    },
  },
};

const Navbar = () => {
  return (
    <motion.nav
      className="font-inter flex justify-between h-[60px] px-5 py-2"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex md:flex-row flex-col md:gap-20 md:items-center"
        variants={childVariants}
      >
        <motion.span
          className="font-semibold text-lg sm:text-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Faiq S.
        </motion.span>
        <span className="md:font-semibold md:text-black text-gray-600 md:text-base text-xs">
          Full Stack Engineer
        </span>
      </motion.div>
      <motion.div
        className="flex gap-20 items-center"
        variants={childVariants}
      >
        <span className="font-semibold">Time</span>
        <motion.span
          className="h-3.5 w-3.5 bg-black rounded-full md:block hidden relative"
          whileHover={{ scale: 1.4 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Pulse ring */}
          <motion.span
            className="absolute inset-0 rounded-full bg-black/30"
            animate={{
              scale: [1, 2.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.span>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
