import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud } from "lucide-react";
import Section from "./Section";

const ICONS = {
  code: Code2,
  server: Server,
  database: Database,
  cloud: Cloud,
};

const Skills = ({ skills }) => (
  <Section eyebrow={skills.eyebrow} title={skills.title}>
    <div className="flex flex-wrap -mx-7">
      {skills.items.map((item, i) => {
        const Icon = ICONS[item.icon] || Code2;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`flex-1 min-w-[220px] px-7 py-6 md:py-0 ${
              i > 0
                ? "border-t md:border-t-0 md:border-l border-gray-200 dark:border-white/10"
                : ""
            }`}
          >
            <Icon className="w-6 h-6 text-accent-contrast dark:text-accent" strokeWidth={1.6} />
            <h3 className="font-display text-base font-semibold mt-4 mb-2 text-gray-900 dark:text-[#F3F1EC]">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  </Section>
);

export default Skills;
