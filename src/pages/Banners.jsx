import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiZap, FiLayers, FiShield } from "react-icons/fi";
import test from "../assets/test.jpg";

const Banners = () => {
  // أنميشن للنصوص
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // أنميشن للصورة (تأثير عائم)
  const floatingAnim = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 2, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative bg-white min-h-screen flex items-center overflow-hidden py-20">
      
      {/* 1. عناصر خلفية "أكشن" (أشكال هندسية طائرة) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-10 right-[-5%] w-96 h-96 bg-red-100/50 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-10 left-[5%] w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          
          {/* --- الجانب الأيسر: المحتوى --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Badge صغير ملفت */}
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-bold mb-6 border border-red-100"
            >
              <FiZap className="animate-pulse" /> New Era of Management
            </motion.span>

            <motion.h1 
              variants={textVariant}
              className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6"
            >
              Smart POS <br />
              <span className="relative">
                <span className="relative z-10 text-red-800">Inventory</span>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  className="absolute bottom-2 left-0 h-3 bg-red-200/60 -z-10"
                />
              </span>
            </motion.h1>

            <motion.p 
              variants={textVariant}
              className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Everything you need to scale your business. Manage <span className="font-bold text-black">Warehouses</span>, 
              <span className="font-bold text-black"> Sales</span>, and <span className="font-bold text-black">Finance</span> in one dash.
            </motion.p>

            {/* أزرار أكشن عالية */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(153, 27, 27, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="group flex items-center justify-center gap-3 rounded-2xl bg-red-800 px-8 py-4 text-white font-bold text-lg transition-all"
              >
                Get Started Free <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ bg: "#f9fafb" }}
                href="#"
                className="flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 px-8 py-4 text-gray-800 font-bold text-lg hover:border-gray-900 transition-all"
              >
                Live Demo
              </motion.a>
            </div>

           
          </motion.div>

          {/* --- الجانب الأيمن: الصورة المعززة --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* عناصر طائرة حول الصورة (Floating Cards) */}
          
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><FiShield /></div>
                <p className="font-black text-gray-800">Secure Payments</p>
              </div>
            </motion.div>

            {/* حاوية الصورة الأساسية */}
            <motion.div 
              variants={floatingAnim}
              animate="animate"
              className="relative rounded-[2rem] p-4 bg-gradient-to-tr from-gray-100 to-white shadow-2xl"
            >
              <img
                src={test}
                alt="POS System"
                className="w-full rounded-[1.5rem] shadow-inner object-cover"
              />
              
              {/* Overlay لمعة على الصورة */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banners;