"use client"; 
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import AnimatedIcon to prevent SSR issues
const AnimatedIcon = dynamic(() => import("@/components/AnimatedIcon"), { ssr: false });

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-brand-navy to-gray-900 text-white">
      {/* Header Section */}
      <header className="py-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide">Our Services</h1>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We help businesses <span className="text-blue-400">take the first step toward digital success.</span>  
          Our goal is to provide <span className="text-blue-300">fully customized, high-performance web solutions</span>  
          that enhance your brand, attract customers, and drive business growth.
        </p>
      </header>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-16">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center">
          <AnimatedIcon animationPath="/animations/web-development.json" />
          <h3 className="text-2xl font-semibold mt-4 text-blue-400 uppercase tracking-wider">
            Full Stack Web Development
          </h3>
          <p className="text-gray-300 mt-4 text-center leading-relaxed">
            We design and develop <span className="text-blue-300 font-medium">modern, responsive, and scalable websites</span>  
            for businesses. Whether it's an  
            <span className="text-blue-400"> e-commerce site, a business website, or a custom web app</span>,  
            we build fast, secure, and optimized solutions.
          </p>
        </div>
      </section>
    </div>
  );
}
