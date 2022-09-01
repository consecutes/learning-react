import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton() {
    return(
        <section className="CreateTodoButton">
            <button type="button" title="si">
                <i class="ph-gear"></i>
            </button>
        </section>
    )
}

export { CreateTodoButton };