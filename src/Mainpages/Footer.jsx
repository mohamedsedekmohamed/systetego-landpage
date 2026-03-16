import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import logo from '../assets/LOGOSYS.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // مصفوفة الروابط بتنظيم عصري
  const sections = [
    {
      title: "Product",
      links: ["Smart POS", "Inventory Management", "Analytics Hub", "Cloud Sync"]
    },
    {
      title: "Company",
      links: ["Our Story", "Tech Stack", "Career", "Press Kit"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Service Terms", "Cookie Settings"]
    }
  ];

  return (
    <footer className="relative bg-[#050505] text-white pt-32 pb-12 overflow-hidden">
      {/* عناصر خلفية هندسية (Abstract Shapes) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] -z-0" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* الجزء العلوي: Branding & Big Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          
          <div className="lg:col-span-7 space-y-10">
            {/* Logo Container - تصميم فضائي حديث */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
              <div className="relative bg-gradient-to-b from-white to-gray-300 p-1 rounded-[2.5rem]">
                <img 
                  src={logo} 
                  alt="SysteGo" 
                  className="h-24 md:h-36 w-auto rounded-[2.3rem] object-contain shadow-2xl" 
                />
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Retail Tech.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end lg:items-end">
            <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed max-w-md lg:text-right">
              Empowering the next generation of retailers with zero-latency systems and beautiful interfaces.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 flex items-center gap-3 bg-white text-black px-8 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-red-600 hover:text-white transition-all duration-500"
            >
              Get Started Now <HiArrowUpRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* الجزء الأوسط: Bento Grid Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 py-20 border-t border-white/10">
          {sections.map((section) => (
            <div key={section.title} className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 text-lg hover:text-white transition-all duration-300 flex items-center group">
                      <span className="w-0 group-hover:w-4 h-[1px] bg-red-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Presence - تصميم عمودي مميز */}
          <div className="col-span-2 lg:col-span-2 flex flex-col lg:items-end gap-10">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 lg:text-right">
              Join the Ecosystem
            </h4>
            <div className="flex flex-wrap gap-4 justify-start lg:justify-end">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
                <motion.a 
                  key={idx} 
                  whileHover={{ y: -10, backgroundColor: "#dc2626" }}
                  className="w-16 h-16 flex items-center justify-center rounded-3xl bg-white/5 border border-white/10 text-white backdrop-blur-md transition-colors duration-500"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* الجزء السفلي: الـ Footer النهائي */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-500 text-sm font-medium">
            © {currentYear} SYSTEGO SOLUTIONS — ALL RIGHTS RESERVED
          </div>
          
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-gray-400 group-hover:text-white transition-colors">
              SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>
      </div>

      {/* لمسة فنية: نص عملاق في الخلفية يتحرك عند التمرير */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden opacity-[0.02] select-none pointer-events-none">
        <h1 className="text-[20vw] font-black leading-none whitespace-nowrap">
          SYSTEGO SOLUTIONS
        </h1>
      </div>
    </footer>
  );
};

export default Footer;