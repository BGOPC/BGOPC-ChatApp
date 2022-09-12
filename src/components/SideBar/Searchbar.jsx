import React from 'react';
import UnknownUser from "../../images/unknown.png";

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <div className="searchForm">
        <input type="text" placeholder="Search for a user"/>
      </div>
      <div className="userChat">
        <img src={UnknownUser} alt="Result user" />
        <div className="userChatInfo">
          <span>Result User Name</span>
        </div>
      </div>
    </div>
  )
}

export default Searchbar