"use client";

import { motion } from "framer-motion";

interface TechItem {
  src: string;
  alt: string;
}

const items: TechItem[] = [
  { src: "/react.png", alt: "React" },
  { src: "/node.png", alt: "Node.js" },
  { src: "/mongo.png", alt: "MongoDB" },
  { src: "/js.png", alt: "JavaScript" },
  { src: "/post.png", alt: "PostgreSQL" },
  { src: "/git.png", alt: "Git" },
  { src: "/docker.png", alt: "Docker" },
  { src: "/k8s.png", alt: "Kubernetes" },
  { src: "/aws.png", alt: "AWS" },
  { src: "/jenkins.png", alt: "Jenkins" },
];

const TechCarousel = () => {
  // Duplicate the array so we get a seamless loop
  const doubled = [...items, ...items];

  // Each item: 80px wide + 20px gap = 100px per item
  // Total width of one set = items.length * 100
  const singleSetWidth = items.length * 100;

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center">
      {/* Left blur overlay */}
      <div
        className="absolute left-0 top-0 h-full w-[60px] z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgb(245, 245, 245) 0%, transparent 100%)",
        }}
      />

      {/* Right blur overlay */}
      <div
        className="absolute right-0 top-0 h-full w-[60px] z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, rgb(245, 245, 245) 0%, transparent 100%)",
        }}
      />

      {/* Scrolling track */}
      <motion.div
        className="flex gap-5 items-center"
        animate={{
          x: [0, -singleSetWidth],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.alt}-${i}`}
            className="card-body p-2 h-[60px] sm:h-[80px] w-[60px] sm:min-w-[80px] flex-shrink-0"
          >
            <img
              className="object-center object-contain h-full w-full"
              src={item.src}
              alt={item.alt}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechCarousel;
