import React from "react";
import { connect } from "react-redux";
import { Update } from "../../../store/actions/learningCardsAction";
import Editor from "../../editor/editor";
import $ from "jquery";

class UpdateArticle extends React.Component {
  state = {};
  componentDidMount() {
    $("#" + this.props.Article.id).appendTo("body");
  }
  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleEditor = html => {
    // e.preventDefault()
    // console.log(e)
    this.setState({
      ArticleContent: html
    });
  };
  handleUpdate = e => {
    e.preventDefault();
    console.log("clicked");
    this.props.updateArticle("Articles", {
      ...this.state,
      id: this.props.Article.id
    });
  };
  render() {
    const { Article } = this.props;
    const currentArticleId = Article.id;
    return (
      <div className=" ">
        <button
          type="button"
          className="btn btn-white text-primary text- float-right"
          data-toggle="modal"
          data-target={"#" + currentArticleId}
        >
          <i className="fas fa-edit"></i>
        </button>

        <div
          className="modal fade"
          id={currentArticleId}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="updateArticleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl " role="document">
            <div className="modal-content newsletter">
              <div className="modal-header">
                <h4 className="modal-title title" id="updateArticleModalLabel">
                  Update a Article
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body content">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      id="ArticleName"
                      className="form-control"
                      onChange={this.handleInput}
                      defaultValue={Article.ArticleName}
                    />
                    <br />
                    <Editor
                      handleEditor={this.handleEditor}
                      defaultValue={Article.ArticleContent}
                    />
                    <button
                      className="btn btn-outline-primary float-right m-3"
                      onClick={this.handleUpdate}
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateArticle: (CollectionName, state) =>
      dispatch(Update(CollectionName, state))
  };
};

export default connect(null, mapDispatchToProps)(UpdateArticle);
