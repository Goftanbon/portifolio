import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, eyebrow, title, children, noBorder }) => (
  <section
    id={id}
    className={`max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24 ${
      noBorder ? "" : "border-t border-gray-200 dark:border-white/10"
    }`}
  >
    {(eyebrow || title) && (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 md:mb-14"
      >
        {eyebrow && (
          <span className="text-xs font-medium tracking-widest uppercase text-accent-contrast dark:text-accent">
            {eyebrow}
          </span>
        )}
        {title && (
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4 text-gray-900 dark:text-[#F3F1EC]">
            {title}
          </h2>
        )}
      </motion.div>
    )}
    {children}
  </section>
);

export default Section;
