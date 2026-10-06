import React from "react";
import { motion } from "framer-motion";

const Hero = ({ hero }) => (
  <section
    id="top"
    className="max-w-6xl mx-auto px-6 md:px-8 pt-32 md:pt-40 pb-20 flex flex-wrap gap-14 items-start"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex-[999_1_460px] min-w-0"
    >
      <div className="flex items-center gap-2 mb-7">
        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
        <span className="text-xs text-gray-500 dark:text-gray-400 tracking-wide uppercase">
          {hero.eyebrow}
        </span>
      </div>
      <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.04] tracking-tight mb-6 text-gray-900 dark:text-[#F3F1EC]">
        {hero.headline}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-9 font-light">
        {hero.subtitle}
      </p>
      <div className="flex gap-3.5 flex-wrap">
        <a
          href={hero.ctaPrimary.href}
          className="px-6 py-3.5 rounded-lg font-medium text-sm bg-accent text-ink hover:bg-accent-muted transition-colors"
        >
          {hero.ctaPrimary.text} →
        </a>
        <a
          href={hero.ctaSecondary.href}
          className="px-6 py-3.5 rounded-lg font-medium text-sm border border-gray-300 dark:border-white/25 text-gray-900 dark:text-[#F3F1EC] hover:border-gray-900 dark:hover:border-white transition-colors"
        >
          {hero.ctaSecondary.text}
        </a>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="flex-[1_1_360px] min-w-[280px] max-w-[440px]"
    >
      <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#121315]">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-200 dark:border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-[#444]" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-[#444]" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-[#444]" />
          <span className="ml-2 text-xs text-gray-400 dark:text-[#6b6b66] font-mono">
            {hero.panel.filename}
          </span>
        </div>
        <div className="px-5 py-5 font-mono text-[13px] leading-[2] text-gray-600 dark:text-gray-300">
          <div>{"{"}</div>
          {hero.panel.fields.map((f, i) => (
            <div key={f.key} className="pl-4">
              "{f.key}":{" "}
              <span className="text-accent-contrast dark:text-accent">
                {f.value}
              </span>
              {i < hero.panel.fields.length - 1 ? "," : ""}
            </div>
          ))}
          <div>{"}"}</div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
