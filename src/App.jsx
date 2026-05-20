import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaFilter,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaPhone,
  FaSun,
} from "react-icons/fa";

const projects = [
  {
    title: "Heart Disease Prediction using Machine Learning",
    description:
      "Developed predictive models using Logistic Regression, Random Forest, and XGBoost to assess heart disease risk with end-to-end ML evaluation.",
    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "XGBoost"],
    tags: ["ai-ml"],
    github: "https://github.com/umashankar04/heart-disease-prediction-ml",
  },
  {
    title: "Diabetes Prediction - Retinopathy & Readmission Analysis",
    description:
      "Built healthcare-focused ML workflows with data cleaning, feature engineering, and model evaluation for predictive analytics.",
    stack: ["Python", "Scikit-learn", "Pandas"],
    tags: ["ai-ml"],
    github: "https://github.com/umashankar04/diabetes-prediction-analysis",
  },
  {
    title: "Employee Management System (EMS) - Full Stack with AI Chatbot",
    description:
      "Created a full-stack EMS with JWT auth, role-based access control, and AI chatbot support for attendance, payroll, and leave workflows.",
    stack: ["Python", "FastAPI", "React", "MySQL", "REST APIs", "JWT"],
    tags: ["full-stack", "gen-ai"],
    github:
      "https://github.com/umashankar04/employee-management-system-ai-chatbot",
  },
];

const skillGroups = [
  {
    title: "AI/ML & Gen AI",
    items: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "Logistic Regression",
      "NLP",
      "Prompt Engineering",
      "LLMs (OpenAI / Hugging Face)",
      "Transformers",
      "Embeddings",
    ],
  },
  {
    title: "Data & ML Libraries",
    items: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Hyperparameter Tuning",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Development",
    items: [
      "FastAPI",
      "React",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
      "MySQL",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "MySQL Workbench"],
  },
];

const experiences = [
  {
    role: "BPO Associate",
    company: "Tech Mahindra",
    period: "Apr 2026 - Present",
    points: [
      "Currently working in BPO operations at Tech Mahindra since April 2026.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Accrosian Soft Solution Pvt. Ltd., Bhubaneswar",
    period: "Dec 2025 - Mar 2026",
    points: [
      "Developed and maintained Python-based backend services and RESTful APIs to support AI-driven application features.",
      "Contributed to building NLP-integrated chatbot functionalities and automated data processing pipelines.",
      "Collaborated with cross-functional teams to translate business requirements into scalable technical solutions.",
    ],
  },
  {
    role: "Embedded Programming Intern",
    company: "C.V. Raman Global University",
    period: "Jul 2024 - Aug 2024",
    points: [
      "Implemented programming tasks using Python and C, strengthening low-level programming and algorithmic thinking.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech - Computer Science (AI & ML)",
    institute: "C.V. Raman Global University, Bhubaneswar",
    period: "2022 - 2026",
    score: "CGPA: 7.98",
  },
  {
    degree: "Class X (CBSE)",
    institute: "Young Phoenix Public",
    period: "2018 - 2019",
    score: "66%",
  },
  {
    degree: "Class XII (CBSE)",
    institute: "Bridgewell Global School",
    period: "2021 - 2022",
    score: "57.40%",
  },
];

const sectionMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeInOut" },
};

const heroOrbits = [
  {
    className:
      "-right-6 top-8 h-12 w-12 bg-cyan-400/18 blur-3xl sm:-right-8 sm:top-12 sm:h-16 sm:w-16 md:-right-10 md:top-16 md:h-20 md:w-20 dark:bg-cyan-300/12",
    duration: 22,
    delay: 0,
  },
  {
    className:
      "left-6 bottom-10 h-10 w-10 bg-blue-500/18 blur-2xl sm:left-8 sm:bottom-14 sm:h-12 sm:w-12 md:left-10 md:bottom-16 md:h-14 md:w-14 dark:bg-blue-300/10",
    duration: 24,
    delay: 1.2,
  },
];

const floatingCards = [
  {
    label: "AI & ML",
    className:
      "left-2 top-3 sm:left-6 sm:top-6 md:left-8 md:top-8 lg:left-10 lg:top-12",
    duration: 0,
    delay: 0,
  },
  {
    label: "Gen AI",
    className:
      "right-2 top-14 sm:right-6 sm:top-16 md:right-8 md:top-20 lg:right-14 lg:top-18",
    duration: 0,
    delay: 1.2,
  },
];

const heroRings = [
  {
    className:
      "left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 sm:h-[28rem] sm:w-[28rem] md:h-[32rem] md:w-[32rem]",
    duration: 28,
    delay: 0,
  },
  {
    className:
      "left-1/2 top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 sm:h-[20rem] sm:w-[20rem] md:h-[24rem] md:w-[24rem]",
    duration: 32,
    delay: 1.4,
  },
];

function App() {
  const prefersReducedMotion = useReducedMotion();
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return projects;
    }
    return projects.filter((project) => project.tags.includes(filter));
  }, [filter]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-orbit min-h-screen">
      <header className="sticky top-0 z-40 border-b border-slate-300/70 bg-white/75 backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-950/65">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-3 py-2 sm:px-6 sm:py-3 lg:px-8">
          <a
            href="#hero"
            className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-sm sm:text-base"
          >
            Umashankar Pradhan
          </a>
          <div className="hidden items-center gap-4 text-xs font-medium text-slate-700 dark:text-slate-200 sm:gap-6 sm:text-sm md:flex">
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-blue-600 dark:hover:text-blue-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-blue-300"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Toggle mobile menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-100"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() =>
                setTheme((prev) => (prev === "dark" ? "light" : "dark"))
              }
              className="ring-fancy rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:-translate-y-0.5 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white/75 dark:bg-slate-950/65 backdrop-blur-lg">
            <div className="mx-auto max-w-6xl px-3 py-2 space-y-1 sm:px-6">
              <a
                href="#about"
                className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-6xl px-3 py-8 sm:px-6 sm:py-12 md:px-8 lg:py-16">
        <section
          id="hero"
          className="surface-card ring-fancy antigravity-shell relative overflow-hidden rounded-2xl px-4 py-10 sm:rounded-3xl sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-14"
        >
          <div className="hero-scanner absolute inset-0 z-0 pointer-events-none" />
          <div className="antigravity-grid absolute inset-0 z-0 pointer-events-none" />
          <div className="antigravity-vignette absolute inset-0 z-0 pointer-events-none" />
          {heroRings.map((ring) => (
            <motion.div
              key={ring.className}
              aria-hidden="true"
              className={`hero-ring absolute z-0 rounded-full ${ring.className}`}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      scale: [1, 1.03, 1],
                      opacity: [0.22, 0.32, 0.22],
                    }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: ring.duration,
                      delay: ring.delay,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
              }
            />
          ))}
          {heroOrbits.map((orb, index) => (
            <motion.div
              key={orb.className}
              aria-hidden="true"
              className={`antigravity-orb absolute z-0 rounded-full ${orb.className}`}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: [0, -10, 0],
                      x: index % 2 === 0 ? [0, 6, 0] : [0, -5, 0],
                      scale: [1, 1.03, 1],
                    }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: orb.duration,
                      delay: orb.delay,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
              }
            />
          ))}
          {floatingCards.map((card, index) =>
            card.label === "AI & ML" ? (
              <div
                key={card.label}
                aria-hidden="true"
                className={`antigravity-chip absolute z-20 border-cyan-300/35 bg-cyan-400/16 text-cyan-50 shadow-[0_14px_32px_-22px_rgba(34,211,238,0.6)] ${card.className}`}
              >
                {card.label}
              </div>
            ) : (
              <motion.div
                key={card.label}
                aria-hidden="true"
                className={`antigravity-chip absolute z-20 border-white/12 bg-white/8 text-slate-50 ${card.className}`}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: [0, -14, 0],
                        rotate: index % 2 === 0 ? [-2, 2, -2] : [2, -2, 2],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : {
                        duration: card.duration,
                        delay: card.delay,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }
                }
              >
                {card.label}
              </motion.div>
            ),
          )}
          <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />
          <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
          <div className="antigravity-float absolute inset-x-0 bottom-0 z-0 h-16 pointer-events-none" />
          <div className="hero-panel relative z-10 max-w-4xl rounded-2xl border border-white/15 bg-slate-950/72 p-4 shadow-[0_24px_80px_-46px_rgba(11,95,255,0.55)] backdrop-blur-2xl sm:rounded-3xl sm:p-6 md:p-8 lg:p-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:mb-3">
              Computer Science (AI & ML) Graduate
            </p>
            <h1 className="max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Umashankar Pradhan
            </h1>
            <p className="mt-2 text-sm font-semibold text-cyan-300 sm:mt-3 sm:text-base md:text-lg">
              Analyst - Gen AI / Python | AI & ML Engineer
            </p>
            <p className="mt-3 max-w-3xl text-xs leading-relaxed text-slate-300 sm:mt-4 sm:text-sm md:text-base lg:text-lg">
              Building intelligent systems using AI, Machine Learning, and
              Generative AI.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3 md:mt-8">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_18px_36px_-20px_rgba(37,99,235,0.9)] sm:px-5 sm:py-3 sm:text-sm md:text-base"
              >
                View Projects <FaArrowRight />
              </button>
              <a
                href="/Umashankar_Pradhan_Resume.txt"
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-white/12 hover:shadow-[0_18px_36px_-24px_rgba(20,184,166,0.8)] sm:px-5 sm:py-3 sm:text-sm md:text-base"
              >
                Download Resume <FaDownload />
              </a>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/16 hover:shadow-[0_18px_36px_-24px_rgba(34,211,238,0.75)] sm:px-5 sm:py-3 sm:text-sm md:text-base"
              >
                Contact Me
              </button>
            </div>
          </div>
        </section>

        <motion.section
          id="about"
          {...sectionMotion}
          className="pt-12 sm:pt-16 md:pt-20"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            About Me
          </h2>
          <p className="surface-card mt-5 rounded-2xl p-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300 sm:p-5 sm:text-sm md:p-6 md:text-base">
            Motivated Computer Science (AI & ML) graduate with hands-on
            experience in Python, Machine Learning, and full-stack development.
            Proficient in building and evaluating ML models using Scikit-learn,
            Pandas, and NumPy. Familiar with Generative AI concepts, LLMs,
            prompt engineering, and NLP workflows. Experienced in developing
            RESTful APIs with FastAPI and integrating AI-driven features
            including chatbot support. Strong analytical mindset with a passion
            for applying emerging AI and Gen AI technologies to real-world
            business problems.
          </p>
        </motion.section>

        <motion.section
          id="education"
          {...sectionMotion}
          className="pt-12 sm:pt-16 md:pt-20"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Education
          </h2>
          <div className="mt-5 grid gap-4">
            {education.map((item) => (
              <motion.article
                key={item.degree}
                whileHover={
                  prefersReducedMotion ? undefined : { y: -8, scale: 1.01 }
                }
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="surface-card antigravity-card rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.degree}
                </h3>
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                  {item.institute}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">
                    {item.period}
                  </span>
                  <span className="rounded-full bg-cyan-100 px-3 py-1 font-medium text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200">
                    {item.score}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          {...sectionMotion}
          className="pt-12 sm:pt-16 md:pt-20"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Skills
          </h2>
          <div className="mt-5 grid gap-4 sm:mt-6 sm:gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <motion.article
                key={group.title}
                whileHover={
                  prefersReducedMotion ? undefined : { y: -8, scale: 1.01 }
                }
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="surface-card antigravity-card rounded-2xl p-5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {group.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-300/80 px-3 py-1 text-sm text-slate-700 dark:border-slate-600 dark:text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          {...sectionMotion}
          className="pt-12 sm:pt-16 md:pt-20"
        >
          <div className="flex flex-col gap-4 sm:flex-wrap sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
              Projects
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <FaFilter /> Filter:
              </span>
              {["all", "ai-ml", "gen-ai", "full-stack"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setFilter(tag)}
                  className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                    filter === tag
                      ? "bg-blue-600 text-white"
                      : "border border-slate-300 text-slate-700 hover:border-blue-400 dark:border-slate-600 dark:text-slate-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { y: -10, rotateX: 2, rotateY: -2, scale: 1.02 }
                }
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.48,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="surface-card antigravity-card rounded-2xl p-5"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-200/70 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700/60 dark:text-slate-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300"
                >
                  <FaGithub /> GitHub Repository
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          {...sectionMotion}
          className="pt-12 sm:pt-16 md:pt-20"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Experience
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {experiences.map((exp) => (
              <motion.article
                key={exp.role}
                whileHover={
                  prefersReducedMotion ? undefined : { y: -8, scale: 1.01 }
                }
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="surface-card antigravity-card rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="mt-2 text-sm font-medium text-cyan-700 dark:text-cyan-300">
                  {exp.period}
                </p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                  {exp.company}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <FaCode className="mt-1 shrink-0 text-blue-600 dark:text-blue-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="additional"
          {...sectionMotion}
          className="pt-12 sm:pt-16 md:pt-20"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Additional Information
          </h2>
          <div className="surface-card mt-5 rounded-2xl p-4 text-xs text-slate-700 dark:text-slate-300 sm:p-5 sm:text-sm md:p-6 md:text-base">
            <p className="text-base leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white">
                Interests:
              </span>{" "}
              Exploring AI & Gen AI tools, Video Editing & Content Creation,
              Social Media SEO Strategy, Fitness
            </p>
            <p className="mt-3 text-base leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white">
                Location Preference:
              </span>{" "}
              Open to relocate (Onsite)
            </p>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          {...sectionMotion}
          className="pt-12 sm:pt-16 md:pt-20"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Contact
          </h2>
          <div className="mt-6 grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-2">
            <article className="surface-card rounded-2xl p-4 sm:p-5 md:p-6">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                Let's Connect
              </h3>
              <div className="mt-3 space-y-2 text-xs text-slate-700 dark:text-slate-300 sm:mt-4 sm:space-y-3 sm:text-sm">
                <a
                  className="flex items-center gap-3 hover:text-blue-700 dark:hover:text-blue-300"
                  href="mailto:umashankarpradhan138@gmail.com"
                >
                  <FaEnvelope /> umashankarpradhan138@gmail.com
                </a>
                <a
                  className="flex items-center gap-3 hover:text-blue-700 dark:hover:text-blue-300"
                  href="tel:+919668797558"
                >
                  <FaPhone /> +91-9668797558
                </a>
                <a
                  className="flex items-center gap-3 hover:text-blue-700 dark:hover:text-blue-300"
                  href="https://www.linkedin.com/in/umashankar-pradhan-a72903253"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin /> LinkedIn Profile
                </a>
                <a
                  className="flex items-center gap-3 hover:text-blue-700 dark:hover:text-blue-300"
                  href="https://github.com/umashankar04"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> GitHub Profile
                </a>
              </div>
            </article>
            <form
              className="surface-card space-y-2 rounded-2xl p-4 sm:space-y-3 sm:p-5 md:p-6"
              action="https://formspree.io/f/your-form-id"
              method="POST"
            >
              <label
                className="block text-xs font-medium text-slate-700 dark:text-slate-200 sm:text-sm"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-slate-300 bg-white p-2 text-xs text-slate-900 outline-none transition focus:border-blue-500 sm:p-2.5 sm:text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
              <label
                className="block text-xs font-medium text-slate-700 dark:text-slate-200 sm:text-sm"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 bg-white p-2 text-xs text-slate-900 outline-none transition focus:border-blue-500 sm:p-2.5 sm:text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
              <label
                className="block text-xs font-medium text-slate-700 dark:text-slate-200 sm:text-sm"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="3"
                className="w-full rounded-lg border border-slate-300 bg-white p-2 text-xs text-slate-900 outline-none transition focus:border-blue-500 sm:p-2.5 sm:text-sm sm:rows-4 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
              <button
                type="submit"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Send Message <FaArrowRight />
              </button>
            </form>
          </div>
        </motion.section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-3 pb-8 pt-8 text-center text-xs text-slate-600 sm:px-6 sm:pb-10 sm:text-sm md:px-8 dark:text-slate-300">
        <p>
          © {new Date().getFullYear()} Umashankar Pradhan. Built with React,
          Tailwind CSS, and Framer Motion.
        </p>
      </footer>
    </div>
  );
}
export default App;
