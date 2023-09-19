import "./navbar.css"

import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTheaterMasks, faTicket} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">MyTicket
                    <FontAwesomeIcon icon={faTicket} /></span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    );
};
export default Navbar;