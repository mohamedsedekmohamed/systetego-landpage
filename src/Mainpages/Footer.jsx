import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from '../assets/LOGOSYS.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        
        {/* Logo Section & Newsletter - الأكشن هنا في ظهور اللوجو */}
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src={logo} 
              alt="SysteGo Logo" 
              className="relative h-24 w-auto rounded-xl object-contain shadow-2xl border border-white/10" 
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mx-auto mt-8 max-w-md text-center leading-relaxed text-gray-500 font-medium"
          >
            Empowering businesses with smart POS and inventory solutions. 
            Manage everything from one unified dashboard.
          </motion.p>
        </div>

        {/* Links Section - توزيع أفضل وأكشن عند الـ Hover */}
        <div className="mt-12">
          <ul className="flex flex-wrap justify-center gap-y-4 gap-x-8 md:gap-x-12">
            {["Home", "Services", "Price", "About Us", "Contact"].map((item, idx) => (
              <li key={idx}>
                <a
                  className="relative text-gray-800 font-bold uppercase tracking-widest text-sm transition hover:text-red-700 group"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons - أيقونات تفاعلية جداً */}
        <div className="mt-12 flex justify-center gap-6">
          {[
            { Icon: FaFacebookF, link: "#", color: "hover:bg-blue-600" },
            { Icon: FaInstagram, link: "#", color: "hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600" },
            { Icon: FaTwitter, link: "#", color: "hover:bg-sky-400" },
            { Icon: FaLinkedinIn, link: "#", color: "hover:bg-blue-700" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-600 shadow-sm transition-all duration-300 hover:text-white ${social.color}`}
            >
              <social.Icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Bottom Line - Copyright */}
        <div className="mt-16 border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} SysteGo Solutions. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-red-700 transition">Privacy Policy</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-red-700 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;