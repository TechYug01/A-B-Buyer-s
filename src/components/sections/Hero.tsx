"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-60px)] flex items-center justify-center bg-light dark:bg-dark">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/homepage.jpg)" }}
      />

      {/* Overlay for theme balance */}
      <div className="absolute inset-0 -z-10 bg-[#0a0a0a]/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          {/* Slogan */}
          <p className="text-lg sm:text-xl font-san font-semibold text-[#ede7dd] mb-4">
            Shaping Futures Through Smarter Buying
          </p>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-[#ede7dd] mb-6">
            Australia's Trusted Property Buying Experts
          </h1>

          {/* Description */}
          <p className="max-w-xl mx-auto text-base sm:text-lg font-body text-gray-300 mb-8">
            We help owner-occupiers, investors, and developers acquire
            high-performing properties across all 6 Australian states.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button asChild size="lg" className="font-san">
              <Link href="/book">Book Your Strategy Session Now</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
