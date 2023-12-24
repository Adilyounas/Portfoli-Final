import React from "react";
import "./About.css";
import about from "../../assets/adil.jpg";
import CV from "../../assets/Adil Resume.pdf";
import Info from "./Info";

const About = () => {
  const downloadFile = () => {
    fetch(CV)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Adil_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading file:", error));
  };

  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src={about} className="about__img" alt="" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            As A MERN Stack developer I created Responsive layouts, Stylish, Eye
            Catching + 100% Working
          </p>
          <button onClick={downloadFile} className="button button--flex">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
