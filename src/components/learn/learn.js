import React from "react";
import Card from "./learningCards/Card";
import AddCard from "./learningCards/AddCard";
import { connect } from "react-redux";
import { compose } from "redux";

import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import Footer from "../layout/Footer/Footer";

const Learn = (props) => {
  const { auth } = props;
  // if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div>
      <div className="container learn-container">
        <div className="flex">
          <Card learningCards={props.LearnCards} />
        </div>
        <div className="clear-flex"></div>
        <div className="mb-3 ml-3 mr-3">
          <AddCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    LearnCards: state.firestore.ordered.Specialities,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Specialities" }])
)(Learn);
