"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";

export default function ContactPage() {
  // Split title for text mask slide entrance
  const titleText = "Let's build something exceptional.";
  const words = titleText.split(" ");

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

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.4 },
    },
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen text-[#0a0a0a] px-5 pt-[100px] md:pt-[125px] pb-24">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Title area */}
        <motion.div
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap font-plus-jakarta font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-[85px] tracking-tight leading-[1.05] select-none"
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em] py-1 md:py-2">
              <motion.span 
                variants={titleWordVariants} 
                className="inline-block origin-bottom-left"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.div>

        {/* Content columns */}
        <div className="mt-16 md:mt-24 max-w-2xl font-inter">
          
          {/* Direct contact & social panel */}
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-10 md:gap-12"
          >
            <div>
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Email Me Directly</span>
              <a 
                href="mailto:sindhufaiq555@gmail.com" 
                className="text-2xl sm:text-3xl md:text-4xl font-semibold font-plus-jakarta hover:text-gray-505 hover:text-gray-550 transition-colors text-black"
              >
                sindhufaiq555@gmail.com
              </a>
            </div>

            <div>
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Based In</span>
              <p className="text-xl sm:text-2xl font-semibold text-black">Pakistan — Available for Remote Roles Worldwide</p>
            </div>

            <div>
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Connect Socially</span>
              <div className="flex flex-col gap-4 font-semibold text-[#0a0a0a] max-w-md">
                
                <a 
                  href="https://www.linkedin.com/in/faiq-s-7b5415310/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 group border-b border-black/10 pb-3 hover:border-black/30 transition-colors"
                >
                  <BsLinkedin className="text-xl text-gray-500 group-hover:text-black transition-colors" />
                  <span>LinkedIn</span>
                  <BsArrowUpRight className="ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>

                <a 
                  href="https://github.com/Faiqs55" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 group border-b border-black/10 pb-3 hover:border-black/30 transition-colors"
                >
                  <BsGithub className="text-xl text-gray-500 group-hover:text-black transition-colors" />
                  <span>GitHub</span>
                  <BsArrowUpRight className="ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>

                <a 
                  href="https://wa.me/923253550555" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 group border-b border-black/10 pb-3 hover:border-black/30 transition-colors"
                >
                  <BsWhatsapp className="text-xl text-gray-500 group-hover:text-black transition-colors" />
                  <span>Whatsapp</span>
                  <BsArrowUpRight className="ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
