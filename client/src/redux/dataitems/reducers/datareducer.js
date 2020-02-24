import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  MAKE_POST,
  AUTH_USER,
  USER_LOGOUT
} from "./../actions/actiontypes";

const initialState = {
  user: null,
  posts: [],
  loading: false,
  posting: false
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        user: action.payload
      };

    case USER_LOGOUT:
      return {
        ...state,
        user: null
      };

    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };

    case MAKE_POST:
      return {
        ...state,
        posts: action.payload
      };

    default:
      return state;
  }
};
