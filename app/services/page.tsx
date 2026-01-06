"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function ServicesPage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-neutral-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 via-gold-lighter/30 to-neutral-50">
          <div className="absolute inset-0 dot-pattern opacity-40" />

          <div className="relative section-container max-w-4xl text-center">
            {/* Back Link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300 ease-out" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
                Our Services
              </h1>
              <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                Comprehensive AI-powered automation solutions designed to save you time, book more jobs, and grow your business on autopilot
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                        y: -4,
                        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                      }}
                      className={`
                        card-elevated p-8 h-full
                        hover:border hover:border-primary/20
                        transition-all duration-300 cursor-pointer
                        ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
                        ${index === 3 ? "lg:col-span-2" : ""}
                      `}
                    >
                      {/* Icon with gradient background */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                      >
                        <Icon className="w-9 h-9 text-primary stroke-[2]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-neutral-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Learn more indicator */}
                      <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-semibold">
                          Learn more
                        </span>
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 ease-out"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-100 to-neutral-50">
          <div className="section-container max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Book a free strategy call and see how M<span className="text-primary">ai</span>nline can help you save time and book more jobs
              </p>
              <Link
                href="/#contact"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-lg"
              >
                Book a Free Call
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
