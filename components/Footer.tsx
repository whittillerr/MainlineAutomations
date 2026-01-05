"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-neutral-800 to-neutral-900 text-neutral-300">
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#fafaf9"
          />
        </svg>
      </div>

      <div className="relative section-container py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block group mb-4">
              <h3 className="text-3xl font-bold text-white">
                M<span className="text-primary group-hover:text-primary-light transition-colors">ai</span>nline
              </h3>
            </Link>
            <p className="text-neutral-400 mb-6 leading-relaxed max-w-md">
              AI-powered customer messaging for service businesses. Save time, book more jobs, and grow your reputation—all on autopilot.
            </p>

            {/* Social proof stat */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-700/50 rounded-lg border border-neutral-600">
              <span className="text-gold font-bold text-lg">50+</span>
              <span className="text-sm text-neutral-400">businesses automated</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#how-it-works"
                  className="text-neutral-400 hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">How It Works</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-400 hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-neutral-400 hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:whit@mainlineautomations.com"
                  className="text-neutral-400 hover:text-primary transition-colors inline-flex items-center group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-105 transition-all duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="hover:underline">Email Us</span>
                </a>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-neutral-400 hover:text-gold transition-colors inline-flex items-center group font-medium"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:scale-105 transition-all duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="hover:underline">Book a Call</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} Mainline Automations. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-neutral-500 hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
