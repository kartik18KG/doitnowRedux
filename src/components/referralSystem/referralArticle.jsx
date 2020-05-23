import React, { useContext } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { unlockTopic } from "../../store/actions/referralActions";
import "./referralSystem.css";

const ReferralArticle = ({
  credentials,
  auth,
  topicId,
  UnlockTopic,
  hideReferralArticle,
}) => {
  console.log(credentials);
  console.log(auth);

  const runFunctions = () => {
    UnlockTopic(topicId);
    hideReferralArticle();
  };
  return (
    <div className="card">
      <h1 className="material-icons card-header">Referral Article</h1>
      <div className="card-no-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolorum
        architecto optio earum. Architecto dolor ullam mollitia atque natus? Qui
        velit nesciunt optio perspiciatis, blanditiis harum vero tempore
        voluptates quae quod beatae sint iste assumenda, vel dicta,
        necessitatibus voluptatibus molest
        <hr />
        <div>
          {auth.uid ? (
            credentials.isLoaded === true && credentials.isEmpty === false ? (
              <div>
                <div>
                  <span>
                    <b>Your refer code is : </b>
                    {credentials.referCode}
                  </span>
                </div>
                <span>
                  <b>Your refer Link is: </b>
                  <Link to={"/signup/" + credentials.referCode}>
                    http://localhost:3000/signup/{credentials.referCode}
                  </Link>
                  {/* Add a Copying button here */}
                </span>
                <div>
                  {credentials.points > 0 ? (
                    <Button varient="primary" onClick={runFunctions}>
                      Unlock the article
                    </Button>
                  ) : (
                    <Button varient="primary" disabled>
                      Unlock the article
                    </Button>
                  )}
                </div>
              </div>
            ) : null
          ) : (
            <div>
              <span>
                <b>
                  Sign up to get your refer code then start referring and earn
                  points
                </b>
                <Link
                  to={"/signup/" + credentials.referCode}
                  className="btn btn-primary"
                >
                  Sign Up
                </Link>
              </span>
            </div>
          )}
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    UnlockTopic: (id) => dispatch(unlockTopic(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReferralArticle);
