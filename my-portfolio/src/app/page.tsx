'use client';

import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Samples from "../components/Samples";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { motion, Variants } from "framer-motion";

// ✅ Properly typed fade-in animation using Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(0deg,_rgba(61,61,61,1)_0%,_rgba(0,0,0,1)_100%)] text-white">
      {/* ✅ Animate Hero section separately */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero id="hero" />
      </motion.div>

      {/* ✅ Animate each section with Framer Motion */}
      <main className="relative z-10 max-w-5xl mx-auto text-white rounded-2xl shadow-xl px-6 md:px-12 py-16 space-y-24"
        style={{
          background:
            'linear-gradient(0deg, rgba(2, 0, 36, 1) 0%, rgba(1, 1, 61, 1) 18%, rgba(16, 16, 59, 1) 49%, rgba(6, 26, 61, 1) 80%, rgba(0, 22, 64, 1) 100%)',
        }}
      >
        {[Clients, Samples, Testimonials, Contact].map((Component, index) => (
          <motion.section
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <Component id={Component.name.toLowerCase()} />
          </motion.section>
        ))}
      </main>
    </div>
  );
}
