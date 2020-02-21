import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./../redux/dataitems/actions/actions";
import fire from "./../config/firebaseconfig";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    console.log("Logging out!");
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="btn btn-outline-warning"
            onClick={this.props.refresh}
          >
            FeedIt
          </button>

          <button className="btn btn-outline-danger" onClick={this.logout}>
            Log Out
          </button>
        </nav>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refresh: () => dispatch(fetchPosts())
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
