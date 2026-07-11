"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  },
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/faiq-s-7b5415310/",
    icon: <BsLinkedin />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Faiqs55",
    icon: <BsGithub />,
  },
  {
    label: "Whatsapp",
    href: "https://wa.me/923253550555",
    icon: <BsWhatsapp />,
  },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-24 border-t border-black/8 bg-[#F5F5F5] px-5 py-16"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Top row — name + nav links */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-14">
          {/* Brand */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <span className="font-plus-jakarta font-semibold text-2xl text-black tracking-tight">
              Faiq S.
            </span>
            <span className="font-inter text-sm text-gray-400 font-medium">
              Full Stack Engineer
            </span>
          </motion.div>

          {/* Nav */}
          <motion.nav
            variants={itemVariants}
            className="flex flex-wrap gap-x-8 gap-y-3 font-inter font-semibold text-sm text-[#0a0a0a]"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group flex items-center gap-1 hover:text-gray-500 transition-colors duration-200"
              >
                {label}
                <BsArrowUpRight className="text-[10px] opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-200" />
              </Link>
            ))}
          </motion.nav>
        </div>

        {/* Big email CTA */}
        <motion.a
          variants={itemVariants}
          href="mailto:sindhufaiq555@gmail.com"
          className="group block font-plus-jakarta font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black hover:text-gray-400 transition-colors duration-300 tracking-tight leading-tight mb-14 break-all"
        >
          sindhufaiq555@gmail.com
          <BsArrowUpRight className="inline-block ml-3 text-2xl md:text-3xl opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
        </motion.a>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-full h-px bg-black/8 mb-10"
        />

        {/* Bottom row — copyright + socials */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <motion.p
            variants={itemVariants}
            className="font-inter text-xs text-gray-400 font-medium"
          >
            © {new Date().getFullYear()} Faiq Shah. All rights reserved.
          </motion.p>

          {/* Social icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5"
          >
            {socialLinks.map(({ label, href, icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-black transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <span className="text-lg">{icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
