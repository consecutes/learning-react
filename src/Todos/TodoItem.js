import React from "react";

function TodoItem(props) {
    return(
        <li>
            <h2>{props.task}</h2>
            <i class="ph-check-circle-bold"></i>
        </li>
    )
}

export default TodoItem;