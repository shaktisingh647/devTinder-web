import React from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {
    const {targetUserId} = useParams();
    
  return (
    <div>
      chat
    </div>
  )
}

export default Chat
