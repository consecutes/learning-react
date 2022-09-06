import React from "react";
import './Header.css';
import meses from '../utils/months';

const fecha = new Date();

function Header(props) {
    return(
        <header>
            <div>
                <span className="fechaActual">
                    <h1>{fecha.getDate()}</h1>
                    <span className="mesAño">
                        <p>{meses[fecha.getMonth()]}</p>
                        <p>{fecha.getFullYear()}</p>
                    </span>
                </span>
                <h1>Viernes</h1>
            </div>
            {
                props.children
            }
        </header>
    )
};

export { Header };