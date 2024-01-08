import React, { useEffect } from "react";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    desription:
      "Bonjour! I'm Vatthana, a 29-year-old French adventurer who recently completed a level 4 and 5 accelerator course at Mission Ready HQ in Auckland. With a background in crafting delectable pastries in Parisian Michelin-starred restaurants, I've now set my sights on an exciting transformation. Transitioning from a seasoned pastry virtuoso, I've honed my skills as a Full Stack Developer, delving into the realms of DevOps and cloud technologies. Auckland has become my new home, and I'm ready to bring a blend of French artistry and tech innovation to the vibrant Kiwi tech scene.",
    highlights: {
      heading: "Key Highlights:",
      bullets: [
        "Crafting responsive websites and web apps.",
        "Proficient in HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
        "Comfortable with Python and Flask.",
        "Familiar with Git, GitHub, and VS Code.",
        "Hands-on exposure to DevOps practices during my learning journey.",
        "Practiced in Agile methodologies.",
        "Fluent in English and French, ready to converse in code.",
      ],
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {" "}
              {SCREEN_CONSTANTS.desription}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {""}
                Hire Me{" "}
              </button>
              <a href="Vatthana-cv.pdf" download="Vatthana-boulom-cv.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
