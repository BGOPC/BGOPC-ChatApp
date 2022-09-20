import React from "react";
import Chats from "./SideBar/Chats";
import Navbar from "./SideBar/Navbar";
import Searchbar from "./SideBar/Searchbar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Searchbar />
      <Chats />
    </div>
  );
};

export default Sidebar;
