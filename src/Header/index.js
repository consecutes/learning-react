import React from "react";
import './Header.css';
import meses from '../utils/months';

const fecha = new Date();

function Header() {
    return(
        <header>
            <div>
                <h1>{fecha.getDate()}</h1>
                <span>
                    <p>{meses[fecha.getMonth()]}</p>
                    <p>{fecha.getFullYear()}</p>
                </span>
            </div>

            <div>
                <h1>Viernes</h1>
            </div>
        </header>
    )
};

export { Header };