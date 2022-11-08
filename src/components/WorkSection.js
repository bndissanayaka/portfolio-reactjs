import React, { useRef } from "react";
import "./heroImage.css";

function WorkSection() {
    const workSecRef = useRef(null);
    const scrollHandle = (ref) => {
        if (!ref.current) return;
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
  return (
    <div className="home__worksection__container">
      <div className="worksection__box">
        <p className="worksection__box__text">
          <p onClick={() => scrollHandle(workSecRef)}>Work</p>
        </p>
      </div>
      <div className="worksection__verticalLine__box">
        <div className="verticalLine__box__left"></div>
        <div className="verticalLine__box__right"></div>
      </div>
      <div className="worksection__profiles" ref={workSecRef}  >
        <div className="worksection__profiles__box">
          <img src="./images/pf1.svg" alt="pf1" className="profiles__one" />
          <p>Tesla Clone Website</p>
          <img src="./images/pf2.svg" alt="pf2" className="profiles__one" />
          <p>My Personal Website</p>
          <img src="./images/pf3.svg" alt="pf2" className="profiles__one" />
          <p>LinkedIn Clon App</p>
          <img src="./images/pf4.svg" alt="pf2" className="profiles__one" />
          <p>A platformer game with Phaser3</p>
        </div>
      </div>

      <div className="worksection__verticalLine__box">
        <div className="verticalLine__box__left"></div>
        <div className="verticalLine__box__right"></div>
      </div>
      <div className="worksection__about__box">
        <div className="about__box__left">
          <img
            src="./images/me.svg"
            alt="me"
            className="about__box__left--img"
          />
        </div>
        <div className="about__box__right">
          <p className="about__box__right--p1">About</p>
          <p className="about__box__right--p2">
            I’m a passionate software engineer, a self-taught frontend
            developer, a fast learner, innovative, curious, highly motivated
            with a 'can-do' approach.
          </p>
          <p>
            Creative thinking and attention to detail are my underline
            strengths.
          </p>
          <p>
            Switching my programming career to front-end development is a
            long-awaited transition. Having been a backend software engineer for
            3+ years, I am now aspiring to become a good front-end developer.
          </p>
        </div>
      </div>
      <div className="worksection__verticalLine__box">
        <div className="verticalLine__box__left"></div>
        <div className="verticalLine__box__right"></div>
      </div>
      <div className="worksection__box">
        <p className="worksection__box__text">
          <a
            href="mailto:bndissanayaka@gmail.com"
            className="worksection__box__link"
          >
            Contact
          </a>
        </p>
      </div>
      <div className="contact__links">
        <div className="contact__links__icons">
          <div className="worksection__contact__link">
            <a href="https://github.com/bndissanayaka">
              <img src="./images/git.svg" alt="git" className="contact__imgs" />
            </a>
          </div>
          <div className="worksection__contact__link">
            <a href="https://medium.com/@bhagyabhagya">
              <img
                src="./images/medium.svg"
                alt="medium"
                className="contact__imgs"
              />
            </a>
          </div>
          <div className="worksection__contact__link">
            <a href="mailto:bndissanayaka@gmail.com">
              <img
                src="./images/email.svg"
                alt="email"
                className="contact__imgs"
              />
            </a>
          </div>
        </div>
      </div>
      <footer>
        <p className="footer__text">
          &copy; 2022 D.A.B. Nirmani. All rights reserved.
        </p>
        <br />
      </footer>
    </div>
  );
}

export default WorkSection;
