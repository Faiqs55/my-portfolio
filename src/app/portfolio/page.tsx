"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "@/Components/ProjectCard";

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1200;

  // Track scroll translation. Converts vertical scroll into horizontal movement.
  const trackTranslation = isMobile ? "-68%" : isTablet ? "-52%" : "-44%";
  const trackXRaw = useTransform(scrollYProgress, [0, 1], ["0%", trackTranslation]);
  const trackX = useSpring(trackXRaw, { stiffness: 45, damping: 18, mass: 0.8 });

  // Stacking offset: how far Card 2 (and Card 3) slide left to stack over Card 1
  const slideOffset = isMobile ? "-70vw" : isTablet ? "-54vw" : "-42vw";
  const cardShiftRaw = useTransform(scrollYProgress, [0.22, 0.65], ["0vw", slideOffset]);
  const cardShift = useSpring(cardShiftRaw, { stiffness: 45, damping: 18, mass: 0.8 });

  // Subtle entry tilts that settle to 0 degrees as their layout targets are met
  const rotate1 = useTransform(scrollYProgress, [0.05, 0.35], [4, 0]);
  const rotate2 = useTransform(scrollYProgress, [0.25, 0.55], [4, 0]);
  const rotate3 = useTransform(scrollYProgress, [0.45, 0.75], [4, 0]);

  // Heading text mask reveal animation
  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const titleWordVariants = {
    hidden: { 
      y: "115%", 
      rotate: 2 
    },
    visible: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  const cardEntranceVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      filter: "blur(6px)"
    },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 45,
        damping: 14,
        delay: 0.35 + i * 0.15,
      }
    })
  };

  const headingText = "Dive into a few projects that represent my most fulfilling Engineering Experiences.";
  const words = headingText.split(" ");

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#F5F5F5] overflow-clip">
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center">
        
        {/* Horizontal scroll flex track */}
        <motion.div 
          style={{ x: trackX }} 
          className="flex items-center gap-12 md:gap-16 lg:gap-20 px-[6vw] min-w-max h-full"
        >
          {/* Section 0: Heading / Intro */}
          <div className="w-[80vw] sm:w-[60vw] md:w-[40vw] max-w-[550px] shrink-0 flex flex-col justify-center select-none pt-12 md:pt-0">
            <motion.div
              variants={titleContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap font-plus-jakarta font-semibold text-3xl md:text-5xl lg:text-[50px] leading-[1.25] text-black tracking-tight"
            >
              {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em] py-0.5">
                  <motion.span 
                    variants={titleWordVariants} 
                    className="inline-block origin-bottom-left"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 font-inter text-gray-500 text-sm md:text-base font-medium max-w-[450px]"
            >
              Scroll down to explore the custom web solutions and agency products.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex items-center gap-3 text-black font-semibold text-xs md:text-sm uppercase tracking-widest font-inter"
            >
              <span>Scroll down</span>
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                &rarr;
              </motion.span>
            </motion.div>
          </div>

          {/* Section 1: Project Card 1 */}
          <motion.div 
            custom={0}
            variants={cardEntranceVariants}
            initial="hidden"
            animate="visible"
            style={{ rotate: rotate1 }} 
            className="w-[85vw] sm:w-[70vw] md:w-[50vw] xl:w-[48vw] max-w-[750px] shrink-0 relative z-20"
          >
            <ProjectCard data={projects[0]} />
          </motion.div>

          {/* Section 2: Project Card 2 (Stacks over Card 1 using relative transform offset) */}
          <motion.div 
            custom={1}
            variants={cardEntranceVariants}
            initial="hidden"
            animate="visible"
            style={{ x: cardShift, rotate: rotate2 }} 
            className="w-[85vw] sm:w-[70vw] md:w-[50vw] xl:w-[48vw] max-w-[750px] shrink-0 relative z-30"
          >
            <ProjectCard data={projects[1]} />
          </motion.div>

          {/* Section 3: Project Card 3 (Slides in unison with Card 2, maintaining tight gap, does NOT stack) */}
          <motion.div 
            custom={2}
            variants={cardEntranceVariants}
            initial="hidden"
            animate="visible"
            style={{ x: cardShift, rotate: rotate3 }} 
            className="w-[85vw] sm:w-[70vw] md:w-[50vw] xl:w-[48vw] max-w-[750px] shrink-0 relative z-40"
          >
            <ProjectCard data={projects[2]} />
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}