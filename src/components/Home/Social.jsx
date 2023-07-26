import React from "react";

export const Social = () => {
  return (
    <div className="home__social">
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
            href="mailto:adildev00@gmail.com"
            target="_blank"
            className="home__social-icon"
            rel="noreferrer"
          >
            <i className="bx bx-mail-send contact__card-icon"></i>
          </a>



    </div>
  );
};
