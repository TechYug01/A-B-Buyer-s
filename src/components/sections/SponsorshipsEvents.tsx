"use client";

import { Button } from "@/components/ui/button";
import { events } from "@/lib/eventsData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SponsorshipsEventsOverview() {
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
            Sponsorships & Events
          </h2>
          <p className="text-muted dark:text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Supporting local initiatives and hosting events that connect people,
            ideas, and opportunities within the property community.
          </p>
        </motion.div>

        {/* Intro Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-zinc-900 border border-border rounded-2xl p-6 shadow-lg transition-colors duration-300 mb-14"
        >
          <p className="text-muted-foreground dark:text-gray-300 font-body mb-6 text-pretty">
            From sponsoring community programs to hosting property networking
            events, we actively contribute to initiatives that inspire growth
            and collaboration. Our events bring together investors, homebuyers,
            and industry experts to share knowledge and build valuable
            connections.
          </p>
          <div className="flex gap-3 font-display">
            <Button asChild variant="default" size="sm">
              <Link href="/events">Learn More</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/events#partner-with-us">Get Involved</Link>
            </Button>
          </div>
        </motion.div>

        {/* Featured Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-2xl font-display font-semibold text-dark dark:text-white mb-8 text-center">
            Featured Upcoming Events & Collaborations
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-zinc-900 border border-border rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-lg font-display font-semibold text-dark dark:text-white mb-2">
                    {event.title}
                  </h4>
                  <span className="text-sm text-primary dark:text-accent mb-3 font-body">
                    {event.date}
                  </span>
                  <p className="text-muted-foreground dark:text-gray-300 font-body flex-grow text-pretty">
                    {event.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-4 font-display"
                  >
                    <Link href={event.link}>View Details</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
