import React, { Component } from "react";
import FeedPost from "./feedpost";
import NavBar from "./navbar";
import MakePost from "./makepost";
import Login from "./login";
import fire from "./../config/firebaseconfig";
import { connect } from "react-redux";
import { authUser, userLogout } from "./../redux/dataitems/actions/actions";

class Container extends Component {
  constructor(props) {
    super(props);
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.auth(user.email);
      } else {
        this.props.logout();
      }
    });
  }

  render() {
    return (
      <div>
        {!this.props.user ? (
          <Login />
        ) : (
          <div>
            <NavBar />
            <MakePost />
            <FeedPost />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.data.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    auth: user => dispatch(authUser(user)),
    logout: () => dispatch(userLogout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
