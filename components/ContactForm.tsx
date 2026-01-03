"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
  consent: boolean;
};

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold-lighter to-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-dark-charcoal">
            Book a free strategy call and see how M<span className="text-primary">ai</span>nline can help you save time and book more jobs
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-dark font-medium mb-2">
                Name *
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-primary text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-dark font-medium mb-2">
                Email *
              </label>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-primary text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-dark font-medium mb-2">
                Phone
              </label>
              <input
                {...register("phone")}
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Business Type */}
            <div>
              <label htmlFor="businessType" className="block text-dark font-medium mb-2">
                Business Type
              </label>
              <input
                {...register("businessType")}
                type="text"
                id="businessType"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                placeholder="e.g., Lawn Care"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-dark font-medium mb-2">
              Message *
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
              placeholder="Tell us about your business and how we can help..."
            />
            {errors.message && (
              <p className="text-primary text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="mb-6">
            <label className="flex items-start">
              <input
                {...register("consent", { required: "Please accept to continue" })}
                type="checkbox"
                className="mt-1 mr-3 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="text-sm text-dark-charcoal">
                I agree to be contacted about Mainline Automations services *
              </span>
            </label>
            {errors.consent && (
              <p className="text-primary text-sm mt-1">{errors.consent.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-5 h-5" />
                Book Your Free Call
              </>
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg">
              Thank you! We'll be in touch within 24 hours.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-lg">
              Something went wrong. Please email us directly at whit@mainlineautomations.com
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
