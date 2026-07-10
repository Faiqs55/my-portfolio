"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "@/Components/TestimonialCard";
import TextReveal from "@/Components/TextReveal";
import Marquee from "@/Components/Marquee";
import { exp } from "../../data/exp";

const aboutText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum magni dolorum nesciunt eaque repellendus iste error ab voluptates tempore repudiandae eos officia fuga, nihil, nobis ducimus aspernatur ipsam dolor asperiores quisquam in beatae? Eligendi iste asperiores iusto nulla exercitationem odit, harum, et ut facere ullam consequuntur fugiat dolores nihil? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore doloremque delectus sed magni harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vitae.";

// Experience row stagger
const expContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const expItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 16,
    },
  },
};

const AboutPage = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  // Set up scroll transforms targeting the image container specifically
  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "center center"], // Scale animations run while moving to center screen
  });

  // Target the global page scroll for parallax shifts to keep it smooth
  const { scrollYProgress: pageScrollProgress } = useScroll();

  // Scale the container from 0.88 to 1.0 as it scrolls onto the screen
  const containerScale = useTransform(imageScrollProgress, [0, 1], [0.88, 1]);
  // Border radius transition from rounded (sharp corner contrast) to match card styles
  const containerRadius = useTransform(imageScrollProgress, [0, 1], ["48px", "20px"]);

  // Parallax effect on the absolute photo: shifted based on general page scroll
  const imageY = useTransform(pageScrollProgress, [0, 1], [-90, 90]);

  return (
    <div className="px-5 pt-[100px] md:pt-[100px]">
      <div className="flex flex-col gap-24">
        {/* Heading */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-plus-jakarta font-semibold"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            type: "spring" as const,
            stiffness: 50,
            damping: 16,
            delay: 0.1,
          }}
        >
          About
        </motion.h1>

        {/* Scroll-reveal paragraph */}
        <TextReveal
          text={aboutText}
          className="text-2xl md:text-3xl lg:text-4xl font-plus-jakarta font-semibold w-full lg:w-[75%] self-end leading-[1.4]"
        />

        {/* Parallax Image Component */}
        <div
          ref={imageContainerRef}
          className="w-full md:w-[600px] h-[400px] md:h-[550px] self-end overflow-hidden relative cursor-pointer"
        >
          <motion.div
            className="w-full h-full bg-[#0D140C] overflow-hidden"
            style={{
              scale: containerScale,
              borderRadius: containerRadius,
            }}
            whileHover="hover"
          >
            {/* The absolute image has Y translation and scales slightly larger on container hover */}
            <motion.img
              className="absolute left-0 w-full h-[130%] object-cover object-center"
              src="/mefull.png"
              alt="me"
              style={{
                y: imageY,
                top: "-15%", // Offset upward to allocate buffer room for Y scroll parallax translation
              }}
              variants={{
                hover: {
                  scale: 1.08,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
              }}
            />
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 2xl:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {testimonials.map(
            ({
              id,
              from,
              company,
              msg,
            }: {
              id: number;
              from: string;
              company: string;
              msg: string;
            }) => {
              return (
                <TestimonialCard
                  key={id}
                  from={from}
                  company={company}
                  msg={msg}
                />
              );
            }
          )}
        </motion.div>

        {/* Experience */}
        <motion.div
          className="flex flex-col gap-10 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={expContainerVariants}
        >
          {exp.map(
            ({
              company,
              id,
              years,
              desc,
              role,
            }: {
              company: string;
              id: number;
              years: string;
              desc: string;
              role: string;
            }) => {
              return (
                <motion.div
                  key={id}
                  className="flex flex-col lg:flex-row w-full justify-between group"
                  variants={expItemVariants}
                  whileHover={{
                    x: 8,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                >
                  <h4 className="text-sm lg:text-base xl:text-lg font-inter font-semibold mb-2 lg:mb-0 text-gray-400 group-hover:text-black transition-colors duration-300">
                    {years}
                  </h4>
                  <div className="flex flex-col text-base lg:text-lg xl:text-xl font-inter font-semibold mb-4 lg:mb-0">
                    <span>{role}</span>
                    <span>{company}</span>
                  </div>
                  <p className="text-sm lg:w-[500px] xl:w-[600px] font-inter font-semibold text-gray-400">
                    {desc}
                  </p>
                </motion.div>
              );
            }
          )}
        </motion.div>

        {/* Premium Marquee */}
        <div className="relative overflow-hidden my-10">
          <Marquee
            items={[
              "Full Stack Engineer",
              "Cloud Engineer",
              "AI Engineer",
            ]}
            separator="·"
            speed={20}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;