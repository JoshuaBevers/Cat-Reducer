import React from "react";
import { connect } from "react-redux";
import { eat } from "../redux/actions";

const Activity = ({ activity, eat }) => (
  <>
    <h1> What is the cat doing?</h1>
    <p>The cat is... {activity} </p>
    <button onClick={() => eat()}></button>
  </>
);

const mapStateToProps = (state) => {
  const { activity } = state;
  return activity;
};

export default connect(
  mapStateToProps, // what do I want?
  { eat } // what do I want to do?
)(Activity);
