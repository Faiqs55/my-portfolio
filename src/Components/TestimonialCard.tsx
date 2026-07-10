"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa6";

type Props = {
  from: string;
  company: string;
  msg: string;
};

const TestimonialCard = ({ from, company, msg }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring" as const,
        stiffness: 80,
        damping: 18,
      }}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="cursor-default"
    >
      <FaQuoteLeft className="text-2xl mb-5 text-gray-300" />
      <p className="text-xl xl:text-2xl font-plus-jakarta font-semibold mb-2">
        {msg}
      </p>
      <div className="flex gap-2.5 items-center">
        <span className="font-inter font-semibold">{from}</span>
        <span className="font-inter font-semibold text-gray-400">
          {company}
        </span>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;