import React from "react";
import "../css/darkMode/footerDark.css";
import "../css/lightMode/footer.css";
import FooterSocialMedia from "./footerSocialMedia";
import FooterNewsletterForm from "./footerNewsletter";
const Footer = () => {
  return (
    <div className="footer-cont">
      <footer>
        <div className="footer-container">
          <div className="left-col">
            <span className="logo">DoItNow</span>
            <FooterSocialMedia />
            <p className="rights-text">
              &copy; 2020 DoItNow , All Rights Reserved
            </p>
          </div>
          <FooterNewsletterForm />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
