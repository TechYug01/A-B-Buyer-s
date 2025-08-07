"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Globe,
  Handshake,
  LineChart,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Nationwide Service",
    description:
      "We operate in all 6 Australian states to help you find opportunities everywhere.",
    icon: <Globe className="w-6 h-6 text-primary" />,
  },
  {
    title: "25+ Years Experience",
    description:
      "Decades of combined experience across residential, commercial, and development projects.",
    icon: <Briefcase className="w-6 h-6 text-primary" />,
  },
  {
    title: "Multi-Million Dollar Deals",
    description:
      "We've handled high-value transactions and guided clients through strategic investments.",
    icon: <Building2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Deep Market Insight",
    description:
      "We provide comprehensive market analysis to guide every decision you make.",
    icon: <LineChart className="w-6 h-6 text-primary" />,
  },
  {
    title: "National Network",
    description:
      "100+ agents, brokers, and solicitors on-call to support our clients nationwide.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Due Diligence Experts",
    description:
      "We research every property thoroughly and negotiate with precision.",
    icon: <SearchCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Ethical & Transparent",
    description:
      "Authenticity, transparency, and client-first service is our promise.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Client Empowerment",
    description:
      "We educate and empower you to make smart decisions — every step of the way.",
    icon: <Handshake className="w-6 h-6 text-primary" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-24 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-dark dark:text-white">
            Why Choose A&P Buyers
          </h2>
          <p className="mt-4 text-base sm:text-lg font-san text-muted-foreground max-w-2xl mx-auto">
            We bring clarity, strategy, and a nationwide network to every
            property journey.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-muted rounded-xl p-6 border dark:border-border shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2 font-display">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-san leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
