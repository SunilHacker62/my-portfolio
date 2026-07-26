import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", level: "95%" },
    { icon: <FaCss3Alt />, name: "CSS3", level: "90%" },
    { icon: <FaJs />, name: "JavaScript", level: "88%" },
    { icon: <FaReact />, name: "React", level: "90%" },
    { icon: <FaGitAlt />, name: "Git", level: "85%" },
    { icon: <FaGithub />, name: "GitHub", level: "90%" },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.name}</h3>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
              >
                {skill.level}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;