import React from "react";
import {NavLink} from "react-router-dom";

export default () => (

        <ul className="navbar-nav">
            <li className='nav-item'><NavLink exact to="/" className='nav-link'>Home</NavLink></li>

            <li className='nav-item'><NavLink to="/about" className='nav-link'>About</NavLink></li>
        </ul>

)

