import React, { useState, useEffect } from "react";
import yaml from "js-yaml";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/content.yaml`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load content.yaml");
        return res.text();
      })
      .then((text) => setContent(yaml.load(text)))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((d) => !d);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0D0E10] text-gray-900 dark:text-[#F3F1EC] font-sans">
        Couldn't load site content: {error}
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0D0E10] font-sans">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0D0E10] text-gray-900 dark:text-[#F3F1EC] font-sans transition-colors duration-300">
      <Nav
        site={content.site}
        links={content.nav}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Hero hero={content.hero} />
      <About about={content.about} resumeUrl={content.site.resumeUrl} />
      <Experience experience={content.experience} />
      <Skills skills={content.skills} />
      <Projects projects={content.projects} />
      <Contact contact={content.contact} />
      <Footer footer={content.footer} site={content.site} />
    </div>
  );
};

export default App;
