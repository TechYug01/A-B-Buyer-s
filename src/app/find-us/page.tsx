"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contacts, socialLinks } from "@/lib/contactData";
import SEO from "@/lib/seo";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FindUsPage() {
  return (
    <>
      <SEO
        title="Find Us - A&P Buyer's Agency"
        description="Contact A&P Buyer's Agency. Let's talk property! Use our form or connect with us on social media."
        url="https://www.apbuyersagency.com.au/find-us"
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
              Find Us
            </h1>
            <p className="text-muted-foreground dark:text-gray-300 text-lg max-w-3xl mx-auto font-body">
              Let&apos;s Talk Property! Reach out to us via the form below or
              connect through our social channels.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <Image
                src="/contact.svg"
                alt="Contact A&P Buyers"
                width={500}
                height={400}
                className="w-full max-w-md h-auto"
                priority
              />
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-zinc-900 border border-border rounded-2xl shadow-lg p-8 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted! (Connect backend to make it work)");
              }}
            >
              <div>
                <label className="block text-sm font-medium font-display text-dark dark:text-white mb-2">
                  Name
                </label>
                <Input
                  placeholder="Your full name"
                  className="focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium font-display text-dark dark:text-white mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium font-display text-dark dark:text-white mb-2">
                  Message
                </label>
                <Textarea
                  rows={4}
                  placeholder="Tell us about query..."
                  className="focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <Button
                type="submit"
                className="w-full font-display cursor-pointer"
              >
                <Send size={18} className="mr-2" /> Send Message
              </Button>
            </motion.form>
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-14 flex flex-col items-center space-y-6 text-center"
          >
            <h2 className="text-2xl font-display font-bold text-dark dark:text-white">
              Connect With Us
            </h2>
            <p className="text-muted-foreground dark:text-gray-300 font-body max-w-lg">
              We&apos;re active on all major platforms. Follow us for updates,
              tips, and off-market opportunities.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href={socialLinks[0].url} target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer"
                >
                  <Facebook />
                </Button>
              </Link>
              <Link href={socialLinks[1].url} target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer"
                >
                  <Instagram />
                </Button>
              </Link>
              <Link href={socialLinks[2].url} target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer"
                >
                  <Linkedin />
                </Button>
              </Link>
              <Link href={`https://wa.me/${contacts[0].value}`} target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer"
                >
                  <MessageCircle />
                </Button>
              </Link>
              <Link href={`tel:+${contacts[0].value}`} target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer"
                >
                  <Phone />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
