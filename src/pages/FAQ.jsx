import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiHelpCircle } from "react-icons/fi";

const faqData = [
  {
    id: 1,
    question: "Why SysteGo?",
    answer: "One system. Full control. Real-time results.",
  },
  {
    id: 2,
    question: "What You Get with SysteGo?",
    answer: [
      "One unified dashboard",
      "Accurate inventory at all times",
      "Faster checkout experience",
      "Clear visibility into sales and performance",
    ],
  },
  {
    id: 3,
    question: "How SysteGo Adds Value to Your Business?",
    answer: [
      "Reduce manual work",
      "Speed up daily operations",
      "Improve decision-making with real-time data",
    ],
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="inline-block p-3 bg-red-100 text-red-700 rounded-2xl mb-4"
          >
            <FiHelpCircle size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Common <span className="text-red-800">Questions</span>
          </h2>
          <p className="text-gray-500 font-medium">Everything you need to know about SysteGo</p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((item) => (
            <div key={item.id} className="overflow-hidden">
              <motion.div
                initial={false}
                className={`border-2 transition-all duration-300 rounded-3xl ${
                  activeId === item.id 
                  ? "border-red-800 bg-red-50/30 shadow-xl shadow-red-900/5" 
                  : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-xl font-bold transition-colors ${
                    activeId === item.id ? "text-red-900" : "text-gray-800"
                  }`}>
                    {item.question}
                  </span>
                  
                  <div className={`p-2 rounded-full transition-all duration-500 ${
                    activeId === item.id ? "bg-red-800 text-white rotate-180" : "bg-gray-100 text-gray-500"
                  }`}>
                    {activeId === item.id ? <FiMinus size={20} /> : <FiPlus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-red-100 text-lg text-gray-700 leading-relaxed">
                        {Array.isArray(item.answer) ? (
                          <ul className="space-y-3">
                            {item.answer.map((line, i) => (
                              <motion.li 
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                key={i} 
                                className="flex items-start gap-3"
                              >
                                <span className="mt-2 w-2 h-2 rounded-full bg-red-800 shrink-0" />
                                {line}
                              </motion.li>
                            ))}
                          </ul>
                        ) : (
                          <p>{item.answer}</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;