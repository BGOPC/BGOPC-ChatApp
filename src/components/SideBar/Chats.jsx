import React from "react";
import UnknownUser from "../../images/unknown.png";

let users = [
  {
    name:"BGOPC",
    img: UnknownUser,
    lstmsg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, dolorum!"
  },
  {
    name:"petranol",
    img: UnknownUser,
    lstmsg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, dolorum!"
  },
  {
    name:"itzsepi",
    img: UnknownUser,
    lstmsg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, dolorum!"
  }
]

const UserChat = ({ name, img, lstmsg }) => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={UnknownUser} alt="Result user" />
        <div className="userChatInfo">
          <span>User Name</span>
          <p className="lstmsg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ut!
          </p>
        </div>
      </div>
    </div>
  );
};

const Chats = () => {
  // return <UserChat />;
  return (
    <div>
    {
      users.map(user => <UserChat key={user.id} name={user.name} img={user.img} lstmsg={user.lstmsg}/>)
    }
    </div>
  )
};

export default Chats;
