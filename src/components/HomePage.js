import React from "react";
import HeroImage from "./HeroImage";
import WorkSection from "./WorkSection";
import './homepage.css';

function HomePage() {
  return (
    <div className="homepage__container">
      <HeroImage />
      <WorkSection />
    </div>
  );
}

export default HomePage;
