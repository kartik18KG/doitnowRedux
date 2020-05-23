import React from "react";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import DeleteButton from "../DeleteButton";
import UpdateCard from "./UpdateCard";
import "./card2.css";
import SomeButton from "../../layout/Button/button";

class Card extends React.Component {
  render() {
    const { learningCards, isAdmin } = this.props;
    console.log(isAdmin);
    return (
      <div className="learn-container">
        <div className="container pt-4">
          <div className="row">
            {learningCards &&
              learningCards.map((item) => {
                console.log(item);
                return (
                  <div key={item.id} className="col-lg-6">
                    <div className="card">
                      <div className="imgBx">
                        <img className="image" src={item.imageUrl} />
                      </div>
                      <div className="contentBx">
                        <h2> {item.Name}</h2>

                        {isAdmin === true ? (
                          <Row>
                            <Col>
                              <UpdateCard currentCard={item} />
                              <DeleteButton
                                collectionName="Specialities"
                                DocId={item.id}
                                size="small"
                              />
                            </Col>
                          </Row>
                        ) : null}

                        <NavLink to={"/learn/" + item.Name}>
                          <SomeButton buttonText={"Start Now"} />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isAdmin: state.admin.isAdmin,
  };
};

export default connect(mapStateToProps)(Card);
