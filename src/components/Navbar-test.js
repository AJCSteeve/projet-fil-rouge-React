import { NavLink } from 'react-router-dom'
import logo from './logo.svg';
function Navbar_test() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="nav-elements">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar_test;