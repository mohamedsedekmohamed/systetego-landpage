import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
const COLORS_TOP = ["#FF0000", "#FF0012", "#FF0024"];

export const Heroprice = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #FFFFFF 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-black"
    >
      <div className="relative z-10 flex flex-col items-center">
      
        <h1 className="max-w-3xl bg-gradient-to-br from-black to-gray-700 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Decrease your SaaS churn by over 90%
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
          distinctio eum impedit nihil ipsum modi.
        </p>
        <motion.button
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-200/30 px-4 py-2 text-black transition-colors hover:bg-gray-300/50"
        >
          Start free trial
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
  <Stars radius={50} count={2500} factor={4} fade speed={2} color="#1F2937" />
        </Canvas>
      </div>
    </motion.section>
  );
};


