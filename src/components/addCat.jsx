import React, { Component } from "react";
import { connect } from "react-redux";
import { addCat } from "../redux/actions";

class AddCat extends Component {
  state = {
    petName: "",
    activity: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { petname, activity } = this.state;
    this.props.addCat({ name: petname, activity });
    this.setState({ petname: "", activity: "" });
  };

  render() {
    return (
      <form onClick={this.handleSubmit}>
        <input
          type="text"
          name="petName"
          placeholder="Cat's Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="activity"
          placeholder="Activity"
          onChange={this.handleChange}
        />
        <button type="submit">Submit Cat</button>
      </form>
    );
  }
}

export default connect(null, { addCat })(AddCat);
