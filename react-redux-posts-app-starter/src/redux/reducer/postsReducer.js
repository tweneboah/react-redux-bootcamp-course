import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
  SEARCH_POST_FAILURE,
} from ".././actions/postsActionTypes";

const initialState = {
  loading: false,
  posts: [],
  error: "",
  post: {},
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case FETCH_POSTS_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    // ======Search single post=====
    case SEARCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_POST_SUCCESS:
      return {
        loading: false,
        // push the new post to the posts array
        posts: [action.payload],
      };
    case SEARCH_POST_FAILURE:
      return {
        loading: false,
        post: {},
        error: action.payload,
      };

    default:
      return state;
  }
};
