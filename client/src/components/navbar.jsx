import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./../redux/dataitems/actions/actions";
import fire from "./../config/firebaseconfig";
import { Navbar, Button } from "reactstrap";

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
        <Navbar color="success">
          <Button className="btn btn-success" onClick={this.props.refresh}>
            FeedIt
          </Button>

          <Button className="btn btn-danger" onClick={this.logout}>
            Log Out
          </Button>
        </Navbar>
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
