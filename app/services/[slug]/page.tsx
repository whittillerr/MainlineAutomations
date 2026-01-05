"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { services, getServiceBySlug } from "@/lib/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, MessageSquare } from "lucide-react";
import { notFound } from "next/navigation";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  // Get related services (exclude current)
  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-neutral-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 via-gold-lighter/30 to-neutral-50">
          <div className="absolute inset-0 dot-pattern opacity-40" />

          <div className="relative section-container max-w-5xl">
            {/* Back Link */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300 ease-out" />
              <span className="text-sm font-medium">Back to Services</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}
              >
                <Icon className="w-11 h-11 text-primary stroke-[2]" />
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 tracking-tight">
                  {service.title}
                </h1>
                <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {service.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-neutral-200 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="section-container max-w-5xl space-y-16">
            {/* Long Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="text-lg text-neutral-700 leading-relaxed">
                {service.longDescription}
              </p>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-8">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.howItWorks.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md border border-neutral-200"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-8 sm:p-12 rounded-2xl"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-8">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Example Conversation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                See It In Action
              </h2>
              <p className="text-neutral-600 mb-8">
                {service.example.scenario}
              </p>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-neutral-200 max-w-2xl">
                <div className="space-y-4">
                  {service.example.conversation.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.role === "ai" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] ${
                          message.role === "ai"
                            ? "bg-primary text-white"
                            : "bg-neutral-100 text-neutral-900"
                        } px-4 py-3 rounded-2xl ${
                          message.role === "ai"
                            ? "rounded-tr-sm"
                            : "rounded-tl-sm"
                        }`}
                      >
                        <p className="text-sm sm:text-base leading-relaxed">
                          {message.message}
                        </p>
                        {message.time && (
                          <p
                            className={`text-xs mt-2 ${
                              message.role === "ai"
                                ? "text-white/70"
                                : "text-neutral-500"
                            }`}
                          >
                            {message.time}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="bg-gradient-to-br from-gold/10 to-primary/10 p-8 sm:p-12 rounded-2xl text-center border-2 border-gold/20"
            >
              <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Book a free strategy call and see how this service can transform your business
              </p>
              <Link
                href="/#contact"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-lg"
              >
                Book Your Free Call
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

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-8">
                  Other Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedServices.map((relatedService) => {
                    const RelatedIcon = relatedService.icon;
                    return (
                      <Link
                        key={relatedService.slug}
                        href={`/services/${relatedService.slug}`}
                        className="block group"
                      >
                        <div className="card-elevated p-6 h-full hover:border hover:border-primary/20 transition-all duration-300">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${relatedService.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-300`}
                            style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                          >
                            <RelatedIcon className="w-6 h-6 text-primary stroke-[2]" />
                          </div>
                          <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                            {relatedService.title}
                          </h3>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {relatedService.description.slice(0, 100)}...
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
