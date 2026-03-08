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
    <main className="min-h-screen md:h-screen flex flex-col md:flex-row font-sans overflow-hidden relative">
      {/* Left Side: Space Nebula Background */}
      <section className="relative w-full md:w-1/2 h-[50vh] min-h-[600px] md:h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop')`,
            referrerPolicy: "no-referrer" as any
          }}
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

        {/* Logo */}
        <div className="absolute top-8 left-8 md:top-10 md:left-14 z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-[#540b0e] rounded-sm rotate-45" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-widest text-white">SKYGINE</span>
          </motion.div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col justify-center px-8 md:px-14 pt-16 pb-16 md:py-0 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 md:mt-12"
          >
            <h1 className="text-base md:text-lg font-light mb-1 md:mb-2 tracking-wide">Skygine Technologies</h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 tracking-tighter">COMING SOON</h2>
            <p className="text-lg md:text-xl font-medium mb-6 md:mb-8 text-white/90 max-w-lg">Building the next travel technology powerhouse in Dubai</p>

            <div className="w-24 md:w-48 h-[2px] bg-white/60 mb-8" />

            <p className="text-lg md:text-2xl font-light max-w-xl leading-relaxed opacity-90 italic">
              A future-ready ecosystem for travel platforms, booking products, agency operations, and intelligent travel infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Right Side: White Background Info */}
      <section className="w-full md:w-1/2 bg-white flex items-center justify-center pt-4 px-8 pb-24 md:p-10 lg:p-12 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl w-full pb-8 md:pb-16"
        >
          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-[90%]">
            Skygine Technologies is currently forming as a next‑generation travel technology company, building advanced B2B, B2C, Agency needs and SaaS systems in the travel market that power modern travel products, platforms, and digital infrastructure.          </p>

          {/* Strength Points */}
          <div className="space-y-5 mb-10">
            {strengths.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#540b0e]/5 flex items-center justify-center text-[#540b0e] group-hover:bg-[#540b0e] group-hover:text-white transition-all duration-300">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="text-[13px] md:text-sm font-bold text-gray-900 mb-0.5">{item.title}</h3>
                  <p className="text-[#8e8e8e] text-[11px] md:text-xs leading-relaxed max-w-[90%]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto bg-[#540b0e] text-white px-8 py-3.5 rounded-md font-semibold text-[11px] uppercase tracking-[0.15em] shadow-lg shadow-red-900/20 hover:bg-[#3d080a] transition-colors flex items-center justify-center gap-2"
          >
            CONNECT WITH US
            <Send size={14} />
          </motion.button>
        </motion.div>
      </section>

      {/* Scrolling Marquee Banner */}
      <div className="absolute bottom-0 left-0 w-full bg-[#540b0e] text-white py-3 overflow-hidden border-t border-white/10 z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Travellers</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span className="mx-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Travel Agency</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span className="mx-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Travel System</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span className="mx-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Agency OS</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span className="mx-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Travel Network</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span className="mx-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Travel Paas</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span className="mx-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Travel Tech</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span className="mx-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Direct Contracts</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span className="mx-8 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Api Integrations</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
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
              className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Connect with Skygine</h3>
                <p className="text-gray-500 mb-8">Skygine Technologies is preparing to launch its next-generation travel technology ecosystem from Dubai. Register your interest to receive updates, partnership news, and early access opportunities.</p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#540b0e] focus:ring-2 focus:ring-[#540b0e]/20 outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#540b0e] focus:ring-2 focus:ring-[#540b0e]/20 outline-none transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Message (Optional)</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#540b0e] focus:ring-2 focus:ring-[#540b0e]/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your company, project, or partnership interest"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-[#540b0e] text-white py-4 rounded-lg font-bold uppercase tracking-widest text-xs mt-4 shadow-lg shadow-red-900/20"
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
