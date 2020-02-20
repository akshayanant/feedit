import React, { Component } from "react";
import FeedPost from "./feedpost";
import NavBar from "./navbar";

class Container extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FeedPost />
      </div>
    );
  }
}

export default Container;
