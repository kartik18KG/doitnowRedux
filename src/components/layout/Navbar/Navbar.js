import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Accordion, Button, Col, Row } from "react-bootstrap";
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../css/darkMode/navbarDark.css";
import "../css/lightMode/navbar.css";
// jQuery-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import $ from "jquery";
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const Navbar = (props) => {
  useEffect(() => {
    // night mode toggle =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    $("#switch").on("click", () => {
      // console.log("switched");
      if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("#switch").removeClass("switched");
      } else {
        $("body").addClass("dark");
        $("#switch").addClass("switched");
      }
    });
    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    // Cross to vo 3 horizontal lines wala
    $(".navbar-toggler-icon").on("click", () => {
      console.log("SHI BOOM A LIKE TADAAADADA BADAADAD DOOM DOMM");
      if ($(".navbar-toggler").attr("aria-expanded") == "false") {
        $(".navbar-toggler").attr("aria-expanded", "true");
      } else {
        $(".navbar-toggler").attr("aria-expanded", "false");
      }
    });
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    // show and hide vo 3 line vala =-=-=-=-=-=-=-=-=
    if (window.innerWidth >= 767) {
      $("body .logo").css({ "font-size": "2rem" });
      $(".dropdown-accordion").removeClass("dropdown-accordion");
    }
    $(window).resize(function () {
      if (window.innerWidth >= 767) {
        $("body .logo").css({ "font-size": "2rem" });
        $(".dropdown-accordion").removeClass("dropdown-accordion");
      } else {
        $("body .logo").css({ "font-size": "1.2rem" });
      }
    });

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  }, []);

  const { auth, credentials } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <div className="navigation-wrap bg-light start-header start-style">
      <div className="container">
        <Accordion className="dropdown-accordion">
          <Row>
            <Col>
              <nav className="navbar navbar-expand-md navbar-light">
                <Link to="/">
                  <span className="navbar-brand logo  nav-link">DoItNow</span>
                </Link>
                <div id="switch" className="switch float-right">
                  <div id="circle"></div>
                </div>

                {auth.uid ? (
                  <div className="points-box ">
                    <span> Points </span>
                    <span>
                      <img
                        src="https://image.flaticon.com/icons/svg/715/715709.svg"
                        className="points-img"
                      />
                    </span>
                    <span> {credentials.points} </span>
                  </div>
                ) : null}

                <div className="signed-links">{auth.isLoaded && links}</div>

                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  <a
                    className="navbar-toggler"
                    type="button"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </a>
                </Accordion.Toggle>
                <Accordion.Collapse
                  className=" "
                  id="navbarSupportedContent"
                  eventKey="5"
                >
                  <div>{auth.isLoaded && links}</div>
                </Accordion.Collapse>
              </nav>
            </Col>
          </Row>
        </Accordion>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    credentials: state.firebase.profile,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
