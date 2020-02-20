import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST
} from "./../actions/actiontypes";

const initialState = {
  posts: [],
  myPost: "",
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

    default:
      return state;
  }
};
