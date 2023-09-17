import { NavLink } from 'react-router-dom';
import { FaCheckSquare, FaListAlt } from 'react-icons/fa';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container">
                <div className="logo">Mettre Logo</div>
                <NavLink to="/tasks" className="navbar-brand">My Ticket</NavLink>
                <div className="nav-elements">
                    <ul>
                        <li className="nav-item">
                            <NavLink to="/######" className="nav-link" activeClassName="active"><FaListAlt /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/tickets/search" className="nav-link" activeClassName="active"><FaCheckSquare /></NavLink>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <NavLink to="/add-task" className="nav-link" activeClassName="active"><FaPlusSquare /></NavLink>*/}
                        {/*</li>*/}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Recherche" aria-label="Recherche" />
                        <button className="btn btn-outline-dark" type="submit">Rechercher</button>
                    </form>
                </div>
                {/*<button className="btn btn-outline-dark bg-light"><FaTrash /></button>*/}
            </div>
        </nav>
    );
}

export default NavBar;
