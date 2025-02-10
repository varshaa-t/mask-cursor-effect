"use client";
import { useState } from "react";
import useMousePosition from "./utils/useMousePosition";
import { motion } from "motion/react";

export default function Home() {

  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 350 : 40;

  return (
    <main className="h-screen">
      <motion.div 
        className="flex justify-center items-center w-full h-full text-6xl leading-[66px] text-[#afa18f] cursor-default" 
        id="mask"
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{
          type: "tween",
          ease: "backOut"
        }}
      >
        <p 
          className="w-[1000px] p-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            Crafting pixel-perfect interfaces, fixing bugs I swear weren’t there before, and hoping the build doesn’t break!
        </p>
      </motion.div>
      <div className="flex justify-center items-center w-full h-full text-6xl leading-[66px] text-[#afa18f] cursor-default">
        <p className="w-[1000px] p-10">I&apos;m a <span className="text-orange-500">frontend developer</span> who loves building smooth, responsive, and visually stunning web experiences.</p>
      </div>
    </main>
  );
}
