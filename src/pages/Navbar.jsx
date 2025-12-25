import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiInfo, FiBriefcase, FiMail, FiSettings, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/LOGOSYS.jpeg';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black/80 backdrop-blur-lg border-b border-red-500/20 py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="relative group flex items-center">
            <div className="absolute -inset-2 bg-red-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <img 
              src={logo} 
              alt="Logo" 
                className="relative h-14 w-32 rounded-xl object-cover shadow-lg border border-red-400/20"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.path} {...item} active={location.pathname === item.path} />
            ))}
          </div>

          {/* Right Side - CTA */}
          <div className="hidden md:flex items-center">
             <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(220,38,38,0.4)]">
               ابدأ الآن
             </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-red-500 transition-colors"
          >
            {isMobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <MobileMenu setIsMobileOpen={setIsMobileOpen} />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ path, label, icon: Icon, active }) => {
  return (
    <Link
      to={path}
      className={`group relative px-4 py-2 flex items-center gap-2 transition-colors ${
        active ? "text-red-500" : "text-neutral-400 hover:text-red-600"
      }`}
    >
      <Icon className={`text-lg ${active ? "text-red-500" : "group-hover:text-red-400"}`} />
      <span className="text-sm font-semibold tracking-wide uppercase">{label}</span>
      
      {/* Active Indicator Line */}
      {active && (
        <motion.div 
          layoutId="nav-underline"
          className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"
        />
      )}
    </Link>
  );
};

const MobileMenu = ({ setIsMobileOpen }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed right-0 top-0 h-full w-[280px] bg-neutral-950 border-l border-red-500/20 z-50 p-6 shadow-2xl md:hidden"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end mb-8">
           <button onClick={() => setIsMobileOpen(false)} className="text-neutral-400"><FiX size={30}/></button>
        </div>
        
        <div className="space-y-4">
          {NAV_ITEMS.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center gap-4 text-xl text-neutral-300 hover:text-red-500 py-3 border-b border-white/5"
              >
                <item.icon />
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-auto">
           <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold">
             تواصل معنا
           </button>
        </div>
      </div>
    </motion.div>
  );
};

const NAV_ITEMS = [
  { path: "/", label: "الرئيسية", icon: FiHome },
  { path: "/about", label: "من نحن", icon: FiInfo },
  { path: "/services", label: "خدماتنا", icon: FiSettings },
  { path: "/price", label: "الأسعار", icon: FiBriefcase },
  { path: "/contactus", label: "اتصل بنا", icon: FiMail },
];

export default Navbar;