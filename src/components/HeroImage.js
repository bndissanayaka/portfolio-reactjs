import React from "react";
import * as Constants from "../Constants";
import "./heroImage.css";

function HeroImage() {
  return (
    <div className="heroImg__page__wrapper">
      <div
        className="heroImage__container"
        style={{
          backgroundImage: `url("../../images/heroImg.svg")`,
        }}
      ></div>
      <div className="heroImg__title">
        <div className="heroImg__title__box">
          <p className="heroImg__profile--name">{Constants.PROFILE_NAME}</p>
          <p className="heroImg__profile--designation">{Constants.PROFILE_DESIGNATION}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
