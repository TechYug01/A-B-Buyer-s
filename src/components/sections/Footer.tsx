"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-light dark:bg-dark transition-colors duration-300 py-12 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src="/logo-dark.png"
                alt="A&P Buyers Logo"
                className="h-12 w-auto dark:hidden"
              />
              <img
                src="/logo-light.png"
                alt="A&P Buyers Logo"
                className="h-12 w-auto hidden dark:block"
              />
            </Link>
            <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed font-body text-pretty">
              Australia's trusted property buying experts, delivering tailored
              solutions for owner-occupiers, investors, and developers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold text-dark dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground dark:text-gray-300 hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground dark:text-gray-300 hover:text-primary"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-muted-foreground dark:text-gray-300 hover:text-primary"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/find-us"
                  className="text-muted-foreground dark:text-gray-300 hover:text-primary"
                >
                  Find Us
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-muted-foreground dark:text-gray-300 hover:text-primary"
                >
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold text-dark dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground dark:text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} />{" "}
                <Link href={"tel:+61400000000"}>+61 400 000 000</Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />{" "}
                <Link href={"mailto:info@apbuyers.com.au"}>
                  info@apbuyers.com.au
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-display font-semibold text-dark dark:text-white mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <Link
                href="#"
                target="_blank"
                className="p-2 rounded-full bg-muted/20 hover:bg-primary/70 text-dark dark:text-white dark:bg-zinc-800 transition"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="p-2 rounded-full bg-muted/20 hover:bg-primary/70 text-dark dark:text-white dark:bg-zinc-800 transition"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="p-2 rounded-full bg-muted/20 hover:bg-primary/70 text-dark dark:text-white dark:bg-zinc-800 transition"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-border dark:border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground dark:text-gray-400"
        >
          <p>© {new Date().getFullYear()} A&P Buyers. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition">
              Terms & Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
