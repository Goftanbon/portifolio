import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const Contact = ({ contact }) => (
  <section
    id="contact"
    className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28 border-t border-gray-200 dark:border-white/10 text-center"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-display text-4xl md:text-5xl font-semibold mb-5 leading-tight text-gray-900 dark:text-[#F3F1EC]">
        {contact.title}
      </h2>
      <p className="text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-9 font-light">
        {contact.subtitle}
      </p>
      <div className="flex gap-3.5 justify-center flex-wrap">
        <a
          href={contact.ctaPrimary.href}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm bg-accent text-ink hover:bg-accent-muted transition-colors"
        >
          <Mail className="w-4 h-4" />
          {contact.ctaPrimary.text}
        </a>
        <a
          href={contact.ctaSecondary.href}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm border border-gray-300 dark:border-white/25 text-gray-900 dark:text-[#F3F1EC] hover:border-gray-900 dark:hover:border-white transition-colors"
        >
          <Phone className="w-4 h-4" />
          {contact.ctaSecondary.text}
        </a>
      </div>
    </motion.div>
  </section>
);

export default Contact;
