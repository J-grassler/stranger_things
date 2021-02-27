import React, { useState } from "react";
import { fetchPost, deletePost } from "../api";

const CreatePost = (props) => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const [selectDeliver, setSelectDeliver] = useState("no");

  const { postList, setPostList, isLoggedIn } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      description,
      location,
      price,
      willDeliver,
      title,
    };

    fetchPost(newPost).then((result) => {
      const post = result.post;
      const postsCopy = postList.slice();
      postsCopy.push(post);
      setPostList(postsCopy);
    });
  };

  const handleChange = (event) => {
    setSelectDeliver(event.target.value);
    if (event.target.value === "yes") {
      setWillDeliver(true);
    } else {
      setWillDeliver(false);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <form onSubmit={handleSubmit} className="postForm">
          <h3>Create Post</h3>
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <br />
          <textarea
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <input
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <br />
          <input
            type="text"
            value={price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <br />
          <select
            value={selectDeliver}
            onChange={(e) => {
              handleChange(e);
            }}
            name="Will Deliver"
          >
            <option value="no">No</option>

            <option value="yes">Yes</option>
          </select>
          <label>Will Deliver</label>
          <br />
          <input className="Submit" type="submit" value="Submit"></input>
        </form>
      ) : null}

          </div>
  );
};

export default CreatePost;