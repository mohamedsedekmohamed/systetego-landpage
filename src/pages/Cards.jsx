import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMonitor, FiDatabase, FiPieChart, FiArrowRight } from "react-icons/fi";

const cardsData = [
  {
    id: 1,
    title: "Smart POS",
    description: "Fast checkout, barcode scanning, discounts, cashier-friendly interface.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62",
    icon: <FiMonitor />,
    sectionId: "pos",
    color: "from-red-600 to-red-900"
  },
  {
    id: 2,
    title: "Inventory Control",
    description: "Real-time stock control across multiple warehouses and branches.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    icon: <FiDatabase />,
    sectionId: "inventory",
    color: "from-blue-600 to-blue-900"
  },
  {
    id: 3,
    title: "Business Management",
    description: "Products, categories, suppliers, taxes, currencies & financial accounts.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    icon: <FiPieChart />,
    sectionId: "management",
    color: "from-neutral-800 to-black"
  }
];

const Cards = () => {
  return (
    <div className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* عنوان الأكشن */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tighter">
            CORE <span className="text-red-700">SOLUTIONS</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Everything you need to manage your business effectively with our high-tech POS and management tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cardsData.map((card, index) => (
            <SolutionCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SolutionCard = ({ card, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Link
        to={`/services#${card.sectionId}`}
        className="group relative block h-[450px] w-full rounded-[2.5rem] overflow-hidden bg-black shadow-2xl"
      >
        {/* خلفية الصورة مع تأثير Zoom و Darken */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        {/* محتوى الكارت */}
        <div className="relative z-10 h-full p-8 flex flex-col justify-end">
          {/* أيقونة "طائرة" تظهر عند الـ Hover */}
          <motion.div 
            className="absolute top-8 left-8 text-white/20 text-7xl"
            initial={{ x: -20, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            {card.icon}
          </motion.div>

          {/* نصوص الكارت */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
               <span className="p-2 bg-red-600 rounded-lg text-white text-xl">
                 {card.icon}
               </span>
               <h3 className="text-3xl font-black text-white leading-none tracking-tight">
                 {card.title}
               </h3>
            </div>
            
            <p className="text-gray-300 font-medium leading-relaxed max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
              {card.description}
            </p>
          </div>

          {/* زر "اكتشف" يظهر عند الحوم */}
          <motion.div 
            className="flex items-center gap-2 text-red-500 font-bold text-lg"
            whileHover={{ x: 5 }}
          >
            Explore Solution <FiArrowRight />
          </motion.div>
        </div>

        {/* تأثير الوهج (Glow) الملون عند الأطراف */}
        <div className={`absolute inset-0 border-4 border-transparent group-hover:border-red-600/50 rounded-[2.5rem] transition-colors duration-500`} />
      </Link>
    </motion.div>
  );
};

export default Cards;