import React from "react";
import UnknownUser from "../../images/unknown.png";

let msgs = [
  {
    msg:"Hello",
  },
  {
    msg:"Hi",
  },
  {
    msg:"How are you?",
  },
  {
    msg:"good",
  },
  {
    msg:"good",
  },{
    msg:"good",
  },{
    msg:"good",
  },{
    msg:"good",
  },{
    msg:"good",
  },{
    msg:"good",
  },{
    msg:"good",
  },{
    msg:"good",
  },
]

const Message = ({msg}) => {
  return (
      <div className="message">
        <div className="messageInfo">
          <img src={UnknownUser} alt="" />
          <span>just now</span>
        </div>
        <div className="messageContent">
          <p>Hello</p>
          <img src={UnknownUser} alt="" />
        </div>
      </div>
  );
};
const Messages = () => {
  return (
    <div className="messages">
      {
        msgs.map(msg => <Message msg={msg.msg} />)
      }
    </div>
  )
};

export default Messages;