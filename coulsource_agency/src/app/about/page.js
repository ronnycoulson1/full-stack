"use client";

import { motion } from "framer-motion";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="about-page bg-[#0A0F29] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h1 
          className="text-center text-6xl font-extrabold tracking-wide mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xl leading-relaxed">
              <span className="text-blue-300 text-2xl font-bold">How It Started:</span>  
              Coulsource began as a college project when I started learning about  
              SEO, website performance, and automation.  
              What began as a personal learning journey turned into person project to deploy in real life.
            </p>

            <p className="text-xl leading-relaxed">
              <span className="text-blue-300 text-2xl font-bold">What We Do:</span>  
              We specialize in custom software solutions, web development, and automation
              to help businesses grow and scale efficiently.
            </p>

           
          </motion.div>
        </div>
      </div>
    </div>
  );
}
