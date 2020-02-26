import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import fire from "./../config/firebaseconfig";
import { SERVER_URL, CREATE_USER_EXT } from "./../redux/utils/constants";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      newFirstName: "",
      newLastName: "",
      newEmail: "",
      newPassword: ""
    };
    this.handleChangeLoginEmail = this.handleChangeLoginEmail.bind(this);
    this.handleChangeLoginPassword = this.handleChangeLoginPassword.bind(this);
    this.handleChangeNewEmail = this.handleChangeNewEmail.bind(this);
    this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleNewAcc = this.handleNewAcc.bind(this);
    this.handleChangeNewFirstName = this.handleChangeNewFirstName.bind(this);
    this.handleChangeNewLastName = this.handleChangeNewLastName.bind(this);
  }

  handleChangeLoginEmail = event => {
    this.setState({ loginEmail: event.target.value });
  };
  handleChangeLoginPassword = event => {
    this.setState({ loginPassword: event.target.value });
  };
  handleChangeNewFirstName = event => {
    this.setState({ newFirstName: event.target.value });
  };
  handleChangeNewLastName = event => {
    this.setState({ newLastName: event.target.value });
  };
  handleChangeNewEmail = event => {
    this.setState({ newEmail: event.target.value });
  };
  handleChangeNewPassword = event => {
    this.setState({ newPassword: event.target.value });
  };

  handleLogin = () => {
    const email = this.state.loginEmail;
    const password = this.state.loginPassword;
    fire.auth().signInWithEmailAndPassword(email, password);
  };

  handleNewAcc = () => {
    const email = this.state.newEmail;
    const password = this.state.newPassword;
    const firstName = this.state.newFirstName;
    const lastName = this.state.newLastName;
    console.log(email);
    console.log(password);
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        fetch(SERVER_URL + CREATE_USER_EXT, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            firstName: firstName,
            lastName: lastName
          })
        })
      );
    console.log(firstName, lastName, email);
  };

  render() {
    return (
      <Form className="login-form">
        <h1>FeedIt</h1>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            onChange={this.handleChangeLoginEmail}
          />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            onChange={this.handleChangeLoginPassword}
          />
        </FormGroup>
        <Button
          className="btn-lg btn-dark btn-block"
          onClick={this.handleLogin}
        >
          Login
        </Button>
        <Label className="pt-5">Not a Member yet?</Label>
        <Label className="pb-3">Sign up with your details!</Label>

        <FormGroup>
          <Label>First Name</Label>
          <Input
            placeholder="First Name"
            onChange={this.handleChangeNewFirstName}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            placeholder="Last Name"
            onChange={this.handleChangeNewLastName}
          />
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            onChange={this.handleChangeNewEmail}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            onChange={this.handleChangeNewPassword}
          />
        </FormGroup>
        <Button className="btn btn-success" onClick={this.handleNewAcc}>
          Sign up
        </Button>
      </Form>
    );
  }
}

export default Login;
