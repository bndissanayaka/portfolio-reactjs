import React, { useRef } from "react";
import "./heroImage.css";
import * as Constants from "../Constants";
import { dataArray, linkArray } from "../dataArray";

function WorkSection() {
  const workSecRef = useRef(null);
  const scrollHandle = (ref) => {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="home__worksection__container">
      <div className="worksection__box">
        <p className="worksection__box__text">
          <p onClick={() => scrollHandle(workSecRef)}>{Constants.MAIN_TEXT1}</p>
        </p>
      </div>
      <div className="worksection__verticalLine__box">
        <div className="verticalLine__box__left"></div>
        <div className="verticalLine__box__right"></div>
      </div>
      <div className="worksection__profiles" ref={workSecRef}>
        <div className="worksection__profiles__box">
          {dataArray.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="pf" className="profiles__one" />
              <p>{item.txt}</p>
            </div>
          ))}
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
          <p className="about__box__right--p1">{Constants.MAIN_TEXT2}</p>
          <p className="about__box__right--p2">{Constants.ABOUT_P1}</p>
          <p className="about__box__right--p2">{Constants.ABOUT_P2}</p>
          <p className="about__box__right--p2">{Constants.ABOUT_P3}</p>
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
            {Constants.MAIN_TEXT3}
          </a>
        </p>
      </div>
      <div className="contact__links">
        <div className="contact__links__icons">
          {linkArray.map((item,index) => (
              <div className="worksection__contact__link" key={index}>
              <a href={item.href}>
                <img
                  src={item.image}
                  alt="img"
                  className="contact__imgs"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <p className="footer__text">
          &copy; {Constants.COPYRIGHT_TEXT}
        </p>
        <br />
      </footer>
    </div>
  );
}

export default WorkSection;
