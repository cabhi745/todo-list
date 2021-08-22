import React from 'react'

function AddTask (props) {
    return (
        <div className = "AddTask">
            <form>
                <label htmlFor ="taskValue">Task : </label>
                <input className = "textInput" type = "text" name = "taskValue" id = "taskValue"></input>
            </form>
        </div>
    )
}

export default AddTask