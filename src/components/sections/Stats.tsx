"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useCounter(target: number, start: boolean, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, start, duration]);

  return count;
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const monthly = useCounter(450, inView);
  const yearly = useCounter(3000, inView);
  const days = useCounter(14, inView);

  return (
    <section ref={ref} className="bg-white dark:bg-zinc-900 py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-display font-bold text-gray-900 dark:text-white mb-14"
        >
          Performance Highlights
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-gray-700 dark:text-gray-200">
          {/* Monthly Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <ArrowUpRight
              size={40}
              className="text-primary dark:text-accent mb-4"
            />
            <p className="text-5xl font-bold text-primary dark:text-accent tabular-nums">
              {monthly}+
            </p>
            <p className="mt-2 text-base font-medium">Monthly Transactions</p>
          </motion.div>

          {/* Yearly Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <CalendarDays
              size={40}
              className="text-primary dark:text-accent mb-4"
            />
            <p className="text-5xl font-bold text-primary dark:text-accent tabular-nums">
              {yearly}+
            </p>
            <p className="mt-2 text-base font-medium">Yearly Transactions</p>
          </motion.div>

          {/* Fastest Deal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <Clock size={40} className="text-primary dark:text-accent mb-4" />
            <p className="text-5xl font-bold text-primary dark:text-accent tabular-nums">
              {days} Days
            </p>
            <p className="mt-2 text-base font-medium">
              Fastest Deal (Brief to Purchase)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
