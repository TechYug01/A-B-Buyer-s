"use client";

import { Button } from "@/components/ui/button";
import SEO from "@/lib/seo";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "owner-occupier",
    title: "Owner Occupier",
    description:
      "We work with you to identify, negotiate, and secure your dream home while maximising value and minimising stress. Our personalised approach ensures every purchase aligns with your lifestyle, budget, and long-term plans.",
  },
  {
    id: "residential-investments",
    title: "Residential Investments",
    description:
      "We help you build a high-performing property portfolio, providing insights on capital growth, rental yield, and market timing to achieve long-term wealth creation.",
  },
  {
    id: "commercial-investments",
    title: "Commercial Investments",
    description:
      "Our experts guide you through the commercial property market, from retail and office spaces to industrial opportunities, ensuring sustainable returns and strategic growth.",
  },
  {
    id: "smsf",
    title: "Self-Managed Super Fund (SMSF)",
    description:
      "Leverage your superannuation to purchase property within your SMSF, with tailored advice to ensure compliance, tax efficiency, and strong investment returns.",
  },
  {
    id: "development-opportunities",
    title: "Development Opportunities",
    description:
      "We identify profitable land and development sites, assessing zoning, feasibility, and potential returns to deliver high-value projects with strong growth potential.",
  },
  {
    id: "portfolio-management",
    title: "Portfolio Management",
    description:
      "Ongoing support to optimise and grow your property holdings, including asset reviews, refinancing strategies, and market re-positioning.",
  },
];

export default function OurServicesPage() {
  return (
    <>
      <SEO
        title="Our Services | A&P Buyer's Agency"
        description="Explore A&P Buyer's Agency's full range of property services for owner-occupiers, investors, and developers. From residential to commercial investments, SMSF, and portfolio management."
        url="https://www.apbuyersagency.com.au/services"
        image="https://www.apbuyersagency.com.au/og-services.jpg"
      />

      <section className="bg-light dark:bg-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl font-display font-bold text-dark dark:text-white mb-4">
              Our Services
            </h1>
            <p className="text-muted-foreground dark:text-gray-300 text-lg max-w-3xl mx-auto font-body">
              Whether you&apos;re a first-time buyer, seasoned investor, or
              property developer, our tailored services help you secure the
              right property at the right price.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={service.id}
                className="bg-white dark:bg-zinc-900 border border-border rounded-2xl p-6 shadow-lg flex flex-col justify-between transition-colors duration-300"
              >
                <div>
                  <h2 className="text-xl font-semibold font-display text-dark dark:text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground dark:text-gray-300 font-san mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex gap-3 font-display">
                  <Button asChild variant="default" size="sm">
                    <Link href={`/book?service=${service.id}`}>Book Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
