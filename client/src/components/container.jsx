import React, { Component } from "react";
import FeedPost from "./feedpost";
import NavBar from "./navbar";
import MakePost from "./makepost";

class Container extends Component {
  render() {
    return (
      <div>
        <MakePost />
        <NavBar />
        <FeedPost />
      </div>
    );
  }
}

export default Container;
