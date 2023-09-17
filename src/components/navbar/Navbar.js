import { Nav } from "react-bootstrap";
import { MenuItems } from "./MenuItems";
import './Navbar.css';

export default function Navbar() {
    return (
        <Nav className="NavbarItems">
            <h1 className="Navbar-logo">MyTicket</h1>
            <ul className="navbar-ul">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a  className={`nav-links ${item.colorClass}`}href={item.url}>{item.Title}</a>
                        </li>
                    );
                })}
            </ul>
        </Nav>
    );
}
