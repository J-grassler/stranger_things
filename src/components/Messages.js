import React from 'react';
import {Card} from 'react-bootstrap';

const Messages = ({user}) => {
    return <>
        <h1>Messages</h1>
        {
            user && user.messages && user.messages.map((message) => {
                return <Card key={message._id}>
                    <div>Post Title:{message.post.title}</div>
                    <div>User:{message.fromUser.username}</div>
                    <div>Content:{message.content}</div>
                </Card>
            })
        }
    </>
}

export default Messages;