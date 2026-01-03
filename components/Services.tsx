"use client";

import { Zap, Calendar, Bell, ThumbsUp, Flower2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "Instant Lead Response",
      description: "Respond to new leads in under 60 seconds, even when you're on a job. Never lose a customer to slow response times again."
    },
    {
      icon: Calendar,
      title: "Smart Quote Follow-Ups",
      description: "Automatic follow-ups on day 3, 6, and 7 to turn 30-40% close rates into 50-60%. Stop leaving money on the table."
    },
    {
      icon: Bell,
      title: "Job Updates",
      description: "Pre-service reminders, ETAs, and weather delay notifications keep your customers informed and happy."
    },
    {
      icon: ThumbsUp,
      title: "Review Generation",
      description: "Post-job thank-you messages and review requests automatically generate 6-10+ five-star reviews every month."
    },
    {
      icon: Flower2,
      title: "Seasonal Upsells",
      description: "Automated messages to past customers when it's time for seasonal services. Turn one-time customers into repeat business."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            How M<span className="text-primary">ai</span>nline Fixes This
          </h2>
          <p className="text-xl text-dark-charcoal max-w-3xl mx-auto">
            Automated messaging that works 24/7 so you can focus on what you do best
          </p>
        </div>

        {/* Services Grid */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-gold-lighter rounded-xl hover:shadow-lg transition-shadow border border-gold-light"
              >
                <div className="w-14 h-14 bg-gold rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-dark-charcoal leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="text-center mt-16">
          <p className="text-2xl font-semibold text-dark">
            <span className="text-gold">You stay in control.</span>{" "}
            <span className="text-primary">We handle the execution.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
