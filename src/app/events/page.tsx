"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contacts, socialLinks } from "@/lib/contactData";
import { events } from "@/lib/eventsData";
import SEO from "@/lib/seo";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function EventsCommunityPage() {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <SEO
        title="Events & Community - A&P Buyer's Agency"
        description="Our community involvement, sponsorships, and upcoming events. Partner with us to make a difference."
        url="https://www.apbuyersagency.com.au/events-community"
      />

      {/* Hero Section */}
      <section className="py-20 bg-light dark:bg-dark transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-display font-bold text-dark dark:text-white mb-4"
          >
            Events & Community
          </motion.h1>
          <p className="text-lg text-muted-foreground dark:text-gray-300 font-body max-w-2xl mx-auto">
            From sponsoring local teams to hosting property workshops,
            we&apos;re committed to strengthening our community and creating
            lasting impact.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="#partner-with-us">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display font-bold text-dark dark:text-white mb-10 text-center"
          >
            Featured Sponsorships & Events
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-zinc-900 border border-border rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold font-display text-dark dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {event.date}
                  </p>
                  <p className="text-muted-foreground dark:text-gray-300 font-body mb-6 flex-grow">
                    {event.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-auto"
                  >
                    <Link href={event.link}>Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us Form */}
      <section
        id="partner-with-us"
        className="py-20 bg-light dark:bg-dark transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-display font-bold text-dark dark:text-white mb-3">
              Partner With Us
            </h2>
            <p className="text-muted-foreground dark:text-gray-300 text-lg max-w-2xl mx-auto font-body">
              Brokers, solicitors, and event coordinators — collaborate with us
              to create value in the property market.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 border border-border rounded-2xl shadow-lg p-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-dark dark:text-white">
                  Name
                </label>
                <Input
                  placeholder="Your full name"
                  className="focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-dark dark:text-white">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-dark dark:text-white">
                  Phone
                </label>
                <Input
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-dark dark:text-white">
                  Organisation
                </label>
                <Input
                  placeholder="Company or group name"
                  className="focus:ring-2 focus:ring-primary transition"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-dark dark:text-white">
                Message
              </label>
              <Textarea
                rows={4}
                placeholder="Tell us about your partnership idea..."
                className="focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto font-display cursor-pointer"
              >
                Submit Proposal
              </Button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-dark dark:text-white mb-10 text-center"
          >
            Connect With Us
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              {
                name: "Facebook",
                icon: Facebook,
                desc: "Buyer tips, reels, event updates",
                url: socialLinks[0].url,
              },
              {
                name: "LinkedIn",
                icon: Linkedin,
                desc: "Service insights, case studies",
                url: socialLinks[2].url,
              },
              {
                name: "Instagram",
                icon: Instagram,
                desc: "Reels, events, client moments",
                url: socialLinks[1].url,
              },
              {
                name: "WhatsApp",
                icon: MessageCircle,
                desc: "Off-market alerts",
                url: `https://wa.me/${contacts[0].value}`,
              },
            ].map((sm, idx) => (
              <Link
                key={idx}
                href={sm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <sm.icon className="w-10 h-10 mx-auto text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold font-display text-dark dark:text-white">
                  {sm.name}
                </h3>
                <p className="text-sm text-muted-foreground dark:text-gray-300">
                  {sm.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
