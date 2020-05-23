import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import DisplayTopicNames from "../TopicNames/DisplayTopicNames";
import $ from "jquery";
import "./Preview-page.css";
import { Accordion, Row, Col } from "react-bootstrap";

import PreviewArticle from "./PreviewArticle";
import SpecialityPreviewArticle from "./SpecialityPreviewArticle";
import ReferralArticle from "../../referralSystem/referralArticle";

class PreviewPage extends React.Component {
  state = {
    selected: false,
    loaded: true,
    showReferralArticle: false,
    referralTopicId: "",
  };

  componentDidMount() {
    $(".arrow-down").on("click", function () {
      $(this).toggleClass("down");
      $(".topics-overview").toggleClass("highlight");
    });
  }

  render() {
    const {
      requiredSpeciality,
      TopicNames,
      Specialities,
      Articles,
    } = this.props;

    const displayArticle = (article) => {
      this.setState({
        SelectedArticle: article,
        selected: true,
      });
    };

    const referralArticle = (id) => {
      this.setState({
        showReferralArticle: true,
        referralTopicId: id,
        selected: false,
      });
    };

    const hideReferralArticle = () => {
      this.setState({
        showReferralArticle: false,
        referralTopicId: "",
        selected: false,
      });
    };
    const { SelectedArticle } = this.state;
    return (
      <div>
        {this.state.loaded ? (
          <div>
            <div className="speciality-container">
              <br />
              <Row>
                <Col className="topic-ovr-container" lg={4}>
                  <Accordion defaultActiveKey="0">
                    <div className="topics-overview">
                      <Accordion.Toggle
                        className="float-right speciality-dropdown arrow-down"
                        eventKey="0"
                      >
                        &nbsp;
                        <i className="fas list-down  fa-chevron-circle-down"></i>
                      </Accordion.Toggle>

                      <h2>
                        <b>{requiredSpeciality}</b>
                      </h2>
                      <h3 className="overview">Topics Overview</h3>
                    </div>
                    <br />

                    <Accordion.Collapse eventKey="0">
                      <div id="specialities" className="Topic-names ">
                        {Specialities &&
                          Specialities.map((item) => {
                            if (item.Name === requiredSpeciality) {
                              return (
                                <div key={item.id}>
                                  <br />
                                  <DisplayTopicNames
                                    SpecialityId={item.id}
                                    TopicNames={TopicNames}
                                    SpecialityName={requiredSpeciality}
                                    Articles={Articles}
                                    displayArticle={displayArticle}
                                    referralArticle={referralArticle}
                                  />
                                  <br />
                                </div>
                              );
                            }
                          })}
                      </div>
                    </Accordion.Collapse>
                  </Accordion>
                </Col>

                <div className="col-12 article-container col-lg-8">
                  <div className="card-container ">
                    {this.state.selected ? (
                      <PreviewArticle
                        TopicNames={TopicNames}
                        SelectedArticle={SelectedArticle}
                      />
                    ) : this.state.showReferralArticle ? (
                      <ReferralArticle
                        topicId={this.state.referralTopicId}
                        hideReferralArticle={hideReferralArticle}
                      />
                    ) : (
                      <SpecialityPreviewArticle
                        Specialities={Specialities}
                        requiredSpeciality={requiredSpeciality}
                      />
                    )}
                  </div>
                </div>
              </Row>
            </div>
          </div>
        ) : (
          <div>loading</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { specialityName } = ownProps.match.params;
  return {
    requiredSpeciality: specialityName,
    TopicNames: state.firestore.ordered.TopicNames,
    Specialities: state.firestore.ordered.Specialities,
    Articles: state.firestore.ordered.Articles,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "TopicNames" },
    { collection: "Specialities" },
    { collection: "Articles" },
  ])
)(PreviewPage);
