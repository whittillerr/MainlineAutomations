"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "@/lib/services";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0, 0, 0.2, 1],
      },
    },
  };

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-100 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 line-pattern opacity-30" />

      <div className="relative section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 tracking-tight">
            How M<span className="text-primary">ai</span>nline Fixes This
          </h2>
          <p className="text-xl sm:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Automated messaging that works 24/7 so you can focus on what you do best
          </p>
        </motion.div>

        {/* Services Grid - Asymmetric Layout */}
        <motion.div
          id="services"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.slug} variants={itemVariants}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block group h-full"
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.2 },
                    }}
                    className={`
                      card-elevated p-8 h-full
                      ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
                      ${index === 3 ? "lg:col-span-2" : ""}
                      hover:border hover:border-primary/20
                      transition-all duration-300 cursor-pointer
                    `}
                  >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-9 h-9 text-primary stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
            <p className="text-2xl sm:text-3xl font-semibold">
              <span className="text-gold">You stay in control.</span>{" "}
              <span className="text-primary">We handle the execution.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
