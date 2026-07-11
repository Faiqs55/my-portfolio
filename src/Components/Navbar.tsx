"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";

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
  const router = useRouter();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [navHidden, setNavHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [time, setTime] = useState<string>("--:--:-- PKT");

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setTime(formatter.format(new Date()) + " PKT");
      } catch (e) {
        // Fallback if internationalization timezone is not supported
        const now = new Date();
        setTime(now.toLocaleTimeString("en-US") + " PKT");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Show navbar when scrolling up or at top
    if (latest < previous || latest < 50) {
      setNavHidden(false);
    } else if (latest > previous && latest > 50) {
      setNavHidden(true);
    }

    setHasScrolled(latest > 10);
  });

  const isHome = pathname === "/";

  return (
    <motion.nav
      className="font-inter flex justify-between h-[60px] px-5 py-2"
      variants={navVariants}
      initial="hidden"
      animate={navHidden ? "scrollHidden" : "visible"}
      transition={{
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      }}
      style={{
        backdropFilter: hasScrolled ? "blur(16px)" : "blur(5px)",
        backgroundColor: hasScrolled
          ? "rgba(245, 245, 245, 0.75)"
          : "rgba(245, 245, 245, 0.2)",
      }}
    >
      <motion.div
        className="flex md:flex-row flex-col md:gap-20 md:items-center relative h-full justify-center"
        variants={childVariants}
      >
        <AnimatePresence mode="wait">
          {isHome ? (
            <motion.span
              key="logo"
              className="font-semibold text-lg sm:text-xl inline-block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              Faiq S.
            </motion.span>
          ) : (
            <motion.button
              key="back"
              onClick={() => router.back()}
              className="flex items-center gap-2 font-semibold text-lg sm:text-xl cursor-pointer text-black hover:text-gray-600 transition-colors"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ x: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <IoArrowBackOutline className="text-xl" />
              </motion.span>
              <span>Back</span>
            </motion.button>
          )}
        </AnimatePresence>

        <span className="md:font-semibold md:text-black text-gray-600 md:text-base text-xs md:ml-0 ml-0 transition-all duration-300">
          Full Stack Engineer
        </span>
      </motion.div>
      <motion.div
        className="flex gap-20 items-center"
        variants={childVariants}
      >
        <span className="font-semibold tabular-nums min-w-[120px] text-right">{time}</span>
        <motion.span
          className="h-3.5 w-3.5 bg-black rounded-full md:block hidden relative"
          whileHover={{ scale: 1.4 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
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
