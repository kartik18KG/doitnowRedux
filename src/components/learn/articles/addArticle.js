import React from "react";
import { connect } from "react-redux";
import { Add } from "../../../store/actions/learningCardsAction";
import Editor from "../../editor/editor";
import $ from "jquery";

class AddArticle extends React.Component {
  componentDidMount() {
    $("#" + this.props.SpecialityId + this.props.TopicId).appendTo("body");
  }

  state = {};
  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    // console.log(this.state);
  };
  handleEditor = html => {
    this.setState({
      ArticleContent: html
    });
  };
  handleAdd = e => {
    e.preventDefault();
    this.props.AddArticle("Articles", {
      ...this.state,
      SpecialityId: this.props.SpecialityId,
      TopicId: this.props.TopicId
    });
  };
  render() {
    // console.log(this.props);
    const { SpecialityId, TopicId } = this.props;
    return (
      <div className="container m-0 p-0 ">
        <button
          type="button"
          className="btn btn-white text-danger text-"
          data-toggle="modal"
          data-target={"#" + SpecialityId + TopicId}
        >
          <i className="fas fa-plus"></i>
        </button>

        <div
          className="modal fade"
          id={SpecialityId + TopicId}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content newsletter">
              <div className="modal-header">
                <h4 className="modal-title title" id="">
                  Add a Article
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
                      placeholder="Article Name"
                      className="form-control"
                      onChange={this.handleInput}
                    />
                    <br />

                    <Editor handleEditor={this.handleEditor} defaultValue="" />

                    <button
                      className="btn btn-outline-primary float-right m-3"
                      onClick={this.handleAdd}
                    >
                      Add
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
    AddArticle: (CollectionName, state) => dispatch(Add(CollectionName, state))
  };
};

export default connect(null, mapDispatchToProps)(AddArticle);
