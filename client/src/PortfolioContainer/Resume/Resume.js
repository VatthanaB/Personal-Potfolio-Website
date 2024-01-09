import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Last Employement", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "Javascript", ratingPercentage: 80 },
    { skill: "TypeScript", ratingPercentage: 70 },
    { skill: "React", ratingPercentage: 80 },
    { skill: "HTML / CSS", ratingPercentage: 80 },
    { skill: "Tailwind /Bootstrap", ratingPercentage: 70 },
    { skill: "NodeJS / Express ", ratingPercentage: 70 },
    { skill: "MongoDB / MySQL", ratingPercentage: 30 },
    { skill: "Github, Git ", ratingPercentage: 70 },
    { skill: "Flutter", ratingPercentage: 30 },
    { skill: "Python", ratingPercentage: 20 },
  ];

  const projectDetails = [
    {
      title: "School Projects - MERN Stack Development",
      duration: { fromDate: "2023", toDate: "2024" },
      description:
        "Studied MERN Stack development at Mission Ready HQ, covering frontend, backend, and GitHub version control.",
      subHeading: "Areas of Study: MERN Stack, Frontend, Backend, GitHub",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        " A personal portfolio website to showcase my work and skills.",
      subHeading: "Technologies Used : ReactJS, HTML, CSS, Javascript",
    },
    {
      title: "Projects Portfolio Website",
      duration: { fromDate: "2023", toDate: "2023" },
      description: " A personal blog website to showcase my projects.",
      subHeading: "Technologies Used : ReactJS, HTML, CSS, Javascript",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Mission Ready HQ"}
        subHeading={"Cloud & DevOps Accelerator - Level 5 & 6"}
        fromDate={"2023"}
        toDate={"2024"}
      />
      <ResumeHeading
        heading={"Mission Ready HQ"}
        subHeading={"Full Stack Developper Accelerator - Level 4"}
        fromDate={"2023"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Ecole Hôtelière de Paris"}
        subHeading={"Vocational Degree in Pastry & Restaurant Desserts"}
        fromDate={"2014"}
        toDate={"2016"}
      />
    </div>,

    <div
      className="resume-screen-container resume-screen-container-employement "
      key="work-experience"
    >
      <div className="work-experience-container">
        <ResumeHeading
          heading={"Executive Pasty Chef"}
          subHeading={"La Petite Fourchette & Copain Bakery - Auckland "}
          fromDate={"2018"}
          toDate={"2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Led a team of up to 8 staff members at La Petite Fourchette & Copain
            Bakery in Auckland, New Zealand, from 2018 to 2023, overseeing
            pastry operations and ensuring exceptional quality.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Designed and executed pastry menus, optimizing production efficiency
            and maintaining high standards of taste and presentation.
          </span>
          <br />
          <span className="resume-description-text">
            Mentored and trained junior pastry chefs, fostering skill
            development and a cohesive team environment.
          </span>
          <br />
          <span className="resume-description-text">
            Innovated and introduced new pastry creations, enhancing the
            bakery's reputation for unique and delicious offerings.
          </span>
          <br />
        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skils"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Board Games 🎲"
        description="Strategising and rolling dice - board games turn tabletops into realms of rivalry and camaraderie."
      />
      <ResumeHeading
        heading="Reading 📚"
        description="From pixels to paper, I'm an avid explorer of words, venturing through stories to expand my mind."
      />
      <ResumeHeading
        heading="Coding 💻"
        description="Cracking code is my art; with each keystroke, I sculpt solutions and bring ideas to life."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
