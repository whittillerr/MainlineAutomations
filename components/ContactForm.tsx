"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, User, Mail, Phone, Briefcase, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
  consent: boolean;
};

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    mode: "onChange",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 via-gold-lighter/20 to-neutral-50 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative section-container max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 tracking-tight">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed">
            Book a free strategy call and see how M<span className="text-primary">ai</span>nline can help you save time and book more jobs
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl border border-neutral-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-neutral-800 font-semibold mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    id="name"
                    className={`input-field pl-12 ${
                      errors.name
                        ? "border-primary ring-1 ring-primary"
                        : "border-neutral-300 focus:border-primary"
                    }`}
                    placeholder="Your name"
                  />
                </div>
                {errors.name && (
                  <p className="text-primary text-sm mt-2 flex items-center gap-1">
                    <span className="text-lg">⚠</span> {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-neutral-800 font-semibold mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    id="email"
                    className={`input-field pl-12 ${
                      errors.email
                        ? "border-primary ring-1 ring-primary"
                        : "border-neutral-300 focus:border-primary"
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-primary text-sm mt-2 flex items-center gap-1">
                    <span className="text-lg">⚠</span> {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-neutral-800 font-semibold mb-2">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="input-field pl-12"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Business Type */}
              <div>
                <label htmlFor="businessType" className="block text-neutral-800 font-semibold mb-2">
                  Business Type
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    {...register("businessType")}
                    type="text"
                    id="businessType"
                    className="input-field pl-12"
                    placeholder="e.g., Lawn Care"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-neutral-800 font-semibold mb-2">
                Message <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-neutral-400" />
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  rows={5}
                  className={`input-field pl-12 resize-none ${
                    errors.message
                      ? "border-primary ring-1 ring-primary"
                      : "border-neutral-300 focus:border-primary"
                  }`}
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>
              {errors.message && (
                <p className="text-primary text-sm mt-2 flex items-center gap-1">
                  <span className="text-lg">⚠</span> {errors.message.message}
                </p>
              )}
            </div>

            {/* Consent Checkbox */}
            <div className="mb-8">
              <label className="flex items-start cursor-pointer group">
                <input
                  {...register("consent", { required: "Please accept to continue" })}
                  type="checkbox"
                  className="mt-1 mr-3 w-5 h-5 text-primary border-neutral-300 rounded focus:ring-primary cursor-pointer"
                />
                <span className="text-sm text-neutral-600 group-hover:text-neutral-800 transition-colors">
                  I agree to be contacted about Mainline Automations services <span className="text-primary">*</span>
                </span>
              </label>
              {errors.consent && (
                <p className="text-primary text-sm mt-2 flex items-center gap-1">
                  <span className="text-lg">⚠</span> {errors.consent.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-5 px-8 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg shadow-xl hover:shadow-2xl"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Sending...
                </>
              ) : submitStatus === "success" ? (
                <>
                  <CheckCircle className="w-6 h-6" />
                  Sent Successfully!
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  Book Your Free Call
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-accent-green/10 text-accent-green rounded-lg border border-accent-green/20 flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Thank you! We'll be in touch within 24 hours.</span>
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-primary/10 text-primary rounded-lg border border-primary/20"
              >
                Something went wrong. Please email us directly at{" "}
                <a href="mailto:whit@mainlineautomations.com" className="underline font-semibold">
                  whit@mainlineautomations.com
                </a>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
