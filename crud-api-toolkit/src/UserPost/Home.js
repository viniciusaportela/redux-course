import React, { useEffect, useState } from "react";
import { Button, Card, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  getPost,
  setEdit,
  updatePost,
} from "../redux/slices/postSlice";
import LoadingCard from "./LoadingCard";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, post, edit, body } = useSelector((state) => ({
    ...state.post,
  }));

  const [id, setId] = useState();
  const [bodyText, setBodyText] = useState("");

  useEffect(() => {
    if (body) {
      setBodyText(body);
    }
  }, [body]);

  const fetchUserPost = () => {
    if (!id) {
      window.alert("Please PRovide ID");
    } else {
      dispatch(getPost(id));
      setId("");
    }
  };

  const dispatchUpdatePost = () => {
    dispatch(updatePost({ id: post.id, title: post.title, body: bodyText }));
    endEditMode();
  };

  const startEditMode = () => {
    dispatch(setEdit({ edit: true, body: post.body }));
  };

  const endEditMode = () => {
    dispatch(setEdit({ edit: false, body: "" }));
  };

  const handleBodyChange = (event) => {
    setBodyText(event.target.value);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Fetch Post</h1>
      <Input
        placeholder="Enter User Id"
        type="number"
        onChange={(event) => setId(event.target.value)}
        value={id}
        style={{ width: "300px" }}
      />
      <br />
      <br />
      <Space size="small" style={{ margin: 10 }}>
        <Button type="primary" onClick={fetchUserPost}>
          Fetch User Post
        </Button>
        <Button type="primary" onClick={() => navigate("/createPost")}>
          Create User Post
        </Button>
      </Space>
      <br />
      <br />
      {loading ? (
        <LoadingCard count={1} />
      ) : (
        <>
          {post && (
            <div className="site-card-border-less-wrapper">
              <Card type="inner" title={post.title}>
                <p>User Id: {post.id}</p>
                {edit ? (
                  <>
                    <Input.TextArea
                      rows={4}
                      value={bodyText}
                      onChange={handleBodyChange}
                    />
                    <Space
                      size="middle"
                      style={{ marginTop: 5, marginLeft: 5 }}
                    >
                      <Button type="primary" onClick={dispatchUpdatePost}>
                        Save
                      </Button>
                      <Button onClick={endEditMode}>Cancel</Button>
                    </Space>
                  </>
                ) : (
                  <span>{post.body}</span>
                )}
              </Card>
              {!edit && (
                <Space
                  size="middle"
                  style={{ marginTop: 35, marginLeft: 5, float: "right" }}
                >
                  <Button
                    type="primary"
                    danger
                    onClick={() => dispatch(deletePost(post.id))}
                  >
                    Delete
                  </Button>
                  <Button type="primary" onClick={startEditMode}>
                    Edit
                  </Button>
                </Space>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
