import React from "react"
import './Task.css'

const Task = (props) => {
    return (
        <div className="Task">
            <p>{props.children}</p>
            <button className="delete" onClick={props.deleteHandler}>Delete</button>
        </div>
    )
}

export default Task