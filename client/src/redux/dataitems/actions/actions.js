import { FETCH_POSTS_SUCCESS, FETCH_POSTS_REQUEST } from "./actiontypes";
import { SERVER_URL, FETCH_URL_EXT } from "./../../utils/constants";

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
