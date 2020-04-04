import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const navbar = () => {
    return (
        <nav>
            <div className="container">
                <a> how how </a>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar;