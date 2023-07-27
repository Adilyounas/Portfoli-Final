import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <a href="/">
          {" "}
          <h1 className="footer__title">Adil Younas</h1>
        </a>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/Adilyounas"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/adil-younas-25a857277/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands uil-linkedin-alt"></i>
          </a>

          <a
            href="https://wa.me/+923040053938"
            target="_blank"
            className="home__social-icon"
            rel="noreferrer"
          >
            <i className="bx bxl-whatsapp contact__card-icon"></i>
          </a>

          <a
            href="https://www.behance.net/adilyounas2"
            target="_blank"
            className="home__social-icon"
            rel="noreferrer"
          >
            <i class="fa-brands uil-behance"></i>
          </a>

          <a
            href="mailto:adildev00@gmail.com"
            target="_blank"
            className="home__social-icon"
            rel="noreferrer"
          >
            <i className="bx bx-mail-send contact__card-icon"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Copyright. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
