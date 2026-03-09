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

  // Animation Variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.3,
      }
    }
  };

  const itemLeftVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemRightVariants = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    // md:h-screen md:overflow-hidden ensures no scrolling on desktop, strict 100vh.
    // Mobile stays min-h-screen to allow scrolling if content overflows.
    <main className="min-h-[100vh] md:h-screen flex flex-col md:flex-row font-sans md:overflow-hidden relative bg-[#0a0a0a] md:bg-white text-white md:text-gray-900 w-full mx-auto shadow-2xl">

      {/* ================= LEFT SECTION (IMAGE + TEXT) ================= */}
      <section className="relative z-10 w-full md:w-1/2 min-h-screen md:h-full flex flex-col px-6 sm:px-8 md:px-[6vw] lg:px-[8vw] pt-24 md:pt-[12vh] pb-16 md:pb-[15vh] text-white items-center md:items-start text-center md:text-left overflow-hidden bg-black">

        {/* Background Image with continuous zoom/pan effect */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 1, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              referrerPolicy: "no-referrer" as any
            }}
          />
          <div className="absolute inset-0 bg-black/60 md:bg-black/40 backdrop-blur-sm" />
        </div>

        {/* Logo */}
        <div className="absolute top-6 sm:top-8 left-0 w-full flex justify-center md:justify-start md:left-[6vw] lg:left-[8vw] z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-2"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 xl:w-12 xl:h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            >
              <div className="w-4 h-4 xl:w-6 xl:h-6 bg-[#540b0e] rounded-sm rotate-45" />
            </motion.div>
            <span className="font-bold tracking-widest text-white drop-shadow-md text-[clamp(1.125rem,2vw,1.75rem)]">SKYGINE</span>
          </motion.div>
        </div>

        {/* Left Text Content - Animated Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full flex-grow flex flex-col justify-between md:justify-evenly mt-[4vh] md:mt-[6vh] gap-6 md:gap-0"
        >
          <motion.div variants={itemLeftVariants} className="flex flex-col gap-[1.5vh]">
            <h1 className="font-light text-white/90 uppercase tracking-[0.2em] md:tracking-wider text-[clamp(1rem,1.5vw,1.5rem)] w-full">
              Skygine Technologies
            </h1>
            <h2 className="font-bold tracking-tighter leading-[1.05] text-[clamp(3rem,8vw,8rem)] w-full bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              COMING SOON
            </h2>
          </motion.div>

          <motion.p variants={itemLeftVariants} className="font-medium text-white/95 w-full md:w-[90%] text-[clamp(1.2rem,2vw,2.5rem)] leading-snug">
            Building the next travel technology powerhouse in Dubai
          </motion.p>

          <motion.div variants={itemLeftVariants} className="w-24 md:w-32 xl:w-48 h-[2px] bg-white/60" />

          <motion.p variants={itemLeftVariants} className="font-light w-full md:w-[95%] leading-loose opacity-90 italic px-2 md:px-0 text-[clamp(1.1rem,1.8vw,2rem)]">
            A future-ready ecosystem for travel platforms, booking products, agency operations, and intelligent travel infrastructure.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= RIGHT SECTION (FEATURES + CTA) ================= */}
      {/* Added md:h-full to restrict to 100vh on desktop */}
      <section className="relative z-10 w-full md:w-1/2 min-h-screen md:h-full bg-transparent md:bg-white flex flex-col px-4 sm:px-8 md:px-[6vw] lg:px-[8vw] py-16 md:pt-[12vh] pb-[100px] md:pb-[12vh]">

        {/* Right Content - Animated Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full flex-grow flex flex-col justify-between md:justify-evenly gap-8 md:gap-0 h-full"
        >
          <motion.p variants={itemRightVariants} className="text-white/80 md:text-gray-600 leading-loose w-full text-center md:text-left text-[clamp(1.1rem,1.6vw,1.8rem)]">
            Skygine Technologies is currently forming as a next‑generation travel technology company, building advanced B2B, B2C, Agency needs and SaaS systems in the travel market that power modern travel products, platforms, and digital infrastructure.
          </motion.p>

          {/* Strength Points */}
          <div className="flex flex-col gap-4 md:gap-[3vh] w-full">
            {strengths.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemRightVariants}
                whileHover={{ scale: 1.02, x: 10 }} // Slight shift right on hover
                className="flex flex-col sm:flex-row items-center sm:items-start md:items-start gap-4 sm:gap-6 p-5 sm:p-4 md:p-0 group rounded-2xl md:rounded-none bg-black/20 sm:bg-black/30 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-transparent cursor-default transition-all duration-300 text-center md:text-left w-full"
              >
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-xl md:rounded-2xl bg-white/10 md:bg-[#540b0e]/5 flex items-center justify-center text-white md:text-[#540b0e] group-hover:bg-white/20 group-hover:md:bg-[#540b0e] group-hover:md:text-white transition-all duration-300 shadow-sm">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 group-hover:animate-pulse" />
                </div>
                <div className="flex-1 mt-2 sm:mt-0 w-full flex flex-col justify-center min-h-[4rem]">
                  <h3 className="font-bold text-white md:text-gray-900 mb-1.5 md:mb-2 text-[clamp(1.1rem,1.6vw,1.75rem)] group-hover:text-red-300 md:group-hover:text-[#540b0e] transition-colors">{item.title}</h3>
                  <p className="text-white/70 md:text-[#8e8e8e] leading-relaxed w-full text-[clamp(0.95rem,1.3vw,1.4rem)]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemRightVariants} className="w-full mt-auto md:mt-0 flex justify-center md:justify-start">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(84, 11, 14, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto xl:min-w-[400px] bg-[#540b0e] text-white py-5 md:py-6 px-8 rounded-xl md:rounded-lg font-bold uppercase tracking-[0.2em] shadow-xl shadow-red-900/30 transition-all flex items-center justify-center gap-4 text-[clamp(1rem,1.3vw,1.5rem)] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-4">
                CONNECT WITH US
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send className="w-5 h-5 xl:w-6 xl:h-6" />
                </motion.div>
              </span>
              {/* Button hover effect layer */}
              <div className="absolute inset-0 bg-[#3d080a] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= MARQUEE BANNER ================= */}
      {/* Kept identical but positioned strictly at bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-[#540b0e] text-white xl:py-5 py-4 overflow-hidden border-t border-white/10 z-30">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.8rem,1.2vw,1.1rem)]">Travellers</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.8rem,1.2vw,1.1rem)]">Travel Agency</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.8rem,1.2vw,1.1rem)]">Travel System</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.8rem,1.2vw,1.1rem)]">Agency OS</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.8rem,1.2vw,1.1rem)]">Travel Network</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.8rem,1.2vw,1.1rem)]">Travel Paas</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.8rem,1.2vw,1.1rem)]">Travel Tech</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.8rem,1.2vw,1.1rem)]">Direct Contracts</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.8rem,1.2vw,1.1rem)]">Api Integrations</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
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