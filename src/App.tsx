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
    <main className="min-h-screen flex flex-col md:flex-row font-sans overflow-x-hidden relative bg-[#0a0a0a] md:bg-white text-white md:text-gray-900 w-full mx-auto">

      {/* ================= LEFT SECTION (IMAGE + TEXT) ================= */}
      <section className="relative z-10 w-full md:w-1/2 min-h-screen flex flex-col px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 text-white items-center md:items-start text-center md:text-left overflow-hidden bg-black pb-24 md:pb-0">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              referrerPolicy: "no-referrer" as any
            }}
          />
          <div className="absolute inset-0 bg-black/50 md:bg-black/30 backdrop-blur-sm" />
        </div>

        {/* Logo */}
        <div className="relative pt-12 md:pt-16 lg:pt-20 z-20 w-full flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 lg:gap-3"
          >
            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white flex items-center justify-center shadow-lg" style={{ borderRadius: '4px', transform: 'rotate(45deg)' }}>
              <div className="w-3 h-3 lg:w-4 lg:h-4 bg-[#540b0e]" style={{ borderRadius: '1px' }} />
            </div>
            <span className="font-bold tracking-widest text-white drop-shadow-md text-[clamp(1rem,1.5vw,1.25rem)] lg:ml-1 uppercase">SKYGINE</span>
          </motion.div>
        </div>

        {/* Left Text Content - Vertically centered using auto margins */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full flex-grow flex flex-col justify-center mt-12 md:mt-0 max-w-2xl 2xl:max-w-3xl"
        >
          <div className="flex flex-col mb-4 md:mb-6">
            <h1 className="font-light text-white/90 uppercase tracking-[0.2em] md:tracking-[0.25em] text-[clamp(0.6rem,1vw,0.8rem)] w-full mb-1 ml-1">
              Skygine Technologies
            </h1>
            <h2 className="font-bold tracking-tighter leading-[1] text-[clamp(3.5rem,7vw,6.5rem)] text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.3)] w-full">
              COMING SOON
            </h2>
          </div>

          <p className="font-medium text-white/95 w-full text-[clamp(1rem,1.5vw,1.4rem)] leading-snug lg:leading-normal mb-8 lg:mb-12 drop-shadow-sm">
            Building the next travel technology powerhouse in Dubai
          </p>

          <div className="w-full h-[1px] bg-white/30 mb-8 lg:mb-10 max-w-sm md:max-w-lg lg:max-w-xl border-t border-white/10" />

          <p className="font-light w-full leading-relaxed opacity-90 italic text-[clamp(0.9rem,1.2vw,1.15rem)] lg:pr-12 md:pr-0 px-2 md:px-0">
            A future-ready ecosystem for travel platforms, booking products, agency
            operations, and intelligent travel infrastructure.
          </p>
        </motion.div>
      </section>

      {/* ================= RIGHT SECTION (FEATURES + CTA) ================= */}
      <section className="relative z-10 w-full md:w-1/2 min-h-screen bg-[#fcfcfc] flex flex-col px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24 lg:py-0 overflow-y-auto pb-32 md:pb-24">

        {/* Right Content - Vertically centered */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-full flex flex-col justify-center items-center md:items-start max-w-2xl 2xl:max-w-3xl my-auto"
        >
          <p className="text-gray-800 leading-relaxed w-full text-center md:text-left text-[clamp(0.9rem,1.2vw,1.1rem)] mb-10 md:mb-14 font-medium lg:pr-16">
            Skygine Technologies is currently forming as a next-generation travel technology company, building advanced B2B, B2C, Agency need and SaaS systems in the travel market that power modern travel products, platforms, and digital infrastructure.
          </p>

          {/* Strength Points */}
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 w-full mb-12 md:mb-16">
            {strengths.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="flex flex-col sm:flex-row items-center sm:items-start md:items-start gap-4 sm:gap-6 w-full text-center md:text-left"
              >
                <div className="flex-shrink-0 w-16 h-16 xl:w-20 xl:h-20 rounded-2xl bg-[#f4ecea] flex items-center justify-center text-[#400e0a] shadow-sm">
                  <item.icon className="w-7 h-7 xl:w-8 xl:h-8" strokeWidth={1.5} />
                </div>
                <div className="flex-1 mt-2 sm:mt-1 w-full flex flex-col justify-start">
                  <h3 className="font-extrabold text-[#3a3a3a] mb-1.5 md:mb-2 text-[clamp(1rem,1.3vw,1.25rem)] tracking-tight">{item.title}</h3>
                  <p className="text-[#686868] leading-relaxed w-full text-[clamp(0.85rem,1.1vw,1rem)] italic pr-0 lg:pr-8">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-[clamp(280px,25vw,350px)] bg-gradient-to-b from-[#4a0d0d] to-[#2a0707] text-white py-4 lg:py-4.5 rounded-xl font-bold uppercase tracking-[0.1em] shadow-[0_4px_15px_rgba(42,7,7,0.4)] hover:shadow-[0_6px_20px_rgba(42,7,7,0.5)] transition-all flex items-center justify-center gap-3 text-[clamp(0.8rem,1vw,1rem)] ring-1 ring-[#540b0e]/50"
          >
            CONNECT WITH US
            <Send className="w-4 h-4 xl:w-4 xl:h-4 transform -rotate-12" />
          </motion.button>
        </motion.div>
      </section>

      {/* ================= MARQUEE BANNER ================= */}
      <div className="fixed md:absolute bottom-0 left-0 w-full bg-[#4a0d0d] text-white py-2 lg:py-3.5 overflow-hidden border-t border-white/5 z-30 shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
        <div className="flex whitespace-nowrap animate-marquee items-center min-h-[1.5rem] lg:min-h-[2rem]">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="mx-4 md:mx-6 lg:mx-8 font-semibold uppercase tracking-[0.1em] text-[clamp(0.6rem,0.8vw,0.75rem)] text-white/90">Travellers</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="mx-4 md:mx-6 lg:mx-8 font-semibold uppercase tracking-[0.1em] text-[clamp(0.6rem,0.8vw,0.75rem)] text-white/90">Travel Agency</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="mx-4 md:mx-6 lg:mx-8 font-semibold uppercase tracking-[0.1em] text-[clamp(0.6rem,0.8vw,0.75rem)] text-white/90">Travel System</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="mx-4 md:mx-6 lg:mx-8 font-semibold uppercase tracking-[0.1em] text-[clamp(0.6rem,0.8vw,0.75rem)] text-white/90">Agency OS</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="mx-4 md:mx-6 lg:mx-8 font-semibold uppercase tracking-[0.1em] text-[clamp(0.6rem,0.8vw,0.75rem)] text-white/90">Travel Network</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="mx-4 md:mx-6 lg:mx-8 font-semibold uppercase tracking-[0.1em] text-[clamp(0.6rem,0.8vw,0.75rem)] text-white/90">Travel Paas</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="mx-4 md:mx-6 lg:mx-8 font-semibold uppercase tracking-[0.1em] text-[clamp(0.6rem,0.8vw,0.75rem)] text-white/90">Travel Tech</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="mx-4 md:mx-6 lg:mx-8 font-semibold uppercase tracking-[0.1em] text-[clamp(0.6rem,0.8vw,0.75rem)] text-white/90">Direct Contracts</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="mx-4 md:mx-6 lg:mx-8 font-semibold uppercase tracking-[0.1em] text-[clamp(0.6rem,0.8vw,0.75rem)] text-white/90">Api Integrations</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Form (Kept identical to prevent excessive code length here, paste your existing Modal code below) */}
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
                      className="w-full px-4 py-3 xl:py-4 xl:px-5 rounded-lg border border-gray-200 focus:border-[#540b0e] focus:ring-2 focus:ring-[#540b0e]/20 outline-none transition-all text-[clamp(0.875rem,1.2vw,1rem)] text-gray-900"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-gray-400 mb-1.5 text-[clamp(0.7rem,1vw,0.875rem)]">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 xl:py-4 xl:px-5 rounded-lg border border-gray-200 focus:border-[#540b0e] focus:ring-2 focus:ring-[#540b0e]/20 outline-none transition-all text-[clamp(0.875rem,1.2vw,1rem)] text-gray-900"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-gray-400 mb-1.5 text-[clamp(0.7rem,1vw,0.875rem)]">Message (Optional)</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 xl:py-4 xl:px-5 rounded-lg border border-gray-200 focus:border-[#540b0e] focus:ring-2 focus:ring-[#540b0e]/20 outline-none transition-all resize-none text-[clamp(0.875rem,1.2vw,1rem)] text-gray-900"
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