import React from "react";
import { useTypewriter } from "react-simple-typewriter";

import "./Profile.css";

export default function Profile() {
  const [typeEffect] = useTypewriter({
    words: [
      "Enthusiastic Dev ",
      "Full Stack Developer ",
      "DevOps & Cloud Technologies ",
      "Agile Methodologies ",
      "React/Typescript ",
      "MERN Stack Developer ",
      "NodeJS & ExpressJS  ",
      "MongoDB & SQL ",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {/* <a href="https://www.facebook.com/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa fa-instagram"></i>
              </a> */}
              <a href="https://github.com/VatthanaB">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/vatthana-boulom/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M <span className="highlight-text">Vatthana</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <span>{typeEffect}</span>
              </h1>
              <span className="profile-role-tagline">
                🥐 From Pastries to Pixels: A Delectable Transition
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() =>
                window.open(
                  "https://projects-portfolio-frontend-601c352fdbb7.herokuapp.com/",
                  "_blank"
                )
              }
            >
              {""}
              My Projects{" "}
            </button>
            <a href="Vatthana-cv.pdf" download="Vatthana-boulom-cv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
