import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./../redux/dataitems/actions/actions";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <button onClick={this.props.refresh}>Refresh</button>
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
