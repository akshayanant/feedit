import React, { Component } from "react";
import { connect } from "react-redux";
import { makePost } from "./../redux/dataitems/actions/actions";

class MakePost extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.submit(this.state.value);
    this.setState({ value: "" });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Say Something :
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Post" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submit: post => dispatch(makePost(post))
  };
};

export default connect(null, mapDispatchToProps)(MakePost);
