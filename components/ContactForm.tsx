"use client";

import { motion } from "framer-motion";

export default function ContactForm() {

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
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 tracking-tight">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed">
            Book a free strategy call and see how M<span className="text-primary">ai</span>nline can help you save time and book more jobs
          </p>
        </motion.div>

        {/* GoHighLevel Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="bg-white p-4 sm:p-8 rounded-2xl shadow-2xl border border-neutral-200"
        >
          <div className="w-full" style={{ minHeight: '640px' }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/o71vVQ2fJj8AvLYn7wbw"
              style={{ width: '100%', height: '640px', border: 'none', borderRadius: '8px' }}
              id="inline-o71vVQ2fJj8AvLYn7wbw"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Mainline Website form"
              data-height="640"
              data-layout-iframe-id="inline-o71vVQ2fJj8AvLYn7wbw"
              data-form-id="o71vVQ2fJj8AvLYn7wbw"
              title="Mainline Website form"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js" async />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
