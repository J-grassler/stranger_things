import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPosts, fetchToken } from '../api';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import Search from './Search'


const Posts = ({ setPosts, posts }) => {

  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetchPosts(fetchToken())
      .then(({ data }) => {
        setPosts(data.posts)
        setSearch(data.posts)
      })
  }, [])


  console.log(posts);

  const searchPosts = (searchTerm) => {
    setSearch(posts.filter((post) => {
      const postName = post.title.toLowerCase();
      return postName.includes(searchTerm.toLowerCase());
    }))
  };

  return (
    <div>
      <h1 className="intro">Posts</h1>
      <Search searchPosts={searchPosts} />
      <Link to='/createpost'><button className="button">New Post</button></Link>
      {search.map((post, index) => <PostList key={index} post={post}></PostList>)}
    </div>
  )
}

export default Posts;