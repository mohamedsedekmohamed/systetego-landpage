import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

// --- المكون الفرعي للكارد مع أنميشن الظهور ---
const Card = ({ item, theme }) => {
  const isDark = theme === "dark";
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring" }}
      className="w-full"
    >
      {item.type === "text" ? (
        <div className="flex flex-col gap-4">
          <motion.span 
            className={`font-mono text-xs tracking-[0.3em] uppercase ${isDark ? "text-red-500" : "text-black"}`}
          >
            // {item.number} PROCESS
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none uppercase text-white italic">
            {item.title}
          </h2>
          <p className={`text-sm md:text-lg max-w-sm ${isDark ? "text-gray-500" : "text-red-100 opacity-80"}`}>
            {item.desc}
          </p>
        </div>
      ) : (
        <div className="group relative w-full aspect-[4/5] md:h-[500px] overflow-hidden rounded-3xl">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={item.src}
            alt={item.alt}
            className={`w-full h-full object-cover transition-all duration-700 ${isDark ? 'grayscale group-hover:grayscale-0' : 'brightness-90 group-hover:brightness-110'}`}
          />
          {/* Overlay تفاعلي */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
             <span className="text-white font-black text-2xl uppercase tracking-widest">{item.alt}</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const OppositeScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // تحريك النص في المنتصف (تكبير مع السكروول)
  const textScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const textOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // تحريك الأعمدة
  const yLeft = useTransform(smoothProgress, [0, 1], ["10%", "-10%"]);
  const yRight = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={targetRef} className="relative bg-black">
      {/* النص المثبت في المنتصف الذي يتفاعل مع السكروول */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none z-50">
        <motion.div style={{ scale: textScale, opacity: textOpacity }} className="text-center">
          <h3 className="text-[18vw] font-black leading-none text-white mix-blend-difference uppercase tracking-tighter">
            SYSTEGO
          </h3>
          <p className="text-red-600 font-mono tracking-[1em] text-sm md:text-xl">DIGITAL REVOLUTION</p>
        </motion.div>
      </div>

      {/* الأعمدة المتعاكسة */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
        <motion.div style={{ y: yLeft }} className="bg-neutral-950 px-6 py-20 md:p-32 flex flex-col gap-20 md:gap-40">
          {leftData.map((item, i) => <Card key={i} item={item} theme="dark" />)}
        </motion.div>

        <motion.div style={{ y: yRight }} className="bg-red-700 px-6 py-20 md:p-32 flex flex-col gap-20 md:gap-40">
          {rightData.map((item, i) => <Card key={i} item={item} theme="light" />)}
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="sticky top-0 h-screen w-full opacity-10">
          <div className="h-full w-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </div>
    </section>
  );
};

// البيانات تبقى كما هي مع تغيير العناوين لتكون أكثر حدة
const leftData = [
    { type: "text", number: "01", title: "THINK.", desc: "We dive deep into the core of your business strategy." },
    { type: "image", src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f", alt: "FUTURE" },
    { type: "text", number: "03", title: "ANALYZE.", desc: "Turning raw data into powerful growth insights." },
    { type: "image", src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", alt: "TECH" },
];

const rightData = [
    { type: "image", src: "https://images.unsplash.com/photo-1558655146-d09347e92766", alt: "CRAFT" },
    { type: "text", number: "02", title: "BUILD.", desc: "Execution with surgical precision and speed." },
    { type: "image", src: "https://images.unsplash.com/photo-1518770660439-4636190af475", alt: "CHIP" },
    { type: "text", number: "04", title: "SCALE.", desc: "Taking your business to the global market." },
];

export default OppositeScroll;