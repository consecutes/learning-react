import React from "react";

function TodoItem(props) {
    return(
        <li>
            <h2>{props.task}</h2>
            <i className="ph-check-circle"></i>
        </li>
    )
}

export default TodoItem;