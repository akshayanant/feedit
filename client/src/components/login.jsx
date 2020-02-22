import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import fire from "./../config/firebaseconfig";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      newEmail: "",
      newPassword: ""
    };
    this.handleChangeLoginEmail = this.handleChangeLoginEmail.bind(this);
    this.handleChangeLoginPassword = this.handleChangeLoginPassword.bind(this);
    this.handleChangeNewEmail = this.handleChangeNewEmail.bind(this);
    this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleNewAcc = this.handleNewAcc.bind(this);
  }

  handleChangeLoginEmail = event => {
    this.setState({ loginEmail: event.target.value });
  };
  handleChangeLoginPassword = event => {
    this.setState({ loginPassword: event.target.value });
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
    console.log(email);
    console.log(password);
    fire.auth().createUserWithEmailAndPassword(email, password);
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
