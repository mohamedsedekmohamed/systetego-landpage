import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiStar, FiZap, FiTrendingUp, FiArrowRight } from 'react-icons/fi';

export default function PricingCards() {
  return (
    <div className="min-h-screen bg-neutral-950 py-24 px-6 relative overflow-hidden">
      {/* تأثيرات إضاءة خلفية (Spotlights) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            READY TO <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">SCALE?</span>
          </h2>
          <p className="text-neutral-500 text-xl max-w-2xl mx-auto font-medium">
            Transparent pricing for businesses that move fast. No hidden fees, just pure growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <PricingCard
            index={0}
            title="Starter"
            price="499"
            period="per month"
            description="Perfect for startups and small projects"
            icon={<FiStar />}
            features={["Professional design", "5 main pages", "1-year hosting", "SEO optimization"]}
            color="gray"
          />

          <PricingCard
            index={1}
            title="Professional"
            price="999"
            period="per month"
            description="Most popular for medium businesses"
            icon={<FiZap />}
            features={["All Starter features", "Mobile app included", "Payment integration", "Team training"]}
            color="red"
            popular={true}
          />

          <PricingCard
            index={2}
            title="Enterprise"
            price="Custom"
            period="on request"
            description="Solutions for large companies"
            icon={<FiTrendingUp />}
            features={["Unlimited pages", "Fully custom dev", "Dedicated support", "Advanced analytics"]}
            color="orange"
          />
        </div>
      </div>
    </div>
  );
}

const PricingCard = ({ title, price, period, description, icon, features, color, popular, index }) => {
  const colorClasses = {
    gray: {
      border: "group-hover:border-gray-500/50",
      icon: "text-gray-400 bg-gray-500/10",
      button: "bg-white text-black hover:bg-gray-200",
      accent: "bg-gray-500"
    },
    red: {
      border: "group-hover:border-red-500/50",
      icon: "text-red-500 bg-red-500/10",
      button: "bg-red-600 text-white hover:bg-red-700 shadow-red-600/20",
      accent: "bg-red-600"
    },
    orange: {
      border: "group-hover:border-orange-500/50",
      icon: "text-orange-500 bg-orange-500/10",
      button: "bg-orange-600 text-white hover:bg-orange-700 shadow-orange-600/20",
      accent: "bg-orange-600"
    }
  };

  const currentStyle = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`relative group h-full`}
    >
      <div className={`relative h-full bg-neutral-900/50 backdrop-blur-xl rounded-[2.5rem] border-2 border-neutral-800 p-8 transition-all duration-500 ${currentStyle.border} flex flex-col`}>
        
        {popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
            Popular Choice
          </div>
        )}

        <div className="mb-8">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform group-hover:rotate-12 ${currentStyle.icon}`}>
            {icon}
          </div>
          <h3 className="text-3xl font-black text-white mb-2">{title}</h3>
          <p className="text-neutral-500 font-medium text-sm">{description}</p>
        </div>

        <div className="mb-10">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-black text-white">{price === "Custom" ? price : `$${price}`}</span>
            {price !== "Custom" && <span className="text-neutral-500 font-bold uppercase text-xs">/{period.split(' ')[1]}</span>}
          </div>
        </div>

        <div className="space-y-4 mb-10 flex-grow">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 group/item">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStyle.icon}`}>
                <FiCheck strokeWidth={4} />
              </div>
              <span className="text-neutral-400 group-hover/item:text-neutral-200 transition-colors text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          className={`w-full py-4 rounded-2xl font-black flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${currentStyle.button}`}
        >
          GET STARTED <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* تأثير توهج خلفي عند الـ Hover */}
      <div className={`absolute -z-10 inset-0 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${currentStyle.accent}`} />
    </motion.div>
  );
};