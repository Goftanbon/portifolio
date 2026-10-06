import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Section from "./Section";

const About = ({ about, resumeUrl }) => (
  <Section id="about" eyebrow={about.eyebrow} title={about.title}>
    <div className="flex flex-wrap gap-14">
      <div className="flex-[999_1_480px] min-w-0">
        <p className="text-[17px] text-gray-700 dark:text-gray-300 max-w-2xl mb-8 font-light leading-relaxed">
          {about.body}
        </p>

        <div className="flex gap-12 flex-wrap mb-8">
          {about.stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="font-display text-3xl font-semibold text-accent-contrast dark:text-accent">
                {s.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-[140px]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium border-b border-gray-400 dark:border-white/35 hover:border-accent-contrast dark:hover:border-accent hover:text-accent-contrast dark:hover:text-accent pb-0.5 transition-colors text-gray-900 dark:text-[#F3F1EC]"
        >
          <Download className="w-4 h-4" />
          {about.resumeLinkText}
        </a>
      </div>

      <div className="flex-[1_1_240px] min-w-[220px]">
        <div className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3">
          Education
        </div>
        <div className="mb-6">
          <div className="font-medium text-gray-900 dark:text-[#F3F1EC] text-sm">
            {about.education.degree}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {about.education.school}
          </div>
          <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            {about.education.period} · {about.education.details}
          </div>
        </div>

        <div className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-3">
          Certificates
        </div>
        <ul className="space-y-2">
          {about.certificates.map((c) => (
            <li key={c.title} className="text-sm">
              <div className="text-gray-900 dark:text-[#F3F1EC]">{c.title}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                {c.issuer}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default About;
