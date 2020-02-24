import React, { Component } from "react";
import { connect } from "react-redux";
import { makePost } from "./../redux/dataitems/actions/actions";
import { FormGroup, Form, Input, Button } from "reactstrap";

class MakePost extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.submit(this.props.user, this.state.value);
    this.setState({ value: "" });
    event.preventDefault();
  }

  handleCancel(event) {
    this.setState({ value: "" });
    event.preventDefault();
  }

  render() {
    return (
      <Form className="make-post-form">
        <Input
          type="textarea"
          id="exampletext"
          size="lg"
          bgsize="lg"
          rows="5"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Say Something!"
        />
        <div className="post-buttons">
          <div>
            <Button color="secondary" onClick={this.handleCancel}>
              Cancel
            </Button>
          </div>
          <div>
            <Button color="success" onClick={this.handleSubmit}>
              Post
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submit: (email, post) => dispatch(makePost(email, post))
  };
};

const mapStateToProps = state => {
  return {
    user: state.data.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MakePost);
