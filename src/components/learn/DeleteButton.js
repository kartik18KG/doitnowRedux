import React from "react";
import { connect } from "react-redux";
import { Delete } from "../../store/actions/learningCardsAction";

const DeleteButton = props => {
  const { collectionName, DocId, size } = props;
  const handleDelete = e => {
    props.Delete(collectionName, DocId);
  };
  return (
    <span>
      {size === "small" ? (
        <button className="btn text-danger " onClick={handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>
      ) : (
        <button
          className="btn btn-outline-danger btn-lg btn-block mr-3 mb-2 mt-2"
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
    </span>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    Delete: (collectionName, id) => {
      dispatch(Delete(collectionName, id));
    }
  };
};

export default connect(null, mapDispatchToProps)(DeleteButton);
