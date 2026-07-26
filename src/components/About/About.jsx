import "./About.css";
import {
  FaUserGraduate,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p className="about-description">
          I'm a passionate Frontend Developer specializing in React.js and
          JavaScript.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <FaUserGraduate className="icon" />
            <h3>Education</h3>
            <p>B.E. in Electronics & Communication</p>
          </div>

          <div className="about-card">
            <FaBriefcase className="icon" />
            <h3>Experience</h3>
            <p>Former Associate at TCS</p>
          </div>

          <div className="about-card">
            <FaMapMarkerAlt className="icon" />
            <h3>Location</h3>
            <p>Karnataka, India</p>
          </div>

          <div className="about-card">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p>prsunilswamy@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;