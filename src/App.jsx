import React from "react";
import "./App.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaTelegramPlane,
  FaPeriscope,
  FaSkype,
  FaGoogle,
  FaNodeJs,
  FaReact,
  FaJsSquare,
} from "react-icons/fa";

function App() {
  return (
    <section>
      <img
        className="Profile"
        src="https://github.com/mfortunat0.png"
        alt="Profile image"
      />
      <h1>Matheus N. Fortunato</h1>
      <h2>Full-Stack Developer</h2>
      <div className="Stacks">
        <a>
          <FaNodeJs />
        </a>
        <a>
          <FaReact />
        </a>
        <a>
          <FaJsSquare />
        </a>
      </div>
      <address>
        <FaPeriscope /> Ubatuba, Brazil
      </address>

      <div className="Contact">
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaLinkedinIn />
        </a>
        <a href="">
          <FaTelegramPlane />
        </a>
        <a href="">
          <FaSkype />
        </a>
        <a href="">
          <FaGoogle />
        </a>
      </div>
    </section>
  );
}

export default App;
