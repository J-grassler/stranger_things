import React from "react";
import { fetchMessages } from "../api"

const MessageList = ({ messageList }) => {
    console.log(messageList, {messageList})
  return (
    <div className="MessageList">
      {messageList.length == 0 ? (
        <h2 className="messageText">No new messages.</h2>
      ) : (
        messageList.map((message, idx) => {
          return (
            <div
              className="message"
              key={idx}
              style={{ border: "1px solid black"}}
            >
              <h3>From: {message.fromUser.username}</h3>
              <h3>Content: {message.content}</h3>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MessageList;