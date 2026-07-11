"use client";

import React, { use, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import projects from "../../../data/projects";
import Marquee from "@/Components/Marquee";
import TextReveal from "@/Components/TextReveal";
import { notFound } from "next/navigation";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";

type PageProps = {
  params: Promise<{ id: string }>;
};

// Reusable scroll-parallax image frame that zooms/pans smoothly
const ParallaxImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track viewport relative scroll progress of this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Pan translation: slides image vertically opposite to scroll direction
  const yTranslate = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const y = useSpring(yTranslate, { stiffness: 50, damping: 18 });
  
  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden rounded-2xl md:rounded-3xl bg-black/5 will-change-transform ${className}`}
    >
      <motion.img
        style={{ 
          y, 
          scale: 1.15,
          top: "-8%",
          left: 0,
          width: "100%",
          height: "116%"
        }}
        className="absolute object-cover object-center will-change-transform"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default function ProjectPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const data = projects.find((p) => p.slug === resolvedParams.id);
  
  if (!data) {
    notFound();
  }

  // Heading Text Mask entry animation
  const titleContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const titleWordVariants = {
    hidden: { 
      y: "110%", 
      rotate: 2 
    },
    visible: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.85,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  // Stagger details block elements
  const metaContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const metaItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  };

  const nameWords = data.name.split(" ");

  return (
    <div className="bg-[#F5F5F5] min-h-screen text-[#0a0a0a] pb-24">
      {/* 1. Hero Title & Metadata Segment */}
      <div className="px-5 pt-[100px] md:pt-[125px] max-w-[1240px] mx-auto">
        <motion.div
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap font-plus-jakarta font-semibold text-5xl sm:text-7xl md:text-8xl lg:text-[105px] tracking-tight leading-[0.95]"
        >
          {nameWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.2em] py-1 md:py-2">
              <motion.span 
                variants={titleWordVariants} 
                className="inline-block origin-bottom-left"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.div>

        {/* Divider lines & Info columns */}
        <motion.div 
          variants={metaContainerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 md:mt-20 border-t border-black/10 pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 font-inter text-[#0a0a0a]"
        >
          <motion.div variants={metaItemVariants}>
            <span className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Client</span>
            <span className="text-base font-semibold">{data.client}</span>
          </motion.div>
          
          <motion.div variants={metaItemVariants}>
            <span className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Role</span>
            <span className="text-base font-semibold">{data.role}</span>
          </motion.div>
          
          <motion.div variants={metaItemVariants}>
            <span className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Year</span>
            <span className="text-base font-semibold">{data.year}</span>
          </motion.div>
          
          <motion.div variants={metaItemVariants}>
            <span className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Category</span>
            <span className="text-base font-semibold">{data.category}</span>
          </motion.div>

          <motion.div variants={metaItemVariants}>
            <span className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Live Link</span>
            <a 
              href={data.liveURL} 
              target="_blank" 
              rel="noreferrer" 
              className="text-base font-semibold group flex items-center gap-1.5 hover:text-gray-500 transition-colors"
            >
              <span>Launch Site</span>
              <BsArrowUpRight className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div variants={metaItemVariants}>
            <span className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Repository</span>
            <a 
              href={data.githubURL} 
              target="_blank" 
              rel="noreferrer" 
              className="text-base font-semibold group flex items-center gap-1.5 hover:text-gray-500 transition-colors"
            >
              <span>GitHub Code</span>
              <BsArrowUpRight className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Action Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a 
            href={data.liveURL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200 font-semibold"
          >
            <span>Launch Live Site</span>
            <BsArrowUpRight className="text-xl" />
          </a>

          {data.githubURL && (
            <a 
              href={data.githubURL}
              target="_blank"
              rel="noreferrer"
              className="btn-sec text-black hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 font-semibold py-3 px-6 rounded-xl flex items-center gap-2"
            >
              <BsGithub className="text-base" />
              <span>GitHub Code</span>
            </a>
          )}
        </motion.div>

        {/* Main Hero Parallax Photo */}
        <ParallaxImage 
          src={data.heroImg} 
          alt={data.name} 
          className="w-full h-[45vh] sm:h-[60vh] md:h-[75vh] mt-12 md:mt-16 img-shadow" 
        />
      </div>

      {/* 2. TextReveal Paragraph */}
      <div className="px-5 py-24 md:py-32 max-w-[1240px] mx-auto">
        <span className="block font-inter text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Project Overview</span>
        <TextReveal 
          text={data.desc} 
          className="text-2xl sm:text-3xl md:text-[38px] leading-[1.35] font-plus-jakarta font-semibold tracking-tight text-gray-900" 
        />
      </div>

      {/* 3. Challenge / Solution Columns */}
      <div className="px-5 pb-24 md:pb-32 max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        {/* Challenge panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4"
        >
          <h3 className="font-plus-jakarta text-2xl font-bold border-b border-black/10 pb-4">The Challenge</h3>
          <p className="font-inter text-gray-600 leading-relaxed font-medium">{data.challenge}</p>
        </motion.div>

        {/* Solution panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4"
        >
          <h3 className="font-plus-jakarta text-2xl font-bold border-b border-black/10 pb-4">The Solution</h3>
          <p className="font-inter text-gray-600 leading-relaxed font-medium">{data.solution}</p>
        </motion.div>
      </div>

      {/* 4. Infinite Running Marquee */}
      <div className="relative overflow-hidden border-y border-black/10 backdrop-blur-sm my-10 select-none">
        <Marquee 
          items={[data.name, data.category, "CASE STUDY", "USER INSIGHT"]} 
          separator="·" 
          speed={22} 
        />
      </div>

      {/* 5. Parallax Image Showreel Grid */}
      <div className="px-5 mt-20 max-w-[1240px] mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* Row 1: Side by Side (Asymmetrical heights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <ParallaxImage 
            src={data.img1} 
            alt="showcase 1" 
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] img-shadow" 
          />
          <ParallaxImage 
            src={data.img2} 
            alt="showcase 2" 
            className="w-full h-[300px] sm:h-[450px] md:h-[580px] md:mt-16 img-shadow" 
          />
        </div>

        {/* Row 2: Giant Banner Showcase */}
        <ParallaxImage 
          src={data.img3} 
          alt="showcase 3" 
          className="w-full h-[250px] sm:h-[450px] md:h-[620px] img-shadow" 
        />

        {/* Row 3: Actions row with final snap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card-body bg-white flex flex-col items-start gap-6 p-8 sm:p-12 justify-center h-full min-h-[300px] shadow-sm rounded-3xl"
          >
            <h4 className="font-plus-jakarta text-2xl sm:text-3xl font-bold tracking-tight">Looking to build something similar?</h4>
            <p className="font-inter text-gray-500 text-sm sm:text-base font-medium">Get in touch to create bespoke web applications with premium layouts and animations.</p>
            
            <div className="flex flex-wrap gap-4 mt-2">
              <Link 
                href="/contact"
                className="btn-primary hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200 font-semibold"
              >
                <span>Get in Touch</span>
                <BsArrowUpRight className="text-xl" />
              </Link>
            </div>
          </motion.div>

          <ParallaxImage 
            src={data.img4} 
            alt="showcase 4" 
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] img-shadow" 
          />
        </div>

      </div>

    </div>
  );
}