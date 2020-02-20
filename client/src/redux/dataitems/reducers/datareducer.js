import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  MAKE_POST
} from "./../actions/actiontypes";

const initialState = {
  posts: [],
  loading: false,
  posting: false
};

export const dataReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
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
