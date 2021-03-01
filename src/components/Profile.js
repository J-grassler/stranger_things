import React, { useEffect, useState } from 'react';
import { userProfile } from '../api';
import { fetchToken } from '../api';
import PostList from './PostList';
import MessageList from './MessageList';


const Profile = () => {

    const [messages, setMessages] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState('');


    useEffect(() => {
        if (fetchToken()) {
            userProfile(fetchToken())
                .then(({ data }) => setMessages(data.messages))
        }
    }, [])

    useEffect(() => {
        if (fetchToken()) {
            userProfile(fetchToken())
                .then(({ data }) => setUserPosts(data.posts))
        }
    }, [])

    useEffect(() => {
        if (fetchToken()) {
            userProfile(fetchToken())
                .then(({ data }) => setCurrentUser(data.username))
        }
    }, [])


    console.log(userPosts);
    console.log(messages)


    if (currentUser) {
        return (
            <div>
                <h1 className="profileName">{currentUser}'s Profile</h1>
                <h2 className="profileMessages">Sent and Recieved Messages</h2>
                {messages ? messages.map((message, index) => <MessageList currentUser={currentUser} key={index} message={message} className="profileMessage" />) : null}
                <h2 classname="profilePosts">Posts</h2>
                {userPosts ? userPosts.map((post, index) => <PostList key={index} post={post} className="profilePost" />) : null}
            </div>
        )
    } else return (
        <div>
            <h1 className="profileLogin">Log in to access information.</h1>
        </div>)
}


export default Profile;