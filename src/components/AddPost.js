import React, { useEffect, useState } from 'react';

const AddPost = ({token, posts, setPosts}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title: title,
                    description: description,
                    price: price
                }   
            })
        });
        const {data} = await response.json();
        setTitle('');
        setDescription('');
        setPrice('');
        setPosts([...posts, data.post])
    }

    return <> 
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}placeholder="title"></input>
            <input type="text" value={description} onChange={(event) => setDescription(event.target.value)}placeholder="description"></input>
            <input type="text" value={price} onChange={(event) => setPrice(event.target.value)}placeholder="price"></input>
            <button type="submit" placeholder="Create Post">Post</button>
        </form>
    </>
}


export default AddPost;