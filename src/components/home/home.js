import React, { Component } from "react";
import TopSection from "./topSection";
import BottomSection from "./bottomSection";
import "./css/lightMode/home.css";
import "./css/lightMode/topSection.css";
import "./css/lightMode/bottomSection.css";
import "./css/darkMode/topSectionDark.css";
import "./css/darkMode/bottomSection.css";

class Home extends Component {
  render() {
    console.log(this.props.user);

    return (
      <div className="home-container">
        <TopSection />
        <BottomSection />
      </div>
    );
  }
}

export default Home;
