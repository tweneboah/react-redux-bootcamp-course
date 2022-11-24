import React, { useEffect } from "react";
import SearchPost from "./SearchPost";
import "./Posts.css";

const PostsList = () => {
  return (
    <>
      <SearchPost />
      <div className="posts-list">
        <h1>Total Posts 10</h1>
        <div className="post-details">
          <h3>Post 1</h3>
          <p>Post Content</p>
        </div>
      </div>
    </>
  );
};

export default PostsList;
