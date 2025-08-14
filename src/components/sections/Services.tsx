"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Owner Occupier",
    description:
      "Helping you find and secure the perfect home that fits your lifestyle, budget, and long-term goals.",
    id: "owner-occupier",
  },
  {
    title: "Residential Investments",
    description:
      "Expert guidance to build a high-performing residential property portfolio for long-term growth.",
    id: "residential-investments",
  },
  {
    title: "Commercial Investments",
    description:
      "Unlock opportunities in the commercial property market with our tailored acquisition strategies.",
    id: "commercial-investments",
  },
  {
    title: "Self-Managed Super Fund (SMSF)",
    description:
      "Leverage your superannuation to invest in property and grow your retirement wealth securely.",
    id: "smsf",
  },
  {
    title: "Development Opportunities",
    description:
      "Identify and secure profitable land and development sites with strong capital growth potential.",
    id: "development-opportunities",
  },
  {
    title: "Portfolio Management",
    description:
      "Ongoing support to optimise, expand, and maintain the value of your property investments.",
    id: "portfolio-management",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-display font-bold text-dark dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-muted dark:text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Comprehensive property solutions tailored to owner-occupiers,
            investors, and developers.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 border border-border rounded-2xl p-6 shadow-lg flex flex-col justify-between transition-colors duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold font-display text-dark dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-6 font-san text-pretty">
                  {service.description}
                </p>
              </div>

              <div className="flex gap-3 font-display">
                <Button asChild variant="default" size="sm">
                  <Link href={`/services#${service.id}`}>Learn More</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/book?service=${service.id}`}>Book Me</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
