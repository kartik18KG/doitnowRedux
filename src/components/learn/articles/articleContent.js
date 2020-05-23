import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const ArticleContent = props => {
  const { Articles, ArticleId } = props;
  return (
    <div className="container">
      {Articles &&
        Articles.map(item => {
          if (ArticleId === item.id) {
            return (
              <div key={item.id}>
                <h2 className="text-center">{item.ArticleName}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: item.ArticleContent }}
                ></div>
              </div>
            );
          }
        })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    Articles: state.firestore.ordered.Articles
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Articles" }])
)(ArticleContent);
