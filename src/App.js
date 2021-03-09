import React from "react";
import "./App.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaTelegramPlane,
  FaMediumM,
} from "react-icons/fa";

function App() {
  return (
    <section className="profile">
      <div className="left">
        <img src="https://avatars.githubusercontent.com/u/22817703?v=4" alt="" />
      </div>
      <div className="right">
        <h1>
          Matheus <span>Fortunato</span>
        </h1>
        <p className="description">
          Fullstack javascript developer and Mobile.
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/matheus-fortunato-14513b195/"
              target="__blank"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://github.com/mfortunat0" target="__blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/mfortunato20" target="__blank">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://t.me/mfortunato20" target="__blank">
              <FaTelegramPlane />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@matheus.xmaz10" target="__blank">
              <FaMediumM />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default App;
