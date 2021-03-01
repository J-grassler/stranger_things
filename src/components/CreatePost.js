import React from 'react';
import { fetchToken } from '../api';

export const createPost = async ({
  postTitle,
  postDescription,
  postPrice,
  postLocation,
  willDeliver }) => {


  await fetch('https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${fetchToken()}`
    },
    body: JSON.stringify({
      post: {
        title: postTitle,
        description: postDescription,
        price: postPrice,
        location: postLocation,
        willDeliver: willDeliver,
      }
    })
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
}



export const CreatePostForm = ({
  token,
  postId,
  postTitle,
  setTitle,
  postDescription,
  setDescription,
  postPrice,
  setPrice,
  postLocation,
  setLocation,
  willDeliver,
  setDelivery }) => {



  return (
    <div>
      <h2 className="Posts">New Post:</h2>
      <form onSubmit={event => {
        event.preventDefault();
        console.log(postTitle, token);
        localStorage.getItem(`${token}`);
        createPost({ 
          token, 
          postTitle, 
          postDescription, 
          postPrice, 
          postLocation, 
          willDeliver, 
          postId 
        });
      }} >
        <label className="titles">Title: </label>
        <input type='text' required onChange={(event) => setTitle(event.target.value)} value={postTitle} >
        </input>
        <label className="description">Description: </label>
        <input type='text' required onChange={(event) => setDescription(event.target.value)} value={postDescription} >
        </input>
        <label className="price">Price: </label>
        <input type='text' required onChange={(event) => setPrice(event.target.value)} value={postPrice} >
        </input>
        <label className="location">Location: </label>
        <input type='text' required onChange={(event) => setLocation(event.target.value)} value={postLocation} >
        </input>
        <label className="deliver">Will Deliver? </label>
        <input type='checkbox' value={willDeliver} onClick={(event) => setDelivery(event.target.checked)} >
        </input>
        <button type='submit' className="submit">Create Post</button>
      </form>
    </div>
  )
}