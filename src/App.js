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
        <p>
          Fullstack javascript developer and Mobile.
        </p>
        <br/>
        <p className="description">
          Hello, I am a student of computer engineering.<br />
          I started programming in 2015 in a technical course, I programmed in c/c ++,
          java, php during the course until 2016.<br />
          In 2018 I started to study javascript and until today I continue to improve.<br />
          My goals for improvement are Node.js React.js and React Native 
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
