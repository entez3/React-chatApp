import React from 'react'
import { useState } from 'react'

function Footer(props) {

    // const input="dsd"
    const [input, setInput] = useState("")
    const handleSubmit = () => {
        props.handleSubmit(input)
        setInput("")
    }
    return (
        <div className="panel-footer">
            <form>
                <div className="input-group">
                    <input
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}

                        type="text"
                        className="form-control"
                        placeholder="Say something"
                    />
                    <span className="input-group-btn">
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleSubmit}>
                            Send
                        </button>
                    </span>
                </div>

            </form>
        </div>
    )
}

export default Footer