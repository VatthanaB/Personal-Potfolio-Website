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
      "Bonjour! I'm Vatthana, a 28-year-old French adventurer currently embracing the vibrant vibes of Auckland, New Zealand. My journey began more than a decade ago, crafting delectable and artful pastries within the esteemed walls of Michelin-starred restaurants and opulent palace hotels across the charming city of Paris. But now, I'm embarking on an exhilarating transformation, charting a new course from being a seasoned pastry virtuoso to a burgeoning Full Stack Developer.",
    highlights: {
      bullets: [
        "Adept at designing, developing, and maintaining responsive websites and web applications.",
        "Proficient in HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB.",
        "Skilled in creating wireframes, mockups, and prototypes.",
        "Experienced in using Git, GitHub, and Heroku.",
        "Passionate about learning new technologies and frameworks.",
        "Fluent in English, French.",
      ],
      heading: "Here are a few Highlights:",
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
