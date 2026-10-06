import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";

const Experience = ({ experience }) => (
  <Section id="experience" eyebrow={experience.eyebrow} title={experience.title}>
    <div className="flex flex-col">
      {experience.items.map((exp, i) => (
        <motion.div
          key={`${exp.company}-${exp.period}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className={`flex gap-8 flex-wrap py-7 border-t border-gray-200 dark:border-white/10 ${
            i === experience.items.length - 1
              ? "border-b border-gray-200 dark:border-white/10"
              : ""
          }`}
        >
          <div className="flex-[1_1_160px] text-sm text-gray-400 dark:text-gray-500">
            {exp.period}
          </div>
          <div className="flex-[999_1_420px] min-w-0 flex gap-4">
            {exp.logo && (
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-10 h-10 rounded-lg object-cover flex-shrink-0 bg-white"
              />
            )}
            <div>
              <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-[#F3F1EC]">
                {exp.role}
              </h3>
              <div className="text-sm text-accent-contrast dark:text-accent mb-2.5">
                {exp.company}
              </div>
              <ul className="space-y-1.5 mb-3">
                {exp.highlights.map((h) => (
                  <li
                    key={h.slice(0, 40)}
                    className="text-[14.5px] text-gray-600 dark:text-gray-300 font-light max-w-2xl list-disc list-inside"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-gray-200 dark:border-white/15 text-gray-500 dark:text-gray-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Experience;
