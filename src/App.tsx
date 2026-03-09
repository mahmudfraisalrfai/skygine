/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Send, X, Zap, Globe, BarChart3, Cloud } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const strengths = [
    { icon: Globe, title: "Travel Technology Ecosystem", desc: "A unified digital infrastructure for the future of travel." },
    { icon: Zap, title: "Multi-Brand Platform Strategy", desc: "Powering Britrip, SafarHouse, Bookanda, and more." },
    { icon: BarChart3, title: "Smart Operations & Intelligence", desc: "Intelligent automation and data-driven travel operations." },
    { icon: Cloud, title: "Scalable Market Infrastructure", desc: "Built for global scale and high-performance travel products." }
  ];

  return (
    <main className="min-h-[100vh] flex flex-col md:flex-row font-sans overflow-x-hidden relative bg-[#0a0a0a] md:bg-white text-white md:text-gray-900 w-full mx-auto max-w-[2500px] 3xl:max-w-[90vw] shadow-2xl">

      {/* Background Image - Full page on mobile, left half on desktop */}
      <div className="absolute inset-0 md:w-1/2 md:min-h-[100vh] z-0 overflow-hidden bg-black">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            referrerPolicy: "no-referrer" as any
          }}
        />
        {/* Dark overlay: 0.6 opacity on mobile for text readability, 0.3 on desktop */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Left Content (Text) */}
      <section className="relative z-10 w-full md:w-1/2 min-h-screen md:min-h-[100vh] flex flex-col justify-center px-6 sm:px-8 md:px-14 xl:px-[5vw] pt-24 pb-16 md:py-0 text-white items-center md:items-start text-center md:text-left">
        {/* Logo */}
        <div className="absolute top-6 sm:top-8 left-0 w-full flex justify-center md:justify-start md:left-14 xl:left-[5vw] z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 xl:w-12 xl:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-4 h-4 xl:w-6 xl:h-6 bg-[#540b0e] rounded-sm rotate-45" />
            </div>
            <span className="font-bold tracking-widest text-white drop-shadow-md text-[clamp(1.125rem,2vw,1.75rem)]">SKYGINE</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[90vw] lg:max-w-[80%] 2xl:max-w-[1200px] mt-8 md:mt-12 flex flex-col items-center md:items-start"
        >
          <h1 className="font-light mb-2 text-white/90 uppercase tracking-[0.2em] md:tracking-wide text-[clamp(0.875rem,1.5vw,1.25rem)]">
            Skygine Technologies
          </h1>

          <h2 className="font-bold mb-3 md:mb-5 tracking-tighter leading-[1.1] text-[clamp(2.5rem,8vw,6rem)]">
            COMING SOON
          </h2>
          <p className="font-medium mb-6 md:mb-8 text-white/90 max-w-md md:max-w-lg xl:max-w-[80%] text-[clamp(1rem,1.5vw,1.5rem)]">
            Building the next travel technology powerhouse in Dubai
          </p>

          <div className="w-16 sm:w-24 md:w-32 xl:w-48 h-[2px] bg-white/60 mb-6 md:mb-8" />

          <p className="font-light max-w-xl xl:max-w-[85%] leading-relaxed opacity-90 italic px-2 md:px-0 text-[clamp(1rem,1.5vw,1.5rem)]">
            A future-ready ecosystem for travel platforms, booking products, agency operations, and intelligent travel infrastructure.
          </p>
        </motion.div>
      </section>

      {/* Right Content (Features & CTA) */}
      <section className="relative z-10 w-full md:w-1/2 min-h-[50vh] md:min-h-[100vh] bg-transparent md:bg-white flex flex-col items-center md:items-start px-4 sm:px-8 py-12 md:py-16 md:px-12 xl:px-[5vw] lg:px-16 overflow-y-auto pb-[100px] md:pb-[120px]">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-[90vw] md:max-w-[90%] xl:max-w-[1400px] my-auto flex flex-col items-center md:items-start"
        >
          <p className="text-white/80 md:text-gray-600 leading-relaxed mb-8 md:mb-12 max-w-[95%] md:max-w-[100%] text-center md:text-left text-[clamp(1rem,1.5vw,1.25rem)]">
            Skygine Technologies is currently forming as a next‑generation travel technology company, building advanced B2B, B2C, Agency needs and SaaS systems in the travel market that power modern travel products, platforms, and digital infrastructure.
          </p>

          {/* Strength Points */}
          <div className="space-y-4 md:space-y-6 mb-10 md:mb-14 w-full sm:w-11/12 md:w-full">
            {strengths.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="flex flex-col sm:flex-row items-center sm:items-start md:items-start gap-3 sm:gap-5 xl:gap-6 p-5 sm:p-4 md:p-0 group rounded-2xl md:rounded-none bg-black/20 sm:bg-black/30 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-transparent hover:bg-black/40 md:hover:bg-transparent transition-colors text-center md:text-left"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-xl md:rounded-lg bg-white/10 md:bg-[#540b0e]/5 flex items-center justify-center text-white md:text-[#540b0e] group-hover:bg-white/20 group-hover:md:bg-[#540b0e] group-hover:md:text-white transition-all duration-300">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7" />
                </div>
                <div className="flex-1 mt-1 sm:mt-0 xl:mt-1">
                  <h3 className="font-bold text-white md:text-gray-900 mb-1.5 md:mb-1 text-[clamp(1rem,1.5vw,1.25rem)]">{item.title}</h3>
                  <p className="text-white/70 md:text-[#8e8e8e] leading-relaxed max-w-full md:max-w-[95%] text-[clamp(0.875rem,1.2vw,1.125rem)]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto xl:min-w-[300px] bg-[#540b0e] text-white xl:py-5 px-8 py-4 md:py-3.5 rounded-xl md:rounded-md xl:rounded-lg font-semibold uppercase tracking-[0.15em] shadow-lg shadow-red-900/30 hover:bg-[#3d080a] transition-colors flex items-center justify-center gap-3 text-[clamp(0.875rem,1.2vw,1rem)]"
          >
            CONNECT WITH US
            <Send className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
          </motion.button>
        </motion.div>
      </section>

      {/* Scrolling Marquee Banner */}
      <div className="fixed md:absolute bottom-0 left-0 w-full bg-[#540b0e] text-white xl:py-4 py-3 overflow-hidden border-t border-white/10 z-30">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[clamp(0.75rem,1.2vw,1rem)]">Travellers</span>
              <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[clamp(0.75rem,1.2vw,1rem)]">Travel Agency</span>
              <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[clamp(0.75rem,1.2vw,1rem)]">Travel System</span>
              <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[clamp(0.75rem,1.2vw,1rem)]">Agency OS</span>
              <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[clamp(0.75rem,1.2vw,1rem)]">Travel Network</span>
              <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[clamp(0.75rem,1.2vw,1rem)]">Travel Paas</span>
              <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[clamp(0.75rem,1.2vw,1rem)]">Travel Tech</span>
              <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[clamp(0.75rem,1.2vw,1rem)]">Direct Contracts</span>
              <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[clamp(0.75rem,1.2vw,1rem)]">Api Integrations</span>
              <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-[90vw] md:max-w-xl xl:max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6 xl:w-8 xl:h-8" />
              </button>

              <div className="p-8 md:p-10 xl:p-14">
                <h3 className="font-bold text-gray-900 mb-3 text-[clamp(1.5rem,3vw,2.5rem)]">Connect with Skygine</h3>
                <p className="text-gray-500 mb-8 xl:mb-10 text-[clamp(0.875rem,1.5vw,1.125rem)]">Skygine Technologies is preparing to launch its next-generation travel technology ecosystem from Dubai. Register your interest to receive updates, partnership news, and early access opportunities.</p>

                <form className="space-y-5 xl:space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-gray-400 mb-1.5 text-[clamp(0.7rem,1vw,0.875rem)]">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 xl:py-4 xl:px-5 rounded-lg border border-gray-200 focus:border-[#540b0e] focus:ring-2 focus:ring-[#540b0e]/20 outline-none transition-all text-[clamp(0.875rem,1.2vw,1rem)]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-gray-400 mb-1.5 text-[clamp(0.7rem,1vw,0.875rem)]">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 xl:py-4 xl:px-5 rounded-lg border border-gray-200 focus:border-[#540b0e] focus:ring-2 focus:ring-[#540b0e]/20 outline-none transition-all text-[clamp(0.875rem,1.2vw,1rem)]"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-gray-400 mb-1.5 text-[clamp(0.7rem,1vw,0.875rem)]">Message (Optional)</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 xl:py-4 xl:px-5 rounded-lg border border-gray-200 focus:border-[#540b0e] focus:ring-2 focus:ring-[#540b0e]/20 outline-none transition-all resize-none text-[clamp(0.875rem,1.2vw,1rem)]"
                      placeholder="Tell us about your company, project, or partnership interest"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-[#540b0e] text-white py-4 xl:py-5 rounded-lg font-bold uppercase tracking-widest mt-6 shadow-lg shadow-red-900/20 text-[clamp(0.75rem,1.2vw,1rem)]"
                  >
                    SEND ENQUIRY
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
