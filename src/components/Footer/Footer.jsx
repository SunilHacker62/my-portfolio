import "./Footer.css";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Sunil Swamy</h2>

      <p>
        React Developer | Frontend Developer
      </p>

      <div className="footer-icons">

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

      <p className="copyright">
        Made with <FaHeart className="heart"/> using React ❤️
      </p>

      <p>
        © 2026 Sunil Swamy. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;