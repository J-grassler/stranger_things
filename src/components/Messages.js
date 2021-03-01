import React, { useState } from 'react';
import { sendMessages } from '../api'
import { useParams } from 'react-router-dom';


export const Messages = () => {
    const [messageContent, setMessageContent] = useState('');
    const { postId } = useParams();

    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                sendMessages({ messageContent, postId })
            }}>
                <h2>Send Message</h2>
                <input type='text' value={messageContent} onChange={(event) =>
                    setMessageContent(event.target.value)}></input>
                <input type='submit' />
            </form>
        </div>
    )

}

export default Messages;