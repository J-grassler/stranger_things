import React from "react";
import { useHistory } from "react-router-dom";
import { deletePost } from "../api";


const PostList = (props) => {
  const { postList, isLoggedIn, setPostList, setActivePost } = props;

  const history = useHistory();
  const handleDelete = (id, index) => {
    deletePost(id).then(() => {
      const postsCopy = postList.slice();
      postsCopy.splice(index, 1);
      setPostList(postsCopy.reverse());
    });
  };
  return (
    <div className="postList">
      {postList.reverse().map((post, idx) => {
        return (
          <div className="post" key={ idx }>
            { console.log(post) }
            <h3>{ post.title }</h3>
            <span>{ post.author.username }</span>
            <div>{ post.price }</div>
            <div>{ post.description }</div>
            <div>{ post.location }</div>
            <div>{ post.willDeliver ? "Delivery: Yes" : "Delivery: No" }</div>
            { post.isAuthor ? (
              <button
                onClick={() => {
                  handleDelete(post._id, idx);
                }}
              >
                Delete
              </button>
            ) : null }
            { !post.isAuthor && isLoggedIn ? (

              <button
              onClick={() => {
                setActivePost(post);
                history.push("/reply")
              }}
              >
                Reply
              </button>
        ) : null
        }
          </div>
        );
      })}
    </div>
  );
};

export default PostList;