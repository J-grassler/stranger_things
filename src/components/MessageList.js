import React from 'react';
import { useHistory } from 'react-router-dom';

export default function MessageList(props) {
    const {
        message,
        currentUser
    } = props


    console.log(message);


    const history = useHistory();

    return (
        <div>
            <div>
                <h4 className="profileMessage">{message.post.title}</h4>
                <p className="profileMessageContent">{message.content}</p>

                {message.fromUser.username === currentUser ?
                    <button onClick={() => history.push(`/messages/${message.post._id}`)}>Send Another Message</button> :
                    <button onClick={() => history.push(`/messages/${message.post._id}`)}>Reply</button>
                }

            </div>
        </div>
    )
}
