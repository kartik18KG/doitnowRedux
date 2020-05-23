import React from "react";
import { connect } from "react-redux";
import { Add } from "../../../store/actions/learningCardsAction";
import Editor from "../../editor/editor";
import "./addButton.css";

class AddCard extends React.Component {
  state = {};
  handleInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleEditor = (html) => {
    this.setState({
      ArticleContent: html,
    });
  };
  handleAdd = (e) => {
    e.preventDefault();
    this.props.AddCard("Specialities", this.state);
  };
  render() {
    return (
      <div className="container m-0 p-0 ">
        <div className="addButton-container">
          <button
            type="button"
            className=" btn addButton"
            data-toggle="modal"
            data-target="#AddCard"
          >
            <span>
              <strong> Add Card </strong>
            </span>
            <svg>
              <polyline
                className="o1"
                points="0 0, 150 0, 150 55, 0 55, 0 0"
              ></polyline>
              <polyline
                className="o2"
                points="0 0, 150 0, 150 55, 0 55, 0 0"
              ></polyline>
            </svg>
          </button>
        </div>

        <div
          className="modal fade"
          id="AddCard"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content newsletter">
              <div className="modal-header">
                <h4 className="modal-title title" id="exampleModalLabel">
                  Add a Speciality Card
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
                      className="form-control"
                      onChange={this.handleInput}
                    />
                    <br />
                    <input
                      type="text"
                      id="imageUrl"
                      placeholder="Image Url"
                      className="form-control "
                      onChange={this.handleInput}
                    />
                    <br />
                    <Editor handleEditor={this.handleEditor} defaultValue="" />
                    <button
                      className="btn btn-lg btn-block m-3 addButton"
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

const mapDispatchToProps = (dispatch) => {
  return {
    AddCard: (CollectionName, state) => dispatch(Add(CollectionName, state)),
  };
};

export default connect(null, mapDispatchToProps)(AddCard);
