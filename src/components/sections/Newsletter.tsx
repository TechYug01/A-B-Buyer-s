"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-20 bg-primary/5 dark:bg-accent/10 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold text-dark dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-muted dark:text-muted-foreground text-lg font-body mb-8">
            Get updates, insights & exclusive opportunities straight to your
            inbox.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            id="name"
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
            required
            className="px-4 py-3 rounded-lg border border-border bg-white dark:bg-zinc-900 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
          />
          <input
            type="email"
            placeholder="Your Email"
            id="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-lg border border-border bg-white dark:bg-zinc-900 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
          />
          <Button type="submit" size="lg" className="font-display">
            Subscribe
          </Button>
        </motion.form>

        <p className="text-xs text-muted-foreground dark:text-gray-400 mt-4 font-san">
          We respect your privacy. No spam ever.
        </p>
      </div>
    </section>
  );
}
