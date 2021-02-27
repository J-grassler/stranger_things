import React from "react";

const Messages = ({ messages }) => {
    console.log(messages, {messages})
  return (
    <div className="Messages">
      {messages.length == 0 ? (
        <h2 className="messageText">No new messages.</h2>
      ) : (
        messages.map((message, idx) => {
          return (
            <div className="message" key={idx} >
              <h3>From: {message.fromUser.username}</h3>
              <h3>Content: {message.content}</h3>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Messages;