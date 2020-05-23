import React from "react";
import { addSubscriber } from "../../../store/actions/authAction";
import { connect } from "react-redux";
const firebase = require("firebase");

require("firebase/functions");

class FooterNewsletterForm extends React.Component {
  state = {
    email: "",
    message: "",
  };

  render() {
    console.log(this.props);
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
      const functions = firebase.functions();
      const sendEmail = functions.httpsCallable("sendEmail");

      // Email stuff --=-=-==-==--==--==--==--=-=--==-=-
      const data = {
        email: this.state.email,
        subject: "Hey There !!!",
        text: "You are now signed up for DoItNow Newsletter ",
      };
      // -=-=-=-=-=-=-=--=-=-=-==---=---==-=--=-=-=-==--=

      sendEmail(data)
        .then((res) => {
          console.log(res);
          if (res.data.errorCode == 200) {
            this.props.addSub({ email: this.state.email });
            this.setState({ message: "Yay you're subscribed for newsletter" });
          } else {
            this.setState({ message: "Error signing up for newsletter" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <div className="right-col">
        <h1>Our Newsletter</h1>
        <div className="border"></div>
        <p>
          {this.state.message == ""
            ? "Enter Your Email here to subscribe for Newsletter"
            : this.state.message}
        </p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="text"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
            className="txtb"
            placeholder="Enter Your Email"
          />
          <input type="submit" value="submit" className="btn" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSub: (email) => dispatch(addSubscriber(email)),
  };
};

export default connect(null, mapDispatchToProps)(FooterNewsletterForm);
