import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import logo from "../assets/LOGOSYS.jpeg";

const Carousel = () => {
  return (
    <div className="py-24 bg-white overflow-hidden relative">
      {/* عناصر خلفية لإضافة روح للمكان */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center mb-16">
          <motion.div
            initial={{ rotate: -10, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            className="bg-red-800 text-white p-3 rounded-2xl mb-4 shadow-xl"
          >
            <FiStar size={30} className="animate-spin-slow" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">
            TRUSTED BY <span className="text-red-700">GIANTS</span>
          </h2>
          <div className="h-1.5 w-32 bg-red-800 mt-4 rounded-full" />
        </div>
      </div>

      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  return (
    <div className="relative w-full">
      {/* تأثير الضباب على الجوانب لتركيز الأكشن في المنتصف */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      <motion.div
        className="flex gap-10 py-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {/* تكرار المصفوفة مرتين للـ Loop اللانهائي */}
        {[...cards, ...cards].map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

const Card = ({ card }) => {
  return (
    <motion.div 
      whileHover={{ 
        scale: 1.1, 
        rotate: 3,
        y: -10
      }}
      className="group relative h-48 w-72 flex-shrink-0 flex items-center justify-center bg-white rounded-[2rem] border-2 border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:border-red-500 hover:shadow-red-200/50"
    >
      {/* تأثير لمعان (Glossy Effect) يظهر عند الـ Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
      
      {/* الصورة بألوانها الكاملة مع ظل خارجي */}
      <img 
        src={card.url} 
        alt="Partner" 
        className="h-24 w-auto object-contain drop-shadow-2xl transform transition-transform duration-500"
      />

      {/* دائرة ضوء خلف الشعار تظهر عند الـ Hover */}
      <div className="absolute -z-10 w-32 h-32 bg-red-400/20 blur-2xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
    </motion.div>
  );
};

const cards = [
  { url: logo, id: 1 },
  { url: logo, id: 2 },
  { url: logo, id: 3 },
  { url: logo, id: 4 },
  { url: logo, id: 5 },
  { url: logo, id: 6 },
];

export default Carousel;  