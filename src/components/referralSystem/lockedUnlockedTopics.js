import React from "react";
import { connect } from "react-redux";

const lockedUnlockedTopic = ({ topic, credentials, unhideToggle }) => {
  console.log(credentials);
  return (
    <div>
      {topic.locked ? (
        credentials.isLoaded === true && credentials.isEmpty === false ? (
          credentials.UnlockedTopicId &&
          credentials.UnlockedTopicId.length === 0 ? (
            <div className="float-right" key={topic.id}>
              <i className="fas fa-lock"></i>
            </div>
          ) : (
            credentials.UnlockedTopicId &&
            credentials.UnlockedTopicId.map((id) => {
              console.log(id, topic.id);
              if (topic.id === id.id) {
                console.log("Heyegfueia");
                return (
                  <div
                    className="float-right"
                    key={topic.id}
                    onClick={unhideToggle()}
                  >
                    <i className="fas fa-unlock-alt"></i>
                  </div>
                );
              } else {
                return (
                  <div className="float-right" key={topic.id}>
                    <i className="fas fa-lock"></i>
                  </div>
                );
              }
            })
          )
        ) : null
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    credentials: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(lockedUnlockedTopic);
