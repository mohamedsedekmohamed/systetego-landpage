import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FiZap, FiTarget, FiBox, FiCpu, FiNavigation, FiActivity } from 'react-icons/fi';

const Test = () => {
  const containerRef = useRef(null);

  // تأثير تتبع الماوس للإضاءة الخلفية
  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  
  const floatingIcons = [
    { Icon: FiZap, color: 'text-yellow-400', top: '10%', left: '15%' },
    { Icon: FiActivity, color: 'text-red-500', top: '20%', left: '80%' },
    { Icon: FiCpu, color: 'text-blue-500', top: '70%', left: '10%' },
    { Icon: FiBox, color: 'text-purple-500', top: '80%', left: '85%' },
    { Icon: FiNavigation, color: 'text-green-500', top: '40%', left: '50%' },
  ];

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center"
    >   
    

      <motion.div 
        className="pointer-events-none fixed inset-0 z-30 opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,0,0,0.1), transparent 80%)`
        }}
      />

    
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute z-0 ${item.color} opacity-20`}
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <item.Icon size={100 + i * 20} />
        </motion.div>
      ))}

      
      <div className="relative z-40 text-center px-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', damping: 10, stiffness: 100 }}
        >
          <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-black uppercase leading-none">
            Full <br /> 
            <span className="text-transparent border-t-4 border-b-4 border-black" style={{ WebkitTextStroke: '2px black' }}>
              Action
            </span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="mt-8 bg-black text-white py-2 px-6 inline-block skew-x-[-12deg] text-2xl font-bold"
        >
          تجربة بصرية خارقة
        </motion.div>

    
        <div className="flex flex-wrap justify-center gap-8 mt-20">
          {[1, 2, 3].map((card) => (
            <motion.div
              key={card}
              whileHover={{ 
                scale: 1.1, 
                rotate: card % 2 === 0 ? 5 : -5,
                z: 50 
              }}
              className="relative w-64 h-80 bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col justify-end group cursor-none"
            >
              <div className="absolute top-4 right-4 group-hover:animate-ping">
                <FiTarget size={30} />
              </div>
              <h2 className="text-3xl font-black">CARD 0{card}</h2>
              <p className="font-bold text-gray-600 italic">BOOM ANIMATION</p>
              
              {/* تأثير الانفجار عند الـ Hover */}
              <motion.div 
                className="absolute inset-0 bg-red-600 -z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </div>

        {/* 5. زر المغناطيس (Magnetic Button) */}
        <motion.button
          whileHover={{ scale: 1.2, backgroundColor: '#dc2626' }}
          whileTap={{ scale: 0.8 }}
          className="mt-20 px-16 py-6 bg-black text-white text-3xl font-black rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-colors"
        >
          تدمير الحدود!
        </motion.button>
      </div>

      {/* 6. خطوط متحركة في الخلفية (Grid Animation) */}
      <div className="absolute inset-0 z-[-1] opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </div>
  );
};

export default Test;