"use client";

import Link from "next/link";
import { ArrowRight, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dot-pattern" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E63946 1px, transparent 1px),
            linear-gradient(to bottom, #E63946 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative Concentric Rings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div
          className="absolute w-[800px] h-[800px] rounded-full border border-primary/10"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute w-[1000px] h-[1000px] rounded-full border border-gold/10"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gold Orb - Top Left */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #F4A261 0%, transparent 70%)',
            top: '-15%',
            left: '-10%',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Primary Red Orb - Bottom Right */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #E63946 0%, transparent 70%)',
            bottom: '-10%',
            right: '-10%',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Accent Blue Orb - Center Right */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #457B9D 0%, transparent 70%)',
            top: '35%',
            right: '5%',
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Purple Orb - Top Center */}
        <motion.div
          className="absolute w-[550px] h-[550px] rounded-full opacity-[0.18] blur-3xl"
          style={{
            background: 'radial-gradient(circle, #9333EA 0%, transparent 70%)',
            top: '-5%',
            left: '40%',
          }}
          animate={{
            x: [0, -25, 0],
            y: [0, 40, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 27,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Geometric Accents - Floating Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        {/* Small circle - top right */}
        <motion.div
          className="absolute w-32 h-32 border-2 border-primary/20 rounded-full"
          style={{ top: '10%', right: '15%' }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Medium circle - bottom left */}
        <motion.div
          className="absolute w-48 h-48 border-2 border-gold/20 rounded-full"
          style={{ bottom: '15%', left: '10%' }}
          animate={{
            y: [0, 25, 0],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Tiny circle - center right */}
        <motion.div
          className="absolute w-20 h-20 border-2 border-blue-400/20 rounded-full"
          style={{ top: '60%', right: '25%' }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6"
            >
              <Zap className="w-4 h-4" />
              AI-Powered Customer Messaging
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 tracking-tighter leading-tight">
              Stop Losing Jobs to{" "}
              <span className="gradient-text">Slow Response Times</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-neutral-600 mb-8 leading-relaxed">
              Save 10-15 hours/week and book more jobs with automated messaging that sounds just like you
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#contact"
                className="btn-secondary group inline-flex items-center justify-center gap-2 text-lg"
              >
                Book a Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#how-it-works"
                className="btn-outline inline-flex items-center justify-center gap-2 text-lg"
              >
                See How It Works
              </Link>
            </div>

            {/* Social Proof / Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-neutral-600">
                  <strong className="text-neutral-800 font-semibold">50+</strong> businesses automated
                </span>
              </div>
              <div className="hidden sm:block h-8 w-px bg-neutral-300" />
              <div className="text-neutral-600">
                <strong className="text-neutral-800 font-semibold">60-second</strong> response times
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Abstract SVG Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <AutomationGraphic />
          </motion.div>
        </div>

        {/* Prominent Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="text-2xl sm:text-3xl font-semibold">
            <span className="text-gold">You stay in control.</span>{" "}
            <span className="text-primary">We handle the execution.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Abstract SVG Graphic Component
function AutomationGraphic() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connecting Lines - Hub and Spoke Pattern */}
      <motion.g stroke="#E63946" strokeWidth="2" fill="none" opacity="0.3">
        {/* AI to Lead (left) */}
        <motion.line
          x1="300" y1="300" x2="150" y2="300"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        />

        {/* AI to Job (right) */}
        <motion.line
          x1="300" y1="300" x2="450" y2="300"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        />

        {/* AI to Quote (top) */}
        <motion.line
          x1="300" y1="300" x2="300" y2="150"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
        />

        {/* AI to Review (bottom) */}
        <motion.line
          x1="300" y1="300" x2="300" y2="450"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
        />
      </motion.g>

      {/* Nodes (animated) */}
      {/* Central Hub */}
      <motion.circle
        cx="300" cy="300" r="40"
        fill="#E63946"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      />
      <circle cx="300" cy="300" r="30" fill="white" />
      <text x="300" y="310" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#E63946">AI</text>

      {/* Outer Nodes */}
      {[
        { cx: 150, cy: 300, label: "Lead", delay: 0.6 },
        { cx: 450, cy: 300, label: "Job", delay: 0.7 },
        { cx: 300, cy: 150, label: "Quote", delay: 0.8 },
        { cx: 300, cy: 450, label: "Review", delay: 0.9 },
      ].map((node, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="30"
            fill="#F4A261"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: node.delay, type: "spring" }}
          />
          <circle cx={node.cx} cy={node.cy} r="22" fill="white" />
          <text
            x={node.cx}
            y={node.cy + 5}
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="#57534E"
          >
            {node.label}
          </text>
        </motion.g>
      ))}

      {/* Pulse Rings (subtle animation) */}
      <motion.circle
        cx="300" cy="300" r="50"
        fill="none"
        stroke="#E63946"
        strokeWidth="1"
        opacity="0.2"
        animate={{
          scale: [1, 1.5],
          opacity: [0.2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </svg>
  );
}
