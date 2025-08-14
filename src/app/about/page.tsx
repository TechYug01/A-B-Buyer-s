"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <section className="bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-display font-bold text-dark dark:text-white mb-6">
            About Us
          </h1>
          <p className="text-lg text-muted-foreground dark:text-gray-300 font-body max-w-2xl mx-auto">
            Learn more about our vision, mission, and journey in redefining
            property acquisition across Australia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/about.svg"
              alt="About A&P Buyers"
              width={600}
              height={400}
              className="w-full max-w-lg mx-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl font-display font-bold text-dark dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground dark:text-gray-300 font-san text-lg">
                To be Australia&apos;s #1 trusted partner in strategic property
                acquisition while empowering clients to build wealth and
                financial freedom through every purchase.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-dark dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground dark:text-gray-300 font-san text-lg">
                Deliver exceptional property acquisition strategies that empower
                long-term wealth building through market insight, exclusive
                access, and personalised support.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold text-dark dark:text-white mb-8 text-center">
            Core Values
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-body text-lg">
            {[
              "Excellence",
              "Integrity",
              "Strategic Thinking",
              "Client Empowerment",
              "Exclusive Access",
              "Legacy Building",
            ].map((value, idx) => (
              <li
                key={idx}
                className="bg-white dark:bg-zinc-900 border border-border rounded-xl px-5 py-6 shadow-md text-center font-semibold text-dark dark:text-white hover:shadow-lg transition"
              >
                {value}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold text-dark dark:text-white mb-4 text-center">
            Our Story
          </h2>
          {/* <p className="text-muted-foreground dark:text-gray-300 font-body text-lg max-w-5xl mx-auto mb-8">
            Born from a passion for property and a vision to reshape the way
            Australians buy real estate, A&P Buyer&apos;s Agency was founded to
            give clients the edge in an increasingly competitive market. With
            over 25+ years of combined experience, our team has successfully
            guided owner-occupiers, investors, and developers through
            transactions worth millions.
          </p> */}

          {/* Timeline */}
          {/* <div className="border-l-2 border-primary pl-6 space-y-8 max-w-4xl mx-auto">
            {[
              {
                year: "2010 - The Beginning",
                text: "Our founders began their journey in property investment and development, building networks across Australia.",
              },
              {
                year: "2015 - Expanding Horizons",
                text: "Partnered with industry-leading agents, brokers, and solicitors to offer a complete acquisition service.",
              },
              {
                year: "2023 - A&P Buyer’s Agency Established",
                text: "Officially launched with a mission to empower every client’s property journey through expertise, ethics, and exclusive access.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h4 className="text-xl font-semibold text-dark dark:text-white mb-1">
                  {item.year}
                </h4>
                <p className="text-muted-foreground dark:text-gray-300 font-body">
                  {item.text}
                </p>
              </div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
