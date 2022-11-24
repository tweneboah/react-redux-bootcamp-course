import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
  SEARCH_POST_FAILURE,
} from "./postsActionTypes";
//action creators

//request
const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

//success
const fetchPostsSuccess = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

//failure
const fetchPostsFailure = error => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

//=====Fetch single post====
//request
const fetchPostRequest = () => {
  return {
    type: SEARCH_POST_REQUEST,
  };
};

//success
const fetchPostSuccess = post => {
  return {
    type: SEARCH_POST_SUCCESS,
    payload: post,
  };
};

//failure
const fetchPostFailure = error => {
  return {
    type: SEARCH_POST_FAILURE,
    payload: error,
  };
};

//=====Fetch single post Action Creator====
export const searchPostAction = id => {
  return async dispatch => {
    dispatch(fetchPostRequest());

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const post = response.data;
      dispatch(fetchPostSuccess(post));
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchPostFailure(errorMsg));
    }
  };
};

//Create async action creator
export const fetchPostsAction = () => {
  return async dispatch => {
    try {
      dispatch(fetchPostsRequest());
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = response.data;
      dispatch(fetchPostsSuccess(posts));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};
