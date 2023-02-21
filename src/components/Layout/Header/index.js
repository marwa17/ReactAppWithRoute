import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Exercise</Link>
                    </li>
                </ul>
                <ul className="navLink">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/details">Details</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
