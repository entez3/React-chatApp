import React from 'react'
import { useState } from 'react'

function Footer(props) {

    const [input, setInput] = useState("")
    return (
        <div className="panel-footer">
            <form>
                <div className="input-group">
                    <input
                        onChange={(e) => {
                            setInput(e.target.value)
                            console.log(input);
                        }}

                        type="text"
                        className="form-control"
                        placeholder="Say something"
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">
                            Send
                        </button>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Footer