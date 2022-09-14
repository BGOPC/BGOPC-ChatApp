import React from "react";
import Add from "../images/add.png";
import Cam from "../images/cam.png";
import More from "../images/more.png";
import Messages from "./Chat/Messages";
import Input from "./Chat/Input";

const Chat = () => {
  return (
    <div className="ChatBox">
      <div className="chatInfo">
        <span>UserName</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input />
    </div>
  );
};

export default Chat;
