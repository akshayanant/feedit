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
      <div className=" border justify-content-around border-light rounded-sm bg-light">
        <form
          onSubmit={this.handleSubmit}
          className="d-flex align-items-center"
        >
          <textarea
            rows="5"
            cols="60"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Say Something!"
            className="border-bottom rounded border-warning bg-light"
          />

          <input type="submit" value="Post" className="btn btn-dark" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submit: post => dispatch(makePost(post))
  };
};

export default connect(null, mapDispatchToProps)(MakePost);
