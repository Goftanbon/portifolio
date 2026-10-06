import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

const Nav = ({ site, links, darkMode, toggleDarkMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-[#0D0E10]/85 border-b border-gray-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#top" className="flex items-center gap-2.5 min-w-0">
            <span className="w-7 h-7 rounded-md bg-accent flex items-center justify-center flex-shrink-0">
              <span className="font-display font-bold text-xs text-ink">GK</span>
            </span>
            <span className="font-display font-semibold text-sm truncate text-gray-900 dark:text-[#F3F1EC]">
              {site.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-accent-contrast dark:hover:text-accent transition-colors"
              >
                {link.text}
              </a>
            ))}
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-xs font-medium border border-gray-300 dark:border-white/25 text-gray-900 dark:text-[#F3F1EC] hover:border-gray-900 dark:hover:border-white transition-colors"
            >
              Résumé ↓
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0D0E10] border-t border-gray-200 dark:border-white/10"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-gray-700 dark:text-gray-300 hover:text-accent-contrast dark:hover:text-accent"
                >
                  {link.text}
                </a>
              ))}
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block py-3 font-medium text-gray-900 dark:text-[#F3F1EC]"
              >
                Résumé ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
