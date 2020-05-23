import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";
import { LoginWithGoogle } from "../../store/actions/authAction";
import { Redirect, NavLink } from "react-router-dom";
import "./css/lightMode/signIn.css";
import "./css/darkMode/signInDark.css";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleGoogleLogin = (e) => {
    e.preventDefault();
    this.props.GoogleLogin();
  };

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="login-form-container">
        <div className="login-div">
          <div className="logo">
            <div class="imagesContainer">
              <img
                className="pia"
                src="https://www.svgrepo.com/show/301068/coffee-cup-coffee.svg"
                alt=""
              />
            </div>
          </div>
          <div className="title">Hey !!! , Welcome Back...</div>

          <form onSubmit={this.handleSubmit}>
            <div className="fields">
              <div className="username">
                <svg fill="#999" viewBox="0 0 1024 1024">
                  <path
                    className="path1"
                    d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"
                  ></path>
                </svg>
                <input
                  onChange={this.handleChange}
                  type="email"
                  id="email"
                  className="user-input"
                  required
                  placeholder="email"
                />
              </div>
              <div className="password">
                <svg fill="#999" viewBox="0 0 1024 1024">
                  <path
                    className="path1"
                    d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"
                  ></path>
                </svg>
                <input
                  required
                  onChange={this.handleChange}
                  type="password"
                  id="password"
                  className="pass-input"
                  placeholder="password"
                />
              </div>
            </div>
            <button type="submit" className="signin-button">
              <div className="center">LOGIN</div>
            </button>

            {/* <div className="text-danger">{status}</div> */}
            <div className="not-link">
              <NavLink to="/login/forget">Forgot password?</NavLink> or{" "}
              <NavLink
                className="text-primary"
                to="/signup/Enter Referral Code Here"
              >
                Sign up
              </NavLink>{" "}
              or
            </div>
          </form>
          <button
            onClick={this.handleGoogleLogin}
            className="signin-button signin-with-google"
          >
            <div className="center">
              Continue With{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
                className="google-logo"
                alt="Google Logo"
              />
            </div>
          </button>
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    GoogleLogin: () => dispatch(LoginWithGoogle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

// <div className="container">
//   <form onSubmit={this.handleSubmit}>
//     <h4 className="grey-text text-darken-3">Log In </h4>
//     <div className="form-group">
//       <label htmlFor="email">Email</label>
//       <input
//         className="form-control"
//         type="email"
//         id="email"
//         onChange={this.handleChange}
//       />
//     </div>
//     <div className="form-group">
//       <label htmlFor="password">Password</label>
//       <input
//         className="form-control"
//         type="password"
//         id="password"
//         onChange={this.handleChange}
//       />
//     </div>
//     <div className="form-group">
//       <button className="btn btn-danger">Login</button>
//     </div>
//   </form>
//   OR
//   <div>
//     <button
//       onClick={this.handleGoogleLogin}
//       className=" btn btn-light LoginWithGoogle"
//     >
//       Login With Google{" "}
//       <img
//         src="https://www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg"
//         alt="Google Logo"
//       />
//     </button>
//   </div>
// </div>;
