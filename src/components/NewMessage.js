import React, { useState } from "react";
import { hitAPI } from "../api";

const NewMessage = ({ post: { title, _id } }) => {
  const [reply, setReply] = useState("");
  return (
    <div className="NewMessage">
      <form
          className="messages"
        onSubmit={(event) => {
          event.preventDefault();
          hitAPI("POST", `/posts/${_id}/messages`, {
            message: { content: reply },
          }).then( () => {
            setReply("");
          }
          );

        }}
      >
        <h3>Reply to { title }:</h3>
        <textarea
          type="scroll"
          value={ reply }
          onChange={ (event) => {
            setReply(event.target.value);
          }}
          placeholder="Drag the bottom right corner for more space...."
        ></textarea>
        <br></br>
        <button className="Submit">Submit</button>
      </form>
    </div>
  );
};

export default NewMessage;
