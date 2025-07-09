import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  Menu,
  X,
  Download,
  ExternalLink,
  Github,
  Mail,
  Phone,
  Code,
  Smartphone,
  Server,
  Search,
} from "lucide-react";

// Removed unused 'title' import from 'process'

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // NEW: Navigation links data structure
  const navLinks = [
    { id: "about", text: "About", href: "#overview" },
    { id: "work", text: "Work", href: "#experiences" },
    { id: "contact", text: "Contact", href: "#contact" },
    { id: "projects", text: "My Projects", href: "#projects" },
  ];

  useEffect(() => {
    // Dark mode logic
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // NEW: Enable smooth scrolling on the entire page
    document.documentElement.style.scrollBehavior = "smooth";

    // Optional: Cleanup scroll behavior when component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const skills = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Developer",
      description:
        "Building responsive and modern web applications with latest technologies",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Flutter Developer",
      description:
        "Creating cross-platform mobile applications with beautiful UI/UX",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Backend Developer",
      description: "Developing scalable server-side applications and APIs",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Optimization",
      description: "Optimizing websites for better search engine rankings",
      color: "from-pink-500 to-purple-500",
    },
  ];

  const projects = [
    {
      title: "Admin Page EthioDelivery",
      description:
        "StableDuel is a new game that is taking horse racing by storm with its recent release of an iOS and Android app. Daily Fantasy Sports meets the thrill of horse racing using the well-known salary-cap style DFS game platform.",
      image: "/assets/images/admin page.png",
      tech: ["#Reac.js", "#Next.js", "#Nest.js"],
      demoLink: "https://admin.ethiodelivery.com",
      codeLink: "#",
    },
    {
      title: "Bingo Game",
      description:
        "Mobile and Web E-commerce application that enables users to search and buy any product through the platform. Vendors can also register and sell their products here.",
      image: "/assets/images/shager.png",
      tech: ["#Nest.js", "#React.js", "#nodejs"],
      demoLink: "https://t.me/ShegerBingooBot",
      codeLink: "#",
    },
    {
      title: "EthioBest Price",
      description:
        "The Target Jobs is a job-finding platform designed specifically for Ethiopians, making it easy for job seekers to find opportunities and for employers to hire quickly. The platform also offers tools for personalized job recommendations, application tracking, and employer-employee communication.",
      image: "/assets/images/ethioBestPrice.png",
      tech: ["#Next.js", "#Tailwind CSS", "#JavaScript"],
      demoLink: "https://ebp-http.codepointcreatives.com/",
      codeLink: "#",
    },
    {
      title: "Eat Addis",
      description:
        "mobile and web basaed with telegram bot platform allows user to Order and Sell food online from his favorite restorants by providing a convenient and efficient for Food Delivery Systems",
      image: "/assets/images/eat addis.jpg",
      tech: ["#React.js", "#Node.js", "#Flutter"],
      demoLink: "https://t.me/EatAddisBot",
      codeLink: "#",
    },
    {
      title: "BetLehulu",
      description:
        "a Web app that allow people to rent property with all service on one place where a user search a property rent pay their renti and mangae the property ",
      image: "/assets/images/renting.png",
      tech: ["#React.js", "#Node.js", "#chapa"],
      demoLink: "https://betlehulu.meyotaceremonial.com/",
      codeLink: "https://github.com/Goftanbon/BetLeHul_Senior.git",
    },
    {
      title: "Mayota Ceremonial ",
      description:
        "a Web app that allow people to rent property with all service on one place where a user search a property rent pay their renti and mangae the property ",
      image: "/assets/images/cermonial.png",
      tech: ["#TypeScipt", "#Node.js", "#cornJobs"],
      demoLink: "https://meyotaceremonial.com/",
      codeLink: "https://github.com/Goftanbon/CatringInventory.git",
    },
  ];

  const Cube3D = () => (
    <div className="relative w-64 h-64 mx-auto hero-3d">
      <div className="absolute inset-0 rotating-cube">
        <div className="absolute w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 transform -translate-z-32"></div>
        <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 transform translate-z-32"></div>
        <div className="absolute w-full h-full bg-gradient-to-br from-green-500 to-teal-500 opacity-20 transform -rotate-y-90 translate-x-32"></div>
        <div className="absolute w-full h-full bg-gradient-to-br from-yellow-500 to-orange-500 opacity-20 transform rotate-y-90 -translate-x-32"></div>
        <div className="absolute w-full h-full bg-gradient-to-br from-red-500 to-pink-500 opacity-20 transform -rotate-x-90 translate-y-32"></div>
        <div className="absolute w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20 transform rotate-x-90 -translate-y-32"></div>
      </div>
    </div>
  );

  const CodeEditor = () => (
    <motion.div
      className="relative w-full max-w-2xl mx-auto glass-morphism rounded-xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="flex items-center justify-between p-4 bg-gray-800 dark:bg-gray-900">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm text-gray-400">portfolio.js</div>
        <div className="text-sm text-gray-400">×</div>
      </div>
      <div className="p-6 bg-gray-900 text-green-400 font-mono text-sm">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 1 }}
          className="overflow-hidden"
        >
          <div className="space-y-2">
            <div>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">developer</span> = {`{`}
            </div>
            <div className="ml-4">
              <span className="text-yellow-400">name</span>:{" "}
              <span className="text-green-300">"Goftanbon Keno"</span>,
            </div>
            <div className="ml-4">
              <span className="text-yellow-400">role</span>:{" "}
              <span className="text-green-300">"FullStack Engineer"</span>,
            </div>
            <div className="ml-4">
              <span className="text-yellow-400">skills</span>: [
              <span className="text-green-300">"React"</span>,{" "}
              <span className="text-green-300">"Node.js"</span>,{" "}
              <span className="text-green-300">"Flutter"</span>],
            </div>
            <div className="ml-4">
              <span className="text-yellow-400">passion</span>:{" "}
              <span className="text-green-300">
                "Building amazing applications"
              </span>
            </div>
            <div>{`};`}</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-morphism">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Goftanbon | Portfolio
            </motion.div>

            {/* UPDATED: Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-purple-500 after:transition-transform after:duration-300 ${
                    activeSection === link.id
                      ? "text-purple-500 dark:text-purple-400 after:scale-x-100"
                      : "after:scale-x-0"
                  }`}
                >
                  {link.text}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* UPDATED: Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
            >
              <div className="px-4 py-2 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    className={`block w-full text-left py-2 transition-colors ${
                      activeSection === link.id
                        ? "text-purple-500 dark:text-purple-400 font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-purple-500"
                    }`}
                    onClick={() => {
                      setActiveSection(link.id);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-indigo-900/40"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-purple-600 dark:text-purple-400 text-sm">
                Available for work
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="gradient-text">Goftanbon Keno</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              I am a FullStack Engineer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <CodeEditor />
            </div>
            <Cube3D />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-bold text-purple-600 dark:text-purple-400 tracking-wide uppercase">
                Introduction
              </span>
              {/* The id="overview" is the target for the "About" link */}
              <h2
                id="overview"
                className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-6"
              >
                Overview.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 h-[234px] w-[950px]">
                I'm a senior software engineer with a strong focus on backend
                development. Since teaching myself web development back in 2018,
                I've gained solid experience building high-quality, scalable,
                and reliable systems. Over the years, I've worked with a range
                of frameworks and tools like Node.js, Express.js, Spring, Flask,
                and Django, among others. I care deeply about software quality,
                scalability, and well-structured Service-Oriented Architecture,
                and I aim to bring these principles into every project I take
                on. I'm passionate about building robust, efficient systems that
                hold up under real-world demands, and I always hold myself to
                high standards when it comes to my work. With a keen eye for
                detail, strong technical skills, and a dedication to doing
                things right, I'm confident I can deliver great results and add
                real value to any project or team I'm part of.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
                onClick={() =>
                  window.open("/assets/documents/goftanbonKenoCv.pdf")
                }
              >
                <Download className="w-5 h-5" />
                <span>Download My CV</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Experience Timeline Section */}
          {/* NEW: Added id="experiences" here for the "Work" link to target */}
          <div id="experiences" className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Experience Timeline
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-800 z-0"></div>
              <div className="space-y-24">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div
                      className={`flex items-center justify-center mb-6 relative z-10`}
                    >
                      <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 border-4 border-purple-500 dark:border-purple-400 flex items-center justify-center shadow-lg">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`flex ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      } items-start`}
                    >
                      <div
                        className={`${
                          index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                        } w-1/2 flex ${
                          index % 2 === 0 ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400 inline-block">
                          {exp.period}
                        </div>
                      </div>
                      <div className="w-1/2 $`{index % 2 === 0 ? 'pl-8' : 'pr-8'}`">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 relative">
                          <div className="absolute top-0 transform -translate-y-1/2 left-6 w-16 h-16 rounded-lg bg-white dark:bg-gray-700 shadow-md flex items-center justify-center p-2 border border-gray-200 dark:border-gray-600">
                            {exp.logo ? (
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src =
                                    "/assets/images/placeholder-logo.png";
                                }}
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs font-medium">
                                {exp.company.substring(0, 2).toUpperCase()}
                              </div>
                            )}
                          </div>
                          <div className="mt-6">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                              {exp.title}
                            </h4>
                            <p className="text-purple-600 dark:text-purple-400 font-medium">
                              {exp.company}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mt-4 mb-4">
                              {exp.description}
                            </p>
                            {exp.responsibilities && (
                              <div className="mt-4">
                                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                  Key Responsibilities:
                                </h5>
                                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                                  {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} p-4 text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold text-purple-600 dark:text-purple-400 tracking-wide uppercase">
              My Work
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-6">
              Projects.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </motion.a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* NEW: Added id="contact" here for the "Contact" link to target */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting
              projects. Let's create something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:goftanbonkeno@gmail.com"
                className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="tel:+2519010057329"
                className="inline-flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Me</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold mb-4">Goftanbon Keno</h3>
              <p className="text-gray-400 mb-6">FullStack Engineer</p>

              <div className="flex justify-center space-x-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/Goftanbon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="mailto:goftanbonkeno@gmail.com"
                  className="p-3 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="tel:+2519010057329"
                  className="p-3 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 Goftanbon Keno. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

// This data remains the same at the bottom of the file
const experiences = [
  {
    title: "Full Stack Developer intership",
    company: "Nova Computech",
    period: "March 2023 - July 2024",
    description:
      "As a full stack Developer, I have experience developing high-quality, scalable, and reliable backend systems for various applications. I work closely with front-end and database teams to ensure seamless integration and performance optimization.",
    logo: "/assets/images/company-logos/nova.jpeg",
    responsibilities: [
      "Backend Development: Collaborate with the development team to design, develop, test, and implement the backend components of the horse gambling app.",
      "System Architecture: Contribute to the design and implementation of the app's backend architecture, ensuring scalability, fault tolerance, and high availability.",
      "API Development: Create and maintain robust RESTful APIs for seamless integration with front-end applications, third-party systems, and external partners.",
      "frontend Development : Collaborate with other developers work on responsive and user-friendly frontend interfaces using HTML, CSS, and JavaScript frameworks like React or Angular.",
    ],
  },
  {
    title: "Backend Developer",
    company: "Nova Computech",
    period: "Jan 2024 - Feb 2025",
    description:
      "As a Backend Developer, I developed and maintained the server-side logic, databases, and APIs for the Nova computech platform. My responsibilities included working with the front-end team to ensure smooth integration, optimizing database queries for performance, and implementing security measures to protect sensitive data. Additionally, I collaborated with the team to troubleshoot and resolve any technical issues that arose.",
    logo: "/assets/images/company-logos/nova.jpeg",
    responsibilities: [
      "Developing and managing databases such as MySQL, PostgreSQL, or MongoDB",
      "Creating and maintaining documentation for APIs and other backend systems",
      "Collaborating with front-end developers to integrate user-facing elements with server-side logic",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Self-employed",
    period: "2018 - Present Day",
    description:
      "Worked on various web and mobile projects for clients, focusing on full-stack development with React, Node.js, and Flutter.",
    logo: "/assets/images/company-logos/upwork.webp",
    responsibilities: [
      "Developing custom web and mobile applications based on client requirements",
      "Managing the entire development lifecycle from concept to deployment",
      "Providing ongoing maintenance and support for completed projects",
    ],
  },
  {
    title: "Media Team Leader",
    company: "Geja kale Hiwot",
    period: "August 2018 - 2022",
    description:
      "Responsible for managing and coordinating the media team, overseeing the production and distribution of news, events, and multimedia content.",
    logo: "/assets/images/company-logos/logo.jpg",
    responsibilities: [
      "Leading and coordinating the media team's activities",
      "Overseeing the production and distribution of multimedia content",
      "Ensuring high-quality standards for all media outputs",
    ],
  },
];
