import { Button, Card, Input, Space } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../redux/slices/postSlice";
import LoadingCard from "./LoadingCard";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { post, loading } = useSelector((state) => ({ ...state.post }));
  const [showPost, setShowPost] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost({ title, body }));
    setShowPost(true);
    clearInputs();
  };

  const goBack = () => {
    navigate("/");
  };

  const clearInputs = () => {
    setTitle("");
    setBody("");
  };

  const renderPostBlog = () => {
    return loading ? (
      <LoadingCard count={1} />
    ) : (
      <div className="site-card-border-less-wrapper">
        <Card type="inner" title={post.title}>
          <p>User Id: {post.id}</p>
          <span>{post.body}</span>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Post</h1>
        <Input
          placeholder="Enter Title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          style={{ width: "400px" }}
        />
        <br />
        <br />
        <Input.TextArea
          placeholder="Enter Body"
          type="text"
          onChange={(event) => setBody(event.target.value)}
          value={body}
          style={{ width: "400px" }}
          size="large"
        />
        <br />
        <br />
        <Space>
          <Button onClick={goBack}>Go Back</Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </form>
      <br />
      <br />
      {showPost && <div>{renderPostBlog()}</div>}
    </div>
  );
};

export default CreatePost;
