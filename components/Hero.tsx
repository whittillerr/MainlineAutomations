"use client";

import Link from "next/link";
import { MessageSquare, Clock, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold-lighter via-white to-gold-lighter/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 leading-tight">
            Stop Losing Jobs to
            <br />
            <span className="text-primary">Slow Response Times</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-dark-charcoal mb-8 max-w-3xl mx-auto">
            Save 10-15 hours/week and book more jobs with automated messaging that sounds just like you
          </p>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Book a Free Strategy Call
          </Link>

          {/* Value Props */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-bold text-lg text-dark mb-2">60-Second Responses</h3>
              <p className="text-dark-charcoal text-center">
                Respond to leads in under 60 seconds, even when you're on a job
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-bold text-lg text-dark mb-2">Automatic Follow-Ups</h3>
              <p className="text-dark-charcoal text-center">
                Turn 30-40% quote close rates into 50-60% with smart follow-ups
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Star className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-bold text-lg text-dark mb-2">6-10 Reviews/Month</h3>
              <p className="text-dark-charcoal text-center">
                Automated review requests that build your reputation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
