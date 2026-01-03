"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-dark">
              M<span className="text-primary">ai</span>nline
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="#how-it-works"
              className="text-dark-charcoal hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#services"
              className="text-dark-charcoal hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-dark-charcoal hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
