import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./article.css";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";

class selectedArticle extends React.Component {
  state = {
    value: window.location.href,
    copied: false,
  };

  render() {
    const { Articles } = this.props;
    console.log(Articles);
    const { specialityId, topicId, Id } = this.props.match.params;
    const url = window.location.href;
    console.log(url);
    return (
      <div>
        <div className="selected-article">
          {Articles &&
            Articles.map((article) => {
              if (
                article.id === Id &&
                article.SpecialityId === specialityId &&
                article.TopicId === topicId
              ) {
                return (
                  <Row key={article.id} className="full-view-article p-2">
                    <div className="share-icons">
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          this.state.copied ? (
                            <Tooltip id={"tooltip-right"}>
                              Link Copied to ClipBoard
                            </Tooltip>
                          ) : (
                            <Tooltip id={"tooltip-right"}>
                              Copy link to clipboard
                            </Tooltip>
                          )
                        }
                      >
                        <div id="link" className="link-icon">
                          <CopyToClipboard
                            text={this.state.value}
                            onCopy={() => this.setState({ copied: true })}
                          >
                            <i className="fas fa-link"></i>
                          </CopyToClipboard>
                        </div>
                      </OverlayTrigger>
                      <div></div>

                      <br />
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Tooltip id={"tooltip-right"}>Share via mail</Tooltip>
                        }
                      >
                        <div className="mail-icon">
                          <a
                            className="mail-icon"
                            href={`mailto:?Subject=${
                              "Article on " + article.ArticleName
                            }&Body=Hey look i just found out this Amazing article on "${
                              article.ArticleName
                            }",Check it out : ${url}`}
                            target="_top"
                          >
                            <i className="fas fa-envelope"></i>
                          </a>
                        </div>
                      </OverlayTrigger>
                      <br />
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Tooltip id={"tooltip-right"}>
                            Share on WhatsApp
                          </Tooltip>
                        }
                      >
                        <div>
                          <a
                            className="whatsapp-icon"
                            href={`https://api.whatsapp.com/send?text=Hey look i just found out this Amazing article on "${article.ArticleName}",Check it out : ${url}`}
                            target="_blank"
                          >
                            <i className="fab fa-whatsapp"></i>
                          </a>
                        </div>
                      </OverlayTrigger>
                    </div>

                    <Col sm={3}>
                      ads here
                      <br />
                      ads here
                      <br />
                      ads here
                      <br />
                      ads here
                      <br />
                      ads here
                      <br />
                      ads here
                      <br />
                    </Col>

                    <Col id="top" sm={6}>
                      <div className="ql-snow">
                        <div
                          className="full-article ql-editor"
                          dangerouslySetInnerHTML={{
                            __html: article.ArticleContent,
                          }}
                        ></div>
                      </div>
                      <a href="#">
                        <i
                          id="go-to-top"
                          className=" top-icon fas fa-angle-double-up"
                        ></i>
                      </a>
                    </Col>

                    <Col sm={3}>
                      ads here
                      <br />
                      ads here
                      <br />
                      ads here
                      <br />
                      ads here
                      <br />
                      ads here
                      <br />
                      ads here
                      <br />
                    </Col>
                  </Row>
                );
              }
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Articles: state.firestore.ordered.Articles,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Articles" }])
)(selectedArticle);
