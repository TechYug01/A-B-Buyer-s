"use client";

import { testimonials } from "@/lib/testimonialsData";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const startAutoplay = useCallback(() => {
    if (!emblaApi) return;

    intervalRef.current = setInterval(() => {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0);
      } else {
        emblaApi.scrollNext();
      }
    }, 4000);
  }, [emblaApi]);

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!isHovered) startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, isHovered]);

  return (
    <section className="py-20 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-display font-bold text-dark dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted dark:text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Real stories from people we&apos;ve helped along the way.
          </p>

          <a
            href="/testimonials"
            className="inline-block mt-4 text-primary dark:text-accent font-semibold hover:underline font-display"
          >
            View All Testimonials →
          </a>
        </motion.div>

        <div
          className="overflow-hidden py-5 px-4"
          ref={emblaRef}
          onMouseEnter={() => {
            setIsHovered(true);
            stopAutoplay();
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <div className="flex gap-6 px-4">
            {testimonials.map((testimonial, index) => (
              <div
                className="min-w-115 max-sm:min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                key={index}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={clsx(
                    "bg-white dark:bg-zinc-900 border border-border p-6 rounded-2xl shadow-lg text-left h-full flex flex-col justify-between",
                    "transition-colors duration-300 cursor-pointer"
                  )}
                >
                  <div className="mb-4">
                    <p className="text-base font-body text-muted-foreground dark:text-zinc-300 text-justify">
                      “{testimonial.text}”
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm font-semibold text-primary dark:text-accent font-san">
                      {testimonial.name}
                    </div>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
