// imports
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
//

// Auth
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
//

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
//

// Article page
import selectedArticle from "./components/learn/articles/SelectedArticle";
import PreviewPage from "./components/learn/preview/PreviewPage";
import Articles from "./components/learn/articles/articles";
//

// Components

import Home from "./components/home/home";
import About from "./components/aboutUs/about";
import Learn from "./components/learn/learn";
import Dashboard from "./components/adminPanel/Dashboard";
import Navbar from "./components/layout/Navbar/Navbar";

//

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/learn" component={Learn} />
            <Route path="/signup/:referCode" component={SignUp} />
            <Route path="/login" component={SignIn} />
            <Route
              exact
              path="/:specialityId/:topicId/:Id"
              component={selectedArticle}
            />
            <Route
              exact
              path="/learn/:specialityName"
              component={PreviewPage}
            />
            <Route
              exact
              path="/learn/:specialityName/:topicName"
              component={Articles}
            />
            <Route exact path="/adminpanel" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default compose(connect(mapStateToProps))(App);
