import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern responsive portfolio built using React.js.",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/SunilHacker62/my-portfolio",
    demo: "#",
  },
  {
    title: "Weather App",
    description: "Weather application using API.",
    tech: ["React", "API", "CSS"],
    github: "https://github.com/SunilHacker62/weather-app",
    demo: "https://weather-app-two-mocha-c0pfuj4a8h.vercel.app/",
  },
  {
    title: "Todo App",
    description: "Todo application using React and LocalStorage.",
    tech: ["React", "LocalStorage", "CSS"],
    github: "https://github.com/SunilHacker62/todo-app",
    demo: "https://todo-app-bice-three-16.vercel.app/",
  },
  {
    title: "Task Manager",
    description:
      "Full-stack task management application",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind",],
    github: "https://github.com/SunilHacker62/task-manager",
    demo: "https://task-manager-nine-nu-70.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;