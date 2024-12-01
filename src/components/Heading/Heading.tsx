"use client";

import { motion } from "framer-motion";

export default function Heading() {
  return (
    <div className="mt-5">
      <motion.h1
        className="font-heading mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore Our Exquisite Pods
      </motion.h1>
      <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">
        Discover the perfect blend of comfort and convenience with Relaxo. Our
        state-of-the-art sleeping pods offer a serene escape, ensuring you feel
        refreshed and ready for your next journey.
      </p>
      <button className=" text-2xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg px-5 py-2.5 text-center me-2 mb-2">
        Get Started
      </button>
    </div>
  );
}
