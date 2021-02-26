import React, { useState }from 'react';
import {Link} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';


const SinglePost = ({post, posts, setPosts, token}) => {

    const [text, setText] = useState('');

    const handleDelete = async () => {
        console.log('tdawg', token)
        const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts/${post._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const {success} = await response.json();
        if(success) {
            const newPosts = posts.filter((p) => p._id !== post._id)
            setPosts(newPosts)
        }
    }
    const handleMessages = async (event) => {
        event.preventDefault();
        const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts/${post._id}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                  content: text,
                }
              })
        });
        const {data} = await response.json();
        setText('')
    }

    return  post ? <>
                <Card>
                    <Link to={`/posts/${post._id}`} > <h3>{ post.title }</h3> </Link>
                    <div>{post.description}</div>
                    <div>{ post.body }</div>
                </Card>
                {(token && !post.isAuthor) && <form onSubmit={handleMessages}>
                    <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="message"></input>
                    <Button type="submit" variant='primary'>Send Message</Button>
                    </form>}
                {post.isAuthor && <Button type="button" variant='danger' onClick={handleDelete}>Delete</Button>}
            </> : ''
}

export default SinglePost;