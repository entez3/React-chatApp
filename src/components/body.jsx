import React from 'react'
import Chats from './chats'

function Body(props) {
    const chats = props.chatsList.map((chat) => {
        const isLeft = 'recive' === chat.type;
        return <Chats
            type={chat.type}
            message={chat.message}
            time={chat.time}
            gravatar={(isLeft ? (props.gravatar.user2) : (props.gravatar.user1))}
            isLeft={isLeft} />
    })
    return (
        <div className="panel-body">
            <div className="chats">
                {chats}
            </div>
        </div>
    )
}

export default Body