"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  
  // State for the scrollable content's height
  const [contentHeight, setContentHeight] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Measure the content height dynamically
  useEffect(() => {
    // Detect touch device
    const touchCheck = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchCheck);

    if (touchCheck || pathname === "/portfolio") return;

    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    // Initial measurement
    handleResize();

    // ResizeObserver tracks content size changes (images loading, accordion expands, etc.)
    const resizeObserver = new ResizeObserver(() => handleResize());
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    // Fallback periodic height checks
    const intervalId = setInterval(handleResize, 1000);

    return () => {
      resizeObserver.disconnect();
      clearInterval(intervalId);
    };
  }, [pathname]);

  const { scrollY } = useScroll();

  // Create a smoothed spring value based on raw scrollY
  const springConfig = {
    damping: 18,
    stiffness: 45,
    mass: 0.25,
  };
  
  // Smooth out scroll value
  const smoothY = useSpring(scrollY, springConfig);
  
  // Transform positive scrollY (native scroll down) to negative translateY
  const y = useTransform(smoothY, (value) => -value);

  // If on mobile/touch, or on the Portfolio page (where we use native sticky-linked scrolling), bypass
  if (isTouchDevice || pathname === "/portfolio") {
    return <>{children}</>;
  }

  return (
    <>
      {/* Fixed viewport containing the translated view */}
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform z-10"
      >
        {children}
      </motion.div>
      
      {/* Dummy spacer to give native scroll height to the scrollbar */}
      <div 
        style={{ height: contentHeight }} 
        className="relative w-full pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
}
