import React from "react";
import './SettingsButton.css';

function SettingsButton() {
    return(
        <section className="CreateTodoButton">
            <button type="button" title="Options">
                <i className="ph-gear"></i>
            </button>
        </section>
    )
}

export { SettingsButton };