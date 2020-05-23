import React from "react";
import "./css/lightMode/topSlide.css";
import "./css/darkMode/topSlideDark.css";

const TopSlide = () => {
  return (
    <div className="top-slide">
      <div className="ovr-wave">
        <h1>Hello there,</h1>

        <div className="subheading-about">
          We created <span className="logo text-dark">DoItNow</span> to provide
          You Quality resources to learn From
        </div>
        <div>
          <img
            src="https://gifimage.net/wp-content/uploads/2018/05/scroll-gif-10.gif"
            className="scroll-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSlide;
