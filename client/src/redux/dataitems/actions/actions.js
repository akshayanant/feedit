import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  MAKE_POST,
  AUTH_USER,
  USER_LOGOUT,
  CREATE_USER
} from "./actiontypes";
import {
  SERVER_URL,
  FETCH_URL_EXT,
  MAKE_POST_EXT
} from "./../../utils/constants";

export const authUser = user => {
  return {
    type: AUTH_USER,
    payload: user
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT
  };
};

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

export const makePost = (email, post) => {
  return dispatch => {
    fetch(SERVER_URL + MAKE_POST_EXT, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post: post,
        ownerID: email
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch({
          type: MAKE_POST,
          payload: data
        });
      });
  };
};
