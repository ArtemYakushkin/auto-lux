import React from "react";
import "./Hero.css";
import Aside from "../Aside/Aside";
import Slider from "../Slider/Slider";

const Hero = () => {
  return (
    <div className="hero">
      <Aside />
      <Slider />
    </div>
  );
};

export default Hero;
