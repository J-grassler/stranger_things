import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {SinglePost} from './';


const PostsView = ({posts, setPosts}) => {
    const {id} = useParams();
    const [post, setPost] = useState(() => {
        return posts.find(singlePost => singlePost._id === id)
    });

    return post ? <SinglePost post={post}></SinglePost> : ''
}



export default PostsView;