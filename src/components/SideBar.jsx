import React from 'react'
import Chats from './SideBar/Chats'
import Navbar from './SideBar/Navbar'
import Searchbar from './SideBar/Searchbar'

const SideBar = () => {
  return (
    <div className='SideBar'>
        <Navbar/>
        <Searchbar/>
        <Chats/>
    </div>
  )
}

export default SideBar