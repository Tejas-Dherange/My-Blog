import React from "react";
import AppwriteService from "../appwrite/config";
import { useState, useEffect } from "react";
import { PostForm, Container, postCard } from "../components";
function AllPost() {
  const [post, setPost] = useState([]);
  useEffect(() => {}, []);
  AppwriteService.getPosts([]).then((post) => {
    if (post) {
      setPost(post.documents);
    }
  });
  return (
    <div>
      <Container>
        <div className="flex flex-wrap">
          {post.map((posts) => (
            <div className={`w-1/4 p-2 key={posts.$id}`}>
            <postCard  post={post} />
        </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
