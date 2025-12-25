import React from "react";
import OppositeScroll from "../pages/OppositeScroll";

import { motion } from "framer-motion";
import { FiTarget, FiEye, FiZap, FiAward, FiClock, FiSmile } from "react-icons/fi";

const About = () => {
  // أنميشن عام لظهور الأقسام
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Header Section - تأثير انفجار النص */}
      <section className="relative py-24 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-6xl md:text-8xl font-black text-red-800 mb-6 tracking-tighter"
          >
            ABOUT US
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-gray-700 text-xl md:text-2xl leading-relaxed font-medium"
          >
            We are a digital solutions power-house, transforming businesses 
            through <span className="text-red-600 font-bold">innovation</span> and <span className="text-red-600 font-bold">creativity</span>.
          </motion.p>
        </div>
        {/* أشكال طائرة في الخلفية */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-10 left-10 text-red-200 opacity-50 hidden lg:block"
        >
          <FiZap size={100} />
        </motion.div>
      </section>

      {/* 2. Story Content - تأثير كاشف للصورة */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-red-800/10 rounded-3xl -rotate-3"></div>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Team Work"
            className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-6 -right-6 bg-red-800 text-white p-6 rounded-2xl shadow-xl hidden md:block">
            <p className="text-3xl font-black">100%</p>
            <p className="text-sm uppercase font-bold">Dedication</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-12 h-1.5 bg-red-800 rounded-full"></span> Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-loose mb-6">
            Our journey started with a clear goal: to deliver <span className="bg-red-100 px-1 text-red-800 font-bold">high-quality digital services</span> 
            that combine creativity and technology to help businesses succeed in the digital age.
          </p>
          <p className="text-lg text-gray-600 leading-loose border-l-4 border-red-800 pl-6 italic">
            "We believe that great solutions begin with understanding our clients’ needs and transforming them into exceptional user experiences."
          </p>
        </motion.div>
      </section>

      {/* 3. Mission & Vision - كروت تفاعلية (Tilt) */}
      <section className="bg-neutral-900 py-24 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          {[
            { 
              title: "Our Vision", 
              desc: "To become the leading digital solutions provider in the region by delivering innovation and excellence.",
              icon: <FiEye size={40} />,
              color: "hover:bg-red-800"
            },
            { 
              title: "Our Mission", 
              desc: "Empower businesses and individuals with smart technology solutions that drive growth and long-term success.",
              icon: <FiTarget size={40} />,
              color: "hover:bg-blue-800"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-10 rounded-[2.5rem] border border-white/10 bg-white/5 transition-all duration-500 ${item.color} group`}
            >
              <div className="mb-6 text-red-500 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-gray-400 group-hover:text-white/80 text-lg leading-relaxed transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Statistics - عدادات ملونة وأكشن */}
      <section className="bg-white py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Clients", icon: <FiSmile /> },
              { number: "120+", label: "Projects Done", icon: <FiAward /> },
              { number: "8+", label: "Years Exp", icon: <FiClock /> },
              { number: "24/7", label: "Support", icon: <FiZap /> },
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                className="group perspective"
              >
                <div className="relative p-10 bg-white rounded-3xl border-2 border-gray-100 shadow-xl transition-all group-hover:border-red-600 flex flex-col items-center">
                  <div className="text-4xl text-red-600 mb-4 group-hover:scale-125 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-5xl font-black text-gray-900 mb-2 tracking-tighter">
                    {item.number}
                  </h4>
                  <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">
                    {item.label}
                  </p>
                  {/* تأثير لمعة عند الـ Hover */}
                  <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<OppositeScroll/>
    </div>
  );
};

export default About;
