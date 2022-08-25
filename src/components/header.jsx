import React from 'react'

function Header(props) {
    return (
        <div className="panel-heading">
            <h3 className="panel-title">
                <i className="icon wb-chat-text" aria-hidden="true"></i> {props.title}
            </h3>
        </div>
    )
}

export default Header