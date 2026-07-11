"use client";

import { IProjects } from "@/data/projects";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  data: IProjects;
};

export default function ProjectCard({ data }: Props) {
  return (
    <Link 
      href={`/portfolio/${data.slug}`} 
      className="card-body max-w-[1000px] w-full block group bg-white"
    >
      {/* Zoomable Image Frame */}
      <div className="rounded-xl overflow-hidden img-shadow relative bg-black/5">
        <motion.img 
          className="img-shadow w-full h-auto object-cover will-change-transform" 
          src={data.heroImg} 
          alt={data.name}
          whileHover={{ scale: 1.03 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 18
          }}
        />
      </div>

      {/* Name and Category */}
      <div className="flex mt-6 justify-between items-center px-1">
        <h3 className="font-inter text-lg font-semibold text-black group-hover:text-gray-600 transition-colors duration-200">
          {data.name}
        </h3>
        <h3 className="font-inter text-sm font-semibold text-gray-505 text-gray-500">
          {data.category}
        </h3>
      </div>
    </Link>
  );
}