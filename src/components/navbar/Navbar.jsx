import "./navbar.css"
import { MenuItems } from "./MenuItems";
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTheaterMasks, faTicket} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">MyTicket
                    <FontAwesomeIcon icon={faTicket} /></span>
                <div className="navItems">
                    <ul className="navbar-ul">
                        {MenuItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.url} className="navButton">{item.Title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
