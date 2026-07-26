import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>prsunilswamy@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 XXXXXXXXXX</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Location</h3>
              <p>Karnataka, India</p>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/SunilHacker62"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/p-r-sunil-swamy-246113373/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea rows="6" placeholder="Your Message"></textarea>
          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;