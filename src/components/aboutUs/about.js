import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./css/lightMode/about.css";
import TopSlide from "./TopSlide";
import AboutDin from "./aboutDin";
import AboutUs from "./aboutUs";
import Footer from "../layout/Footer/Footer";

class About extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div className="about-page">
        <div className="scroller">
          <section className="about-header">
            <TopSlide />
          </section>
          <section className="main">
            <AboutDin />
          </section>
          <section id="aboutus">
            <AboutUs />
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(About);
