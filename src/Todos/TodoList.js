import React from "react";
import './TodoList.css';

function TodoList(props) {
    return (
        <section className="ToDoList">
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export default TodoList;