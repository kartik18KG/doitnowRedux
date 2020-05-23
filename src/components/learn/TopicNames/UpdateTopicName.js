import React from "react";
import { connect } from "react-redux";
import { Update } from "../../../store/actions/learningCardsAction";

class UpdateTopicName extends React.Component {
  state = {};
  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleUpdate = e => {
    e.preventDefault();
    this.props.updateTopicName("TopicNames", {
      ...this.state,
      id: this.props.Topic.id
    });
  };
  render() {
    const { Topic } = this.props;
    // console.log(Topic)
    return (
      <div className="container m-0 p-0 ">
        <button
          type="button"
          className="btn text-primary text-"
          data-toggle="modal"
          data-target={"#" + Topic.id}
        >
          <i className="fas fa-edit"></i>
        </button>

        <div
          className="modal fade"
          id={Topic.id}
          tabIndex="-1"
          role="dialog"
          aria-labelledby={Topic.id + "label"}
          aria-hidden="true"
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content newsletter">
              <div className="modal-header">
                <h4 className="modal-title title" id={Topic.id + "label"}>
                  Update Topic Name
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
                      className="form-control"
                      defaultValue={Topic.Name}
                      onChange={this.handleInput}
                    />
                    <br />
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
    updateTopicName: (CollectionName, state) =>
      dispatch(Update(CollectionName, state))
  };
};

export default connect(null, mapDispatchToProps)(UpdateTopicName);
