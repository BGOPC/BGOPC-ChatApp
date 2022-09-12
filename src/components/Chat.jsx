import React from 'react'
import Input from './Chat/Input'
import Message from './Chat/Message'

const Chat = () => {
  return (
    <div className="ChatBox">
        <Message/>
        <Input/>
    </div>
  )
}

export default Chat