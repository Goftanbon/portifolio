import React from "react";

const Footer = ({ footer, site }) => (
  <footer className="max-w-6xl mx-auto px-6 md:px-8 py-8 border-t border-gray-200 dark:border-white/10 flex justify-between items-center flex-wrap gap-3">
    <span className="text-xs text-gray-400 dark:text-gray-500">
      {footer.copyright}
    </span>
    <div className="flex gap-5 text-xs">
      <a
        href={site.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 dark:text-gray-400 hover:text-accent-contrast dark:hover:text-accent transition-colors"
      >
        GitHub
      </a>
      <a
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 dark:text-gray-400 hover:text-accent-contrast dark:hover:text-accent transition-colors"
      >
        LinkedIn
      </a>
      <a
        href={`mailto:${site.email}`}
        className="text-gray-500 dark:text-gray-400 hover:text-accent-contrast dark:hover:text-accent transition-colors"
      >
        Email
      </a>
    </div>
  </footer>
);

export default Footer;
