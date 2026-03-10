/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Send, X, Zap, Globe, BarChart3, Cloud } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, FormEvent } from "react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mreypklq", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus("idle");
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus("error");
    }
  };

  const strengths = [
    { icon: Globe, title: "Travel Technology Ecosystem", desc: "A unified digital infrastructure for the future of travel." },
    { icon: Zap, title: "Multi-Brand Platform Strategy", desc: "Powering Britrip, SafarHouse, Bookanda, and more." },
    { icon: BarChart3, title: "Smart Operations & Intelligence", desc: "Intelligent automation and data-driven travel operations." },
    { icon: Cloud, title: "Scalable Market Infrastructure", desc: "Built for global scale and high-performance travel products." }
  ];

  return (
    <main className="min-h-[100vh] md:h-screen flex flex-col md:flex-row font-sans overflow-x-hidden md:overflow-hidden relative bg-[#0a0a0a] md:bg-white text-white md:text-gray-900 w-full max-w-[1920px] mx-auto shadow-2xl">

      {/* ================= LEFT SECTION (IMAGE + TEXT) ================= */}
      <section className="relative z-10 w-full md:w-1/2 min-h-screen md:min-h-0 md:h-full flex flex-col px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 pt-[12vh] pb-[15vh] md:pt-[8vh] md:pb-[12vh] text-white items-center md:items-start text-center md:text-left overflow-hidden bg-black">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
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
          <div className="absolute inset-0 bg-black/60 md:bg-black/40 backdrop-blur-sm" />
        </div>

        {/* Logo */}
        <div className="absolute top-6 sm:top-8 left-0 w-full flex justify-center md:justify-start md:left-[6vw] lg:left-[8vw] z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 xl:w-12 xl:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-4 h-4 xl:w-6 xl:h-6 bg-[#540b0e] rounded-sm rotate-45" />
            </div>
            <span className="font-bold tracking-widest text-white drop-shadow-md text-[clamp(1.125rem,1.5vw,1.5rem)]">SKYGINE</span>
          </motion.div>
        </div>

        {/* Left Text Content - Distributed vertically using flex-grow & gap-[vh] */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full flex-grow flex flex-col justify-center gap-6 md:gap-8 mt-[6vh] md:mt-0"
        >
          <div className="flex flex-col gap-1.5 md:gap-2">
            <div className="flex items-center gap-3 md:gap-4 mb-0.5">
              <div className="h-[2px] w-8 md:w-10 bg-[#540b0e]" />
              <h1 className="font-semibold text-white/80 uppercase tracking-[0.3em] md:tracking-[0.4em] text-[0.7rem] md:text-[0.75rem]">
                Skygine Technologies
              </h1>
            </div>
            <h2 className="font-extrabold tracking-tighter leading-none text-[clamp(2rem,4.5vw,4.5rem)] w-full text-white drop-shadow-md">
              COMING SOON
            </h2>
          </div>

          <p className="font-light text-white/95 w-full md:max-w-[90%] text-[1rem] md:text-[1.25rem] leading-snug">
            Building the next travel technology powerhouse in Dubai.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            <div className="w-12 h-[1px] bg-white/30" />
            <p className="font-light w-full md:max-w-[85%] text-white/60 leading-relaxed text-[0.875rem] md:text-[1rem]">
              A future-ready ecosystem for travel platforms, booking products, agency operations, and intelligent travel infrastructure.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= RIGHT SECTION (FEATURES + CTA) ================= */}
      <section className="relative z-10 w-full md:w-1/2 min-h-screen md:min-h-0 md:h-full bg-transparent md:bg-white flex flex-col px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20 pt-10 md:pt-12 lg:pt-[10vh] pb-12 md:pb-16 lg:pb-[15vh] overflow-y-auto overflow-x-hidden">

        {/* Right Content - Distributed vertically using justify-between & gap-[vh] */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex-grow flex flex-col justify-evenly gap-4 md:gap-3"
        >
          <p className="text-white/80 md:text-gray-600 leading-tight md:leading-snug lg:leading-normal w-full text-center md:text-left text-[0.875rem] lg:text-[1.1rem]">
            Skygine Technologies is currently forming as a next‑generation travel technology company, building advanced B2B, B2C, Agency needs and SaaS systems in the travel market.
          </p>

          {/* Strength Points - Single Column as requested, with scrolling */}
          <div className="flex flex-col gap-4 md:gap-3 lg:gap-[4vh] w-full">
            {strengths.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="flex flex-col sm:flex-row items-center sm:items-start md:items-start gap-4 sm:gap-6 p-5 sm:p-4 md:p-0 group rounded-2xl md:rounded-none bg-black/20 sm:bg-black/30 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-transparent hover:bg-black/40 md:hover:bg-transparent transition-colors text-center md:text-left w-full"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-6 md:h-6 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-lg bg-white/10 md:bg-[#540b0e]/5 flex items-center justify-center text-white md:text-[#540b0e] group-hover:bg-white/20 group-hover:md:bg-[#540b0e] group-hover:md:text-white transition-all duration-300">
                  <item.icon className="w-5 h-5 md:w-3.5 md:h-3.5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
                </div>
                <div className="flex-1 w-full flex flex-col justify-center">
                  <h3 className="font-bold text-white md:text-gray-900 mb-0.5 md:mb-0.5 text-[0.8rem] lg:text-[1.25rem]">{item.title}</h3>
                  <p className="text-white/70 md:text-[#8e8e8e] leading-tight w-full text-[0.65rem] lg:text-[1rem]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto lg:min-w-[400px] mt-6 md:mt-8 mb-12 md:mb-16 lg:mb-[8vh] bg-[#540b0e] text-white py-4 md:py-3 lg:py-6 rounded-xl md:rounded-lg font-bold uppercase tracking-[0.2em] shadow-xl shadow-red-900/30 hover:bg-[#3d080a] transition-colors flex items-center justify-center gap-4 text-[0.875rem] lg:text-[1.1rem]"
          >
            CONNECT WITH US
            <Send className="w-5 h-5 xl:w-6 xl:h-6" />
          </motion.button>

          {/* Bottom Spacer to clear the fixed Marquee footer on scroll */}
          <div className="h-12 md:h-16 w-full flex-shrink-0" />
        </motion.div>
      </section>

      {/* ================= MARQUEE BANNER ================= */}
      <div className="fixed md:absolute bottom-0 left-0 w-full bg-[#540b0e] text-white xl:py-5 py-4 overflow-hidden border-t border-white/10 z-30">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.75rem,0.9vw,0.9rem)]">Travellers</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.75rem,0.9vw,0.9rem)]">Travel Agency</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.75rem,0.9vw,0.9rem)]">Travel System</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.75rem,0.9vw,0.9rem)]">Agency OS</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.75rem,0.9vw,0.9rem)]">Travel Network</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.75rem,0.9vw,0.9rem)]">Travel Paas</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.75rem,0.9vw,0.9rem)]">Travel Tech</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.75rem,0.9vw,0.9rem)]">Direct Contracts</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              <span className="mx-6 md:mx-10 font-bold uppercase tracking-[0.3em] text-[clamp(0.75rem,0.9vw,0.9rem)]">Api Integrations</span>
              <span className="w-2 h-2 bg-white/30 rounded-full" />
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
              className="relative bg-white w-full max-w-[90vw] md:max-w-xl xl:max-w-2xl rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6 xl:w-8 xl:h-8" />
              </button>

              <div className="p-8 md:p-10 xl:p-14">
                <h3 className="font-bold text-gray-900 mb-3 text-[clamp(1.25rem,2vw,1.75rem)]">Connect with Skygine</h3>
                <p className="text-gray-500 mb-8 xl:mb-10 text-[clamp(0.875rem,1.2vw,1rem)]">Skygine Technologies is preparing to launch its next-generation travel technology ecosystem from Dubai. Register your interest to receive updates, partnership news, and early access opportunities.</p>

                <form className="space-y-5 xl:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-gray-400 mb-1.5 text-[clamp(0.7rem,0.9vw,0.8rem)]">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 xl:py-4 xl:px-5 rounded-lg border border-gray-200 focus:border-[#540b0e] focus:ring-2 focus:ring-[#540b0e]/20 outline-none transition-all text-[clamp(0.875rem,1vw,0.95rem)] text-gray-900"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-gray-400 mb-1.5 text-[clamp(0.7rem,0.9vw,0.8rem)]">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 xl:py-4 xl:px-5 rounded-lg border border-gray-200 focus:border-[#540b0e] focus:ring-2 focus:ring-[#540b0e]/20 outline-none transition-all text-[clamp(0.875rem,1vw,0.95rem)] text-gray-900"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-gray-400 mb-1.5 text-[clamp(0.7rem,0.9vw,0.8rem)]">Message (Optional)</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 xl:py-4 xl:px-5 rounded-lg border border-gray-200 focus:border-[#540b0e] focus:ring-2 focus:ring-[#540b0e]/20 outline-none transition-all resize-none text-[clamp(0.875rem,1vw,0.95rem)] text-gray-900"
                      placeholder="Tell us about your company, project, or partnership interest"
                    />
                  </div>

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 text-red-700 rounded-lg text-sm font-medium border border-red-200"
                    >
                      Something went wrong. Please try again later.
                    </motion.div>
                  )}

                  <motion.button
                    disabled={status === "submitting"}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full bg-[#540b0e] text-white py-4 xl:py-5 rounded-lg font-bold uppercase tracking-widest mt-6 shadow-lg shadow-red-900/20 text-[clamp(0.75rem,0.9vw,0.875rem)] ${status === "submitting" ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {status === "submitting" ? "Sending..." : "SEND ENQUIRY"}
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