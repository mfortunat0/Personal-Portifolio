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
  FaMediumM,
  FaTwitter
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
        <a href="https://nodejs.org/en/" target="__blank">
          <FaNodeJs />
        </a>
        <a href="https://reactjs.org/" target="__blank">
          <FaReact />
        </a>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="__blank">
          <FaJsSquare />
        </a>
      </div>
      <address>
        <FaPeriscope /> Ubatuba, Brazil
      </address>

      <div className="Contact">
        <a href="https://github.com/mfortunat0" target="__blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/matheus-fortunato-14513b195/"
              target="__blank">
          <FaLinkedinIn />
        </a>
        <a href="https://t.me/mfortunato20" target="__blank">
          <FaTelegramPlane />
        </a>
        <a href="skype:matheus.nascimento105?chat">
          <FaSkype />
        </a>
        <a  href="mailto:matheus.xmaz10@gmail.com">
          <FaGoogle />
        </a>
        <a  href="https://medium.com/@matheus-xmaz10">
          <FaMediumM />
        </a>
        <a  href="https://twitter.com/mfortunat00">
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}

export default App;
