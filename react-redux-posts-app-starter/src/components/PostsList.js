import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction } from "../redux/actions/posts";
import SearchPost from "./SearchPost";
import "./Posts.css";

const PostsList = () => {
  const { posts, loading, error } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsAction());
  }, []);
  console.log(posts);
  return (
    <>
      <SearchPost />
      <div className="posts-list">
        <h1>Total Posts {posts?.length}</h1>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2 style={{ color: "red" }}>{error}</h2>
        ) : (
          posts?.map(post => (
            <div className="post-details" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PostsList;
