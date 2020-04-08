import React from "react";
import { connect } from "react-redux";
import { setActivity } from "../redux/actions";

import UpdateName from "../components/nameInput";

const Activity = ({ activity, name, setActivity }) => (
  <>
    <h1> What is the cat doing?</h1>
    <p>
      {name} is {activity}
    </p>
    <button onClick={() => setActivity("napping")}>Napping</button>
    <button onClick={() => setActivity("playing")}>Playing</button>
    <button onClick={() => setActivity("eating")}>Eating</button>
    <UpdateName />
  </>
);

const mapStateToProps = (state) => {
  const { activity, name } = state;
  return { activity, name };
};

// const mapDispatchToProps = (dispatch) => {
//   return { setActivity: (activity) => dispatch(setActivity(activity)) };
// }; this is long hand of what the set activity on 31 is doing.

export default connect(
  mapStateToProps, // what do I want?
  { setActivity } // what do I want to do?
)(Activity);
