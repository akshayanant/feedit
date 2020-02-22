import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./../redux/dataitems/actions/actions";

class FeedPost extends Component {
  componentDidMount() {
    this.props.refresh();
  }
  render() {
    return (
      <div className="feed-post-container">
        {this.props.posts.map(post => {
          return (
            <div className="feed-post">
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

const mapDispatchToProps = dispatch => {
  return {
    refresh: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedPost);
