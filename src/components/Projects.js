import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";
import Section from "./Section";

const ProjectLinks = ({ demoLink, codeLink }) => {
  if (!demoLink && !codeLink) return null;
  return (
    <div
      className="absolute top-4 right-4 flex gap-2"
      onClick={(e) => e.preventDefault()}
    >
      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View live demo"
          className="p-2 bg-black/30 backdrop-blur-sm rounded-lg hover:bg-black/50 transition-colors"
        >
          <ExternalLink className="w-4 h-4 text-white" />
        </a>
      )}
      {codeLink && (
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source code"
          className="p-2 bg-black/30 backdrop-blur-sm rounded-lg hover:bg-black/50 transition-colors"
        >
          <Github className="w-4 h-4 text-white" />
        </a>
      )}
    </div>
  );
};

const TechTags = ({ tech, large }) => (
  <div className="flex flex-wrap gap-2">
    {tech.map((t) => (
      <span
        key={t}
        className={`${
          large ? "text-xs px-2.5 py-1" : "text-[11px] px-2 py-0.5"
        } rounded-full border border-gray-200 dark:border-white/15 text-gray-500 dark:text-gray-400`}
      >
        {t}
      </span>
    ))}
  </div>
);

const Projects = ({ projects }) => {
  const featured = projects.items.find((p) => p.featured);
  const rest = projects.items.filter((p) => !p.featured);

  return (
    <Section id="work" eyebrow={projects.eyebrow} title={projects.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {featured && (
          <motion.a
            href={featured.demoLink || "#"}
            target={featured.demoLink ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative block md:col-span-2 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#121315]"
          >
            <div className="h-56 md:h-72 overflow-hidden relative">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <ProjectLinks demoLink={featured.demoLink} codeLink={featured.codeLink} />
            </div>
            <div className="p-6 flex flex-wrap justify-between items-start gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold mb-2 text-gray-900 dark:text-[#F3F1EC]">
                  {featured.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light max-w-lg">
                  {featured.description}
                </p>
              </div>
              <TechTags tech={featured.tech} large />
            </div>
          </motion.a>
        )}

        {rest.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.demoLink || "#"}
            target={project.demoLink ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative block rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#121315]"
          >
            {project.image ? (
              <div className="h-44 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <ProjectLinks demoLink={project.demoLink} codeLink={project.codeLink} />
              </div>
            ) : (
              <div className="h-44 flex items-center justify-center relative bg-gray-100 dark:bg-white/[0.03]">
                <Rocket className="w-8 h-8 text-gray-300 dark:text-white/15" strokeWidth={1.2} />
                <ProjectLinks demoLink={project.demoLink} codeLink={project.codeLink} />
              </div>
            )}
            <div className="p-5">
              <h3 className="font-display text-[17px] font-semibold mb-2 text-gray-900 dark:text-[#F3F1EC]">
                {project.title}
              </h3>
              <p className="text-[13.5px] text-gray-500 dark:text-gray-400 font-light mb-3.5">
                {project.description}
              </p>
              <TechTags tech={project.tech} />
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
