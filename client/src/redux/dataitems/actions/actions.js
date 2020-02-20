import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  MAKE_POST
} from "./actiontypes";
import {
  SERVER_URL,
  FETCH_URL_EXT,
  MAKE_POST_EXT
} from "./../../utils/constants";

const fetchPostsSuccess = data => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data
  };
};

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostRequest());
    fetch(SERVER_URL + FETCH_URL_EXT)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => dispatch(fetchPostsSuccess(data)));
  };
};

const fetchPostRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  };
};

export const makePost = post => {
  return dispatch => {
    fetch(SERVER_URL + MAKE_POST_EXT, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post: post,
        ownerID: 1
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        dispatch({
          type: MAKE_POST,
          payload: data
        });
      });
  };
};