import React, { Component } from "react";
import { connect } from "react-redux";

class FeedPost extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => {
          return (
            <div>
              <h3>{post.ownerID}</h3>
              <p>{post.timestamp}</p>
              <p>{post.post}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.data.posts
  };
};

export default connect(mapStateToProps, null)(FeedPost);
