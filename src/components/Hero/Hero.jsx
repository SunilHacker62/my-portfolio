import "./Hero.css";
import profile from "../../assets/profile.png";
import resume from "../../assets/resume.pdf";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h3>Hello, I'm</h3>

        <h1>Sunil Swamy</h1>

        <h2>Frontend React Developer</h2>

        <p>
          Passionate Frontend Developer with experience in React.js,
          JavaScript, HTML, CSS, Git, and GitHub. I enjoy building
          responsive, modern, and user-friendly web applications.
        </p>

        <div className="hero-buttons">
          <a href={resume} download className="btn">
            <FaDownload /> Resume
          </a>

          <a
            href="https://github.com/SunilHacker62"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/p-r-sunil-swamy-246113373/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={profile}
          alt="Profile"
        />
      </div>
    </section>
  );
}

export default Hero;