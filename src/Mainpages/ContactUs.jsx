import React from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

const ContactUs = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-white">
      {/* عناصر خلفية ديناميكية (Blobs) لتعزيز الأكشن */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* الجانب الأيسر: نصوص محفزة */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              Let's Scale Your <span className="text-red-800">Business</span> Together.
            </h2>
            <p className="text-gray-600 text-xl mb-8 leading-relaxed">
              Have a question about our POS system? Our team is ready to help you optimize your operations.
            </p>
            
            {/* معلومات سريعة */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-800 font-bold text-lg">
                <div className="p-3 bg-red-50 text-red-700 rounded-xl">
                  <FiMail size={24} />
                </div>
                support@systego.com
              </div>
              <div className="flex items-center gap-4 text-gray-800 font-bold text-lg">
                <div className="p-3 bg-red-50 text-red-700 rounded-xl">
                  <FiMessageCircle size={24} />
                </div>
                Live Chat Available 24/7
              </div>
            </div>
          </motion.div>

          {/* الجانب الأيمن: الفورم الاحترافي */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-8 md:p-10"
          >
            <form className="space-y-5">
              {/* حقل الاسم */}
              <div className="group relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-red-600 focus:bg-white outline-none transition-all font-medium text-gray-800"
                />
              </div>

              {/* حقل الإيميل */}
              <div className="group relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-red-600 focus:bg-white outline-none transition-all font-medium text-gray-800"
                />
              </div>

              {/* حقل الرسالة */}
              <div className="group relative">
                <textarea
                  rows="4"
                  placeholder="How can we help?"
                  className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-red-600 focus:bg-white outline-none transition-all font-medium text-gray-800 resize-none"
                ></textarea>
              </div>

              {/* زر الإرسال المتفاعل */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-800 hover:bg-red-700 text-white py-4 rounded-2xl text-lg font-black shadow-lg shadow-red-900/20 flex items-center justify-center gap-3 transition-colors"
              >
                Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;