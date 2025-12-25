import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMonitor, FiDatabase, FiBarChart2, FiCheckCircle } from "react-icons/fi";

const servicesData = [
  {
    id: "pos",
    title: "Smart POS System",
    subtitle: "RETAIL & HOSPITALITY",
    description: "Transform your checkout process with our lightning-fast POS. Designed to handle high-volume sales while maintaining a simple, intuitive interface for your staff.",
    features: ["Offline Mode Support", "Custom Receipts", "Multi-Payment Integration", "Quick Barcode Scanning"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62",
    icon: <FiMonitor />,
    accent: "bg-red-600"
  },
  {
    id: "inventory",
    title: "Inventory Control",
    subtitle: "WAREHOUSE MANAGEMENT",
    description: "Never run out of stock again. Our intelligent tracking system monitors every unit across multiple branches and alerts you before items hit critical levels.",
    features: ["Automated Restocking", "Multi-Warehouse Sync", "Batch & Expiry Tracking", "Stock Adjustment Logs"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    icon: <FiDatabase />,
    accent: "bg-neutral-800"
  },
  {
    id: "management",
    title: "Business Intelligence",
    subtitle: "FINANCIALS & REPORTS",
    description: "Get a bird's eye view of your entire operation. Generate detailed financial reports, track supplier performance, and manage taxes effortlessly.",
    features: ["Profit & Loss Statements", "Supplier Portals", "Tax & VAT Automation", "Employee Performance Tracking"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    icon: <FiBarChart2 />,
    accent: "bg-red-800"
  }
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="py-24 bg-neutral-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
            OUR <span className="text-red-600">POWER</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-xl mx-auto font-medium">
            Advanced tools tailored to accelerate your business growth.
          </p>
        </motion.div>
      </section>

      {/* Services Sections */}
      <div className="max-w-7xl mx-auto px-6">
        {servicesData.map((service, index) => (
          <section
            id={service.id}
            key={service.id}
            className={`min-h-screen py-20 flex flex-col justify-center border-b border-gray-100 last:border-0`}
          >
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
              
              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-bold text-xs tracking-widest mb-6 ${service.accent}`}>
                  {service.icon} {service.subtitle}
                </div>
                <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight uppercase">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FiCheckCircle className="text-red-600 shrink-0" />
                      <span className="text-gray-800 font-bold text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <div className={`absolute -inset-4 ${service.accent} opacity-10 rounded-[3rem] rotate-3`}></div>
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl h-[400px] md:h-[500px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>

            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;