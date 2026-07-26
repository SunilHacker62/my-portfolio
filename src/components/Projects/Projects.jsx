import "./Projects.css";

// import project1 from "../../assets/projects/project1.png";
// import project2 from "../../assets/projects/project2.png";
// import project3 from "../../assets/projects/project3.png";

const projects = [
  {
    image: "https://via.placeholder.com/600x400?text=Project+1",
    title: "Portfolio Website",
    description: "A modern responsive portfolio built using React.js.",
    tech: ["React", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    image: "https://via.placeholder.com/600x400?text=Project+2",
    title: "Weather App",
    description: "Weather application using API.",
    tech: ["React", "API", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    image: "https://via.placeholder.com/600x400?text=Project+3",
    title: "Todo App",
    description: "Task management application.",
    tech: ["React", "LocalStorage", "CSS"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
            />

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