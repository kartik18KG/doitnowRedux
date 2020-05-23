import React from "react";
import { connect } from "react-redux";
import { Update } from "../../../store/actions/learningCardsAction";
import Editor from "../../editor/editor";
import $ from "jquery";

class UpdateCard extends React.Component {
  componentDidMount() {
    console.log("sad");
    $("#" + this.props.currentCard.id).appendTo("body");
  }
  state = {};

  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleEditor = html => {
    this.setState({
      ArticleContent: html
    });
  };
  handleUpdate = e => {
    e.preventDefault();
    this.props.updateCard("Specialities", this.state);
  };
  render() {
    // console.log(this.props);
    // {currentCard.ArticleContent}
    const { currentCard } = this.props;
    // console.log(currentCard.ArticleContent)
    const currentId = currentCard.id;
    // console.log(currentCard);
    return (
      <span>
        <i
          className="fa fa-edit"
          type="button"
          data-toggle="modal"
          data-target={"#" + currentId}
        >
          <strong></strong>
        </i>

        <div
          className="modal fade"
          id={currentId}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content newsletter">
              <div className="modal-header">
                <h4 className="modal-title title" id="exampleModalLabel">
                  Update Card
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
                      id="Name"
                      placeholder="Name of the Card"
                      defaultValue={currentCard.Name}
                      className="form-control"
                      onChange={this.handleInput}
                    />
                    <br />
                    <input
                      type="text"
                      id="imageUrl"
                      placeholder="Image Url"
                      className="form-control "
                      defaultValue={currentCard.imageUrl}
                      onChange={this.handleInput}
                    />
                    <br />
                    <Editor
                      handleEditor={this.handleEditor}
                      defaultValue={currentCard.ArticleContent}
                    />
                    <button
                      className="btn button-outline float-right m-3"
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
      </span>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCard: (CollectionName, state) =>
      dispatch(Update(CollectionName, state))
  };
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCard);
