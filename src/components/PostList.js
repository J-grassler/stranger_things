import React from 'react';
import { useHistory } from 'react-router-dom';
import { fetchToken } from '../api';

export default function PostList(props) {
    const {
        post
    } = props


    console.log(post);
    const postId = post._id;


    const history = useHistory();


    function handleDelete(event) {
        event.preventDefault();
        fetch(`https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts/${postId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${fetchToken()}`
            }
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);
        alert('Successfully deleted, please refresh the page.');
    }

    if (!post) {
        return <div></div>
    }

    if (post.active === true) {
        return (
            <div>
                <h2 className="PostList">{post.title}</h2>
                <h3 className="PostList">{post.description}</h3>
                <h3 className="PostList">Price: {post.price}</h3>
                <h3 className="PostList">Seller: {post.author.username}</h3>
                <h3 className="PostList">Location: {post.location}</h3>
                <h3 className="PostList">Will Deliver: {post.willDeliver}</h3>

                {post.isAuthor ? (
                    <div>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                ) :
                    <button onClick={() => history.push(`/messages/${postId}`)}>
                        Send Message
    </button>}

            </div>
        )
    }

    else return <div></div>
}