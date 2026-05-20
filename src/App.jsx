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
  transition: { duration: 0.55, ease: "easeOut" },
};

const heroOrbits = [
  {
    className:
      "-right-6 top-14 h-24 w-24 bg-cyan-400/30 blur-3xl dark:bg-cyan-300/20",
    duration: 16,
    delay: 0,
  },
  {
    className:
      "left-8 top-28 h-16 w-16 bg-blue-500/30 blur-2xl dark:bg-blue-300/15",
    duration: 13,
    delay: 1.5,
  },
  {
    className:
      "bottom-10 right-24 h-20 w-20 bg-indigo-400/25 blur-3xl dark:bg-indigo-300/15",
    duration: 18,
    delay: 0.8,
  },
];

const floatingCards = [
  {
    label: "AI & ML",
    className: "left-4 top-4 sm:left-8 sm:top-10",
    duration: 7.5,
    delay: 0,
  },
  {
    label: "Gen AI",
    className: "right-4 top-20 sm:right-12 sm:top-16",
    duration: 8.5,
    delay: 1.2,
  },
  {
    label: "Python",
    className: "bottom-8 left-10 sm:left-20 sm:bottom-10",
    duration: 9.2,
    delay: 0.6,
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
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="font-semibold tracking-tight text-slate-900 dark:text-slate-100"
          >
            Umashankar Pradhan
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex">
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
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 32 }}
          animate={{
            opacity: 1,
            y: 0,
            boxShadow: prefersReducedMotion
              ? undefined
              : [
                  "0 24px 80px -48px rgb(11 95 255 / 0.18)",
                  "0 28px 96px -44px rgb(20 184 166 / 0.24)",
                  "0 24px 80px -48px rgb(11 95 255 / 0.18)",
                ],
          }}
          transition={
            prefersReducedMotion
              ? { duration: 0.35 }
              : {
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }
          }
          className="surface-card ring-fancy antigravity-shell relative overflow-hidden rounded-3xl px-6 py-14 sm:px-10 lg:px-14"
        >
          <div className="antigravity-grid absolute inset-0 z-0 pointer-events-none" />
          <div className="antigravity-vignette absolute inset-0 z-0 pointer-events-none" />
          {heroOrbits.map((orb, index) => (
            <motion.div
              key={orb.className}
              aria-hidden="true"
              className={`antigravity-orb absolute z-0 rounded-full ${orb.className}`}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: [0, -18, 0],
                      x: index % 2 === 0 ? [0, 10, 0] : [0, -8, 0],
                      scale: [1, 1.08, 1],
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
          {floatingCards.map((card, index) => (
            <motion.div
              key={card.label}
              aria-hidden="true"
              className={`antigravity-chip absolute z-0 ${card.className}`}
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
          ))}
          <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/6 blur-3xl pointer-events-none" />
          <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-blue-500/6 blur-3xl pointer-events-none" />
          <div className="antigravity-float absolute inset-x-0 bottom-0 z-0 h-16 pointer-events-none" />
          <div className="relative z-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
            Computer Science (AI & ML) Graduate
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Umashankar Pradhan
          </h1>
          <p className="mt-4 text-lg font-semibold text-blue-700 dark:text-blue-300">
            Analyst - Gen AI / Python | AI & ML Engineer
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
            Building intelligent systems using AI, Machine Learning, and
            Generative AI.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View Projects <FaArrowRight />
            </button>
            <a
              href="/Umashankar_Pradhan_Resume.txt"
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
            >
              Download Resume <FaDownload />
            </a>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-600/40 bg-cyan-50 px-5 py-3 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-100 dark:border-cyan-400/40 dark:bg-cyan-950/35 dark:text-cyan-100"
            >
              Contact Me
            </button>
          </div>
          </div>
        </motion.section>

        <motion.section id="about" {...sectionMotion} className="pt-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="surface-card mt-5 rounded-2xl p-6 text-base leading-relaxed text-slate-700 dark:text-slate-300">
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

        <motion.section id="education" {...sectionMotion} className="pt-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="mt-5 grid gap-4">
            {education.map((item) => (
              <motion.article
                key={item.degree}
                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
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

        <motion.section id="skills" {...sectionMotion} className="pt-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Skills
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <motion.article
                key={group.title}
                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
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

        <motion.section id="projects" {...sectionMotion} className="pt-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
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
                whileHover={prefersReducedMotion ? undefined : { y: -10, rotateX: 1, rotateY: -1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
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

        <motion.section id="experience" {...sectionMotion} className="pt-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Experience
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {experiences.map((exp) => (
              <motion.article
                key={exp.role}
                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
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

        <motion.section id="additional" {...sectionMotion} className="pt-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Additional Information
          </h2>
          <div className="surface-card mt-5 rounded-2xl p-6 text-slate-700 dark:text-slate-300">
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

        <motion.section id="contact" {...sectionMotion} className="pt-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Contact
          </h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <article className="surface-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Let's Connect
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
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
              className="surface-card space-y-3 rounded-2xl p-6"
              action="https://formspree.io/f/your-form-id"
              method="POST"
            >
              <label
                className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
              <label
                className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
              <label
                className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
              <button
                type="submit"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message <FaArrowRight />
              </button>
            </form>
          </div>
        </motion.section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-8 text-center text-sm text-slate-600 sm:px-6 lg:px-8 dark:text-slate-300">
        <p>
          © {new Date().getFullYear()} Umashankar Pradhan. Built with React,
          Tailwind CSS, and Framer Motion.
        </p>
      </footer>
    </div>
  );
}
export default App;
